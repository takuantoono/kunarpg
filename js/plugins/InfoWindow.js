//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {

	// マップ上にウィンドウ表示するよ宣言
	var Scene_map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		Scene_map_start.call(this);
	    this._InfoWindow = new Window_Info();
	    this._InfoWindow2 = new Window_Info2();
	    this._AutomapWindow = new Window_Automap();
if($gameSwitches.value(79)){
	    this.addWindow(this._InfoWindow);
	    this.addWindow(this._InfoWindow2);
	    this.addWindow(this._AutomapWindow);
}

	};
 

	
var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);

this._AutomapWindow.hide();
if($gameSwitches.value(146)&&$gameSwitches.value(147)){
this._AutomapWindow.show();
        this._AutomapWindow.setText();
}



if($gameSwitches.value(68)){

this._InfoWindow.hide();
if($gameSwitches.value(5)){
	    this._InfoWindow2.hide();
}else{
	    this._InfoWindow2.show();
        this._InfoWindow2.setText();
}
}else{
 this._InfoWindow2.hide();
if($gameSwitches.value(5)){
	    this._InfoWindow.hide();
}else{
	    this._InfoWindow.show();
        this._InfoWindow.setText();
}
}



    };

	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 0;
		var y = 0;
	    var width = 720;
	    var height = this.lineHeight()+10;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
