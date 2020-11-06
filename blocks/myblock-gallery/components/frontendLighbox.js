import Gallery from "react-photo-gallery";
import Carousel, {ModalGateway,Modal} from "react-images";
import React, { useState, useCallback } from "react";

export default function FrontendLightBox(props) {
const {photos} = props;
const [currentImage, setCurrentImage] = useState(0);
const [viewerIsOpen, setViewerIsOpen] = useState(false);

const openLightbox = (event, { photo, index }) => {
  setCurrentImage(index);
  setViewerIsOpen(true);
  console.log(viewerIsOpen,currentImage,photo);
};

const closeLightbox = () => {
  setCurrentImage(0);
  setViewerIsOpen(false);
};

return (
  <div>
    <Gallery photos={photos} onClick={openLightbox} />
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={photos.map(x => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
          />
          </Modal>
      ) : null}
    </ModalGateway>
  </div>
);
}