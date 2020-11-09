

/**
 * Get dependencies
*/
const { __ } = wp.i18n;
const { withDispatch } = wp.data;
const { Button, Modal, Fragment } = wp.components;
const { compose } = wp.components
const { useState } = wp.element;

const ResetControls = ({resetBlocks, insertBlocks, layouts}) =>{
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div>
            <Button isPrimary
                onClick = {()=>{ 
                    setIsOpen(true);
                }}
            > 
                {__("Reset Layout","mcblocks")}
            </Button>
            { isOpen && (
                <Modal
                shouldCloseOnClickOutside 
                title="Reset fields ? "
                        onRequestClose={ ()=> setIsOpen(false) }>
                            
                        <Button isPrimary onClick={() =>{
                            resetBlocks([]);
                            insertBlocks(layouts);
                            setIsOpen(false)
                        } }>
                            Yes!
                        </Button>
                        <Button isSecondary onClick={ ()=> setIsOpen(false) }>
                            Close
                        </Button>
                </Modal>
                )
            }
        </div>
        );

};

export default withDispatch((dispatch)=>{
    const {removeBlocks, resetBlocks, insertBlocks, insertBlock} = dispatch("core/editor");
    return {
        resetBlocks,insertBlocks
    }
    
})(ResetControls);