import { ReactNode } from 'react';
import styles from './Attractions.module.scss';
import Postiche from './Postiche';

interface Props {
    children: ReactNode;
    text: string
}

export default function Attractions(props: Props) {
    return (
        <section className={styles.attractions}>
            <Postiche text={props.text} />
            <div className={styles.attractions__titles}>
                {props.children}
            </div>
        </section>
    );
}