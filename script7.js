//複数キャンバス
//ver7_4 視点操作を自作

//グローバル変数
var mouseIsPressed = false; //マウスが押されているときtrue,押されていないときfalse
let angle = 0;

//マウスのボタンを押したとき
document.addEventListener('mousedown',function(){
    mouseIsPressed = true;  
});

//マウスのボタンを離したとき
document.addEventListener('mouseup',function(){
    mouseIsPressed = false;
});



//シーンのクラス
class IScene extends THREE.Scene{

    constructor(option){
        super();

        //シーンのオプション
        const defaultvalues = {projection:'pers'};  //オプションのデフォルト値
        option = {...defaultvalues, ...option}; //デフォルトオプションに入力されたオプションを上書き

        //キャンバスサイズ
        const canvaswidth = 760;    
        const canvasheight = 540;

        //キャンバス
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas); //webページにキャンバスを追加

        //レンダラ
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);   
        this.renderer.setSize(canvaswidth, canvasheight);  //レンダラのサイズ設定
        this.renderer.setClearColor(0xdddddd);  //背景色

        //カメラ
        if(option.projection=='pers'){  //透視投影（第1引数：視野角, 第2引数：アスペクト比）
            this.camera = new THREE.PerspectiveCamera(45, canvaswidth/canvasheight);    
        }else{   //平行投影(第5,6引数：奥行方向の範囲)
            this.camera = new THREE.OrthographicCamera(-canvaswidth/2, canvaswidth/2, canvasheight/2, -canvasheight/2, 1, 10000);  
        }
        this.camera.position.set(0, 0, 1000);   //カメラ位置

        //マウスによる視点操作
        //this.controls = new THREE.OrbitControls(this.camera, this.canvas);

        //ライティング（mathematica風）
        this.lighta = new THREE.AmbientLight(0x663333); //環境光
        this.light1 = new THREE.DirectionalLight(0x002E80,2);   //指向性ライト
        this.light2 = new THREE.DirectionalLight(0x3e903e,2);
        this.light3 = new THREE.DirectionalLight(0x902e00,2);
        this.light4 = new THREE.DirectionalLight(0x00003d,2);
        this.light1.position.copy(new THREE.Vector3(1,0,1));
        this.light2.position.copy(new THREE.Vector3(2,2,3));
        this.light3.position.copy(new THREE.Vector3(0,2,2));
        this.light4.position.copy(new THREE.Vector3(0,0,2));
        this.add(this.lighta, this.light1, this.light2, this.light3, this.light4);

        //その他変数
        this.parasliders = [];   //スライダーの変数情報
        this.object = [];   //オブジェクトの情報
        this.cuttingplanes = [];    
        this.rotateaxis = new THREE.Vector3(1,0,0); //回転軸
        this.angularvelocity = 0;   //回転速度
        this.clock = new THREE.Clock();   //経過時間を図るタイマー

        //このキャンバス上でマウスを動かしたときの処理
        var that = this;
        this.canvas.addEventListener('mousemove',function(event){
            if(mouseIsPressed){
                let dx = event.movementX;
                let dy = event.movementY;
                that.angularvelocity = Math.min((dx*dx+dy*dy)*0.3*that.clock.getDelta(), 0.05);
                that.rotateaxis.set(dy, dx, 0).normalize();
            }
        });  

        this.Ianimation();  //描画処理を開始して繰り返す
    }


    //描画処理
    Ianimation(){

        //パラメータをスライダーの値に更新
        for(let i=0; i<this.parasliders.length; i++){
            let str = this.parasliders[i][0] + '=' + this.parasliders[i][1].value + ';';
            eval(str);
        }
        
        //オブジェクトの更新
        for(let i=0; i<this.object.length; i++){
            if(this.object[i].ready){
                this.object[i].Iupdate();
                this.object[i].mesh.rotateOnWorldAxis(this.rotateaxis, this.angularvelocity);
            }
        }
        //cuttingplaneの回転
        for(let i=0; i<this.cuttingplanes.length; i++){
            //let tmp = new THREE.Vector3(cuttingplanes[i][0], cuttingplanes[i][1], cuttingplanes[i][2]);
        }
        
        //クリッピング
        this.renderer.clippingPlanes = [];  //clippingPlanesを初期化
        let tmp = [];
        if(typeof(this.cuttingplanes)!='string')  tmp = this.cuttingplanes.concat();
        else    tmp = eval(this.cuttingplanes);
        //clippingPlanesを追加
        for(let i=0; i<tmp.length; i++){
            this.renderer.clippingPlanes.push(new THREE.Plane(new THREE.Vector3(tmp[i][0],tmp[i][1],tmp[i][2]),tmp[i][3]));
        }

        //レンダリング
        this.renderer.render(this, this.camera);
        requestAnimationFrame(()=>this.Ianimation());

    }


    //マウスを動かしたとき
    mousemoveevent(event){
        if(mouseIsPressed){
            let dx = event.movementX;
            let dy = event.movementY;
            this.angle = Math.min((dx*dx+dy*dy)*0.003, 0.1);
            console.log(this);
        }
    }


    //パラメータスライダーの追加
    IaddSlider(parameter, option){
        const defaultvalues = {width:200, height:10, min:0, max:100, step:1, init:null}; //スライダーのデフォルト値
        option = {...defaultvalues, ...option}; //スライダーのデフォルトオプションと入力されたオプションをマージ

        let tmp = document.createElement('input');   //入力要素を生成

        tmp.type = 'range'; //入力要素の種類をスライダーに設定
        document.body.appendChild(document.createElement('p')); //改行
        document.body.appendChild(tmp);    //webページにスライダーを追加

        //スライダーの設定
        tmp.style.width = option.width;
        tmp.style.height = option.height;
        tmp.min = option.min;
        tmp.max = option.max;
        tmp.step = option.step;
        if(option.init!=null)  tmp.value = option.init;
        else    tmp.value = (option.min+option.max)/2;
        
        //tmp.style.zoom = 2;   //スライダーを2倍に拡大（スマホ用に使うかも）

        this.parasliders.push([parameter, tmp]);    //パラメータ名とスライダーを記録

        document.write(parameter);  //スライダーの右にパラメータ名を記す

    }

    //IGraphicComplexクラスを呼び出し、オプションを渡す
    IaddObject(vtsstring, index, option){
        const defaultvalues = {scale:1, material:'custom'};
        option = {...defaultvalues, ...option};
        this.object.push(new IGraphicComplex(vtsstring, index, this, option));
    }

    //IAnimeGraphicComplexクラスを呼び出し、オプションを渡す
    IaddAnimeObject(vtsfilename, indexfilename, option, txtfile){
        const defaultvalues = {scale:1, material:'custom'};
        option = {...defaultvalues, ...option}; 
        this.object.push(new IAnimeGraphic(vtsfilename, indexfilename, this, option));
    }

    //シーンごとにcuttingplanesを記録
    IaddCuttingPlanes(planes){
        this.cuttingplanes = planes;
    }

    
}



