
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';


import Edit from './edit';
import save from './save';
import metadata from './block.json';


registerBlockType(metadata.name, {

	title: __("Custom Element Style"),
	icon: {
		src: "admin-home",
		background: "blue"
	}, 
	keywords: [
		__("style"),
		__("custom")
	],

	category:"common",
	
	edit: Edit,
	save,
});


/*
* Child block import
*/

import './blocks';
