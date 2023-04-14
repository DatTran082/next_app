import type { FC } from 'react'

interface postProps {
	name: string
	title: string
	views: number
	date: string
}

const post: FC<postProps> = () => {
	return <div>post</div>
}

export default post
