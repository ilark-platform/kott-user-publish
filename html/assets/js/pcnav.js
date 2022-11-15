"use strict";
document.addEventListener('DOMContentLoaded', () => {
  DropdownMenu.init();
});

function DropdownMenu(elem) {
  this.button = elem;
  
  const targetId = this.button.dataset.menu;
  this.target = document.getElementById(targetId);
  
  const content = this.target.children[0];
  this.contentHeight = content.clientHeight;
  
  this.handleEvent();
}

DropdownMenu.prototype.handleEvent = function() {
  this.button.addEventListener('mouseover', this.open.bind(this));
  this.button.addEventListener('mouseout', this.close.bind(this));
};

DropdownMenu.prototype.open = function() {
  this.target.style.height = this.contentHeight + 'px';
};

DropdownMenu.prototype.close = function() {
  this.target.style.height = '0';
};

DropdownMenu.init = function() {
  const menus = document.querySelectorAll('[data-menu]');
  menus.forEach(menu => new DropdownMenu(menu));
};


/* 헤더 검색 */ 
document.querySelectorAll( '.pc-header' ).forEach( function( item1, index1 ) {
  document.querySelectorAll( '.search-toggle' ).forEach( function( item2, index2 ) {
      item2.addEventListener( 'click', function( e ) {
          var selector = item2.dataset[ 'selector' ];

          document.querySelector( selector ).classList.toggle( 'show' );
          document.querySelector( selector + ' .field-group__input' ).focus();
          item2.classList.toggle( 'active' );
          if (item2.classList.contains('active')) {
            item2.innerHTML = '<i class="icon close"></i>';
          } else {
            item2.innerHTML = '<i class="icon search"></i>';
          }
          e.preventDefault();
      } )
  } )
} )