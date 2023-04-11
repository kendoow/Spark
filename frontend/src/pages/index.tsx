import type { NextPage, NextPageContext } from 'next';
import { Inter } from 'next/font/google';

import { PlatformContext, detectTypeDevice } from '@libs/platform';

import { Landing } from '@features/Landing/Landing';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

interface IHomePageProps {
	platform: 'desktop' | 'touch-phone';
}

const getInitialProps = async function (context: NextPageContext) {
	const props: IHomePageProps = {
		platform: 'desktop',
	};
	const userAgent = context.req.headers['user-agent'];
	props.platform = detectTypeDevice(userAgent);

	return props;
};

const Home: NextPage<IHomePageProps> = ({ platform }) => {
	return (
		<PlatformContext.Provider value={platform}>
			<main className={inter.className}>
				<Landing />
			</main>
		</PlatformContext.Provider>
	);
};

Home.getInitialProps = getInitialProps;

export default Home;
