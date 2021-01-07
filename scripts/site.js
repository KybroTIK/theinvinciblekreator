function resizeCanvas() {
  var con = document.getElementById("homeContainer"),
    canvas = document.getElementById("renderTIK"),
    aspect = canvas.height / canvas.width,
    width = con.offsetWidth,
    height = con.offsetHeight;

  canvas.width = width;
  canvas.height = height;

  var con2 = document.getElementById("mobileView"),
    canvas2 = document.getElementById("renderMobile"),
    aspect = canvas.height / canvas.width,
    width = con2.offsetWidth,
    height = con2.offsetHeight;

  canvas2.width = width;
  canvas2.height = height;
}

function myFunction(x) {
  var mobile = document.getElementById("mobileView");
  var system = document.getElementById("systemView");
  if (x.matches) {
    // If media query matches

    system.style.display = "none";
    mobile.style.display = "block";
  } else {
    system.style.display = "block";
    mobile.style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 1000px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

window.onresize = resizeCanvas;

$(function () {
  resizeCanvas();
  var homeButton = $("#homeButton");
  var worksButton = $("#worksButton");
  var careers = $("#careers");
  var aboutUs = $("#aboutUs");

  homeButton.click(() => {
    $(".add-btn").addClass("active-nav");
    $("#worksButton").removeClass("active-nav");
    $("#careers").removeClass("active-nav");
    $("#aboutUs").removeClass("active-nav");
    $("#hPage").fadeIn(100);
    $(".works-portfolio").fadeOut(100);
    $(".career-page").fadeOut(100);
    $(".about-page").fadeOut(100);
  });

  worksButton.click(() => {
    $("#worksButton").addClass("active-nav");
    $("#homeButton").removeClass("active-nav");
    $("#careers").removeClass("active-nav");
    $("#aboutUs").removeClass("active-nav");
    $("#hPage").fadeOut(100);
    $(".works-portfolio").fadeIn(100);
    $(".career-page").fadeOut(100);
    $(".about-page").fadeOut(100);
  });

  careers.click(() => {
    $("#careers").addClass("active-nav");
    $("#worksButton").removeClass("active-nav");
    $("#homeButton").removeClass("active-nav");
    $("#aboutUs").removeClass("active-nav");
    $("#hPage").fadeOut(100);
    $(".works-portfolio").fadeOut(100);
    $(".career-page").fadeIn(100);
    $(".about-page").fadeOut(100);
  });

  aboutUs.click(() => {
    $(".about-page").css("display", "flex").fadeIn(100);
    $("#aboutUs").addClass("active-nav");
    $("#careers").removeClass("active-nav");
    $("#worksButton").removeClass("active-nav");
    $("#homeButton").removeClass("active-nav");
    $("#hPage").fadeOut(100);
    $(".works-portfolio").fadeOut(100);
    $(".career-page").fadeOut(100);
  });

  var canvas = document.getElementById("renderTIK");

  // engin is supported

  var engine1 = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

  var createScene1 = function () {
    // Create scene
    var scene1 = new BABYLON.Scene(engine1);

    // Default Environment
    var environment = scene1.createDefaultEnvironment({
      createSkybox: true,
      createGround: true,
      skyboxSize: 150,
      groundSize: 150,
      groundColor: BABYLON.Color3.Purple(),
      skyboxColor: new BABYLON.Color4(247, 0, 247, 0.904),
      enableGroundShadow: true,
      groundYBias: 1,
    });

    // Camera

    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      -Math.PI / 2,
      Math.PI / 2,
      1,
      BABYLON.Vector3.Zero(),
      scene1
    );
    camera.attachControl(canvas, true);

    camera.setPosition(new BABYLON.Vector3(20, 30, 100));

    camera.useBouncingBehavior = true;
    camera.useBouncingBehavior.transitionDuration = 450; //The transition time of the rebound effect
    camera.useBouncingBehavior.lowerRadiusTransitionRange = 0.5; //The range of the rebound when the closest distance is reached. The default value is 2
    camera.useBouncingBehavior.upperRadiusTransitionRange = -20; //Resilience distance when reaching the farthest distance, the default value is -2
    camera.useAutoRotationBehavior = true;
    camera.useFramingBehavior = true;

    // Limit camera radius
    camera.lowerRadiusLimit = 20;
    camera.upperRadiusLimit = 50;

    // Limit camera rotation

    camera.lowerAlphaLimit = -Math.PI / 2;
    // rotate left
    camera.upperAlphaLimit = Math.PI / 0;
    // rotate upper
    camera.lowerBetaLimit = Math.PI / 4;
    camera.upperBetaLimit = Math.PI / 2;

    // Enable VR
    var vrHelper = scene1.createDefaultVRExperience({
      createDeviceOrientationCamera: false,
    });
    vrHelper.enableTeleportation({
      floorMeshes: [environment.ground],
    });
    var building = BABYLON.SceneLoader.Append(
      "./models/",
      "tikright.glb",
      scene1
    );

    return scene1;
  };

  

  var engine1 = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });
  var scene1 = createScene1();
  engine1.runRenderLoop(function () {
    if (scene1) {
      scene1.render();
    }
  });
  
  engine1.hideLoadingUI();
  // Resize
  window.addEventListener("resize", function () {
    engine1.resize();
  });

  // second model

  var canvas2 = document.getElementById("renderMobile");

  // engin is supported

  var engine2 = new BABYLON.Engine(canvas2, true); // Generate the BABYLON 3D engine

  var createScene2 = function () {
    // Create scene
    var scene2 = new BABYLON.Scene(engine2);

    // Default Environment
    var environment = scene2.createDefaultEnvironment({
      createSkybox: true,
      createGround: true,
      skyboxSize: 150,
      groundSize: 150,
      groundColor: BABYLON.Color3.Purple(),
      skyboxColor: new BABYLON.Color4(247, 0, 247, 0.904),
      enableGroundShadow: true,
      groundYBias: 1,
    });

    // Camera

    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      -Math.PI / 2,
      Math.PI / 2,
      1,
      BABYLON.Vector3.Zero(),
      scene2
    );
    camera.attachControl(canvas, true);

    camera.setPosition(new BABYLON.Vector3(20, 30, 100));

    camera.useBouncingBehavior = true;
    camera.useBouncingBehavior.transitionDuration = 450; //The transition time of the rebound effect
    camera.useBouncingBehavior.lowerRadiusTransitionRange = 0.5; //The range of the rebound when the closest distance is reached. The default value is 2
    camera.useBouncingBehavior.upperRadiusTransitionRange = -20; //Resilience distance when reaching the farthest distance, the default value is -2
    camera.useAutoRotationBehavior = true;
    camera.useFramingBehavior = true;

    // Limit camera radius
    camera.lowerRadiusLimit = 40;
    camera.upperRadiusLimit = 60;

    // Limit camera rotation

    camera.lowerAlphaLimit = -Math.PI / 2;
    // rotate left
    camera.upperAlphaLimit = Math.PI / 0;
    // rotate upper
    camera.lowerBetaLimit = Math.PI / 4;
    camera.upperBetaLimit = Math.PI / 2;

    // Enable VR
    var vrHelper = scene2.createDefaultVRExperience({
      createDeviceOrientationCamera: false,
    });
    vrHelper.enableTeleportation({
      floorMeshes: [environment.ground],
    });
    var right = BABYLON.SceneLoader.Append("./models/", "tikphone.glb", scene2);

    return scene2;
  };

  var engine2 = new BABYLON.Engine(canvas2, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });
  var scene2 = createScene2();
  engine2.runRenderLoop(function () {
    if (scene2) {
      scene2.render();
    }
  });

  engine2.hideLoadingUI();

  // Resize
  window.addEventListener("resize", function () {
    engine2.resize();
  });
});
