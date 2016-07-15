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



})();
