enchant();

window.onload = function() {
    //ゲーム全体の設定
    var game = new Core(320, 320);
    game.fps = 15;
    game.preload("icon0.png");

    //ゲームが読み込まれたときの処理
    game.onload = function() {
        //リンゴ（item）の生成と設定
        var item = new Sprite(16, 16);
        item.image = game.assets["icon0.png"];
        item.x = 320/2-16/2;
        item.y = 320/2-16/2;
        item.frame = 15;
        item.tick = 0;
        game.rootScene.addChild(item);
    };

    //ゲームスタート
    game.start();
};