import styles from './H4.module.scss';

interface Props{
    text: string
}

export default function H4(props: Props){
    return(
        <h4 className={styles.text}>{props.text}</h4>
    );
}