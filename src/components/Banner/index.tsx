import styles from './Banner.module.scss';
import banner from '../../assets/banner.png';

export default function Banner(){
    return(
        <div className={styles.banner}>
            <img src={banner} alt="Banner" className={styles.banner__img} />
            {/* <div className={styles.banner__img}></div> */}
        </div>
    );
}