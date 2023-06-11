import React, { useRef, useState, useEffect } from 'react'
import styles from './styles/cardDetection.module.css'
import { useCamera } from '@/hooks'

const CamScreen = () => {
	const videoRef = useRef<any>(null)
	const mediaStream = useCamera({ video: true })

	useEffect(() => {
		if (videoRef.current && mediaStream) {
			videoRef.current.srcObject = mediaStream
		}
		console.log('streming')
	}, [videoRef, mediaStream])

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
				// onClick={() => mediaStream?.removeTrack}
				// onPlay={() => console.log('onplay')}
			/>
		</>
	)
}
export default CamScreen
