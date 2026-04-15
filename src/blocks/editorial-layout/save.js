import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'ud-editorial-layout',
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}