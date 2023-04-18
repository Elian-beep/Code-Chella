import H7 from 'components/PressetsFonts/H7';
import styles from './Postiche.module.scss';

interface Props {
    text: string
}

export default function Postiche(props: Props) {
    return (
        <section className={styles.container}>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <H7 text={props.text} />
            </div>
            <div className={styles.line}></div>
        </section>
    );
}