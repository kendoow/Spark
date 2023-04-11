import type { ComponentType } from 'react';

export type IGetDisplayNameComponent = (
	WrapperComponent: ComponentType,
) => string;
