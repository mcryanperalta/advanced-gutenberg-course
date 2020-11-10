<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;

define('MCBLOCKS_REST_NAMESPACE','mcblocks/v1');
define('MCBLOCKS_BLOCK_SETTING','mcblocks_block_setting');


add_action('rest_api_init',__NAMESPACE__ . '\custom_endpoints');

/**
 * Create Custom Endpoints for block Settings
*/

function custom_endpoints(){
    register_rest_route(
        MCBLOCKS_REST_NAMESPACE,
        'block-setting/',
        [
            'methods' => \WP_REST_Server::READABLE,
            'callback' => __NAMESPACE__ . '\get_block_setting'
        ]
    );

    register_rest_route(
        MCBLOCKS_REST_NAMESPACE,
        'block-setting/',
        [
            'methods' => \WP_REST_Server::EDITABLE,
            'callback' => __NAMESPACE__ . '\update_block_setting',
            'permission_callback' =>__NAMESPACE__ . '\check_permissions'
        ]
    );
}


function get_block_setting(){
    $block_setting = get_option(MCBLOCKS_BLOCK_SETTING);

    $response = new \WP_REST_Response( $block_setting );
    $response->set_status(200);

    return $response;
}

function update_block_setting() {
    $new_block_setting = $request->get_body();
    update_option(MCBLOCKS_BLOCK_SETTING, $new_block_setting);

    $block_setting = get_option( MCBLOCKS_BLOCK_SETTING );
    $response = new \WP_REST_Response( $block_setting );
    $response->set_status(201);

    return $response;
}

function check_permissions(){
    return has_cap('edit-posts');
    // return true;
}