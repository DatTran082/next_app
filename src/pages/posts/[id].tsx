import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import type { FC } from 'react'

interface postDetailsProps {}

export default function PostDetails(props: postDetailsProps) {
	const router = useRouter()

	return (
		<>
			<h1>Post Detailts Page</h1>

			<p>Query: {JSON.stringify(router.query)}</p>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async (context: GetStaticPathsContext) => {
	//serverside
	//buildtime
	// const response = await fetch('https://dummyjson.com/posts')
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
	const data = await response.json()
	const posts = data.data

	return {
		paths: [
			{ params: { id: '1' } },
			{ params: { id: '2' } },
			{ params: { id: '3' } },
			{ params: { id: '4' } },
			{ params: { id: '5' } },
		],
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<postDetailsProps> = async (context: GetStaticPropsContext) => {
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
	const data = await response.json()
	const posts = data.data

	return {
		props: {
			posts: posts,
		},
	}
}
