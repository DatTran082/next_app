// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

// Face Mesh - https://github.com/tensorflow/tfjs-models/tree/master/facemesh

import React, { useRef, useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import { drawFace } from '@/utils'
import '@tensorflow/tfjs-core'
import '@mediapipe/face_detection'
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl'
import * as facemesh from '@tensorflow-models/face-detection'
import { FaceDetector } from '@tensorflow-models/face-detection'
import style from './styles/faceDetection.module.css'
import { useTimer } from 'use-timer'
import drawResult from '@/utils/drawFace'

const FaceDetection = () => {
	const webcamRef = useRef<any>(null)
	const canvasRef = useRef<any>(null)
	const tensorflow = useRef<any>(null)

	const timer = useTimer({
		timerType: 'DECREMENTAL',
		autostart: false,
		initialTime: 9,
		endTime: 0,
		onTimeOver: () => {
			console.log('timer onTimeOver => ')
		},
		onTimeUpdate: (time: number) => {
			console.log('timer count => ', time)
		},
	})

	const { time, start, pause, reset, status, advanceTime } = timer

	const runFaceDetect = async () => {
		const model = facemesh.SupportedModels.MediaPipeFaceDetector

		const detector = await facemesh.createDetector(model, {
			runtime: 'tfjs',
		})

		if (tensorflow.current) {
			console.log('re-init')
			clearInterval(tensorflow.current)
			tensorflow.current = setInterval(() => detect(detector), 10)
		} else {
			console.log('init')
			tensorflow.current = setInterval(() => detect(detector), 10)
		}
	}

	useEffect(() => {
		runFaceDetect()
		return () => window.clearInterval(tensorflow.current)
	}, [])

	const stopDetect = () => {
		window.clearInterval(tensorflow.current)
		requestAnimationFrame(() => {
			canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
			// drawFace(ctx, faces, true, true)
		})
	}

	const detect = async (detector: FaceDetector) => {
		if (typeof webcamRef.current !== 'undefined' && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
			// Get Video Properties

			const video = webcamRef.current.video
			const videoWidth = webcamRef.current.video.videoWidth
			const videoHeight = webcamRef.current.video.videoHeight

			// Set video width
			webcamRef.current.video.width = videoWidth
			webcamRef.current.video.height = videoHeight
			// Set canvas width
			canvasRef.current.width = videoWidth
			canvasRef.current.height = videoHeight

			const estimationConfig = { flipHorizontal: true }
			const faces = await detector.estimateFaces(video, estimationConfig)
			// console.log(faces)

			// Get canvas context
			const ctx = canvasRef.current.getContext('2d')
			requestAnimationFrame(() => {
				drawFace(ctx, faces, true, true)
				// drawResult(webcamRef.current.video, ctx, faces, true, true, true)
			})
		}
	}

	return (
		<div className={style.body}>
			<Webcam className={style.video} ref={webcamRef} mirrored style={{}} />
			<canvas ref={canvasRef} className={style.canvas} style={{}} />
			{/* <div style={{ zIndex: 9, margin: 'auto' }}>
				<button onClick={runFaceDetect} style={{ zIndex: 99, padding: '12px' }}>
					{' '}
					detect
				</button>
				<button onClick={stopDetect} style={{ zIndex: 90, padding: '12px' }}>
					{' '}
					stop
				</button>
			</div> */}
		</div>
	)
}

export default FaceDetection
