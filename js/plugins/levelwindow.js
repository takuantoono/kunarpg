(function() {

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x + 24, y, 36, 'right');
};


var BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
BattleManager.updateBattleEnd = function() {
BattleManager_updateBattleEnd.call(this);

var num = $gameVariables.value(15) - $gameTroop.turnCount() / 2
$gameVariables.setValue(15,num)
var num = $gameVariables.value(16) - $gameTroop.turnCount() - 1
$gameVariables.setValue(16,num)
var num = $gameVariables.value(20) + $gameTroop.turnCount() + 2
$gameVariables.setValue(20,num)
$gameSwitches.setValue(33,true)
};


Game_Actor.prototype.displayLevelUp = function(newSkills) {
num = $gameVariables.value(434)
$gameSwitches.setValue(17,true)
if(this._actorId==1){
$gameVariables.setValue(435,num)
$gameSwitches.setValue(18,true)
}
if(this._actorId==2){
$gameVariables.setValue(436,num)
$gameSwitches.setValue(19,true)
}
if(this._actorId==3){
$gameVariables.setValue(437,num)
$gameSwitches.setValue(20,true)
}
if(this._actorId==4){
$gameVariables.setValue(438,num)
$gameSwitches.setValue(21,true)
}
if(this._actorId==5){
$gameVariables.setValue(439,num)
$gameSwitches.setValue(22,true)
}
num += 1
$gameVariables.setValue(434,num)
};



BattleManager.displayDropItems = function() {
    var items = this._rewards.items;
    if (items.length > 0) {
$gameSwitches.setValue(23,true)
 //$gameMessage.newPage();
        items.forEach(function(item) {
num = $gameVariables.value(441)
num += 1
$gameVariables.setValue(441,num)
id = $gameVariables.value(441) +441
$gameVariables.setValue(id,item.name)
        });
    }
};



})();
