var player;
var keys;



var sol;

var pic;
var txtpic;

var buisson;
var txtbuisson;
    
var herissauteur;
var txtherissauteur;

var draculinette;
var txtdraculinette;

var arbremort;
var txtarbremort;

var protoperso;
var txtprotoperso;

var protoboss;
var txtprotoboss;

canjump = true;


class Musee extends Phaser.Scene{
    constructor(){
        super("Musee");
    }
    init(data){
    }
    preload(){
        
        
        this.load.image('backgroundC','assets/Controles.png');
        this.load.image('sol','assets/sol.png');
        
        this.load.image('supportMusee','assets/SupportMusee.png');
        
        this.load.image('CristalMusee','assets/MuseeCristal.png');
        this.load.image('BuissonMusee','assets/Buisson1.png');
        this.load.image('ArbreMortMusee','assets/AssetsArbre2.png');
        this.load.image('HerissauteurMusee','assets/HerissauteurMusee.png');
        this.load.image('DraculinetteMusee','assets/DraculinetteMusee.png');
        this.load.image('ProtoPerso','assets/ProtoPerso.png');
        this.load.image('ProtoBoss','assets/BossProto.png');
        
        this.load.image('texteCristal','assets/TexteCristal.png');
        this.load.image('texteBuisson','assets/TexteBuisson.png');
        this.load.image('texteHerissauteur','assets/TexteHerissauteur.png');
        this.load.image('texteDraculinette','assets/TexteDraculinette.png');
        this.load.image('texteProtoPerso','assets/TexteProtoPerso.png');
        this.load.image('texteProtoBoss','assets/TexteProtoBoss.png');
        this.load.image('texteArbreMort','assets/TexteArbreMort.png');
        
        
        this.load.image('sol','assets/sol.png');

        this.load.image('boutonEchap','assets/BoutonEchap.png');

        this.load.spritesheet('dudeCourseLance','assets/SSCL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeJumpLanceDebut','assets/SSSDL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeTurnLance','assets/SSStL.png',{ frameWidth: 262, frameHeight: 250 });


       
        
    }
    
