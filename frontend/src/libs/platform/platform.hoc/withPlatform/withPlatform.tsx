import React from 'react';
import { PlatformContext } from '@libs/platform/platform.context/PlatformContext';

import type { IWithPlatformProps } from './withPlatform.typings';

import { getDisplayNameComponent } from '@helpers/getDisplayNameComponent/getDisplayNameComponent';

export const withPlatform = function <D, T>(
	platform: IWithPlatformProps<D, T>,
) {
	const DesktopComponent = platform.desktop();
	const TouchPhoneComponent = platform['touch-phone']();
	let isDesktop = false;

	const Component = function (props: T | D) {
		const platform = React.useContext(PlatformContext);

		if (platform === 'desktop') {
			isDesktop = true;
			return <DesktopComponent {...(props as D)} />;
		}

		return <TouchPhoneComponent {...(props as T)} />;
	};

	Component.displayName = `WithPlatform(${getDisplayNameComponent(
		isDesktop ? DesktopComponent : TouchPhoneComponent,
	)})`;

	return Component;
};
