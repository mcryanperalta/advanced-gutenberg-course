
/** 
* Import dependencies
*/

const { registerBlockStyle } = wp.blocks;
const { __ } = wp.i18n;

import "./style.scss";

registerBlockStyle( "core/quote",{
	name:"colorful-quote",
	label:__( "Colorful Quote","mcblocks" )
});

registerBlockStyle( "mcblocks/shout-styles",{
	name:"default",
	label:__( "Default","mcblocks" )
});

registerBlockStyle( "mcblocks/shout-styles",{
	name:"serious",
	label:__( "Serious","mcblocks" )
});

registerBlockStyle( "mcblocks/shout-styles",{
	name:"colorful",
	label:__( "Colorful","mcblocks" )
});

