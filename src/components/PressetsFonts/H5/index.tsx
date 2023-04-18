import styles from './H5.module.scss';

interface Props{
    text: string
}

export default function H5(props: Props){
    return(
        <h5 className={styles.text}>{props.text}</h5>
    );
}