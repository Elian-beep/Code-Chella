import styles from './Header.module.scss';
import MenuSandwich from './MenuSandwich';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}></div>
                <MenuSandwich />
            </div>
        </header>
    );
}