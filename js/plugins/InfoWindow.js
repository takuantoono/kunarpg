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
if($gameSwitches.value(2)){
	    this.addWindow(this._InfoWindow);
}
	};
 

	
var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
if($gameSwitches.value(5)){
	    this._InfoWindow.hide();
}
if($gameSwitches.value(7)){
	    this._InfoWindow.show();
}
        this._InfoWindow.setText();


var Scene_Map_callMenu = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function() {
Scene_Map_callMenu.call(this);
this._InfoWindow.hide();
};


    };

	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 10;
		var y = 10;
	    var width = 220;
	    var height = this.lineHeight()*5;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
if($gameVariables.value(493)>=2){
this.drawIcon(79, 0, 1);
}
this.changeTextColor(this.textColor(16));
if($gameVariables.value(430)==0){
this.drawText("午前" ,35,1);
}
if($gameVariables.value(430)==1){
this.drawText("午後" ,35,1);
}
if($gameVariables.value(430)==2){
this.drawText("夜　：視界" ,35,1);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
if($gameVariables.value(430)==3){
this.drawText("深夜：視界" ,35,1);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}



if($gameVariables.value(15)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
		
        
		this.drawText("食料・水",0, this.lineHeight());
if($gameVariables.value(15)>=$gameVariables.value(423)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(15) ,100,this.lineHeight());
if($gameVariables.value(15)<=0){
this.drawIcon(10, 151, this.lineHeight());
}

if($gameVariables.value(16)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
	  	this.drawText("元気",0, this.lineHeight()*2);
if($gameVariables.value(16)>=$gameVariables.value(422)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(16) ,100,this.lineHeight()*2);
if($gameVariables.value(16)<=0){
this.drawIcon(11, 151, this.lineHeight()*2);
}


if($gameSwitches.value(32)){
if($gameVariables.value(17)<=10){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
	  	this.drawText("任務期限",0, this.lineHeight()*3);
		this.resetTextColor();
		this.drawText($gameVariables.value(17) ,100,this.lineHeight()*3);

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
    	return 18;
	};
	// ウィンドウの色調
	Window_Info.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};
	
})();