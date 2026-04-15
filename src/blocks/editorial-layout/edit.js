import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['ud/editorial-item'];

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'ud-editorial-layout',
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				orientation="vertical"
				renderAppender={InnerBlocks.ButtonBlockAppender}
			/>
		</div>
	);
}