import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SingleCharacter = ({ characterID }) => {

  const router = useRouter();
  const [character, setCharacter] = useState({ name: "", birthday: "", occupation: [], img: "", status: "", nickname: "", portrayed: "", category: "" });

  //getting character data
  useEffect(() => {

    console.log(`Dynamic use effect triggered`);

    axios.get(`https://www.breakingbadapi.com/api/characters/${characterID}`).then(response => {
      setCharacter({
        name: response.data[0].name,
        birthday: response.data[0].birthday,
        occupation: response.data[0].occupation,
        img: response.data[0].img,
        status: response.data[0].status,
        nickname: response.data[0].nickname,
        portrayed: response.data[0].portrayed,
        category: response.data[0].category
      });
    });

  }, [])

  const bhaiTesting = () =>{
    console.log(router.pathname);
    console.log(router.query.characterID);
  }


  return (
    <>
    
    <Layout>
      <div className="the-main-container">
        {/* <button onClick={bhaiTesting}>Test</button> */}
        <h1 className="main-header">{character.nickname}</h1>
        <div className="single-character-container">
          <div className="single-character-container--left">
            <img src={character.img} alt="" />
          </div>
          <div className="single-character-container--right">

            <div className="character-detail">
              <span className="character-detail-1">Name: </span>
              <span className="character-detail-2"> {character.name} </span>
            </div>
            <div className="character-detail">
              <span className="character-detail-1">Birthday: </span>
              <span className="character-detail-2"> {character.birthday} </span>
            </div>
            <div className="character-detail">
              <span className="character-detail-1">Occupation: </span>
              <span style={{fontSize: "1.2rem"}} className="character-detail-2">The {
                character.occupation.map(occupation=>{
                  return `${occupation} . `;
                })
              } </span>
            </div>
            <div className="character-detail">
              <span className="character-detail-1">Status: </span>
              <span className="character-detail-2"> {character.status} </span>
            </div>
            <div className="character-detail">
              <span className="character-detail-1">Portrayed: </span>
              <span className="character-detail-2"> {character.portrayed} </span>
            </div>
            <div className="character-detail">
              <span className="character-detail-1">Category: </span>
              <span className="character-detail-2"> {character.category} </span>
            </div>

          </div>

        </div>

      </div>
    </Layout>
    </>
  )
}

export default SingleCharacter;


// SingleCharacter.getInitialProps = async ({ query }) => {
//   const { characterID } = query

//   console.log(`Welcome Amigo!!`);
//   console.log(characterID)

//   return { characterID }
// }

SingleCharacter.getInitialProps = (c) => {
  return {
    characterID: String(c.query.characterID),
    key: String(c.query.characterID),
  };
};