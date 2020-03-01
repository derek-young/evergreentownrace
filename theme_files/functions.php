<?php
/**
 * Agency Pro.
 *
 * This file adds the functions to the Agency Pro Theme.
 *
 * @package Agency
 * @author  StudioPress
 * @license GPL-2.0+
 * @link    https://my.studiopress.com/themes/agency/
 */

// Start the engine.
include_once( get_template_directory() . '/lib/init.php' );

// Setup Theme.
include_once( get_stylesheet_directory() . '/lib/theme-defaults.php' );

add_action( 'after_setup_theme', 'agency_localization_setup' );
/**
 * Sets localization (do not remove).
 *
 * @since 1.0.0
 */
function agency_localization_setup() {
	load_child_theme_textdomain( 'agency-pro', get_stylesheet_directory() . '/languages' );
}

// Add Settings to WordPress Theme Customizer.
require_once( get_stylesheet_directory() . '/lib/customize.php' );

// Child theme (do not remove).
define( 'CHILD_THEME_NAME', __( 'Agency Pro', 'agency-pro' ) );
define( 'CHILD_THEME_URL', 'https://my.studiopress.com/themes/agency/' );
define( 'CHILD_THEME_VERSION', '3.1.5' );

// Add HTML5 markup structure.
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );

// Add viewport meta tag for mobile browsers.
add_theme_support( 'genesis-responsive-viewport' );

// Enqueue Scripts.
add_action( 'wp_enqueue_scripts', 'agency_load_scripts' );
function agency_load_scripts() {

	wp_enqueue_script( 'agency-responsive-menu', get_stylesheet_directory_uri() . '/js/responsive-menu.js', array( 'jquery' ), '1.0.0' );

	wp_enqueue_style( 'dashicons' );

	wp_enqueue_style( 'google-fonts', '//fonts.googleapis.com/css?family=EB+Garamond|Spinnaker', array(), CHILD_THEME_VERSION );

}

// Enqueue Backstretch script and prepare images for loading.
add_action( 'wp_enqueue_scripts', 'agency_enqueue_backstretch_scripts' );
function agency_enqueue_backstretch_scripts() {

	$image = get_option( 'agency-backstretch-image', sprintf( '%s/images/bg.jpg', get_stylesheet_directory_uri() ) );

	// Load scripts only if custom backstretch image is being used.
	if ( ! empty( $image ) ) {

		wp_enqueue_script( 'agency-pro-backstretch', get_stylesheet_directory_uri() . '/js/backstretch.js', array( 'jquery' ), '1.0.0' );
		wp_enqueue_script( 'agency-pro-backstretch-set', get_stylesheet_directory_uri() . '/js/backstretch-set.js' , array( 'jquery', 'agency-pro-backstretch' ), '1.0.0' );

		wp_localize_script( 'agency-pro-backstretch-set', 'BackStretchImg', array( 'src' => str_replace( 'http:', '', $image ) ) );

	}

}

// Add new image sizes.
add_image_size( 'home-bottom', 380, 150, TRUE );
add_image_size( 'home-1', 380, 380, TRUE );
add_image_size( 'home-2', 380, 380, TRUE );
add_image_size( 'home-3', 380, 380, TRUE );
add_image_size( 'home-4', 380, 380, TRUE );
add_image_size( 'home-5', 380, 380, TRUE );
add_image_size( 'home-6', 380, 380, TRUE );

// Add support for custom background.
add_theme_support( 'custom-background' );

// Add support for custom header.
add_theme_support( 'custom-header', array(
	'header_image'    => '',
	'header-selector' => '.site-title a',
	'header-text'     => false,
	'height'          => 60,
	'width'           => 300,
) );

// Add support for additional color style options.
add_theme_support( 'genesis-style-selector', array(
	'agency-pro-blue'   => __( 'Agency Pro Blue', 'agency-pro' ),
	'agency-pro-green'  => __( 'Agency Pro Green', 'agency-pro' ),
	'agency-pro-orange' => __( 'Agency Pro Orange', 'agency-pro' ),
	'agency-pro-red'    => __( 'Agency Pro Red', 'agency-pro' ),
) );

// Add support for 3-column footer widgets.
add_theme_support( 'genesis-footer-widgets', 3 );

// Add support for after entry widget.
add_theme_support( 'genesis-after-entry-widget-area' );

// Reposition the header
remove_action( 'genesis_header', 'genesis_header_markup_open', 5 );
remove_action( 'genesis_header', 'genesis_do_header' );
remove_action( 'genesis_header', 'genesis_header_markup_close', 15 );
add_action( 'genesis_before', 'genesis_header_markup_open', 5 );
add_action( 'genesis_before', 'genesis_do_header', 10 );
add_action( 'genesis_before', 'genesis_header_markup_close', 15 );

// Remove the site description.
remove_action( 'genesis_site_description', 'genesis_seo_site_description' );

// Rename Menus based on location.
add_theme_support( 'genesis-menus', array( 'primary' => __( 'After Header Menu', 'agency-pro' ), 'secondary' => __( 'Footer Menu', 'agency-pro' ) ) );

// Reposition the secondary navigation menu.
remove_action( 'genesis_after_header', 'genesis_do_subnav' );
add_action( 'genesis_footer', 'genesis_do_subnav', 7 );

// Reduce the secondary navigation menu to one level depth.
add_filter( 'wp_nav_menu_args', 'agency_secondary_menu_args' );
function agency_secondary_menu_args( $args ) {

	if ( 'secondary' === $args['theme_location'] ) {
		$args['depth'] = 1;
	}

	return $args;

}

// Relocate after entry widget.
remove_action( 'genesis_after_entry', 'genesis_after_entry_widget_area' );
add_action( 'genesis_after_entry', 'genesis_after_entry_widget_area', 5 );

// Register widget areas.
genesis_register_sidebar( array(
	'id'          => 'home-top',
	'name'        => __( 'Home Top', 'agency-pro' ),
	'description' => __( 'This is the top section of the homepage.', 'agency-pro' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-1',
	'name'        => __( 'Home 1', 'agency-pro' ),
	'description' => __( 'This is the first section of the homepage.', 'agency-pro' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-2',
	'name'        => __( 'Home 2', 'agency-pro' ),
	'description' => __( 'This is the second section of the homepage.', 'agency-pro' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-3',
	'name'        => __( 'Home 3', 'agency-pro' ),
	'description' => __( 'This is the third section of the homepage.', 'agency-pro' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-4',
	'name'        => __( 'Home 4', 'agency-pro' ),
	'description' => __( 'This is the fourth section of the homepage.', 'agency-pro' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-5',
	'name'        => __( 'Home 5', 'agency-pro' ),
	'description' => __( 'This is the fifth section of the homepage.', 'agency-pro' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-6',
	'name'        => __( 'Home 6', 'agency-pro' ),
	'description' => __( 'This is the sixth section of the homepage.', 'agency-pro' ),
) );
genesis_register_sidebar( array(
	'id'          => 'home-bottom',
	'name'        => __( 'Home Bottom', 'agency-pro' ),
	'description' => __( 'This is the bottom section of the homepage.', 'agency-pro' ),
) );
