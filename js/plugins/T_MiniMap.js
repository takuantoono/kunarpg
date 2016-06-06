//=============================================================================
// T_MiniMap.js
//=============================================================================
//Copyright (c) 2016 Trb
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
//twitter https://twitter.com/Trb_surasura
/*:
 * @plugindesc �~�j�}�b�v�\���v���O�C���@ver.1.2
 * @author Trb
 * @version 1.00 2016/5/14 ����
 *          1.2  2016/5/16 �V�����}�b�v�Ɉړ��������A�G���[�ɂȂ邱�Ƃ�����s����C�����܂����B
 * 
 * 
 * @help ��ʂ̍���Ƀ~�j�}�b�v��\�������܂��B
 * �v���C���[�̕��������͂������I�ɓh���܂��B
 * �ݒ荀�ڂ������̂Ńp�����[�^�ł͍Œ���̐ݒ肵���o���Ȃ��悤�ɂȂ��Ă��܂��B
 * �ׂ����J�X�^�}�C�Y���������ꍇ�̓v���O�C�����J���ĕҏW���ĉ������B
 * (�ǂ��������������炢����������₷���悤�ɂ͂��Ă������ł�)
 * 
 * �e�X�g�v���C���A��������̃f�[�^�ɂ��̃v���O�C����K�p����ƃG���[�ɂȂ邱�Ƃ�����܂��B
 * ���̏ꍇ�A�܂��v���O�C����off�ɂ�����Ԃő�������n�߁A�p�����[�^�Őݒ肵��2�̕ϐ���
 * 0�ȊO�̓K���Ȑ����������ĉ������B
 * ���̏�ԂŃZ�[�u���ăv���O�C����on�ɂ���Γǂݍ��߂�Ǝv���܂��B
 * 
 * 
 * 
 * <�p�����[�^�ł̐ݒ荀�ڂɂ���>
 * 
 * �E�f�[�^�ۑ��p�ϐ�
 * �����Őݒ肵���ԍ��̕ϐ��Ƀ~�j�}�b�v�̃f�[�^���ۑ�����܂��B
 * 
 * �E�\���̐؂�ւ��p�ϐ�
 * �����Őݒ肵���ԍ��̕ϐ����C�x���g�R�}���h�Ȃǂő��삷�邱�Ƃ�
 * �~�j�}�b�v�̕\���̃I���I�t��\���{����ύX�ł��܂��B
 * �ϐ��̒l��0�̎���\���A1�ȏ�̒l�̎��\���A
 * �\�������Ă��鎞�͕ϐ��̒l�����̂܂�1�}�X�ӂ�̑傫���ɂȂ�܂��B
 * (�� �ϐ��̒l��6�̎��A1�}�X6�s�N�Z���̃~�j�}�b�v�ɂȂ�)
 * ��̒l������ƃ^�C���ƃ^�C���̊ԂɌ��Ԃ������邱�Ƃ�����̂�
 * ��{�I�ɋ����̒l��ݒ肷��悤�ɂ��ĉ������B
 * 
 * �E�ʍs�s���[�W����
 * RPG�c�N�[��MV�ł́A�V��^�C���̏���L�����N�^�[��������悤�ɂȂ��Ă��邽��
 * �~�j�}�b�v��ł�������}�X�Ƃ��ĕ\������Ă��܂��܂��B
 * ���̃p�����[�^�Őݒ肵�����[�W�����̃}�X�́A���ۂ̒ʍs����Ɋւ�炸�ʍs�s�}�X�Ƃ��Ĉ����܂��B
 * �i�L�����N�^�[�������Ȃ��Ȃ�킯�ł͂Ȃ��A�����܂Ń~�j�}�b�v�̕\����ł��j
 * �V��^�C���ɕ~���l�߂�ق��A�}�b�v�ɕ\������Ȃ��B���ʘH����肽�����Ȃǂɂ��g���܂��B
 * 
 * 
 * 
 * �E�t���[���摜
 * �~�j�}�b�v�̉��ɉ摜��ݒ肵�����ꍇ�A�����ɉ摜�̖��O����͂�
 * img/system�t�H���_�ɓ���ĉ������B
 * �摜�́A�~�j�}�b�v�̒��S�Ɖ摜�̒��S�����킳��ʒu�ɕ\������܂��B
 * 
 * 
 * <�X�N���v�g�R�}���h>
 * mapComplete();   ���݂̃}�b�v�����������܂��B
 * 
 * @param �f�[�^�ۑ��p�ϐ�
 * @desc �~�j�}�b�v�̃f�[�^��ۑ�����̂Ɏg���ϐ�
 * @default 1
 * 
 * @param �\���̐؂�ւ��p�ϐ�
 * @desc �~�j�}�b�v�\���̃I���I�t�A�\���{���̕ύX�Ɏg���ϐ��̔ԍ�
 * @default 2
 * 
 * @param �ʍs�s���[�W����
 * @desc �ʍs�s�}�X�Ƃ��ĕ\�������悤�ɂȂ郊�[�W�����̔ԍ�
 * @default 255
 * 
 * @param �t���[���摜
 * @desc �t���[���摜���g�������ꍇ�A�����ɉ摜�̃t�@�C���������ĉ�����
 * @default

 */
