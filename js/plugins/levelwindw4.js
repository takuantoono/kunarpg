(function() {


Window_BattleStatus.prototype.numVisibleRows = function() {
if($gameSwitches.value(116)){
    return 6;
}
else{
    return 5;
}
};

})();
