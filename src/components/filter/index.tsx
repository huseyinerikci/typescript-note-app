import { Autocomplete, Grid2, TextField } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter: FC<Props> = ({ setTitle, setSelectedTags }) => {
  const { tags } = useSelector((store: RootState) => store.tags);
  return (
    <Grid2 container spacing={6} mt={5}>
      <Grid2 size={6}>
        <TextField
          label="Başlığa Göre Ara"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid2>
      <Grid2 size={6}>
        <Autocomplete
          multiple
          id="tag-search"
          options={tags}
          onChange={(e, allTags) => setSelectedTags(allTags)}
          renderInput={(params) => (
            <TextField {...params} label="Etikete Göre Ara" />
          )}
        />
      </Grid2>
    </Grid2>
  );
};

export default Filter;
