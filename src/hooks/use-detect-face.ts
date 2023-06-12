// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

// Face Mesh - https://github.com/tensorflow/tfjs-models/tree/master/facemesh

import React, { useRef, useEffect, useState, ReactElement } from 'react'
import Webcam from 'react-webcam'
import { drawFace } from '@/utils'
import '@mediapipe/face_detection'
import '@tensorflow/tfjs-core'
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl'
import * as facemesh from '@tensorflow-models/face-detection'
import { FaceDetector } from '@tensorflow-models/face-detection'

export default function faceDetection(webcamRef: any, canvasRef: any) {
	// const webcamRef = useRef<any>(null)
	// const canvasRef = useRef<any>(null)
	const tensorflow = useRef<any>(null)

	const start = async () => {
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
		// runFaceDetect()
		return () => window.clearInterval(tensorflow.current)
	}, [])

	const stop = () => {
		requestAnimationFrame(() => {
			canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
			// drawFace(ctx, faces, true, true)
		})
		window.clearInterval(tensorflow.current)
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
			})
		}
	}

	return {
		start,
		stop,
		status: tensorflow.current ? true : false,
	}
}
