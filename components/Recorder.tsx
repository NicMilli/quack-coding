'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMicrophone,
  faMicrophoneSlash,
} from '@fortawesome/free-solid-svg-icons'
import 'regenerator-runtime/runtime.js'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

const Recorder = () => {
  const {
    transcript,
    finalTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser does not support speech recognition.</span>
  // }

  return (
    <div className="text-white">
      <button
        type="button"
        className="rounded-full w-[40px] flex justify-center"
        onClick={() => {
          listening
            ? SpeechRecognition.stopListening()
            : SpeechRecognition.startListening({
                continuous: true,
                language: 'en-US',
              })
        }}
      >
        {listening ? (
          // Make clear when idle and green when actively recording, 3 dots animation?
          <FontAwesomeIcon icon={faMicrophone} size="2xl" color="green" />
        ) : (
          <FontAwesomeIcon icon={faMicrophoneSlash} size="2xl" color="red" />
        )}
      </button>
      <p>{transcript || 'null'}</p>
      <p>{finalTranscript || 'null'}</p>
    </div>
  )
}

export default Recorder
