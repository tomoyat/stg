
var EnemySpawn = function(_windowWidth, _windowHeight){
    this.windowWidth = _windowWidth;
    this.windowHeight = _windowHeight;
};

// http://d.hatena.ne.jp/amachang/20070813/1186980089 
// �����𐮐��ɂ������
EnemySpawn.prototype.spawn = function( frame, enemyManager ){
    var level = ~~(frame / (30 * 15)); // 15�b���ƂɃ��x���A�b�v
    if( level > 19 ) level = 19;

    var p = ~~(Math.random() * 45);
    if( p > level ) return;
    var x = (~~( (this.windowWidth-10) * Math.random())) + 5;
    enemyManager.add( new Enemy( x, -5, NomalEnemyStatus, nomalEnemydraw, nomalEnemyMove, nomalEnemyShoot, 0 ) );
};