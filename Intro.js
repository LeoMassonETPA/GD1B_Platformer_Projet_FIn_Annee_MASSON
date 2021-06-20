var compteurI = 2000

class Intro extends Phaser.Scene{
    constructor(){
        super("Intro");
    }
    init(data){
    }
    preload(){
        
        this.load.image('Intro','assets/Intro.png');

      
        
    }
    
    create(){
        
        this.cameras.main.fadeIn(1000);
        this.cameras.main.setBounds(0, 0, 1920, 1080);
        

        this.physics.world.setBounds(0, 0, 1920, 1080);
        
        this.add.image(0, 0, 'Intro').setOrigin(0);        
        
        
        
   
    }
    
    update(){
		
	compteurI --; 
		
		
		
	if (compteurI >= 1500){
		this.cameras.main.zoom=0.9;
		this.cameras.main.setBounds(-300, 0, 1920, 1080);
        
    }
	if (compteurI >= 1000 && compteurI<= 1499){
	this.cameras.main.zoom=1.5;
	this.cameras.main.setBounds(900, -400, 1920, 1080);
        
    }
	if (compteurI >= 500 && compteurI<= 999){
	this.cameras.main.zoom=1.4;
	this.cameras.main.setBounds(600, 500, 1920, 1080);
        
    }
	if (compteurI<= 0){
		this.scene.start('Niveau1');
        
    }
}
}
