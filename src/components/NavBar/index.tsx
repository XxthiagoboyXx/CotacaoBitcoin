import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';


export function NavBar() {
    const currentDate = format(new Date(), 'dd/MM/yyyy', {
        locale: ptBR,
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">


            <div className="container-fluid">
                <a href="/" >
                    <img src="/logo2.png" alt="Logo" width="90px" height="50px" />
                </a>


                <div className={styles.date}>
                    <p>{currentDate}</p>
                </div>

                <div>
                    <form className="container-fluid justify-content-end">
                        <a href="/">
                            <button className="btn btn-lg btn-outline-warning me-4" type="button">Home</button>
                        </a>

                        <a href="/#historia">
                            <button className="btn btn-lg btn-outline-warning me-4" type="button">História</button>
                        </a>

                        <a href="/moedas">
                            <button className="btn btn-lg btn-outline-warning me-4" type="button">Outras Moedas</button>
                        </a>
                    </form>

                </div>
            </div>
        </nav>


    );
}