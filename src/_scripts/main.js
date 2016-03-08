// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});


//TODO: This can be cleaned up using a for each/iteration.
$(function() {
    $('#about-matt-link').click(function() {
        $('html, body').animate({scrollTop:$('#about-matt').offset().top}, 500);
    });
    $('#portfolio-link').click(function() {
        $('html, body').animate({scrollTop:$('#portfolio').offset().top}, 500);
    });
    $('#contact-link').click(function() {
        $('html, body').animate({scrollTop:$('#contact').offset().top}, 500);
    });
    $('#see-portfolio').click(function() {
        $('html, body').animate({scrollTop:$('#portfolio').offset().top}, 500);
    });
});


