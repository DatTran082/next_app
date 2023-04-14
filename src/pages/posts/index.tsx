import type { FC } from 'react'

interface postProps {
	name: string
	title: string
	views: number
	date: string
}

const Post: FC<postProps> = () => {
	return <div>post</div>
}

export default Post
