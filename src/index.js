import Phaser from 'phaser';

function preload() {
  this.load.setBaseURL(__dirname);
  this.load.image('sky', '../assets/sky.png');
  this.load.image('ground', '../assets/platform.png');
  this.load.image('star', '../assets/star.png');
  this.load.image('bomb', '../assets/bomb.png');
  this.load.spritesheet('dude', '../assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create() {
  this.add.image(400, 300, 'sky');
  this.add.image(400, 300, 'star');
}

function update() {

}

const config = {
  width: 800,
  height: 600,
  scene: { preload, create, update },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
