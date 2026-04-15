<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', function () {
	$blocks_dir = plugin_dir_path( __DIR__ ) . 'src/blocks';

	if ( ! is_dir( $blocks_dir ) ) {
		return;
	}

	$entries = scandir( $blocks_dir );

	if ( ! is_array( $entries ) ) {
		return;
	}

	foreach ( $entries as $entry ) {
		if ( in_array( $entry, array( '.', '..' ), true ) ) {
			continue;
		}

		$block_dir = $blocks_dir . '/' . $entry;

		if ( ! is_dir( $block_dir ) ) {
			continue;
		}

		$block_json = $block_dir . '/block.json';

		if ( file_exists( $block_json ) ) {
			register_block_type( $block_json );
		}
	}
} );
