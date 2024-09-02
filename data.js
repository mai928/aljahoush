import slider1 from "./src/assets/slider1.jpg";
import slider2 from "./src/assets/slider2.jpg";

import service1 from "./src/assets/service1.png";
import service2 from "./src/assets/services2.png";
import video1 from "./public/videos/video1.mp4"

export const navlinks = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/about",
		name: "About",
	},
	{
		path: "/services",
		name: "Services",
	},
	{
		path: "/products",
		name: "Products",
	},{
		path: "/videos",
		name: "Videos",
	},
	{
		path: "/contact",
		name: "Contact Us",
	},
];

export const sliderData = [
	{
		img: slider2,
		heading: "Agriculture Farming Product1",
		desc: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable",
	},
	{
		img: slider1,
		heading: "Agriculture Organic Product2",
		desc: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable",
	},
];

export const services = [
	{
		id: 1,
		src: service1,
		title: "Test-Bottle",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 2,
		src: service2,
		title: "Test-Bottle",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 3,
		src: service1,
		title: "Test-Bottle",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 4,
		src: service2,
		title: "Test-Bottle",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
];

export const Productgallery = [
	{
		src: "https://api.aljahoush.com/assets/images/partners/172484209228bdc00f20.jpg",
		//   width: 320,
		height: 174,
		tags: [
			{ value: "Nature", title: "Nature" },
			{ value: "Flora", title: "Flora" },
		],
		caption: "After Rain (Jeshu John - designerspics.com)",
	},
	{
		src: "https://api.aljahoush.com/assets/images/partners/172484209228bdc00f20.jpg",
		//   width: 320,
		height: 212,
		caption: "Boats (Jeshu John - designerspics.com)",
	},
	{
		src: "https://api.aljahoush.com/assets/images/partners/172484209228bdc00f20.jpg",
		//   width: 320,
		height: 212,
		caption: "Color Pencils (Jeshu John - designerspics.com)",
	},
	{
		src: "https://api.aljahoush.com/assets/images/partners/172484209228bdc00f20.jpg",
		//   width: 320,
		height: 213,
		caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
	},
	{
		src: "https://api.aljahoush.com/assets/images/partners/172484209228bdc00f20.jpg",
		//   width: 320,
		height: 183,
		caption: "37H (gratispgraphy.com)",
	},
	{
		src: "https://api.aljahoush.com/assets/images/partners/172484209228bdc00f20.jpg",
		//   width: 240,
		//   height: 320,
		tags: [{ value: "Nature", title: "Nature" }],
		caption: "8H (gratisography.com)",
	},
	{
		src: "https://api.aljahoush.com/assets/images/partners/172484209228bdc00f20.jpg",
		//   width: 320,
		//   height: 190,
		caption: "286H (gratisography.com)",
	},
	{
		src: "https://api.aljahoush.com/assets/images/partners/172484209228bdc00f20.jpg",
		//   width: 320,
		//   height: 148,
		tags: [{ value: "People", title: "People" }],
		caption: "315H (gratisography.com)",
	},
	
];

export const videoSources = [
	{ src: video1, type: "video/mp4" },
	{ src: video1, type: "video/mp4" },
	{ src: video1, type: "video/mp4" },
];
