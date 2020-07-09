class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/yuh.wav');
        this.load.audio('sfx_explosion', './assets/hit.wav');
        this.load.audio('sfx_rocket', './assets/launch.wav');
        this.load.audio('menu_music', './assets/boat_jam.wav');
        this.load.audio('play_music', './assets/play_boats.wav');

    }

    create() {
        //menu display
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '45px',
            backgroundColor: '#000080',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY - textSpacer,'BOAT JAM', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY,'Use ← → to move & (F) to launch', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#000080';
        menuConfig.color = '#FFF'
        this.add.text(centerX, centerY + textSpacer, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);
        this.bgm = this.sound.add('menu_music', {
          mute: false,
          volume: 0.5,
          rate: 1,
          loop: true
        });
        this.bgm.play();

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.bgm.stop();
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.bgm.stop();
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
    }
}