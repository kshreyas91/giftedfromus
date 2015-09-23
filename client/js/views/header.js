/*
    View logic for the header component
 */

Meteor.startup(function() {

  Template.componentHeader.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        window.location.href = "/";
    }
  });

  Template.componentHeader.helpers({
    loggedIn: function() {
      return Meteor.userId() != null;
    },

    name: function() {
      if ((Meteor.userId() != null) && (Meteor.user() != null) && (Meteor.user().profile != null)) {
        return Meteor.user().profile.name;
      } else {
        return '';
      }
    }
  });
});
