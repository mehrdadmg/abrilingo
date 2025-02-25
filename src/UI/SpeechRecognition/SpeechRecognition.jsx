import { useState, useEffect, useRef } from 'react';
import TextToSpeech from '../../components/TextToSpeech/TextToSpeech';

import { IoMicCircleSharp } from 'react-icons/io5';
import { IoStopCircleSharp } from 'react-icons/io5';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

import './SpeechRecognition.css';

const SpeechRecognition = (props) => {
  const [viewAnswer, setViewAnswer] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    // بررسی سازگاری مرورگر
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    /* if (!SpeechRecognition) {
      alert('Speech Recognition API در این مرورگر پشتیبانی نمی‌شود.');
      return;
    } */

    // ایجاد نمونه‌ای از Recognition
    const recognition = new SpeechRecognition();
    recognition.lang = 'de-DE'; // تنظیم زبان به آلمانی
    recognition.continuous = true; // ادامه دادن به گوش دادن
    recognition.interimResults = true; // نمایش نتایج موقت (اختیاری)

    // ذخیره نمونه در useRef برای کنترل آسان‌تر
    recognitionRef.current = recognition;

    // هنگام دریافت متن از گفتار
    recognition.onresult = (event) => {
      const transcriptArray = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');

      setTranscript(transcriptArray);
    };

    // مدیریت پایان یافتن تشخیص گفتار
    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      recognition.stop(); // توقف در هنگام حذف کامپوننت
    };
  }, []);

  // تابع شروع/توقف گوش دادن
  const handleToggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsListening(!isListening);
  };

  /* const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const toggle = listening
    ? stop
    : () => {
        listen({ lang: 'de-DE' });
      };
 */

  const handleanswer = () => setViewAnswer(!viewAnswer);

  return (
    <div className="speechRecognitionContainer">
      <div className="textarea">
        <textarea value={transcript} onChange={(event) => setTranscript(event.target.value)} />
        <button
          className="answer-btn"
          onClick={() => {
            handleanswer();
          }}
        >
          <IoCheckmarkCircleOutline />
        </button>
        <button className="record-btn" onClick={handleToggleListening}>
          {isListening ? <IoStopCircleSharp /> : <IoMicCircleSharp />}
        </button>
      </div>

      {viewAnswer && (
        <div className="answerContainer">
          <p className="answer">{props.text}</p>
          <TextToSpeech text={props.text} rate={props.rate} pitch={props.pitch} voice={props.voice} />
        </div>
      )}
    </div>
  );
};

export default SpeechRecognition;
