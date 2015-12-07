/*
 * View logic for the createNewSurprise page
 */

Meteor.startup(function() {

  Template.createNewSurprise.events = {
    'submit .registration-form': function(event, template) {
      event.preventDefault();
      var formCampaignTitle = event.target.formCampaignTitle.value;
      var formGifteeName = event.target.formGifteeName.value;
      var formCampaignDate = new Date(event.target.formCampaignDate.value);
      var formCampaignEndDate = new Date(event.target.formCampaignEndDate.value);
      var formCampaignDesc = event.target.formCampaignDesc.value;
      var createdBy = Meteor.userId();

      var id= Surprises.insert({title: formCampaignTitle, name: formGifteeName, description: formCampaignDesc, date: formCampaignDate, endDate: formCampaignEndDate, createdBy: createdBy});
      //document.getElementById('showPublicURL').innerHTML = (location.origin + "/campaign/" +id);
      window.location.href = (location.origin + "/campaign/" +id);
    },
  };


});
