const anschutzTachyscopeObj = {
	index: 0,
	title: "ANSCHUTZ TACHYSCOPE",
	made: [screen.width * 0.499, screen.width * 0.155], //germany
	anim: [0, 0],
	hover: false,
	img: "assets/tachyscope.jpg",
	year: 1891,
	category: "cinematography",
	get related() {
		return [phenakistoscopeObj];
	}, 
	des:""
}
const attackRobotObj = {
	index: 1,
	title: "ATTACKING ROBOT",
	made: [1281, 346], //japan
	anim: [0, 0],
	hover: false,
	img: "assets/attackRobot.jpg",
	year: 1960,
	category: "robotics",
	get related() {
		return [robotObj, zenoR25Obj];
	}, 
	des:"Manufactured by Horikawa, Japan, 1960s. With its colourful lithograpohed detail, battery operation, sound and movement, this toy robot is a classic among many toy robot designs which had a decisive role in influencing public perceptions of robot form and behaviour."
}
const boxfootObj = {
	index: 2,
	title: "TINY BOXFOOT MICROSCOPE IN WALNUT CASE, FRENCH",
	made: [940, 320], //france
	anim: [0, 0],
	hover: false,
	img: "assets/boxfoot.jpg",
	year: 1851,
	category: "microscopy",
	get related() {
		return [microscopeObj];
	}, 
	des:""
}
const drWhoSpaceshipObj = {
	index: 3,
	title: "DR WHO SPACESHIP",
	made: [930, 297], //uk
	anim: [0, 0],
	hover: false,
	img: "assets/drWhoSpaceship.jpg",
	category: "space",
	year: 1980,
	get related() {
		return [starTrekCommObj];
	}, 
	des:""
}
const infantDollObj = {
	index: 4,
	title: "INFANT DOLL USED IN EXPERIMENTS ON THE GENDER BEHAVIOUR OF CHILDREN",
	made: [1186, 357], //china
	anim: [0, 0],
	hover: false,
	img: "assets/infantDoll.jpg",
	category: "psychology",
	year: 1980,
	get related() {
		return [worldTechniqueObj];
	}, 
	des:""
}
const kitObj = {
	index: 5,
	title: "KIT THE KAT MASCOT SOFT TOY",
	made: [930, 279], //manchester
	anim: [0, 0],
	hover: false,
	img: "assets/kit.jpg",
	category: "local",
	year: 2002,
	get related() {
		return [tankardObj];
	}, 
	des:""
}
const microscopeObj = {
	index: 6,
	title: "FRENCH TOY MICROSCOPE, IN CASE, LATE 19TH CENTURY",
	made: [950, 320], //france
	anim: [0, 0],
	hover: false,
	img: "assets/microscope.jpg",
	category: "microscopy",
	year: 1875,
	get related() {
		return [boxfootObj];
	}, 
	des:""
}
const phenakistoscopeObj = {
	index: 7,
	title: "PHENAKISTOSCOPE DISC WITH HANDLE",
	made: [940, 310], //france
	anim: [0, 0],
	hover: false,
	img: "assets/phenakistoscope.jpg",
	category: "cinematography",
	year: 1830,
	get related() {
		return [anschutzTachyscopeObj];
	}, 
	des:""
}
const robotObj = {
	index: 8,
	title: "TELEVISION SPACEMAN ROBOT",
	made: [1281, 316], //japan
	anim: [0, 0],
	hover: false,
	img: "assets/robot.jpg",
	year: 1959,
	category: "robotics",
	get related() {
		return [attackRobotObj, zenoR25Obj];
	},
	des: "Manufactured by Alps, Japan, 1959. The Television Spaceman Robot was made in three different versions throughout the 1960s, though all used the same box art. The TV in the robot's chest lit up to show 'moving space pictures', and the robot could walk forwards slowly while its arms moved and lights flashed. It set a pattern for many other robot toys which followed."
}
const starTrekCommObj = {
	index: 9,
	title: "STAR TREK COMMUNICATOR",
	made: [920, 289], //uk
	anim: [0, 0],
	hover: false,
	img: "assets/starTrekComm.jpg",
	category: "space",
	year: 1980,
	get related() {
		return [drWhoSpaceshipObj];
	}, 
	des:""
}
const tankardObj = {
	index: 10,
	title: "CLAY TOY TANKARD",
	made: [915, 301], //manchester
	anim: [0, 0],
	hover: false,
	img: "assets/tankard.jpg",
	category: "local",
	year: 1953,
	get related() {
		return [kitObj];
	}, 
	des:""
}
const teddyObj = {
	index: 11,
	title: "STEIFF TEDDY BEAR",
	made: [968, 317], //germany
	anim: [0, 0],
	hover: false,
	img: "assets/teddy.jpg",
	category: "materials",
	year: 1915,
	get related() {
		return [thomasTankObj];
	}, 
	des:""
}
const thomasTankObj = {
	index: 12,
	title: "'THOMAS THE TANK ENGINE FUN MACHINE' EXTRUSION TOY",
	made: [925, 289], //swindon
	anim: [0, 0],
	hover: false,
	img: "assets/thomasTank.jpg",
	category: "materials",
	year: 1996,
	get related() {
		return [teddyObj];
	}, 
	des:""
}
const worldTechniqueObj = {
	index: 13,
	title: "TOYS USED FOR LOWENFELD'S 'WORLD TECHNIQUE' THERAPY",
	made: [920, 289], //england
	anim: [0, 0],
	hover: false,
	img: "assets/worldTechnique.jpg",
	category: "psychology",
	year: 1970,
	get related() {
		return [infantDollObj];
	}, 
	des:""
}
const zenoR25Obj = {
	index: 14,
	title: "ZENO R25",
	made: [737, 329], //usa
	anim: [0, 0],
	hover: false,
	img: "assets/zenoR25.jpg",
	category: "robotics",
	year: 2013,
	get related() {
		return [robotObj, attackRobotObj];
	}, 
	des:"Expressive humanoid robot; with quick-start guide in polythene sleeve; and charger, by RoboKind, United States, American, 2013-2016\n\n\nZeno is one of the most expressive humanoid robots that can be bought off the shelf. Zeno is designed to display realistic facial expressions as it interacts with people. Zeno is typically used to enrich learning activities and therapy sessions for children with special educational needs. Zeno’s expressive face encourages users to relax, make eye contact and stay focused on the activity conducted by the robot.\n\n\nZeno can be programmed to pull 32 distinct facial expressions, recognise faces looking at it and adapt the angle of its gaze and facial expressions appropriately deliver information and respond to voice commands or instructions from a tablet, and record therapy sessions with the camera in its right eye."
}