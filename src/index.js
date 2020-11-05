import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

new Phaser.Game(config);

function preload() {
  this.load.image('sky','./assets/sky.png');
  this.load.image('ground','./assets/platform.png');
  this.load.image('star','./assets/star.png');
  this.load.image('bomb','./assets/bomb.png');
  this.load.spritesheet('dude','./assets/dude.png',{frameWidth: 32, frameHeight: 48});
}

function create (){
  this.add.image(400, 300, 'sky');
  this.add.image(400, 300, 'star');
}

function update() {

}
