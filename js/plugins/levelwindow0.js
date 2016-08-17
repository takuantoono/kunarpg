(function() {



ImageManager.loadPicture = function(filename, hue) {
if ( filename.match(/3d/)) {
    return this.loadBitmap('img/pictures/textures/', filename, hue, true);
}else{
    return this.loadBitmap('img/pictures/', filename, hue, true);
}
};

BattleManager.displayStartMessages = function() {
    if (this._preemptive) {
        $gameMessage.add(TextManager.preemptive.format($gameActors.actor(6)._name));
    } else if (this._surprise) {
        $gameMessage.add(TextManager.surprise.format($gameActors.actor(6)._name));
    }
};

BattleManager.displayVictoryMessage = function() {
    $gameMessage.add(TextManager.victory.format($gameActors.actor(6)._name));
};

BattleManager.displayDefeatMessage = function() {
    $gameMessage.add(TextManager.defeat.format($gameActors.actor(6)._name));
};

BattleManager.displayEscapeSuccessMessage = function() {
    $gameMessage.add(TextManager.escapeStart.format($gameActors.actor(6)._name));
};

BattleManager.displayEscapeFailureMessage = function() {
    $gameMessage.add(TextManager.escapeStart.format($gameActors.actor(6)._name));
    $gameMessage.add('\\.' + TextManager.escapeFailure);
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

Scene_Skill.prototype.useItem = function() {
    Scene_ItemBase.prototype.useItem.call(this);
    this._statusWindow.refresh();
    $gameVariables.setValue(586, $gameParty.numItems($dataItems[4]))
    this._helpWindow.refresh();
    this._itemWindow.refresh();
};


Game_Party.prototype.ratePreemptive = function(troopAgi) {
    //var rate = this.agility() >= troopAgi ? 0.05 : 0.03;
    if (this.hasRaisePreemptive()) {
        var rate = this.agility() * 4 / troopAgi / 10
    }
    else {
        var rate = this.agility() / troopAgi / 10
    }
    return rate;
};

Game_Party.prototype.rateSurprise = function(troopAgi) {
    //var rate = this.agility() >= troopAgi ? 0.03 : 0.05;
    if (this.hasCancelSurprise()) {
        var rate = troopAgi / 5 / this.agility() / 10
    }
    else {
        var rate = troopAgi / this.agility() / 10
    }
    if($gameSwitches.value(104)) var rate = 1
    return rate;
};

Game_Player.prototype.moveByInput = function() {
    if (!this.isMoving() && this.canMove()) {
        var direction = this.getInputDirection();
        if (direction > 0) {

            $gameTemp.clearDestination();
        } else if ($gameTemp.isDestinationValid()){
        //    var x = $gameTemp.destinationX();
        //    var y = $gameTemp.destinationY();
        //    direction = this.findDirectionTo(x, y);
        }
        if (direction == 8) {
            $gameSwitches.setValue(86,true)
        }
	if (direction == 2) {
            $gameSwitches.setValue(85,true)
        }
        if (direction == 4) {
            $gameSwitches.setValue(83,true)
        }
        if (direction == 6) {
            $gameSwitches.setValue(84,true)
        }
    }
};

Game_Action.prototype.itemEffectCommonEvent = function(target, effect) {
$gameVariables.setValue(421,this.subject()._actorId)
};

Game_Action.prototype.applyGlobal = function() {
    this.item().effects.forEach(function(effect) {
        if (effect.code === Game_Action.EFFECT_COMMON_EVENT) {
$gameVariables.setValue(421,this.subject()._actorId)
            $gameTemp.reserveCommonEvent(effect.dataId);
        }
    }, this);
};

Scene_Map.prototype.updateScene = function() {
    this.checkGameover();
    if (!SceneManager.isSceneChanging()) {
        this.updateTransferPlayer();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateEncounter();
    }
    if (!SceneManager.isSceneChanging()) {
        //this.updateCallMenu();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateCallDebug();
    }
};

Game_Event.prototype.stopCountThreshold = function() {
if($gameSwitches.value(31)){
return 0
}
else{
    return 240 * (5 - this.moveFrequency());
}
};

})();
