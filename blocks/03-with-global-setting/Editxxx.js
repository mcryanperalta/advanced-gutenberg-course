const { __ } = wp.i18n;
const { Fragment, useState, useEffect } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl, Spinner} = wp.editor;
const { apiFetch } = wp;

const Edit = ({props}) => {
   
    const {attributes:{ blockSetting, isLoading, isEditing, isSaving}, setAttributes} = props;
    console.log(blockSetting, isLoading, isEditing, isSaving);
 
  return (
    <div>
            {/* {isLoading && 
                (<p><Spinner /> </p>)}
            {blockSetting === "" ?( */}
                <p>
                    
                    {__("Please enter a block settings value in the block settings.","mcblocks")}
                </p>
            {/* ) : (
                <p>
                    {__("Global Setting:.","mcblocks")} {blockSetting}
                </p>
            )}     */}
        </div>
  );
};

export default Edit;
