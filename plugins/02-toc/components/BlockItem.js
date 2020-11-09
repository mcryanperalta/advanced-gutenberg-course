/**
 * Get Dependencies
 */
import BlockButton from "./BlockButton";

const { __ } = wp.i18n;
const { withSelect } = wp.data;

const BlockItem = ({block}) =>{
    let childBlocks = null;
    // console.log(block.innerBlocks);
    if(block.innerBlocks){
        childBlocks = block.innerBlocks.map(innerBlocks =>(
            <BlockItem block={innerBlocks} />
        ));
    }
    return (
         <li key={block.clientId}>
             <BlockButton block= {block} />
             {/* {block.name} */}
             {childBlocks && 
                <ul>
                   {childBlocks}
                </ul>}
         </li>
        );
} 

export default BlockItem;