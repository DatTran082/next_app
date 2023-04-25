import type { FC } from 'react'

interface createProps {
	name: string
	title: string
	views: number
	date: string
}

const Create: FC<createProps> = () => {
	const maintain = false
	return <div>create</div>
}

export default Create
