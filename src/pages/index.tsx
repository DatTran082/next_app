import { useRouter } from 'next/router'
import { NextPageWithLayout } from '@/models'
import { CaptureCamera, Knocknock } from '@/components'
import Link from 'next/link'

const Landing: NextPageWithLayout = () => {
	const router = useRouter()

	const detailPage = () => {
		// router.push({ pathname: '/computerVision/object' })
	}

	return (
		<div style={{ backgroundColor: '#211000' }}>
			<svg
				viewBox="0 0 210 210"
				xmlns="http://www.w3.org/2000/svg"
				id="campfire"
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%,-50%)',
					height: '50px',
					width: '50px',
				}}
			>
				<defs>
					<filter id="turb" x="-100%" y="-100%" width="300%" height="300%">
						<feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2.5" result="turbulence" seed="69" />
						<feDisplacementMap in2="turbulence" in="SourceGraphic" scale="35" />
					</filter>
					<filter id="blur" x="-100%" y="-100%" width="300%" height="300%">
						<feGaussianBlur in="SourceGraphic" stdDeviation="9" />
					</filter>
					<filter id="blur2" x="-100%" y="-100%" width="300%" height="300%">
						<feGaussianBlur in="SourceGraphic" stdDeviation="5" />
					</filter>
					<radialGradient id="grad" cx="50%" cy="100%" fx="50%">
						<stop offset="0%" stop-color="#aaf" />
						<stop offset="20%" stop-color="#fff" />
						<stop offset="60%" stop-color="gold" />
						<stop offset="100%" stop-color="darkorange" />
					</radialGradient>
				</defs>
				<ellipse cx="111" cy="185" rx="50" ry="20" filter="url(#blur2)" />
				<rect height="80" width="25" x="140" y="140" rx="3" transform="rotate(64 140 140)" fill="rgb(72, 44, 31)" />
				<rect height="80" width="25" x="80" y="150" rx="5" transform="rotate(-60 85 160)" fill="rgb(92, 64, 51)" />
				<g fill="url(#grad)">
					<use href="#fiya" fill="#f00" stroke="rgba(127,127,127,0.5)" filter="url(#blur)" stroke-width="25" fillOpacity="none" />
					<path id="fiya" d="M 70 140 c -4 12 64 11 60 0 l -30 -90 z" filter="url(#turb)" opacity="0.7">
						<animate
							attributeName="d"
							values="M 70 145 c -4 12 64 11 60 0 l -30 -90 z; M 70 7145 c -4 12 64 11 60 0 l -30 -90 z"
							dur="100s"
							begin="0s"
							repeatCount="indefinite"
						/>
					</path>
					<animateTransform
						attributeName="transform"
						attributeType="XML"
						type="translate"
						values="0 0; 0 -7000"
						dur="100s"
						begin="0s"
						repeatCount="indefinite"
					/>
				</g>
			</svg>
		</div>
	)
}

export default Landing
