import { popupConfig } from './setting'

const showModalCharacter = (Sw, { name, image, origin, status, species }) => {
  let placeOrigin = "",
    statusCharacter = "",
    tipo = "";
  status.toLowerCase() === "alive"
    ? statusCharacter = "🟢 Vivo"
    : status.toLowerCase() === "dead"
      ? statusCharacter = "🔴 Muerto"
      : statusCharacter = "❔ Desconocido"

  switch (species.toLowerCase()) {
    case "human":
      tipo = "🧑‍🦲humano"
      break
    case "mythological creature":
      tipo = "🔱 criatura mitologica"
      break
    case "animal":
      tipo = "🐾 animal"
      break
    case "robot":
      tipo = "🤖 robot"
      break
    case "alien":
      tipo = "👽 alien"
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
    ...popupConfig,
    imageUrl: image,
    title: `<small class="text-light fs-5">${statusCharacter}</small><br>${name}`,
    html: `
     <hr class="text-warning p-0 m-0">  
     <h5 class="p-1 rounded text-warning text-uppercase">Origen:<h5>
      <p class="p-0">${placeOrigin}</p>
      <h5 class="p-1 rounded text-warning text-uppercase">Tipo:<h5>
      <p class="p-0 text-capitalize">${tipo}</p>
    `,
  })
}



export default showModalCharacter;