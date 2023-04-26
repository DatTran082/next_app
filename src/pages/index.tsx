import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { request } from '@/model/request'
import { response } from '@/model/response'
import { NextPage } from 'next'

const Home: NextPage = () => {
	const router = useRouter()

	const detailPage = () => {
		router.push({
			pathname: '/posts/[postId]',
			query: {
				postId: '123',
				ref: 'social',
			},
		})
	}

	return (
		<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
			<button
				className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
				onClick={detailPage}
			>
				By <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
			</button>
		</div>
	)
}

export default Home