(function () {

var parameter = PluginManager.parameters('T_MiniMap');
var v1 = Number(parameter['�f�[�^�ۑ��p�ϐ�']);
var v2 = Number(parameter['�\���̐؂�ւ��p�ϐ�']);
var frameImg = String(parameter['�t���[���摜']);
var regionWall = Number(parameter['�ʍs�s���[�W����']);

var flag_mapComplete = false;
//=============================================================================
//�J�X�^�}�C�Y����ꍇ�A��ɂ������牺�̒l�����������܂��B

var minimapX = 20;//�\���ʒu
var minimapY = 20;

var minimapWidth = 200;//�~�̒��a
var minimapOpacity = 160;//�~�j�}�b�v�̓����x
var radius = 0;//��x�Ƀ`�F�b�N���锼�a(�v���C���[�̈ʒu���甼�aradius���̒n�`���h����)

var minimapTileColors = [];
    minimapTileColors[0] = '#333377';//�w�i�A�ǃ}�X�̐F
    minimapTileColors[1] = '#0000ff';//�ʏ�}�X�̐F
  //minimapTileColors[2] = 
  //minimapTileColors[3] = 
  
/*�F�����ɂ���
Sprite_MiniMap.prototype.checkTile ���\�b�h����
�u�w����W�̃��[�W����ID�������̎��v�A�u�n�`�^�O�������̎��v�A�ȂǔC�ӂ̏������w�肵��
�^�C���ɐF������U�鎖���ł��܂��B
(������xJavaScript�̒m�����K�v�ł�)
�Y�����\�b�h�̕��ɂ������������Ă���̂ł�������䗗���������B
*/    

var playerSymbolColor = '#ff8800'//�~�j�}�b�v��ɕ\��������v���C���[�V���{���̐F

//==============================================================================


//�}�b�v�̃X�v���C�g�Ƀ~�j�}�b�v��ǉ�����
var SMcreateUpperLayer = Spriteset_Picture.prototype.createUpperLayer;
Spriteset_Picture.prototype.createUpperLayer = function() {
    SMcreateUpperLayer.call(this);
    this.createMiniMap();
};

Spriteset_Picture.prototype.createMiniMap = function(){
    if(typeof $gameVariables._data[v1] !== "object"){
        //�z��^�ɂ���
        $gameVariables._data[v1] = [];
    }
    this._miniMapSprites = new Sprite();
    this._miniMapSprites.back = new Sprite();//�w�i�̃r�b�g�}�b�v
    this._miniMapSprites.back.bitmap = new Bitmap(minimapWidth,minimapWidth);
    var ark = minimapWidth / 2;
    this._miniMapSprites.back.bitmap.drawCircle(ark,ark,ark,minimapTileColors[0]);
    this._miniMapSprites.addChild(this._miniMapSprites.back);
	this._miniMapSprites.miniMap = new Sprite_MiniMap();//�}�b�v�{�̂̃r�b�g�}�b�v
    this._miniMapSprites.addChild(this._miniMapSprites.miniMap);
    this.addChild(this._miniMapSprites);
    if(frameImg.length > 0){//�t���[�������ݒ肳��Ă鎞
        this._miniMapFrame = new Sprite();//�t���[���̃r�b�g�}�b�v
        this._miniMapFrame.bitmap = ImageManager.loadSystem(frameImg);
        this.addChild(this._miniMapFrame);
        this._miniMapFrame.x = minimapX + minimapWidth / 2;
        this._miniMapFrame.y = minimapY + minimapWidth / 2;
        this._miniMapFrame.anchor.x = 0.5;
        this._miniMapFrame.anchor.y = 0.5;
    }
    //�\���ʒu���̐ݒ�
    this._miniMapSprites.x = minimapX;
    this._miniMapSprites.y = minimapY;
    this._miniMapSprites.opacity = minimapOpacity;
};

var SMupdate = Spriteset_Picture.prototype.update;
Spriteset_Picture.prototype.update = function() {
    SMupdate.call(this);
    this.updateMiniMap();
};

//�\���A��\���̐؂�ւ�
Spriteset_Picture.prototype.updateMiniMap = function() {
    this._miniMapSprites.visible = $gameVariables.value(v2) > 0;
    if(frameImg.length > 0){
        this._miniMapFrame.visible = $gameVariables.value(v2) > 0;
    }    
};


//�~�j�}�b�v�N���X
function Sprite_MiniMap() {
    this.initialize.apply(this, arguments);
}

Sprite_MiniMap.prototype = Object.create(Sprite.prototype);
Sprite_MiniMap.prototype.constructor = Sprite_MiniMap;

Sprite_MiniMap.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this.waitCount = 0;
    this.tileSize = 12;
    this.createBitmap();
    if(typeof $gameVariables._data[v1][$gameMap.mapId()] !== "object" || $gameVariables._data[v1][$gameMap.mapId()] === null){
        //���݂̃}�b�v�̃f�[�^���Ȃ��ꍇ������(�z��^�ɂ���)
        $gameVariables._data[v1][$gameMap.mapId()] = [];
    }
    this.checkNearTiles();
    this.drawMap();
};

Sprite_MiniMap.prototype.createBitmap = function() {
    this.bitmap = new Bitmap(minimapWidth,minimapWidth);
    //���L�����̃V���{��
    this.symbol_p = new Sprite();
    this.symbol_p.bitmap = new Bitmap(100,100);
    var r = this.tileSize / 2;
    this.symbol_p.bitmap.drawCircle(r,r,r,playerSymbolColor);
    this.addChild(this.symbol_p);
    //�~�`�̃}�X�N��������
    var maskSize = minimapWidth / 2;
    var context = this.bitmap._context;
    context.beginPath();
    context.arc(maskSize, maskSize, maskSize, 0, Math.PI * 2, false);
    context.closePath();
    context.clip();

};

//�~�j�}�b�v�̍X�V��2�t���[����1��ɂ��邱�ƂŎ኱�y�ʉ����܂����B(ver.1.10)
//�s�v�ȏꍇ�́���̕t�����s���폜���ĉ������B
Sprite_MiniMap.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.waitCount += 1;//��
    if(this.waitCount >= 2){//��
        if(this.visible == true){
            this.updateTileSize();
            this.checkNearTiles();
            this.updateFrame();
            this.updateSymbols();
        }
        if(flag_mapComplete == true){
            this.checkAllTiles();
            this.drawMap();
            frag_mapComplete = false;
        }
        this.waitCount = 0;//��
    }//��
};

