class Vector2 {
    constructor(x = 0, z = 0) {
        this.x = x;
        this.z = z;
    }
}

function CollisionWithPoint(clamped,ballPosition){
    //中心から四角の最短点までの長さを計算
    var lenge = Math.sqrt((clamped.x - ballPosition.x) *(clamped.x - ballPosition.x) + (clamped.z - ballPosition.z) * (clamped.z - ballPosition.z));
    console.log("ball地点 x:"+ballPosition.x+" z:"+ballPosition.z);
    console.log("最短地点 x:"+clamped.x+" z:"+clamped.z);
    console.log("lenge:"+lenge);
    //その長さと円の半径(0.125)を比べる
    if(lenge <= 0.125)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function clampOnRange(x,min,max){
	if(x < min){
		return min;
	}else if(x > max){
		return max;
	}else{
		return x;
	}
}

function clampOnRectangle(point,wall){
	var clamp = new Vector2;
	//　x軸とy軸の最短点を取得し返すだけ
	clamp.x = clampOnRange(point.x,wall.object3D.position.x - 0.5,wall.object3D.position.x + 0.5);
	clamp.z = clampOnRange(point.z,wall.object3D.position.z - 0.5,wall.object3D.position.z + 0.5);

	return clamp;
}

function circleRectangleCollision(wall){
    var ballPosition = new Vector2;
    ballPosition.x = ballPos.x;
    ballPosition.z = ballPos.z;

    ballPosition.x += rot.z * -0.0005;
    ballPosition.z += (90 - rot.x) * -0.0005;

	clamped = clampOnRectangle(ballPosition,wall);
	return CollisionWithPoint(clamped, ballPosition);
}

AFRAME.registerComponent('wall', {
    tick: function () {
        var wall = this.el;

        isIntersect = circleRectangleCollision(wall);
        console.log("判定："+isIntersect);
    }
});