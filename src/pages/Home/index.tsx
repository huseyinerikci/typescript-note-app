import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PageContainer from "../../styled/PageContainer";
import { Typography } from "@mui/material";

const Home: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes);
  return (
    <PageContainer>
      <Typography variant="h4">Notlar</Typography>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
        </div>
      ))}
    </PageContainer>
  );
};

export default Home;
