<?php
/**
 * Plugin Name:       (dp) Admin Pro
 * Description:       ☯ Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0np
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dp-admin-pro
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_dp_admin_pro_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_dp_admin_pro_block_init' );

function wholesomecode_wholesome_plugin_admin_scripts() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/admin.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "wholesomecode/wholesome-plugin" block first.'
		);
	}
	$admin_js     = 'build/admin.js';
	$script_asset = require( $script_asset_path );
	wp_enqueue_script(
		'wholesomecode-wholesome-plugin-admin-editor',
		plugins_url( $admin_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'wholesomecode-wholesome-plugin-block-editor', 'wholesome-plugin' );

	$admin_css = 'build/admin.css';
	wp_enqueue_style(
		'wholesomecode-wholesome-plugin-admin',
		plugins_url( $admin_css, __FILE__ ),
		['wp-components'],
		filemtime( "$dir/$admin_css" )
	);
}
add_action( 'admin_enqueue_scripts', 'wholesomecode_wholesome_plugin_admin_scripts', 10 );


function wholesomecode_wholesome_plugin_register_settings() {
	register_setting(
		'dp_admin_settings',
		'dp_admin_settings',
		[
			'default'      => array(
				'layout' => 'top',
				'style' => 'gutenberg',
				'menu_width' => '160px',
				'font_size' => 13,
			),
			'show_in_rest' => [
				'schema' => array(
					'type'         => 'object',
					'properties' => array(
						'layout' => array(
							'type' => 'string',
						),
						'style' => array(
							'type' => 'string',
						),
						'menu_width' => array(
							'type' => 'string',
						),
						'font_size' => array(
							'type' => 'number',
						),
					)
				)
			],
			'type'         => 'object',
		]
	);

	register_setting(
		'wholesomecode_wholesome_plugin_settings',
		'wholesomecode_wholesome_plugin_example_text',
		[
			'default'      => '',
			'show_in_rest' => true,
			'type'         => 'string',
		]
	);

	register_setting(
		'wholesomecode_wholesome_plugin_settings',
		'wholesomecode_wholesome_plugin_example_text_2',
		[
			'default'      => '',
			'show_in_rest' => true,
			'type'         => 'string',
		]
	);

	register_setting(
		'wholesomecode_wholesome_plugin_settings',
		'wholesomecode_wholesome_plugin_example_text_3',
		[
			'default'      => '',
			'show_in_rest' => true,
			'type'         => 'string',
		]
	);

	register_setting(
		'wholesomecode_wholesome_plugin_settings',
		'wholesomecode_wholesome_plugin_example_toggle',
		[
			'default'      => '',
			'show_in_rest' => true,
			'type'         => 'string',
		]
	);
}
add_action( 'init', 'wholesomecode_wholesome_plugin_register_settings', 10 );