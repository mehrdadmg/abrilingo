import { configureStore } from '@reduxjs/toolkit';
import {
  lessonReducer,
  indexReducer,
  typePageReducer,
  isSentenceSelectedReducer,
  isSelectedTabActiveReducer,
  contentsLengthReducer,
} from './reducer';

const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    indexSentence: indexReducer,
    typePage: typePageReducer,
    isSentenceSelected: isSentenceSelectedReducer,
    isSelectedTabActive: isSelectedTabActiveReducer,
    contentsLength: contentsLengthReducer,
  },
});

export default store;
