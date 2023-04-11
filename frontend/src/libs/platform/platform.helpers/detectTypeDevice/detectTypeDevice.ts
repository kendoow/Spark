import type { IPlatform } from '../../platform.typings/index';
import { parseUserAgent } from '../parseUserAgent/parseUserAgent';

type IDetectTypeDevice = (initialStringUserAgent: string) => IPlatform;

const nameOperationsSystemTouchProne = [
	'Android',
	'webOS',
	'iPhone',
	'iPad',
	'iPod',
	'BlackBerry',
	'Windows Phone',
];
/**
 * Функция позволяет определить девайс пользователя с помощью userAgent.
 * Работать может как на сервере так и на клиенте. (Можно использовать при SSR)
 * @param initialStringUserAgent userAgent - строка
 * @returns
 */
export const detectTypeDevice: IDetectTypeDevice = function (
	initialStringUserAgent,
) {
	const userAgent = parseUserAgent(initialStringUserAgent);
	if (userAgent === null) {
		return 'desktop';
	}

	let isTouchPhone = false;

	nameOperationsSystemTouchProne.forEach((operationSystem) => {
		if (userAgent.os.name.match(new RegExp(operationSystem))) {
			isTouchPhone = true;
		}
	});

	if (isTouchPhone) return 'touch-phone';

	return 'desktop';
};
