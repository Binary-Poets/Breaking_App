import Link from 'next/link';

const CharacterCard = (props) =>{

    return(
        <>
        <div className="card">
            <img className="card-img" src={props.character.img} alt=""/>
            <div className="card-box">
              <span className="card-box__name"> {props.character.name} </span>
              <div className="card-box-nick">
                <img className="card-box-nick--icon" src="https://image.flaticon.com/icons/svg/942/942434.svg" alt=""/>
                <Link href="/character/[characterID]" as={"/character/" + props.character.char_id} ><span className="card-box-nick--nickname"> {props.character.nickname} </span></Link>
              </div>
              <span style={{marginTop: "1rem", textAlign: "center", color: "var(--color-primary)", fontSize: "1.3rem"}} className="card-box__name">The {
                props.character.occupation.map(occupation=>{
                  return `${occupation} . `;
                })
              } </span>
            </div>
          </div>
        </>
    )

}


export default CharacterCard;