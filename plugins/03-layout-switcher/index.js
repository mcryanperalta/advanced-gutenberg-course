/**
 * Get dependencies
*/
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { createBlock } = wp.blocks;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, PanelRow } = wp.components;

import SwitcherControls from "./components/SwitcherControls";
import icons from "./icon";
import "./plugin.scss";

const LayoutSwitcher = () =>{

    const layouts = {
        default:[
            createBlock("core/cover",{})
        ],
        hero:[
            createBlock("core/cover",{align:"full"}),
            createBlock("core/button",{
                text: __("Call to Action","mcblocks"),
                alignn:"center"
            }),
            createBlock("core/columns",{columns:3})
        ],
        featured:[
            createBlock("core/heading",{}),
            createBlock("core/spacer",{heigh:"10"}),
            createBlock("core/media-text",{
                align:"full"
            }),
            createBlock("core/spacer",{heigh:"40"}),
            createBlock("core/quote",{}),
            createBlock("core/spacer",{heigh:"20"}),
            createBlock("core/media-text",{mediaPosition:"right"}),
            createBlock("core/paragraph",{
                placeholder:__("Layout Swithcer","mcblocks")}),
        ]
    }
    return (
        <Fragment>
            <PluginSidebarMoreMenuItem target="mc-layout-switcher">
                {__("Layout Switcher","mcblocks")}
            </PluginSidebarMoreMenuItem>
            <PluginSidebar 
            title={__("Layout Switcher","mcblocks")}
            name="mc-layout-switcher">
                {/* <p>{__("Switcher Here","mcblocks")}</p> */}
                <SwitcherControls icons={icons} layouts = {layouts} />
            </PluginSidebar>
        </Fragment>
    )
}

registerPlugin("mc-layout-swithcer",{
    icon:icons.switcher,
    render:LayoutSwitcher,
})

