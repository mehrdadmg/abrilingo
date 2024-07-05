const getLang = () => {
  let lang = localStorage.getItem('Lang');
  if (lang) return lang;
  lang = 'russian';
  localStorage.setItem('Lang', lang);
  return lang;
};

const setLang = (lang) => {
  localStorage.setItem('Lang', lang);
};

const getlessen = () => {
  let lessen = localStorage.getItem('lessen');
  return lessen;
};

const setlessen = (lessen) => {
  localStorage.setItem('lessen', lessen);
  localStorage.setItem('LearnSentenceNo', '0');
  localStorage.setItem('PracticeSentenceNo', '0');
};

const getLearnSentenceNo = () => {
  let learnSentenceNo = localStorage.getItem('LearnSentenceNo');
  if (learnSentenceNo) return learnSentenceNo;
  learnSentenceNo = '0';
  localStorage.setItem('LearnSentenceNo', learnSentenceNo);
  return learnSentenceNo;
};

const setLearnSentenceNo = (learnSentenceNo) => {
  localStorage.setItem('LearnSentenceNo', learnSentenceNo);
};

const getPracticeSentenceNo = () => {
  let practiceSentenceNo = localStorage.getItem('PracticeSentenceNo');
  if (practiceSentenceNo) return practiceSentenceNo;
  practiceSentenceNo = '0';
  localStorage.setItem('PracticeSentenceNo', practiceSentenceNo);
  return practiceSentenceNo;
};

const setPracticeSentenceNo = (practiceSentenceNo) => {
  localStorage.setItem('PracticeSentenceNo', practiceSentenceNo);
};

export {
  getLang,
  setLang,
  getlessen,
  setlessen,
  getLearnSentenceNo,
  setLearnSentenceNo,
  getPracticeSentenceNo,
  setPracticeSentenceNo,
};