//パラメータ入り3Dモデル
class IGraphicComplex{
        
    //初期設定
    constructor(vtsstring, index, scene, option){

        this.vtsstring = vtsstring;
        this.index = index;
        this.scene = scene;
        this.option = option;
        this.geometry = new THREE.BufferGeometry();


        //ポリゴンの頂点番号を設定
        this.geometry.setIndex(tripoly(this.index));

        //マテリアルの設定
        if(this.option.material=='normal'){
            this.material = new THREE.MeshNormalMaterial({side:THREE.DoubleSide});    //NormalMaterial（ライティングを無視する）
        }else{
            this.material = new THREE.MeshLambertMaterial({side:THREE.DoubleSide});   //ツヤのないマテリアル（ライトが必要）
        }
        this.material.flatShading = true;   //フラットシェード

        //メッシュ（ジオメトリ＋マテリアル）の生成
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        //this.mesh.scale.x = this.option.scale;
        //this.mesh.scale.y = this.option.scale;
        //this.mesh.scale.z = this.option.scale;

        //シーンにメッシュを追加
        scene.add(this.mesh);  

    }

    //頂点座標の更新
    Iupdate(){

        //ポリゴンの頂点座標を設定
        let tmp;
        if(typeof(this.vtsstring)=='string')    tmp = eval(this.vtsstring).flat();     //頂点配列がパラメータ入り文字列のとき
        else    tmp = this.vtsstring.flat();    //頂点配列が数値のとき
        this.geometry.setAttribute( 'position', new THREE.BufferAttribute(new Float32Array(tmp), 3 ) );

        //頂点法線の計算
        this.geometry.computeVertexNormals();

    }

}


