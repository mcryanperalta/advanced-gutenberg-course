/** 
 * Get Dependencies
 * */

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, PanelRow } = wp.components;

const PluginSidebarDemo = props =>{
   return (
       <Fragment>
           <PluginSidebarMoreMenuItem target="mcblocks-demo-plugin">
               {__("Plugin Sidebar Demo Mc","mcblocks")}
           </PluginSidebarMoreMenuItem>
           <PluginSidebar
               name="mcblocks-demo-plugin"
               title={__("Plugin Sidebar Demo Mc","mcblocks")}
           >
               <PanelBody>
                   <PanelRow>
                   {__("PLugin Sidebar Content","mcblocks")}
                   </PanelRow>
               </PanelBody>
               
           </PluginSidebar>
       </Fragment>
   );
}

registerPlugin("mcblocks-demo-plugin",{
    icon:"megaphone",
    render: PluginSidebarDemo
});