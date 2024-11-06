const panoImage = document.querySelector(".pano-image");
const kucaPano = "../images/kuca/360-mirko-logo-2.jpg";

const panorama = new PANOLENS.ImagePanorama(kucaPano);
const viewer = new PANOLENS.Viewer({
  container: panoImage,
  autoRotate: true,
  autoRotateSpeed: 1.0,
  controlButtons: ["fullscreen"],
});

viewer.add(panorama);

const panoImageSecond = document.querySelector(".pano-image-second");
const kucaPanoSecond = "../images/kuca/360.jpg";

const panoramaSecond = new PANOLENS.ImagePanorama(kucaPanoSecond);
const viewerSecond = new PANOLENS.Viewer({
  container: panoImageSecond,
  autoRotate: true,
  autoRotateSpeed: 1.0,
  controlButtons: ["fullscreen"],
});

viewerSecond.add(panoramaSecond);
