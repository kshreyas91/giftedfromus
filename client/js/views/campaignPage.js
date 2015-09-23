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



  Template.campaignPage.helpers({
    data: function() {
      return Surprises.findOne({
        _id: getId()
      });
    },
  });
});
