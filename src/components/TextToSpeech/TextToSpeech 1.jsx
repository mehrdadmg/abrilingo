import React, { useState, useRef } from 'react';
import { FaCirclePlay, FaCircleStop, FaCirclePause, FaForward } from 'react-icons/fa6';
import './TextToSpeech.css';

const TextToSpeech = (props) => {
  //const [text, setText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  //const [rate, setRate] = useState(1);
  //const [pitch, setPitch] = useState(1);
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  /*   
  const handlePlay = () => {
    if (isPlaying && isPaused) {
      // Resume if paused
      synthRef.current.resume();
      setIsPaused(false);
    } else {
      // Start new speech
      if (synthRef.current.speaking) {
        synthRef.current.cancel(); // Stop any ongoing speech
      }

      const utterance = new SpeechSynthesisUtterance(props.text);
      utterance.rate = props.rate;
      utterance.pitch = props.pitch;
      utterance.voice = props.voice;
      utterance.lang = 'de-DE'; // تنظیم زبان (آلمانی در اینجا)
      utterance.onend = () => {
        setIsPlaying(false);
      };

      synthRef.current.speak(utterance);
      utteranceRef.current = utterance;
      setIsPlaying(true);
    }
  };
 */

  const handlePlay = () => {
    if (isPlaying && isPaused) {
      // Resume if paused
      synthRef.current.resume();
      setIsPaused(false);
    } else {
      // Start new speech
      if (synthRef.current.speaking) {
        synthRef.current.cancel(); // Stop any ongoing speech
      }

      // تقسیم متن به قطعات کوچک
      const chunks = props.text.split('\u200B');

      chunks.forEach((chunk, index) => {
        setTimeout(() => {
          //console.log(index, '  : ', chunk);
          const utterance = new SpeechSynthesisUtterance(chunk.trim());
          utterance.rate = props.rate;
          utterance.pitch = props.pitch;
          utterance.voice = props.voice;
          utterance.lang = 'de-DE';
          utterance.onend = () => {
            // وقتی خواندن متن به پایان می‌رسد
            if (index === chunks.length - 1) {
              setIsPlaying(false); // تمام قطعات تمام شده‌اند
            }
          };

          // خواندن قطعه
          synthRef.current.speak(utterance);
          utteranceRef.current = utterance;

          setIsPlaying(true);
        }, 1000); // فاصله زمانی بین هر قطعه
      });
    }
  };

  const handlePause = () => {
    if (synthRef.current.speaking) {
      synthRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    if (synthRef.current.speaking || isPaused) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  const handlePlaySentences = (sentences) => {
    let index = 0;

    const speakNextSentence = () => {
      if (index < sentences.length) {
        const utterance = new SpeechSynthesisUtterance(sentences[index]);
        utterance.rate = props.rate;
        utterance.pitch = props.pitch;
        utterance.voice = props.voice;
        utterance.lang = 'de-DE';

        utterance.onend = () => {
          index++;
          setTimeout(speakNextSentence, 2000); // 2-second delay
        };

        synthRef.current.speak(utterance);
      } else {
        setIsPlaying(false);
      }
    };

    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }

    setIsPlaying(true);
    speakNextSentence();
  };

  return (
    <div className="container-controls-button">
      {/* <button onClick={handlePlaySentences} className="control-button" disabled={isPlaying && !isPaused}>
        <FaForward />
      </button> */}
      <button onClick={handlePlay} className="control-button" disabled={isPlaying && !isPaused}>
        <FaCirclePlay />
      </button>
      <button onClick={handlePause} className="control-button" disabled={!isPlaying || isPaused}>
        <FaCirclePause />
      </button>
      <button onClick={handleStop} className="control-button" disabled={!isPlaying && !isPaused}>
        <FaCircleStop />
      </button>
    </div>
  );
};

export default TextToSpeech;
