import React, { createContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const CharacterContext = createContext();


const CharacterContextFunction = ({ children }) => {

    const [characters, setCharacters] = useState([]);

    //using it as useEffect Trigger + api offset value
    const [count, setCount] = useState(0);

    const refresh = () => {
        //getting all characters

        axios.get(`https://www.breakingbadapi.com/api/characters?limit=12&offset=${count}`).then(response => {
            console.log(response.data);
            setCharacters(response.data);
        });

        console.log('Triggered');
    }

    const searchCharacters = (searchString) =>{
        console.log(`This is the Context Api ${searchString}`);

        axios.get(`https://www.breakingbadapi.com/api/characters?name=${searchString}`).then(response => {
            //console.log(response.data);
            setCharacters(response.data);
        });

    }


    // //triggering useEffect in every n seconds
    // useInterval(() => {

    //     console.log('Ami Shamim Bhai!');
    //     setCount(Math.floor(Math.random() * (30 - 1 + 1) + 1));
    //     refresh();
    // }, 10000);


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
        <CharacterContext.Provider value={{ characters, setCharacters, refresh, searchCharacters }}>

            {children}

        </CharacterContext.Provider>
    )

}

export default CharacterContextFunction;