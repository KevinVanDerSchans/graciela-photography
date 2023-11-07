import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import personalSessionsImages from "../../src/utils/personalSessionsImages";


function Contact() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum photos={personalSessionsImages} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={personalSessionsImages}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}

        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}

export default Contact;
