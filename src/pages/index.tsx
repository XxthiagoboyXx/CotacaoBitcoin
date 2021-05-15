
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { DropDown } from '../components/DropDown';
import { MoneyBox } from '../components/MoneyBox';
import styles from '../styles/app.module.scss'
import { GetServerSideProps } from 'next';
import { fileURLToPath } from 'node:url';

type Moeda = {
  code: string;
  /*codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  priceActual: string;
  ask: string;
  timestamp: string;
  create_date: string;*/
}


type HomeProps = {
  moedas: Array<Moeda>
}


export default function Home(props) {

  const value = JSON.stringify(props.moedas.BTC.bid);

  return (
    <>

      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content={`Cotação Bitcoin = ${value}`} />
        <meta name="author" content="Auba Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={styles.body}>


        <div className="container">
          <h1>Cotação Bitcoin</h1>
        </div>

        <div className={styles.container}>

          <div>
            <span className={styles.value}>R$ {value.replace(/['"]+/g, '')}</span> <br />
          </div>

        </div>

        <div className={styles.container}>
          <h1 id="historia">O que é Bitcoin?</h1>
          <p className={styles.p} > Segundo a <a href="https://pt.wikipedia.org/wiki/Bitcoin" target="_blank">Wikipedia</a> Bitcoin é uma criptomoeda descentralizada, sendo um dinheiro eletrônico para transações ponto-a-ponto. O primeiro artigo descrevendo uma implementação do Bitcoin foi apresentado em 2007 na lista de discussão The Cryptography Mailing por um programador ou grupo de programadores sob o pseudônimo Satoshi Nakamoto. <br />
           O artigo descrevendo o funcionamento do bitcoin foi publicado em 2007 por Satoshi Nakamoto. Uma versão inicial do software foi lançada em 2009. Até 2012, a moeda era usada principalmente em mercados negros virtuais, tais quais o Silk Road. Desde 2013, o uso e a cotação da moeda perante o dólar tem aumentado significativamente.</p>
        </div>

      </body>

      {/*
        <form className="navbar">
          <div className="container-fuild">
            <form className="d-flex">
              <MoneyBox name="BTC" />
              <input className="form-control me-2" type="text" placeholder="1" aria-label="Actual Value" />
            </form>
          </div>

          <div className={styles.buttons}>

          </div>

          <div className="container-fuild">
            <form className="d-flex">
              <MoneyBox name="R$" />
              <input className="form-control me-2" type="text" placeholder={value.replace(/['"]+/g, '')} aria-label="Actual Value" />
            </form>
          </div>


        </form>
   */}







    </>
  );
}



export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/json/all')

  /*
    const moedas = data.map(moeda => {
      return {
        code: moeda.code,
        codein: moeda.codein,
        name: moeda.name,
        high: moeda.high,
        low: moeda.low,
        varBid: moeda.varBid,
        pctChange: moeda.pctChange,
        bid: moedas.moeda.bid,
        priceActual: moeda.bid.,
        ask: moeda.ask,
        timestamp: moeda.timestamp,
        create_date: moeda.create_date,

      };
    })
  */

  return {
    props: {
      moedas: data,
    }
  }
}

