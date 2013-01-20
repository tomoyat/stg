
onload = function(){
    var game = new Game();
    game.loop();
};


var Game = function(){
    this.fps = 30;
    this.intervalTime = 1000 / this.fps;
    this.interval = this.intervalTime;
    this.graphic = new Graphic();
    this.windowWidth = this.graphic.width;
    this.windowHeight = this.graphic.height;

    this.frame = 0;
    this.initFlg = 0;

    this.absoluteCoordinate = document.getElementById("gameWindow").getBoundingClientRect();

    this.player = new Player(this.windowWidth,this.windowHeight, this.absoluteCoordinate);
    this.enemyManager = new EnemyManager(this.windowWidth,this.windowHeight);
    this.enemySpawn = new EnemySpawn(this.windowWidth,this.windowHeight);
    this.enemyBulletManager = new BulletManager(this.windowWidth,this.windowHeight);
    
    this.effectManager = new EffectManager();

    var self = this;
    this.loop = function(){
	var oneFlameTime = new Date();

	self.graphic.clear();

	switch(self.player.playerState){
	case 0 :
	    self.graphic.start();
	    break;
	case 1 :
	    self.frame = self.frame + 1;
	    self.player.update(self.frame, self.enemyBulletManager);

	    
	    self.enemySpawn.spawn(self.frame, self.enemyManager);

	    var frameScore = self.enemyManager.update(self.player.x, self.player.y,
						      self.enemyBulletManager,
						      self.player.bulletManager,
						      self.effectManager);
	    self.enemyBulletManager.update(self.player.x, self.player.y);
	    self.effectManager.update();
	    // score ŒvŽZ
	    var level = ~~(self.frame / (30 * 15)); 
	    self.player.score = (frameScore * (level+1) * 10) + self.player.score;


	    // •`‰æˆ—
	    self.enemyManager.draw(self.graphic);
	    self.enemyBulletManager.draw(self.graphic);
	    self.effectManager.draw(self.graphic);
	    self.player.draw(self.graphic);

	    self.graphic.ui(level, self.player.score);
	    break;
	case 2 :
	    self.enemyManager.update(self.player.x, self.player.y,
				     self.enemyBulletManager,
				     self.player.bulletManager,
				     self.effectManager);

	    self.enemyBulletManager.update(self.player.x, self.player.y);
	    self.effectManager.update();
	    self.enemyManager.draw(self.graphic);
	    self.enemyBulletManager.draw(self.graphic);
	    self.effectManager.draw(self.graphic);
	    self.graphic.gameOver(self.player.score);
	    break;
	case 3 :
	    self.frame = 0;
	    self.enemyBulletManager.clear();
	    self.enemyManager.clear();
	    self.effectManager.clear();
	    self.player.playerState = 0;
	    break;
	default :
	    break;
	}
	self.graphic.reset();
	// interval
	oneFlameTime = new Date() - oneFlameTime;
	self.interval = self.intervalTime - oneFlameTime > 10 ? self.intervalTime - oneFlameTime : 10;
	setTimeout(self.loop , self.interval);
    }
};