if($gameVariables.value(493)>=1){
this.drawIcon(79, 0, 0);
}
this.changeTextColor(this.textColor(16));
if(!$gameSwitches.value(8)){
this.drawText("　　　視界" ,35,0);
this.drawText($gameVariables.value(428) ,155,1);
}
else{
if($gameVariables.value(430)==0){
this.drawText("午前" ,35,0);
}
if($gameVariables.value(430)==1){
this.drawText("午後" ,35,0);
}
if($gameVariables.value(430)==2){
this.drawText("夜　：視界" ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
if($gameVariables.value(430)==3){
this.drawText("深夜：視界" ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
}


if($gameVariables.value(15)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
		
        
		this.drawText("食料",200, 0);
if($gameVariables.value(15)>=$gameVariables.value(423)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(15) ,270,0);
if($gameVariables.value(15)<=0){
this.drawIcon(13, 310, 0);
}

if($gameVariables.value(16)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
	  	this.drawText("元気",370, 0);
if($gameVariables.value(16)>=$gameVariables.value(422)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(16) ,440,0);
if($gameVariables.value(16)<=0){
this.drawIcon(12, 470, 0);
}


if($gameSwitches.value(32)){
if($gameVariables.value(17)<=10){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
	  	this.drawText("任務期限",530, 0);
		this.resetTextColor();
		this.drawText($gameVariables.value(17) ,630,0);

	};
}


	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 20;
    };
	// ウィンドウの透明度
	Window_Info.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Info.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};
	




function Window_Info2() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info2.prototype = Object.create(Window_Base.prototype);
	Window_Info2.prototype.constructor = Window_Info2;
	Window_Info2.prototype.initialize = function() {
		var x = 0;
		var y = 0;
	    var width = 420;
	    var height = this.lineHeight()*2+6;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info2.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info2.prototype.refresh = function() {
	    this.contents.clear();
if($gameVariables.value(493)>=1){
this.drawIcon(79, 0, 0);

}
this.changeTextColor(this.textColor(16));
if(!$gameSwitches.value(8)){
this.drawText("　　　視界" ,35,0);
this.drawText($gameVariables.value(428) ,155,1);
}
else{
if($gameVariables.value(430)==0){
this.drawText("午前" ,35,0);
}
if($gameVariables.value(430)==1){
this.drawText("午後" ,35,0);
}
if($gameVariables.value(430)==2){
this.drawText("夜　：視界" ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
if($gameVariables.value(430)==3){
this.drawText("深夜：視界" ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
}


if($gameVariables.value(15)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
		
        
		this.drawText("食料",200, 0);
if($gameVariables.value(15)>=$gameVariables.value(423)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(15) ,270,0);
if($gameVariables.value(15)<=0){
this.drawIcon(10, 310, 0);
}

if($gameVariables.value(16)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
	  	this.drawText("元気",30, 30);
if($gameVariables.value(16)>=$gameVariables.value(422)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(16) ,130,30);
if($gameVariables.value(16)<=0){
this.drawIcon(11, 160, 0);
}


if($gameSwitches.value(32)){
if($gameVariables.value(17)<=10){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
	  	this.drawText("任務期限",230, 30);
		this.resetTextColor();
		this.drawText($gameVariables.value(17) ,330,30);

	};
}


	// フォントサイズ
	Window_Info2.prototype.standardFontSize = function() {
    	return 20;
    };
	// ウィンドウの透明度
	Window_Info2.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Info2.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Info2.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};


function Window_Automap() {
	    this.initialize.apply(this, arguments);
	}

	Window_Automap.prototype = Object.create(Window_Base.prototype);
	Window_Automap.prototype.constructor = Window_Automap;
	Window_Automap.prototype.initialize = function() {
		var x = 150;
		var y = 52;
	    var width = 500;
	    var height = this.lineHeight()*14-6;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Automap.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Automap.prototype.refresh = function() {
	    this.contents.clear();
var x = 0
var y = 0
var id = 0
for (var i = 0; i < 400; i++) {
if($gameVariables.value(2)[i]=="Z"){
x = i % 20
y = i / 20
x = Math.floor(x)
y = Math.floor(y)
xx = x * 24
yy = y * 24
id = $gameMap.tileId(x, y, 0)
rid = $gameMap.regionId(x, y)
if(id == 1569) this.drawIcon(320, xx + 3, yy + 3);
if(id == 1577) this.drawIcon(321, xx + 3, yy + 3);
if(id == 1570) this.drawIcon(322, xx + 3, yy + 3);
if(id == 1578) this.drawIcon(323, xx + 3, yy + 3);
if(id == 1579) this.drawIcon(324, xx + 3, yy + 3);
if(id == 1571) this.drawIcon(325, xx + 3, yy + 3);
if(id == 1580) this.drawIcon(326, xx + 3, yy + 3);
if(id == 1581) this.drawIcon(327, xx + 3, yy + 3);
if(id == 1583) this.drawIcon(328, xx + 3, yy + 3);
if(id == 1582) this.drawIcon(329, xx + 3, yy + 3);
if(id == 1584) this.drawIcon(330, xx + 3, yy + 3);
if(id == 1585) this.drawIcon(331, xx + 3, yy + 3);
if(id == 1586) this.drawIcon(332, xx + 3, yy + 3);
if(id == 1587) this.drawIcon(333, xx + 3, yy + 3);
if(id == 1576) this.drawIcon(334, xx + 3, yy + 3);
if(id == 1552) this.drawIcon(335, xx + 3, yy + 3);

idd = $gameMap.tileId(x-1, y, 0)
if(idd==1578 || idd==1579 || idd==1581 || idd==1582 ||
 idd==1584 || idd==1585 || idd==1587 || idd==1576) this.drawIcon(346, xx + 3, yy + 3);
idd = $gameMap.tileId(x+1, y, 0)
if(idd==1570 || idd==1579 || idd==1580 || idd==1583 ||
 idd==1584 || idd==1585 || idd==1586 || idd==1576) this.drawIcon(346, xx + 24, yy + 3);
idd = $gameMap.tileId(x, y-1, 0)
if(idd==1577 || idd==1571 || idd==1582 || idd==1583 ||
 idd==1585 || idd==1586 || idd==1587 || idd==1576) this.drawIcon(345, xx + 3, yy + 3);
idd = $gameMap.tileId(x, y+1, 0)
if(idd==1569 || idd==1571 || idd==1580 || idd==1581 ||
 idd==1584 || idd==1586 || idd==1587 || idd==1576) this.drawIcon(345, xx + 3, yy + 24);

if(rid == 15)this.drawIcon(336, xx + 3, yy + 3);

if(x == $gamePlayer.x && y == $gamePlayer.y){
if($gamePlayer._direction == 8)this.drawIcon(341, xx + 3, yy + 3);
if($gamePlayer._direction == 2)this.drawIcon(342, xx + 3, yy + 3);
if($gamePlayer._direction == 4)this.drawIcon(343, xx + 3, yy + 3);
if($gamePlayer._direction == 6)this.drawIcon(344, xx + 3, yy + 3);

}

}
}

}


	// フォントサイズ
	Window_Automap.prototype.standardFontSize = function() {
    	return 12;
    };
	// ウィンドウの透明度
	Window_Automap.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Automap.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Automap.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};



})();