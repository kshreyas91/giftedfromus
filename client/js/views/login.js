Modal.allowMultiple = true

Meteor.startup(function() {
    Template.login.events({
        'submit form': function(event){
            event.preventDefault();
            var emailVar = event.target.loginEmail.value;
            var passwordVar = event.target.loginPassword.value;
            Meteor.loginWithPassword(emailVar, passwordVar);
            Router.go('home');
//            $('#logIn').modal('hide');
            Modal.hide('logIn')
        },

        'click #signUp': function(event){
            e.preventDefault();

//            $('#logIn').modal('hide');
//            $('#signUp').modal('show');

            Modal.hide('logIn')
            Modal.show('signUp')
        }

    });    
});