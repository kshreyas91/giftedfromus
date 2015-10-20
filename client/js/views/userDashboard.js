Meteor.startup(function() {

  // Session.set('loggedInUserID', Meteor.user()._id);
  //   }

  Template.userDashboard.events({
    'click .createNewSurprise': function(event, template) {
      
      window.document.location ="/createNewSurprise";

      }
      });

  Template.userDashboard.helpers({
     'surprise': function(){
          return Surprises.find({createdBy:Meteor.userId()}, {sort: {name: 1}});
      }
  });


});
