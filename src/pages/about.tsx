import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import MainLayout from '@/layout/main'
import { log } from 'console'

const Header = dynamic(() => import('@/components/common/Header'), { ssr: false })

interface IaboutProps {
	props: {
		data: any
		message: string
		code: number
	}
}

export default function About({ props }: any) {
	const [posts, setPosts] = useState([])
	const router = useRouter()
	const page = router.query?.page

	useEffect(() => {
		if (!page) return
		;(async () => {
			const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
			const data = await response.json()

			setPosts(data.data)
		})()
	}, [page])

	const handlePage = () => {
		router.push(
			{
				pathname: '/about',
				query: {
					page: (Number(page) || 1) + 1,
				},
			},
			undefined,
			{ shallow: false }
		)
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>data from client side</h1>
			<div style={{ margin: 'auto' }}>
				<h1>post</h1>
				<button onClick={handlePage}>next page</button>
				{posts.map((post: any) => (
					<div key={post.id}>
						{' '}
						<h1>{post.title}</h1>
						{post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
						<p>{post.description}</p>
						<h3>{post.author}</h3>
						<p>{new Date(post.createdAt).toDateString()}</p>
					</div>
				))}
			</div>
		</main>
	)
}

About.Layout = MainLayout

// export async function getServerSideProps() {
// 	return {
// 		props: {
// 			data: 'test',
// 			message: 'success',
// 			code: parseInt('2'),
// 		},
// 	}
// }

export const getStaticProps = async () => {
	console.log('getStaticProps')
	return {
		props: {
			page: 1,
		},
	}
}
