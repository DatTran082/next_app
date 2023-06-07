import { randomUUID } from 'crypto'
import { NextApiRequest, NextApiResponse, NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export interface LayoutProps {
	children: ReactNode
}

export type NextPageWithLayout = NextPage & {
	Layout?: (props: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export type BaseResponse<T = any> = NextApiResponse & {
	data: T
	code: number
	message: string
	requestId: string
	requestTime: string
}

export type BaseRequest = NextApiRequest & {
	requestId: string
	requestTime: string
}

enum status {
	success = 0,
	error = 1,
}
