import { useRouter } from 'next/router'
import type { FC } from 'react'

interface slugProps {}

const slug: FC<slugProps> = () => {
	const router = useRouter()
	return (
		<>
			<h1>post/slug</h1>
			<p>Query: {JSON.stringify(router.query)}</p>
		</>
	)
}

export default slug
