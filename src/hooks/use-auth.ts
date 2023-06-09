import { authApi } from '@/client'
import useSWR from 'swr'
import { FullConfiguration } from 'swr/_internal'

export default function useAuth(options?: Partial<FullConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
		isLoading,
	} = useSWR(`/profile`, {
		dedupingInterval: 12000,
		revalidateOnFocus: false,
		...options,
	})
	// const { data: any } = useSWR(`/login`, async () => await authApi.login({ username: 'dat tran', password: '@123123' }), { dedupingInterval: 12000 })
	const initProfile = profile === undefined && error === undefined
	const login = async (data?: any) => {
		await authApi.login(data ?? { username: 'dat tran', password: '@123123' })
		await mutate()
		// await authApi.getProfile({ username: 'dat tran', password: '@123123' })
	}

	const logout = async () => {
		await mutate({}, false)
	}

	return {
		profile,
		error,
		login,
		logout,
		isLoading,
	}
}
