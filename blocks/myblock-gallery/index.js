/* *
* Block Dependencies
*/
// import icon from './icon';
import './style.scss';

import Gallery from "react-photo-gallery";
/**
 * Block libraries
*/

const { __} = wp.i18n;
const { Fragment} = wp.element;
const { registerBlockType } = wp.blocks;
const {BlockControls, MediaUpload, MediaPlaceholder, InspectorControls } = wp.editor;
const { PanelBody, PanelRow, RadioControl,IconButton, Toolbar } = wp.components;

/**
 * Register Block
 */

 export default registerBlockType("mcblocks/gallery",{
     title: __("MCGallery","mcblocks"),
     description:__("A gallery representation by mc","mcblocks"),
     icon:"format-gallery",
     category:"mcblocks",
     keywords:[
        __("Images Media Lightbox","mcblocks"),
        __("gallery photo","mcblocks"),
        __("collage upload","mcblocks")
     ],
     attributes:{
         images:{
             type:"array",
             default:[]
         },
         direction:{
             type:"string",
             default:"row"
         },
         isLightboxEnabled:{
             type:"boolean",
             default:false
         }
     },
     supports:["full","wide"],
     edit:props=>{
         const { 
             setAttributes, 
             attributes:{ images, direction },
             className
            } = props;
         const onSelectImages = newImages => {
            var images = newImages.map(img =>{
                return {
                            src:img.sizes.large.url,
                            height:img.sizes.large.height,
                            width:img.sizes.large.width,
                            id:img.id,
                            caption:img.caption,
                            alt:img.alt,
                        }
            });
            // console.log(images.map(img=>img.id));
            setAttributes({ images});
         };
         return( 
             <Fragment>
                 <InspectorControls>
                     <PanelBody title= {__("Gallery Setting","mcblocks")} initialOpen={true}>
                        <PanelRow>
                            <RadioControl 
                                label={__("Grid Style","mcblocks")}
                                selected={direction}
                                options={[
                                    {label: __("Row","mcblocks"), value:"row" },
                                    {label: __("column","mcblocks"), value:"column" }
                                ]}
                                onChange={direction => setAttributes({direction})}
                            />
                        </PanelRow>
                     </PanelBody>
                 </InspectorControls>
               {!! images.length && (
                   <BlockControls>
                       <Toolbar>
                           <MediaUpload 
                                allowedTypes={['images']}
                                multiple
                                gallery
                                value={images.map(img=>img.id)}
                                onSelect={onSelectImages}
                                render = {({open}) =>(
                                    <IconButton 
                                        className="components-toolbar__control"
                                        label={__("Edit Gallery","mcblocks")}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                           />
                       </Toolbar>
                   </BlockControls>
               )}
                <div className = {`${className} ${direction}`}>
                    {!!! images.length ? (

                        <MediaPlaceholder 
                            labels={{
                                title:__("Gallery","mcblocks"),
                                instructions:__("Drag and drop image or click the button and select the file. ANY WILL DO :)","mcblocks"),
                            }}
                            icon="format-gallery"
                            accept="images/*"
                            multiple
                            onSelect={onSelectImages}
                        />
                    ) : ( 
                        <Gallery photos={images} direction={direction} />
                        )
                    
                    }
                </div>
            </Fragment>
         );
       
     },
     save:props=>{
         const {attributes:{images,direction, isLightboxEnabled},className} = props;
        return( 
            <div className={direction} id="test-data"  data-direction={direction} data-isLightboxEnabled={isLightboxEnabled}>
                 {images.map(img =>(
                     <img src={img.src} title={img.caption} width={img.width} height={img.height} alt = {img.alt}/>
                 ))}
             </div>
            );
    },
 });

