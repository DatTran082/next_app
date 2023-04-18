import { log } from 'console'
import type { FC } from 'react'

interface HeaderProps {}

export default function Header(props: HeaderProps) {
	console.log('render Header')
	return (
		<>
			<h1>Header</h1>
		</>
	)
}
