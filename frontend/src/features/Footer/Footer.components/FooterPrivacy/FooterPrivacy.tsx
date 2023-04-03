import styles from './FooterPrivacy.module.scss';

export function FooterPrivacy() {
	// TODO: Реализовать на бекенде микросервис, который будет отдавать
	// год по местоположению пользователя.

	// useEffect(() => {
	//     navigator.geolocation.getCurrentPosition((position) => {
	//         console.log(position.coords)
	//         console.log(position.timestamp)
	//         console.log(new Date(position.timestamp).getFullYear())
	//     }, (err) => {
	//         console.log("Error" + err.message)
	//     })
	// }, [])

	return (
		<div className={styles.privacy}>
			<p>© Spark 2023.</p>
			<p>All rights reserved.</p>
		</div>
	);
}
