const { __ } = wp.i18n;
const { dispatch, withSelect } = wp.data;
const { Button } = wp.components;

const DispatchDemo = ({blocks}) => (
    <div>
        <pre>
            <code>
                {"dispatchDemo()"}
            </code>
        </pre>

        <ul>
           {blocks.map(block =>(
                <li key={block.clientId}> 
                    {block.name} {" "}
                    <Button 
                        className="is-button is-default" 
                        onClick={() => {
                            dispatch("core/editor").removeBlock(block.clientId);
                        }}>
                        {__("X","mcblocks")}
                    </Button> 
                </li>
           ))}    
        </ul> 
        {console.log(blocks)}    
    </div>
)
export default withSelect((select) =>{
    return {
        blocks:select("core/editor").getBlocks()
    }
})(DispatchDemo)