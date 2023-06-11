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
