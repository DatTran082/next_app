import { BaseRequest, BaseResponse } from '@/models'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

const proxy = httpProxy.createProxyServer({})

export const config = {
	api: {
		bodyParser: false,
	},
}

export default function handler(req: BaseRequest, res: BaseResponse) {
	return new Promise((resolve) => {
		req.headers.cookie = ''

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
					const { accessToken, expireAt } = JSON.parse(body)
					console.log('res from proxy server: ', { accessToken, expireAt })

					const cookies = new Cookies(req, res, { secure: true })
					cookies.set('access_token', accessToken, {
						httpOnly: true,
						sameSite: 'lax',
						expires: new Date(expireAt),
					})
					// res.end('my response to client')
					;(res as BaseResponse)
						.status(200)
						.json({ message: 'login successfuly', code: 0, data: { accessToken, expireAt } })
				} catch (error) {
					;(res as BaseResponse).status(500).json({ message: 'something went wrong', code: 500, data: null })
				}
			})

			resolve(true)
		}

		proxy.once('proxyRes', handleLoginResponse)
	})
}
