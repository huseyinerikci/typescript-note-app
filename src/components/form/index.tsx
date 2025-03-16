import { Button, Grid2, Stack, styled, TextField } from "@mui/material";
import { FC, useState } from "react";
import TagSelect from "./TagSelect";
import { NoteData } from "../../types";
import { Link } from "react-router-dom";

const Lable = styled("label")`
  font-size: 1rem;
`;

interface Props {
  handleSubmit: (data: NoteData) => void;
}

const Form: FC<Props> = ({ handleSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [markdown, setMarkdown] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleForm = () => {
    if (!title || !markdown || !selectedTags.length) {
      return alert("Lütfen tüm alanları doldurunuz");
    }
    handleSubmit({ title, markdown, tags: selectedTags });
  };
  return (
    <Stack spacing={7} sx={{ mt: 5 }}>
      <Grid2 container spacing={5}>
        <Grid2 size={6}>
          <TextField
            label="Başlık"
            variant="outlined"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid2>
        <Grid2 size={6}>
          <TagSelect
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </Grid2>
      </Grid2>

      <Stack gap={2}>
        <Lable>İçerik (markdown destekler)</Lable>
        <TextField
          multiline
          minRows={15}
          maxRows={50}
          fullWidth
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </Stack>

      <Stack direction={"row"} spacing={5} justifyContent={"end"}>
        <Button
          component={Link}
          to=".."
          type="button"
          color="secondary"
          variant="contained"
          sx={{ minWidth: "100px" }}
        >
          Geri
        </Button>
        <Button
          onClick={handleForm}
          variant="contained"
          sx={{ minWidth: "100px" }}
        >
          Kaydet
        </Button>
      </Stack>
    </Stack>
  );
};

export default Form;
