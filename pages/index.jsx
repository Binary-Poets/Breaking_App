import Head from 'next/head'
//import styles from '../styles/Home.module.css'

import Layout from '../components/Layout';
import CharacterCard from '../components/CharacterCard';
import { CharacterContext } from '../context/CharacterContext';

import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';

const index = (props) => {

  const characterContext = useContext(CharacterContext);

  const [characters, setCharacters] = useState([]);
  const [quote, setQuote] = useState();

  //using it as useEffect Trigger + api offset value
  const [count, setCount] = useState(0);


  //getting all characters while loading
  // useEffect(() => {

  //   //using context api for the characters. it ain't necessary and dumb also. still using it just to demonstrate the context api
  //   characterContext.refresh();
  //   console.log(characterContext.characters);


  //   axios.get(`https://www.breakingbadapi.com/api/quote/random`).then(response => {
  //     //console.log(response.data[0].quote);
  //     setQuote(response.data[0].quote);
  //   });
  // }, [count])


  //triggering useEffect in every n seconds to get new quote from the api
  useInterval(() => {

    console.log('Ami Shamim Bhai!');
    setCount(Math.floor(Math.random() * 10));
  }, 5000);


    function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <>

      <Layout>

        <div className="the-main-container">
          <h1 className="main-header">{quote}</h1>
          <div className="card-wrapper">

            {
              characterContext.characters.map(character => {
                return <CharacterCard key={character.id} character={character} />
              })
            }

          </div>
        </div>

      </Layout>

    </>
  )
}

export default index;