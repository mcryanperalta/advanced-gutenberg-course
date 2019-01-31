const { getBlockType } = wp.blocks;
const { Button } = wp.components;
const { dispatch, withSelect } = wp.data;

import classnames from "classnames";

const BlockButton = ({ block, isBlockSelected }) => {
  const blockType = getBlockType(block.name);
  return (
    <Button
      className={classnames("editor-block-navigation__item-button", {
        "is-selected": isBlockSelected
      })}
      onClick={() => dispatch("core/editor").selectBlock(block.clientId)}
    >
      <span className="editor-block-icon has-colors">{blockType.icon.src}</span>
      {blockType.title}
    </Button>
  );
};

export default withSelect((select, ownProps) => {
  const { clientId } = ownProps.block;
  return {
    isBlockSelected: select("core/editor").isBlockSelected(clientId)
  };
})(BlockButton);