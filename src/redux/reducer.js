import * as actionTypes from './actionTypes';

import { startLesson } from '../content/lessons';

const initialState = startLesson;

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHOOSE_LESSON:
      return { ...action.payload };

    case actionTypes.TOGGLE_SELECTE_SENTENCE:
      let tempContent = state.content.map((sentence) =>
        sentence.id === action.payload ? { ...sentence, isSelected: !sentence.isSelected } : sentence
      );
      return { ...state, content: tempContent };

    default:
      return state;
  }
};

const indexReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.SENTENCE_NO:
      return action.payload;

    default:
      return state;
  }
};

const typePageReducer = (state = 'Learn', action) => {
  switch (action.type) {
    case actionTypes.TYPE_PAGE:
      return action.payload;

    default:
      return state;
  }
};

const isSentenceSelectedReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.IS_SENTENCE_SELECTED:
      return action.payload;

    default:
      return state;
  }
};

const isSelectedTabActiveReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.IS_SELECTED_TAB_ACTIVE:
      return action.payload;

    default:
      return state;
  }
};

const contentsLengthReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.CONTENTS_LENGTH:
      return action.payload;

    default:
      return state;
  }
};

export {
  lessonReducer,
  indexReducer,
  typePageReducer,
  isSentenceSelectedReducer,
  isSelectedTabActiveReducer,
  contentsLengthReducer,
};
