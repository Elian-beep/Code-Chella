import styles from './H3.module.scss';

interface Props{
    text: string
}

export default function H3(props: Props){
    return(
        <h3 className={styles.text}>{props.text}</h3>
    );
}