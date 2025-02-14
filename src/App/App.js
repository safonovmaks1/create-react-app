import styles from './App.module.css';

export const App = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.app}>
					<h1 className={[styles.title, styles.color].join(' ')}>App</h1>
					<hr />
				</div>
			</div>
		</>
	);
};
