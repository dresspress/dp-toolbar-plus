<?php

/**
 * Plugin Name:       (dp) Toolbar Plus
 * Description:       Get more control of WordPress Toolbar (Admin-Bar) - Hide toolbar from front-end based on user roles and capabilities, auto hide/show etc.
 * Requires at least: 5.0
 * Requires PHP:      7.0
 * Version:           1.0.4
 * Author:            DressPress
 * Author URI:        https://dresspress.org
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dp-toolbar-plus
 * Domain Path: /languages
 * Tags: admin-bar, toolbar
 */

namespace DP\Toolbar;

define('DP_TOOLBAR_PATH', plugin_dir_path(__FILE__));
define('DP_TOOLBAR_URL', plugin_dir_url(__FILE__));

require_once DP_TOOLBAR_PATH . 'inc/AutoLoader.php';
new Autoloader('DP\Toolbar', DP_TOOLBAR_PATH . 'inc');

Plugin::load();
