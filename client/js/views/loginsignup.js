Modal.allowMultiple = true;

Meteor.startup(function() {
    Template.loginsignup.events({
        'submit .login-form': function(event){
            event.preventDefault();
            var emailVar = event.target.loginEmail.value;
            var passwordVar = event.target.loginPassword.value;

            Meteor.loginWithPassword(emailVar, passwordVar);
            Router.go('home');
            // console.log("yooo");
            // console.log($("#Loginsignup"));
            $("#Loginsignup").hide();
            $(".modal-backdrop").hide();
            
            // Modal.hide('loginsignup');

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
            Router.go('home');
            $("#Loginsignup").hide();
            $(".modal-backdrop").hide();

        },

    });    
});