class Vector2 {
    constructor(x = 0, z = 0) {
        this.x = x;
        this.z = z;
    }
}

function CollisionWithPoint(clamped,ballPosition){
    //中心から中心までの距離を測る
    var lenge = Math.sqrt((clamped.x - ballPosition.x) *(clamped.x - ballPosition.x) + (clamped.z - ballPosition.z) * (clamped.z - ballPosition.z));
    //その長さと円の半径(0.25)を比べる
    if(lenge < 0.2)//0.25から0.2に変更
    {
        return true;
    }
    else
    {
        return false;
    }
}

function circleRectangleCollision(wall){
    var ballPosition = new Vector2;
    ballPosition.x = ballPos.x;
    ballPosition.z = ballPos.z;

    var clamped = new Vector2;
	clamped.x = wall.object3D.position.x;
	clamped.z = wall.object3D.position.z;

	return CollisionWithPoint(clamped, ballPosition);
}

AFRAME.registerComponent('toge_ball', {
    tick: function () {
        var wall = this.el;

        if(circleRectangleCollision(wall)) isIntersect = true;
        console.log("判定"+isIntersect);
    }
});

    AFRAME.registerComponent('toge_ball' + 1, {
        tick: function () {
            var wall = this.el;
    
            if(circleRectangleCollision(wall)) isIntersect = true;
            console.log("判定：1"+isIntersect);
        }
    });