//�^�C���T�C�Y���ύX���ꂽ��A���L�����̃V���{���ƃ}�b�v��`�悵����
Sprite_MiniMap.prototype.updateTileSize = function() {
    if($gameVariables.value(v2) > 0 && this.tileSize != $gameVariables.value(v2)){
        this.tileSize = $gameVariables.value(v2);
        this.symbol_p.bitmap.clear();
        var r = this.tileSize / 2;
        this.symbol_p.bitmap.drawCircle(r,r,r,playerSymbolColor);
        this.bitmap.clear();
        this.drawMap();
    }
}


//�v���C���[�̎��͂̒n�`�𒲂ׂ�
Sprite_MiniMap.prototype.checkNearTiles = function() {
    for(var i = -radius; i <= radius; i ++){
        var y = Math.floor(Math.sqrt(radius * radius - i * i));
        for(var j = -y; j <= y; j ++){
            var i2 = $gameMap.roundX(i + Math.floor($gamePlayer.x));
            var j2 = $gameMap.roundY(j + Math.floor($gamePlayer.y));
            if($gameMap.isValid(i2,j2)){
                this.checkTile(i2,j2);
            }
        }
    }
};

Sprite_MiniMap.prototype.checkAllTiles = function() {
    for(var i = 0; i < $gameMap.width(); i ++){
        for(var j = 0; j < $gameMap.height(); j ++){
            this.checkTile(i,j);
        }
    }
};

//==================================================================================================
//�w����W�̒n�`�𒲂ׂĐF�ԍ�������U��
//�}�b�v���ׂ����F�����������ꍇ�A�����ɏ�����ǉ����Ă����Ă��������B

Sprite_MiniMap.prototype.checkTile = function(x,y){
    if($gameVariables._data[v1][$gameMap.mapId()][y * $gameMap.width() + x] != null){
        return;
    }    
    /*������
    if(     �C�ӂ̏���     ){
        setTile(x,y,�F�ԍ�);      //�F�ԍ���minimapTileColors[]�Őݒ肵���F�ɑΉ�
        return;
    }
    */
    if($gameMap.regionId(x,y) == regionWall){//�w��}�X�̃��[�W������regionWall�̒l�������ꍇ
        this.setTile(x,y,0);
        return;
    }
    if($gameMap.isPassable(x,y,2) || $gameMap.isPassable(x,y,4) || 
                $gameMap.isPassable(x,y,6) || $gameMap.isPassable(x,y,8)){//�w��}�X���ʍs�\�̎�
        this.setTile(x,y,1);
        return;
    }
    //�����Y�����Ȃ�������
    this.setTile(x,y,0);
    return;
};

