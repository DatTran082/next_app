import { log } from 'console'
import type { FC } from 'react'

interface FooterProps {}

export default function Footer(props: FooterProps) {
	console.log('render Header')
	return (
		<>
			<h1>Footer</h1>
		</>
	)
}
