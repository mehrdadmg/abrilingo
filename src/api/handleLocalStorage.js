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

const getlesson = () => {
  let lesson = localStorage.getItem('lesson');
  return lesson;
};

const setlesson = (lesson) => {
  localStorage.setItem('lesson', lesson);
  localStorage.setItem('LearnSentenceNo', '0');
  localStorage.setItem('PracticeSentenceNo', '0');
};

const getLearnSentenceNo = () => {
  let learnSentenceNo = parseInt(localStorage.getItem('LearnSentenceNo'));
  if (learnSentenceNo) return learnSentenceNo;
  learnSentenceNo = 0;
  localStorage.setItem('LearnSentenceNo', learnSentenceNo);
  return learnSentenceNo;
};

const setLearnSentenceNo = (learnSentenceNo) => {
  localStorage.setItem('LearnSentenceNo', learnSentenceNo);
};

const getPracticeSentenceNo = () => {
  let practiceSentenceNo = parseInt(localStorage.getItem('PracticeSentenceNo'));
  if (practiceSentenceNo) return practiceSentenceNo;
  practiceSentenceNo = 0;
  localStorage.setItem('PracticeSentenceNo', practiceSentenceNo);
  return practiceSentenceNo;
};

const setPracticeSentenceNo = (practiceSentenceNo) => {
  localStorage.setItem('PracticeSentenceNo', practiceSentenceNo);
};

const getVoiceURI = () => {
  //console.log('getVoiceURI');
  let voiceURI = localStorage.getItem('VoiceURI');
  /* if (voiceURI) return voiceURI;
  voiceURI = '';
  localStorage.setItem('VoiceURI', voiceURI); */
  return voiceURI;
};

const setVoiceURI = (voiceURI) => {
  localStorage.setItem('VoiceURI', voiceURI);
};

const getVoice = () => {
  //console.log('getVoice');
  const voice = localStorage.getItem('Voice');
  if (!voice) {
    localStorage.setItem('Voice', '');
    return localStorage.getItem('Voice');
  }
  return voice;
};

const setVoice = (voice) => {
  localStorage.setItem('Voice', voice);
};

const getRate = () => {
  //console.log('getRate');

  let rate = localStorage.getItem('Rate');
  if (rate) return rate;
  rate = 1;
  localStorage.setItem('Rate', rate);
  return rate;
};

const setRate = (rate) => {
  localStorage.setItem('Rate', rate);
};

const getPitch = () => {
  //console.log('getPitch');

  let pitch = localStorage.getItem('Pitch');
  if (pitch) return pitch;
  pitch = 1;
  localStorage.setItem('Pitch', pitch);
  return pitch;
};

const setPitch = (pitch) => {
  localStorage.setItem('Pitch', pitch);
};

export {
  getLang,
  setLang,
  getlesson,
  setlesson,
  getLearnSentenceNo,
  setLearnSentenceNo,
  getPracticeSentenceNo,
  setPracticeSentenceNo,
  getVoiceURI,
  setVoiceURI,
  getRate,
  setRate,
  getPitch,
  setPitch,
  getVoice,
  setVoice,
};
