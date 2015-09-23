Meteor.startup(function() {

  var getId = function() {
    var templateData;
    templateData = Session.get('templateData');
    if (templateData) {
      return templateData.id;
    } else {
      return '';
    }
  };



  Template.testData.helpers({
    data: function() {
      return getId();
    },
  });
});
