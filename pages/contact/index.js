import React from "react";

/*
import Lightbox from "react-images";
import { Gallery } from "react-grid-gallery";

const images = [
  {
    id: 0,
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 1,
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    id: 2,
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    original: "httpsc4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
    original: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
    width: 320,
    height: 213,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
];



const Contact = () => {
  const [index, setIndex] = useState(-1);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const currentImage = images[index];

  const nextIndex = (index + 1) % images.length;
  const prevIndex = (index + images.length - 1) % images.length;

  const handleClick = (index) => {
    setIndex(index);
    setLightboxIsOpen(true);
  };

  const handleClose = () => {
    setIndex(-1);
    setLightboxIsOpen(false);
  };

  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Gallery images={images} onClick={handleClick} enableImageSelection={false} />

      <Lightbox
        images={images.map((image) => ({
          id: image.id,
          src: image.original,
          caption: image.caption,
          // Otras propiedades personalizadas del objeto de imagen
        }))}
        isOpen={lightboxIsOpen}
        currentImage={index}
        onClickPrev={handleMovePrev}
        onClickNext={handleMoveNext}
        onClose={handleClose}
      />
    </div>
  );
};

export default Contact;
*/


function Contact () {
  return (
    <>
      <span>test</span>
    </>
  )
};

export default Contact;
