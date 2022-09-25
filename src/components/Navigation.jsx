const Navigation = ({ setSearch }) => {
  const handleOnChangeBusqueda = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="navbar navbar-nav mb-4 bg-dark text-light">
      <img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/logo/logo_con_bg.png" alt="logo" className="logo position-absolute end-50" width="60"/>
      <div className="container">
      <span className="navbar-brand text-light">React Rick And Morty ADL</span>
      <div className="form-floating text-light">
        <input
          type="text"
          id="search"
          className="form-control bg-dark text-light"
          placeholder="Filtrar"
          onChange={handleOnChangeBusqueda}
        />
        <label htmlFor="search">Filtrar</label>
      </div>
      </div>
    </nav>
  );
};

export default Navigation;
