'use strict';const a456_0x34950e=a456_0x4e5d;(function(_0x1966a8,_0x40b19e){const _0x3940fe=a456_0x4e5d,_0x407601=_0x1966a8();while(!![]){try{const _0x3d06f3=-parseInt(_0x3940fe(0x157))/0x1+parseInt(_0x3940fe(0x14f))/0x2*(-parseInt(_0x3940fe(0x146))/0x3)+parseInt(_0x3940fe(0x145))/0x4*(parseInt(_0x3940fe(0x152))/0x5)+parseInt(_0x3940fe(0x164))/0x6+-parseInt(_0x3940fe(0x168))/0x7*(-parseInt(_0x3940fe(0x14d))/0x8)+-parseInt(_0x3940fe(0x14e))/0x9*(parseInt(_0x3940fe(0x160))/0xa)+parseInt(_0x3940fe(0x153))/0xb*(parseInt(_0x3940fe(0x16a))/0xc);if(_0x3d06f3===_0x40b19e)break;else _0x407601['push'](_0x407601['shift']());}catch(_0x39e388){_0x407601['push'](_0x407601['shift']());}}}(a456_0x344a,0xd0ba9));var __importDefault=this&&this[a456_0x34950e(0x14b)]||function(_0x1a3759){return _0x1a3759&&_0x1a3759['__esModule']?_0x1a3759:{'default':_0x1a3759};};Object[a456_0x34950e(0x15c)](exports,a456_0x34950e(0x14c),{'value':!![]}),exports[a456_0x34950e(0x158)]=void 0x0;const lodash_1=require(a456_0x34950e(0x15d)),xlsx_1=__importDefault(require(a456_0x34950e(0x156))),lodash_2=require(a456_0x34950e(0x15d)),Contact_1=__importDefault(require(a456_0x34950e(0x14a)));function a456_0x344a(){const _0x49b9b4=['defineProperty','lodash','Email','path','5937180jjvGza','número','E-mail','has','2791152rAFzNc','replace','e-mail','sheet_to_json','7IxHpLZ','numero','1560XttylZ','utils','8XUnIBw','1799607uMDGfF','default','Sheets','nome','../../models/Contact','__importDefault','__esModule','1871752GZmKpr','18OkSpPX','2QDUCwx','email','Nome','1576405DVhCGH','229889rABmUX','Numero','Número','xlsx','1404335vbbRiT','ImportContactsService','head','map','values'];a456_0x344a=function(){return _0x49b9b4;};return a456_0x344a();}function a456_0x4e5d(_0x597012,_0x3ab76a){const _0x344aa7=a456_0x344a();return a456_0x4e5d=function(_0x4e5d17,_0xb17b26){_0x4e5d17=_0x4e5d17-0x144;let _0x239f45=_0x344aa7[_0x4e5d17];return _0x239f45;},a456_0x4e5d(_0x597012,_0x3ab76a);}async function ImportContactsService(_0x29ebf7,_0x79c6f7){const _0x5d5423=a456_0x34950e,_0x18b3ac=xlsx_1[_0x5d5423(0x147)]['readFile'](_0x79c6f7?.[_0x5d5423(0x15f)]),_0x4af722=(0x0,lodash_1[_0x5d5423(0x159)])(Object[_0x5d5423(0x15b)](_0x18b3ac[_0x5d5423(0x148)])),_0x26124d=xlsx_1['default'][_0x5d5423(0x144)][_0x5d5423(0x167)](_0x4af722,{'header':0x0}),_0x347007=_0x26124d[_0x5d5423(0x15a)](_0x465d2c=>{const _0x51d4fa=_0x5d5423;let _0x394b94='',_0x4f9c5c='',_0x59328e='';return((0x0,lodash_2[_0x51d4fa(0x163)])(_0x465d2c,_0x51d4fa(0x149))||(0x0,lodash_2[_0x51d4fa(0x163)])(_0x465d2c,_0x51d4fa(0x151)))&&(_0x394b94=_0x465d2c[_0x51d4fa(0x149)]||_0x465d2c[_0x51d4fa(0x151)]),((0x0,lodash_2['has'])(_0x465d2c,'numero')||(0x0,lodash_2[_0x51d4fa(0x163)])(_0x465d2c,_0x51d4fa(0x161))||(0x0,lodash_2[_0x51d4fa(0x163)])(_0x465d2c,_0x51d4fa(0x154))||(0x0,lodash_2['has'])(_0x465d2c,_0x51d4fa(0x155)))&&(_0x4f9c5c=_0x465d2c[_0x51d4fa(0x169)]||_0x465d2c[_0x51d4fa(0x161)]||_0x465d2c[_0x51d4fa(0x154)]||_0x465d2c[_0x51d4fa(0x155)],_0x4f9c5c=(''+_0x4f9c5c)[_0x51d4fa(0x165)](/\D/g,'')),((0x0,lodash_2['has'])(_0x465d2c,'email')||(0x0,lodash_2[_0x51d4fa(0x163)])(_0x465d2c,_0x51d4fa(0x166))||(0x0,lodash_2[_0x51d4fa(0x163)])(_0x465d2c,_0x51d4fa(0x15e))||(0x0,lodash_2[_0x51d4fa(0x163)])(_0x465d2c,_0x51d4fa(0x162)))&&(_0x59328e=_0x465d2c[_0x51d4fa(0x150)]||_0x465d2c[_0x51d4fa(0x166)]||_0x465d2c[_0x51d4fa(0x15e)]||_0x465d2c[_0x51d4fa(0x162)]),{'name':_0x394b94,'number':_0x4f9c5c,'email':_0x59328e,'companyId':_0x29ebf7};}),_0x36573a=[];for(const _0x21c801 of _0x347007){const [_0x3fd19c,_0x2e20e1]=await Contact_1['default']['findOrCreate']({'where':{'number':''+_0x21c801['number'],'companyId':_0x21c801['companyId']},'defaults':_0x21c801});_0x2e20e1&&_0x36573a['push'](_0x3fd19c);}return _0x36573a;}exports[a456_0x34950e(0x158)]=ImportContactsService;