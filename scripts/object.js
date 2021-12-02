const anschutzTachyscopeObj = {
	index: 0,
	title: "ANSCHUTZ TACHYSCOPE",
	short: "tachyscope",
	made: [screen.width * 0.499, screen.width * 0.200], //germany
	anim: [0, 0],
	hover: false,
	img: "assets/tachyscope.jpg",
	year: 1891,
	category: "cinematography",
	get related() {
		return [phenakistoscopeObj];
	}, 
	des:"Circular cardboard box with four-language pictorial lid, 233mm diameter; lid lifts to fit on wooden and metal spindle and base for rotation; picture bands with integral slots fit around circumference; modified for display in old museum - wooden insert fitted inside lid for support; spindle and base drilled through shaft of motor mechanism. With three picture bands: horse and rider jumping over fence (LFG 1, No 2, by Ottomar Anschutz, Lisca (Posen); galloping horse; trotting dog."
}
const attackRobotObj = {
	index: 1,
	title: "ATTACKING ROBOT",
	short: "attacking robot",
	made: [screen.width * 0.795, screen.width * 0.225], //japan
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
	short: "Boxfoot Microscope",
	made: [screen.width * 0.479, screen.width * 0.212], //france
	anim: [0, 0],
	hover: false,
	img: "assets/boxfoot.jpg",
	year: 1851,
	category: "microscopy",
	get related() {
		return [microscopeObj];
	}, 
	des:"Tiny boxfoot microscope in walnut case, French, 1851-1900."
}
const drWhoSpaceshipObj = {
	index: 3,
	title: "DR WHO SPACESHIP",
	short: "Dr Who Spaceship",
	made: [screen.width * 0.474, screen.width * 0.2], //uk
	anim: [0, 0],
	hover: false,
	img: "assets/drWhoSpaceship.jpg",
	category: "space",
	year: 1980,
	get related() {
		return [starTrekCommObj];
	}, 
	des:"Doctor Who fighter spaceship; military air transport service 3112. This model was made by model maker Martin Bower, purchased by the BBC FX department for use in the story Earthshock, the sixth serial of the nineteenth season of the British science fiction television series Doctor Who in 1982. It seems it was never used in the show."
}
const infantDollObj = {
	index: 4,
	title: "DOLL USED IN GENDER BEHAVIOUR STUDIES",
	short: "Infant Doll",
	made: [screen.width * 0.73, screen.width * 0.231], //china
	anim: [0, 0],
	hover: false,
	img: "assets/infantDoll.jpg",
	category: "psychology",
	year: 1980,
	get related() {
		return [worldTechniqueObj];
	}, 
	des:"Infant doll with feeding bottle and baby bath, plus baby oil, baby powder, baby wipes, and pink bunny towel, used in experiments on the gender behaviour of children, unsigned, China, 1990-2000."
}
const kitObj = {
	index: 5,
	title: "KIT THE KAT MASCOT SOFT TOY",
	short: "Kit the Kat",
	made: [screen.width * 0.474, screen.width * 0.19], //manchester
	anim: [0, 0],
	hover: false,
	img: "assets/kit.jpg",
	category: "local",
	year: 2002,
	get related() {
		return [tankardObj];
	}, 
	des:"A Kit the Kat mascot soft toy from the 2002 Manchester Commonwealth Games."
}
const microscopeObj = {
	index: 6,
	title: "FRENCH TOY MICROSCOPE, IN CASE, LATE 19TH CENTURY",
	short: "Toy Microscope",
	made: [screen.width * 0.485, screen.width * 0.213], //france
	anim: [0, 0],
	hover: false,
	img: "assets/microscope.jpg",
	category: "microscopy",
	year: 1875,
	get related() {
		return [boxfootObj];
	}, 
	des:"French toy microscope, in case, late 19th century."
}
const phenakistoscopeObj = {
	index: 7,
	title: "PHENAKISTOSCOPE DISC WITH HANDLE",
	short: "Phenakistoscope Disc",
	made: [screen.width * 0.481, screen.width * 0.22], //france
	anim: [0, 0],
	hover: false,
	img: "assets/phenakistoscope.jpg",
	category: "cinematography",
	year: 1830,
	get related() {
		return [anschutzTachyscopeObj];
	}, 
	des:"Phenakistoscope. With eight double sided picture discs, 180mm-224mm diameter (some badly damaged from adhesive). Black painted heavy card disc with rectangular peripheral perforations. Spindle with wooden handle. 1. Dancer with cornucopea/cherub and female figure 2. Man with bat and ball/two dancers 3. sawmill/blacksmith 4. Man bowing to woman, tumbler/blacksmith 5. hoop and ball/leapfrog 6. Girl with cymbals/two boys jumping back-to-back 7. Wood chopping/woman birching boy 8. Punch/leaping through hoop from horseback."
}
const robotObj = {
	index: 8,
	title: "TELEVISION SPACEMAN ROBOT",
	short: "Television Space Robot",
	made: [screen.width * 0.794, screen.width * 0.21], //japan
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
	short: "Star Trek Communicator",
	made: [screen.width * 0.469, screen.width * 0.196], //uk
	anim: [0, 0],
	hover: false,
	img: "assets/starTrekComm.jpg",
	category: "space",
	year: 1980,
	get related() {
		return [drWhoSpaceshipObj];
	}, 
	des:"Boxed authenicated merchandise Star Trek Communicator."
}
const tankardObj = {
	index: 10,
	title: "CLAY TOY TANKARD",
	short: "Clay Toy Tankard",
	made: [screen.width * 0.467, screen.width * 0.202], //manchester
	anim: [0, 0],
	hover: false,
	img: "assets/tankard.jpg",
	category: "local",
	year: 1953,
	get related() {
		return [kitObj];
	}, 
	des:"A glazed clay toy tankard, painted red; made by John Pollock & Co."
}
const teddyObj = {
	index: 11,
	title: "STEIFF TEDDY BEAR",
	short: "Steiff Teddy Bear",
	made: [screen.width * 0.504, screen.width * 0.210], //germany
	anim: [0, 0],
	hover: false,
	img: "assets/teddy.jpg",
	category: "materials",
	year: 1915,
	get related() {
		return [thomasTankObj];
	}, 
	des:"Steiff teddy bear, dark gold mohair, wearing knitted pullover, c 1910."
}
const thomasTankObj = {
	index: 12,
	title: "'THOMAS THE TANK ENGINE FUN MACHINE' EXTRUSION TOY",
	short: "Thomas the Tank Engine",
	made: [screen.width * 0.472, screen.width * 0.196], //swindon
	anim: [0, 0],
	hover: false,
	img: "assets/thomasTank.jpg",
	category: "materials",
	year: 1996,
	get related() {
		return [teddyObj];
	}, 
	des:"'Thomas the Tank Engine fun machine' play stuff extrusion toy and box, made by Bluebird Developments, Swindon, United Kingdom, 1996. This Thomas the Tank engine toy was made by Bluebird Toys Plc. Swindon in 1996. Thomas the Tank Engine was a main character in the extremely popular ‘Railway Series’ of children’s books written by the Revered Wilbert V. Awdry and, later, his son Christopher. Awdry grew up right near the Great Western railway line in the village of Box. The sounds of the trains puffing from Swindon and Chippenham through Box to Bath formed the personalities of the engines in his books – first told as stories to his son."
}
const worldTechniqueObj = {
	index: 13,
	title: "TOYS USED FOR LOWENFELD'S 'WORLD TECHNIQUE' THERAPY",
	short: "Lowenfeld's Toys",
	made: [screen.width * 0.469, screen.width * 0.196], //england
	anim: [0, 0],
	hover: false,
	img: "assets/worldTechnique.jpg",
	category: "psychology",
	year: 1970,
	get related() {
		return [infantDollObj];
	}, 
	des:"Extensive collection of toy figures as provided at Margaret Lowenfeld’s Institute of Child Psychology for children to create their sand tray ‘worlds’ as part of Lowenfeld’s ‘World Technique’ therapy. The toys are sub-divided into twenty subject areas, and are of various ages – although predominantly 1930s-1960s. At some time previous to the acquisition, the toys had been housed in twenty or so plastic trays/drawers in a black metal frame. The metal frame and plastic trays were not acquired."
}
const zenoR25Obj = {
	index: 14,
	title: "ZENO R25",
	short: "ZENO R25",
	made: [screen.width * 0.324, screen.width * 0.216], //usa
	anim: [0, 0],
	hover: false,
	img: "assets/zenoR25.jpg",
	category: "robotics",
	year: 2013,
	get related() {
		return [robotObj, attackRobotObj];
	}, 
	des:"Expressive humanoid robot with quick-start guide in polythene sleeve and charger, by RoboKind, United States, American, 2013-2016. Zeno is one of the most expressive humanoid robots that can be bought off the shelf. Zeno is designed to display realistic facial expressions as it interacts with people. Zeno is typically used to enrich learning activities and therapy sessions for children with special educational needs. Zeno’s expressive face encourages users to relax, make eye contact and stay focused on the activity conducted by the robot. Zeno can be programmed to pull 32 distinct facial expressions, recognise faces looking at it and adapt the angle of its gaze and facial expressions appropriately deliver information and respond to voice commands or instructions from a tablet, and record therapy sessions with the camera in its right eye."
}