/**
 * Immediately Invoked Function Expression Boilerplate
 */
;(function () {
	
  // Vars
  const root = document.documentElement;

  /**
   * Mosemove event listener
   */
  document.addEventListener('mousemove', evt => {
    let x = evt.clientX;
    let y = evt.clientY;
    
    radialSticky(x, y);
  });

  /**
   * Move the radial to the exact mouse position.
   */
  function radialSticky(x, y) {
    x = 'calc(' + x + 'px - 50%)';
    y = 'calc(' + y + 'px - 50%)';

    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
  }

})();