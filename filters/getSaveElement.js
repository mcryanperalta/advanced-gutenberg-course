/**
 * Get Dependencies
*/
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;


addFilter(
    "blocks.getSaveElement",
    "mcblocks/get-save-element",
    extendWithGetSaveElement
);

function extendWithGetSaveElement( el, type, attributes ){

    console.log(el,type,attributes);
    if("core/quote" === type.name){
        return <div className="MYWRAPPER">{el}</div>
    }
    return el;
}