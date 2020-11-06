const { __ } = wp.i18n;
const { select,subscribe } = wp.data;
const { useState,useEffect } = wp.element;


export default function SubscribeDemo(){
    const [blockCount,setBlockCount] = useState(0);

    useEffect(()=>{
        const unsubscribe = subscribe(() => {
            const count = select("core/editor").getBlockCount();
            setBlockCount(count);
        })
    },[]);

    return (
        <div>
            <pre>
                <code>
                    {__("subscribe(()=>{})")}
                </code>
            </pre>
            <p>
                {__( "Block Count:","mcblocks" )} {blockCount}
            </p>   
        </div>
    )
}

