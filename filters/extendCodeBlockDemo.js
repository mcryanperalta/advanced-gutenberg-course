
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, ToggleControl } = wp.components;
const { createHigherOrderComponent } = wp.compose;

import classnames from "classnames";

addFilter(
    "blocks.registerBlockType",
    "mcblocks/add-code-attributes",
    addCodeAttributes
);

addFilter(
    "editor.BlockEdit",
    "mcblocks/add-code-inspector-controls",
    addCodeInspectorControls
);

addFilter(
    "blocks.getSaveElement",
    "mcblocks/modify-code-save settings",
    modifyCodeSaveSettings
);

function addCodeAttributes( settings, name ){
    
    if("core/code" !== name)return settings;

    settings.supports = lodash.merge({},
        settings.supports,{
            align:["full","wide"]
    });
    settings.attributes.align = {
        type:"string",
        default:"full"
    }    
    settings.attributes.highContrast = {
        type:"boolean",
        default:false
    }

    return settings;

}

function addCodeInspectorControls( BlockEdit ){

    const withInspectorControls = createHigherOrderComponent ( BlockEdit  => {
        return props => {
            if( "core/code" !== props.name) return <BlockEdit {...props} />

            return (
                <Fragment>
                    <div className={classnames({ 
                                "high-contrast":props.attributes.highContrast 
                            })}
                    >
                        <BlockEdit {...props} />
                    </div>
                    <InspectorControls>
                        <PanelBody
                        title ={__("Custom Settings","mcblocks")}
                        >
                            <ToggleControl
                                label={__("High Contrast","mcblocks")}
                                checked = {props.attributes.highContrast}
                                onChange = {highContrast =>{
                                    props.setAttributes({highContrast});
                                }}
                            >

                            </ToggleControl>
                        </PanelBody>
                    </InspectorControls>
                </Fragment>
            );
        }
    
    });

    return withInspectorControls(BlockEdit);
}

function modifyCodeSaveSettings( el, block, attributes) {

    if(("core/code" === block.name) && attributes.highContrast) {
        el.props.className = classnames(el.props.className,{
            "high-contrast":attributes.highContrast
        })
    }

    return el;
}
