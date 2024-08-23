import React from "react";
import { useOutletContext } from "react-router-dom";

const NoteDetail = () => {
  const props = useOutletContext();
  console.log(props);
  return <div>NoteDetail</div>;
};

export default NoteDetail;
