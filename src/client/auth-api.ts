import client from './axios-client'

const newsApi = {
	login: (data: any) => {
		const url = '/login'
		return client.post(url, data)
	},
	getProfile: (params: any) => {
		const url = '/profile'
		return client.get(url, { params })
	},
	getDetail: (params: any) => {
		const url = 'article/get'
		return client.get(url, { params })
	},
}

export default newsApi
