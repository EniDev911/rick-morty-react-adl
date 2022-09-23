
const Navigation = ({ setSearch }) => {

  const handleOnChangeBusqueda = (e) => {
    setSearch(e.target.value);
  }

  return (
    <nav className="navbar navbar-light mb-4 p-3 bg-dark text-light">
      <img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/logo/logo_con_bg.png" alt="logo" className="position-absolute end-50" width="60"/>
      <span className="navbar-brand text-light">
        React Rick And Morty ADL
      </span>
      <input type="text"
          className="fs-4" 
          placeholder="Buscar Personaje"
          onChange={handleOnChangeBusqueda}
      />
    </nav>
  )
}

export default Navigation