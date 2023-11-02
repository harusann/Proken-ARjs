//Aframeのオブジェクトの処理
let shoot=false,cnt=0,num=0,rand=Math.random(),
    interval=null,ballinterval=null,aX,aY,
    arrX=[0.2,0.3,0.4,0.5,0.6,0.7],arrY=[0.4,0.5,0.6,0.7,0.8,0.9,1.4,-1.7,-2];
//------
//  ボールとボックスを読み込み15行目から処理を行う
//------
window.onload=function(){
    ball     = document.getElementById('sphere01');
    ball1    = document.getElementById('sphere02');
    ball2    = document.getElementById('sphere03');
    box      = document.getElementById('box01');
    
    /*window.addEventListener("click",function(){
        shoot=true;
    });*/
    interval=setInterval(timecard,1000);
    setInterval(getMarker,1000);
    setInterval(getMarker2,1000);
    setInterval(getMarker3,1000);
    
    loop();
}
//
function loop(){
    
    setTimeout(loop,20);
}
//時間経過でballが移動する
//各ボールが移動する
//時間ごとに座標を分けている。
function timecard(){
    cnt++;
    console.log(cnt);
    console.log(num);
    //console.log('Ball: ',ball);
    //console.log('Ball1: ',ball1);
    //console.log('Ball2: ',ball2);
    
    if(cnt===1){
        ball.setAttribute('position',{
            x: 50,
            y: 30,
            z: -10
        });
        ball1.setAttribute('position',{
            x: 50,
            y: 30,
            z: -10
        });
        ball2.setAttribute('position',{
            x: 50,
            y: 30,
            z: -10
        });
    }
    if(cnt===2){
        ball.setAttribute('position',{
            x: 50,
            y: 30,
            z: -10
        });
        ball1.setAttribute('position',{
            x: 50,
            y: 30,
            z: -10
        });
        ball2.setAttribute('position',{
            x: 50,
            y: 30,
            z: -10
        });
    }
    if(cnt===3){
        ball.setAttribute('position',{
            x: aX=[Math.floor(Math.random()*arrX.length)],
            y: 1.3,
            z: -5
        });
        ball1.setAttribute('position',{
            x: 0.9,
            y: aY=[Math.floor(Math.random()*arrY.length)],
            z: -5
        });
        ball2.setAttribute('position',{
            x: 0.9,
            y: aY=[Math.floor(Math.random()*arrY.length)],
            z: -5
        });
    }
    if(cnt===6){
        ball.setAttribute('position',{
            x: 0.2,
            y: 1.1,
            z: -5
        });
        ball1.setAttribute('position',{
            x: -0.4,
            y: aY=[Math.floor(Math.random()*arrY.length)],
            z: -5
        });
        ball2.setAttribute('position',{
            x: 0.5,
            y: aY=[Math.floor(Math.random()*arrY.length)],
            z: -5
        });
    }
    if(cnt===9){
        ball.setAttribute('position',{
            x: aX=[Math.floor(Math.random()*arrX.length)],
            y: 1.7,
            z: -5
        });
        ball1.setAttribute('position',{
            x: 0.6,
            y: aY=[Math.floor(Math.random()*arrY.length)],
            z: -5
        });
        ball2.setAttribute('position',{
            x: aX=[Math.floor(Math.random()*arrX.length)],
            y: -1,
            z: -5
        });
    }
    if(cnt===11){
        cnt=0;
    }

    if(num==3){
        alert("Congraturation");
    }
}

//座標取得と一致判定する処理
function getMarker(){
    const marker=document.querySelector('a-marker');

    if(marker){
        const makerPoition=new THREE.Vector3();
        marker.object3D.getWorldPosition(makerPoition);

        const sphere=document.querySelector('#sphere01');
        
        if(sphere){
            const tagetPosition=new THREE.Vector3();
            sphere.object3D.getWorldPosition(tagetPosition);
            const distance = makerPoition.distanceTo(tagetPosition);
            if(distance < 0.5){
                console.log("一致しました。");
                sphere.object3DMap.mesh.material.color.set('green');
                num+=1;
                //判定は出てるがプラスにはなってない..?あと反応したボールに判定をなくすようにする
            }else{
                console.log("検出対象が見つかりません");
            }
        }
    }else{
        console.log("失敗");
    }
}
function getMarker2(){
    const marker=document.querySelector('a-marker');

    if(marker){
        const makerPoition=new THREE.Vector3();
        marker.object3D.getWorldPosition(makerPoition);

        const sphere1=document.querySelector('#sphere02');
        
        if(sphere1){
            const tagetPosition=new THREE.Vector3();
            sphere1.object3D.getWorldPosition(tagetPosition);
            const distance = makerPoition.distanceTo(tagetPosition);
            if(distance < 0.5){
                console.log("一致しました。");
                sphere1.object3DMap.mesh.material.color.set('green');
                num+=1;
            }else{
                console.log("検出対象が見つかりません");
            }
        }
    }else{
        console.log("失敗");
    }
}
function getMarker3(){
    const marker=document.querySelector('a-marker');

    if(marker){
        const makerPoition=new THREE.Vector3();
        marker.object3D.getWorldPosition(makerPoition);
        //console.log("マーカー情報:",makerPoition);

        const sphere2=document.querySelector('#sphere03');
        
        if(sphere2){
            //console.log("ボール情報:",sphere2);
            const tagetPosition=new THREE.Vector3();
            sphere2.object3D.getWorldPosition(tagetPosition);
            const distance = makerPoition.distanceTo(tagetPosition);
            if(distance < 0.5){
                console.log("一致しました。");
                sphere2.object3DMap.mesh.material.color.set('green');
                num+=1;
            }else{
                console.log("検出対象が見つかりません");
            }
        }
    }else{
        console.log("失敗");
    }
}        