//コマ送りモデル
class IAnimeGraphic{

    constructor(vtsfilename, indexfilename, scene, option){

        this.vtsa = [];
        this.indexa;
        this.option = option;
        this.ready = false;

        let that = this;
        
        function f1(){
            return new Promise((resolve)=>{
                $.get(vtsfilename, function(response){
                    response = response.split('.,').join(',');
                    response = response.split('.]').join(']');
                    response = response.split(' ').join('');
                    that.vtsa = JSON.parse(response);
                    resolve();
                });
            });
        }

        function f2(){
            return new Promise((resolve)=>{
                $.get(indexfilename, function(response){
                    response = response.split('.,').join(',');
                    response = response.split('.]').join(']');
                    response = response.split(' ').join('');
                    that.indexa = JSON.parse(response);
                    resolve();
                });
            });
        }

        async function f3(){
            return new Promise((resolve)=>{
                
                //頂点配列に2個以上のGraphicComplexが含まれている場合スライダー生成
                if(that.vtsa.length!=1){
                    that.slider = document.createElement('input');  
                    that.slider.type = 'range';
                    document.body.appendChild(document.createElement('p')); //改行
                    document.body.appendChild(that.slider); //webページにスライダー追加

                    //スライダー設定
                    that.slider.style.width = 200;
                    that.slider.min = 0;
                    that.slider.max = that.vtsa.length-1;    
                    that.slider.value = 0;

                }

                that.geometry = new THREE.BufferGeometry();

                //ポリゴンの頂点座標を設定
                
                let tmp = that.vtsa[0].flat();
                that.geometry.setAttribute( 'position', new THREE.BufferAttribute(new Float32Array(tmp), 3 ) );

                //ポリゴンの頂点番号を設定
                tmp = that.indexa[0];
                
                that.geometry.setIndex(tripoly(that.indexa[0]));

                //頂点法線の計算
                that.geometry.computeVertexNormals();   

                //マテリアルの設定
                if(that.option.material=='normal'){
                    that.material = new THREE.MeshNormalMaterial({side:THREE.DoubleSide});
                }else{
                    that.material = new THREE.MeshLambertMaterial({side:THREE.DoubleSide});
                }
                that.material.flatShading = true;   //フラットシェード

                //メッシュ（ジオメトリ＋マテリアル）の生成
                that.mesh = new THREE.Mesh(that.geometry, that.material);

                that.mesh.scale.x = that.option.scale;
                that.mesh.scale.y = that.option.scale;
                that.mesh.scale.z = that.option.scale;

                //シーンにメッシュを追加
                scene.add(that.mesh);   

                that.ready = true;

                resolve();
            });
        }

        f1().then(()=>f2()).then(()=>f3());

        

    }

    Iupdate(){
        if(this.vtsa.length!=1){
            //ポリゴンの頂点座標を設定
            let tmp = this.vtsa[this.slider.value].flat();  //（スライダーの値）番目の頂点リストを取り出す
            this.geometry.setAttribute( 'position', new THREE.BufferAttribute(new Float32Array(tmp), 3 ) );

            //ポリゴンの頂点番号を設定
            this.geometry.setIndex(tripoly(this.indexa[this.slider.value]));

            //頂点法線の計算
            this.geometry.computeVertexNormals();   

        }

    }
}


//多角形ポリゴンのポリゴンインデックスを三角形ポリゴンに変換(three.jsの規格に合わせてフラットする)
function tripoly(list){
    let result = [];
    for(let i=0; i<list.length; i++){ //三角ポリゴンに変換
        for(let j=0; j<list[i].length-2; j++){
            result.push(list[i][0], list[i][1+j], list[i][2+j]);
        }
    }
    return result;
}


//ランダムな文字列を返す（スライダーにIDを振るために用意したが結局使ってない）
function randstr(){
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( var i = 0; i < 8; i++ ) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}



/*
toDoリスト
・マウスを止めてからボタンを離したときは物体が回転しないようにする
・データのみ（let などをかかない）のテキストファイルからデータを取り出す（セキュリティの問題上できなさそう）
・パラメータで動かしたときとコマ送りとを比較
・マウスホイールで拡大縮小（負の値で反転）、連続して回しているときはカーソルがキャンバス上にのってもスクロールになるようにする
・２値スライダー

*/