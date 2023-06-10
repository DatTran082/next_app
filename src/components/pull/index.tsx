// import styles from './pull.module.css'
// import './pull.module.css'

const Pulllll = () => {
	return (
		<div className="chest">
			<div className="chest__panel chest__panel--back"></div>
			<div className="chest__panel chest__panel--top"></div>
			<div className="chest__panel chest__panel--bottom"></div>
			<div className="chest__panel chest__panel--right"></div>
			<div className="chest__panel chest__panel--front">
				<div className="chest__panel chest__panel--front-frame"></div>
			</div>
			<div className="chest__panel chest__panel--left"></div>
			<div className="chest__drawer drawer" data-position="1">
				<details>
					<summary></summary>
				</details>
				<div className="drawer__structure">
					<div className="drawer__panel drawer__panel--back">
						<span>CSS</span>
					</div>
					<div className="drawer__panel drawer__panel--bottom"></div>
					<div className="drawer__panel drawer__panel--right"></div>
					<div className="drawer__panel drawer__panel--left"></div>
					<div className="drawer__panel drawer__panel--front"></div>
				</div>
			</div>
			<div className="chest__drawer drawer" data-position="2">
				<details>
					<summary></summary>
				</details>
				<div className="drawer__structure">
					<div className="drawer__panel drawer__panel--back">
						<span>is</span>
					</div>
					<div className="drawer__panel drawer__panel--bottom"></div>
					<div className="drawer__panel drawer__panel--right"></div>
					<div className="drawer__panel drawer__panel--left"></div>
					<div className="drawer__panel drawer__panel--front"></div>
				</div>
			</div>
			<div className="chest__drawer drawer" data-position="3">
				<details>
					<summary></summary>
				</details>
				<div className="drawer__structure">
					<div className="drawer__panel drawer__panel--back">
						<span className="letter">A</span>
						<span className="letter">w</span>
						<span className="letter">e</span>
						<span className="letter">s</span>
						<span className="letter">o</span>
						<span className="letter">m</span>
						<span className="letter">e</span>
					</div>
					<div className="drawer__panel drawer__panel--bottom"></div>
					<div className="drawer__panel drawer__panel--right"></div>
					<div className="drawer__panel drawer__panel--left"></div>
					<div className="drawer__panel drawer__panel--front"></div>
				</div>
			</div>
		</div>
	)
}

export default Pulllll
