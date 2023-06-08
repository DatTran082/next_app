import { authApi } from '@/client'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticPathsContext } from 'next'
import { useState } from 'react'

interface LoginPageProps {}

const LoginPage = () => {
	const [tempt, setTempt] = useState<any>('')

	const handleLogin = async (data: any) => {
		const res = await authApi.login({ username: 'dat tran', password: '@123123' })
		setTempt(res)
	}

	const handleLGetprofile = async () => {
		const res = await authApi.getProfile({ username: 'dat tran', password: '@123123' })
		setTempt(res)
	}

	return (
		<>
			<h1>Login Page</h1>

			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLGetprofile}>getProfile</button>
			<button>Logout</button>

			<h1>request result</h1>
			<h3 style={{ font: 'icon' }}>{tempt && JSON.stringify(tempt, null, 2)}</h3>
		</>
	)
}

export default LoginPage
