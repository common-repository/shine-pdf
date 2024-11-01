<?php
/*
Plugin Name: Shine PDF
Plugin URI:
Description: You can add pdf, xlsx, ppt, image from Google Drive. And Imgur image hosting, Youtube, Vimeo, Dailymotion video you can embed from this plugin easily using only id.
Version: 1.0
Author: Sabbir Islam
Author URI: 
License: GPLv2 or later
*/


function shine_assets() {
    wp_enqueue_style('shine-css', plugin_dir_url(__FILE__) . '/assets/css/shine.css');
}
add_action('admin_enqueue_scripts', 'shine_assets');

function shinepdf_mce_external_plugins($plugins){
    $plugins['shinepdf_plugin'] = plugin_dir_url(__FILE__). "assets/js/tinymce.js";
	return $plugins;
}

function shinepdf_mce_buttons($buttons){
	$buttons[] = 'shinepdf_button_one';
	$buttons[] = 'shinepdf_listbox';
	return $buttons;
}

function shinepdf_admin_assets() {
	add_filter('mce_external_plugins', 'shinepdf_mce_external_plugins');
	add_filter('mce_buttons', 'shinepdf_mce_buttons');
}
add_action('admin_init', 'shinepdf_admin_assets');




function shinepdf_shortcode( $atts, $content = null  ) {
 
    extract( shortcode_atts( array(
        'id' => '',
        'width' => '640px',
        'height' => '480px',
    ), $atts ) );
 
    return '<iframe src="https://drive.google.com/file/d/'.$id.'/preview" width="'.$width.'" height="'.$height.'"></iframe>';
}   
add_shortcode('shinepdf', 'shinepdf_shortcode');


function shineyoutube_shortcode( $atts, $content = null  ) {
 
    extract( shortcode_atts( array(
        'id' => '',
        'width' => '640px',
        'height' => '480px',
    ), $atts ) );
 
    return '<iframe src="https://www.youtube.com/embed/'.$id.'" width="'.$width.'" height="'.$height.'" frameborder="0"></iframe>';
}   
add_shortcode('shineyoutube', 'shineyoutube_shortcode');

function shinevimeo_shortcode( $atts, $content = null  ) {
 
    extract( shortcode_atts( array(
        'id' => '',
        'width' => '640px',
        'height' => '480px',
        'autoplay' => 'autoPlay=1',
    ), $atts ) );
 
    return '<iframe src="https://player.vimeo.com/video/'.$id.'" width="'.$width.'" height="'.$height.'" frameborder="0"></iframe>';

}   
add_shortcode('shinevimeo', 'shinevimeo_shortcode');


function shinedailymotion_shortcode( $atts, $content = null  ) {
 
    extract( shortcode_atts( array(
        'id' => '',
        'width' => '640px',
        'height' => '480px',
        'autoplay' => 'autoPlay=1',
    ), $atts ) );
 
    return '<iframe src="https://www.dailymotion.com/embed/video/'.$id.'?'.$autoplay.'" width="'.$width.'" height="'.$height.'" frameborder="0"></iframe>';

}   
add_shortcode('shinedailymotion', 'shinedailymotion_shortcode');


function shineimgur_shortcode( $atts, $content = null  ) {
 
    extract( shortcode_atts( array(
        'id' => '',
        'width' => '640px',
        'height' => '480px'
    ), $atts ) );
 
    return '<img src="https://i.imgur.com/'.$id.'" width="'.$width.'" height="'.$height.'"/>';

}   
add_shortcode('shineimgur', 'shineimgur_shortcode');