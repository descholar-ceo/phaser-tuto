// import Phaser from 'phaser';
// // import sky from '../assets/sky.png';
// // import ground from '../assets/platform.png';
// // import star from '../assets/star.png';
// // import bomb from '../assets/bomb.png';
// // import dude from '../assets/dude.png';

// function preload() {
//   this.load.setBaseURL(__dirname);
//   this.load.image('sky', '../assets/sky.png');
//   this.load.image('ground', '../assets/platform.png');
//   this.load.image('star', '../assets/star.png');
//   this.load.image('bomb', '../assets/bomb.png');
//   this.load.spritesheet('dude', '../assets/dude.png', { frameWidth: 32, frameHeight: 48 });
// }

// function create() {
//   this.add.image(400, 300, 'sky');
//   this.add.image(400, 300, 'star');
// }

// function update() {

// }

// const config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   scene: { preload, create, update },
// };

// const game = new Phaser.Game(config);
const messageEl = document.createElement('h1');
messageEl.textContent = 'Hello there! Welcome to the new world!';
document.body.appendChild(messageEl);
