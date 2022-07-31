import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { PlainText, useBlockProps,InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	RadioControl,
	Dashicon
} from "@wordpress/components";

import metadata from './block.json';
// import Edit from './edit';
// import save from './save';

registerBlockType(metadata, {

	attributes: {

		accountType: {
			type: "string",
			default:"twitter",
		},
		twitter: {
			default: {
				text: "",
				account: ""
			}
		},
		tweet: {
			default: {
				text: "",
				message: "",
				url:""
			}
		},
		youtube: {
			default: {
				text: '',
				url: '',
			}
		}
	},

	edit({ attributes, setAttributes }) {
		const twitter = attributes.twitter;

		return (
			<div {...useBlockProps}>
				<InspectorControls style={{ marginBottom: "40px" }}>
					<PanelBody>

						<PanelRow>

						<RadioControl
							label="Social Media"
							help="The media of social media use"
							selected={ attributes.accountType }
							options={ [
								{ label: 'Follow on Twitter', value:"twitter" },
								{ label: 'Share a Tweet', value:"tweet" },
								{ label: 'Subscribe on YouTube', value:"youtube" },
							] }
							onChange={(value) => setAttributes({ accountType:value } ) }
						/>
							
						</PanelRow>

					</PanelBody>

				</InspectorControls>

				 
				{attributes.accountType == "twitter" && (
					<div style={{ color: "#000", background:"#000" }}>
						<Dashicon icon='twitter' />

						<PlainText
							placeholder='Follow me on Twitter'
							value={attributes.twitter.text}
							onChange={(value) => {
								const newTwitter = {...attributes.twitter};
								newTwitter.text = value;
								setAttributes({ twitter: newTwitter });
							}}
						/>

						<PlainText
							placeholder='Your twitter account'
							value={attributes.twitter.account}

							onChange={(value) => {
								const newAccount = { ...attributes.twitter };
								newAccount.account = value; 
								setAttributes({twitter:newAccount})

							}}
						/>
					</div>
				)}
				{attributes.accountType == "tweet" && (
					<Dashicon icon='tweet' />
				)}
				{attributes.accountType == "youtube" && (
					<Dashicon icon='youtube' />
				)}
				{attributes.twitter.text}<br/> {attributes.twitter.account}
			</div>
		);
		
	},
	save() {
		return <div {...useBlockProps}></div>;
	}
} );