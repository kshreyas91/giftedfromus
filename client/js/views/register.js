Template.register.events({
    'submit .registration-form': function(event) {
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var name = event.target.registerName.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile: {name: name}
        });
       // Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.name":name}})
        Meteor.loginWithPassword(emailVar, passwordVar);
        Router.go('home')
    }

    
});