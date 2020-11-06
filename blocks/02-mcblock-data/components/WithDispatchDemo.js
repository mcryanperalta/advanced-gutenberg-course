const { __ } = wp.i18n;
const { dispatch, withSelect } = wp.data;
const { Button } = wp.components;

import DeleteButton from "./DeleteButton"
const WithDispatchDemo = ({blocks}) => (
    <div>
        <pre>
            <code>
                {"WithdispatchDemo(()=>{})(WithDispatchDemo)"}
            </code>
        </pre>

        <ul>
           {blocks.map(block =>(
                <li key={block.clientId}> 
                    {block.name} {" "} <DeleteButton clientId = {block.clientId} />
                  
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
})(WithDispatchDemo)