import React from 'react'; 
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import "./slider-animations.css";
import "./HomeSlider.css";




const content = [
	{
		title: 'Bubbles',
		description:
		'The Anti-Social Media Social Media Application.',
		button: 'Read More',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		// user: 'Luan Gjokaj',
		// userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Why Bubbles?',
		description:
        'Unlike Facebook and Instagram, Bubbles is a social media application which allows users to connect within the Bubbles community without requiring profiles to have centralized content and friend list. \n With Bubbles, each user can create multiple bubbles. A single bubble contains a localized friend list and shared content. Each bubble can be categorized in a color coded group, such as friends, families, coworkers etc. No other user will be able to see your bubbles. \nWithin each bubble, a user can participate in a group chat and feed, where they can share images, URLs, and videos for all members to view.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		// user: 'Erich Behrens', 
		// userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Inspiration',
		description:'As the anti-social media app, Bubbles is commited to providing users with a personal way to connect with friends and family without compromising the user\'s privacy. We do not believe in selling user data and aim to keep the user\'s experience as intimiate and secure as possible. We value the user\'s right in keeping their information and connections personal.',
		button: 'Download now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		// user: 'Bruno Vizovskyy',
		// userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const HomeSlider = () => (
	<Slider direction="vertical" className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					{/* <section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section> */}
				</div>
			))}
		</Slider>
)

export default HomeSlider