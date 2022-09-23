import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import showModalCharacter from '../utilities/popup';


const CardCharacter = ({character}) => {

  const Sw = withReactContent(Swal);
  
  return (
    <Card bg="dark" className='p-3'>
      <Card.Img variant="top" 
        src={character.image} 
        className="img-fluid"
        onClick={()=> {showModalCharacter(Sw, character)}}
        />
        <Card.Title className="text-light m-0">{character.name}</Card.Title>
    </Card>
  )
}

export default CardCharacter