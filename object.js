// const related = ["obj.attackRobot"];

const robotObj = {
	title: "Television Spaceman Robot",
	locX: 600,
	locY: 500,
	hover: false,
	img: "robot.jpg",
	year: 1959,
	get related() {
		return [attackRobotObj, zenoR25Obj];
	},
	des: "Manufactured by Alps, Japan, 1959\n\n\nThe Television Spaceman Robot was made in three different versions throughout the 1960s,\nthough all used the same box art. The TV in the robot's chest lit up to show 'moving space\npictures', and the robot could walk forwards slowly while its arms moved and lights flashed.\nIt set a pattern for many other robot toys which followed."
}
const attackRobotObj = {
	title: "Attacking Robot",
	locX: 500,
	locY: 300,
	hover: false,
	img: "attackRobot.jpg",
	year: 1960,
	get related() {
		return [robotObj, zenoR25Obj];
	}, 
	des:"Manufactured by Horikawa, Japan, 1960s\n\n\nWith its colourful lithograpohed detail, battery operation, sound and movement, this toy robot is a classic among many toy robot designs which had a decisive role in influencing public perceptions of robot form and behaviour."
}
const zenoR25Obj = {
	title: "Zeno R25",
	locX: 600,
	locY: 800,
	hover: false,
	img: "zenoR25.jpg",
	year: 2013,
	get related() {
		return [robotObj, attackRobotObj];
	}, 
	des:"Expressive humanoid robot; with quick-start guide in polythene sleeve; and charger, by RoboKind, United States, American, 2013-2016\n\n\nZeno is one of the most expressive humanoid robots that can be bought off the shelf. Zeno is designed to display realistic facial expressions as it interacts with people. Zeno is typically used to enrich learning activities and therapy sessions for children with special educational needs. Zeno’s expressive face encourages users to relax, make eye contact and stay focused on the activity conducted by the robot.\n\n\nZeno can be programmed to pull 32 distinct facial expressions, recognise faces looking at it and adapt the angle of its gaze and facial expressions appropriately deliver information and respond to voice commands or instructions from a tablet, and record therapy sessions with the camera in its right eye."
}