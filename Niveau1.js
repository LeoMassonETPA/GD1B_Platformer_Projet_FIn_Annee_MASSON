// Variables //

var player;
var pdv1;
var pdv2;
var pdv3;
var pdv = 3;

var keys;

var invincible = false;
var compteurInvincible = 150;
var compteurFrames = 150;


var gameOver = false;
var flecheActive = false;
var canShot = false;
var cordeTranchee = false;
var peutGrimper = false;
var stopTombe = false;
var cibleTouchee = false;
var canDash = true;
var canjump;
var isJumping = false;
var canMove = false;

var isDead = false;
var dead1 = false;
var dead2 = false;

var compteurCourant = 500;
var startDelai = false;

var compteurCam1 = 250;
var etatCam1 = false;
var compteurCam2 = 250;
var etatCam2 = false;
var compteurCam3 = 250;
var etatCam3 = false;

var levier1Actif = false;
var levier2Actif = false;
var levier3Actif = false;


var ennemi1Mort = false;
var ennemi2Mort = false;

var cam;
var phys;

var dejaPasse = false;

var cible;
var obstacleM1;
var obstacleM2;

var cam1= false;
var cam2= false;
var cam3= false;

var pan1 = false;
var pan2 = false;
var pan3 = false;

var support1;
var support2;
var support3;

var zoneLevier1;
var zoneLevier2;
var zoneLevier3;

var zoneCheckpoint1;
var zoneCheckpoint2;
var zoneCheckpoint3;

var zoneEnnemi1;

var courant1;
var courant2;
var courant3;
var courant4;
var courant5;
var courant6;


var sol;
var plateforme;
var plateformekill;
var bloc;
var blocTombe;
var blocMouvant;
var conduit;
var checkpoint1;
var checkpoint2;
var checkpoint3;
var corde;
var buissonMortel;
var checkpoint1B = false;
var checkpoint2B = false;
var checkpoint3B = false;

var BruitPas;

var levier1Off;
var levier1On;
var levier2On;
var levier2Off;
var levier3On;
var levier3Off;

var particule;
var emmeteur;

var particuleFlamme;
var emmeteurFlamme1;
var emmeteurFlamme2;
var emmeteurFlamme3;

var zoneTexte1;
var zoneTexte2;
var zoneTexte3;
var zoneTexte4;
var zoneTexte5;

var porte;
var porteOuverte;

var tirJoueur;
var newTirJoueur;
var direction;


var posXplayer = 700; // (debut : 700, 4053)
var posYplayer = 4053;


var ennemi1;
var ennemi2;

