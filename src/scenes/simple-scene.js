import Phaser from 'phaser';

class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('sky', 'assets/sky.png');
  }

  create() {
    this.add.image(100, 200, 'sky');
  }
}

export default SimpleScene;