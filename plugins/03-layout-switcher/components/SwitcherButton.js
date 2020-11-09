

/**
 * Get dependencies
*/
const { __ } = wp.i18n;
const { dispatch,withDispatch } = wp.data;
const { Icon } = wp.components;

const SwitcherButton = ({
    label,
    icon,
    blockIds,
    removeBlocks,
    resetBlocks,
    insertBlock,
    insertBlocks,
    layouts
}) => {
    return (
        <button  
        onClick ={
            ()=> { 
                // removeBlocks(blockIds);
                resetBlocks([]);
                insertBlocks(layouts);
            }
        }
    >
        <Icon  icon={icon}/>
       <span> {label}</span>
    </button>
    );
}

export default withDispatch(dispatch =>{
const {removeBlocks, resetBlocks, insertBlocks, insertBlock} = dispatch("core/editor");

return {
    removeBlocks,resetBlocks,insertBlock,insertBlocks
}
})(SwitcherButton);
