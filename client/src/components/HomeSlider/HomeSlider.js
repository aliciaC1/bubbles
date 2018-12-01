import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import './slider-animations.css';
import './HomeSlider.css';
import {Header,Image} from 'semantic-ui-react';

const content = [
	{
		title: 'BUBBLES',
		description:
		'THE ANTI-SOCIAL SOCIAL MEDIA APP',
		button: 'Get Started',
		image: 'https://i.imgur.com/6i1xmsk.png',
		image2: ''
		// user: 'Luan Gjokaj',
		// userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'THE ANTI-SOCIAL MEDIA APP',
		// description:
		// 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		// button: 'Discover',
		image: 'https://i.imgur.com/GDEWXLv.png',
		// image2:'https://i.imgur.com/9C5qn3T.png', 
		description: 'As the anti-social media app, Bubbles is commited to providing users with a personal way to connect with friends and family without compromising the user\'s privacy. \nWe do not believe in selling user data and aim to keep the user\s experience as intimiate and secure as possible. \nWe value the user\'s right in keeping their information and connections personal.', 
		image3: 'https://i.imgur.com/ArSVVc7.png'
		// user: 'Erich Behrens',
		// userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Why Bubbles',
		description:
        'Unlike Facebook and Instagram, Bubbles is a social media application which allows users to connect within the Bubbles community without requiring profiles to have centralized content and friend list. \n With Bubbles, each user can create multiple bubbles. A single bubble contains a localized friend list and shared content. Each bubble can be categorized in a color coded group, such as friends, families, coworkers etc. No other user will be able to see your bubbles. \nWithin each bubble, a user can participate in a group chat and feed, where they can share images, URLs, and videos for all members to view.',
		button: 'Learn More',
		image: 'https://s.aolcdn.com/hss/storage/midas/29de94e600973f32522ffa90e21f7ad8/205384652/weiweilede-ed.jpg',
		// user: 'Bruno Vizovskyy',
		// userProfile: 'https://i.imgur.com/4KeKvtH.png'
	},
	{
		title: 'Features',
		description:
		'With Bubbles, each user can create multiple \'bubbles\'. A single bubble contains a localized friend list and shared content. Each bubble can be categorized in a color coded group, such as friends, families, coworkers etc. No other user will be able to see your bubbles. Within each bubble, a user can participate in a group image gallery and feed, where they can share images, URLs, and Posts for all members to view.',
		button: 'Get Started!',
		image: 'https://i.imgur.com/oZ9gS2o.png',
		// user: 'Bruno Vizovskyy',
		// userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const HomeSlider = () => (
	<div>
	
		<Slider vertical className="slider-wrapper"direction="vertical" >
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<Header as='h1'>{item.title}</Header>
						<Image src={item.image2} style={{width: '900px', left: '900px', top:'-100px'}}/>
						<p style = {{fontSize:'20px'}}>{item.description}</p>
						<Header as='h4' textAlign='right'style={{color: 'white', width: '800px', fontSize:'1.5em', marginLeft:'945px',marginTop: '-50px' }}>{item.text} </Header>
						{/* <button>{item.button}</button> */}
						<Image className = 'bubblet'src ={item.image3} floated ='right' style = {{width:'210px', height: 'auto', right:'100px'}}/>
					</div>
				</div>
			))}
		</Slider>
	</div>
)

export default HomeSlider