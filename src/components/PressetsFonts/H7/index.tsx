import styles from './H7.module.scss';

interface Props{
    text: string
}

export default function H7(props: Props){
    return(
        <h6 className={styles.text}>{props.text}</h6>
    );
}