import { FC } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { Note } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  note: Note;
}

const NoteCard: FC<Props> = ({ note }) => {
  return (
    <Card variant="elevation">
      <CardActionArea component={Link} to={`/note/${note.id}`}>
        <CardContent>
          <Typography gutterBottom variant="h5" textAlign={"center"}>
            {note.title}
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            gap={1}
            flexWrap={"wrap"}
            mt={2}
          >
            {note.tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;
