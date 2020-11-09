/**
 * Get Dependencies
 */

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, PanelRow } = wp.components;


import "./plugin.scss";
import BlockList from "./components/Blocklist";
const TableOfContents = props => {
    return (
        <Fragment>
            <PluginSidebarMoreMenuItem target="mc-toc">
                {__( "Mc-Table Of Contents", "mcblocks" )}
            </PluginSidebarMoreMenuItem>
            <PluginSidebar 
                name="mc-toc"
                title={__( "Mc-Table Of Contents", "mcblocks" )}
            >
                <PanelBody>
                    <PanelRow>
                        <BlockList />
                    </PanelRow>
                </PanelBody>
            </PluginSidebar>
            
        </Fragment>
    )
}

registerPlugin("mc-toc",{
    icon:"admin-plugins",
    render: TableOfContents
});

