import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteData } from "../../types";
import { v4 } from "uuid";

const initialState: Note[] = [];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteData>) => {
      const newNote: Note = { ...action.payload, id: v4() };
      state.push(newNote);
    },
  },
});

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
