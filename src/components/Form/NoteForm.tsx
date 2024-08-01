import React from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import ReactSelect from "react-select";

const NoteForm = () => {
  return (
    <Form>
      <Stack>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Başlık</Form.Label>
              <Form.Control required className="shadow" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect className="shadow" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown" className="my-4">
          <Form.Label>İçerik</Form.Label>
          <Form.Control as={"textarea"} className="shadow" />
        </Form.Group>
        <div className="d-flex justify-content-end gap-2">
          <Button type="submit">Kaydet</Button>
          <Button type="button" variant="secondary">
            İptal
          </Button>
        </div>
      </Stack>
    </Form>
  );
};

export default NoteForm;
