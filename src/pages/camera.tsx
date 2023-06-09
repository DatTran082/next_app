import { useRef, useState, useEffect } from 'react'
import { MainLayout } from '@/layout'
import { Cameras } from '@/components'

export default function CamerasPage() {
	return <Cameras />
}

CamerasPage.Layout = MainLayout
