<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;

$option_name = "mcblocks_block_setting";


if( get_option($option_name) === false){
    update_option($option_name,"");
}