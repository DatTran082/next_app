import useSWR from 'swr'

interface SWRComponentPropt {
	id: any
}

function SWRComponent({ id }: SWRComponentPropt) {
	const { data, error, mutate, isLoading, isValidating } = useSWR(`students/${id}`, {})

	if (isLoading) {
		return <h1 style={{ fontSize: '280px' }}>Loading...</h1>
	}

	return (
		<>
			<div style={{ padding: '24px' }}>
				<h2>Content: {JSON.stringify(data) || '-__-'}</h2>
			</div>
		</>
	)
}

export default SWRComponent
