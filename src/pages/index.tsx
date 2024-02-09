import { useRouter } from 'next/router'
import { NextPageWithLayout } from '@/models'
import { CaptureCamera, Knocknock } from '@/components'

const Home: NextPageWithLayout = () => {
	const router = useRouter()

	const detailPage = () => {
		router.push({ pathname: '/computerVision/object' })
	}

	const Knocking = () => (
		<button style={{ position: 'absolute', left: '30%', right: '30%', top: '30%', bottom: '30%', margin: 'auto 0', color: '#343d46' }} onClick={detailPage}>
			<p style={{ fontSize: '50px', textTransform: 'uppercase', fontWeight: 'bold', fontFamily: 'fantasy' }}>knock knock</p>
		</button>
	)

	return (
		<>
			<div className="main__wrapper">
				<main>
					<h1>Witch newspaper</h1>
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
						<img src="https://picsum.photos/200/300/?blur" />
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
							<img src="../images/showcase-hogwarts.svg" />
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
						<img src="../images/showcase-toggle.gif" />
						<h4>Toggles</h4>
						<p>
							Eight playful toggles to toggle on and off for your amusement. Is it possible to use these on your site and still adhere to assessibility rules?
							No. But there's a really cute dog one you <em>have </em>to see.
						</p>
					</a>
					<a className="menu" href="https://en.wikipedia.org/wiki/Tr%E1%BB%8Bnh_C%C3%B4ng_S%C6%A1n" target="_blank">
						<figure>
							<img src="#" />
							<figcaption>See the new and improved menu for Toasty!</figcaption>
						</figure>
					</a>
					<a className="social" href="../html/Social.html" target="_blank">
						<img className="#" />
						<div className="social__subtitle">Dreams</div>
						<div className="social__content">
							Scientific research makes clear that sleep is essential at any age. Sleep powers the mind, restores the body, and fortifies virtually every system
							in the body.
						</div>
					</a>
					<div className="item-with-image cssgrid-collection">
						<a className="cssgrid-collection__image" href="#" target="_blank">
							<img src="#" />
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
							<img className="#" />
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
								<img src="#" alt="Workout" />
							</div>
							<div className="workout__blurb">Always failing to keep track of your workouts? </div>
							<div className="workout__title">Use this tool!</div>
						</a>
					</div>
				</main>
			</div>
			<div>
				<footer>
					<a href="https://www.facebook.com/TienDat.0802">
						<i className="fa fa-facebook"></i>
					</a>
					<a href="https://www.instagram.com/tiendat.0802?fbclid=IwAR0IdGvD4IOhXbczBIHTx_5SwCIV_p7f0IiWYcBTXzmyzld2KyxtkfNzviI">
						<i className="fa fa-instagram"></i>
					</a>
					<a href="https://www.youtube.com/channel/UCIRUcbCFXG8m31oREqgTBfw/featured">
						<i className="fa fa-youtube"></i>
					</a>
				</footer>
			</div>
		</>
	)
}

export default Home
