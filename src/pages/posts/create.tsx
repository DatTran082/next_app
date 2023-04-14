import type { FC } from 'react'

interface createProps {
	name: string
	title: string
	views: number
	date: string
}

const create: FC<createProps> = () => {
	return <div>create</div>
}

export default create
