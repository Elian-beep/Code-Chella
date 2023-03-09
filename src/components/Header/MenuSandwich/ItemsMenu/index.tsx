import { useNavigate } from 'react-router-dom';
import styles from './ItemsMenu.module.scss';

type Props = {
    openMenu: boolean;
}

export default function ItemsMenu({ openMenu }: Props) {
    const navigate = useNavigate();

    function redirectPage(route: string){
        navigate(`/${route}`);
    }

    return (
        <nav className={styles.navbar}>
            <ul className={`${styles.menu} ${openMenu ? styles.isCheckedOpen : styles.isCheckedClosed} ${styles.items}`}>
                <li className={styles.items__item} onClick={()=>redirectPage('experience')}>A experiência</li>
                <div className={styles.bar}></div>
                <li className={styles.items__item} onClick={() => redirectPage('map')}>Mapa de Setores</li>
                <div className={styles.bar}></div>
                <li className={styles.items__item} onClick={() => redirectPage('info')}>Informações</li>
                <div className={styles.bar}></div>
                <li className={styles.items__item} onClick={() => redirectPage('ticket')}>ingresso</li>
            </ul>
        </nav>
    );
}