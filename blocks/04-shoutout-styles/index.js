/**
 * Block Dependencies
*/
import "./style.scss";


/**
 * Internal Block Libraries 
 * 
*/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;


/**
 * Register Block
 */

export default registerBlockType("mcblocks/shout-styles", {
  title: __("Shoutout", "mcblocks"),
  description: __("Shoutout Example Styles", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon:"megaphone",
  keywords: [
    __("shout out", "jsforwpadvblocks"),
    __("megaphone", "jsforwpadvblocks"),
    __("call to action", "jsforwpadvblocks")
  ],
  supports: ["full", "wide"],
  attributes: {
    headline:{
      type:"string"
    },
    text:{
      type:"html"
    }
  },
  edit: props =>{
      const{
        attributes:{headline,text},
        className,
        setAttributes
      } = props;

      return (
        <div className={className}>
          <RichText
            value={headline}
            tagName="h2"
            placeholder={__( "Headline","mcblocks" )}
            onChange={headline=>setAttributes({headline})}
            />
          <RichText
            value={text}
            tagName="div"
            placeholder={__( "Shout out text","mcblocks" )}
            onChange={text=>setAttributes({text})}
            />
        </div>
      )
  },
  save: props =>{
    const{
      attributes:{headline,text},
    } = props;

    return (
      <div>
        <RichText.Content
          value={headline}
          tagName="h2"
          />
        <RichText.Content
          value={text}
          tagName="div"
          />
      </div>
    )
  }
});