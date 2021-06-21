
class Outro extends Phaser.Scene{
    constructor(){
        super("Outro");
    }
    init(data){
    }
    preload(){
        
        this.load.image('Outro','assets/Outro.png');

      
        
    }
    
    create(){
        
        this.cameras.main.fadeIn(1000);
        this.cameras.main.setBounds(0, 0, 1920, 1080);
        

        this.physics.world.setBounds(0, 0, 1920, 1080);
        
        this.add.image(0, 0, 'Outro').setOrigin(0);        
        
        
        
   
    }
    
    update(){
		
	
}
}
