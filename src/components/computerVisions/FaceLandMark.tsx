import React, { useEffect, useRef } from 'react'

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// import '@mediapipe/face_mesh'
import * as landmarksmodel from '@tensorflow-models/face-landmarks-detection'
import '@tensorflow/tfjs-backend-webgl'
import '@tensorflow-models/face-detection'
import { FaceDetector } from '@tensorflow-models/face-detection'
import '@tensorflow/tfjs-core'
// Register WebGL backend.
import '@mediapipe/face_mesh'
import Webcam from 'react-webcam'
import { MediaPipeFaceMeshTfjsModelConfig } from '@tensorflow-models/face-landmarks-detection'
import { drawMesh } from '@/utils'

function LandMark() {
	const webcamRef = useRef<any>(null)
	const canvasRef = useRef<any>(null)

	useEffect(() => {
		const runFacemesh = async () => {
			const model = landmarksmodel.SupportedModels.MediaPipeFaceMesh

			const detector = await landmarksmodel.createDetector(model)

			setInterval(() => {
				detect(detector)
			}, 10)
		}
		runFacemesh()
	}, [])

	const detect = async (model: FaceDetector) => {
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

			// Make Detections
			// OLD MODEL
			//       const face = await net.estimateFaces(video);
			// NEW MODEL
			const face = await model.estimateFaces(video, { flipHorizontal: false })
			console.log(face)

			// Get canvas context
			const ctx = canvasRef.current.getContext('2d')
			requestAnimationFrame(() => {
				drawMesh(face, ctx)
			})
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<Webcam
					ref={webcamRef}
					style={{
						position: 'absolute',
						marginLeft: 'auto',
						marginRight: 'auto',
						left: 0,
						right: 0,
						textAlign: 'center',
						zIndex: 9,
						width: 640,
						height: 480,
					}}
				/>

				<canvas
					ref={canvasRef}
					style={{
						position: 'absolute',
						marginLeft: 'auto',
						marginRight: 'auto',
						left: 0,
						right: 0,
						textAlign: 'center',
						zIndex: 9,
						width: 640,
						height: 480,
					}}
				/>
			</header>
		</div>
	)
}

export default LandMark
