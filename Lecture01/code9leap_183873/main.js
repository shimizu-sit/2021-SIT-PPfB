enchant();

window.onload = function() {
    //ゲーム全体の設定
    var game = new Core(320, 320);
    game.fps = 15;
    game.preload("betty.png");

    //ゲームが読み込まれたときの処理
    game.onload = function() {
        //プレイヤーの生成と設定
        var player = new Sprite(48, 48);
        player.image = game.assets["betty.png"];
        player.x = 0;
        player.y = 0;
        player.frame = 8;
        player.tick = 0;
        game.rootScene.addChild(player);

        //プレーヤーに関する1フレームの動作
        player.addEventListener("enterframe", function(e) {
            if (game.input.down) { //下キー
                this.y += 4;
            }
            if (game.input.up) { // 上キー
                this.y -= 4;
            }
            if (game.input.right) { // 右キー
                this.x += 4;
            }
            if (game.input.left) { // 左キー
                this.x -= 4;
            }
        });
    };

    //ゲームスタート
    game.start();
};