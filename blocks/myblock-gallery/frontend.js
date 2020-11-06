
import FrontendLightBox from "./components/frontendLighbox";
// import domReady from '@wordpress/dom-ready';
import {render} from "react-dom"; 
document.addEventListener("DOMContentLoaded", function(e) {
    // const { render } = wp.element;
    const  galleries = document.querySelectorAll('.wp-block-mcblocks-gallery')  

    galleries.forEach(gallery =>{
        const direction = gallery.dataset.direction;
        const islightboxenabled = gallery.dataset.islightboxenabled;
        const images = gallery.querySelectorAll("img");
        
        const photos = []
        images.forEach(img =>{
            photos.push({
                src: img.src,
                width: img.width,
                height: img.height,
                alt: img.alt,
                caption: img.title,
            })
        });
        console.log('this photos',photos)
        
        render( <FrontendLightBox photos={photos} direction={direction} />,gallery);
    });
});