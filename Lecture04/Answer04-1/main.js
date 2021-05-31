enchant();

window.onload = function() {
    //ゲーム全体の設定
    var game = new Core(320, 320);
    game.fps = 15;
    game.preload("betty.png");
    game.preload("icon0.png");
    game.rootScene.backgroundColor = "green";

    //ゲームが読み込まれたときの処理
    game.onload = function() {
        // 
        var pad = new Pad();
        pad.x = 220;
        pad.y = 220;
        game.rootScene.addChild(pad);
        
        //りんごの生成と設定
        var item = new Sprite(16, 16);
        item.image = game.assets["icon0.png"];
        item.x = 152;
        item.y = 152;
        item.frame = 15;
        item.tick = 0;
        game.rootScene.addChild(item);

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
                this.frame = this.tick % 4 * 4;
                this.tick++;
            }
            if (game.input.up) { //上キー
                this.y -= 4;
                this.frame = this.tick % 4 * 4 + 2;
                this.tick++;
            }
            if (game.input.right) { //右キー
                this.x += 4;
                this.frame = this.tick % 4 * 4 + 3;
                this.tick++;
            }
            if (game.input.left) { //左キー
                this.x -= 4;
                this.frame = this.tick % 4 * 4 + 1;
                this.tick++;
            }
            if (this.intersect(item)) {
                game.rootScene.removeChild(item);
            }
        });
    };

    //ゲームスタート
    game.start();
};