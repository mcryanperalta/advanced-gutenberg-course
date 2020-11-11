
import classnames from "classnames";
const { addFilter } = wp.hooks;


addFilter(
    "blocks.getBlockDefaultClassName",
    "mcblocks/custom-cover-block-class-name",
    customCoverClassName
)

function customCoverClassName( className, name) {

    if("core/cover" === name){
        //This will orvverride the class
        return classnames(className,"mcblock-covers");
    }
    return className;
}