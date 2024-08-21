import { BindingOrValue } from "@rbxts/pretty-react-hooks";
import React, { forwardRef } from "@rbxts/react";

import type { AssetId } from "../../../../types/utils/roblox";
import type { FrameProps } from "./frame";

export interface ImageProps extends FrameProps<ImageLabel> {
	/** The image to display. */
	Image: BindingOrValue<AssetId>;
}

/**
 * A component for displaying an image.
 *
 * @example
 *
 * ```tsx
 * <ImageLabel
 * 	Image="rbxassetid://1234567890"
 * 	Native={{
 * 		Size={new UDim2(0, 100, 0, 100)}
 * 	}}
 * />;
 * ```
 *
 * @component
 *
 * @see https://developer.roblox.com/en-us/api-reference/class/ImageLabel
 */
const ImageLabel = forwardRef((props: Readonly<ImageProps>, ref: React.Ref<ImageLabel>) => {
	const { CornerRadius, Image, Native, children } = props;

	return (
		<imagelabel
			ref={ref}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Image={Image}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(1, 0, 1, 0)}
			{...Native}
		>
			{CornerRadius ? <uicorner CornerRadius={CornerRadius} /> : undefined}
			{children}
		</imagelabel>
	);
});

export default ImageLabel;