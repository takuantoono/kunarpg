(function() {

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x + 24, y, 36, 'right');
};



Window_Selectable.prototype.select = function(index) {
    this._index = index;
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    if($gameVariables.value(510)==1){
      $gameVariables.setValue(509, $gameParty.numItems($dataItems[15]))
    }
    else if($gameVariables.value(510)==2){
      $gameVariables.setValue(509, $gameParty.numItems($dataItems[19]))
    }
    else{
      $gameVariables.setValue(509, $gameParty.numItems($dataItems[15]))
    }
    this.callUpdateHelp();
};

Window_MenuStatus.prototype.numVisibleRows = function() {
    return 5;
};

Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
};



})();
