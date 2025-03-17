import { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PageContainer from "../../styled/PageContainer";
import { Alert, Button, Grid2, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Filter from "../../components/filter";
import NoteCard from "../../components/card/NoteCard";
const Home: FC = () => {
  const { notes } = useSelector((store: RootState) => store.notes);
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  //Başlık ve Etiket Filtresi ve usemome  ile optimize edildi
  const filteredNotes = useMemo(
    () =>
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(title.toLowerCase()) &&
          selectedTags.every((tag) => note.tags.includes(tag))
      ),
    [notes, title, selectedTags]
  );

  return (
    <PageContainer>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <img src="/logo.png" alt="logo" width={50} />
          <Typography variant="h4">Notlar</Typography>
        </Stack>
        <Stack>
          <Button component={Link} to={"/create"} variant="contained">
            Oluştur
          </Button>
        </Stack>
      </Stack>

      <Filter setTitle={setTitle} setSelectedTags={setSelectedTags} />

      <Grid2 container spacing={2} mt={4}>
        {filteredNotes.length === 0 ? (
          <Grid2 size={12}>
            <Alert severity="warning">Not Bulunamadı</Alert>
          </Grid2>
        ) : (
          filteredNotes.map((note) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={note.id}>
              <NoteCard key={note.id} note={note} />
            </Grid2>
          ))
        )}
      </Grid2>
    </PageContainer>
  );
};

export default Home;
