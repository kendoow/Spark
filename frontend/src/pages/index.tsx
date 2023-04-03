import { Inter } from 'next/font/google';

import { Landing } from '@features/Landing/Landing';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const Home = () => {
	return (
		<main className={inter.className}>
			<Landing />
		</main>
	);
};

export default Home;
