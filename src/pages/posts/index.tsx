import { GetStaticProps, GetStaticPropsContext } from 'next'
import { FC, useEffect } from 'react'

interface PostListPageProps {
	posts: any[]
}

export default function Post(props: PostListPageProps) {
	return (
		<>
			<h1>post</h1>
			{props.posts.map((post) => (
				<div key={post.id}>
					<h1>{post.title}</h1>
					<p>{post.description}</p>
					{post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
				</div>
			))}
		</>
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
