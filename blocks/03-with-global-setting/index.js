

  /**
 * Block dependencies
 */

import icon from "./icon";
// import  Edit  from "./edit";
import Edit from "./Edit";
/**
 * Block libraries
 */

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;


/**
 * Register Block
 */

export default registerBlockType("mcblocks/setting-block", {
    title: __("Global Setting", "jsforwpadvblocks"),
    description: __("Set your global settings", "jsforwpadvblocks"),
    category: "mcblocks",
    icon,
    keywords: [
      __("Global Setting", "jsforwpadvblocks"),
      __("API KEY", "jsforwpadvblocks"),
      __("Admin", "jsforwpadvblocks")
    ],
    supports: ["full", "wide"],
    attributes: {
    },
    edit: props => {
      const { className } = props;
      return (
        <div className={className}>
          {/* <Edit {...props} /> */}
          <Edit prop={props}/>
        </div>
      );
    },
    save:props=>{
        return <p>Show</p>
    }
});