<?php

namespace DP\Toolbar;

use DP\Toolbar\Settings;
use DP\Toolbar\SettingsPage;
use DP\Toolbar\AdminBarDisabler;
use DP\Toolbar\AdminBarAutoHideShow;

class Plugin {
	public static function load() {
		add_action('init', array(__CLASS__, 'init'));

		add_action('init', array(__CLASS__, 'load_textdomain'));

		// add_filter( 'load_textdomain_mofile', array( __CLASS__, 'load_textdomain_mofile' ), 10, 2 );

		add_filter('plugin_action_links_' . plugin_basename(__FILE__), array(__CLASS__, 'plugin_action_links'));

		Settings::init();

		if (is_admin()) {
			SettingsPage::init();
		}
	}

	public static function init() {
		$settings = get_option('dp_toolbar_settings');

		$disabler_settings = array();
		if (!empty($settings['front_display_rule']['active'])) {
			$disabler_settings['front_display_rule'] = $settings['front_display_rule'];
		}
		$disabler_settings['disable_user_pref'] = $settings['disable_user_pref'];

		AdminBarDisabler::init($disabler_settings);

		// Auto hide/show.
		if ($settings['auto_hide_show']) {
			AdminBarAutoHideShow::init();
		}

		// Remove WP logo.
		if ($settings['remove_wp_logo']) {
			add_action('wp_before_admin_bar_render', array(__CLASS__, 'remove_wp_logo'), 0);
		}
	}

	public static function remove_wp_logo() {
		global $wp_admin_bar;
		$wp_admin_bar->remove_menu('wp-logo');
	}

	public static function load_textdomain_mofile($mofile, $domain) {

		if ('dp-toolbar-plus' === $domain && false !== strpos($mofile, WP_LANG_DIR . '/plugins/')) {
			$locale = apply_filters('plugin_locale', determine_locale(), $domain);

			$mofile = WP_PLUGIN_DIR . '/' . dirname(plugin_basename(__FILE__)) . '/languages/' . $domain . '-' . $locale . '.mo';
		}

		return $mofile;
	}

	public static function load_textdomain() {
		load_plugin_textdomain('dp-toolbar-plus', false, dirname(plugin_basename(__FILE__)) . '/languages');
	}

	public static function plugin_action_links($actions) {
		$actions[] = '<a href="' . esc_url(get_admin_url(null, 'options-general.php?page=dp-toolbar-general')) . '">' . __('Settings', 'dp-admin') . '</a>';

		return $actions;
	}
}
