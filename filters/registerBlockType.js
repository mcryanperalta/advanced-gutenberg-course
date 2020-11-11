
/**
 * Get Dependencies
*/
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;

addFilter(
    "blocks.registerBlockType",
    "mcblocks/extending-register-block-type",
    extendWithRegisterBlockType
)

function extendWithRegisterBlockType( settings, name ){

    //Check for block type
    if ( name === "core/code" ){

        settings.title = __("Code Snippet MC","mcblocks");

        //Change the block description
        settings.description =  __("Yes this is hacked.!","mcblocks");

        //change category
        settings.category = "mcblocks";

        //Change icon
        settings.icon = "admin-tools";
        
        //change keywords
        if( settings.keywords ){
            settings.keywords.push(__("Code Snippet MC","mcblocks"))
        } else {
            settings.keywords = [
                __("Code Snippet MC","mcblocks")
            ]
        }

        //change support
        settings.supports = Object.assign({},settings.supports,{
            html:true
        });

        //edit attributes
        settings.attributes.mc={
            type:"string",
            default:"Default tet"
        }

        // settings.edit = props => <p>OVERRIDE</p>;
        // settings.save = props => <p>OVERRIDE</p>;

    }
    return settings;
}