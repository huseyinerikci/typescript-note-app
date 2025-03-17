import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Note } from "../../types";
import PageContainer from "../../styled/PageContainer";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Markdown from "react-markdown";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/slices/notesSlice";

const Detail: React.FC = () => {
  const note = useOutletContext<Note>();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };
  return (
    <PageContainer>
      <Stack direction="column" justifyContent="space-between" height={"100%"}>
        <Box>
          <Stack gap={1}>
            <Typography variant="h3">{note.title}</Typography>
            <Stack direction="row" gap={1} flexWrap={"wrap"} mt={2}>
              {note.tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </Stack>
          </Stack>

          <Box className="markdown">
            <Markdown>{note.markdown}</Markdown>
          </Box>
        </Box>

        <Stack direction="row" gap={2} justifyContent={"end"} py={4}>
          <Button
            component={Link}
            to=".."
            variant="contained"
            color="secondary"
          >
            GERİ
          </Button>
          <Button component={Link} to="edit" variant="contained" color="info">
            DÜZENLE
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            SİL
          </Button>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default Detail;
