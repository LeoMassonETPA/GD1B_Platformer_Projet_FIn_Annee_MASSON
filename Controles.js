var player;
var keys;
var compteur = 1;

var t1;
var t2;
var t3;
var t4;
var t5;

var flecheG;
var flecheD;

var buisson;
var cristal;

var checkpoint;

class Controles extends Phaser.Scene{
    constructor(){
        super("Controles");
    }
    init(data){
    }
    preload(){
        
        
        this.load.image('backgroundC','assets/Controles.png');
        
        this.load.image('boutonEchap','assets/BoutonEchap.png');
        
        this.load.image('Csaut','assets/ControlesSaut.png');
        this.load.image('Ccourse','assets/ControleCourse.png');
        this.load.image('Clancer','assets/ControleLancer.png');
        this.load.image('Ccheckpoint','assets/ControleCheckpoint.png');
        this.load.image('Cobstacle','assets/ControleObstacles.png');
        
        this.load.image('buisson','assets/Buisson1.png');
        this.load.image('cristal','assets/PlateformeKill.png');
        
        this.load.image('flecheG','assets/FlecheControleG.png');
        this.load.image('flecheD','assets/FlecheControleD.png');
       
        
        this.load.spritesheet('dudeCourseLance','assets/SSCL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeJumpLanceDebut','assets/SSSDL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeTurnLance','assets/SSStL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('lancer','assets/SSL.png',{ frameWidth: 262, frameHeight: 250 });
        
        this.load.spritesheet('checkpoint','assets/SSCheckpoint.png',{ frameWidth: 150, frameHeight: 300 });
       
        
    }
    
    create(){
        
        this.cameras.main.setBounds(0, 0, 1920, 1080);
        

        this.physics.world.setBounds(0, 0, 1920, 1080);
        
        this.add.image(0, 0, 'backgroundC').setOrigin(0);        
        
        this.add.image(100, 100, 'boutonEchap');
        
        flecheG = this.add.image(120, 540, 'flecheG').setAlpha(0);
        flecheD = this.add.image(1830, 540, 'flecheD').setAlpha(0);
        
        t1 = this.add.image (960, 540, 'Ccourse').setAlpha(0);
        t2 = this.add.image (960, 540, 'Csaut').setAlpha(0);
        t3 = this.add.image (960, 540, 'Clancer').setAlpha(0);
        t4 = this.add.image (960, 540, 'Ccheckpoint').setAlpha(0);
        t5 = this.add.image (960, 540, 'Cobstacle').setAlpha(0);
        

        player = this.physics.add.sprite(600, 500, 'dude').setScale(2);
        player.body.setAllowGravity(false);
        player.body.setImmovable(true);
        
        checkpoint = this.physics.add.sprite(600, 500, 'checkpoint').setScale(1.7).setAlpha(0);
        checkpoint.body.setAllowGravity(false);
        checkpoint.body.setImmovable(true);
        
    
        cristal = this.add.image (480, 500, 'cristal').setAlpha(0);
        buisson = this.add.image (780, 500, 'buisson').setAlpha(0);
        
        this.anims.create({
        key: 'jumpLance',
        frames: this.anims.generateFrameNumbers('dudeJumpLanceDebut', { start: 0, end: 4 }),
        frameRate: 20,
        repeat: -1
        });
        
        this.anims.create({
        key: 'rightLance',
        frames: this.anims.generateFrameNumbers('dudeCourseLance', { start: 0, end: 24 }),
        frameRate: 60,
        repeat: -1
        });
     
        this.anims.create({
        key: 'turnLance',
        frames: this.anims.generateFrameNumbers('dudeTurnLance', { start: 0, end: 4 }),
        frameRate: 7,
        repeat: -1
        });
        
        this.anims.create({
        key: 'lancer',
        frames: this.anims.generateFrameNumbers('lancer', { start: 0, end: 10 }),
        frameRate: 15,
        repeat: -1
        });
       
        this.anims.create({
        key: 'checkpointActif',
        frames: this.anims.generateFrameNumbers('checkpoint', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
        }); 
        
         keys = this.input.keyboard.addKeys({
		
        echap : Phaser.Input.Keyboard.KeyCodes.ESC,     
             
		z : Phaser.Input.Keyboard.KeyCodes.Z,
            
		a : Phaser.Input.Keyboard.KeyCodes.A,
			
		q : Phaser.Input.Keyboard.KeyCodes.Q,
			
		s : Phaser.Input.Keyboard.KeyCodes.S,
			
		d : Phaser.Input.Keyboard.KeyCodes.D,

        left: Phaser.Input.Keyboard.KeyCodes.LEFT,

        right: Phaser.Input.Keyboard.KeyCodes.RIGHT,

        up : Phaser.Input.Keyboard.KeyCodes.UP,

        down: Phaser.Input.Keyboard.KeyCodes.DOWN,

        space: Phaser.Input.Keyboard.KeyCodes.SPACE,

        shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            
        tab: Phaser.Input.Keyboard.KeyCodes.TAB,
            
        });
        
       
        
        
   
    }
    
    update(){

    
    
    if (keys.echap.isDown){
        this.scene.start('Menu');
    }
    
        
    const KeyRightJustDown = Phaser.Input.Keyboard.JustDown(keys.right);   
    const KeyLeftJustDown = Phaser.Input.Keyboard.JustDown(keys.left);   
        
    if (KeyRightJustDown){
        compteur +=1;
    }
    if (KeyLeftJustDown){
        compteur -=1;
    }

    if (compteur == 1){
        t1.setAlpha(1)
        t2.setAlpha(0)
        t3.setAlpha(0)
        t4.setAlpha(0)
        t5.setAlpha(0)
        player.setAlpha(1);
        checkpoint.setAlpha(0);
        cristal.setAlpha(0);
        buisson.setAlpha(0);
        flecheG.setAlpha(0);
        flecheD.setAlpha(1);
        player.anims.play('rightLance', true)   

    }  
        
    else if (compteur == 2){
        t1.setAlpha(0)
        t2.setAlpha(1)
        t3.setAlpha(0)
        t4.setAlpha(0)
        t5.setAlpha(0)
        player.setAlpha(1);
        cristal.setAlpha(0);
        buisson.setAlpha(0);
        checkpoint.setAlpha(0);
        flecheG.setAlpha(1);
        flecheD.setAlpha(1);
        player.anims.play('jumpLance', true)   

    }
    else if (compteur == 3){
        t1.setAlpha(0)
        t2.setAlpha(0)
        t3.setAlpha(1)
        t4.setAlpha(0)
        t5.setAlpha(0)
        player.setAlpha(1);
        cristal.setAlpha(0);
        buisson.setAlpha(0);
        checkpoint.setAlpha(0);
        flecheG.setAlpha(1);
        flecheD.setAlpha(1);
        player.anims.play('lancer', true)   

    }
    else if (compteur == 4){
        t1.setAlpha(0)
        t2.setAlpha(0)
        t3.setAlpha(0)
        t4.setAlpha(1)
        t5.setAlpha(0)
        player.setAlpha(0);
        cristal.setAlpha(0);
        buisson.setAlpha(0);
        checkpoint.setAlpha(1);
        flecheG.setAlpha(1);
        flecheD.setAlpha(1);
        checkpoint.anims.play('checkpointActif', true);

    }
    else if (compteur == 5){
        t1.setAlpha(0)
        t2.setAlpha(0)
        t3.setAlpha(0)
        t4.setAlpha(0)
        t5.setAlpha(1)
        player.setAlpha(0);
        checkpoint.setAlpha(0);
        cristal.setAlpha(1);
        buisson.setAlpha(1);
        flecheG.setAlpha(1);
        flecheD.setAlpha(0);

    }
    if (compteur < 1){
        compteur = 1;
    }
        else if (compteur > 5){
            compteur = 5;
        }
}
}