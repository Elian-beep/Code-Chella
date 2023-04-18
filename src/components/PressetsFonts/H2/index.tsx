import styles from './H2.module.scss';

interface Props{
    text: string
}

export default function H2(props: Props){
    return(
        <h2 className={styles.text}>{props.text}</h2>
    );
}