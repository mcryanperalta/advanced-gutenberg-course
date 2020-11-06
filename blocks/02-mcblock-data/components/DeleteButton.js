const { __ } = wp.i18n;
const { withDispatch,dispatch } = wp.data;
const { Button } = wp.components;

const DeleteButton = ({clientId,removeBlock}) => (
    <Button 
        className="is-button is-default" 
        onClick={() => {
            removeBlock(clientId);
        }}>
        {__("X","mcblocks")}
    </Button> 
);

export default withDispatch((dispatch,ownProps) => {
    return {
        removeBlock: dispatch("core/editor").removeBlock
    }
})(DeleteButton)