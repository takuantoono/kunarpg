//=============================================================================
// StartUpFullScreen.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2016/03/06 ����
// ----------------------------------------------------------------------------
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc Start up full screen
 * @author triacontane
 *
 * @param Shutdown
 * @desc Command name for shutdown.
 * @default Shutdown
 *
 * @param StartUpFullScreen
 * @desc Command name for full screen option.
 * @default Full Screen
 *
 * @help Add option start up full screen.
 * This plugin is using only local execute.
 *
 * This plugin is released under the MIT License.
 */
/*:ja
 * @plugindesc �t���X�N���[���ŋN���v���O�C��
 * @author �g���A�R���^��
 *
 * @param �V���b�g�_�E��
 * @desc �^�C�g����ʂɒǉ�����V���b�g�_�E���̍��ږ��ł��B
 * ���[�J�����ł̎��s���̂ݕ\������܂��B
 * @default �V���b�g�_�E��
 *
 * @param �t���X�N���[���ŋN��
 * @desc �I�v�V������ʂɒǉ�����S��ʂŋN���̍��ږ��ł��B
 * ���[�J�����ł̎��s���̂ݕ\������܂��B
 * @default �t���X�N���[���ŋN��
 *
 * @help �I�v�V������ʂɁu�t���X�N���[���ŋN���v��ǉ����܂��B
 * �L���ȏꍇ�A�Q�[�����t���X�N���[���ŋN�����܂��B
 * �܂��^�C�g����ʂɃV���b�g�_�E����ǉ����܂��B
 *
 * ���̃v���O�C���̓��[�J�����Ŏ��s�����ꍇ�̂ݗL���ł��B
 *
 * ���̃v���O�C���ɂ̓v���O�C���R�}���h�͂���܂���B
 *
 * ���p�K��F
 *  ��҂ɖ��f�ŉ��ρA�Ĕz�z���\�ŁA���p�`�ԁi���p�A18�֗��p���j
 *  �ɂ��Ă������͂���܂���B
 *  ���̃v���O�C���͂������Ȃ��̂��̂ł��B
 */

function Scene_Terminate() {
    this.initialize.apply(this, arguments);
}

(function () {
    'use strict';
    // Nw.js�����ȊO�ł͈�؂̋@�\�𖳌�
    if (!Utils.isNwjs()) {
        return;
    }

    var pluginName = 'StartUpFullScreen';

    var getParamString = function(paramNames) {
        var value = getParamOther(paramNames);
        return value == null ? '' : value;
    };

    var getParamOther = function(paramNames) {
        if (!Array.isArray(paramNames)) paramNames = [paramNames];
        for (var i = 0; i < paramNames.length; i++) {
            var name = PluginManager.parameters(pluginName)[paramNames[i]];
            if (name) return name;
        }
        return null;
    };

    var paramShutdown          = getParamString(['Shutdown', '�V���b�g�_�E��']);
    var paramStartUpFullScreen = getParamString(['StartUpFullScreen', '�t���X�N���[���ŋN��']);

    //=============================================================================
    // Graphics
    //  private���\�b�h�u_requestFullScreen�v���Ăяo���܂��B
    //=============================================================================
    Graphics.requestFullScreen = function() {
        if (this._isFullScreen()) {
            this._requestFullScreen();
        }
    };

    //=============================================================================
    // Scene_Boot
    //  �t���X�N���[���ŋN�����鏈����ǉ����܂��B
    //=============================================================================
    var _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        _Scene_Boot_start.apply(this, arguments);
        if (ConfigManager.startUpFullScreen) Graphics.requestFullScreen();
    };

    //=============================================================================
    // Scene_Title
    //  �V���b�g�_�E���̏�����ǉ���`���܂��B
    //=============================================================================
    var _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.apply(this, arguments);
        if (paramShutdown) this._commandWindow.setHandler('shutdown',  this.commandShutdown.bind(this));
    };

    Scene_Title.prototype.commandShutdown = function() {
        this._commandWindow.close();
        this.fadeOutAll();
        SceneManager.goto(Scene_Terminate);
    };

    //=============================================================================
    // Window_TitleCommand
    //  �V���b�g�_�E���̑I������ǉ���`���܂��B
    //=============================================================================
    var _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        _Window_TitleCommand_makeCommandList.apply(this, arguments);
        if (paramShutdown) this.addCommand(paramShutdown, 'shutdown');
    };

    var _Window_TitleCommand_updatePlacement = Window_TitleCommand.prototype.updatePlacement;
    Window_TitleCommand.prototype.updatePlacement = function() {
        _Window_TitleCommand_updatePlacement.apply(this, arguments);
        if (paramShutdown) this.y += this.height / 8;
    };

    //=============================================================================
    // ConfigManager
    //  �I�v�V�����Ɂu�t���X�N���[���ŋN���v���ڂ�ǉ����܂��B
    //=============================================================================
    ConfigManager.startUpFullScreen = false;

    var _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        _ConfigManager_applyData.apply(this, arguments);
        this.startUpFullScreen = this.readFlag(config, 'startUpFullScreen');
    };

    var _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        var config = _ConfigManager_makeData.apply(this, arguments);
        config.startUpFullScreen = this.startUpFullScreen;
        return config;
    };

    //=============================================================================
    // Window_Options
    //  �I�v�V�����Ɂu�t���X�N���[���ŋN���v���ڂ�ǉ����܂��B
    //=============================================================================
    var _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function() {
        _Window_Options_addGeneralOptions.apply(this, arguments);
        this.addCommand(paramStartUpFullScreen, 'startUpFullScreen');
    };

    //=============================================================================
    // Scene_Terminate
    //  �Q�[�����I�����܂��B
    //=============================================================================
    Scene_Terminate.prototype = Object.create(Scene_Base.prototype);
    Scene_Terminate.prototype.constructor = Scene_Terminate;

    Scene_Terminate.prototype.start = function() {
        SceneManager.terminate();
    };
})();