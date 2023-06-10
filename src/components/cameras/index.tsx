import React, { useRef, useState, useEffect } from 'react'
import styles from './camera.module.css'

const CamScreen = () => {
	const videoRef = useRef<any>(null)
	const [mediaStream, setMediaStream] = useState<MediaStream | null>(null)

	// const sendVideoData = (data: string) => {
	// 	socket.emit('videoData', data)
	// }

	useEffect(() => {
		const enableVideoStream = async () => {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true })
			try {
				setMediaStream(stream)
			} catch (error) {
				console.error('Error accessing webcam', error)
			}
		}

		enableVideoStream()
	}, [])

	useEffect(() => {
		if (videoRef.current && mediaStream) {
			videoRef.current.srcObject = mediaStream
		}
	}, [videoRef, mediaStream])

	useEffect(() => {
		return () => {
			if (mediaStream) {
				mediaStream.getTracks().forEach((track) => {
					track.stop()
				})
			}
		}
	}, [mediaStream])

	return (
		<>
			<div className={`${styles.scanning} ${styles.animation} ${styles.animationDirectionRight}`}>
				<div
					style={{
						display: 'block',
						width: '100%',
						minHeight: '200px',
						border: '3px solid #c8c8c8',
						borderRadius: '24px',
						zIndex: 999,
						opacity: '20%',
					}}
				/>
			</div>

			<video
				style={{ position: 'fixed', objectFit: 'cover', width: '100%', height: '100%', left: 0, top: 0, zIndex: 1 }}
				className={styles.preview}
				ref={videoRef}
				autoPlay
			/>
		</>
	)
}
export default CamScreen
