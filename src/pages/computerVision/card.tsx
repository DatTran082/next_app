import { useRef, useState, useEffect } from 'react'
import { MainLayout } from '@/layout'
import { ObjectDetection } from '@/components'

export default function CamerasPage() {
	return <ObjectDetection />
}

CamerasPage.Layout = MainLayout
