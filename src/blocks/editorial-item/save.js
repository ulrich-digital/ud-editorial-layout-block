import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { position } = attributes;

	const blockProps = useBlockProps.save({
		className: `is-position-${position}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}