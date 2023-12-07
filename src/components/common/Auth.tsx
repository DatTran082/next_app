import { useAuth } from '@/hooks'
import { LayoutProps } from '@/models'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface AuthProps {}

const Auth = ({ children }: LayoutProps) => {
	const router = useRouter()
	const { profile, firstLoading } = useAuth()

	useEffect(() => {
		if (!firstLoading && !profile?.username) {
			router.push('/login')
		}
	}, [router, profile, firstLoading])

	if (!profile?.username) return <p>Loading...</p>

	return <>{children}</>
}

export default Auth
