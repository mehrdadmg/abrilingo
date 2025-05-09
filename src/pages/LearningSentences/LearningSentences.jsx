// src/WordReview.js
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

import { chooseLesson, handleSentenceNo, handleContentsLength } from '../../redux/actionCreator';

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
  // setVoiceURI,
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
  //const voiceURIRef = useRef();

  // ایجاد یک رفرنس برای دسترسی به متدهای کامپوننت فرزند
  const bottomActionsRef = useRef(null);

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
  let voiceURI = getVoiceURI();

  let voice = speechSynthesis.getVoices().find((v) => v.voiceURI === voiceURI);

  useEffect(() => {
    rateRef.current = getRate();
    pitchRef.current = getPitch();
    //voiceURIRef.current = getVoiceURI();

    (async () => {
      try {
        await loadeContent();
      } catch (error) {}
    })();
  }, []);

  /*  // تنظیم آبجکت swipeable برای تشخیص کشیدن‌ها
  const swipeNavigation = useSwipeable({
    // کشیدن از چپ به راست - تابع قبلی
    onSwipedRight: () => {
      console.log('کشیدن از چپ به راست - تابع قبلی');
      //onPrev();
    },
    // کشیدن از راست به چپ - تابع بعدی
    onSwipedLeft: () => {
      console.log('کشیدن از راست به چپ - تابع بعدی');
      //onNext();
    },
    // تنظیمات بیشتر برای کنترل حساسیت و رفتار
    trackMouse: false, // غیرفعال کردن در موس
    swipeDuration: 500, // مدت زمان کشیدن به میلی‌ثانیه
    preventDefaultTouchmoveEvent: true, // جلوگیری از رفتارهای پیش‌فرض
    delta: 50, // حداقل فاصله لازم برای تشخیص کشیدن (پیکسل)
  }); */

  // تنظیمات اسوایپ
  const swipeHandlers = useSwipeable({
    // اسوایپ از راست به چپ (برای "بعدی")
    onSwipedLeft: () => {
      console.log('اسوایپ به چپ - فراخوانی تابع بعدی');
      if (bottomActionsRef.current) {
        bottomActionsRef.current.handlerNextContent();
      }
    },
    // اسوایپ از چپ به راست (برای "قبلی")
    onSwipedRight: () => {
      console.log('اسوایپ به راست - فراخوانی تابع قبلی');
      if (bottomActionsRef.current) {
        bottomActionsRef.current.handlerPreviousContent();
      }
    },
    // تنظیمات بیشتر
    trackMouse: false,
    swipeDuration: 500,
    minDistance: 50,
  });

  if (dataLesson.info.name === lesson) {
    return (
      <div {...swipeHandlers} className="learning-sentences">
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
                voice={voice}
              />
              <BottomActions ref={bottomActionsRef} />
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div>Loade.....</div>;
};

export default LearningSentences;
