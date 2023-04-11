import { withPlatform } from '@libs/platform/platform.hoc/withPlatform/withPlatform';
import { Header as desktop } from './Header@desktop';
import { Header as touch } from './Header@touch-phone';

export const Header = withPlatform({
	desktop: () => desktop,
	'touch-phone': () => touch,
});
