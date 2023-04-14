import { useRouter } from 'next/router'
import type { FC } from 'react'

interface postDetailsProps {}

const PostDetails: FC<postDetailsProps> = () => {
	const router = useRouter()

	return (
		<>
			<h1>Post Detailts Page</h1>

			<p>Query: {JSON.stringify(router.query)}</p>
		</>
	)
}

export default PostDetails
