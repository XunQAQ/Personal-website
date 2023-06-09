import React from 'react';
import { CardItem } from './Card';
import './styles/Cards.css';
import VideoCard from "./VideoCard";

function Cards() {
	return (
		<div className='cards' id="projects">
			<h1>Check out my projects</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<h2>Development</h2>
					<ul className='cards__items'>

						<CardItem
							src='images/api.png'
							text='Administrators can access and publish interfaces, statistical analysis of each interface call; users can register and open interface call privileges, can browse interfaces and online debugging'
							label='API Management'
							path='https://github.com/XunQAQ/OpenAPI'
						/>
						<CardItem
							src='images/user_center.png'
							text='This project is a full-stack management system that combines the power of React for the frontend and Java Spring Boot for the backend. Build with Nginx and Java Springboot'
							label='User Center Web'
							path='http://user.watsonpeng.com/user/login'
						/>



					</ul>
					<ul className='cards__items'>
						<CardItem
							src='images/dashbord.png'
							text='customer metrics dashboard that can be viewed on a phone or computer, at management’s fingertips. It instantly provides both real-time information as well as cumulative statistics by week or month, as required.'
							label='DashBoard'
							path=''
						/>
						<CardItem
							src='https://static.wixstatic.com/media/1b24c3_e7652448bc35466394f4cc58ca12b595~mv2.gif'
							text='Customer Journey will give you  insights into your customers in your stores'
							label='Customer Journey'
							path=''
						/>
					</ul>
					<ul className='cards__items'>
						{/*<CardItem*/}
						{/*	src='images/match.png'*/}
						{/*	text='This is a mobile website (with an app-like design) aimed at helping people find like-minded partners for sports'*/}
						{/*	label='Paterner Match'*/}
						{/*	path=''*/}
						{/*/>*/}
						<CardItem
							src='images/SearchEngines.png'
							text='The Aggregated Search Platform Project is a one-stop search solution based on Vue 3 + Spring Boot + Elastic Stack that simplifies search for both users and enterprises.'
							label='Aggregated Search Platform'
							path='https://github.com/XunQAQ/Xsearch'
						/>
						<CardItem
							src='images/website.png'
							text='My personal portfolio website, created using React, deployed with Vercel.'
							label='Personal Website'
							path='https://github.com/XunQAQ/Personal-website'
						/>
					</ul>

					{/*Design Category*/}
					<h2>AI Technology</h2>



					<ul className='cards__items'>
						<CardItem
							src='https://miro.medium.com/v2/resize:fit:996/0*CkBCEsOsyoAKQUW7'
							text=' reinforcement learning for autonomous driving in a simulated racing environment'
							label='Auto-racing'
							path='https://github.com/XunQAQ/Auto-racing'
						/>


						<CardItem

							src='images/od_dog.png'
							text='This is a deep learning-based object detection algorithm that can quickly and accurately detect objects in images and classify them.'
							label='Object Detection'
							path='https://github.com/XunQAQ/R-cnn-Object-Detection'
						/>


					</ul>


					<ul className='cards__items'>


						<VideoCard
							src='https://youtu.be/QPLkwciQMfo'
							text='ROS2 package that demonstrates edge detection using OpenCV and ROS2 topics'
							label='Edge Detection'
							path='https://www.streamsyndicate-canada.com/'
						/>




					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
