import { Auth } from '@/components'
import { LayoutProps } from '@/models'

const DashboardLayout = ({ children }: LayoutProps) => {
	return (
		<Auth>
			<h1>AdminLayout</h1>
			{children}
		</Auth>
	)
}

export default DashboardLayout
