import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

interface PostListPageProps {
	posts: [
		{
			id: string
			title: string
			author: string
			description: string
			createdAt: string
			updatedAt: string
			imageUrl: string
		}
	]
}

export default function Post(props: PostListPageProps) {
	const router = useRouter()

	const detailPage = (id: string) => {
		router.push({
			pathname: `/posts/[id]`,
			query: {
				id: id,
				ref: 'social',
			},
		})
	}

	return (
		<div style={{ margin: 'auto' }}>
			<h1>data from static side</h1>
			{props.posts.map((post) => (
				<div key={post.id}>
					<Link href={`/posts/${post.id}`}>
						{' '}
						<h1>{post.title}</h1>
					</Link>
					{post.imageUrl && <img src={post.imageUrl} onClick={() => detailPage(post.id)} alt={post.title} />}
					<p>{post.description}</p>
					<h3>{post.author}</h3>
					<p>{new Date(post.createdAt).toDateString()}</p>
				</div>
			))}
		</div>
	)
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
	//serverside
	//buildtime
	// const response = await fetch('https://dummyjson.com/posts')
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
	const data = await response.json()
	const posts = data.data

	return {
		props: {
			posts: posts,
		},
	}
}