    create(){
        
        this.cameras.main.setBounds(0, 0, 5760, 1080);
        

        this.physics.world.setBounds(0, 0, 5760, 1080);
        
        this.add.image(0, 0, 'backgroundC').setOrigin(0);        
        this.add.image(1920, 0, 'backgroundC').setOrigin(0).setFlipX(true);        
        this.add.image(3840, 0, 'backgroundC').setOrigin(0);        
        
        sol = this.physics.add.staticGroup();
        
        this.add.image(100, 100, 'boutonEchap').setScrollFactor(0);

        
        
        sol.create (960, 1000, 'sol');
        sol.create (2880, 1000, 'sol');
        sol.create (4800, 1000, 'sol');
        
        pic = this.add.image(850, 650, 'CristalMusee').setAlpha(0.2).setScale(0.8);
        txtpic = this.add.image(850, 300, 'texteCristal').setAlpha(0);
        this.add.image(850, 840, 'supportMusee');
        
        buisson = this.add.image(1550, 650, 'BuissonMusee').setAlpha(0.2);
        txtbuisson = this.add.image(1550, 300, 'texteBuisson').setAlpha(0);
        this.add.image(1550, 840, 'supportMusee');
        
        arbremort = this.add.image(2250, 650, 'ArbreMortMusee').setAlpha(0.2).setScale(0.3);
        txtarbremort = this.add.image(2250, 300, 'texteArbreMort').setAlpha(0);
        this.add.image(2250, 840, 'supportMusee');
        
        herissauteur = this.add.image(2950, 650, 'HerissauteurMusee').setAlpha(0.2);
        txtherissauteur = this.add.image(2950, 300, 'texteHerissauteur').setAlpha(0);
        this.add.image(2950, 840, 'supportMusee');
        
        draculinette = this.add.image(3650, 600, 'DraculinetteMusee').setAlpha(0.2).setScale(0.9);
        txtdraculinette = this.add.image(3650, 300, 'texteDraculinette').setAlpha(0);
        this.add.image(3650, 840, 'supportMusee');
        
        protoperso = this.add.image(4350, 650, 'ProtoPerso').setAlpha(0.2);
        txtprotoperso = this.add.image(4350, 300, 'texteProtoPerso').setAlpha(0);
        this.add.image(4350, 840, 'supportMusee');
        
        protoboss = this.add.image(5050, 590, 'ProtoBoss').setAlpha(0.2).setScale(0.5);
        txtprotoboss = this.add.image(5050, 200, 'texteProtoBoss').setAlpha(0);
        this.add.image(5050, 840, 'supportMusee');
        
        player = this.physics.add.sprite(100, 709, 'dude').setSize(85,240).setOffset(85,0);
        
        
        
        this.cameras.main.startFollow(player, true);
        

        
        player.setCollideWorldBounds(true);
     
        this.physics.add.collider(player, sol);
        
       
    
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
        
    if (player.body.touching.down){
        canjump = true;
    }
    else if (!player.body.touching.down){
        canjump = false;
    }    
        
    if (keys.up.isDown && canjump == true || keys.z.isDown && canjump == true){
                player.setVelocityY(-750);
                player.setVelocityX(0);
                player.anims.play('jumpLance', true);
			
            if (keys.right.isDown || keys.d.isDown){
                direction = 'right'; 
                player.flipX = false;
                player.setVelocityX(500);
          
            }
            else if (keys.left.isDown || keys.q.isDown){
                direction = 'left'; 
                player.flipX = true;
                player.setVelocityX(-500);
      
            }
           
         
        }
		
		// Déplacements Droite & Gauche & animations //
        else if (keys.right.isDown || keys.d.isDown){
           
            direction = 'right'; 
            player.flipX = false;
            if (!canjump){
                player.anims.play('jumpLance', true);
                player.setVelocityX(500);
            }
            else if (canjump){
                player.anims.play('rightLance', true);
                player.setVelocityX(500); 
            }
        }
            
        else if (keys.left.isDown || keys.q.isDown){
            direction = 'left'; 
            player.flipX = true;
            if (!canjump){
            player.anims.play('jumpLance', true);
            player.setVelocityX(-500);
            }
            else if (canjump){
            player.anims.play('rightLance', true);
            player.setVelocityX(-500);
            }
        }
       
       
        
      	// Reset de la vitesse losrqu'aucune touche de déplacement n'est enfoncé //
        else if (keys.right.isUp && keys.left.isUp && keys.up.isUp && keys.down.isUp){
            player.setVelocityX(0);
			
        	if (canjump){
                player.anims.play('turnLance', true);
            }
           	if (!canjump){
                player.anims.play('jumpLance', true);

           } 
        }
      
    if (player.x > 687 && player.x < 1012){
        pic.setAlpha(1);
        txtpic.setAlpha(1);
    }
    else {
        pic.setAlpha(0.2)
        txtpic.setAlpha(0);

    }    
        
    if (player.x > 1391 && player.x < 1700){
        buisson.setAlpha(1);
        txtbuisson.setAlpha(1);
    }
    else {
        buisson.setAlpha(0.2)
        txtbuisson.setAlpha(0);

    }
        
    if (player.x > 2083 && player.x < 2400){
        arbremort.setAlpha(1);
        txtarbremort.setAlpha(1);
    }
    else {
        arbremort.setAlpha(0.2)
        txtarbremort.setAlpha(0);
    }
    if (player.x > 2783 && player.x < 3091){
        herissauteur.setAlpha(1);
        txtherissauteur.setAlpha(1);
    }
    else {
        herissauteur.setAlpha(0.2)
        txtherissauteur.setAlpha(0);
    }
    if (player.x > 3491 && player.x < 3808){
        draculinette.setAlpha(1);
        txtdraculinette.setAlpha(1);
    }
    else {
        draculinette.setAlpha(0.2)
        txtdraculinette.setAlpha(0);
    }
    if (player.x > 4191 && player.x < 4516){
        protoperso.setAlpha(1);
        txtprotoperso.setAlpha(1);
    }
    else {
        protoperso.setAlpha(0.2)
        txtprotoperso.setAlpha(0);
    }
    if (player.x > 4900 && player.x < 5208){
        protoboss.setAlpha(1);
        txtprotoboss.setAlpha(1);
    }
    else {
        protoboss.setAlpha(0.2)
        txtprotoboss.setAlpha(0);
    }
    }
}
