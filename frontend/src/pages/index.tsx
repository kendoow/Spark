import { Button } from '@components/Button/Button';
import { Poppins } from 'next/font/google';

const popins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export default function Home() {
	return (
		<main className={popins.className}>
			<Button> 1231</Button>
		</main>
	);
}
