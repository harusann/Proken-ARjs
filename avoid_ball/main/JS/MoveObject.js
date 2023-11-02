//他のやり方を思いつくまではグローバル変数を仮使用
var isIntersect = false;//壁に当たったらtrueになる
var ballPos = 0;
var speed = 0.00025;//0.001から0.00025に変更

AFRAME.registerComponent('moveobject', {
  tick: function(delta) {
    
    var obj = this.el;
    ballPos = obj.object3D.position;

    if(isIntersect)
    {
      //console.log("GAMEOVER");
    }
    else
    {
      //rotはARマーカーの角度。BoxSearcherから取ってきている
      obj.object3D.position.x += rot.z * -speed;
      obj.object3D.position.z += (90 - rot.x) * -speed;
      //console.log("球の動きを反映");
    }

    //console.log("x: "+rot.x+"y: "+rot.y+"z: "+rot.z);//玉の位置
    //console.log("obj.rot.y: "+obj.object3D.rotation.y);//玉の進行方向
    //console.log("atan"+Math.atan(rot.z / (90 - rot.x)));//玉の進行方向(ラジアンバージョン)
  },
});