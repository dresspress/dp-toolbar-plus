<?php

namespace dp\Toolbar;

/**
 * Undocumented class.
 */
class AdminBarAutoHideShow {
	/**
	 * Initialize.
	 *
	 * @since 1.0.0
	 */
	public static function init() {
		add_action( 'admin_bar_init', array( __CLASS__, 'admin_bar_init' ) );
	}

	/**
	 * Admin bar init cb.
	 *
	 * @since 1.0.0
	 */
	public static function admin_bar_init() {
		// remove default css style of admin bar.
		remove_action( 'wp_head', '_admin_bar_bump_cb', 11 );

		// add auto hide/show style.
		add_action( 'wp_head', array( __CLASS__, 'admin_bar_bump_cb' ) );
	}

	/**
	 * Custom admin bar callback for auto hide/show.
	 *
	 * @since 1.0.0
	 */
	public static function admin_bar_bump_cb() { ?>
		<style media="screen">
			@media screen and (min-width: 783px) {
				html {
					margin-top: 0 !important;
				}
				* html body {
					margin-top: 0 !important;
				}
				#wpadminbar {
					transform: translate(0, -100%);
					transition: .3s;
				}
				.dp-toolbar-auto-show #wpadminbar {
					transform: translate(0, 0);
				}
			}

			@media screen and (max-width: 782px) {
				html {
					margin-top: 46px !important;
				}
				* html body {
					margin-top: 46px !important;
				}
			}
		</style>
		
		<script>
			window.addEventListener('DOMContentLoaded', (event) => {
				const adminBar = document.getElementById('wpadminbar');
				const html = document.documentElement;
				const autoShowClassName = 'dp-toolbar-auto-show';

				var adminBarStatus = 'hidden';

				adminBar.addEventListener('transitionend', (e) => {
					if (e.target == adminBar) {
						if (html.classList.contains(autoShowClassName))
							adminBarStatus = 'shown';
						else
							adminBarStatus = 'hidden';
					}
				});

				window.addEventListener('mousemove', e => {
					if (adminBarStatus === 'hidden' && e.clientY + e.movementY < 0) {
						html.classList.add(autoShowClassName);
					} else if (adminBarStatus === 'shown' && !e.target.closest('#wpadminbar')) {
						html.classList.remove(autoShowClassName);
					}
				});
			}, true);
		</script>
		<?php
	}
}
