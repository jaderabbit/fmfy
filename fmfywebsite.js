if (Meteor.isClient) {
  Template.body.rendered = function() {
      // cache the window object
       $window = $(window);
       debugger;
      console.log("here");
       $('section[data-type="background"]').each(function(){
         // declare the variable to affect the defined data-type
         debugger;
         var $scroll = $(this);
          console.log("scrolly");               
          $(window).scroll(function() {
            console.log("blergh");
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards                             
            var yPos = -($window.scrollTop() / $scroll.data('speed')); 
             
            // background position
            var coords = '50% '+ yPos + 'px';
     
            // move the background
            $scroll.css({ backgroundPosition: coords });    
          }); // end window scroll
       });  // end section function
  };
 
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
