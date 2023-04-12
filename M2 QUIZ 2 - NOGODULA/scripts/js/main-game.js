var config = {
    type: Phaser.AUTO,
    width: 1740,
    height: 910,
    physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 300 },
            debug: false
        }
    },
    // To load the scenes
    scene: [MenuScene,GameScene1,CreditScene,EndScene],
    render: {
        pixelArt: true
    }
};

var game = new Phaser.Game(config);

function firedBullet() {
    var laser = lasers.get(player.x, player.y - 100, 'laserBlue').setScale(1);
    laser.setVelocityY(100);
    laser.body.onWorldBounds = true;
    laser.worldboundsKill = true;
    laserSound.play();
}

function enemyHit(lasers, enemiesAlien){
    enemiesAlien.destroy();
    lasers.destroy();
    score += 1;
    scoreText.setText('Score: ' + score);
    createAlien();
    enemyHitSFX.play();
}

function collideEnemyAndBullet(player,enemy,lasers){
    this.physics.pause();
    player.disableBody(true,true);
    this.scene.start('endScene',score,minutes,seconds);
    ingameBGM.stop();
}

function ingameTimer(){
    minutes = Math.floor(gameTime / 60);
    seconds = Math.floor(gameTime % 60);
    playerTimeText.setText('Time: ' + minutes + ':' + seconds.toString().padStart(2, '0'));
    gameTime+= 0.01;
}

function createEnemy(){
    var x = Phaser.Math.Between(100, 900);
    var y = 100;
    var enemySpawn = enemy.create(x, y, 'enemyShip');
    enemySpawn.setScale(0.5);
    enemySpawn.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(200, 400));
}
    

 



