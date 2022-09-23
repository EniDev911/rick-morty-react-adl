import { popupConfig } from './setting'

const showModalCharacter = (Sw, { name, image, origin, status, species }) => {
  let placeOrigin = "",
    statusCharacter = "",
    tipo = "";
  status.toLowerCase() === "alive"
    ? statusCharacter = "🟢 Vivo"
    : status.toLowerCase() === "dead"
      ? statusCharacter = "🔴 Muerto"
      : statusCharacter = "👤 Desconocido"
  switch (species.toLowerCase()) {
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
    ...popupConfig,
    imageUrl: image,
    title: `<h2>${name}<h2>`,
    html: `
    <strong>${statusCharacter.toUpperCase()}</strong>
        <hr>  
    <h4 class="bg-dark p-1 rounded mb-1" text-light">Origen:<h4>
      <p class="p-0 fs-5">${placeOrigin}</p>
    <h4 class="bg-dark p-1 rounded mb-1" text-light">Especie:<h4>
      <p class="p-0 fs-5">Tipo ${tipo}</p>
    `,
  })
}

export default showModalCharacter;