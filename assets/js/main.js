/**
 * Immediately Invoked Function Expression Boilerplate
 */
;(function () {
	
  // Technique for this demo found here 
  // Very resource intensive :(
  // http://stackoverflow.com/questions/22003491/animating-canvas-to-look-like-tv-noise

  const canvas = document.querySelector('canvas.noise'),
  ctx = canvas.getContext('2d')

  canvas.width = canvas.height = 128

  resize();
  window.onresize = resize;

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio
    canvas.height = window.innerHeight * window.devicePixelRatio
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
  }

  function noise(ctx) {

    const w = ctx.canvas.width,
    h = ctx.canvas.height,
    iData = ctx.createImageData(w, h),
    buffer32 = new Uint32Array(iData.data.buffer),
    len = buffer32.length
    let i = 0

    for(; i < len;i++)

    if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

    ctx.putImageData(iData, 0, 0);
  }

  (function loop() {
    noise(ctx);
    requestAnimationFrame(loop);
  })();

})();