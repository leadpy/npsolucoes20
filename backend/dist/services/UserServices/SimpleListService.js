'use strict';const a596_0x3ee43f=a596_0x2ec5;(function(_0x5cdc5a,_0x1b4bcb){const _0x4977c2=a596_0x2ec5,_0x4b058e=_0x5cdc5a();while(!![]){try{const _0x814d4c=-parseInt(_0x4977c2(0x1a2))/0x1*(parseInt(_0x4977c2(0x19f))/0x2)+-parseInt(_0x4977c2(0x1a6))/0x3*(parseInt(_0x4977c2(0x1ab))/0x4)+parseInt(_0x4977c2(0x19b))/0x5*(-parseInt(_0x4977c2(0x19e))/0x6)+-parseInt(_0x4977c2(0x1a8))/0x7*(-parseInt(_0x4977c2(0x1a1))/0x8)+parseInt(_0x4977c2(0x1a9))/0x9*(-parseInt(_0x4977c2(0x1aa))/0xa)+-parseInt(_0x4977c2(0x1ac))/0xb+parseInt(_0x4977c2(0x198))/0xc;if(_0x814d4c===_0x1b4bcb)break;else _0x4b058e['push'](_0x4b058e['shift']());}catch(_0x16175b){_0x4b058e['push'](_0x4b058e['shift']());}}}(a596_0x5593,0x399c7));var __importDefault=this&&this[a596_0x3ee43f(0x197)]||function(_0x3ec27b){const _0x1e57ed=a596_0x3ee43f;return _0x3ec27b&&_0x3ec27b[_0x1e57ed(0x19c)]?_0x3ec27b:{'default':_0x3ec27b};};function a596_0x5593(){const _0x183404=['ERR_NO_USER_FOUND','242073xZobSy','email','152215QnAkFb','175392tRhrNQ','140pkKfJn','12kcJGVu','3923018lQJRvF','__importDefault','16609104IPrDtT','name','findAll','25paYsGm','__esModule','../../models/Queue','341724uAgcty','118zlfriI','defineProperty','56WhQWsW','2441CQAPVx','queues','default'];a596_0x5593=function(){return _0x183404;};return a596_0x5593();}function a596_0x2ec5(_0x403368,_0x3187d0){const _0x559348=a596_0x5593();return a596_0x2ec5=function(_0x2ec5c8,_0x40cf54){_0x2ec5c8=_0x2ec5c8-0x197;let _0x1a7d61=_0x559348[_0x2ec5c8];return _0x1a7d61;},a596_0x2ec5(_0x403368,_0x3187d0);}Object[a596_0x3ee43f(0x1a0)](exports,'__esModule',{'value':!![]});const User_1=__importDefault(require('../../models/User')),AppError_1=__importDefault(require('../../errors/AppError')),Queue_1=__importDefault(require(a596_0x3ee43f(0x19d))),SimpleListService=async({companyId:_0x2e1d2c})=>{const _0x25f321=a596_0x3ee43f,_0x43d6f1=await User_1[_0x25f321(0x1a4)][_0x25f321(0x19a)]({'where':{'companyId':_0x2e1d2c},'attributes':[_0x25f321(0x199),'id',_0x25f321(0x1a7)],'include':[{'model':Queue_1[_0x25f321(0x1a4)],'as':_0x25f321(0x1a3)}],'order':[['id','ASC']]});if(!_0x43d6f1)throw new AppError_1['default'](_0x25f321(0x1a5),0x194);return _0x43d6f1;};exports[a596_0x3ee43f(0x1a4)]=SimpleListService;