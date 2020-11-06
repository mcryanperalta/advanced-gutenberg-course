const { __ } = wp.i18n;
const { withDispatch, withSelect } = wp.data;
const { compose } = wp.compose;
const {Button} = wp.components;

const WithComposeDemo = ({blocks,removeBlock}) => (
    <div>
        <pre>
            <code>
                {"compose([])(WithDispatchDemo)"}
            </code>
        </pre>

        <ul>
           {blocks.map(block =>(
                <li key={block.clientId}> 
                    {block.name} {" "} 
                    <Button 
                        className="is-button is-defaul" 
                        onClick={()=>
                            removeBlock(block.clientId)
                        }>{__("X","mcblocks")}</Button>
                </li>
           ))}    
        </ul> 
        {console.log(blocks)}    
    </div>
)
export default compose([
    withSelect((select) =>{
            return {
                blocks:select("core/editor").getBlocks()
            }
        }
    ),
     withDispatch((dispatch) => {
        return {
            removeBlock: dispatch("core/editor").removeBlock
        }
    })
])(WithComposeDemo)