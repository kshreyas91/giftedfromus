/*
    View logic for the header component
 */

Meteor.startup(function() {

  Template.componentHeader.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        window.location.href = "/";
    },

    'click .signup-link': function(event){
        $('ul.nav-tabs li:last-child').removeClass('active');
        $('ul.nav-tabs li:first-child').addClass('active');
        $('div.tab-content div.tab-pane:last-child').removeClass('active');
        $('div.tab-content div.tab-pane:first-child').addClass('active');
    },

    'click .login-link': function(event){
        $('ul.nav-tabs li:first-child').removeClass('active');
        $('ul.nav-tabs li:last-child').addClass('active');
        $('div.tab-content div.tab-pane:first-child').removeClass('active');
        $('div.tab-content div.tab-pane:last-child').addClass('active');
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
