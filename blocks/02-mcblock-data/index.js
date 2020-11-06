const { __ }= wp.i18n;
const { registerBlockType } = wp.blocks;

// import icon from './icon';

import "./style.scss"
import SelectDemo from "./components/SelectDemo";
import SubscribeDemo from "./components/SubscribeDemo";
import WithSelectDemo from "./components/WithSelectDemo";
import DispatchDemo from "./components/DispatchDemo";
import WithDispatchDemo from "./components/WithDispatchDemo";
import WithComposeDemo from "./components/WithComposeDemo";

export default registerBlockType("mcblocks/data-block",{
    title:__("MC Data Example","mcblocks"),
    description: __("A demo of data api select, dispatch, withSelect, withDispatch, compose.","mcblocks" ),
    category:"mcblocks",
    keywords:[
            __("MC datablock","mcblocks"),
            __("my data","mcblocks"),
            __("starter blocks","mcblocks"),
    ],
    icon:"block-default",
    attributes:{},
    edit:props =>{
        return (
            <div>
                <p>{__("DATA API EXAMPLE","mcblocks")}</p>
                <SelectDemo  />
                <SubscribeDemo  />
                <WithSelectDemo photos = "YEY"  />
                <DispatchDemo />
                <WithDispatchDemo />
                <WithComposeDemo />
            </div>
        )
    },
    save:props=>{
        return (
            <div>
                <p>Hello from editor</p>
            </div>
        )

    }
    
});