import styles from './styles.module.scss';

export function NavBar2() {
    return (

        <div className={styles.nav}>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">



                <form className="container-fluid justify-content-center">
                    <a href="#BTC">
                        <button className="btn btn-lg btn-outline-secondary me-4" type="button">BTC</button>
                    </a>

                    <a href="#LTC">
                        <button className="btn btn-lg btn-outline-secondary me-4" type="button">LTC</button>
                    </a>

                    <a href="#ETH">
                        <button className="btn btn-lg btn-outline-secondary me-4" type="button">ETH</button>
                    </a>

                    <a href="#XRP">
                        <button className="btn btn-lg btn-outline-secondary me-4" type="button">XRP</button>
                    </a>

                    <a href="#DOL">
                        <button className="btn btn-lg btn-outline-secondary me-4" type="button">DOL</button>
                    </a>

                    <a href="#EUR">
                        <button className="btn btn-lg btn-outline-secondary me-4" type="button">EUR</button>
                    </a>

                </form>


            </nav>
        </div >


    );
}