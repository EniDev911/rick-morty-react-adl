import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const CardCharacter = ({character}) => {

  const Sw = withReactContent(Swal);

  const showModal = ({name, image, origin, status, species}) => {
    let placeOrigin = "",
        statusCharacter = "",
        tipo = "";
        status.toLowerCase() === "alive" 
              ? statusCharacter = "🟢 Vivo"
              : statusCharacter = "🔴 Muerto" 

  switch (species.toLowerCase()){
    case "human":
      tipo = "humano"
      break
    default:
      tipo = species
  }
  switch (origin.name) {
      case 'unknown':
        placeOrigin = "Desconocido"
        break
      case 'Earth (Replacement Dimension)':
        placeOrigin = "Tierra (dimensión de reemplazo)"
        break
      case 'Citadel of Ricks':
        placeOrigin = "Ciudadela de Ricks"
        break
      case 'Detoxifier':
        placeOrigin = "Desintoxicante"
      default:
        placeOrigin = origin.name
  }
    
  Sw.fire({
    imageUrl : image,
    imageWidth: '100%',
    width: 290,
    position: "top",
    showCloseButton: false,
    title: `<strong class="fs-5">${name}<strong>`,
    html: `
    <strong>${statusCharacter}</strong><hr>  
      <strong class="p-1 bg-dark rounded text-light">Origen:</strong><br>
      ${placeOrigin}<br>
      <strong>Tipo ${tipo}</strong>
    `,
    confirmButtonText: 'cerrar',
    confirmButtonColor: '#ff4030',
    background: '#646464',
    color: '#ccc',
    customClass: {
      container: 'bg-dark bg-gradient',
      image: 'img-fluid',
      confirmButton: 'btn-warning',
      popup: 'bg-dark bg-gradient border'
    }
  })
  }
  return (
    <Card bg="dark" className='p-2'>
      <Card.Img variant="top" 
        src={character.image} 
        className="img-fluid"
        onClick={()=> {showModal(character)}}
        />
    </Card>
  )
}

export default CardCharacter