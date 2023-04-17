import styles from './H6.module.scss';

interface Props{
    text: string
}

export default function H6(props: Props){
    return(
        <h6 className={styles.text}>{props.text}</h6>
    );
}