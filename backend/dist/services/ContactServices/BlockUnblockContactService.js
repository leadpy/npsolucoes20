'use strict';const a448_0x441e24=a448_0x402e;(function(_0xef90d4,_0x2d9f08){const _0x1dd9ec=a448_0x402e,_0x1053cb=_0xef90d4();while(!![]){try{const _0x190d81=-parseInt(_0x1dd9ec(0x12c))/0x1+-parseInt(_0x1dd9ec(0x12a))/0x2+parseInt(_0x1dd9ec(0x130))/0x3+-parseInt(_0x1dd9ec(0x128))/0x4*(parseInt(_0x1dd9ec(0x12d))/0x5)+-parseInt(_0x1dd9ec(0x12e))/0x6*(-parseInt(_0x1dd9ec(0x131))/0x7)+parseInt(_0x1dd9ec(0x137))/0x8*(-parseInt(_0x1dd9ec(0x12b))/0x9)+-parseInt(_0x1dd9ec(0x13c))/0xa*(-parseInt(_0x1dd9ec(0x141))/0xb);if(_0x190d81===_0x2d9f08)break;else _0x1053cb['push'](_0x1053cb['shift']());}catch(_0x62920b){_0x1053cb['push'](_0x1053cb['shift']());}}}(a448_0x1c05,0x3d787));var __importDefault=this&&this[a448_0x441e24(0x135)]||function(_0x597ce6){return _0x597ce6&&_0x597ce6['__esModule']?_0x597ce6:{'default':_0x597ce6};};function a448_0x1c05(){const _0xc81e20=['__esModule','default','../../models/Contact','../../libs/wbot','1898588yPEyLl','number','454376HcysRE','7713nxZVzO','272254qUMGfR','5jvThLP','10482OZswNR','parseInt','347919pQbrmw','1225kAuBUg','updateBlockStatus','exec','unblock','__importDefault','log','3280jrGRLx','findByPk','companyId','defineProperty','getWbot','11555440MhRYLg','isInteger','contact.number','@g.us','active','11IVgXIX','includes','../../helpers/GetDefaultWhatsApp','update','Não\x20consegui\x20bloquear\x20o\x20contato'];a448_0x1c05=function(){return _0xc81e20;};return a448_0x1c05();}Object[a448_0x441e24(0x13a)](exports,a448_0x441e24(0x124),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),GetDefaultWhatsApp_1=__importDefault(require(a448_0x441e24(0x121))),wbot_1=require(a448_0x441e24(0x127)),Contact_1=__importDefault(require(a448_0x441e24(0x126)));function formatBRNumber(_0x79f582){const _0x2c543c=a448_0x441e24,_0x21ae19=new RegExp(/^(\d{2})(\d{2})\d{1}(\d{8})$/);if(_0x21ae19['test'](_0x79f582)){const _0x20cd63=_0x21ae19[_0x2c543c(0x133)](_0x79f582);if(_0x20cd63&&_0x20cd63[0x1]==='55'&&Number[_0x2c543c(0x13d)](Number[_0x2c543c(0x12f)](_0x20cd63[0x2]))){const _0x1b873c=Number[_0x2c543c(0x12f)](_0x20cd63[0x2]);if(_0x1b873c<0x1f)return _0x20cd63[0x0];else{if(_0x1b873c>=0x1f)return _0x20cd63[0x1]+_0x20cd63[0x2]+_0x20cd63[0x3];}}}else return _0x79f582;}function createJid(_0x174f51){const _0x293619=a448_0x441e24;if(_0x174f51[_0x293619(0x120)](_0x293619(0x13f))||_0x174f51[_0x293619(0x120)]('@s.whatsapp.net'))return formatBRNumber(_0x174f51);return _0x174f51[_0x293619(0x120)]('-')?_0x174f51+_0x293619(0x13f):formatBRNumber(_0x174f51)+'@s.whatsapp.net';}function a448_0x402e(_0x3a1738,_0x3c4f98){const _0x1c0573=a448_0x1c05();return a448_0x402e=function(_0x402ec7,_0x47b441){_0x402ec7=_0x402ec7-0x120;let _0xd28931=_0x1c0573[_0x402ec7];return _0xd28931;},a448_0x402e(_0x3a1738,_0x3c4f98);}const BlockUnblockContactService=async({contactId:_0x38fe87,companyId:_0x17726d,active:_0x2521eb})=>{const _0x2f345e=a448_0x441e24,_0xe0a2d6=await Contact_1['default'][_0x2f345e(0x138)](_0x38fe87);if(!_0xe0a2d6)throw new AppError_1[(_0x2f345e(0x125))]('ERR_NO_CONTACT_FOUND',0x194);console[_0x2f345e(0x136)](_0x2f345e(0x140),_0x2521eb),console['log'](_0x2f345e(0x139),_0x17726d),console[_0x2f345e(0x136)](_0x2f345e(0x13e),_0xe0a2d6['number']);if(_0x2521eb)try{const _0x2c6e2f=await(0x0,GetDefaultWhatsApp_1[_0x2f345e(0x125)])(Number(_0x17726d)),_0x5e02fc=(0x0,wbot_1[_0x2f345e(0x13b)])(_0x2c6e2f['id']),_0x446f87=createJid(_0xe0a2d6[_0x2f345e(0x129)]);await _0x5e02fc['updateBlockStatus'](_0x446f87,_0x2f345e(0x134)),await _0xe0a2d6[_0x2f345e(0x122)]({'active':!![]});}catch(_0x2177f7){console[_0x2f345e(0x136)]('Não\x20consegui\x20desbloquear\x20o\x20contato');}if(!_0x2521eb)try{const _0x1fa0f7=await(0x0,GetDefaultWhatsApp_1[_0x2f345e(0x125)])(Number(_0x17726d)),_0x374830=(0x0,wbot_1['getWbot'])(_0x1fa0f7['id']),_0x4c5555=createJid(_0xe0a2d6['number']);await _0x374830[_0x2f345e(0x132)](_0x4c5555,'block'),await _0xe0a2d6[_0x2f345e(0x122)]({'active':![]});}catch(_0x2abbbf){console[_0x2f345e(0x136)](_0x2f345e(0x123));}return _0xe0a2d6;};exports[a448_0x441e24(0x125)]=BlockUnblockContactService;