import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import MenuSandwich from './MenuSandwich';
import ItemsMenu from './MenuSandwich/ItemsMenu';

export default function Header() {
    const navigate = useNavigate();
    const [isMenu, setIsMenu] = useState(false);
    const handleMenuChange = (isMenu: boolean) => {
        setIsMenu(isMenu);
        // console.log(`Sandwich open: ${isChecked}`);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <div onClick={() => navigate('/')} className={styles.header__logo}></div>
                    <MenuSandwich onCheckboxChange={handleMenuChange} />
                </div>
            </header>
            <nav className={`${styles.navbar} ${isMenu ? styles.isCheckedOpen : styles.isCheckedClosed} `}>
                <ItemsMenu onRedirectChange={handleMenuChange} />
            </nav>
        </>
    );
}