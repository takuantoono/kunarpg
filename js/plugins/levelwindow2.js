(function() {



Game_Party.prototype.swapOrder = function(index1, index2) {
    var temp = this._actors[index1];
    this._actors[index1] = this._actors[index2];
    this._actors[index2] = temp;
if(index1!=index2){
this.formationState(index1);
this.formationState(index2);
    $gamePlayer.refresh();
}
};



Game_Party.prototype.formationState = function(index) {

$gameParty.members()[index].eraseState(65)
$gameParty.members()[index].eraseState(66)
$gameParty.members()[index].eraseState(67)
$gameParty.members()[index].eraseState(68)
$gameParty.members()[index].eraseState(69)
$gameParty.members()[index].eraseState(70)
$gameParty.members()[index].eraseState(71)
$gameParty.members()[index].eraseState(73)

if(index==0)$gameParty.members()[index].addNewState(65)
if(index==1)$gameParty.members()[index].addNewState(66)
if(index==2)$gameParty.members()[index].addNewState(67)
if(index==3)$gameParty.members()[index].addNewState(68)
if(index==4)$gameParty.members()[index].addNewState(69)

var condition = false;
if(index==2){
var user = $gameParty.members()[index]
var weapon = $dataWeapons[user._equips[0]._itemId]
var weapon1 = $dataWeapons[user._equips[1]._itemId]
if(weapon!=null){
if(weapon.note.match(/<(?:middle)>/i)) condition = true;
}
if(user._equips[1]._dataClass=="weapon"){
if(weapon1.note.match(/<(?:middle)>/i)) condition = true;
}
}
if(index==2&&!condition)$gameParty.members()[index].addNewState(73)

var condition = false;
if(index==3){
var user = $gameParty.members()[index]
var weapon = $dataWeapons[user._equips[0]._itemId]
var weapon1 = $dataWeapons[user._equips[1]._itemId]
if(weapon!=null){
if(weapon.note.match(/<(?:middle)>/i)) condition = true;
if(weapon.note.match(/<(?:back)>/i)) condition = true;
}
if(user._equips[1]._dataClass=="weapon"){
if(weapon1.note.match(/<(?:middle)>/i)) condition = true;
if(weapon.note.match(/<(?:back)>/i)) condition = true;
}
}
if(index==3&&!condition)$gameParty.members()[index].addNewState(70)

var condition = false;
if(index==4){
var user = $gameParty.members()[index]
var weapon = $dataWeapons[user._equips[0]._itemId]
var weapon1 = $dataWeapons[user._equips[1]._itemId]
if(weapon!=null){
if(weapon.note.match(/<(?:back)>/i)) condition = true;
}
if(user._equips[1]._dataClass=="weapon"){
if(weapon1.note.match(/<(?:back)>/i)) condition = true;
}
}
if(index==4&&!condition)$gameParty.members()[index].addNewState(71)

}


})();
