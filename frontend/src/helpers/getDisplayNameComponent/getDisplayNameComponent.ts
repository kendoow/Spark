import type { IGetDisplayNameComponent } from './getDisplayNameComponent.typings';

export const getDisplayNameComponent: IGetDisplayNameComponent = function (
	WrappedComponent,
) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
