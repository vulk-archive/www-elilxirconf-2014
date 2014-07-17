/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

  function init() {

    var overlay = document.querySelector( '.modal-overlay' );

    [].slice.call( document.querySelectorAll( '.modal-trigger' ) ).forEach( function( el, i ) {

      var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
        close = modal.querySelector( '.modal-close' );

      function removeModal( hasPerspective ) {
        classie.remove( modal, 'modal-show' );

        if( hasPerspective ) {
          classie.remove( document.documentElement, 'modal-perspective' );
        }
      }

      function removeModalHandler() {
        removeModal( classie.has( el, 'modal-setperspective' ) );
      }

      el.addEventListener( 'click', function( ev ) {
        classie.add( modal, 'modal-show' );
        overlay.removeEventListener( 'click', removeModalHandler );
        overlay.addEventListener( 'click', removeModalHandler );

        if( classie.has( el, 'modal-setperspective' ) ) {
          setTimeout( function() {
            classie.add( document.documentElement, 'modal-perspective' );
          }, 25 );
        }
      });

      close.addEventListener( 'click', function( ev ) {
        ev.stopPropagation();
        removeModalHandler();
      });

    } );

  }

  init();

})();