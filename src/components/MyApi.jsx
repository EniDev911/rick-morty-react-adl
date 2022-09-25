import React, { useState, useEffect } from "react";
import CardCharacter from "./CardCharacter";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Paginate from "./Paginate";
import Navigation from "./Navigation";
import Footer from "./Footer";

const MyApi = () => {
  // hooks
  const [characters, setCharacters] = useState([]),
    [loading, setLoading] = useState(true),
    [page, setPage] = useState(1),
    [search, setSearch] = useState("");

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
    <>
      {loading ? (
        <Row className="min-vh-100">
        <Col className="my-auto">
          <Spinner animation="grow" role="status" variant="warning" />
          <Spinner
            animation="grow"
            role="status"
            variant="danger"
            className="mx-2"
          />
          <Spinner animation="grow" role="status" variant="info" />
        </Col>
        </Row>
      ) : (
        <>
          <Navigation setSearch={setSearch} className="w-100" />
          <Container className="my-3">
            <Row className="g-4">
              <Paginate page={page} setPage={setPage} />
              {characters
                .filter((character) => {
                  return character.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .reverse()
                .sort((a, b) => {
                  return a.name.length > b.name.length ? 1 : -1;
                })
                .map((character) => (
                  <Col
                    key={character.id.toString()}
                    xs={10}
                    md={6}
                    lg={3}
                    className="mx-auto"
                  >
                    <CardCharacter character={character} />
                  </Col>
                ))}
              <Paginate page={page} setPage={setPage} />
            </Row>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default MyApi;
