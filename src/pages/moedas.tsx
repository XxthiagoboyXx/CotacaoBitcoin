import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import styles from '../styles/app.module.scss'
import { GetServerSideProps } from 'next';
import { NavBar2 } from '../components/NavBar2';

export default function Home(props) {
    const valueBTC = JSON.stringify(props.moedas.BTC.bid);
    const valueLTC = JSON.stringify(props.moedas.LTC.bid);
    const valueETH = JSON.stringify(props.moedas.ETH.bid);
    const valueXRP = JSON.stringify(props.moedas.XRP.bid);
    const valueUSD = JSON.stringify(props.moedas.USD.bid);
    const valueEUR = JSON.stringify(props.moedas.EUR.bid);



    return (
        <>  <NavBar2 />
            <body className={styles.body}>
                <div className="container" id="BTC">
                    <h1>Cotação Bitcoin</h1>
                </div>

                <div className={styles.container}>

                    <div >
                        <span className={styles.value}>R$ {valueBTC.replace(/['"]+/g, '')}</span>
                    </div>

                </div>



                <div className="container" id="LTC">
                    <h1>Cotação Litecoin</h1>
                </div>

                <div className={styles.container}>

                    <div>
                        <span className={styles.value}>R$ {valueLTC.replace(/['"]+/g, '')}</span>
                    </div>

                </div>



                <div className="container" id="ETH">
                    <h1>Cotação Ethereum</h1>
                </div>

                <div className={styles.container}>

                    <div>
                        <span className={styles.value}>R$ {valueETH.replace(/['"]+/g, '')}</span>
                    </div>

                </div>



                <div className="container" id="XRP">
                    <h1>Cotação XRP</h1>
                </div>

                <div className={styles.container}>

                    <div>
                        <span className={styles.value}>R$ {valueXRP.replace(/['"]+/g, '')}</span>
                    </div>

                </div>



                <div className="container" id="DOL">
                    <h1>Cotação Dólar</h1>
                </div>

                <div className={styles.container}>

                    <div>
                        <span className={styles.value}>R$ {valueUSD.replace(/['"]+/g, '')}</span>
                    </div>

                </div>



                <div className="container" id="EUR">
                    <h1>Cotação Euro</h1>
                </div>

                <div className={styles.container}>

                    <div>
                        <span className={styles.value}>R$ {valueEUR.replace(/['"]+/g, '')}</span>
                    </div>

                </div>



            </body>





        </>

    );
}


export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await api.get('/json/all')


    return {
        props: {
            moedas: data,
        }
    }
}

