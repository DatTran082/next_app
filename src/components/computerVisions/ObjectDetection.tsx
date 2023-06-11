// Import dependencies
require('@tensorflow/tfjs-backend-cpu')
require('@tensorflow/tfjs-backend-webgl')
const cocoSsd = require('@tensorflow-models/coco-ssd')
import React, { useRef, useEffect } from 'react'
import styles from './styles/objectDetection.module.css'

import Webcam from 'react-webcam'
import { drawRect } from '@/utils'

function DetectObject() {
	const webcamRef = useRef<any>(null)
	const canvasRef = useRef<any>(null)

	useEffect(() => {
		const runCoco = async () => {
			const net = await cocoSsd.load()
			console.log('Handpose model loaded.')
			console.log('stylessssssss', styles)
			//  Loop and detect hands
			setInterval(() => {
				detect(net)
			}, 10)
		}
		runCoco()
	}, [])

	// Main function

	const detect = async (net: any) => {
		// Check data is available
		if (typeof webcamRef.current !== 'undefined' && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
			// Get Video Properties
			const video = webcamRef.current.video
			const videoWidth = webcamRef.current.video.videoWidth
			const videoHeight = webcamRef.current.video.videoHeight

			// Set video width
			webcamRef.current.video.width = videoWidth
			webcamRef.current.video.height = videoHeight

			// Set canvas height and width
			canvasRef.current.width = videoWidth
			canvasRef.current.height = videoHeight

			// Make Detections
			const obj = await net.detect(video)

			// Draw mesh
			const ctx = canvasRef.current.getContext('2d')
			console.log(obj, ctx)

			drawRect(obj, ctx)
		}
	}

	return (
		<div className={styles.App} style={{ textAlign: 'center' }}>
			<header
				className={styles.AppHeader}
				style={{
					backgroundColor: '#282c34',
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: 'calc(10px + 2vmin)',
					color: 'white',
				}}
			>
				<Webcam
					ref={webcamRef}
					muted={true}
					style={{
						position: 'fixed',
						objectFit: 'cover',
						width: '100%',
						height: '100%',
						left: 0,
						top: 0,
						zIndex: 9,
						// transform: 'scaleY(1)',
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
						zIndex: 10,
						width: 640,
						height: 480,
					}}
				/>
			</header>
		</div>
	)
}

export default DetectObject
