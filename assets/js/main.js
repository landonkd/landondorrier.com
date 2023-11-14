/**
 * Immediately Invoked Function Expression Boilerplate
 */
;(function () {
	
  // const mediaQueryMinTablet = window.matchMedia('(min-width: 750px)');
  const root = document.documentElement;

  // Move radial relative to mouse cursor
  document.addEventListener('mousemove', evt => {

    // Option 1: sort of sticky to the center of viewport
    // let x = evt.clientX / innerWidth;
    // let y = evt.clientY / innerHeight;
    // x = x * 50;
    // y = y * 150;
    // x = -75 + x;
    // y = -75 + y;

    // Option 2: sticky directly to center of mouse cursor
    let x = evt.clientX;
    let y = evt.clientY;

    x = 'calc(' + x + 'px - 50%)';
    y = 'calc(' + y + 'px - 50%)';

    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);

  });

})();