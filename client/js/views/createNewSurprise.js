/*
 * View logic for the Cars page
 */

Meteor.startup(function() {

  Template.createNewSurprise.events = {
    'submit .registration-form': function(event, template) {
      event.preventDefault();
      var formCampaignTitle = event.target.formCampaignTitle.value;
      var formGifteeName = event.target.formGifteeName.value;
      var formBirthday = event.target.formBirthday.value;
      var formCampaignDate = event.target.formCampaignDate.value;
      var formCampaignDesc = event.target.formCampaignDesc.value;
      var createdBy = Meteor.userId();

      var id= Surprises.insert({title: formCampaignTitle, name: formGifteeName, description: formCampaignDesc, date: formCampaignDate, endDate: formCampaignDate, createdBy: createdBy});
      document.getElementById('showPublicURL').innerHTML = (location.origin + "/campaign/" +id);

    },
  };

});
