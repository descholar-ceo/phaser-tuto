import Phaser from 'phaser';

class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    // this.load.spritesheet('dude', 'assets/dude.png');
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.add.image(100, 200, 'ground');
    this.add.image(100, 200, 'star');
    this.add.image(200, 200, 'bomb');
  }
}

export default SimpleScene;