import { PlatformContext as PlatformContextImport } from './platform.context/PlatformContext';
import { withPlatform as withPlatformImport } from './platform.hoc/withPlatform/withPlatform';
import { detectTypeDevice as detectTypeDeviceImport } from './platform.helpers/detectTypeDevice/detectTypeDevice';

import type { IPlatform as IPlatformImport } from './platform.typings/index';

export const withPlatform = withPlatformImport;
export const detectTypeDevice = detectTypeDeviceImport;
export const PlatformContext = PlatformContextImport;
export type IPlatform = IPlatformImport;
