import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	ToolbarDropdownMenu,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { alignCenter, alignLeft, alignRight } from '@wordpress/icons';

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'core/list',
	'core/buttons',
	'core/image',
];

export default function Edit( { attributes, setAttributes } ) {
	const { position } = attributes;
	const positionOptions = [
		{
			label: __( 'Links', 'editorial-layout-block-ud' ),
			value: 'left',
			icon: alignLeft,
		},
		{
			label: __( 'Mittig', 'editorial-layout-block-ud' ),
			value: 'center',
			icon: alignCenter,
		},
		{
			label: __( 'Rechts', 'editorial-layout-block-ud' ),
			value: 'right',
			icon: alignRight,
		},
	];
	const activePosition =
		positionOptions.find( ( option ) => option.value === position ) ||
		positionOptions[ 0 ];

	const blockProps = useBlockProps( {
		className: `is-position-${ position }`,
	} );

	return (
		<>
			<BlockControls group="block">
				<ToolbarDropdownMenu
					icon={ activePosition.icon }
					label={ __(
						'Position im Layout',
						'editorial-layout-block-ud'
					) }
					controls={ positionOptions.map( ( option ) => ( {
						icon: option.icon,
						title: option.label,
						isActive: option.value === position,
						onClick: () =>
							setAttributes( { position: option.value } ),
					} ) ) }
				/>
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={ __( 'Position', 'editorial-layout-block-ud' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __(
							'Position im Layout',
							'editorial-layout-block-ud'
						) }
						value={ position }
						options={ positionOptions.map(
							( { label, value } ) => ( {
								label,
								value,
							} )
						) }
						onChange={ ( value ) =>
							setAttributes( { position: value } )
						}
						__next40pxDefaultSize={ true }
						__nextHasNoMarginBottom={ true }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="ud-editorial-item__inner">
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						renderAppender={ InnerBlocks.DefaultBlockAppender }
					/>
				</div>
			</div>
		</>
	);
}
