import { log } from 'console'

export const NUM_KEYPOINTS = 6
export const GREEN = '#32EEDB'
export const RED = '#FF2C35'
export const BLUE = '#157AB3'

export const VIDEO_SIZE = {
	'640 X 480': { width: 640, height: 480 },
	'640 X 360': { width: 640, height: 360 },
	'360 X 270': { width: 360, height: 270 },
}

const drawResults = (ctx: any, faces: any, boundingBox: boolean, showKeypoints: boolean) => {
	console.log(faces)
	// const faceMattrix = faces[0].landmarks

	faces.forEach((face: any) => {
		const keypoints = face.keypoints.map((keypoint: any) => [keypoint.x, keypoint.y])

		if (boundingBox) {
			ctx.strokeStyle = RED
			ctx.lineWidth = 1

			const box = face.box
			drawPath(
				ctx,
				[
					[box.xMin, box.yMin],
					[box.xMax, box.yMin],
					[box.xMax, box.yMax],
					[box.xMin, box.yMax],
				],
				true
			)
		}

		if (showKeypoints) {
			ctx.fillStyle = GREEN

			for (let i = 0; i < NUM_KEYPOINTS; i++) {
				const x = keypoints[i][0]
				const y = keypoints[i][1]

				ctx.beginPath()
				ctx.arc(x, y, 3 /* radius */, 0, 2 * Math.PI)
				ctx.fill()
			}
		}
	})
}

// const drawResult = function (frame: any, ctx: any, prediction: any, boundingBox: boolean, showKeypoints: boolean, showFaceLine: boolean) {
// 	ctx.clearRect(0, 0, frame.width, frame.height)

// 	prediction.map((pred: any) => {
// 		if (boundingBox) {
// 			ctx.beginPath()
// 			ctx.strokeStyle = '#FFFFFF'
// 			ctx.lineWidth = '4'

// 			ctx.roundRect(pred.topLeft[0], pred.topLeft[1], pred.bottomRight[0] - pred.topLeft[0], pred.bottomRight[1] - pred.topLeft[1], [8])

// 			ctx.stroke()
// 		}

// 		if (showKeypoints) {
// 			ctx.fillStyle = '#FF2C35'
// 			pred.landmarks.map((landmark: any) => {
// 				ctx.fillRect(landmark[0], landmark[1], 4, 4)
// 			})
// 		}

// 		if (showFaceLine) {
// 			// const eye = { left: { x: this.translation(pred.landmarks[1][0], "OX"), y: this.translation(pred.landmarks[1][1], "OY") }, right: { x: this.translation(pred.landmarks[0][0], "OX"), y: this.translation(pred.landmarks[0][1], "OY") } };
// 			// const ear = { left: { x: this.translation(pred.landmarks[5][0], "OX"), y: this.translation(pred.landmarks[5][1], "OY") }, right: { x: this.translation(pred.landmarks[4][0], "OX"), y: this.translation(pred.landmarks[4][1], "OY") } };
// 			// const mouth = { x: this.translation(pred.landmarks[3][0], "OX"), y: this.translation(pred.landmarks[3][1], "OY") };
// 			const nose = { x: pred.landmarks[2][0], y: pred.landmarks[2][1] }

// 			ctx.beginPath()
// 			ctx.strokeStyle = '#FFFFFF'
// 			ctx.lineWidth = '1'
// 			ctx.filter = 'blur(1px)'

// 			ctx.moveTo(frame.width - 90, frame.height / 2)
// 			ctx.quadraticCurveTo(nose.x, nose.y - 80, 90, frame.height / 2)
// 			ctx.moveTo(frame.width / 2, 5)
// 			ctx.quadraticCurveTo(nose.x, nose.y - 80, frame.width / 2, frame.height - 5)

// 			ctx.stroke()
// 		}
// 	})
// }

function drawPath(ctx: any, points: any, closePath: any) {
	const region = new Path2D()
	region.moveTo(points[0][0], points[0][1])
	for (let i = 1; i < points.length; i++) {
		const point = points[i]
		region.lineTo(point[0], point[1])
	}

	if (closePath) {
		region.closePath()
	}
	ctx.stroke(region)
}

export default drawResults
