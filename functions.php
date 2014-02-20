<?php 
// Awesome functions!

/**
 * Enqueue scripts and styles.
 */
function chrlar_scripts() {
	wp_enqueue_style( 'chrlar-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'chrlar_scripts' );