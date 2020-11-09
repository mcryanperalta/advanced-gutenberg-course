/**
 * Get Dependencies
 */

import classnames from "classnames";

const { getBlockType } = wp.blocks;
const { Button } = wp.components; 
const { dispatch, withSelect } = wp.data;

const BlockButton = ({block, isBlockSelected}) => {
    const blockType=getBlockType(block.name);
    if(isBlockSelected) console.log("Selected!",block.name);
    return (
        <Button 
            className={classnames("components-button editor-post-publish-button editor-post-publish-button__button ",{"is-primary":isBlockSelected},{"is-defaul":!isBlockSelected})}
            onClick = {()=> dispatch("core/editor").selectBlock(block.clientId)}
            >
                <span className="block-editor-block-icon has-colors">{blockType.icon.src}</span>{blockType.title}
        </Button>
    );
}

export default withSelect((select,ownProps) =>{
    const clientId = ownProps.block.clientId;
    return {
        isBlockSelected : select("core/editor").isBlockSelected(clientId)
    }
})(BlockButton);