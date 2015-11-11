/*
    View logic for the sidebar component
 */

Meteor.startup(function() {

  Template.sidebar.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        window.location.href = "/";
    }
  });

  Template.sidebar.helpers({
    loggedIn: function() {
      return Meteor.userId() != null;
    },

    name: function() {
      if ((Meteor.userId() != null) && (Meteor.user() != null) && (Meteor.user().profile != null)) {
        return Meteor.user().profile.name;
      } else {
        return '';
      }
    },

    surprise: function(){
      return Surprises.find({createdBy:Meteor.userId()}, {sort: {name: 1}});
    }
  });
});
