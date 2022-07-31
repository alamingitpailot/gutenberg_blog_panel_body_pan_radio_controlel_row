import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

const template = [
    ["core/columns", {}, [
		["core/column", {templateLock:'all',width:"30%",verticalAlignment:"center"}, [["core/image", {sizeSlug:"thumbnail"}]]],
		
		["core/column", { templateLock: "all" }, [["core/button"]]
		],
    ]]
];

export default function edit() {
	return (
		<p { ...useBlockProps() }>
			 
		</p>
	);
}
