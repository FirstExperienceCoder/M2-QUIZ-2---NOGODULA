var player;
var enemy;

var cursors;
var shootProjectiles;

var score = 0;
var scoreText;

var gameTime = 0;
var minutes =  0;
var seconds = 0;

var playerTimeText;

var lasers;
var lastFired = 0;

var onclickSound;

var laserCooldown = 200;
var laserSound;

var enemiesAlien;

var spaceKey;

var enemyHitSFX;
var ingameBGM;



class GameScene1 extends Phaser.Scene{

    constructor() {
        super('GameScene1');
    }

preload () 
{
    // The Images Set of preload files
    this.load.image('space', 'assets/images/background/galaxy.jpg');
    
    this.load.image('playerShip', 'assets/images/sprites/player_ship2.png');

    this.load.image('enemyShip', 'assets/images/sprites/enemy1.png');
    
    this.load.image('laserBlue', 'assets/images/sprites/laserBlue02.png');

    // The Music Set of preload files
    this.load.audio('spaceBGM', 'assets/sounds/BGM/Underclocked.mp3');
    
    this.load.audio('laserShoot', 'assets/sounds/SFX/blaster3.mp3');

    this.load.audio('enemyExplode', 'assets/sounds/SFX/explosion.mp3');
}

create () 
{
    // Sounds
    laserSound = this.sound.add('laserShoot');

    ingameBGM = this.sound.add('spaceBGM');
    ingameBGM.loop = true;
    ingameBGM.play();

    enemyHitSFX = this.sound.add('enemyExplode');

    // Images
    this.add.image(800, 400, 'space'); 

    // Player
    player = this.physics.add.sprite(50, 400, 'playerShip').setScale(0.21);
    player.setCollideWorldBounds(true);
    player.setGravity(0,0);

    this.anims.create({
        key: 'stable',
        frames: [ { key: 'playerShip', frame: 0 } ],
        frameRate: 10,
        repeat: -1
    });

    // Controls with SPACEBAR key
    cursors = this.input.keyboard.createCursorKeys();
    spaceKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // Display UI text
    scoreText = this.add.text(50, 750, 'Score: 0', { fontSize: '32px', fill: '#fff' }); 
    scoreText.setRotation(-Math.PI / 2);

    playerTimeText = this.add.text(50, 200, 'Time: 0:00', { fontSize: '32px', fill: '#fff' }); 
    playerTimeText.setRotation(-Math.PI / 2);

    // Bullets projectiles
    lasers = this.physics.add.group({
        defaultKey: {key: 'laserBlue'},
        maxSize: 2000,
        allowGravity: true,
        worldBounds: true
      
    });

    // Enemy Spawn
    enemy = this.physics.add.group({
        defaultKey: {key: 'enemyShip'},
        allowGravity: true,
        runChildUpdate: true,
        worldBounds: true,
        debug: true  
    });

    enemy.createMultiple({
        key: 'enemyShip',
        repeat: 0,
        setXY: {
            x: 800,
            y: 0,
            stepX: 800
        },
        
    })

    enemy.children.iterate(function(child) {
        child.setVelocity(Phaser.Math.Between(-200, 100), Phaser.Math.Between(200, 400)).setScale(0.5);;
    });

    // Overlap Physics 
    this.physics.add.overlap(lasers, enemy, enemyHit, null, this);
    this.physics.add.overlap(player, enemy, collideEnemyAndBullet, null, this);
    this.physics.add.overlap(player, lasers, collideEnemyAndBullet, null, this);
}

update ()
{
    // Controls
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('stable', true);
    }
    if (spaceKey.isDown && this.time.now > lastFired + laserCooldown) {
        firedBullet();
        lastFired = this.time.now;
        player.anims.play('stable', true);
    }
   ingameTimer();
   enemy.getChildren().forEach(function(enemy) {
    if (enemy.y > game.config.height) {
        enemy.destroy();
        createEnemy();
    }
});

}

}















