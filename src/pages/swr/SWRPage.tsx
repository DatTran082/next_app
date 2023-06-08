import { SWRSample } from '@/components'
import { useRouter } from 'next/router'

function SWRSamplePage() {
	const { isFallback } = useRouter()

	if (isFallback) {
		return <>Loadding...</>
	}

	return (
		<>
			<h1>SWR Playground</h1>

			<div>
				<SWRSample id={'lea11ziflg8xoizb'} />
			</div>
			<div>
				<SWRSample id={'lea11ziflg8xoizb'} />
			</div>
			<div>
				<SWRSample id={'lea11ziflg8xoizb'} />
			</div>
		</>
	)
}

export default SWRSamplePage
