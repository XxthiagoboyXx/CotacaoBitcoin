import styles from './styles.module.scss';


export function Footer() {
    return (
        <>
            <footer className="bg-dark text-center text-white">
                {/*<!-- Grid container -->*/}
                <div className="container p-4 pb-0">
                    {/*<!-- Section: Social media -->*/}
                    <section className="mb-0">
                        <p className="text-light">App desenvolvido por <a href="https://github.com/XxthiagoboyXx" target="_blank" rel="noreferrer">Thiago Santos</a></p>
                        <p className="text-light">Contato: <a href="https://instagram.com/thiago.log" target="_blank" rel="noreferrer">@thiago.log </a></p>

                    </section>
                    {/*<!-- Section: Social media -->*/}
                </div>
                {/*<!-- Grid container -->*/}

                {/*<!-- Copyright -->*/}
                <div className="text-center p-3 background-color: rgba(0, 0, 0, 0.2);">
                    © 2021 Copyright: Thiago Santos Santana
                </div>
                {/*<!-- Copyright -->*/}
            </footer>

        </>
    );


}