Modal.allowMultiple = true

Meteor.startup(function() {
    Template.loginsignup.events({
        'submit .login-form': function(event){
            event.preventDefault();
            var emailVar = event.target.loginEmail.value;
            var passwordVar = event.target.loginPassword.value;

            Meteor.loginWithPassword(emailVar, passwordVar);
            Router.go('home');
            Modal.hide('loginsignup');
            $('#loginsignup').modal('hide');
        },

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
        },

    });    
});