'use strict';const a537_0x493c8a=a537_0x3f9d;(function(_0x581d9d,_0xd7a5df){const _0x3cd405=a537_0x3f9d,_0xe21fe=_0x581d9d();while(!![]){try{const _0x40ea41=-parseInt(_0x3cd405(0x1f6))/0x1+-parseInt(_0x3cd405(0x1ef))/0x2*(parseInt(_0x3cd405(0x1e8))/0x3)+parseInt(_0x3cd405(0x1ea))/0x4+-parseInt(_0x3cd405(0x1e5))/0x5*(-parseInt(_0x3cd405(0x1f5))/0x6)+-parseInt(_0x3cd405(0x1e9))/0x7+-parseInt(_0x3cd405(0x1ec))/0x8+parseInt(_0x3cd405(0x1e4))/0x9;if(_0x40ea41===_0xd7a5df)break;else _0xe21fe['push'](_0xe21fe['shift']());}catch(_0x1fb800){_0xe21fe['push'](_0xe21fe['shift']());}}}(a537_0x3946,0x46545));var __importDefault=this&&this[a537_0x493c8a(0x1ee)]||function(_0x224cec){const _0x1c7626=a537_0x493c8a;return _0x224cec&&_0x224cec[_0x1c7626(0x1e3)]?_0x224cec:{'default':_0x224cec};};Object[a537_0x493c8a(0x1e7)](exports,a537_0x493c8a(0x1e3),{'value':!![]});function a537_0x3f9d(_0x2245a3,_0x7ea783){const _0x3946ec=a537_0x3946();return a537_0x3f9d=function(_0x3f9dcc,_0x5c1ff4){_0x3f9dcc=_0x3f9dcc-0x1e3;let _0x581152=_0x3946ec[_0x3f9dcc];return _0x581152;},a537_0x3f9d(_0x2245a3,_0x7ea783);}const AppError_1=__importDefault(require(a537_0x493c8a(0x1f0))),GetDefaultWhatsApp_1=__importDefault(require(a537_0x493c8a(0x1f4))),wbot_1=require(a537_0x493c8a(0x1f2)),CheckIsValidContact=async(_0xac6664,_0x4539b4)=>{const _0x3e0003=a537_0x493c8a,_0x14f92f=await(0x0,GetDefaultWhatsApp_1['default'])(_0x4539b4),_0xf64225=(0x0,wbot_1['getWbot'])(_0x14f92f['id']);try{const [_0x17505b]=await _0xf64225['onWhatsApp'](_0xac6664+_0x3e0003(0x1f1));if(!_0x17505b[_0x3e0003(0x1eb)])throw new AppError_1[(_0x3e0003(0x1f7))](_0x3e0003(0x1f3));}catch(_0x1341b5){console[_0x3e0003(0x1f8)](_0x1341b5);if(_0x1341b5[_0x3e0003(0x1e6)]===_0x3e0003(0x1f3))throw new AppError_1[(_0x3e0003(0x1f7))](_0x3e0003(0x1ed));throw new AppError_1[(_0x3e0003(0x1f7))]('ERR_WAPP_CHECK_CONTACT');}};function a537_0x3946(){const _0x287d80=['8389278XmkCwk','49045hwrUzS','message','defineProperty','131277DkicUa','3248672ZmZqYd','771960ORnrcU','exists','1010800waqacR','ERR_WAPP_INVALID_CONTACT','__importDefault','12LnuoeH','../../errors/AppError','@s.whatsapp.net','../../libs/wbot','invalidNumber','../../helpers/GetDefaultWhatsApp','264qtpCQK','415659prgwCD','default','log','__esModule'];a537_0x3946=function(){return _0x287d80;};return a537_0x3946();}exports[a537_0x493c8a(0x1f7)]=CheckIsValidContact;