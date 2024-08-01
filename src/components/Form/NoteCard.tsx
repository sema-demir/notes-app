import React from "react";
import { Badge, Card, Stack } from "react-bootstrap";

const NoteCard = () => {
  return (
    <Card>
      <Card.Body>
        <Stack className="justify-content-center align-items-center">
          <span>Title</span>
          <Stack
            className="justify-content-center gap-1"
            direction="horizontal"
          >
            <Badge>Label</Badge>
            <Badge>Label</Badge>
            <Badge>Label</Badge>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
