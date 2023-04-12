class CreditScene extends Phaser.Scene {

    constructor() {
        super('CreditScene');
    }

    preload () 
    {
        // Return Button & Background Image 
        this.load.image('returnBtn','assets/images/buttons/back.png');
        this.load.image('jvie','assets/images/background/programmer.png');

        // Additional Buttons Image
        this.load.image('facebookBtn','assets/images/buttons/facebook.png');
        this.load.image('githubBtn','assets/images/buttons/github.png');

    }

    create()
    {
        // Background Image of Whole Canvas
        this.add.image(870, 450, 'jvie').setScale(0.8);;

        // Back Button
        const back1Button = this.add.image(290,800,'returnBtn').setScale(1);
        back1Button.setInteractive();
        back1Button.on('pointerdown', () => {this.scene.start('MenuScene')});

        // Facebook External Link Button (Follow and Add me through via Facebook)
        const facebookButton = this.add.image(1500, 800, 'facebookBtn').setScale(0.2);
        facebookButton.setInteractive();
        facebookButton.on('pointerup', openExternalLinkFacebook, this);

        // Github External Link Button (See my code sources! it helps you)
        const githubButton = this.add.image(1420, 800, 'githubBtn').setScale(0.3);
        githubButton.setInteractive();
        githubButton.on('pointerup', openExternalLinkGithub, this);
    }

    update ()
    {

    }
}

/* External Link direct Facebook myhomepage */
function openExternalLinkFacebook ()
{
    var url = 'https://www.facebook.com/jvie.nogodula.7' 

    var s = window.open(url);

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}

/* External Link direct Github profile */
function openExternalLinkGithub ()
{
    var url = 'https://github.com/GoldiPandesal' 

    var s = window.open(url);

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}