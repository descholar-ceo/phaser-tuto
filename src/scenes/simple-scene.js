import Phaser from 'phaser';

class SimpleScene extends Phaser.Scene {
  create() {
    this.add.text(100, 100, 'Hello there, welcome to the new world!', { fill: '#0f0' });
  }
}

export default SimpleScene;