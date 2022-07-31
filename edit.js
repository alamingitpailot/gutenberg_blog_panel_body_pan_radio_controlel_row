
import { __ } from '@wordpress/i18n';
import { useBlockProps,InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

const BLOCKS_TEMPLATE = [
	['core/image', {}],
	['core/heading', { placeholder:"Enter Your Title" } ],
	['core/paragraph', { placeholder: 'Description Here' }],
	['create-block/custom-post-social-row'],
	['core/button', {placeholder:'Change the text'}]
];

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks template={BLOCKS_TEMPLATE} allowedBlocks={['create-block/custom-post-social-row']} />
		</div>
	);
}
