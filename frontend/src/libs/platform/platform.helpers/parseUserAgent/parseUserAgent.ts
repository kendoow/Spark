import UAParser from 'ua-parser-js';
import type { IResult } from 'ua-parser-js';

type IParseUserAgent = (
	initialStringUserAgent: string | undefined,
) => IResult | null;

/**
 * Функция распаршивает userAgent и предстовляет его в виде объекта.
 * Использует сторонюю библиотеку ua-parse-js.
 * @param initialStringUserAgent userAgent - строка
 * @returns 
 */
export const parseUserAgent: IParseUserAgent = function (
	initialStringUserAgent,
) {
	if (!initialStringUserAgent) {
		return null;
	}

	return new UAParser(initialStringUserAgent).getResult();
};
