import { useState, useEffect } from 'react'

export default function useUserMedia(requestedMedia: MediaStreamConstraints) {
	const [mediaStream, setMediaStream] = useState<MediaStream | null>(null)

	useEffect(() => {
		async function enableVideoStream() {
			try {
				const stream = await navigator.mediaDevices.getUserMedia(requestedMedia)
				setMediaStream(stream)
			} catch (err) {
				// Handle the error
			}
		}

		if (!mediaStream) {
			enableVideoStream()
		} else {
			return () => mediaStream.getTracks().forEach((track) => track.stop())
		}
	}, [mediaStream, requestedMedia])

	useEffect(() => {
		return () => {
			if (mediaStream) {
				mediaStream.getTracks().forEach((track) => {
					track.stop()
				})
			}
		}
	}, [mediaStream])

	return mediaStream
}
