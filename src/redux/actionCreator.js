import * as actionTypes from './actionTypes.js';

export const chooseLesson = (lessonData) => {
  return {
    type: actionTypes.CHOOSE_LESSON,
    payload: lessonData,
  };
};

export const toggleSelecteSentence = (id) => {
  return {
    type: actionTypes.TOGGLE_SELECTE_SENTENCE,
    payload: id,
  };
};

export const handleSentenceNo = (number) => {
  return {
    type: actionTypes.SENTENCE_NO,
    payload: number,
  };
};

export const handleTypePage = (typePage) => {
  return {
    type: actionTypes.TYPE_PAGE,
    payload: typePage,
  };
};

export const handleIsSentenceSelected = (isSentenceSelected) => {
  return {
    type: actionTypes.IS_SENTENCE_SELECTED,
    payload: isSentenceSelected,
  };
};

export const handleSelectedTabActive = (isSelectedTabActive) => {
  return {
    type: actionTypes.IS_SELECTED_TAB_ACTIVE,
    payload: isSelectedTabActive,
  };
};

export const handleContentsLength = (contentsLength) => {
  return {
    type: actionTypes.CONTENTS_LENGTH,
    payload: contentsLength,
  };
};
