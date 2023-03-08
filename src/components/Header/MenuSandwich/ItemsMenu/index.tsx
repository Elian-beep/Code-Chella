import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ItemsMenu.module.scss';

type Props = {
    onRedirectChange: (isRedirect: boolean) => void; //?
}

export default function ItemsMenu(props: Props) {
    const navigate = useNavigate();
    const [isRedirect, setIsRedirect] = useState(false);

    
    function RedirectPage(){
        navigate('/experience');
        setIsRedirect(true);
        props.onRedirectChange(isRedirect);
    }

    return (
        <ul className={styles.items}>
            <li className={styles.items__item} onClick={() => navigate('/experience')}>A experiência</li>
            <div className={styles.bar}></div>
            <li className={styles.items__item} onClick={() => navigate('/map')}>Mapa de Setores</li>
            <div className={styles.bar}></div>
            <li className={styles.items__item} onClick={() => navigate('/info')}>Informações</li>
            <div className={styles.bar}></div>
            <li className={styles.items__item} onClick={() => navigate('/ticket')}>ingresso</li>
        </ul>
    );
}