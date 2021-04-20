import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './notesReducer';

export const store = configureStore({
  reducer: {
    notesReducer: NotesReducer,
  },
});
