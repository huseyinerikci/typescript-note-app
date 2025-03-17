import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteData } from "../../types";
import { v4 } from "uuid";

const initialState: { notes: Note[] } = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<NoteData>) {
      const newNote: Note = { ...action.payload, id: v4() };
      state.notes.splice(0, 0, newNote); //yada unshift
      //state.notes.push(newNote);  dizi sonuna ekler
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const i = state.notes.findIndex((note) => note.id === action.payload);
      state.notes.splice(i, 1);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const i = state.notes.findIndex((note) => note.id === action.payload.id);
      state.notes.splice(i, 1, action.payload);
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
