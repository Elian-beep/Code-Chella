import Banner from "components/Banner";
import styles from "./Home.module.scss";
import Dates from "components/Dates";

export default function Home() {
    return (
        <section>
            <Banner />
            <Dates />
        </section>
    );
}