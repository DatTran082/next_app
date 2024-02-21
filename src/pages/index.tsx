import { useRouter } from 'next/router'
import { NextPageWithLayout } from '@/models'
import { CaptureCamera, Knocknock } from '@/components'

const Landing: NextPageWithLayout = () => {
	const router = useRouter()

	const detailPage = () => {
		// router.push({ pathname: '/computerVision/object' })
	}

	return (
		<>
			<div className="main__wrapper">
				<main>
					<h1>Daily prophet</h1>
					<aside>
						<div>
							<div className="issue">Issue #1 </div>
							<div className="date">{new Date().toDateString()}</div>
							<div className="edition">Temporary label</div>
						</div>
					</aside>
					<h2 className="title--large main-title">The Rise of Wizard Detection Technology: A New Era in Magic</h2>
					<div className="main-text multi-column">
						<p>
							“The Magic of Science: Wizard Detection Technology using camera” is a fascinating topic that combines the worlds of magic and science. The use of
							cameras to detect wizards is a new and innovative technology that has the potential to revolutionize the way we think about magic.{' '}
						</p>
						<p>
							The technology works by using cameras to detect the presence of wizards in a given area. The cameras are equipped with advanced algorithms that
							can identify the unique energy signatures of wizards. Once a wizard is detected, the system can alert the appropriate authorities or take other
							necessary actions. This technology has many potential applications, including law enforcement, security, and even entertainment. For example, it
							could be used to detect the use of magic in public places, such as airports or government buildings.
						</p>
						<p>
							{' '}
							Wizard Detection could also be used in the entertainment industry to create new and exciting experiences for audiences. The development of this
							technology is a testament to the power of science and its ability to unlock new possibilities. With continued research and development, we can
							only imagine what other amazing discoveries await us in the future.
						</p>
					</div>
					<a className="terrarium" href="/computerVision/object" target="_blank">
						<figure>
							<img src="https://picsum.photos/200/300" />
							<figcaption></figcaption>
						</figure>
					</a>
					<a className="item-with-image plan span--2 long--2" href="#" target="_blank">
						<img src="https://picsum.photos/160/100/" />
						<h4>Can you get inspired to make your own floor plans?</h4>
						<div className="multi-column">
							<p>
								Making a floor Plan with CSS Grid? Talk about using the wrong tool for the job. But I guess this is what happens when someone isn't happy with
								any of the floor plans found on Pinterest; she'll start making her own for the eventual home that she will never own. Nevertheless, there's a
								home office with a large window to look out of pensively during rainy days and a ton of "white space" for the cats to run around.
							</p>
						</div>
					</a>
					<a className="hogwarts" href="/computerVision/face" target="_blank">
						<div className="hogwarts__title">50% Off Hogwarts Express tickets</div>
						<div className="hogwarts__image">
							{' '}
							<span>Limited time offer</span>
							<img src="https://picsum.photos/200/300" />
						</div>
					</a>
					<a className="item-with-image pasta with-border" href="#" target="_blank">
						<h4>A pasta menu</h4>
						<p>
							Everybody loves pasta. It's impossible to not love them, so here are 15 recipes, served with GSAP. Note the easter egg — the menu icon changes
							according to the pasta that you choose.
						</p>
					</a>
					<a className="item-with-image magazine with-border" href="#" target="_blank">
						<h4>Marvel at a magazine</h4>
						<p>
							A tribute of sorts to an era of cool superhero movies, this is a Marvel-themed magazine! Recommended, because it took 45 hours, so you know some
							serious dedication has been poured into this.
						</p>
					</a>
					<a className="item-with-image style" href="#" target="_blank">
						<h4>Music heals the soul</h4>
						<p>
							Trịnh Công Sơn was born in Buôn Ma Thuột, Đắk Lắk Province, Vietnam, but as a child he lived in the village of Minh Huong in Hương Trà in Thừa
							Thiên–Huế Province.He grew up in Huế, where he attended the Lycée Français and the Providence school. When he was ten he lived with his father in
							Huế's Thừa Phủ Prison for a year in 1949. Later he went to Saigon and studied western philosophy at the Lycée Jean-Jacques Rousseau, from which he
							graduated with the baccalaureate degree.
						</p>
					</a>
					<a className="item-with-image toggles" href="../html/toggle-wrapper.html" target="_blank">
						<img src="https://picsum.photos/200/300" />
						<h4>Toggles</h4>
						<p>
							Eight playful toggles to toggle on and off for your amusement. Is it possible to use these on your site and still adhere to assessibility rules?
							No. But there's a really cute dog one you <em>have </em>to see.
						</p>
					</a>
					<a className="menu" href="https://en.wikipedia.org/wiki/Tr%E1%BB%8Bnh_C%C3%B4ng_S%C6%A1n" target="_blank">
						<figure>
							<img src="https://picsum.photos/200/200" />
							<figcaption>See the new and improved menu for Toasty!</figcaption>
						</figure>
					</a>
					<a className="social" href="../html/Social.html" target="_blank">
						<img className="social__image" src="https://picsum.photos/200/100" />
						<div className="social__subtitle">Dreams</div>
						<div className="social__content">
							Scientific research makes clear that sleep is essential at any age. Sleep powers the mind, restores the body, and fortifies virtually every system
							in the body.
						</div>
					</a>
					<div className="item-with-image cssgrid-collection">
						<a className="cssgrid-collection__image" href="#" target="_blank">
							<img src="https://picsum.photos/200/100" />
						</a>
						<div className="cssgrid-collection__content">
							<h4>
								{' '}
								<a href="#" target="_blank">
									More CSS Grid things like this one. Shelves, coupons and more!{' '}
								</a>
							</h4>
							<div className="multi-column-3">
								<p>
									Get your fill of more CSS Grid items in this collection. There are a total of 32 pens to date... well, 33, if you count this one too. What can
									you expect in this collection? The hidden gems, in my totally unbiased opinion, are
									<a href="../html/toggle-wrapper.html" target="_blank">
										the recreation of the Pac-Man layout
									</a>{' '}
									and{' '}
									<a href="#" target="_blank">
										coupons inspired by junk mail
									</a>
									. A lot of joke items of things that shouldn't be done in CSS Grid, such as{' '}
									<a href="#" target="_blank">
										a shelf
									</a>
									?{' '}
									<a href="#" target="_blank">
										Bathroom tiles wtf
									</a>
									? and{' '}
									<a href="#" target="_blank">
										makeup palettes{' '}
									</a>
									. If you are a cultured person, you will have a chance to enjoy a couple of pens inspired by{' '}
									<a href="#" target="_blank">
										Harry Potter{' '}
									</a>
									and{' '}
									<a href="#" target="_blank">
										Pokemon.
									</a>{' '}
									On the rare occasion that you are looking at this profile for something you can use in production, you really shouldn't. But, there are{' '}
									<em> some </em>real-world applications, such as{' '}
									<a href="#" target="_blank">
										the recipe layout
									</a>
									,{' '}
									<a href="#" target="_blank">
										the product catalog
									</a>
									, and{' '}
									<a href="#" target="_blank">
										color palettes for a style guide
									</a>
									.
								</p>
							</div>
						</div>
					</div>
					<div className="sidebar">
						<h3 className="title--big">Hot this month</h3>
						<a className="codepen-item pie" href="#" target="_blank">
							<img className="pie__image" src="https://picsum.photos/200/200" />
							<div className="pie__subtitle">Food </div>
							<div className="pie__content">
								<h4>Pies for everyone!</h4>
								<p>No man is left behind. There's infinite pie with this one div and a repeating background.</p>
							</div>
						</a>
						<a className="sidebar-item captcha" href="../html/capcha.html" target="_blank">
							<h5>Hogwarts Mystery Magizoology</h5>
							<p>
								From Tic Tac Toe to solving meme-based questions, this is a different take on how web captchas should be. "I have not successfully picked out
								all photos of a truck on the first try. Something's gotta change," says the designer, who has requested to remain anonymous.
							</p>
						</a>
						<a className="sidebar-item slack-ui with-border" href="#" target="_blank">
							<h5>Slack UI gets reverse engineered</h5>
							<p>
								Another valiant effort to reverse engineer a web app. However, the UI is repurposed to showcase Codepens instead of mock conversations. This is
								a codepen showcase inception situation.
							</p>
						</a>
						<a className="workout" href="../html/Workourt.html" target="_blank">
							<div className="workout__image">
								<img src="https://picsum.photos/100/300" alt="Workout" />
							</div>
							<div className="workout__blurb">Always failing to keep track of your workouts? </div>
							<div className="workout__title">Use this tool!</div>
						</a>
					</div>
				</main>
			</div>
			<div>
				<footer>
					<a className="relative" href="mailto:dattran.hn0802@gmail.com">
						<svg
							className="w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
								fill-rule="evenodd"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
					<a className="relative" target="_blank" href="https://www.linkedin.com/in/dat-tran-4321a9267/">
						<svg
							className="w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
						</svg>
					</a>

					<a className="relative" target="_blank" href="https://github.com/DatTran082">
						<svg
							className="w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</a>
				</footer>
			</div>
		</>
	)
}

export default Landing
