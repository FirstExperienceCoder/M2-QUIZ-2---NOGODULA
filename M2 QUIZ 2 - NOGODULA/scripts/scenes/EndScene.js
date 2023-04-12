class EndScene extends Phaser.Scene {

    constructor() {
        super('EndScene');
    }

    preload ()
    {
        // Reset Button, Return Menu Button, & Background Images
        this.load.image('resetBtn','assets/images/buttons/reset.png');
        this.load.image('homeBtn','assets/images/buttons/home.png');
        this.load.image('endSceneBg','assets/images/background/space_gen.png');

        // Text Image of GAME OVER
        this.load.image('gameovertext','assets/images/background/gameover.png');

    }

    create ()
    {
        // End Scene BG
        this.add.image(400, 300, 'endSceneBg');

        // Game Over Text Image
        this.add.image(800, 120, 'gameovertext')
        
        // Score Text Display (endgame sequence)
        const playerScore = score;
        const timeMinutes = minutes;
        const timeSeconds = seconds.toString().padStart(2, '0');

        // Collected Score Text & Time limit (just normal text w/ command result score)
        const collectedOverText = this.add.text(600,250, 'SCORE: ' + playerScore + '\nTIME: '+ timeMinutes +':'+ timeSeconds , {fontFamily: 'Calibre', fontSize: '42px', fill: '#FFFF00'});
        collectedOverText.setInteractive({useHandCursor: true})

        // Reset Button (to play again direct to Game Scene)
        const resetButton = this.add.image(800,400,'resetBtn').setScale(2);
        resetButton.setInteractive();
        resetButton.on('pointerdown', () => {this.scene.start('GameScene1');
        score = 0;
        gameTime = 0;});

        // Return Home Menu Button (go back into MenuScene)
        const returnMainMenu = this.add.image(800,600,'homeBtn').setScale(2);
        returnMainMenu.setInteractive();
        returnMainMenu.on('pointerdown', () => {this.scene.start('MenuScene')});

    }
    update(){

    }
}