/*�����̏�������
if($gameMap.terrainTag(x,y) == 2)  ���Wx,y�̒n�`�^�O��2�̎�
if($gameMap.isDamageFloor(x,y))�@���Wx,y���_���[�W���̎�
���̑��A�w��}�X�̏��𒲂ׂ郁�\�b�h�� rpg_object.js �� Game_Map�N���X��T���ƌ�����Ǝv���܂�
*/
//==================================================================================================


Sprite_MiniMap.prototype.setTile = function(x,y,No){
    $gameVariables._data[v1][$gameMap.mapId()][y * $gameMap.width() + x] = No;
};

Sprite_MiniMap.prototype.updateFrame = function() {
    if(this._lastX != $gamePlayer._realX || this._lastY != $gamePlayer._realY){
        this.bitmap.clear();
        this.drawMap();
        this._lastX = $gamePlayer._realX;
        this._lastY = $gamePlayer._realY;
    }
};

Sprite_MiniMap.prototype.drawMap = function(){
    var sx = Math.floor($gamePlayer.x - (minimapWidth / this.tileSize) / 2) - 1;
    var ex = Math.floor($gamePlayer.x + (minimapWidth / this.tileSize) / 2) + 2;
    var sy = Math.floor($gamePlayer.y - (minimapWidth / this.tileSize) / 2) - 1;
    var ey = Math.floor($gamePlayer.y + (minimapWidth / this.tileSize) / 2) + 2;

    if(!$gameMap.isLoopHorizontal()){
        sx = sx.clamp(0,$gameMap.width());
        ex = ex.clamp(0,$gameMap.width());
    }
    if(!$gameMap.isLoopVertical()){
        sy = sy.clamp(0,$gameMap.height());
        ey = ey.clamp(0,$gameMap.height());
    }
    for(var i = sx; i < ex; i ++){
        for(var j = sy; j < ey; j ++){
            if(this.drawTile(i,j)){
                this.drawLine(i,j);
            }
        }
    }
}

//�^�C���̕`��
Sprite_MiniMap.prototype.drawTile = function(x,y){
    var x2 = $gameMap.roundX(x);
    var y2 = $gameMap.roundY(y);
    var colorNo = $gameVariables._data[v1][$gameMap.mapId()][y2 * $gameMap.width() + x2];
    if(colorNo > 0){
        var mx = x - $gamePlayer._realX;
        var my = y - $gamePlayer._realY;
        this.bitmap.fillRect(Math.floor(mx * this.tileSize) + Math.floor((minimapWidth - this.tileSize) / 2), Math.floor(my * this.tileSize) + Math.floor((minimapWidth - this.tileSize) / 2), this.tileSize, this.tileSize,minimapTileColors[colorNo]);
        return true;
    }else{
        return false;
    }
};

//�^�C���ƃ^�C���̊Ԃ̎d�؂�
Sprite_MiniMap.prototype.drawLine = function(x,y){
    var x2 = $gameMap.roundX(x);
    var y2 = $gameMap.roundY(y);
    var mx = x - $gamePlayer._realX;
    var my = y - $gamePlayer._realY;
    if(!$gameMap.isPassable(x2,y2,2) || !$gameMap.isPassable(x2,$gameMap.roundY(y2+1),8)){
        console.log(x2,y2);
        this.bitmap.clearRect(Math.floor(mx * this.tileSize) + (minimapWidth - this.tileSize) / 2 - 1, Math.floor((my + 1) * this.tileSize) + (minimapWidth - this.tileSize) / 2 - 1, this.tileSize + 1, 1);
    }
    if(!$gameMap.isPassable(x2,y2,6) || !$gameMap.isPassable($gameMap.roundX(x2+1),y2,4)){
        this.bitmap.clearRect(Math.floor((mx + 1) * this.tileSize) + (minimapWidth - this.tileSize) / 2 - 1, Math.floor(my * this.tileSize) + (minimapWidth - this.tileSize) / 2 - 1, 1, this.tileSize + 1);
    }
};

//���L�����V���{���̈ʒu�X�V(���d�l�ł͒��S�ŌŒ�)
Sprite_MiniMap.prototype.updateSymbols = function() {
    this.symbol_p.x = (minimapWidth - this.tileSize) / 2;
    this.symbol_p.y = (minimapWidth - this.tileSize) / 2;
};


//���݂̃}�b�v������������֐�(ver.1.10)
mapComplete = function(){
    flag_mapComplete = true;
}

})();