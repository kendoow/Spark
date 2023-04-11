import React from 'react';
import type { IPlatform } from '../platform.typings';

const platform: IPlatform = 'desktop';

/**
 * Контекст с платформой пользователя (touch / desktop).
 */
export const PlatformContext = React.createContext<IPlatform>(platform);
