import React, { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import ReactSelect from "react-select/creatable";
import { CreateNoteProps } from "./CreateNote";
import { Tag } from "../../types";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const NoteForm = ({
  createTag,
  availableTags,
  onSubmit,
  tags = [],
  title = "",
}: CreateNoteProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markDownRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markDownRef.current!.value,
      tags: selectedTags,
    });
    navigate(-1);
  };
  console.log(selectedTags);
  return (
    <Form onSubmit={handleSubmit}>
      <Stack>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Başlık</Form.Label>
              <Form.Control ref={titleRef} required className="shadow" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                onChange={(note_tags) =>
                  setSelectedTags(
                    note_tags.map((tag) => ({
                      label: tag.label,
                      id: tag.value,
                    }))
                  )
                }
                //yeni etiket oluşturuldugunda locale kaydet
                onCreateOption={(label) => {
                  //yeni obje tanımla
                  const newTag: Tag = { id: v4(), label };
                  //locale kaydet
                  createTag(newTag);
                  //state i günclle
                  setSelectedTags([...selectedTags, newTag]);
                }}
                //daha önceden olusturulan tagları listele
                options={availableTags?.map((item) => ({
                  label: item.label,
                  value: item.id,
                }))}
                isMulti
                className="shadow"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown" className="my-4">
          <Form.Label>İçerik</Form.Label>
          <Form.Control
            as={"textarea"}
            className="shadow"
            ref={markDownRef}
            required
            style={{ minHeight: "300px" }}
          />
        </Form.Group>
        <div className="d-flex justify-content-end gap-2">
          <Button type="submit">Kaydet</Button>
          <Button
            onClick={() => navigate(-1)}
            type="button"
            variant="secondary"
          >
            İptal
          </Button>
        </div>
      </Stack>
    </Form>
  );
};

export default NoteForm;
