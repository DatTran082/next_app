// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BaseRequest, BaseResponse } from '@/models'
import { randomUUID } from 'crypto'

type Loan = {
	full_name: string
	amount: number
	term: number
}

export default function handler(req: BaseRequest, res: BaseResponse<Loan>) {
	req.requestId = randomUUID()
	req.requestTime = new Date().toISOString()

	if (req.method != 'GET') {
		res.status(404).json({
			code: 404,
			message: '404 lost in space',
			data: null,
			requestId: req.requestId,
			requestTime: req.requestTime,
		})
	}

	res.status(200).json({
		data: {
			full_name: 'tran tien dat',
			term: 6,
			amount: 10000000,
		},
		code: 0,
		message: 'requets success',
		requestId: req.requestId,
		requestTime: req.requestTime,
	})
}
