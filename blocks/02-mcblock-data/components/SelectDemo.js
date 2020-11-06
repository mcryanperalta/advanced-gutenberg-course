    const { __ } = wp.i18n;
    const { select } = wp.data;

    export default function SelectDemo() {
        const blockCount = select("core/editor").getBlockCount();
    
        return (
            <div>
                <pre>
                    <code>
                        {"select()"}
                    </code>
                </pre>

                <p>
                    {__( "Block Count:","mcblocks" )} {blockCount}
                </p>   
            </div>
        );

    };