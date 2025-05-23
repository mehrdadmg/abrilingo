import React, { useState, useRef, useEffect } from 'react';
import { FaCirclePlay, FaCircleStop, FaCirclePause /* , FaForward */ } from 'react-icons/fa6';
import './TextToSpeech.css';

const TextToSpeech = (props) => {
  //const [text, setText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  //const [rate, setRate] = useState(1);
  //const [pitch, setPitch] = useState(1);

  /////////
  // const synthRef = useRef(window.speechSynthesis);
  const synthRef = useRef(null);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  ////////
  const utteranceRef = useRef(null);

  useEffect(() => {
    // Check if speech synthesis is supported
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
      setIsSpeechSupported(true);

      // iOS requires speech synthesis to be initialized on user interaction
      if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
        const utterance = new SpeechSynthesisUtterance('');
        synthRef.current.speak(utterance);
        synthRef.current.cancel();
      }
    }
  }, []);
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
    if (!isSpeechSupported) return;

    if (isPlaying && isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
      return;
    }

    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }

    const chunks = props.text.split('\u200B');

    // For iOS, we need to chain the utterances
    let utterances = chunks.map((chunk, index) => {
      const utterance = new SpeechSynthesisUtterance(chunk.trim());
      utterance.rate = props.rate;
      utterance.pitch = props.pitch;
      utterance.voice = props.voice;
      utterance.lang = 'de-DE';

      if (index < chunks.length - 1) {
        utterance.onend = () => {
          setTimeout(() => {
            if (!isPaused) {
              synthRef.current.speak(utterances[index + 1]);
            }
          }, 1000);
        };
      } else {
        utterance.onend = () => {
          setIsPlaying(false);
        };
      }

      return utterance;
    });

    setIsPlaying(true);
    synthRef.current.speak(utterances[0]);
    utteranceRef.current = utterances[0];
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
  /* 
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
 */
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
