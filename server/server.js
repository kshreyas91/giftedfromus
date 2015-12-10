/*
 * The main server file, general server side code should go here
 */
Meteor.startup(function () {
 process.env.MAIL_URL = 'smtp://postmaster%40sandbox83585ee904b441b1852a714b7a53d33d.mailgun.org:85535883b148234c4d00a8f4c51e43e7@smtp.mailgun.org:587';
 //Email.send({to:'franksli@gmail.com', from:'franksli@gmail.com', subject:'1Thank you for signing up for our project', text:'We will share with you some news about us in a near future. See you soon!'});
});

  // on the server, we create the sendEmail RPC function
  Meteor.methods({
    sendEmail: function(email, name) {
      // send the email!
      var subject = 'Your Campaign '+name+' has been created';
       Email.send({to:email, from:'franksli@gmail.com', subject: subject, text:'We will share with you some news about us in a near future. See you soon!'});
	}
  });

// Set permissions on the users collection
Meteor.users.allow({

  // A user can update their own record
  update: function(userId, doc) {
    return userId == this.userId
  }
});

