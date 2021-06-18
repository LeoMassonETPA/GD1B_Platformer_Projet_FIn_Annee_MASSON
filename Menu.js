

var player;
var keys;

var texte1;
var texte2;
var texte3;

var sol;

var porte1;
var porte2;
var porte3;
var porteOuverte1;
var porteOuverte2;
var porteOuverte3;

canjump = true;


class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }
    init(data){
    }
    preload(){
        
        this.load.image('boutonEchap','assets/BoutonEchap.png');

        this.load.image('menu','assets/Menu.png');
        this.load.image('sol','assets/sol.png');
        
        this.load.spritesheet('dudeCourseLance','assets/SSCL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeJumpLanceDebut','assets/SSSDL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeTurnLance','assets/SSStL.png',{ frameWidth: 262, frameHeight: 250 });
        
        this.load.image('texte1','assets/SSTexte1.png');
        this.load.image('texte2','assets/SSTexte2.png');
        this.load.image('texte3','assets/SSTexte3.png');

        this.load.image('porte','assets/Porte.png');
        this.load.image('porteOuverte','assets/PorteOuverte.png');
        
    }
    
    create(){
        
        this.cameras.main.setBounds(0, 0, 1920, 1080);
        

        this.physics.world.setBounds(0, 0, 1920, 1080);
        
        this.add.image(0, 0, 'menu').setOrigin(0);        
        
        sol = this.physics.add.staticGroup();
        
       
        
        sol.create (960, 1000, 'sol');
        
        porte1 = this.add.image(400, 750, 'porte').setScale(0.5).setAlpha(1);
        porte2 = this.add.image(950, 750, 'porte').setScale(0.5).setAlpha(1);
        porte3 = this.add.image(1500, 750, 'porte').setScale(0.5).setAlpha(1);
        
        porteOuverte1 = this.add.image(400, 750, 'porteOuverte').setScale(0.5).setAlpha(0);
        porteOuverte2 = this.add.image(950, 750, 'porteOuverte').setScale(0.5).setAlpha(0);
        porteOuverte3 = this.add.image(1500, 750, 'porteOuverte').setScale(0.5).setAlpha(0);
        
        player = this.physics.add.sprite(100, 709, 'dude').setSize(85,240).setOffset(85,0);
        
        
        
        this.cameras.main.startFollow(player, true);
        

        
        player.setCollideWorldBounds(true);
     
        this.physics.add.collider(player, sol);
        
        texte1 = this.add.image(400, 350, 'texte1').setAlpha(0).setScale(0.7);
        texte2 = this.add.image(950, 350, 'texte2').setAlpha(0).setScale(0.7);
        texte3 = this.add.image(1500, 350, 'texte3').setAlpha(0).setScale(0.7);
        
    
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
      
    if (player.x > 150 && player.x < 650){
        porte1.setAlpha(0);
        porteOuverte1.setAlpha(1);
        texte1.setAlpha(1);
        if (keys.a.isDown){
            this.scene.start("Niveau1");
        }
    }
    else {
        porte1.setAlpha(1);
        porteOuverte1.setAlpha(0);
        texte1.setAlpha(0);

    }
        
    if (player.x > 700 && player.x < 1200){
        porte2.setAlpha(0);
        porteOuverte2.setAlpha(1);
        texte2.setAlpha(1);
        if (keys.a.isDown){
            this.scene.start("Controles");
        }

    }
    else {
        porte2.setAlpha(1);
        porteOuverte2.setAlpha(0);
        texte2.setAlpha(0);

    }
    if (player.x > 1250 && player.x < 1750){
        porte3.setAlpha(0);
        porteOuverte3.setAlpha(1);
        texte3.setAlpha(1);
        if (keys.a.isDown){
            this.scene.start("Musee");
        }

    }
    else {
        porte3.setAlpha(1);
        porteOuverte3.setAlpha(0);
        texte3.setAlpha(0);
    }
        
    }
}
