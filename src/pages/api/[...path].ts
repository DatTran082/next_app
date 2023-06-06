import { BaseRequest, BaseResponse } from '@/models'

// const http = require('http')
import httpProxy from 'http-proxy'
//
// Create a proxy server with custom application logic
//
const proxy = httpProxy.createProxyServer({})
//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
// var server = http.createServer(function (req: BaseRequest, res: BaseResponse) {
// 	// You can define here your custom logic to handle the request
// 	// and then proxy the request.
// 	proxy.web(req, res, { target: 'http://0.0.0.0:3000' })
// })

export const config = {
	api: {
		bodyParser: false,
	},
}

export default function handler(req: BaseRequest, res: BaseResponse) {
	req.headers.cookie = ''
	proxy.web(req, res, {
		target: process.env.API_URL,
		// target: `https://js-post-api.herokuapp.com`,
		changeOrigin: true,
		selfHandleResponse: false,
	})
}

console.log('listening on port 3000')
// server.listen(3000)
