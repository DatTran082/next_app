import { useRef, useState, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'

const WebcamStreamCapture = () => {
	const webcamRef = useRef<any>(null)
	const mediaRecorderRef = useRef<any>(null)
	const [capturing, setCapturing] = useState<boolean>(false)
	const [recordedChunks, setRecordedChunks] = useState<any>([])

	const handleStartCaptureClick = useCallback(() => {
		setCapturing(true)
		mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
			mimeType: 'video/webm',
			// mimeType: 'video/mp4',
		})
		mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable)
		mediaRecorderRef.current.start()
	}, [webcamRef, setCapturing, mediaRecorderRef])

	const handleDataAvailable = useCallback(
		({ data }: any) => {
			if (data.size > 0) {
				setRecordedChunks((prev: any) => prev.concat(data))
			}
		},
		[setRecordedChunks]
	)

	const handleStopCaptureClick = useCallback(() => {
		mediaRecorderRef.current.stop()
		setCapturing(false)
	}, [mediaRecorderRef, webcamRef, setCapturing])

	const renderPreview = useCallback(() => {
		if (recordedChunks.length) {
			const blob = new Blob(recordedChunks, {
				// type: 'video/webm',
				type: 'video/mp4',
			})
			const url = URL.createObjectURL(blob)
			console.log('typeof recordedChunks: ', typeof recordedChunks)

			return <video src={url} autoPlay></video>
		}
	}, [recordedChunks])

	return { webcamRef, capturing, handleStopCaptureClick, handleStartCaptureClick, renderPreview }

	// (
	// 	<>
	// 		<Webcam audio={false} ref={webcamRef} />
	// 		{capturing ? <button onClick={handleStopCaptureClick}>Stop Capture</button> : <button onClick={handleStartCaptureClick}>Start Capture</button>}
	// 		{renderPreview()}
	// 	</>
	// )
}

export default WebcamStreamCapture
