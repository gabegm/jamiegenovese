/**
 *
 * PROJECT: jamiegenovese.com
 * LICENCE: Copyright 2015 Gabriel Gauci Maistre
 * FILE: js/functions.js
 * PURPOSE: The functions used for our theme.
 * DEVELOPERS: Gabriel Gauci Maistre <gabriel@gaucimaistre.com>
 *
 */

//Vertical mouse wheel scroll
jQuery( document ).ready( function( $ ) {
    // Smooth Horizontal Scroll with Mouse
    this.$container = $('.wrapper');
    var self = this;
    this.$container.on('mousewheel', function(event) {
        self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaY * event.deltaFactor ) );
    });
});

// Elevator scroll back to top script
window.onload = function() {
    var elevator = new Elevator({
        element: document.querySelector('.elevator')
    });
}