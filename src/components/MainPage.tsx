import React from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import NoteCard from "./Form/NoteCard";

const MainPage = () => {
  return (
    <div className="container py-5">
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Notlar</h1>
        <Link to={"/new"}>
          <Button>Oluştur</Button>
        </Link>
      </Stack>

      {/* Filtering area */}
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <ReactSelect />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      {/* Notes */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        <Col>
          <NoteCard />
        </Col>
        <Col>
          <NoteCard />
        </Col>
        <Col>
          <NoteCard />
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;
