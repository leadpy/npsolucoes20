'use strict';function a581_0x35fe(_0x2b5cef,_0x22b9ae){var _0x364837=a581_0x3648();return a581_0x35fe=function(_0x35fe1b,_0x201b9d){_0x35fe1b=_0x35fe1b-0x189;var _0x4f075f=_0x364837[_0x35fe1b];return _0x4f075f;},a581_0x35fe(_0x2b5cef,_0x22b9ae);}function a581_0x3648(){var _0x2dab5=['__esModule','2193417UWlwnK','2973558aNCDZT','required','673252jYjmtc','24803plEhKm','getOwnPropertyDescriptor','validate','yup','__importDefault','hasOwnProperty','__createBinding','7714MwSnBX','get','2625908TkETeB','__importStar','1057092rgHtVr','defineProperty','create','message','default','4072FdscyT','prototype','ERR_TICKETNOTE_INVALID_NAME','5lFMjif','call','__setModuleDefault','min','object','../../errors/AppError','writable'];a581_0x3648=function(){return _0x2dab5;};return a581_0x3648();}var a581_0x418a74=a581_0x35fe;(function(_0x17682e,_0x3606b2){var _0x4e078f=a581_0x35fe,_0x3e850c=_0x17682e();while(!![]){try{var _0xd679de=-parseInt(_0x4e078f(0x19e))/0x1+-parseInt(_0x4e078f(0x19d))/0x2+parseInt(_0x4e078f(0x18a))/0x3+parseInt(_0x4e078f(0x1a7))/0x4*(parseInt(_0x4e078f(0x192))/0x5)+parseInt(_0x4e078f(0x19b))/0x6+parseInt(_0x4e078f(0x1a5))/0x7*(-parseInt(_0x4e078f(0x18f))/0x8)+-parseInt(_0x4e078f(0x19a))/0x9;if(_0xd679de===_0x3606b2)break;else _0x3e850c['push'](_0x3e850c['shift']());}catch(_0x578498){_0x3e850c['push'](_0x3e850c['shift']());}}}(a581_0x3648,0x529c6));var __createBinding=this&&this[a581_0x418a74(0x1a4)]||(Object[a581_0x418a74(0x18c)]?function(_0x50cd1d,_0x3affc2,_0x341c9f,_0xd4c10f){var _0x4ebc8f=a581_0x418a74;if(_0xd4c10f===undefined)_0xd4c10f=_0x341c9f;var _0x92375e=Object[_0x4ebc8f(0x19f)](_0x3affc2,_0x341c9f);(!_0x92375e||(_0x4ebc8f(0x1a6)in _0x92375e?!_0x3affc2[_0x4ebc8f(0x199)]:_0x92375e[_0x4ebc8f(0x198)]||_0x92375e['configurable']))&&(_0x92375e={'enumerable':!![],'get':function(){return _0x3affc2[_0x341c9f];}}),Object[_0x4ebc8f(0x18b)](_0x50cd1d,_0xd4c10f,_0x92375e);}:function(_0x222819,_0x8d71b6,_0x2f31f4,_0x20b3e6){if(_0x20b3e6===undefined)_0x20b3e6=_0x2f31f4;_0x222819[_0x20b3e6]=_0x8d71b6[_0x2f31f4];}),__setModuleDefault=this&&this[a581_0x418a74(0x194)]||(Object['create']?function(_0x33e677,_0x3d15c1){var _0x3b33d2=a581_0x418a74;Object[_0x3b33d2(0x18b)](_0x33e677,_0x3b33d2(0x18e),{'enumerable':!![],'value':_0x3d15c1});}:function(_0x115946,_0x1dbb4c){var _0x368458=a581_0x418a74;_0x115946[_0x368458(0x18e)]=_0x1dbb4c;}),__importStar=this&&this[a581_0x418a74(0x189)]||function(_0x8ef6cd){var _0x5b1444=a581_0x418a74;if(_0x8ef6cd&&_0x8ef6cd[_0x5b1444(0x199)])return _0x8ef6cd;var _0x4245a4={};if(_0x8ef6cd!=null){for(var _0x380072 in _0x8ef6cd)if(_0x380072!==_0x5b1444(0x18e)&&Object[_0x5b1444(0x190)][_0x5b1444(0x1a3)][_0x5b1444(0x193)](_0x8ef6cd,_0x380072))__createBinding(_0x4245a4,_0x8ef6cd,_0x380072);}return __setModuleDefault(_0x4245a4,_0x8ef6cd),_0x4245a4;},__importDefault=this&&this[a581_0x418a74(0x1a2)]||function(_0x516b5a){var _0x19e23b=a581_0x418a74;return _0x516b5a&&_0x516b5a[_0x19e23b(0x199)]?_0x516b5a:{'default':_0x516b5a};};Object[a581_0x418a74(0x18b)](exports,'__esModule',{'value':!![]});const Yup=__importStar(require(a581_0x418a74(0x1a1))),AppError_1=__importDefault(require(a581_0x418a74(0x197))),TicketNote_1=__importDefault(require('../../models/TicketNote')),CreateTicketNoteService=async _0x3161f5=>{var _0x2adcd5=a581_0x418a74;const {note:_0x327136}=_0x3161f5,_0x18ec7b=Yup[_0x2adcd5(0x196)]()['shape']({'note':Yup['string']()[_0x2adcd5(0x195)](0x3,'ERR_TICKETNOTE_INVALID_NAME')[_0x2adcd5(0x19c)](_0x2adcd5(0x191))});try{await _0x18ec7b[_0x2adcd5(0x1a0)]({'note':_0x327136});}catch(_0x3d799a){throw new AppError_1[(_0x2adcd5(0x18e))](_0x3d799a[_0x2adcd5(0x18d)]);}const _0x582ee3=await TicketNote_1[_0x2adcd5(0x18e)][_0x2adcd5(0x18c)](_0x3161f5);return _0x582ee3;};exports[a581_0x418a74(0x18e)]=CreateTicketNoteService;