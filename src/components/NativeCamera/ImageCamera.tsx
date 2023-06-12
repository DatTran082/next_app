import Webcam from 'react-webcam'
import React, { useState, useRef, useCallback } from 'react'

function WebcamImage() {
	const webcamRef = useRef<any>(null)
	const [img, setImg] = useState<any>(null)

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot()
		setImg(imageSrc)
	}, [webcamRef])

	const videoConstraints = {
		width: 390,
		height: 390,
		facingMode: 'user',
	}

	return (
		<div className="Container">
			{img === null ? (
				<>
					<Webcam screenshotFormat="image/jpeg" videoConstraints={videoConstraints} audio={false} height={500} width={500} ref={webcamRef} mirrored={true} />
					<button onClick={capture}>Capture photo</button>
				</>
			) : (
				<>
					<img src={img} alt="screenshot" />
					<button onClick={() => setImg(null)}>Recapture</button>
				</>
			)}
		</div>
	)
}

export default WebcamImage
