'use strict';const a602_0xd5e5ad=a602_0x4005;function a602_0x4005(_0x23c275,_0x76b9fa){const _0x28c720=a602_0x28c7();return a602_0x4005=function(_0x400571,_0x1129d3){_0x400571=_0x400571-0x9f;let _0x407c73=_0x28c720[_0x400571];return _0x407c73;},a602_0x4005(_0x23c275,_0x76b9fa);}(function(_0x87f1b,_0x4b0c96){const _0x5a85b8=a602_0x4005,_0x4cd10f=_0x87f1b();while(!![]){try{const _0x4b56ca=parseInt(_0x5a85b8(0xb0))/0x1*(parseInt(_0x5a85b8(0xb4))/0x2)+parseInt(_0x5a85b8(0xb1))/0x3*(parseInt(_0x5a85b8(0xa3))/0x4)+parseInt(_0x5a85b8(0xae))/0x5+parseInt(_0x5a85b8(0xac))/0x6*(-parseInt(_0x5a85b8(0xa2))/0x7)+parseInt(_0x5a85b8(0xa5))/0x8*(parseInt(_0x5a85b8(0xb2))/0x9)+-parseInt(_0x5a85b8(0xa6))/0xa*(-parseInt(_0x5a85b8(0xb6))/0xb)+-parseInt(_0x5a85b8(0xad))/0xc;if(_0x4b56ca===_0x4b0c96)break;else _0x4cd10f['push'](_0x4cd10f['shift']());}catch(_0xba4cb4){_0x4cd10f['push'](_0x4cd10f['shift']());}}}(a602_0x28c7,0x9baec));var __importDefault=this&&this[a602_0xd5e5ad(0xab)]||function(_0x1020e7){const _0x4220d5=a602_0xd5e5ad;return _0x1020e7&&_0x1020e7[_0x4220d5(0xb7)]?_0x1020e7:{'default':_0x1020e7};};function a602_0x28c7(){const _0x136046=['@s.whatsapp.net','getWbot','338051LZrlwz','4nfYyBH','jid','808AMsVve','40JyzkCs','default','onWhatsApp','@g.us','../../errors/AppError','__importDefault','114nadFOD','14616048RRQHBo','2449080ezYJLW','../../helpers/GetDefaultWhatsApp','937KbZTSd','701031FCbLwY','90063YBPrra','defineProperty','1446JvLjSd','groupMetadata','994389PfmmAk','__esModule','Este\x20número\x20não\x20está\x20cadastrado\x20no\x20whatsapp'];a602_0x28c7=function(){return _0x136046;};return a602_0x28c7();}Object[a602_0xd5e5ad(0xb3)](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require(a602_0xd5e5ad(0xaa))),GetDefaultWhatsApp_1=__importDefault(require(a602_0xd5e5ad(0xaf))),wbot_1=require('../../libs/wbot'),CheckContactNumber=async(_0x7af02b,_0x31a977)=>{const _0x3eb0cd=a602_0xd5e5ad,_0x205752=await(0x0,GetDefaultWhatsApp_1[_0x3eb0cd(0xa7)])(_0x31a977),_0x1bee18=(0x0,wbot_1[_0x3eb0cd(0xa1)])(_0x205752['id']),_0x2e31f7=_0x7af02b['endsWith'](_0x3eb0cd(0xa9));let _0xacdb21;if(_0x2e31f7){const _0x58cce0=await _0x1bee18[_0x3eb0cd(0xb5)](_0x7af02b);_0xacdb21=[{'jid':_0x58cce0['id'],'exists':!![]}];}else _0xacdb21=await _0x1bee18[_0x3eb0cd(0xa8)](_0x7af02b+_0x3eb0cd(0xa0));const _0x1ce3c2=_0xacdb21;if(!_0x1ce3c2[0x0]?.['exists'])throw new AppError_1['default'](_0x3eb0cd(0x9f));return _0x2e31f7?_0x7af02b['split']('@')[0x0]:_0x1ce3c2[0x0][_0x3eb0cd(0xa4)]['split']('@')[0x0];};exports[a602_0xd5e5ad(0xa7)]=CheckContactNumber;