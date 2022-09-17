const canvas = document.getElementById("canvas_one");
let myFluid = new Fluid(canvas);

myFluid.PARAMS.sim_resolution = 128;
myFluid.PARAMS.dye_resolution = 512;

myFluid.PARAMS.paused = false;
myFluid.PARAMS.embedded_dither = true;

myFluid.PARAMS.dissipation = 0.97;
myFluid.PARAMS.velocity = 0.98;
myFluid.PARAMS.pressure = 0.8;
myFluid.PARAMS.pressure_iteration = 20;
myFluid.PARAMS.curl = 0;
myFluid.PARAMS.emitter_size = 0.5;

myFluid.PARAMS.render_shaders = true;
myFluid.PARAMS.multi_color = true;

myFluid.PARAMS.render_bloom = false;
myFluid.PARAMS.bloom_iterations = 8;
myFluid.PARAMS.bloom_resolution = 256;
myFluid.PARAMS.intensity = 0.8;
myFluid.PARAMS.threshold = 0.6;
myFluid.PARAMS.soft_knee = 0.7;

// myFluid.PARAMS.background_color = { r: 255, g: 255, b: 255 };
myFluid.PARAMS.transparent = true;

myFluid.activate();
