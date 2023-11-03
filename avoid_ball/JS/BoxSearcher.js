let rot;//他のやり方を思いつくまではグローバル変数を仮使用
let found = Boolean(false);//同様

//boxm1を認識したら下記コードが実行される
AFRAME.registerComponent('boxm1', {
    init: function()
    {
      var marker = this.el;
      rot = marker.getAttribute('rotation');//ARマーカーの角度を代入

      //マーカーを見つけた時の処理
      marker.addEventListener('markerFound', function () {
        console.log("box1を発見した");
        $('#box2').attr('src', './image/maru.png');
        found = true;
      });
      //マーカーを見失った時の処理
      marker.addEventListener('markerLost', function () {
        console.log("box1を見失った");
        $('#box2').attr('src', './image/batu.png');
        found = false;
      });
    },
    //これより下は常に繰り返し実行される
    tick: function(delta) {

      var marker = this.el;

      //マーカーを認識しているときのみオブジェクトが動くようにする
      if(found)
      {
        rot = marker.getAttribute('rotation');
      }
      else
      {
        rot.x = 90;
        rot.z = 0;
      }
    },
});