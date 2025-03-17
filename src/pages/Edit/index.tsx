import React from "react";
import { Note, NoteData } from "../../types";
import { useNavigate, useOutletContext } from "react-router-dom";
import PageContainer from "../../styled/PageContainer";
import { Typography } from "@mui/material";
import Form from "../../components/form";
import { updateNote } from "../../redux/slices/notesSlice";
import { useDispatch } from "react-redux";
const Edit: React.FC = () => {
  const note = useOutletContext<Note>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data: NoteData) => {
    dispatch(updateNote({ id: note.id, ...data }));
    navigate(`/note/${note.id}`);
  };
  return (
    <PageContainer>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Notu Düzenle
      </Typography>

      <Form note={note} handleSubmit={handleSubmit} />
    </PageContainer>
  );
};

export default Edit;
