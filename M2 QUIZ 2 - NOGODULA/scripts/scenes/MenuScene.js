class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    preload() 
    {
        // Title Image & Background
        this.load.image('titleText','assets/images/background/bravebird_title.png');
        this.load.image('spaceBg','assets/images/background/space_gen.png');
        
        // Buttons Image
        this.load.image('playBtn','assets/images/buttons/play.png');
        this.load.image('creditsBtn','assets/images/buttons/credits.png');
        this.load.image('exitBtn','assets/images/buttons/exit.png');
    }

    create()
    {
        // Background Image of Whole Canvas w/ Image Text
        this.add.image(800, 400, 'spaceBg');
        this.add.image(850, 200, 'titleText');
        
        // Play Button
        const playButton = this.add.image(840,450,'playBtn');
        playButton.setInteractive();
        playButton.on('pointerdown', () => {this.scene.start('GameScene1');});
        
        // Credits Button
        const creditsButton = this.add.image(840,600,'creditsBtn');
        creditsButton.setInteractive();
        creditsButton.on('pointerdown', () => {this.scene.start('CreditScene')});
        
        // Exit Button
        const exitGame = this.add.image(840,750,'exitBtn');
        exitGame.setInteractive();
        exitGame.on('pointerdown', () => {alert('SHEESSSSH! GAME END')})
    }
    
    update()
    {
        
    }
}
         