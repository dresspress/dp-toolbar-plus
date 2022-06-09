<?php

namespace DP\Toolbar;

use DP\Toolbar\UserScopeChecker;

/**
 * AdminBarDisabler class.
 *
 * Note: About hiding Toolbar from admin
 * ˚º
 * It's hard to fix admin menu bar bug (Popping Out of Hidden Overflow)
 * after hiding toolbar from admin, and it seems that no one want to do this.
 * Maybe implement this feature in the future if necessary.
 *
 * @see https://css-tricks.com/popping-hidden-overflow/
 *
 * @version 1.0.0
 */
class AdminBarDisabler {
	public static $disable_user_pref  = true;
	public static $front_display_rule = array();

	public function __construct() {
	}

	public static function init($settings = array()) {
		if (!empty($settings['front_display_rule'])) {
			self::$front_display_rule = $settings['front_display_rule'];

			add_action('wp', array(__CLASS__, 'disableAdminBarFromFront'));
		}

		self::$disable_user_pref = $settings['disable_user_pref'];

		add_action('admin_head-profile.php', array(__CLASS__, 'userPrefInit'), 10);
		add_action('admin_head-user-edit.php', array(__CLASS__, 'userPrefInit'), 10);

		// self::disableAdminBarFromAdmin();
	}

	/**
	 *
	 * Disable admin bar from frontend based on user
	 *
	 * @return void
	 */
	public static function disableAdminBarFromFront() {
		if (self::isShowAdminBar(self::$front_display_rule)) {
			add_filter('show_admin_bar', '__return_true');

			// remove_action( 'template_redirect', '_wp_admin_bar_init', 0 );
			// remove_action( 'wp_body_open', 'wp_admin_bar_render', 0 );
			// remove_action( 'wp_footer', 'wp_admin_bar_render', 1000 ); // Back-compat for themes not using `wp_body_open`.
		} else {
			add_filter('show_admin_bar', '__return_false');
		}
	}

	/**
	 * Undocumented function
	 *
	 * @param [type] $rule
	 * @return boolean
	 */
	public static function isShowAdminBar($rule) {
		if ($rule['scope'] == 'custom') {
			$scope = $rule;
		} else {
			$scope = $rule['scope'];
		}

		$user_scope_checker = new UserScopeChecker($scope);

		$scoped = $user_scope_checker->inScope();

		return $rule['action'] == 'show' ? $scoped : !$scoped;
	}

	public static function isShowAdminBarForUser($rule, $user_id = 0) {
		if ($rule['scope'] == 'custom') {
			$scope = $rule;
		} else {
			$scope = $rule['scope'];
		}

		$user_scope_checker = new UserScopeChecker($scope);

		$scoped = $user_scope_checker->isScopedUser($user_id);

		// $scoped = self::_isScopedUser( $rule, $user_id );

		return $rule['action'] == 'show' ? $scoped : !$scoped;
	}

	/**
	 * Disable toolbar from admin only.
	 *
	 * @return void
	 */
	public static function disableAdminBarFromAdmin() {
		add_filter('show_admin_bar', '__return_false');

		remove_action('admin_init', '_wp_admin_bar_init');

		remove_action('in_admin_header', 'wp_admin_bar_render', 0);

		// Disable admin bar init from signup and activation pages.
		remove_action('before_signup_header', '_wp_admin_bar_init');
		remove_action('activate_header', '_wp_admin_bar_init');

		self::removeAdminBarClassNamesFromAdmin();

		add_action('admin_head', array(__CLASS__, 'fixAdminMenuPosition'));
	}

	/**
	 * Remove toolbar related class names from `<html>` and `<body>` tags.
	 *
	 * By default, toolbar is integrated into the admin. Even we removed actions
	 *  `_wp_admin_bar_init` and `wp_admin_bar_render` from the admin, some
	 *  admin bar related logic still exists.
	 *
	 * Because `is_admin_bar_showing()` always returns true for `is_admin()`,
	 * but it returns false for `is_embed()`.
	 *
	 * So we can add hook before html start to pretent as embed, and in order to
	 * reduce the possible side effects, we should restore `$wp_query->is_embed` to
	 * orgianl value after body class generated.
	 *
	 * If we need to remove other things depends the function `is_admin_bar_showing()`
	 * in the future, we should always make sure that use two hooks to wrap.
	 *
	 * @return void
	 */
	public static function removeAdminBarClassNamesFromAdmin() {
		// Hook to last action before `_wp_admin_html_begin`.
		add_action('current_screen', array(__CLASS__, 'forceIsEmbed'));

		// Hook to first action after `is_admin_bar_showing()` is checked for `$admin_body_class'.
		add_filter('admin_body_class', array(__CLASS__, 'restoreIsEmbed'));
	}

	/**
	 * Pretent as embed for `$wp_query->is_embed`.
	 *
	 * @return void
	 */
	public static function forceIsEmbed() {
		global $wp_query;
		global $original_wp_query_is_embed;

		$original_wp_query_is_embed = $wp_query->is_embed;

		$wp_query->is_embed = true;
	}

	/**
	 * Restore `$wp_query->is_embed`.
	 *
	 * @return void
	 */
	public static function restoreIsEmbed() {
		global $wp_query;
		global $original_wp_query_is_embed;

		$wp_query->is_embed = $original_wp_query_is_embed;
	}

	/**
	 * CSS solution to completely remove admin bar for admin.
	 *
	 * @return void
	 */
	public static function overrideAdminBarStyles() {
?>
		<style>
			html.wp-toolbar {
				padding-top: 0;
			}
		</style>
	<?php
	}

	/**
	 * CSS solution to completely remove admin bar for admin.
	 *
	 * @return void
	 */
	public static function fixAdminMenuPosition() {
	?>
		<style>
			/* Fix sticky admin menu bug after disable admin bar. */
			#adminmenuwrap {
				overflow: scroll;
				height: 100%;
				overflow: auto;
				-ms-overflow-style: none;
				/* IE and Edge */
				scrollbar-width: none;
				/* Firefox */
			}

			#adminmenuwrap::-webkit-scrollbar {
				display: none;
			}

			@media screen and (max-width: 600px) {
				#wpbody {
					padding-top: 0;
				}
			}
		</style>
	<?php
	}

	/**
	 * userPrefInit
	 *
	 * @return void
	 */
	public static function userPrefInit() {
		$user_id = self::getEditUserId();

		if (!$user_id) {
			return;
		}

		$show_user_pref = true;
		if (self::$disable_user_pref) {
			$show_user_pref = false;
		} elseif (self::$front_display_rule) {
			$show_user_pref = self::isShowAdminBarForUser(self::$front_display_rule, $user_id);
		}
		$show_user_pref = apply_filters('dp_show_admin_bar_front_pref', $show_user_pref, $user_id);

		if (!$show_user_pref) {
			self::hideUserPref();
		}
	}

	/**
	 * Css styles to hide user admin bar front pref.
	 *
	 * @return void
	 */
	public static function hideUserPref() {
	?>
		<style>
			.user-admin-bar-front-wrap {
				display: none;
			}
		</style>
<?php
	}

	/**
	 * Get user id on profile or edit-user page.
	 *
	 * @return int|false User id or false.
	 */
	public static function getEditUserId() {
		$user_id = (int) $GLOBALS['user_id'];

		if (!$user_id && IS_PROFILE_PAGE) {
			$current_user = wp_get_current_user();
			$user_id      = $current_user->ID;
		} elseif (!$user_id && !IS_PROFILE_PAGE) {
			return false;
		} elseif (!get_userdata($user_id)) {
			return false;
		}

		return $user_id;
	}
}
