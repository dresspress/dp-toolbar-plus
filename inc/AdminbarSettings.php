<?php

namespace DP\Toolbar;

class AdminBarSettings {
	public static function init() {
		add_action('init', array(__CLASS__, 'register_settings'));
	}

	public static function register_settings() {
		register_setting(
			'dp_toolbar_settings',
			'dp_toolbar_settings',
			array(
				'type'         => 'object',
				// 'sanitize_callback' => array( __CLASS__, 'sanitize_settings' ),
				'default'      => array(
					'front_display_rule' => array(
						'active'        => true,
						'action'        => 'hide',
						'scope'         => 'not_admins',
						'logged_in'     => false,
						'not_logged_in' => false,
						'roles'         => array(),
						'caps'          => array(),
					),
					'disable_user_pref'  => false,
					'auto_hide_show'     => true,
					'remove_wp_logo'     => true,
				),
				'show_in_rest' => array(
					'schema' => array(
						'properties' => array(
							'front_display_rule' => array(
								'type'       => 'object',
								'properties' => array(
									'active'        => array(
										'type' => 'boolean',
									),
									'action'        => array(
										'type' => 'string',
									),
									'scope'         => array(
										'type' => 'string',
									),
									'logged_in'     => array(
										'type' => 'boolean',
									),
									'not_logged_in' => array(
										'type' => 'boolean',
									),
									'roles'         => array(
										'type'  => 'array',
										'items' => array(
											'type' => 'string',
										),
									),
									'caps'          => array(
										'type'  => 'array',
										'items' => array(
											'type' => 'string',
										),
									),
								),
							),
							'disable_user_pref'  => array(
								'type' => 'boolean',
							),
							'auto_hide_show'     => array(
								'type' => 'boolean',
							),
							'remove_wp_logo'     => array(
								'type' => 'boolean',
							),
						),
					),
				),
			)
		);
	}

	public static function sanitize_settings($settings) {
		if (!empty($settings['front_display_rule'])) {
			$rule = $settings['front_display_rule'];

			if (!empty($rule['scope']) && $rule['scope'] != 'custom') {
				$keys_to_remove                 = array('logged_in', 'not_logged_in', 'caps', 'roles');
				$settings['front_display_rule'] = array_diff_key($rule, array_flip($keys_to_remove));
			}
		}

		return $settings;
	}

	public static function get_settings() {
		global $wp_registered_settings;

		$defaults = $wp_registered_settings['dp_toolbar_settings']['default'];

		$settings = get_option('dp_toolbar_settings');

		$settings = array_merge($defaults, $settings);

		return $settings;
	}
}