class Niveau1 extends Phaser.Scene{
    constructor(){
        super("Niveau1");
    }
    init(data){
    }
    preload(){
        
        this.load.audio('BruitPas', 'assets/BruitPas.wav');
        this.load.audio('Ambiance', 'assets/Ambiance.wav');
        
        this.load.image('background','assets/background.png');
        this.load.image('background2','assets/Background2.png');
        this.load.image('montagne','assets/Montagnes.png');
        this.load.image('montagne2','assets/Montagnes2.png');
		
		
        this.load.image('sol','assets/sol.png');
        this.load.image('solsombre','assets/SolSombre.png');
        this.load.image('solsombreH','assets/SolSombreH.png');
        this.load.image('solsombreHSB','assets/SolSombreHSB.png');
        
        this.load.image('plateformekill','assets/PlateformeKill.png');
        this.load.image('plateformekillG','assets/PlateformeKillG.png');
        this.load.image('plateformekillD','assets/PlateformeKillD.png');
        this.load.image('plateformekillH','assets/PlateformeKillH.png');
        
        this.load.image('levierOff','assets/LevierOff.png');
        this.load.image('levierOn','assets/LevierOn.png');
        
        this.load.image('porte','assets/Porte.png');
        this.load.image('porteOuverte','assets/PorteOuverte.png');
        this.load.image('support','assets/SupportFlamme.png');
        
        this.load.image('cristal1','assets/Cristal1.png');
        this.load.image('cristal2','assets/Cristal2.png');
        this.load.image('cristal3','assets/Cristal3.png');
		
        
        this.load.spritesheet('corde','assets/SSCorde.png',{ frameWidth: 20, frameHeight: 400 });
        this.load.spritesheet('checkpoint','assets/SSCheckpoint.png',{ frameWidth: 150, frameHeight: 300 });
        this.load.spritesheet('cibleAn','assets/cible.png',{ frameWidth: 92, frameHeight: 100 });
        this.load.spritesheet('courant1','assets/SSCourant1.png',{ frameWidth: 41, frameHeight: 908 });
        this.load.spritesheet('courant2','assets/SSCourant2.png',{ frameWidth: 908, frameHeight: 41 });
		
        this.load.spritesheet('conduit','assets/SSConduit.png',{ frameWidth: 1057, frameHeight: 59 });
        
        
        
        this.load.image('bloc1','assets/Bloc1.png');
        this.load.image('bloc2','assets/Bloc2.png');
        this.load.image('bloc3','assets/Bloc3.png');
        this.load.image('bloc4','assets/Bloc4.png');
        
        this.load.image('blocSombre1','assets/BlocSombre1.png');
        this.load.image('buisson','assets/Buisson1.png');
        
        this.load.image('pdv1','assets/PDV1.png');
        this.load.image('pdv2','assets/PDV2.png');
        this.load.image('pdv3','assets/PDV3.png');


        this.load.image('grosbloc1','assets/GrosBloc1.png');
        this.load.image('grosbloc2','assets/GrosBloc2.png');
        this.load.image('grosbloc3','assets/GrosBloc3.png');
        this.load.image('plateforme1','assets/plateforme1.png');
        this.load.image('plateforme2','assets/Plateforme2.png');
        this.load.image('plateformesombre1','assets/plateformeSombre1.png');
        this.load.image('plateformesombre2','assets/Plateforme2Sombre.png');
        this.load.image('plateformesombre1V','assets/plateformeSombre1Verticale.png');
        this.load.image('plateformesombre2V','assets/Plateforme2SombreV.png');
		
		
        this.load.image('fond1','assets/Fond1.png');
        this.load.image('tir','assets/tirLance.png');
        
        this.load.image('fumee','assets/ParticuleFumee.png');
        this.load.image('feu','assets/ParticuleFeu.png');
		
        this.load.image('blocM','assets/BlocMouvant.png');
        
        
        this.load.image('Ztexte1','assets/Texte1.png');
        this.load.image('Ztexte2','assets/Texte2.png');
        this.load.image('Ztexte3','assets/Texte3.png');
        this.load.image('Ztexte4','assets/Texte4.png');
        this.load.image('Ztexte5','assets/Texte5.png');
 
        this.load.spritesheet('dudeCourse','assets/SSC.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeCourseLance','assets/SSCL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeTurn','assets/SSSt.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeTurnLance','assets/SSStL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeDeath','assets/SSM.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeDeathLance','assets/SSML.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeJump','assets/SSS.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeJumpLance','assets/SSSL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeJumpDebut','assets/SSSD.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('dudeJumpLanceDebut','assets/SSSDL.png',{ frameWidth: 262, frameHeight: 250 });
        this.load.spritesheet('lancer','assets/SSL.png',{ frameWidth: 262, frameHeight: 250 });
        
        this.load.spritesheet('ennemi1Course','assets/SSEnnemi1_Course.png',{ frameWidth: 126, frameHeight: 139 });
        this.load.spritesheet('ennemi1Saut','assets/SSEnnemi1_Saut.png',{ frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('ennemi2','assets/SSEnnemi2.png',{ frameWidth: 481, frameHeight: 259 });

        
    }
    
    create(){
		
		// Groupes //
        sol = this.physics.add.staticGroup();
        bloc = this.physics.add.staticGroup();
        porte = this.physics.add.staticGroup();
        buissonMortel = this.physics.add.staticGroup();
        levier1Off = this.physics.add.staticGroup();
        levier1On = this.physics.add.staticGroup();
		levier2Off = this.physics.add.staticGroup();
        levier2On = this.physics.add.staticGroup();
		levier3Off = this.physics.add.staticGroup();
        levier3On = this.physics.add.staticGroup();
        plateformekill = this.physics.add.staticGroup();
        checkpoint1 = this.physics.add.staticGroup();
        checkpoint2 = this.physics.add.staticGroup();
        checkpoint3 = this.physics.add.staticGroup();
        
        porteOuverte = this.physics.add.staticGroup();
        
        cible = this.physics.add.staticGroup();
        ennemi1 = this.physics.add.group();
		blocTombe = this.physics.add.group({allowGravity:false, immovable:true});
		tirJoueur = this.physics.add.group({immovable:true});
		obstacleM1 = this.physics.add.group({immovable:true});
        obstacleM2 = this.physics.add.group({immovable:true});
        
		// Caméra //
        this.cameras.main.setBounds(0, 0, 11520, 4320);
        this.physics.world.setBounds(0, 0, 11520, 4320);
        
        
        // Musique et effets sonores //
        this.BruitPas = this.sound.add('BruitPas');
		this.Ambiance = this.sound.add('Ambiance')

        var musicConfig = {
            mute : false,
            volume : 1,
            rate : 1,
            deturne : 0,
            seek : 0,
            loop : false,
            delay : 0,

        }
        this.Ambiance.play(musicConfig)
        
        
        // Arrière plan et parralaxe //
        this.add.image(0, 0, 'background').setOrigin(0);        
        this.add.image(-1500, -800, 'montagne').setOrigin(0).setScrollFactor(0.3);        
        this.add.image(-2000, 1650, 'montagne2').setOrigin(0).setScrollFactor(0.5);        
        this.add.image(2480, 2800, 'fond1').setScrollFactor(0.7);        
        this.add.image(1920, 0, 'background2').setOrigin(0);        

        
		conduit = this.physics.add.sprite (7150,150, 'conduit');
        conduit.body.setAllowGravity(false);
        conduit.body.setImmovable(true);
        
        cam = this.cameras.main;
        phys = this.physics
        // cam.zoom= 0.4;
     

       
        // Sol de la map //
        sol.create (960, 4245, 'sol');
        sol.create (2880, 4245, 'sol');
        sol.create (4800, 4245, 'sol');
        sol.create (6720, 4245, 'sol');
        sol.create (8640, 4245, 'sol');
        sol.create (10560, 4245, 'sol');
		
		// Gros blocs //
		bloc.create(4800,2145, 'grosbloc1');
        bloc.create(8640,540, 'grosbloc2');
        bloc.create(9600,2700, 'grosbloc3');
		
        // Tableau 1.1 & 1.2//
        bloc.create(1935,3995, 'bloc1');
		bloc.create(3200,3750, 'plateforme1');
        bloc.create(4000,3818, 'bloc2');
        bloc.create(3700,3178, 'plateformesombre1');

		// Tableau 1.3 & 1.4//
        bloc.create(5508,3995, 'bloc1');
        bloc.create(6720,3924, 'bloc4');
		
		bloc.create(6200,3618, 'plateformesombre1');
        bloc.create(5834,3300, 'plateformesombre1V');
        bloc.create(6200,3000, 'plateformesombre1');
		
        porte = this.add.image(6746,3305, 'porte').setAlpha(1);
		porteOuverte = this.add.image(6746,3305, 'porteOuverte').setAlpha(0);
            
		support1 = this.add.image(7300, 3500, 'support').setScale(2);
        support2 =this.add.image(7300, 3200, 'support').setScale(2);
        support3 =this.add.image(6200, 3350, 'support').setScale(2);
		
		
              
        
        // Tableau 1.5 & 1.6 //
        bloc.create(8500,3800, 'plateforme2');
        bloc.create(9000,3600, 'plateforme1');
		
		buissonMortel = buissonMortel.create(10000, 4045, 'buisson');
        		
        corde = this.physics.add.sprite(10000, 3448, 'corde');
        corde.body.setAllowGravity(false);
        
        blocTombe = blocTombe.create(10000, 3600, 'blocSombre1');
		
		plateformekill.create (10650, 4100, 'plateformekill').setSize(290, 120).setOffset(0, 30);
        plateformekill.create (11300, 4100, 'plateformekill').setSize(290, 120).setOffset(0, 30);
		
		// Tableau 2.4 & 3.4 //
		
		plateformekill.create (7610, 2750, 'plateformekillD');

        bloc.create(6746,2700, 'blocSombre1');      
        bloc.create(6746,1820, 'blocSombre1');
        
        bloc.create(6376,1931, 'plateformesombre1');
        bloc.create(6200,2420, 'plateformesombre1');
        bloc.create(6550,1210, 'plateformesombre1'); 
        bloc.create(7330,2420, 'plateformesombre1');
		
		// Tableau 3.5 & 3.6 //
		
        bloc.create(9960,1880, 'plateformesombre1');
        bloc.create(10750,1880, 'plateformesombre1');
		bloc.create(11200,1650, 'plateformesombre1V');
		
		bloc.create(10500,1220  , 'blocSombre1');
		
		plateformekill.create (9800, 2080, 'plateformekill').setSize(290, 120).setOffset(0, 30);
        plateformekill.create (10100, 2080, 'plateformekill').setSize(290, 120).setOffset(0, 30);
        plateformekill.create (10400, 2080, 'plateformekill').setSize(290, 120).setOffset(0, 30);
        plateformekill.create (10700, 2080, 'plateformekill').setSize(290, 120).setOffset(0, 30);
        plateformekill.create (11000, 2080, 'plateformekill').setSize(290, 120).setOffset(0, 30);
        plateformekill.create (11300, 2080, 'plateformekill').setSize(290, 120).setOffset(0, 30);
		
        plateformekill.create (11450, 1780, 'plateformekillD');
        plateformekill.create (11450, 1480, 'plateformekillD');
        plateformekill.create (11450, 1180, 'plateformekillD');
        
		// Tableau 4.6 //
		bloc.create(10120,1109  , 'plateformesombre1');
        bloc.create(10420,310, 'plateformesombre1');
		bloc.create(11385,280, 'plateformesombre1');

        bloc.create(11000,520  , 'blocSombre1');
        
        bloc.create(9738,690, 'plateformesombre1V');
		
		plateformekill.create (11450, 880, 'plateformekillD');
        plateformekill.create (10280, 600, 'plateformekillH').setSize(290, 120).setOffset(0, -30);
        plateformekill.create (10280, 450, 'plateformekill').setSize(290, 120).setOffset(0, 30);
		
		// Tableau 4.2 & 4.3 //
		courant1 = this.physics.add.sprite(2075, 625, 'courant1');
		courant1.body.setAllowGravity(false);
        courant1.body.setImmovable(true);
        
        courant2 = this.physics.add.sprite(2550, 150, 'courant2');
		courant2.body.setAllowGravity(false);
        courant2.body.setImmovable(true);
        
        courant3 = this.physics.add.sprite(3458, 150, 'courant2');
		courant3.body.setAllowGravity(false);
        courant3.body.setImmovable(true);
        
        courant4 = this.physics.add.sprite(4366, 150, 'courant2');
		courant4.body.setAllowGravity(false);
        courant4.body.setImmovable(true);
        
        courant5 = this.physics.add.sprite(5274, 150, 'courant2');
		courant5.body.setAllowGravity(false);
        courant5.body.setImmovable(true);
		
        courant6 = this.physics.add.sprite(6182, 150, 'courant2');
		courant6.body.setAllowGravity(false);
        courant6.body.setImmovable(true);
        
		cible = this.physics.add.sprite (2082, 840, 'cibleAn');
        cible.body.setAllowGravity(false);
        cible.body.setImmovable(true);

		
		bloc.create(2200,498, 'plateforme2');
		bloc.create(2712,498, 'plateforme2');
        
		bloc.create(5300,498, 'plateformesombre2');
		bloc.create(5812,498, 'plateformesombre2');

		
		bloc.create(4600,600, 'plateformesombre1');
		
		
		bloc.create(2095,1020, 'plateformesombre1V');
		bloc.create(2884,975, 'plateformesombre1V');
		bloc.create(2884,690, 'plateformesombre1V');
		
		bloc.create(1975,548, 'plateformesombre2V');

		
		sol.create(2872, 1124, 'solsombre');
		bloc.create(3900,880, 'blocSombre1');

		
		// Tableau 4.4 //
        bloc.create(6324,498, 'plateformesombre2');
		bloc.create(6836,498, 'plateformesombre2');
		bloc.create(6836,498, 'plateformesombre2');
        
		bloc.create(7540,810, 'plateformesombre1');
        
		blocMouvant = this.physics.add.sprite (7030,280, 'blocM');
        blocMouvant.body.setAllowGravity(false);
        blocMouvant.body.setImmovable(true);

        
		
		// Plafond //
		sol.create(2872, 50	, 'solsombreH');
		sol.create(4792, 50	, 'solsombreHSB');
		sol.create(6712, 50	, 'solsombreHSB');
		
		
		
    	// Checkpoints // 
		
        checkpoint1 = this.physics.add.sprite(7800, 4018, 'checkpoint');
        
        checkpoint2 = this.physics.add.sprite(7856, 2004, 'checkpoint');
		
		checkpoint3 = this.physics.add.sprite(5403, 897, 'checkpoint');
		
        zoneCheckpoint1 = this.add.zone(7800, 4018).setSize(150, 300);
        this.physics.world.enable(zoneCheckpoint1);
        zoneCheckpoint1.body.setAllowGravity(false);
        zoneCheckpoint1.body.moves = false;
        
        zoneCheckpoint2 = this.add.zone(7856, 2004).setSize(150, 300);
        this.physics.world.enable(zoneCheckpoint2);
        zoneCheckpoint2.body.setAllowGravity(false);
        zoneCheckpoint2.body.moves = false;
		
		zoneCheckpoint3 = this.add.zone(5403, 897).setSize(150, 300);
        this.physics.world.enable(zoneCheckpoint3);
        zoneCheckpoint3.body.setAllowGravity(false);
        zoneCheckpoint3.body.moves = false;
        
        
        
      
		
		
        // Leviers // 
		
		levier1Off = this.add.image(11000, 4150, 'levierOff').setAlpha(1);
        levier1On = this.add.image(11000, 4150, 'levierOn').setAlpha(0);
		
        levier2Off = this.add.image(11432, 195, 'levierOff').setAlpha(1);
        levier2On = this.add.image(11432, 195, 'levierOn').setAlpha(0);
		
 		levier3Off = this.add.image(7582, 730, 'levierOff').setAlpha(1);
        levier3On = this.add.image(7582, 730, 'levierOn').setAlpha(0);
		
        zoneLevier1 = this.add.zone(11000, 4150).setSize(50, 50);
        this.physics.world.enable(zoneLevier1);
        zoneLevier1.body.setAllowGravity(false);
        zoneLevier1.body.moves = false;
        
        zoneLevier2 = this.add.zone(11432, 195).setSize(50, 50);
        this.physics.world.enable(zoneLevier2);
        zoneLevier2.body.setAllowGravity(false);
        zoneLevier2.body.moves = false;
        
		zoneLevier3 = this.add.zone(7582, 730).setSize(50, 50);
        this.physics.world.enable(zoneLevier3);
        zoneLevier3.body.setAllowGravity(false);
        zoneLevier3.body.moves = false;
		
		
        // Zones de texte //
        
        zoneTexte1 = this.add.image(1300, 3800, 'Ztexte1').setAlpha(0);
        zoneTexte2 = this.add.image(2500, 3800, 'Ztexte2').setAlpha(0);
        zoneTexte3 = this.add.image(3200, 3300, 'Ztexte3').setAlpha(0);
        zoneTexte5 = this.add.image(6746, 3305, 'Ztexte5').setAlpha(0);
       
		
		// Tweens //
		obstacleM1 = this.physics.add.image(2650 , 655, 'plateformesombre1V').setScale(0.5);
        obstacleM1.setCollideWorldBounds(true);
        obstacleM1.body.setImmovable(true); 
        obstacleM1.body.setAllowGravity(false); 
        
        obstacleM2 = this.physics.add.image(2400 , 955, 'plateformesombre1V').setScale(0.5);
        obstacleM2.setCollideWorldBounds(true);
        obstacleM2.body.setImmovable(true); 
        obstacleM2.body.setAllowGravity(false);
		
		this.tweens.add({
            targets: obstacleM1,
                props: {
                y: { value: 955, duration: 2100 },
            },
            yoyo: true,
                repeat: -1
        });
        
         this.tweens.add({
            targets: obstacleM2,
                props: {
                y: { value: 655, duration: 2100 },
            },
            yoyo: true,
                repeat: -1
        });
		
        // Particules & emmeteurs //
        particule = this.add.particles('fumee');
        particuleFlamme = this.add.particles('feu');

    
        emmeteur = particule.createEmitter({
        x:0,
        y:0,
        angle: { min: 180, max: 360 },
        speed: { min: 100, max: 150 },
        gravityY: 400,
        frequency:5,
        accelerationX: 200,
        lifespan: 500,
        quantity:50,
        scale: {start : 0.5, end : 0.1},
        });
        

        emmeteurFlamme1 = particuleFlamme.createEmitter({
        x:0,
        y:0,
        angle: { min: 180, max: 360 },
        speed: { min: 100, max: 150 },
        gravityY: -400,
        frequency:5,
       
        lifespan: 200,
        quantity:50,
        scale: {start : 0.5, end : 0.1},
        });
        
        emmeteurFlamme2 = particuleFlamme.createEmitter({
        x:0,
        y:0,
        angle: { min: 180, max: 360 },
        speed: { min: 100, max: 150 },
        gravityY: -400,
        frequency:5,
 
        lifespan: 200,
        quantity:50,
        scale: {start : 0.5, end : 0.1},
        });
        
		emmeteurFlamme3 = particuleFlamme.createEmitter({
        x:0,
        y:0,
        angle: { min: 180, max: 360 },
        speed: { min: 100, max: 150 },
        gravityY: -400,
        frequency:5,
       
        lifespan: 200,
        quantity:50,
        scale: {start : 0.5, end : 0.1},
        });
        
        // Joueur // 
        player = this.physics.add.sprite(posXplayer, posYplayer, 'dude').setSize(80,210).setOffset(95, 30);
        
        this.cameras.main.startFollow(player, true);
        player.setCollideWorldBounds(true);
        
	    // Ennemis //
        ennemi2 = this.physics.add.sprite (8770,1800, 'ennemi2').setSize(200,200);
        ennemi2.body.setAllowGravity(false);
        ennemi2.body.setImmovable(true);
        
        ennemi1 = this.physics.add.sprite (4300,800, 'ennemi1Course').setSize(100,100);

        
		// Colliders & Overlaps joueur //
        this.physics.add.collider(player, sol);
        this.physics.add.collider(player, plateforme);
        this.physics.add.collider(player, bloc);
		this.physics.add.collider(player, blocTombe);
		
        this.physics.add.overlap(player, buissonMortel, KillInstant, null, this);
		
		this.physics.add.collider(player, zoneLevier1, ActiveLevier1, null, this);
        this.physics.add.collider(player, zoneLevier2, ActiveLevier2, null, this);
        this.physics.add.collider(player, zoneLevier3, ActiveLevier3, null, this);

        this.physics.add.collider(player, tirJoueur);
		
        this.physics.add.collider(player, blocMouvant);
		
		this.physics.add.collider(player, zoneCheckpoint1, ActiveCheckpoint1, null, this);
        this.physics.add.collider(player, zoneCheckpoint2, ActiveCheckpoint2, null, this);
        this.physics.add.collider(player, zoneCheckpoint3, ActiveCheckpoint3, null, this);
        
        this.physics.add.overlap(player, ennemi1, HitEnnemi, null, this);
        this.physics.add.overlap(player, ennemi2, HitEnnemi, null, this);
        

		
		this.physics.add.overlap(player, plateformekill, KillInstant, null, this);
        

		// Colliders Sol //
        this.physics.add.collider(sol, checkpoint1);
        this.physics.add.collider(bloc, checkpoint1);
        this.physics.add.collider(sol, checkpoint2);
        this.physics.add.collider(bloc, checkpoint2);
		this.physics.add.collider(sol, checkpoint3);
        this.physics.add.collider(bloc, checkpoint3);
		
        this.physics.add.collider(sol, blocTombe, StopTombe, null, this);
		
        this.physics.add.collider(sol, cible);
        this.physics.add.collider(bloc, cible);
        
		// Colliders spéciaux //
        this.physics.add.overlap(corde, tirJoueur, destroyCorde, null, this);
		
        this.physics.add.overlap(blocTombe, buissonMortel, DestroyBuisson, null, this);
		
		// Colliders Lance //
        this.physics.add.collider(tirJoueur, blocTombe, CollideTirBloc, null, this);
        this.physics.add.collider(tirJoueur, bloc, CollideTirBloc, null, this);
        this.physics.add.collider(tirJoueur, cible, CollideTirCible, null, this);
		this.physics.add.collider(tirJoueur, obstacleM1, CollideObstacle, null, this);
        this.physics.add.collider(tirJoueur, obstacleM2, CollideObstacle, null, this);
        this.physics.add.collider(tirJoueur, ennemi2, CollideTirEnnemi2, null, this);
        this.physics.add.collider(tirJoueur, ennemi1, CollideTirEnnemi1, null, this);
        this.physics.add.collider(tirJoueur, blocMouvant, CollideTirBloc, null, this);
        
        // Collider Ennemi1 //
        this.physics.add.collider(ennemi1, bloc);

        
        // Affichage des pvs //
        pdv1 = this.add.sprite(150, 150, 'pdv1').setScrollFactor(0).setAlpha(0).setScale(0.5);        
        pdv2 = this.add.sprite(150, 150, 'pdv2').setScrollFactor(0).setAlpha(0).setScale(0.5);        
        pdv3 = this.add.sprite(150, 150, 'pdv3').setScrollFactor(0).setAlpha(0).setScale(0.5);
    
		
		
        
        
        
		// Animations //
		this.anims.create({
        key: 'course',
        frames: this.anims.generateFrameNumbers('ennemi1Course', { start: 0, end: 12 }),
        frameRate: 20,
        repeat: -1
        });
        
        this.anims.create({
        key: 'saut',
        frames: this.anims.generateFrameNumbers('ennemi1Saut', { start: 0, end: 4 }),
        frameRate: 20,
        repeat: -1
        });
			
		this.anims.create({
        key: 'vol',
        frames: this.anims.generateFrameNumbers('ennemi2', { start: 0, end: 10 }),
        frameRate: 20,
        repeat: -1
        });	
		
		this.anims.create({
        key: 'conduitrouge',
        frames: this.anims.generateFrameNumbers('conduit', { start: 0, end: 7 }),
        frameRate: 8,
        repeat: -1
        });	

		this.anims.create({
        key: 'conduitvert',
        frames: this.anims.generateFrameNumbers('conduit', { start: 8, end: 12 }),
        frameRate: 4,
        repeat: -1
        });	
		
		this.anims.create({
        key: 'courant1Eteint',
        frames: [{key : 'courant1', frame : 0}],
        frameRate: 10,
        repeat: 0
        });
		
		this.anims.create({
        key: 'courant1Allume',
        frames: this.anims.generateFrameNumbers('courant1', { start: 1, end: 22 }),
        frameRate: 8,
        repeat: 0
        });
        
        this.anims.create({
        key: 'courant2Eteint',
        frames: [{key : 'courant2', frame : 0}],
        frameRate: 10,
        repeat: 0
        });
		
		this.anims.create({
        key: 'courant2Allume',
        frames: this.anims.generateFrameNumbers('courant2', { start: 1, end: 22 }),
        frameRate: 8,
        repeat: 0
        });
		
        this.anims.create({
        key: 'checkpointActif',
        frames: this.anims.generateFrameNumbers('checkpoint', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
        }); 
        
        this.anims.create({
        key: 'checkpoint',
        frames: [{key : 'checkpoint', frame : 0} ],
        frameRate: 10,
  
        });
		
    	this.anims.create({
        key: 'cibleA',
        frames: this.anims.generateFrameNumbers('cibleAn', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
        });
		
        this.anims.create({
        key: 'corde',
        frames: this.anims.generateFrameNumbers('corde', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
        }); 
        
        this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers('dudeTurn', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
        }); 
        
        this.anims.create({
        key: 'turnLance',
        frames: this.anims.generateFrameNumbers('dudeTurnLance', { start: 0, end: 4 }),
        frameRate: 7,
        repeat: -1
        });

        this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dudeCourse', { start: 0, end: 24 }),
        frameRate: 60,
        repeat: -1
        });
        
        this.anims.create({
        key: 'rightLance',
        frames: this.anims.generateFrameNumbers('dudeCourseLance', { start: 0, end: 24 }),
        frameRate: 60,
        repeat: -1
        });
        
        this.anims.create({
        key: 'jump',
        frames: this.anims.generateFrameNumbers('dudeJumpDebut', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
        });
        
        this.anims.create({
        key: 'jumpLance',
        frames: this.anims.generateFrameNumbers('dudeJumpLanceDebut', { start: 0, end: 4 }),
        frameRate: 20,
        repeat: -1
        });
        
        this.anims.create({
        key: 'death',
        frames: this.anims.generateFrameNumbers('dudeDeath', { start: 0, end: 14 }),
        frameRate: 20,
		repeat: 0,

        });
		
		this.anims.create({
        key: 'deathS',
        frames: [{key : 'dudeDeath', frame : 14} ],
        frameRate: 20,
		repeat: -1,

        });
        
        this.anims.create({
        key: 'deathLance',
        frames: this.anims.generateFrameNumbers('dudeDeathLance', { start: 0, end: 14 }),
        frameRate: 20,
     	repeat: 0,

        });
		
        this.anims.create({
        key: 'deathLanceS',
        frames: [{key : 'dudeDeathLance', frame : 14} ],
        frameRate: 20,
		repeat: -1,

        });
		
        this.anims.create({
        key: 'lancer',
        frames: this.anims.generateFrameNumbers('lancer', { start: 0, end: 10 }),
        frameRate: 15,
        repeat: 0
        });
  
        
        // Contrôles //
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
	
	// Comportement Zones de texte //
        
    if (player.x < 1375 && player.x > 1225){
        zoneTexte1.setAlpha(1);
    }
    else {
        zoneTexte1.setAlpha(0);

    }
        
    if (player.x < 2650 && player.x > 2330){
        zoneTexte2.setAlpha(1);
    }
    else {
        zoneTexte2.setAlpha(0);

    } 
        
    if (player.x < 3322 && player.x > 3072 && player.y < 3600){
        zoneTexte3.setAlpha(1);
    }
    else {
        zoneTexte3.setAlpha(0);

    } 
        
        
	if (levier1Actif && levier2Actif && levier3Actif){
        porte.setAlpha(0);
        porteOuverte.setAlpha(1);
        if (player.x > 6486 && player.x < 7061 && player.y > 3000 && player.y < 3700){
        zoneTexte5.setAlpha(1);
        }
        if (keys.a.isDown && player.x > 6486 && player.x < 7061 && player.y > 3000 && player.y < 3700){
            this.scene.start("Scene1");
        }
    }	
        
    // Comportement ennemis //
    //ChauveSouris//
    if (player.x > 7995 && player.x < 9554 && player.y > 1100 && player.y < 2500 && !ennemi2Mort){
            this.physics.moveTo(ennemi2, player.x, player.y, 300)
    }
    else {
            if (!ennemi2Mort){
            this.physics.moveTo(ennemi2, 8770, 1800, 300)
            }
    }
        
        
    // Hérisson/
    if (!ennemi1Mort){
        if (ennemi1.x > 5200 && ennemi1.x < 5400){
            ennemi1.anims.play('course', true);
            ennemi1.flipX = true;
            ennemi1.setVelocityX(-400);
        }
        if (ennemi1.x > 4200 && ennemi1.x < 4400){
            ennemi1.anims.play('course', true);
            ennemi1.flipX = false;
            ennemi1.setVelocityX(400);
        }
        if (ennemi1.body.touching.down){
           ennemi1.setVelocityY(-700); 
        }
    }
  
    
    
    // Comportement caméra lors d'une activation de levier //
	if (etatCam1 && compteurCam1 >=0){
        this.physics.pause();
        compteurCam1 --;
        if (compteurCam1 < 250){
            cam.pan(support1.x, support1.y, 4000);
        }
        if (compteurCam1 <= 0){
            cam.pan(zoneLevier1.x, zoneLevier1.y, 2000)
        }
        setTimeout(function (){phys.resume()}, 8300);

    }
 
    if (etatCam2 && compteurCam2 >=0){
        this.physics.pause();
        compteurCam2 --;
        if (compteurCam2 < 250){
            cam.pan(support2.x, support2.y, 4000);
        }
        if (compteurCam2 <= 0){
            cam.pan(zoneLevier2.x, zoneLevier2.y, 2000)
        }
        setTimeout(function (){phys.resume()}, 8300);

    }
  
        
    if (etatCam3 && compteurCam3 >=0){
        this.physics.pause();
        compteurCam3 --;
        if (compteurCam3 < 250){
            cam.pan(support3.x, support3.y, 4000);
        }
        setTimeout(function (){phys.resume()}, 8300);

    }
   
    // Animations vraie par défaut //
        
    cible.anims.play('cibleA', true);    
    conduit.anims.play('conduitrouge', true);
        
    if (!ennemi2Mort){
        ennemi2.anims.play('vol', true);
    }
        
    
		
		
	// Comportement courant //
	if (cibleTouchee){
		startDelai = true;
	}
	if (startDelai == true && dejaPasse == false){
		canMove = true
        courant1.anims.play('courant1Allume', true);
        setTimeout(function (){courant1.anims.play('courant1Eteint', true)}, 2400);
        setTimeout(function (){courant2.anims.play('courant2Allume', true)}, 2400);
        setTimeout(function (){courant2.anims.play('courant2Eteint', true)}, 4800);
        setTimeout(function (){courant3.anims.play('courant2Allume', true)}, 4800);
        setTimeout(function (){courant3.anims.play('courant2Eteint', true)}, 7200);
		setTimeout(function (){courant4.anims.play('courant2Allume', true)}, 7200);
        setTimeout(function (){courant4.anims.play('courant2Eteint', true)}, 9600);
		setTimeout(function (){courant5.anims.play('courant2Allume', true)}, 9600);
        setTimeout(function (){courant5.anims.play('courant2Eteint', true)}, 12000);
		setTimeout(function (){courant6.anims.play('courant2Allume', true)}, 12000);
        setTimeout(function (){courant6.anims.play('courant2Eteint', true)}, 14400);
        setTimeout(function (){canMove= false}, 14400);
		dejaPasse =true;
        }
		
      
	if (canMove){
		conduit.anims.play('conduitvert', true);    
		if (blocMouvant.x < 7600){
			blocMouvant.setVelocityX(200);
		}
		else if (blocMouvant.x >= 7600){
			blocMouvant.setVelocityX(0);
		}
	}	
  	else if (!canMove){
		conduit.anims.play('conduitrouge', true);
	  	if (blocMouvant.x > 7030){
			blocMouvant.setVelocityX(-200);
		}
		else if (blocMouvant.x <= 7030){
			blocMouvant.setVelocityX(0);

		}
  	}
        
    //  Leviers //    
    if (levier1Actif){
        levier1Off.setAlpha(0);
        levier1On.setAlpha(1);
        emmeteurFlamme1.startFollow(support1);
    } 
        
    if (levier2Actif){
        levier2Off.setAlpha(0);
        levier2On.setAlpha(1);
        emmeteurFlamme2.startFollow(support2);
    }
		
    if (levier3Actif){
        levier3Off.setAlpha(0);
        levier3On.setAlpha(1);
        emmeteurFlamme3.startFollow(support3);
    }
		
		// Checkpoints //
    if (checkpoint1B){
        checkpoint1.anims.play('checkpointActif', true);
        checkpoint2.anims.play('checkpoint', true);
        checkpoint3.anims.play('checkpoint', true);

    }
    else if (checkpoint1B){
        checkpoint1.anims.play('checkpoint', true);
    }

    if (checkpoint2B){
        checkpoint2.anims.play('checkpointActif', true);
        checkpoint1.anims.play('checkpoint', true);
        checkpoint3.anims.play('checkpoint', true);

    }
    else if (checkpoint2B){
        checkpoint2.anims.play('checkpoint', true);
    }
		
    if (checkpoint3B){
        checkpoint3.anims.play('checkpointActif', true);
        checkpoint1.anims.play('checkpoint', true);
        checkpoint2.anims.play('checkpoint', true);

    }
    else if (checkpoint3){
        checkpoint3.anims.play('checkpoint', true);
    }  
		
    // Affichage pdv // 
    if (pdv == 3){
        pdv1.setAlpha(0);
        pdv2.setAlpha(0);
        pdv3.setAlpha(1);
    }
        
    else if (pdv == 2){
        pdv1.setAlpha(0);
        pdv2.setAlpha(1);
        pdv3.setAlpha(0);
    }
        
    else if (pdv == 1){
        pdv1.setAlpha(1);
        pdv2.setAlpha(0);
        pdv3.setAlpha(0);
    }  
        
    else if (pdv <= 0){
        gameOver = true;
    
        }
    

    // Animation & comportement corde //    
    if (!cordeTranchee){
    corde.anims.play('corde', true);
    }
    if (cordeTranchee == true){
       
        blocTombe.body.setAllowGravity(true);
      
        }
		
		
	// Autorisation du saut //
    if (player.body.touching.down){
        canjump = true;
    }
    else if (!player.body.touching.down){
        canjump = false;
    }
        
    
        
    
    // Comportement du Bloc mouvant //   
    if (stopTombe == true){
    
        blocTombe.body.setAllowGravity(false);
        blocTombe.body.setImmovable(true);
        blocTombe.setVelocityX(0);
        blocTombe.setVelocityY(0);
   
    }
		
	// Gameover & Restart //
    if (gameOver){
		isDead = true;
		if (flecheActive){
			if (!dead1){
				player.anims.play('death', true);
				dead1=true;	
			}
		setTimeout(function (){player.anims.play('deathS', true)}, 500)
		}
		else if (!flecheActive){
			if (!dead2){
				player.anims.play('deathLance', true);
				dead2=true;	
			}
		setTimeout(function (){player.anims.play('deathLanceS', true)}, 500)
		}
        player.setTint(0xff0000);
        this.physics.pause();
        
        
        if (keys.a.isDown){
            if (checkpoint1B == true){
				isDead = false;
				dead1 = false;
				dead2 = false;

				posXplayer = 7794;
				posYplayer = 4053;
                this.physics.resume();
                pdv = 3;
                flecheActive = false;
                cordeTranchee = false;
                stopTombe = false;
                gameOver = false;
                if (levier1Actif){
                levier1Actif = true;
                }
                if (levier2Actif){
                levier2Actif = true;
                }
                if (levier3Actif){
                levier3Actif = true;
                }
                ennemi1Mort = false;
                ennemi2Mort = false;
                this.scene.start("Niveau1");

            }
            else if (checkpoint2B == true){
				isDead = false;
				dead1 = false;
				dead2 = false;
				posXplayer = 7849;
				posYplayer = 2039;
                this.physics.resume();
                pdv = 3;
                flecheActive = false;
                if (levier1Actif){
                levier1Actif = true;
                }
                if (levier2Actif){
                levier2Actif = true;
                }
                if (levier3Actif){
                levier3Actif = true;
                }
                gameOver = false;
                ennemi1Mort = false;
                ennemi2Mort = false;
                this.scene.start("Niveau1");

            }
            else if (checkpoint3B == true){
				isDead = false;
				dead1 = false;
				dead2 = false;
				posXplayer = 5403;
				posYplayer = 897;
                this.physics.resume();
                pdv = 3;
                flecheActive = false;
                if (levier1Actif){
                levier1Actif = true;
                }
                if (levier2Actif){
                levier2Actif = true;
                }
                if (levier3Actif){
                levier3Actif = true;
                }
                gameOver = false;
                ennemi1Mort = false;
                ennemi2Mort = false;
                this.scene.start("Niveau1");
            }
            else {
                
				isDead = false;
				dead1 = false;
				dead2 = false;
                this.physics.resume();
                pdv = 3;
                gameOver = false;
                flecheActive = false;
                ennemi1Mort = false;
                ennemi2Mort = false;
                this.scene.start("Niveau1");
                
 
            }
        }
    }
		
	// Controles & Gestions des animations //
		
	// Animations avec Lance dans le dos //	
    if (!flecheActive && isDead == false){	

	
		// Comportement & animations du lancer //
        if (keys.space.isDown){
        canShot = false;
        player.anims.play('lancer', true);
        setTimeout(function(){attaque()}, 300);
        setTimeout(function (){canShot = true}, 1000);
    
        }
        
		// Animations de saut & Déplacements dans les airs //
        else if (keys.up.isDown && canjump == true || keys.z.isDown && canjump == true){
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
       
        
}
	
		// Idem que précédement mais sans la lance dans le dos //
    	if (flecheActive && isDead == false){
     
      	if (keys.up.isDown && canjump == true || keys.z.isDown && canjump == true){
                player.setVelocityY(-750);
                player.setVelocityX(0);
                player.anims.play('jump', true); 
            if (keys.right.isDown|| keys.d.isDown){
                direction = 'right'; 
                player.flipX = false;
                player.setVelocityX(500);
          
            }
            else if (keys.left.isDown|| keys.q.isDown){
                direction = 'left'; 
                player.flipX = true;
                player.setVelocityX(-500);
      
            }
            
         
        }
        
        else if (keys.right.isDown|| keys.d.isDown){
           
            direction = 'right'; 
            player.flipX = false;
            if (!canjump){
                player.anims.play('jump', true);
                player.setVelocityX(500);
            }
            else if (canjump){
                player.anims.play('right', true);
                player.setVelocityX(500); 
            }
        }
            
        else if (keys.left.isDown|| keys.q.isDown){
            direction = 'left'; 
            player.flipX = true;
            if (!canjump){
            player.anims.play('jump', true);
            player.setVelocityX(-500);
            }
            else if (canjump){
            player.anims.play('right', true);
            player.setVelocityX(-500);
            }
        }
       
       
        
      
       else if (keys.right.isUp && keys.left.isUp && keys.up.isUp && keys.down.isUp){
            player.setVelocityX(0);
            if (canjump){
                player.anims.play('turn', true);
            }
           if (!canjump){
                player.anims.play('jump', true);

           }
        
       }
    }

   
   // Destruction & animations (particule) de la lance//     
    if (keys.shift.isDown && flecheActive == true){
    
        newTirJoueur.destroy();
        emmeteur.startFollow(newTirJoueur);
        flecheActive = false;
		cibleTouchee = false;
		startDelai = false;
		dejaPasse = false;
        setTimeout(function (){emmeteur.stopFollow()}, 500);
        }
        
        if(invincible){
            
            compteurInvincible-- ;
            compteurFrames --;
            if (compteurFrames ==125){
            player.setAlpha(0);
            }
            if (compteurFrames ==100){
            player.setAlpha(1);
            }
            if (compteurFrames ==75){
            player.setAlpha(0);
            }
            if (compteurFrames ==50){
            player.setAlpha(1);
            }
            if (compteurFrames ==25){
            player.setAlpha(0);
            }
         
                
            if (compteurFrames <= 0){
            player.setAlpha(1);    
            compteurFrames = 150;            
            }   
    
           
            if(compteurInvincible == 0){
                compteurInvincible = 150;
                invincible = false ;
            }
                
           
        }


    }
}

// Fonctions //
function attaque(x, y){
    
if (!flecheActive){
   

    newTirJoueur = tirJoueur.create(player.x, player.y-100, 'tir');
    newTirJoueur.setCollideWorldBounds(true);
        
	if (direction == 'right'){
        
    	newTirJoueur.setVelocityX(800);
        
    }
        
	else if(direction == 'left'){
        
    	newTirJoueur.setVelocityX(-800);
    	newTirJoueur.setFlipX(true);
        
    }
    
    newTirJoueur.body.allowGravity=false;
    flecheActive = true;
    
    }
}

function CollideTirBloc(){

    tirJoueur.setVelocityX(0);
    tirJoueur.setVelocityY(0);
   
}

function KillInstant(player, buissonMortel){
    
    pdv -=3;
    pdv1.setAlpha(1);
    pdv2.setAlpha(0);
    pdv3.setAlpha(0);
    
}

function DestroyBuisson(blocTombe, buissonMortel){
    
    buissonMortel.destroy();    
    
}

function StopTombe(){
    
   stopTombe = true;
}



function CollideTirCible(){

    tirJoueur.setVelocityX(0);
    tirJoueur.setVelocityY(0);
	cibleTouchee = true;
}

function destroyCorde(corde, blocTombe){
    
    corde.destroy();
    cordeTranchee = true;
    
}

function ActiveLevier1(){
    levier1Actif = true;
    etatCam1 = true;


}

function ActiveLevier2(){
    levier2Actif = true;
    etatCam2 = true;
}

function ActiveLevier3(){
    levier3Actif = true;
    etatCam3 = true;
}
function ActiveCheckpoint1(){
    pdv = 3;
    checkpoint1B = true;
    checkpoint2B = false;
	checkpoint3B = false;
}

function ActiveCheckpoint2(){
    pdv = 3;
    checkpoint1B = false;
    checkpoint2B = true;
	checkpoint3B = false;
    
}
function ActiveCheckpoint3(){
    pdv = 3;
    checkpoint1B = false;
    checkpoint2B = false;
	checkpoint3B = true;
 
}

function CollideTirEnnemi1(){
    ennemi1.destroy();
    ennemi1Mort = true;
}

function CollideTirEnnemi2(){
    ennemi2.destroy();
    ennemi2Mort = true;
}


function CollideObstacle(){

    newTirJoueur.destroy();
	dejaPasse = false;
	emmeteur.startFollow(newTirJoueur);
	setTimeout(function (){emmeteur.stopFollow()}, 500);
	setTimeout(function (){flecheActive = false;}, 500);

}

function HitEnnemi(){ 
    if (!invincible){
    invincible = true;
    pdv -=1;
                
        if (pdv == 3){
            pdv1.setAlpha(0);
            pdv2.setAlpha(0);
            pdv3.setAlpha(1);
        }

        else if (pdv == 2){
            pdv1.setAlpha(0);
            pdv2.setAlpha(1);
            pdv3.setAlpha(0);
        }

        else if (pdv == 1){
            pdv1.setAlpha(1);
            pdv2.setAlpha(0);
            pdv3.setAlpha(0);
            }  

        else if (pdv <= 0){
            gameOver = true;
    
        }
}
}
