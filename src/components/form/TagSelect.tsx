import { Autocomplete, Stack, styled, TextField } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag } from "../../redux/slices/tagsSlice";
import { RootState } from "../../redux/store";

interface Props {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagSelect: FC<Props> = ({ selectedTags, setSelectedTags }) => {
  const { tags } = useSelector((state: RootState) => state.tags);
  const dispatch = useDispatch();

  return (
    <Autocomplete
      multiple
      freeSolo
      options={tags}
      value={selectedTags}
      onChange={(_, inputTags) => {
        if (inputTags.length === 6) {
          return alert("Maksimum 5 tags");
        }
        if (inputTags[inputTags.length - 1]) {
          dispatch(addTag(inputTags[inputTags.length - 1]));
        }
        setSelectedTags(inputTags);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Etiket"
          placeholder="Etiket ekle"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};

export default TagSelect;
