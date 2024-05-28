import { axiosClient } from '@/client'
import { EmptyLayout } from '@/layout'
import { AppPropsWithLayout } from '@/models'
import '@/styles/globals.css'
// import '@/styles/wraper.css'
import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout

	return (
		<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	)
}

// serviceWorker.unregister()
