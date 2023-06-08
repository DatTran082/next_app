import axios from 'axios'

const axiosClient = axios.create({
	baseURL: '/api',
	headers: {
		'content-type': 'application/json',
	},
	paramsSerializer: (params) => new URLSearchParams(params).toString(),
	data: (data: any) => data,
})

axiosClient.interceptors.request.use(async (config) => {
	const jwt = localStorage.getItem('access_token')

	if (jwt) {
		Object.assign(config.headers, {
			Authorization: `Bearer ${jwt}`,
		})
	}

	return config
})

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data
		}

		return response
	},
	(error) => {
		if (error.code == 'ERR_NETWORK') {
			console.log('Yêu cầu thực hiện không thành công vui lòng kiểm tra lại kết nối mạng')
		} else {
			error.response
			console.log('Yêu cầu thực hiện không thành công', error)
		}
		return {
			message: error?.response?.data?.message ?? error.message,
			code: error?.response?.status,
			data: null,
		}
	}
)

export default axiosClient
