Meteor.startup(function() {

  // Session.set('loggedInUserID', Meteor.user()._id);
  //   }

  Template.userDashboard.events({
    'click .createNewSurprise': function(event, template) {
      
      window.document.location ="/createNewSurprise";

      }
      });

  Template.userDashboard.helpers({
    name: function() {
      if ((Meteor.userId() != null) && (Meteor.user() != null) && (Meteor.user().profile != null)) {
        name = Meteor.user().profile.name;
        return name.charAt(0).toUpperCase() + name.slice(1);
      } else {
        return '';
      }
    },

    surprise: function(){
          var surprise= Surprises.find({createdBy:Meteor.userId()}, {sort: {name: 1}});
          return surprise;
      },

    totalCampaigns:function(){
      return Surprises.find({createdBy:Meteor.userId()}).count();
    },

    totalActiveCampaigns:function(){
      return Surprises.find({createdBy:Meteor.userId()}).count();
    },

    totalEndedCampaigns:function(){
      return Surprises.find({createdBy:Meteor.userId()}).count();
    },

    percentFunded:function(){
      fundedSurprises = 0;

      Surprises.find({createdBy:Meteor.userId()}).map(function(doc){

        pledgedTotal = 0;

        Pledge.find({campaignId:doc._id}).map(function(doc2){
          pledgedTotal += doc2.pledgeAmount;
        });

        if (pledgedTotal > doc.pledgeGoal){
          fundedSurprises += 1;
        }

      });

      totalCampaigns = Surprises.find({createdBy:Meteor.userId()}).count();

      return Math.round(fundedSurprises/totalCampaigns * 100);
    },

    userPledges:function(){
      var userPledges = 0;

      Pledge.find({pledgedBy: Meteor.userId()}).map(function(doc){
        userPledges += doc.pledgeAmount;
      });

      return userPledges;
    }


  });

Template.userDashboard.rendered = function drawChart() {
    //clear the contents of the div, in the event this function is called more than once.
    $('#myfirstchart').empty();

    var pledgeData = {};

    Pledge.find({pledgedBy: Meteor.userId()}).map(function(doc){
      var surpriseId = doc.campaignId;

      var surprise = Surprises.findOne({_id:surpriseId}).title;

      var pledgeAmount = doc.pledgeAmount;
      if (surprise in pledgeData){
        pledgeData[surprise] += pledgeAmount;
      } else {
        pledgeData[surprise] = pledgeAmount;
      }
    });

    console.log(pledgeData);

    var data = [];

    for (key in pledgeData){
        var newObj = {label: key, value:pledgeData[key]};
        data.push(newObj);
    }

    console.log(data);  

    if (data) {
        new Morris.Donut({
            element: 'myfirstchart',
            data:    data
        });

      }
  }

_
  Surprises.helpers({

    pledgedAmount: function(){
      pledgedTotal = 0;
      Pledge.find({campaignId:this._id}).map(function(doc){
          pledgedTotal += doc.pledgeAmount;
      });

      return pledgedTotal;
    }
  });

});

