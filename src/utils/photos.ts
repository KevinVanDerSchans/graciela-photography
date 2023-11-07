const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
  { src: '/images/collection/personalSessions/1.jpg', width: 1080, height: 800 },
  { src: '/images/collection/personalSessions/2.jpg', width: 1080, height: 1620 },
  { src: '/images/collection/personalSessions/3.jpg', width: 1080, height: 720 },

];

photos.forEach((photo) => {
  photo = breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: `/images/collection/personalSessions/1.jpg/${breakpoint}x${height}`,
      width: breakpoint,
      height,
    };
  });
});

export default photos;
