import { useRef, useState, useEffect } from 'react'
import { MainLayout } from '@/layout'
import { Camera } from '@/components'

export default function CamerasPage() {
	return <Camera />
}

CamerasPage.Layout = MainLayout
