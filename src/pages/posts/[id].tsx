import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import type { FC } from 'react'

interface postDetailsProps {
	post: {
		id: string
		title: string
		author: string
		description: string
		createdAt: string
		updatedAt: string
		imageUrl: string
	}
}

export default function PostDetails({ post }: postDetailsProps) {
	const router = useRouter()

	if (router.isFallback) {
		return (
			<>
				<h6 style={{ textAlign: 'center' }}>Loading...</h6>
				<h5 style={{ textAlign: 'center' }}>Loading...</h5>
				<h4 style={{ textAlign: 'center' }}>Loading...</h4>
				<h3 style={{ textAlign: 'center' }}>Loading...</h3>
				<h2 style={{ textAlign: 'center' }}>Loading...</h2>
				<h1 style={{ textAlign: 'center' }}>Loading...</h1>
				<h2 style={{ textAlign: 'center' }}>Loading...</h2>
				<h3 style={{ textAlign: 'center' }}>Loading...</h3>
				<h4 style={{ textAlign: 'center' }}>Loading...</h4>
				<h5 style={{ textAlign: 'center' }}>Loading...</h5>
				<h6 style={{ textAlign: 'center' }}>Loading...</h6>
			</>
		)
	}

	if (!post) return null

	return (
		<div style={{}}>
			<h1>data from static side</h1>
			<h1>{post.title}</h1>
			{post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
			<p>{post.description}</p>
			<h3>{post.author}</h3>
			<p>{new Date(post.createdAt || new Date()).toDateString()}</p>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async (context: GetStaticPathsContext) => {
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
	const data = await response.json()
	const posts = data.data

	const paths = posts.map((post: any) => ({
		params: { id: post.id },
	}))

	return {
		paths: paths,
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps<postDetailsProps> = async (context: GetStaticPropsContext) => {
	const postId = context.params?.id

	if (!postId) return { notFound: true }

	const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
	const res = await response.json()

	return {
		props: {
			post: res,
		},
		revalidate: 5,
	}
}
