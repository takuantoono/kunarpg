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
if($gameSwitches.value(2)){
	    this.addWindow(this._InfoWindow);
	    this.addWindow(this._InfoWindow2);
}

	};
 

	
var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
if($gameSwitches.value(68)){
this._InfoWindow.hide();
if($gameSwitches.value(5)){
	    this._InfoWindow2.hide();
}else{
	    this._InfoWindow2.show();
}
}else{
 this._InfoWindow2.hide();
if($gameSwitches.value(5)){
	    this._InfoWindow.hide();
}else{
	    this._InfoWindow.show();
}
}
        this._InfoWindow.setText();
        this._InfoWindow2.setText();


var Scene_Map_callMenu = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function() {
Scene_Map_callMenu.call(this);
Scene_Map._InfoWindow.hide();
Scene_Map._InfoWindow2.hide();
};


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
this.drawIcon(10, 310, 0);
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
this.drawIcon(11, 470, 0);
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



})();