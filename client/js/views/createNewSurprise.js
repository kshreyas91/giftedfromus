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
      var formPledgeGoal = event.target.formPledgeGoal.value;
      var formCampaignDesc = event.target.formCampaignDesc.value;
      var createdBy = Meteor.userId();

      var id= Surprises.insert({title: formCampaignTitle, name: formGifteeName, description: formCampaignDesc, date: formCampaignDate, pledgeGoal: formPledgeGoal, endDate: formCampaignEndDate, createdBy: createdBy});
      //document.getElementById('showPublicURL').innerHTML = (location.origin + "/campaign/" +id);
      Meteor.call('sendEmail',Meteor.user().emails[0].address,formCampaignTitle);
      //Email.send({to:'franksli@gmail.com', from:'franksli@gmail.com', subject:'Thank you for signing up for our project', text:'We will share with you some news about us in a near future. See you soon!'});
      window.location.href = (location.origin + "/campaign/" +id);
    },
  };


});
