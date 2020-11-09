import SwitcherButton from "./SwitcherButton";
import ResetControls from "./ResetControls";

/**
 * Get dependencies
*/
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { withSelect,dispatch } = wp.data;
const { PanelBody, PanelRow, Icon } = wp.components;


const SwitcherControls = ({blocks,icons,layouts}) =>{
    let blocksArray = blocks.map(block => block.clientId);
    return(
        <Fragment>
            <PanelBody
                title={__( "Layout Choices","mcblocks" )}
                opened
            >
                <PanelRow className="layout-switcher">
                    <SwitcherButton 
                        icon={icons.hero} 
                        label={__("Hero","mcblocks")}
                        blockIds = {blocksArray}
                        layouts={layouts.hero}
                    />
                    <SwitcherButton 
                        icon={icons.featured} 
                        label={__("Featured","mcblocks")}
                        blockIds = {blocksArray}
                        layouts={layouts.featured}
                    />
                </PanelRow>
            </PanelBody>
            <PanelBody
                title={__( "Reset Layout","mcblocks" )}
                opened
            >
                <PanelRow className="layout-switcher">
                   <ResetControls layouts={layouts.default}/>
                </PanelRow>
            </PanelBody>
        </Fragment>
    
    )};

export default withSelect(select =>{
    return {
        blocks: select("core/editor").getBlocks()
    }
})(SwitcherControls);