import {Button, Stack } from 'react-bootstrap';
import { useEffect } from 'react';

const Paginate = ({page, setPage}) => {

useEffect(()=>{
 // detector de eventos 
 const handleKeyDown = (e) => {
      if(e.key === 'ArrowLeft'){
        page === 1 ? setPage(1) : setPage(page - 1)
        return
      }else if('ArrowRight'){
        page === 42 ? setPage(42) : setPage(page + 1);
        return;
      }
    }
    window.addEventListener('keydown',handleKeyDown);
  return () => {
    // se remueve una vez de desmonta el componente
      window.removeEventListener('keydown', handleKeyDown);
  }
}, [page])

    return (
      <Stack direction="horizontal" gap={2} className="w-100 justify-content-between">
        <Button
          variant="primary"
          onClick={() => {
            page === 1 ? setPage(1) : setPage(page - 1);
          }}
        >
          Anterior
        </Button>
        <p className="bg-dark text-light p-2 rounded fs-3">{page}</p>
        <Button variant="primary" onClick={() => {
          page === 42 ? setPage(42) : setPage(page + 1)
          }}>
          Siguiente
        </Button>
      </Stack>
    );
  };

  export default Paginate;