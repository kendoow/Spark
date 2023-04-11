import type { ComponentType } from 'react';

export interface IWithPlatformProps<D, T> {
	desktop: () => ComponentType<D>;
	'touch-phone': () => ComponentType<T>;
}
