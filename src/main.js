//The mods are: Redesigned Aesthetic(50), Background Music for Play(10), New Title Screen(15), Time Remaining on Display(15), and a Title Theme (10)
//create game configuration object
let config =  {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
};

//create main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000    
}

//reserve some keyboard bindings
let keyF, keyLEFT, keyRIGHT;