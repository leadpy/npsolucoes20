'use strict';const a540_0x19e25d=a540_0x27d6;(function(_0x31bf07,_0x3bf454){const _0x43bcb1=a540_0x27d6,_0x55f894=_0x31bf07();while(!![]){try{const _0x158bc9=-parseInt(_0x43bcb1(0x1a0))/0x1*(-parseInt(_0x43bcb1(0x19d))/0x2)+parseInt(_0x43bcb1(0x1b1))/0x3+-parseInt(_0x43bcb1(0x19f))/0x4+-parseInt(_0x43bcb1(0x1af))/0x5+-parseInt(_0x43bcb1(0x19c))/0x6+-parseInt(_0x43bcb1(0x1ad))/0x7+parseInt(_0x43bcb1(0x1a8))/0x8;if(_0x158bc9===_0x3bf454)break;else _0x55f894['push'](_0x55f894['shift']());}catch(_0xb1207a){_0x55f894['push'](_0x55f894['shift']());}}}(a540_0xb31f,0x78b54));var __importDefault=this&&this[a540_0x19e25d(0x199)]||function(_0x2bc83c){const _0x4cbed4=a540_0x19e25d;return _0x2bc83c&&_0x2bc83c[_0x4cbed4(0x1b0)]?_0x2bc83c:{'default':_0x2bc83c};};Object[a540_0x19e25d(0x1a7)](exports,a540_0x19e25d(0x1b0),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),GetTicketWbot_1=__importDefault(require(a540_0x19e25d(0x1b3))),GetWbotMessage_1=__importDefault(require(a540_0x19e25d(0x19a))),Message_1=__importDefault(require(a540_0x19e25d(0x19e))),Ticket_1=__importDefault(require(a540_0x19e25d(0x1ae))),DeleteWhatsAppMessage=async _0x4bb43=>{const _0x15e01d=a540_0x19e25d,_0x49fac8=await Message_1[_0x15e01d(0x1ab)]['findOne']({'where':{'id':_0x4bb43},'include':[{'model':Ticket_1[_0x15e01d(0x1ab)],'as':_0x15e01d(0x1a5),'include':[_0x15e01d(0x1b2)]}]});if(!_0x49fac8)throw new AppError_1[(_0x15e01d(0x1ab))](_0x15e01d(0x1ac));const {ticket:_0x2bd9d6}=_0x49fac8;if(!_0x49fac8[_0x15e01d(0x1a9)]){const _0x164fbb=await(0x0,GetWbotMessage_1[_0x15e01d(0x1ab)])(_0x2bd9d6,_0x4bb43);try{const _0x29a330=await(0x0,GetTicketWbot_1[_0x15e01d(0x1ab)])(_0x2bd9d6),_0x54f722=_0x164fbb,_0x140c8b=JSON[_0x15e01d(0x1a6)](_0x54f722['dataJson']);await _0x29a330[_0x15e01d(0x1aa)](_0x54f722[_0x15e01d(0x1a4)],{'delete':_0x140c8b[_0x15e01d(0x1a1)]});}catch(_0x289e16){console[_0x15e01d(0x1a2)](_0x289e16);throw new AppError_1[(_0x15e01d(0x1ab))](_0x15e01d(0x1a3));}}return!_0x49fac8['isPrivate']&&await _0x49fac8[_0x15e01d(0x19b)]({'isDeleted':!![]}),_0x49fac8;};exports[a540_0x19e25d(0x1ab)]=DeleteWhatsAppMessage;function a540_0x27d6(_0x6abe52,_0x5084db){const _0xb31f32=a540_0xb31f();return a540_0x27d6=function(_0x27d6b1,_0xe112e1){_0x27d6b1=_0x27d6b1-0x199;let _0x1fa1c9=_0xb31f32[_0x27d6b1];return _0x1fa1c9;},a540_0x27d6(_0x6abe52,_0x5084db);}function a540_0xb31f(){const _0x52d2a4=['defineProperty','8658104mmlxOg','isPrivate','sendMessage','default','No\x20message\x20found\x20with\x20this\x20ID.','4481358mrNSfM','../../models/Ticket','806165DSgiAb','__esModule','741462FMVOrX','contact','../../helpers/GetTicketWbot','__importDefault','../../helpers/GetWbotMessage','update','883032jFCZzQ','162qLOqYu','../../models/Message','2375084iRNIHU','8733OGprEX','key','log','ERR_DELETE_WAPP_MSG','remoteJid','ticket','parse'];a540_0xb31f=function(){return _0x52d2a4;};return a540_0xb31f();}