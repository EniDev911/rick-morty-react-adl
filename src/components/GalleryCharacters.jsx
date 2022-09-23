import React, { useState, useEffect } from "react";
import CardCharacter from "./CardCharacter";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Paginate from "./Paginate";

const GalleryCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`,
          { method: "GET" }
        );
        const json = await response.json();
        setCharacters(json.results);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchApi();
  }, [page]);

  return (
    <Container className="my-3">
      <Row className="g-4">
        {loading ? (
          <Col className="my-auto">
            <Spinner animation="grow" role="status" variant="warning" />
            <Spinner animation="grow" role="status" variant="danger" className="mx-2"/>
            <Spinner animation="grow" role="status" variant="info" />
          </Col>
        ) : (
          <>
            <Paginate page={page} setPage={setPage} />
            {characters.map((character) => (
              <Col key={character.id.toString()} xs={10} md={6} lg={3}>
                <CardCharacter character={character} />
              </Col>)
              )}
            <Paginate page={page} setPage={setPage} />
          </>
        )}
      </Row>
    </Container>
  );
};

export default GalleryCharacters;
