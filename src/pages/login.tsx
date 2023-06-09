import { authApi } from '@/client'
import { useAuth } from '@/hooks'
import { useState } from 'react'

interface LoginPageProps {}

const LoginPage = () => {
	const { profile, login, logout, error, isLoading } = useAuth({ revalidateOnMount: false })
	const [tempt, setTempt] = useState<any>('')

	const handleLogin = async (data: any) => {
		// const res = await authApi.login({ username: 'dat tran', password: '@123123' })
		// setTempt(res)

		try {
			await login()
		} catch (error) {
			console.log('fail to login')
		}
	}

	const handleLogout = async (data: any) => {
		// const res = await authApi.login({ username: 'dat tran', password: '@123123' })
		// setTempt(res)

		try {
			await logout()
		} catch (error) {
			console.log('fail to login')
		}
	}

	return (
		<>
			<h1>Login Page</h1>

			<button onClick={handleLogin}>Login</button>
			{/* <button onClick={handleLGetprofile}>getProfile</button> */}
			<button onClick={handleLogout}>Logout</button>

			<h1>PROFILE: {isLoading ? 'Loading ...' : ''}</h1>
			<h3 style={{ font: 'icon' }}>{profile && JSON.stringify(profile ?? {}, null, 4)}</h3>
		</>
	)
}

export default LoginPage
