'use strict';const a411_0x3e0fd8=a411_0x1785;(function(_0x39f198,_0x1f59a6){const _0x50e805=a411_0x1785,_0x1eca83=_0x39f198();while(!![]){try{const _0x5daa0d=-parseInt(_0x50e805(0x7b))/0x1*(parseInt(_0x50e805(0x8f))/0x2)+parseInt(_0x50e805(0x8c))/0x3+-parseInt(_0x50e805(0x98))/0x4+parseInt(_0x50e805(0x97))/0x5*(-parseInt(_0x50e805(0x81))/0x6)+parseInt(_0x50e805(0x89))/0x7*(-parseInt(_0x50e805(0x75))/0x8)+-parseInt(_0x50e805(0x92))/0x9+parseInt(_0x50e805(0x85))/0xa*(parseInt(_0x50e805(0x8b))/0xb);if(_0x5daa0d===_0x1f59a6)break;else _0x1eca83['push'](_0x1eca83['shift']());}catch(_0xf60424){_0x1eca83['push'](_0x1eca83['shift']());}}}(a411_0x2d08,0xba367));function a411_0x2d08(){const _0x53f2f7=['isInteger','3eKSVpn','whatsappCompany.id','companyId','parseInt','../../libs/wbot','default','5400nuKOfj','block','../../errors/AppError','active','30KmIiDU','Não\x20consegui\x20desbloquear\x20o\x20contato','number','getWbot','2287726lpouzl','update','22731379guNOKP','851961dItoQB','includes','test','683448yvEtvB','@s.whatsapp.net','../../helpers/GetDefaultWhatsApp','11792475mCHsXX','jid','findByPk','unblock','@g.us','7560PcElmn','4176104qCkaeF','24POAtmz','exec','ERR_NO_CONTACT_FOUND','log','__esModule'];a411_0x2d08=function(){return _0x53f2f7;};return a411_0x2d08();}var __importDefault=this&&this['__importDefault']||function(_0x29b270){return _0x29b270&&_0x29b270['__esModule']?_0x29b270:{'default':_0x29b270};};Object['defineProperty'](exports,a411_0x3e0fd8(0x79),{'value':!![]});const AppError_1=__importDefault(require(a411_0x3e0fd8(0x83))),GetDefaultWhatsApp_1=__importDefault(require(a411_0x3e0fd8(0x91))),wbot_1=require(a411_0x3e0fd8(0x7f)),Contact_1=__importDefault(require('../../models/Contact'));function formatBRNumber(_0x6eda8c){const _0x2382ea=a411_0x3e0fd8,_0x517582=new RegExp(/^(\d{2})(\d{2})\d{1}(\d{8})$/);if(_0x517582[_0x2382ea(0x8e)](_0x6eda8c)){const _0x48aefa=_0x517582[_0x2382ea(0x76)](_0x6eda8c);if(_0x48aefa&&_0x48aefa[0x1]==='55'&&Number[_0x2382ea(0x7a)](Number['parseInt'](_0x48aefa[0x2]))){const _0x16cf7e=Number[_0x2382ea(0x7e)](_0x48aefa[0x2]);if(_0x16cf7e<0x1f)return _0x48aefa[0x0];else{if(_0x16cf7e>=0x1f)return _0x48aefa[0x1]+_0x48aefa[0x2]+_0x48aefa[0x3];}}}else return _0x6eda8c;}function createJid(_0x1878dc){const _0x35d536=a411_0x3e0fd8;if(_0x1878dc[_0x35d536(0x8d)](_0x35d536(0x96))||_0x1878dc[_0x35d536(0x8d)](_0x35d536(0x90)))return formatBRNumber(_0x1878dc);return _0x1878dc[_0x35d536(0x8d)]('-')?_0x1878dc+_0x35d536(0x96):formatBRNumber(_0x1878dc)+'@s.whatsapp.net';}function a411_0x1785(_0x4471d7,_0x4b20f9){const _0x2d084d=a411_0x2d08();return a411_0x1785=function(_0x1785d8,_0x10782f){_0x1785d8=_0x1785d8-0x75;let _0x17c314=_0x2d084d[_0x1785d8];return _0x17c314;},a411_0x1785(_0x4471d7,_0x4b20f9);}const BlockUnblockContactService=async({contactId:_0x35bd7f,companyId:_0x515ee6,active:_0x2a57c0})=>{const _0x4f61e7=a411_0x3e0fd8,_0x4a4cb9=await Contact_1[_0x4f61e7(0x80)][_0x4f61e7(0x94)](_0x35bd7f);if(!_0x4a4cb9)throw new AppError_1[(_0x4f61e7(0x80))](_0x4f61e7(0x77),0x194);console['log'](_0x4f61e7(0x84),_0x2a57c0),console[_0x4f61e7(0x78)](_0x4f61e7(0x7d),_0x515ee6),console[_0x4f61e7(0x78)]('contact.number',_0x4a4cb9[_0x4f61e7(0x87)]);if(_0x2a57c0)try{const _0x23e626=await(0x0,GetDefaultWhatsApp_1[_0x4f61e7(0x80)])(Number(_0x515ee6));console['log']('whatsappCompany.id',_0x23e626['id']);const _0x42a57e=(0x0,wbot_1[_0x4f61e7(0x88)])(_0x23e626['id']),_0x206739=createJid(_0x4a4cb9[_0x4f61e7(0x87)]);console[_0x4f61e7(0x78)](_0x4f61e7(0x93),_0x206739);const _0x379183=await _0x42a57e['updateBlockStatus'](_0x206739,_0x4f61e7(0x95));console[_0x4f61e7(0x78)](_0x379183),await _0x4a4cb9[_0x4f61e7(0x8a)]({'active':!![]});}catch(_0x41768a){console[_0x4f61e7(0x78)](_0x4f61e7(0x86));}if(!_0x2a57c0)try{const _0x5183f4=await(0x0,GetDefaultWhatsApp_1[_0x4f61e7(0x80)])(Number(_0x515ee6));console['log'](_0x4f61e7(0x7c),_0x5183f4['id']);const _0x29d3d3=(0x0,wbot_1[_0x4f61e7(0x88)])(_0x5183f4['id']),_0x1a074c=createJid(_0x4a4cb9[_0x4f61e7(0x87)]);console[_0x4f61e7(0x78)](_0x4f61e7(0x93),_0x1a074c);const _0x3bfda3=await _0x29d3d3['updateBlockStatus'](_0x1a074c,_0x4f61e7(0x82));console[_0x4f61e7(0x78)](_0x4f61e7(0x82),_0x3bfda3),await _0x4a4cb9[_0x4f61e7(0x8a)]({'active':![]});}catch(_0x3787d7){console[_0x4f61e7(0x78)]('Não\x20consegui\x20bloquear\x20o\x20contato');}return _0x4a4cb9;};exports[a411_0x3e0fd8(0x80)]=BlockUnblockContactService;