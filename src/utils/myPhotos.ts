const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const myPhotos = [
  {
    id: '1',
    src: 'images/collection/personalSessions/1.jpg',
    width: 1080,
    height: 800
  },
  {
    id: '2',
    src: 'images/collection/personalSessions/2.jpg',
    width: 1080,
    height: 1620
  }
];

const usePhotos = myPhotos.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: myPhotos
  }
});
