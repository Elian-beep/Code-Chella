import styles from './ButtonDefault.module.scss';

interface Props{
    backgroundColor: string,
    hasIcon: boolean,
    text: string,
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export default function ButtonDefault(props: Props) {
    const buttonColor = {
        backgroundColor: props.backgroundColor
    }
    return (
        <button className={styles.buttonDefault} style={buttonColor}>
            {props.hasIcon ? (
                <div className={styles.buttonDefault__hasIcon}>
                   <p className={styles.buttonDefault__font} >{props.text}</p> 
                   {props.icon && <props.icon />}
                </div>
            ) : (
                <p className={styles.buttonDefault__font} >{props.text}</p>
            )}
        </button>
    );
}