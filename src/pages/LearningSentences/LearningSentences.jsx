// src/WordReview.js
import { useDispatch, useSelector } from 'react-redux';
import { chooseLesson, handleSentenceNo, handleContentsLength } from '../../redux/actionCreator';

import { useEffect, useRef } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

import { GrPrevious } from 'react-icons/gr';

import BottomActions from '../../UI/BottomActions/BottomActions';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import {
  getlesson,
  setlesson,
  getLang,
  getLearnSentenceNo,
  getPracticeSentenceNo,
  getVoiceURI,
  setVoiceURI,
  getRate,
  getPitch,
} from '../../api/handleLocalStorage';
import { getData } from '../../api/handleIndexedDB';

import { startLesson, noSentenceSelected } from '../../content/lessons';

import './LearningSentences.css';

const LearningSentences = (props) => {
  const dispatch = useDispatch();

  const dataLesson = useSelector((state) => state.lesson);
  const contentIndex = useSelector((state) => state.indexSentence);
  const typePage = useSelector((state) => state.typePage);
  const activeTab = useSelector((state) => state.isSelectedTabActive);
  const contentLength = useSelector((state) => state.contentsLength);

  const translatTo = getLang();

  const rateRef = useRef();
  const pitchRef = useRef();
  const voiceRef = useRef();
  const voiceURIRef = useRef();

  const { voices } = useSpeechSynthesis();

  let lesson = getlesson();
  if (!lesson) {
    lesson = startLesson.info.name;
    setlesson(lesson);
  }

  let sentenceNo;
  if (typePage === 'Learn') {
    sentenceNo = getLearnSentenceNo();
  } else if (typePage === 'Practice') {
    sentenceNo = getPracticeSentenceNo();
  }

  const loadeContent = async () => {
    let lessonContent = await getData(lesson);
    if (lessonContent && lessonContent.content) {
      dispatch(chooseLesson(lessonContent));
      dispatch(handleContentsLength(lessonContent.content.length));
      dispatch(handleSentenceNo(parseInt(sentenceNo)));
    } else {
      dispatch(chooseLesson(startLesson));
    }
  };

  useEffect(() => {
    rateRef.current = getRate();
    pitchRef.current = getPitch();
    voiceURIRef.current = getVoiceURI();
    (async () => {
      try {
        await loadeContent();
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    (() => {
      try {
        voiceRef.current =
          voices.find((v) => v.voiceURI === voiceURIRef.current) ||
          voices.findLast((v) => v.lang === 'de-DE' || v.lang === 'de_DE');
        voiceRef.current && setVoiceURI(voiceRef.current.voiceURI);
      } catch (error) {
        console.log(error);
        //setIsError(true);
      } finally {
        //setIsLoading(false);
      }
    })();
  }, [voices]);

  if (dataLesson.info.name === lesson) {
    return (
      <div className="learning-sentences">
        <div className="container">
          <div className="flex-container">
            <div className="header">
              <button
                className="back-button"
                onClick={() => {
                  props.BackToMainPage();
                }}
              >
                <GrPrevious /> Main Page
              </button>
            </div>
            <div className="review-status">
              <h2 className="unit_name">{`${typePage} : ${dataLesson.info.name}`}</h2>{' '}
              <span>{`${contentIndex + 1}/${contentLength} Sentences reviewed`}</span>
            </div>
            <div className="card">
              <ContentContainer
                content={
                  !activeTab
                    ? dataLesson.content[contentIndex]
                    : dataLesson.content.filter((item) => item.isSelected === true)[contentIndex] ||
                      noSentenceSelected.content[0]
                }
                translatTo={translatTo}
                rate={rateRef.current}
                pitch={pitchRef.current}
                voice={voiceRef.current}
              />
              <BottomActions />
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div>Loade.....</div>;
};

export default LearningSentences;
