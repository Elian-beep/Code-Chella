import H6 from 'components/PressetsFonts/H6';
import styles from './Dates.module.scss';
import banner_pessoas from '../../assets/banner_pessoas-mobile.png';
import ButtonDefault from 'components/ButtonDefault';
import { ReactComponent as icon_ticket } from '../../assets/icon_ticket.svg';

export default function Dates() {
    const textDate = "< 11 e 12 de Março >";
    const textLocal = "Aluródromo de São Paulo";
    const textButton = "Comprar ingresso!";
    return (
        <section className={styles.dates}>
            {/* <img className={styles.dates__banner} src={banner_pessoas} alt="Banner pessoas"/> */}
            <span className={styles.dates__banner}></span>
            <div className={styles.dates__boxText} >
                <div>
                    <H6 text={textDate} />
                    <H6 text={textLocal} />
                </div>
                <p>
                    Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e,
                    claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
                </p>
                <div className={styles.dates__boxText__btn}>
                    <ButtonDefault icon={icon_ticket} text={textButton} hasIcon={true} backgroundColor='#2E7BA2' />
                </div>
            </div>
        </section>
    );
}