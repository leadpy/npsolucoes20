'use strict';function a380_0x15fa(_0x33926b,_0x1d442b){const _0x560194=a380_0x5601();return a380_0x15fa=function(_0x15fa35,_0xb493cd){_0x15fa35=_0x15fa35-0xff;let _0x3f12e0=_0x560194[_0x15fa35];return _0x3f12e0;},a380_0x15fa(_0x33926b,_0x1d442b);}const a380_0x3fd955=a380_0x15fa;function a380_0x5601(){const _0x3ec35d=['DESC','__esModule','4263930RAnung','chatId','sequelize','length','1398MDtarH','34FhZmIt','150sYPjTh','5018314VbukrK','map','findAll','531858PbTLzD','9304MpKZNd','default','../../models/User','findAndCountAll','createdAt','3708TUiDUL','4229920aLGBMi','defineProperty','../../models/ChatUser','226259bzjtHb','owner','20oSxzKQ','../../models/Chat'];a380_0x5601=function(){return _0x3ec35d;};return a380_0x5601();}(function(_0x3cab14,_0x12ccde){const _0x2e6261=a380_0x15fa,_0x17eee9=_0x3cab14();while(!![]){try{const _0x26d382=-parseInt(_0x2e6261(0x10a))/0x1*(-parseInt(_0x2e6261(0x110))/0x2)+parseInt(_0x2e6261(0x109))/0x3*(parseInt(_0x2e6261(0x115))/0x4)+-parseInt(_0x2e6261(0x101))/0x5*(-parseInt(_0x2e6261(0x10f))/0x6)+-parseInt(_0x2e6261(0x10c))/0x7+-parseInt(_0x2e6261(0x116))/0x8+parseInt(_0x2e6261(0x105))/0x9+parseInt(_0x2e6261(0x10b))/0xa*(parseInt(_0x2e6261(0xff))/0xb);if(_0x26d382===_0x12ccde)break;else _0x17eee9['push'](_0x17eee9['shift']());}catch(_0x9dba28){_0x17eee9['push'](_0x17eee9['shift']());}}}(a380_0x5601,0x75869));var __importDefault=this&&this['__importDefault']||function(_0x159e1b){const _0x1a4dcc=a380_0x15fa;return _0x159e1b&&_0x159e1b[_0x1a4dcc(0x104)]?_0x159e1b:{'default':_0x159e1b};};Object[a380_0x3fd955(0x117)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a380_0x3fd955(0x107)),Chat_1=__importDefault(require(a380_0x3fd955(0x102))),ChatUser_1=__importDefault(require(a380_0x3fd955(0x118))),User_1=__importDefault(require(a380_0x3fd955(0x112))),ListService=async({ownerId:_0x2c621f,pageNumber:pageNumber='1'})=>{const _0x14acb7=a380_0x3fd955,_0xbb0a98=await ChatUser_1[_0x14acb7(0x111)][_0x14acb7(0x10e)]({'where':{'userId':_0x2c621f}}),_0x74a623=_0xbb0a98[_0x14acb7(0x10d)](_0x47f864=>_0x47f864[_0x14acb7(0x106)]),_0x55f85c=0x14,_0x36233f=_0x55f85c*(+pageNumber-0x1),{count:_0x35bd7d,rows:_0x501357}=await Chat_1[_0x14acb7(0x111)][_0x14acb7(0x113)]({'where':{'id':{[sequelize_1['Op']['in']]:_0x74a623}},'include':[{'model':User_1['default'],'as':_0x14acb7(0x100)},{'model':ChatUser_1[_0x14acb7(0x111)],'as':'users','include':[{'model':User_1['default'],'as':'user'}]}],'limit':_0x55f85c,'offset':_0x36233f,'order':[[_0x14acb7(0x114),_0x14acb7(0x103)]]}),_0x5695a5=_0x35bd7d>_0x36233f+_0x501357[_0x14acb7(0x108)];return{'records':_0x501357,'count':_0x35bd7d,'hasMore':_0x5695a5};};exports['default']=ListService;