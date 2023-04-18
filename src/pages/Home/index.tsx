import Attractions from 'components/Attractions';
import styles from './Home.module.scss';
import Banner from "components/Banner";
import Dates from "components/Dates";
import H3 from "components/PressetsFonts/H3";
import H2 from 'components/PressetsFonts/H2';
import H5 from 'components/PressetsFonts/H5';
import H6 from 'components/PressetsFonts/H6';
import H4 from 'components/PressetsFonts/H4';

export default function Home() {
    return (
        <section>
            <Banner />
            <Dates />
            <div className={styles.title}>
                <H3 text="/Line-Up/" />
            </div>
            <Attractions text='SÁBADO <11/03>' >
                <H2 text='System of a DOM' />
                <div className={styles.attractions__groupText}>
                    <H5 text='Python Maiden' />
                    <H5 text='Apollo Client 2001' />
                </div>
                <div className={styles.attractions__groupText}>
                    <H5 text='Bon Java' />
                    <H5 text='NickCallback' />
                </div>
                <div className={styles.attractions__groupText}>
                    <H6 text='Linkin Promises' />
                    <H6 text='Fullstack Fighters' />
                </div>
                <div className={styles.attractions__groupText}>
                    <H6 text='Papa React' />
                    <H6 text='Angular in Chains' />
                </div>
                <div className={styles.attractions__groupText}>
                    <H4 text='Agnostic Front-end' />
                    <H4 text='SlipkNode' />
                </div>
                <div className={styles.attractions__groupText}>
                    <H4 text='Pink Flutter' />
                    <H4 text='Kiss' />
                </div>
            </Attractions>
            <Attractions text='DOMINGO <12/03>' >
                <H2 text='Lana Del Ploy' />
                <div className={styles.attractions__groupText}>
                    <H5 text='Dua Lib' />
                    <H5 text='The Backnd' />
                    <H5 text='CSS Styles' />
                </div>
                <div className={styles.attractions__groupText}>
                    <H5 text='ArrayAna Grande' />
                    <H5 text='DJ Query' />
                </div>
                <div className={styles.attractions__groupText}>
                    <H6 text='Miley Cypress' />
                    <H6 text='The Bootstrap Boys' />
                </div>
                <div className={styles.attractions__groupText}>
                    <H6 text='Json Derulo' />
                    <H6 text='CloudPlay' />
                    <H6 text='Dev Lovato' />
                </div>
                <div className={styles.attractions__groupText}>
                    <H4 text='Kylie MiLOG' />
                    <H4 text='Jenkins Brothers' />
                    <H4 text='Rubycat Dolls' />
                </div>
            </Attractions>
        </section>
    );
}