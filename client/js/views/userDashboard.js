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
        var result = new Array;
        var surprise= Surprises.find({createdBy:Meteor.userId()});
        var d = new Date();
        Surprises.find({createdBy:Meteor.userId()}).map(function(doc) {
          if (doc.endDate>=d) {
            result.push(doc) ;
          }
        });
        return result;
      },

    endedSurprise: function(){
        var result = new Array;
        var surprise= Surprises.find({createdBy:Meteor.userId()});
        var d = new Date();
        Surprises.find({createdBy:Meteor.userId()}).map(function(doc) {
          if (doc.endDate<d) {
            result.push(doc) ;
          }
        });
        return result;
      },

    totalRaised:function(){
      pledgedTotal = 0;
      Surprises.find({createdBy:Meteor.userId()}).map(function(doc){
        Pledge.find({campaignId:doc._id}).map(function(doc2){
          pledgedTotal += doc2.pledgeAmount;
        });
      });

      return pledgedTotal;
    },

    totalActiveCampaigns:function(){
      totalActiveCampaigns = 0;
      var d = new Date();
      Surprises.find({createdBy:Meteor.userId()}).map(function(doc) {
        if (doc.endDate>=d) {
          totalActiveCampaigns+=1;
        }
      });
      return totalActiveCampaigns;
    },

    totalEndedCampaigns:function(){
      totalEndedCampaigns = 0;
      var d = new Date();
      Surprises.find({createdBy:Meteor.userId()}).map(function(doc) {
        if (doc.endDate<d) {
          totalEndedCampaigns+=1;
        }
      });
      return totalEndedCampaigns;
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



  });

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

