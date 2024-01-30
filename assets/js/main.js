/**
 * Immediately Invoked Function Expression Boilerplate
 */
;(function () {
	
  // Technique for this demo found here 
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


  // 
  // ALTERNATIVE SOLUTION
  //
  /*
  // Get the canvas element
  var c = document.querySelector("canvas.noise");
  var w = c.width;
  var h = c.height;

  // Create an off-screen canvas
  var ocanvas = document.createElement("canvas");
  // set offscreen canvas x2 size
  ocanvas.width = w<<1;                               
  ocanvas.height = h<<1;

  var octx = ocanvas.getContext("2d", {alpha: false});
  var idata = octx.createImageData(ocanvas.width, ocanvas.height);
  // get 32-bit view
  var buffer32 = new Uint32Array(idata.data.buffer);  

  // render noise once, to the offscreen-canvas
  noise(octx);

  // main loop draw the offscreen canvas to random offsets
  var ctx = c.getContext("2d", {alpha: false});
  (function loop() {
    var x = (w * Math.random())|0; // force integer values for position
    var y = (h * Math.random())|0;
    
    ctx.drawImage(ocanvas, -x, -y); // draw static noise (pun intended)
    requestAnimationFrame(loop)
  })()

  function noise(ctx) {
    var len = buffer32.length - 1;
    while(len--) buffer32[len] = Math.random() < 0.5 ? 0 : -1>>0;
    ctx.putImageData(idata, 0, 0);
  }
  */

})();