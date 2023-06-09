import { BaseRequest, BaseResponse } from '@/models'
import httpProxy, { ProxyResCallback } from 'http-proxy'
// import Cookies from 'cookies'
import { serialize } from 'cookie'

const proxy = httpProxy.createProxyServer({})

export const config = {
	api: {
		bodyParser: false,
	},
}

export default function handler(req: BaseRequest, res: BaseResponse) {
	if (req.method != 'POST') {
		return res.status(400).json({ message: 'method not supported', code: 0, data: '' })
	}

	return new Promise((resolve) => {
		req.headers.cookie = ''
		req.headers.authorization = 'Bearer asdfasdfasdf'

		proxy.web(req, res, {
			target: process.env.API_URL ?? `https://js-post-api.herokuapp.com`,
			changeOrigin: true,
			selfHandleResponse: true,
		})

		const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
			let body = ''
			proxyRes.on('data', (chunk) => {
				body += chunk
			})

			proxyRes.on('end', () => {
				try {
					const response = JSON.parse(body)
					const { accessToken, expireAt, error, message } = response

					// const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV != 'development' })
					// cookies.set('access_token', accessToken, {
					// 	httpOnly: true,
					// 	sameSite: 'lax',
					// 	expires: new Date(expireAt ?? new Date()),
					// })

					const cookie = serialize('access_token', accessToken, {
						httpOnly: true,
						sameSite: 'lax',
						expires: expireAt,
						secure: true,
					})

					res.setHeader('Set-Cookie', cookie)
					;(res as BaseResponse).status(200).json({ message: error ?? message ?? 'thuc hien thanh cong', code: 0, data: error ? null : response })
				} catch (error) {
					;(res as BaseResponse).status(500).json({ message: 'something went wrong', code: 500, data: null })
				}
			})

			proxyRes.on('error', (ex: Error) => {
				body += ex.name + ex.message + ex.cause + ex.stack
				;(res as BaseResponse).status(400).json({ message: ex.message, code: 400, data: null })
			})

			resolve(true)
		}

		proxy.once('proxyRes', handleLoginResponse)
	})
}
