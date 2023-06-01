import { LayoutProps } from '@/models'

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<>
			<h1>Header - Main layout </h1>
			<div>{children}</div>
			<h1>Footer - Main layout </h1>
		</>
	)
}

export default MainLayout
