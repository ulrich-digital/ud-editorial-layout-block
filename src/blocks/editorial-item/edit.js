import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'core/list',
	'core/buttons',
	'core/image',
];

const POSITION_LABELS = {
	left: __('Links', 'ud-editorial-layout-ud'),
	center: __('Mitte', 'ud-editorial-layout-ud'),
	right: __('Rechts', 'ud-editorial-layout-ud'),
};

export default function Edit({ attributes, setAttributes }) {
	const { position } = attributes;

	const blockProps = useBlockProps({
		className: `is-position-${position}`,
	});

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Position', 'ud-editorial-layout-ud')}
					initialOpen={true}
				>
					<SelectControl
						label={__('Ausrichtung', 'ud-editorial-layout-ud')}
						value={position}
						options={[
							{ label: __('Links', 'ud-editorial-layout-ud'), value: 'left' },
							{ label: __('Mitte', 'ud-editorial-layout-ud'), value: 'center' },
							{ label: __('Rechts', 'ud-editorial-layout-ud'), value: 'right' },
						]}
						onChange={(value) => setAttributes({ position: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="ud-editorial-item__meta">
					<span className="ud-editorial-item__position">
						{POSITION_LABELS[position] || POSITION_LABELS.left}
					</span>
				</div>

				<div className="ud-editorial-item__inner">
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						renderAppender={InnerBlocks.DefaultBlockAppender}
					/>
				</div>
			</div>
		</>
	);
}