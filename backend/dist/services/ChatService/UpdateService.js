'use strict';const a383_0x452806=a383_0x38dc;(function(_0x5933f1,_0x27a2f3){const _0x20e7d9=a383_0x38dc,_0x2e7216=_0x5933f1();while(!![]){try{const _0x3438a2=parseInt(_0x20e7d9(0x1da))/0x1+parseInt(_0x20e7d9(0x1dd))/0x2+parseInt(_0x20e7d9(0x1d2))/0x3+parseInt(_0x20e7d9(0x1db))/0x4*(-parseInt(_0x20e7d9(0x1e2))/0x5)+parseInt(_0x20e7d9(0x1d8))/0x6*(-parseInt(_0x20e7d9(0x1d1))/0x7)+parseInt(_0x20e7d9(0x1e1))/0x8+-parseInt(_0x20e7d9(0x1d6))/0x9;if(_0x3438a2===_0x27a2f3)break;else _0x2e7216['push'](_0x2e7216['shift']());}catch(_0x52b4b6){_0x2e7216['push'](_0x2e7216['shift']());}}}(a383_0x820e,0x1976f));function a383_0x38dc(_0x180cdf,_0x4ca9a9){const _0x820ee8=a383_0x820e();return a383_0x38dc=function(_0x38dc48,_0x1074e4){_0x38dc48=_0x38dc48-0x1d0;let _0x37187c=_0x820ee8[_0x38dc48];return _0x37187c;},a383_0x38dc(_0x180cdf,_0x4ca9a9);}var __importDefault=this&&this[a383_0x452806(0x1e6)]||function(_0x44eba7){const _0x5d6a07=a383_0x452806;return _0x44eba7&&_0x44eba7[_0x5d6a07(0x1de)]?_0x44eba7:{'default':_0x44eba7};};Object[a383_0x452806(0x1e4)](exports,'__esModule',{'value':!![]});const Chat_1=__importDefault(require(a383_0x452806(0x1e0))),ChatUser_1=__importDefault(require(a383_0x452806(0x1dc))),User_1=__importDefault(require(a383_0x452806(0x1e7)));async function UpdateService(_0x1dc451){const _0x24d747=a383_0x452806,{users:_0x3e200b}=_0x1dc451,_0x2256bd=await Chat_1[_0x24d747(0x1d4)][_0x24d747(0x1d5)](_0x1dc451['id'],{'include':[{'model':ChatUser_1['default'],'as':_0x24d747(0x1d9)}]}),{ownerId:_0x450060}=_0x2256bd;await _0x2256bd[_0x24d747(0x1e3)]({'title':_0x1dc451[_0x24d747(0x1e5)]});if(Array[_0x24d747(0x1d3)](_0x3e200b)){await ChatUser_1[_0x24d747(0x1d4)][_0x24d747(0x1d0)]({'where':{'chatId':_0x2256bd['id']}}),await ChatUser_1[_0x24d747(0x1d4)][_0x24d747(0x1df)]({'chatId':_0x2256bd['id'],'userId':_0x450060});for(let _0x33e478 of _0x3e200b){_0x33e478['id']!==_0x450060&&await ChatUser_1[_0x24d747(0x1d4)]['create']({'chatId':_0x2256bd['id'],'userId':_0x33e478['id']});}}return await _0x2256bd[_0x24d747(0x1d7)]({'include':[{'model':ChatUser_1[_0x24d747(0x1d4)],'as':_0x24d747(0x1d9),'include':[{'model':User_1['default'],'as':'user'}]},{'model':User_1['default'],'as':'owner'}]}),_0x2256bd;}exports[a383_0x452806(0x1d4)]=UpdateService;function a383_0x820e(){const _0x1e95c9=['157113tMEaNH','904DMYHmh','../../models/ChatUser','327382QioyZA','__esModule','create','../../models/Chat','773840vkjnDJ','2825XyAHfR','update','defineProperty','title','__importDefault','../../models/User','destroy','1108135DilDqM','407319HUAHPA','isArray','default','findByPk','1467081zrBmnM','reload','6vPlmKc','users'];a383_0x820e=function(){return _0x1e95c9;};return a383_0x820e();}