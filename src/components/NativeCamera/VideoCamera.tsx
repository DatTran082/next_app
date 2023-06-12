import { useFaceDetection } from '@/hooks'
import { useRef, useState, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'

const WebcamStreamCapture = () => {
	const webcamRef = useRef<any>(null)
	const canvasRef = useRef<any>(null)
	const mediaRecorderRef = useRef<any>(null)

	const [capturing, setCapturing] = useState(false)
	const [recordedChunks, setRecordedChunks] = useState([])
	const { start, stop, status } = useFaceDetection(webcamRef, canvasRef)

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
				setRecordedChunks((prev) => prev.concat(data))
			}
		},
		[setRecordedChunks]
	)

	const handleStopCaptureClick = useCallback(() => {
		mediaRecorderRef.current.stop()
		setCapturing(false)
	}, [mediaRecorderRef, webcamRef, setCapturing])

	const handleDownload = useCallback(() => {
		if (recordedChunks.length) {
			const blob = new Blob(recordedChunks, {
				type: 'video/mp4',
			})
			const url = URL.createObjectURL(blob)
			console.log('url: ', url)

			const a = document.createElement('a')
			document.body.appendChild(a)
			// a.style = 'display: none'
			a.href = url
			a.style.display = 'none'
			a.download = `${new Date().toISOString()}.mp4`
			a.click()
			window.URL.revokeObjectURL(url)
			setRecordedChunks([])
		}
	}, [recordedChunks])

	const renderPreview = useCallback(() => {
		if (recordedChunks.length) {
			const blob = new Blob(recordedChunks, {
				// type: 'video/webm',
				type: 'video/mp4',
			})
			const url = URL.createObjectURL(blob)

			return (
				<video
					src={url}
					style={{
						zIndex: 1000,
					}}
					autoPlay
				></video>
			)
		}
	}, [recordedChunks])

	return (
		<>
			<div>
				{<button onClick={status ? stop : start}>{status ? 'stop detect' : 'start detect'}</button>}
				{capturing ? <button onClick={handleStopCaptureClick}>Stop Capture</button> : <button onClick={handleStartCaptureClick}>Start Capture</button>}
				{recordedChunks.length > 0 && <button onClick={handleDownload}>Download</button>}
			</div>

			{recordedChunks.length ? (
				renderPreview()
			) : (
				<Webcam
					audio={false}
					ref={webcamRef}
					mirrored
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
			)}

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
		</>
	)
}

export default WebcamStreamCapture
