'use strict';function a418_0x502e(){const _0x3b8878=['26514kAQdGF','isArray','user','owner','../../models/User','findByPk','120612yRbhyE','users','170705ZwfTYb','2609892UMSgNg','../../models/Chat','147DsYDmZ','create','26735DHbMWd','update','default','4112520cBETco','172ZUGnCj','reload','8MxSXtc','__importDefault','../../models/ChatUser','37464KEPCwV'];a418_0x502e=function(){return _0x3b8878;};return a418_0x502e();}const a418_0xac355d=a418_0x43ec;(function(_0x150cd2,_0x434800){const _0xef3d96=a418_0x43ec,_0x37eb60=_0x150cd2();while(!![]){try{const _0x283f18=parseInt(_0xef3d96(0x104))/0x1+parseInt(_0xef3d96(0xfb))/0x2+-parseInt(_0xef3d96(0x102))/0x3+-parseInt(_0xef3d96(0xf6))/0x4*(-parseInt(_0xef3d96(0x109))/0x5)+-parseInt(_0xef3d96(0xfc))/0x6*(parseInt(_0xef3d96(0x107))/0x7)+-parseInt(_0xef3d96(0xf8))/0x8*(-parseInt(_0xef3d96(0x105))/0x9)+-parseInt(_0xef3d96(0xf5))/0xa;if(_0x283f18===_0x434800)break;else _0x37eb60['push'](_0x37eb60['shift']());}catch(_0x215a90){_0x37eb60['push'](_0x37eb60['shift']());}}}(a418_0x502e,0x284e3));var __importDefault=this&&this[a418_0xac355d(0xf9)]||function(_0x4ae59e){return _0x4ae59e&&_0x4ae59e['__esModule']?_0x4ae59e:{'default':_0x4ae59e};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const Chat_1=__importDefault(require(a418_0xac355d(0x106))),ChatUser_1=__importDefault(require(a418_0xac355d(0xfa))),User_1=__importDefault(require(a418_0xac355d(0x100)));async function UpdateService(_0x27bbc4){const _0x388bad=a418_0xac355d,{users:_0x1b5abf}=_0x27bbc4,_0x443114=await Chat_1[_0x388bad(0x10b)][_0x388bad(0x101)](_0x27bbc4['id'],{'include':[{'model':ChatUser_1['default'],'as':_0x388bad(0x103)}]}),{ownerId:_0x5e2946}=_0x443114;await _0x443114[_0x388bad(0x10a)]({'title':_0x27bbc4['title']});if(Array[_0x388bad(0xfd)](_0x1b5abf)){await ChatUser_1['default']['destroy']({'where':{'chatId':_0x443114['id']}}),await ChatUser_1['default'][_0x388bad(0x108)]({'chatId':_0x443114['id'],'userId':_0x5e2946});for(let _0x5013c9 of _0x1b5abf){_0x5013c9['id']!==_0x5e2946&&await ChatUser_1[_0x388bad(0x10b)]['create']({'chatId':_0x443114['id'],'userId':_0x5013c9['id']});}}return await _0x443114[_0x388bad(0xf7)]({'include':[{'model':ChatUser_1['default'],'as':_0x388bad(0x103),'include':[{'model':User_1['default'],'as':_0x388bad(0xfe)}]},{'model':User_1[_0x388bad(0x10b)],'as':_0x388bad(0xff)}]}),_0x443114;}function a418_0x43ec(_0x5caa9b,_0x524d4e){const _0x502edf=a418_0x502e();return a418_0x43ec=function(_0x43ec9c,_0x4ee530){_0x43ec9c=_0x43ec9c-0xf5;let _0x5b00e9=_0x502edf[_0x43ec9c];return _0x5b00e9;},a418_0x43ec(_0x5caa9b,_0x524d4e);}exports[a418_0xac355d(0x10b)]=UpdateService;