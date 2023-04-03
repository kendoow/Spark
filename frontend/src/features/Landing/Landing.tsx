import { Footer } from '@features/Footer/Footer';
import { Header } from './Landing.features/Header/Header';
import { IntroBlock } from './Landing.features/IntroBlock/IntroBlock';
import { TeamBlock } from './Landing.features/TeamBlock/TeamBlock';

export function Landing() {
	return (
		<>
			<Header />
			<IntroBlock />
			<TeamBlock />
			<Footer />
		</>
	);
}
