/**
 * Immediately Invoked Function Expression Boilerplate
 */
;(function () {
	
  const root = document.documentElement;
 
  // Move radial relative to mouse cursor
  document.addEventListener('mousemove', evt => {

    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;

    x = x * 50;
    y = y * 150;

    x = -75 + x;
    y = -75 + y;

    root.style.setProperty('--mouse-x', x + '%');
    root.style.setProperty('--mouse-y', y + 'px');

  });

})();