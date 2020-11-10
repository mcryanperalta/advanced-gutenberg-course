
/**
 * Block dependencies
 */
import icon from "./icon";
const { apiFetch } = wp;
const { __ } = wp.i18n;
const { Fragment, useState, useEffect } = wp.element;
const { InspectorControls} = wp.editor;
const { PanelBody, PanelRow,TextControl, Button, Spinner } = wp.components

/**
 * Block libraries
 */



function getSetting(){
    const data = apiFetch({
        path:'/mcblocks/v1/block-setting'
    }).then(promise =>{
        return promise;
    }).catch(error =>{
        console.log(error);
        
    })
    return data;
}

function setSetting(setting){
    const data = apiFetch({
        path:'/mcblocks/v1/block-setting',
        method:'POST',
        body:setting
    }).then(promise =>{
        return promise;
    }).catch(error =>{
        console.log(error);
        
    })
    return data;
}

const Edit = ({prop}) =>{
 
    const {className } = prop
    const [blockSetting,setBlockSetting] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [isSaving,setIsSaving] = useState(false);
    const [isEditing,setIsEditing] = useState(false);

      useEffect(()=>{
        const fetchData = async () => {
            const data = await getSetting();
            console.log(data);
            setBlockSetting(data);
            setIsLoading(false);   
         }
        
         fetchData();
    },[]);

 
    const updateSetting = async() =>{
        setIsSaving(true);
        const newBlock = await setSetting(blockSetting);
        setBlockSetting(newBlock);
        setIsEditing(false);
        setIsSaving(false);
    }
  

    return(
        <Fragment>
        
           { (isLoading) ? (
            <div>    
                <p><Spinner /> </p>
            </div>
        ):(
            <div className={className}>
               <InspectorControls>
                   <PanelBody
                        title={__("Block Setting","mcblocks")}
                        initialOpen
                    >
                          <PanelRow>
                            {isEditing || blockSetting === "" ?(
                                <p>
                                    <TextControl 
                                        label={__("Please enter a setting here","mcblocks")}
                                        value={blockSetting}
                                        onChange={newSetting=>{
                                            setIsEditing(true);
                                            if(!isSaving){
                                                setIsEditing(true)
                                                setBlockSetting(newSetting);
                                            }
                                        }}
                                    />
                                    <Button 
                                        isPrimary 
                                        disabled={isSaving}
                                        onClick={()=>{
                                            updateSetting();
                                        }}
                                    >
                                        {__("Save","mcblocks")}
                                    </Button>
                                </p>
                            ):( 
                                <p>Setting Saved click to edit</p>
                            )}
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                {blockSetting === "" ?(
                    <p>
                        {__("Please enter a block settings value in the block settings.","mcblocks")}
                    </p>
                ) : (
                    <p>
                        {__("Global Setting:.","mcblocks")} {blockSetting}
                    </p>
                )}    
            </div>
        )
                }
        </Fragment>
    );      
    
}

export default Edit;
