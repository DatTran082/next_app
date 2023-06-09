import { useRouter } from 'next/router'
import { NextPageWithLayout } from '@/models'
import { Knocknock } from '@/components'

const Home: NextPageWithLayout = () => {
	const router = useRouter()

	const detailPage = () => {
		router.push({
			pathname: '/knock_knock',
		})
	}

	const Knocking = () => (
		<button style={{ position: 'absolute', left: '30%', right: '30%', top: '30%', bottom: '30%', margin: 'auto 0', color: '#343d46' }} onClick={detailPage}>
			<p style={{ fontSize: '100px', textTransform: 'uppercase', fontWeight: 'bold', fontFamily: 'fantasy' }}>knock knock</p>
		</button>
	)

	return (
		<>
			{/* <Knocking /> */}
			<Knocknock />
		</>
	)
}

export default Home
