'use strict';const a227_0x3801ed=a227_0x8721;function a227_0x1095(){const _0x594646=['24IXKwku','959990roWHum','fromObject','3052032TiXQcd','creds','reduce','update','preKeys','default','reviver','parse','82348usbuab','assign','1uLVvap','BufferJSON','1743578quLWvy','87471BvfjRl','@whiskeysockets/baileys','keys','__esModule','appStateSyncKeys','sessions','168EZiEMQ','senderKeys','8528172uXBbPj','AppStateSyncKeyData','stringify','1249720BsfUcq','session','11LMkLRM','448FSYetG','app-state-sync-key'];a227_0x1095=function(){return _0x594646;};return a227_0x1095();}(function(_0x259b19,_0x42ed91){const _0x4a4e49=a227_0x8721,_0x5b1209=_0x259b19();while(!![]){try{const _0x229113=parseInt(_0x4a4e49(0x120))/0x1*(-parseInt(_0x4a4e49(0x122))/0x2)+parseInt(_0x4a4e49(0x116))/0x3+-parseInt(_0x4a4e49(0x133))/0x4*(parseInt(_0x4a4e49(0x114))/0x5)+parseInt(_0x4a4e49(0x129))/0x6*(parseInt(_0x4a4e49(0x11e))/0x7)+parseInt(_0x4a4e49(0x131))/0x8*(parseInt(_0x4a4e49(0x123))/0x9)+parseInt(_0x4a4e49(0x12e))/0xa+-parseInt(_0x4a4e49(0x130))/0xb*(-parseInt(_0x4a4e49(0x12b))/0xc);if(_0x229113===_0x42ed91)break;else _0x5b1209['push'](_0x5b1209['shift']());}catch(_0x3ee177){_0x5b1209['push'](_0x5b1209['shift']());}}}(a227_0x1095,0xab99c));function a227_0x8721(_0x6e55b1,_0x10ea74){const _0x10954b=a227_0x1095();return a227_0x8721=function(_0x87211c,_0x14945c){_0x87211c=_0x87211c-0x114;let _0x1bed33=_0x10954b[_0x87211c];return _0x1bed33;},a227_0x8721(_0x6e55b1,_0x10ea74);}Object['defineProperty'](exports,a227_0x3801ed(0x126),{'value':!![]});const baileys_1=require(a227_0x3801ed(0x124)),KEY_MAP={'pre-key':a227_0x3801ed(0x11a),'session':a227_0x3801ed(0x128),'sender-key':a227_0x3801ed(0x12a),'app-state-sync-key':a227_0x3801ed(0x127),'app-state-sync-version':'appStateVersions','sender-key-memory':'senderKeyMemory'},authState=async _0x272d81=>{const _0x3323f6=a227_0x3801ed;let _0x242406,_0x1a6357={};const _0x1fdbf1=async()=>{const _0x5bb279=a227_0x8721;try{await _0x272d81[_0x5bb279(0x119)]({'session':JSON[_0x5bb279(0x12d)]({'creds':_0x242406,'keys':_0x1a6357},baileys_1[_0x5bb279(0x121)]['replacer'],0x0)});}catch(_0xab7615){console['log'](_0xab7615);}};if(_0x272d81['session']&&_0x272d81[_0x3323f6(0x12f)]!==null){const _0xaf1c2d=JSON[_0x3323f6(0x11d)](_0x272d81[_0x3323f6(0x12f)],baileys_1[_0x3323f6(0x121)][_0x3323f6(0x11c)]);_0x242406=_0xaf1c2d[_0x3323f6(0x117)],_0x1a6357=_0xaf1c2d[_0x3323f6(0x125)];}else _0x242406=(0x0,baileys_1['initAuthCreds'])(),_0x1a6357={};return{'state':{'creds':_0x242406,'keys':{'get':(_0x143110,_0x502b20)=>{const _0x1a2113=_0x3323f6,_0x6be97f=KEY_MAP[_0x143110];return _0x502b20[_0x1a2113(0x118)]((_0x4d99bd,_0x253231)=>{const _0x1d7a68=_0x1a2113;let _0xcdc816=_0x1a6357[_0x6be97f]?.[_0x253231];return _0xcdc816&&(_0x143110===_0x1d7a68(0x132)&&(_0xcdc816=baileys_1['proto']['Message'][_0x1d7a68(0x12c)][_0x1d7a68(0x115)](_0xcdc816)),_0x4d99bd[_0x253231]=_0xcdc816),_0x4d99bd;},{});},'set':_0x5dce39=>{const _0x2a402d=_0x3323f6;for(const _0x5b28e4 in _0x5dce39){const _0x21de67=KEY_MAP[_0x5b28e4];_0x1a6357[_0x21de67]=_0x1a6357[_0x21de67]||{},Object[_0x2a402d(0x11f)](_0x1a6357[_0x21de67],_0x5dce39[_0x5b28e4]);}_0x1fdbf1();}}},'saveState':_0x1fdbf1};};exports[a227_0x3801ed(0x11b)]=authState;