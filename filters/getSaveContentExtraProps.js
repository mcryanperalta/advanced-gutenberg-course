const { addFilter } = wp.hooks;
import classnames from "classnames";

offscreenBuffe
addFilter(
    "blocks.getSaveContent.extraProps",
    "mcblocks/get-save-content-extra-props",
    extendWithGetSaveContentExtraProps
)

function extendWithGetSaveContentExtraProps( props ){

    //add class of "no-citation if quote has no ctaation
    if("wp-block-quote" ===props.className && !props.children[1]){
        var_dump(props);
            return lodash.merge(props,{
                className:classnames(props.className,"no-citation")
            });
    }


    if("wp-block-code" ===props.className){
        return lodash.merge(props,{
            style:{
                backgroundColor: "black",
                color:"white"    
            }
        })
    }
    return props;
}