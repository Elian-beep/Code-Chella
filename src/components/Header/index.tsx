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
        console.log(`Sandwich open: ${isMenu}`);
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.container__content}>
                    <div onClick={() => navigate('/')} className={styles.container__logo}></div>
                    <MenuSandwich onCheckboxChange={handleMenuChange} />
                </div>
            </div>
            <ItemsMenu openMenu={isMenu} />
        </header>
    );
}