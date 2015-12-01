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
          return Surprises.find({createdBy:Meteor.userId()}, {sort: {name: 1}});
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
      return Surprises.find({createdBy:Meteor.userId()}).count();
    },

  }

  );


});
