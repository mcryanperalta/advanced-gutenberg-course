const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useState,useEffect } = wp.element;

const  WithSelectDemo = ({blockCount,blocks}) =>(
    // const [blockCount,setBlockCount] = useState(0);

    // useEffect(()=>{
    //     const unsubscribe = subscribe(() => {
    //         const count = select("core/editor").getBlockCount();
    //         setBlockCount(count);
    //     })
    // },[]);

  
        <div>
            <pre>
                <code>
                    {__("withSelect(()=>{})(WithSelectDemo)")}
                </code>
            </pre>
            <p>
                {__( "Block Count:","mcblocks" )} {blockCount}
                {/* {console.log(blocks)} */}
            </p>   
        </div>
    

);

export default withSelect((select,ownProps) => {
    // console.log("myPROPS",ownProps);
    return {
        blockCount: select("core/editor").getBlockCount(),
        blocks: select("core/editor").getBlocks(),
    }
})(WithSelectDemo);