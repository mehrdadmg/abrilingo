// src/WordReview.js
import { useState, useEffect, useRef } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

import { GrPrevious } from 'react-icons/gr';

import BottomActions from '../../UI/BottomActions/BottomActions';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import {
  getlessen,
  setlessen,
  getLang,
  getLearnSentenceNo,
  setLearnSentenceNo,
  getPracticeSentenceNo,
  setPracticeSentenceNo,
  getVoiceURI,
  setVoiceURI,
  getRate,
  getPitch,
} from '../../api/handelLocalStorage';
import { getData, putlessenToIndexedDB } from '../../api/handelIndexedDB';

import { startLessen } from '../../content/lessens';

import './LearningSentences.css';

const LearningSentences = (props) => {
  const [contentIndex, setContentIndex] = useState(0); // index of sentence
  const [learnLessen, setLearnLessen] = useState(startLessen); // selected lessen
  const [selectedContent, setSelectedContent] = useState(startLessen.content); // the array of selected sentences
  const [isTabSelected, setIsTabSelected] = useState(false); // is selected Tab active or not
  const [contentLength, setContentLength] = useState(1);
  const [isSentenceSelected, setIsSentenceSelected] = useState(false); // is sentence selected or not

  const translatTo = getLang();

  const rateRef = useRef();
  const pitchRef = useRef();
  const voiceRef = useRef();
  const voiceURIRef = useRef();

  const { voices } = useSpeechSynthesis();

  let lessen = getlessen();
  if (!lessen) {
    lessen = startLessen.info.name;
    setlessen(lessen); // !!!!!!  must be check need it or not
  }

  let sentenceNo;
  if (props.typePage === 'Learn') {
    sentenceNo = getLearnSentenceNo();
  } else if (props.typePage === 'Practice') {
    sentenceNo = getPracticeSentenceNo();
  }

  const handelIsSentenceSelected = async () => {
    if (!isTabSelected) {
      setIsSentenceSelected(learnLessen && learnLessen.content[contentIndex].isSelected); // !!!!!!
    } else {
      setIsSentenceSelected(selectedContent && selectedContent[contentIndex].isSelected);
    }
  };

  const loadeContent = async () => {
    let lessenContent = await getData(lessen);
    if (lessenContent && lessenContent.content) {
      setLearnLessen(lessenContent);
      setContentLength(lessenContent.content.length);
      let selected = lessenContent.content.filter((item) => item.isSelected === true);
      setSelectedContent(selected);
      setContentIndex(parseInt(sentenceNo));
    } else {
      setLearnLessen(startLessen);
    }
  };

  const handelIsSelected = () => {
    if (!isTabSelected) {
      // isTabSelected is the previose state
      setContentIndex(0);
      setContentLength(selectedContent.length);
    } else {
      setContentLength(learnLessen.content.length);
      if (props.typePage === 'Learn') {
        setContentIndex(getLearnSentenceNo());
      } else if (props.typePage === 'Practice') {
        setContentIndex(getPracticeSentenceNo());
      }
    }
    setIsTabSelected((p) => !p);
  };

  function handelPutContent(learnLessen, contentIndex) {
    learnLessen.content[contentIndex].isSelected = !learnLessen.content[contentIndex].isSelected;
    putlessenToIndexedDB(learnLessen.info.name, learnLessen);
  }

  const temp = async () => {
    try {
      await loadeContent();
      console.log('//////////////: ', learnLessen);
      handelIsSentenceSelected();
    } catch (error) {}
  };

  useEffect(() => {
    rateRef.current = getRate();
    pitchRef.current = getPitch();
    voiceURIRef.current = getVoiceURI();
    (async () => {
      await temp();
    })();
    console.log('LearningSentences useEffect render', learnLessen);
  }, []);

  useEffect(() => {
    handelIsSentenceSelected();
  }, [learnLessen, contentIndex, isTabSelected]);

  useEffect(() => {
    (async () => {
      try {
        //setIsLoading(true);
        voiceRef.current =
          voices.find((v) => v.voiceURI === voiceURIRef.current) ||
          voices.findLast((v) => v.lang === 'de-DE' || v.lang === 'de_DE');
        setVoiceURI(voiceRef.current.voiceURI);
      } catch (error) {
        //console.log(error);
        //setIsError(true);
      } finally {
        //setIsLoading(false);
      }
    })();
  }, [voices]);

  const handlerNextContent = () => {
    if (contentIndex < contentLength - 1) {
      setContentIndex(parseInt(contentIndex + 1));
      if (!isTabSelected) {
        if (props.typePage === 'Learn') {
          setLearnSentenceNo(contentIndex + 1);
        } else if (props.typePage === 'Practice') {
          setPracticeSentenceNo(contentIndex + 1);
        }
      }
    }
  };

  const handlerPreviousContent = () => {
    if (contentIndex > 0) {
      setContentIndex(parseInt(contentIndex - 1));

      if (props.typePage === 'Learn') {
        setLearnSentenceNo(contentIndex - 1);
      } else if (props.typePage === 'Practice') {
        setPracticeSentenceNo(contentIndex - 1);
      }
    }
  };
  console.log('+++++++++: ', learnLessen);

  if (learnLessen.info.name === lessen) {
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
              <h2 className="unit_name">{`${props.typePage} : ${learnLessen.info.name}`}</h2>{' '}
              <span>{`${contentIndex + 1}/${contentLength} Sentences reviewed`}</span>
            </div>
            <div className="card">
              <ContentContainer
                content={!isTabSelected ? learnLessen.content[contentIndex] : selectedContent[contentIndex]}
                translatTo={translatTo}
                handelSelectedTab={() => handelIsSelected()}
                handelSelectSentence={() => {
                  handelPutContent(learnLessen, contentIndex);
                }}
                isSentenceSelected={isSentenceSelected}
                hasSelectedSentence={selectedContent.length !== 0}
                typePage={props.typePage}
                rate={rateRef.current}
                pitch={pitchRef.current}
                voice={voiceRef.current}
              />
              <BottomActions
                next={handlerNextContent}
                previous={handlerPreviousContent}
                contentIndex={contentIndex}
                contentLength={contentLength}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div>Loade.....</div>;
};

export default LearningSentences;
