'use strict';const a256_0xad8a55=a256_0x41a7;(function(_0x16b15f,_0x561bb9){const _0x492319=a256_0x41a7,_0x2c8827=_0x16b15f();while(!![]){try{const _0x3edbc4=parseInt(_0x492319(0xd4))/0x1+-parseInt(_0x492319(0xd8))/0x2+-parseInt(_0x492319(0xcd))/0x3*(parseInt(_0x492319(0xcc))/0x4)+-parseInt(_0x492319(0xd9))/0x5*(parseInt(_0x492319(0xc8))/0x6)+-parseInt(_0x492319(0xc7))/0x7*(-parseInt(_0x492319(0xc9))/0x8)+parseInt(_0x492319(0xca))/0x9*(-parseInt(_0x492319(0xcb))/0xa)+-parseInt(_0x492319(0xe2))/0xb*(-parseInt(_0x492319(0xda))/0xc);if(_0x3edbc4===_0x561bb9)break;else _0x2c8827['push'](_0x2c8827['shift']());}catch(_0x3eb4ce){_0x2c8827['push'](_0x2c8827['shift']());}}}(a256_0x1f44,0xdd888));function a256_0x41a7(_0x51235a,_0x3c7103){const _0x1f4477=a256_0x1f44();return a256_0x41a7=function(_0x41a76d,_0x48ad2f){_0x41a76d=_0x41a76d-0xc7;let _0x75eba0=_0x1f4477[_0x41a76d];return _0x75eba0;},a256_0x41a7(_0x51235a,_0x3c7103);}var __importDefault=this&&this[a256_0xad8a55(0xdf)]||function(_0x294d96){const _0x5abfd9=a256_0xad8a55;return _0x294d96&&_0x294d96[_0x5abfd9(0xd7)]?_0x294d96:{'default':_0x294d96};};Object['defineProperty'](exports,a256_0xad8a55(0xd7),{'value':!![]}),exports['useMultiFileAuthState']=void 0x0;const baileys_1=require(a256_0xad8a55(0xcf)),baileys_2=require(a256_0xad8a55(0xcf)),baileys_3=require('@whiskeysockets/baileys'),cache_1=__importDefault(require(a256_0xad8a55(0xd6))),useMultiFileAuthState=async _0x5d6592=>{const _0x34d519=a256_0xad8a55,_0x477f50=async(_0x392b48,_0x32d0e8)=>{const _0x4a3bd1=a256_0x41a7;try{await cache_1[_0x4a3bd1(0xdd)][_0x4a3bd1(0xe1)](_0x4a3bd1(0xdc)+_0x5d6592['id']+':'+_0x32d0e8,JSON[_0x4a3bd1(0xd5)](_0x392b48,baileys_3[_0x4a3bd1(0xdb)]['replacer']));}catch(_0x2de974){return console['log']('writeData\x20error',_0x2de974),null;}},_0x66068d=async _0x1e32ab=>{const _0x169d22=a256_0x41a7;try{const _0x53cafc=await cache_1[_0x169d22(0xdd)]['get'](_0x169d22(0xdc)+_0x5d6592['id']+':'+_0x1e32ab);return JSON['parse'](_0x53cafc,baileys_3[_0x169d22(0xdb)]['reviver']);}catch(_0x69192c){return null;}},_0x42c146=async _0x4f7753=>{const _0x1629b3=a256_0x41a7;try{await cache_1['default']['del'](_0x1629b3(0xdc)+_0x5d6592['id']+':'+_0x4f7753);}catch{}},_0x26ad4e=await _0x66068d(_0x34d519(0xce))||(0x0,baileys_2['initAuthCreds'])();return{'state':{'creds':_0x26ad4e,'keys':{'get':async(_0x45fc70,_0x157926)=>{const _0x54161c=_0x34d519,_0x1c373e={};return await Promise[_0x54161c(0xde)](_0x157926[_0x54161c(0xd0)](async _0x2f54ac=>{const _0x1a19b3=_0x54161c;let _0x36a1c7=await _0x66068d(_0x45fc70+'-'+_0x2f54ac);_0x45fc70==='app-state-sync-key'&&_0x36a1c7&&(_0x36a1c7=baileys_1['proto']['Message'][_0x1a19b3(0xd3)][_0x1a19b3(0xd1)](_0x36a1c7)),_0x1c373e[_0x2f54ac]=_0x36a1c7;})),_0x1c373e;},'set':async _0x58ef16=>{const _0x473910=_0x34d519,_0x176ab9=[];for(const _0x5e5225 in _0x58ef16){for(const _0x22a200 in _0x58ef16[_0x5e5225]){const _0x5cab00=_0x58ef16[_0x5e5225][_0x22a200],_0x104935=_0x5e5225+'-'+_0x22a200;_0x176ab9[_0x473910(0xd2)](_0x5cab00?_0x477f50(_0x5cab00,_0x104935):_0x42c146(_0x104935));}}await Promise['all'](_0x176ab9);}}},'saveCreds':()=>{const _0x58791c=_0x34d519;return _0x477f50(_0x26ad4e,_0x58791c(0xce));}};};function a256_0x1f44(){const _0x22caf3=['set','1395592cnwVFs','22162pxSndc','6hUlyBl','1336WpWncJ','36fHzQLq','2900620YmvJaA','4789324lvzDoG','3SnaaaA','creds','@whiskeysockets/baileys','map','fromObject','push','AppStateSyncKeyData','177811EyVdBM','stringify','../libs/cache','__esModule','93498tcNRyR','8542265rhEKKa','408TAlZJP','BufferJSON','sessions:','default','all','__importDefault','useMultiFileAuthState'];a256_0x1f44=function(){return _0x22caf3;};return a256_0x1f44();}exports[a256_0xad8a55(0xe0)]=useMultiFileAuthState;