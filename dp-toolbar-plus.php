<?php
/**
 * Plugin Name:       (dp) Toolbar Plus
 * Description:       Get more control of the Toolbar (Admin-Bar) - Hide toolbar from front-end based on user roles and capabilities, auto hide/show etc.
 * Requires at least: 5.0
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            (dp)
 * Author URI:        https://togetdp.com
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dp-admin-bar
 * Domain Path: /languages
 * Tags: admin-bar, toolbar
 */

define( 'DP_TOOLBAR_DIR', plugin_dir_path( __FILE__ ) );
define( 'DP_TOOLBAR_URL', plugin_dir_url( __FILE__ ) );

require_once 'inc/Plugin.php';
dp\Toolbar\Plugin::load();
