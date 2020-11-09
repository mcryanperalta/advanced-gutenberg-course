/**
 * Get Dependencies
 */

const { __ } = wp.i18n;
const { withSelect } = wp.data;

import BlockItem from "./BlockItem";
const BlockList = ({blocks}) =>{
    // console.log(blocks);
    return (
        <ul className="mc-toc">
            {blocks.map(block =>(
              <BlockItem block = {block} />
            ))}
        </ul>
    );
}
export default withSelect(select =>{
    return {
        blocks:select("core/editor").getBlocks()
    }
})(BlockList);