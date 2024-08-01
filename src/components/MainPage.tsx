import React from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Col>col1</Col>
          <Col>col2</Col>
        </Row>
      </Form>
    </div>
  );
};

export default MainPage;
