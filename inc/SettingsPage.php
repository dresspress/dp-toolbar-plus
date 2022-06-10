<?php

namespace DP\Toolbar;

use DP\Toolbar\Settings;

class SettingsPage {
	public static function init() {
		add_action('admin_menu', array(__CLASS__, 'add_page'));
	}

	public static function add_page() {
		$page_hook = add_submenu_page(
			'options-general.php',
			__('Toolbar Settings', 'dp-toolbar-plus'),
			__('Toolbar', 'dp-toolbar-plus'),
			'manage_options',
			'dp-toolbar-settings',
			array(__CLASS__, 'render_page'),
			10
		);

		add_action("load-{$page_hook}", array(__CLASS__, 'load_page'));
	}

	public static function load_page() {
		add_action('admin_enqueue_scripts', array(__CLASS__, 'enqueue'));
		add_filter('admin_body_class', array(__CLASS__, 'admin_body_class'));
	}

	public static function render_page() { ?>
		<div class="dp-admin-page-wrap">
		</div>
<?php
	}

	public static function enqueue() {
		// js file.
		$script_asset_path = DP_TOOLBAR_PATH . 'build/js/settings.asset.php';
		$js          = 'build/js/settings.js';
		$script_asset      = require $script_asset_path;
		wp_enqueue_script(
			'dp-toolbar-settings',
			DP_TOOLBAR_URL . $js,
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		// set translations.
		wp_set_script_translations('dp-toolbar-settings', 'dp-toolbar-plus', DP_TOOLBAR_PATH . 'languages/');

		// css file.
		$admin_css = 'build/css/admin.css';
		wp_enqueue_style(
			'dp-toolbar-admin',
			DP_TOOLBAR_URL . $admin_css,
			array('wp-components'),
			filemtime(DP_TOOLBAR_PATH . $admin_css)
		);

		// Build inline scripts.
		$roles    = get_editable_roles();
		$settings = get_option('dp_toolbar_settings');

		$settings = Settings::get_settings();

		$var = array_merge(
			array('roles' => $roles),
			$settings
		);

		wp_add_inline_script('dp-toolbar-settings', 'var dpToolbarSettings = ' . wp_json_encode($var), $var, 'before');
	}

	public static function admin_body_class($classes) {
		return $classes .= 'dp-toolbar-settings-page';
	}
}
