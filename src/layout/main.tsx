import { LayoutProps } from '@/models'
import Link from 'next/link'
import { useEffect } from 'react'

const MainLayout = ({ children }: LayoutProps) => {
	useEffect(() => {
		console.log('MainLayout mounting')

		return () => console.log('MainLayout unmout')
	}, [])

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link href="/">
					<h1>Home</h1>
				</Link>
				<Link href="/about">
					<h1>About</h1>
				</Link>
				<Link href="/posts">
					<h1>POSTS</h1>
				</Link>
			</div>

			<div>{children}</div>
			<h1>Footer - Main layout </h1>
		</>
	)
}

export default MainLayout
