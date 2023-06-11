const drawRect = (detections: any, ctx: any) => {
	// Loop through each prediction
	detections.forEach((prediction: any) => {
		// Set styling
		const color = Math.floor(Math.random() * 16777215).toString(16)

		ctx.strokeStyle = '#' + color
		ctx.font = '18px Arial'

		// Draw rectangles and text
		// ctx.beginPath()
		// ctx.fillStyle = '#' + color
		// ctx.fillText(text, x, y)
		// ctx.rect(x, y, width, height)
		// ctx.stroke()

		for (let i = 0; i < detections.length; i++) {
			ctx.beginPath()
			ctx.rect(...detections[i].bbox)
			ctx.lineWidth = 1
			ctx.strokeStyle = 'green'
			ctx.fillStyle = 'green'
			ctx.stroke()
			ctx.fillText(
				detections[i].score.toFixed(3) + ' ' + detections[i].class,
				detections[i].bbox[0],
				detections[i].bbox[1] > 10 ? detections[i].bbox[1] - 5 : 10
			)
		}
	})
}

export default drawRect
