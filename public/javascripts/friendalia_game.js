enchant();

window.onload = function(){
  var fr_game = new Game(400, 600);
  fr_game.fps = 15;
  fr_game.keybind(32, "space");
  fr_game.preload("/images/effereet.png", "/images/fireEffect.png", "/images/dagon.png");
  
  fr_game.onload = function (){
    var effereet = new Sprite(220, 220);
    effereet.image = fr_game.assets["/images/effereet.png"];
    effereet.x = 100;
    effereet.y = 100;
    effereet.addEventListener(enchant.Event.ENTER_FRAME, function(){
        this.moveBy(5,2); 
        if(this.x > fr_game.width){
            this.x = -100;
        }
        if(this.y > fr_game.height){
            this.y = -100;
        }
    });
    
    var fire = new Sprite(160, 130);
    fire.image = fr_game.assets["/images/fireEffect.png"];
    fire.x = 100;
    fire.y = 300;
    fire.addEventListener(enchant.Event.ENTER_FRAME, function(){
        this.frame = this.age % 2;
        this.moveBy(2,0);
        if(this.x > fr_game.width){
            this.x = -100;
        }
    });
    
    var dagon = new Sprite(180,180);
    dagon.image = fr_game.assets["/images/dagon.png"];
    dagon.addEventListener(enchant.Event.ENTER_FRAME, function(){
        if (fr_game.input.up) {
            this.moveBy(0, -5);
        }
        if (fr_game.input.down) {
            this.moveBy(0, 5);
        }
        if (fr_game.input.left) {
            this.moveBy(-5, 0);
        }
        if (fr_game.input.right) {
            this.moveBy(5, 0);
        }
        if (fr_game.input.space) {
            if (this.x > fr_game.width || this.y > fr_game.height || this.x < 0 || this.y < 0) {
                this.x = 0;
                this.y = 0;
            }
            //warp
            this.moveBy((Math.floor(Math.random() * 200) - 50), (Math.floor(Math.random() * 200) - 50));
        }
    });
    
    fr_game.rootScene.backgroundColor = "#ccffcc";
    fr_game.rootScene.addChild(effereet);
    fr_game.rootScene.addChild(fire);
    fr_game.rootScene.addChild(dagon);
  };

  fr_game.start();
};


