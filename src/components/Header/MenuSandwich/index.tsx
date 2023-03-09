import { useState } from 'react';
import styles from './MenuSandwich.module.scss';

type Props = {
    onCheckboxChange: (isChecked: boolean) => void; //?
}
export default function MenuSandwich({ onCheckboxChange }: Props) {
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setIsChecked(isChecked);
        onCheckboxChange(isChecked);
    }

    return (
        <>
            <div className={styles.menuSandwich}>
                <input checked={isChecked} onChange={handleCheckboxChange} className={styles.menuSandwich__button} type="checkbox" id='checkbox-menu' />
                <label className={styles.menuSandwich__icon} htmlFor="checkbox-menu">
                    <span className={styles.menuSandwich__icon__part} ></span>
                    <span className={styles.menuSandwich__icon__part}></span>
                    <span className={styles.menuSandwich__icon__part}></span>
                </label>
            </div>
        </>
    );
}