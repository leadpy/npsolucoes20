'use strict';function a348_0x3593(_0x34a2be,_0x21c6d7){const _0x2c5b13=a348_0x2c5b();return a348_0x3593=function(_0x3593f1,_0x522116){_0x3593f1=_0x3593f1-0x67;let _0x5ccdc8=_0x2c5b13[_0x3593f1];return _0x5ccdc8;},a348_0x3593(_0x34a2be,_0x21c6d7);}const a348_0xb4e44a=a348_0x3593;(function(_0x358f7d,_0x713a21){const _0x57e22f=a348_0x3593,_0x4d091f=_0x358f7d();while(!![]){try{const _0x4822ca=-parseInt(_0x57e22f(0x75))/0x1+parseInt(_0x57e22f(0x7a))/0x2+-parseInt(_0x57e22f(0x6e))/0x3+-parseInt(_0x57e22f(0x71))/0x4+-parseInt(_0x57e22f(0x70))/0x5+parseInt(_0x57e22f(0x6b))/0x6*(parseInt(_0x57e22f(0x6a))/0x7)+parseInt(_0x57e22f(0x6d))/0x8;if(_0x4822ca===_0x713a21)break;else _0x4d091f['push'](_0x4d091f['shift']());}catch(_0x418e7d){_0x4d091f['push'](_0x4d091f['shift']());}}}(a348_0x2c5b,0xba4be));function a348_0x2c5b(){const _0x3b5a42=['count','sortBy','../../models/User','182190trOYOs','../../models/ChatMessage','__esModule','default','findAndCountAll','length','9827517QBfGUb','6LbRbXR','defineProperty','24283184FQuzJh','2723451aURdVu','createdAt','4751105SyQrie','5309812SWCLCf','__importDefault','../../models/ChatUser','lodash','581863ZqwDbz','UNAUTHORIZED'];a348_0x2c5b=function(){return _0x3b5a42;};return a348_0x2c5b();}var __importDefault=this&&this[a348_0xb4e44a(0x72)]||function(_0x72ad5c){return _0x72ad5c&&_0x72ad5c['__esModule']?_0x72ad5c:{'default':_0x72ad5c};};Object[a348_0xb4e44a(0x6c)](exports,a348_0xb4e44a(0x7c),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),ChatMessage_1=__importDefault(require(a348_0xb4e44a(0x7b))),ChatUser_1=__importDefault(require(a348_0xb4e44a(0x73))),User_1=__importDefault(require(a348_0xb4e44a(0x79))),lodash_1=require(a348_0xb4e44a(0x74)),FindMessages=async({chatId:_0x23a6e7,ownerId:_0x2fae6c,pageNumber:pageNumber='1'})=>{const _0x26072c=a348_0xb4e44a,_0x3db0a9=await ChatUser_1[_0x26072c(0x67)][_0x26072c(0x77)]({'where':{'chatId':_0x23a6e7,'userId':_0x2fae6c}});if(_0x3db0a9===0x0)throw new AppError_1[(_0x26072c(0x67))](_0x26072c(0x76),0x190);const _0x36ada5=0x14,_0x1b2e13=_0x36ada5*(+pageNumber-0x1),{count:_0x21c05b,rows:_0x73523b}=await ChatMessage_1[_0x26072c(0x67)][_0x26072c(0x68)]({'where':{'chatId':_0x23a6e7},'include':[{'model':User_1[_0x26072c(0x67)],'as':'sender','attributes':['id','name']}],'limit':_0x36ada5,'offset':_0x1b2e13,'order':[[_0x26072c(0x6f),'DESC']]}),_0x7ca1ed=_0x21c05b>_0x1b2e13+_0x73523b[_0x26072c(0x69)],_0x5989a7=(0x0,lodash_1[_0x26072c(0x78)])(_0x73523b,['id','ASC']);return{'records':_0x5989a7,'count':_0x21c05b,'hasMore':_0x7ca1ed};};exports[a348_0xb4e44a(0x67)]=FindMessages;