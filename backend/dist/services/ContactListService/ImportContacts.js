'use strict';const a444_0x1c164a=a444_0x11c8;function a444_0x18aa(){const _0x3e9a40=['5zfHieY','número','companyId','e-mail','readFile','values','isWhatsappValid','email','logger','lodash','ImportContacts','default','head','1670NoQeQD','Nome','Email','push','202692ScTDAa','numero','defineProperty','24tIpMGr','Sheets','532176tfJFzC','number','__esModule','sheet_to_json','E-mail','save','193lEoMZH','Número\x20de\x20contato\x20inválido:\x20','5753BjcWkE','utils','contactListId','878InSWAP','352071NEXLHD','nome','14556QyfLzG','Número','xlsx','159047ejsYLG','5238oApMAk','__importDefault','error','../WbotServices/CheckNumber','has','Numero'];a444_0x18aa=function(){return _0x3e9a40;};return a444_0x18aa();}(function(_0x454ca5,_0x38cb34){const _0x4ad716=a444_0x11c8,_0x31d657=_0x454ca5();while(!![]){try{const _0x747da8=parseInt(_0x4ad716(0x110))/0x1*(-parseInt(_0x4ad716(0x115))/0x2)+-parseInt(_0x4ad716(0x116))/0x3+parseInt(_0x4ad716(0x138))/0x4*(-parseInt(_0x4ad716(0x122))/0x5)+-parseInt(_0x4ad716(0x133))/0x6+parseInt(_0x4ad716(0x11b))/0x7*(-parseInt(_0x4ad716(0x136))/0x8)+-parseInt(_0x4ad716(0x11c))/0x9*(parseInt(_0x4ad716(0x12f))/0xa)+parseInt(_0x4ad716(0x112))/0xb*(parseInt(_0x4ad716(0x118))/0xc);if(_0x747da8===_0x38cb34)break;else _0x31d657['push'](_0x31d657['shift']());}catch(_0x1fec13){_0x31d657['push'](_0x31d657['shift']());}}}(a444_0x18aa,0x18724));function a444_0x11c8(_0x5ca311,_0x2cc249){const _0x18aa72=a444_0x18aa();return a444_0x11c8=function(_0x11c857,_0x99b347){_0x11c857=_0x11c857-0x10e;let _0x5e9fbd=_0x18aa72[_0x11c857];return _0x5e9fbd;},a444_0x11c8(_0x5ca311,_0x2cc249);}var __importDefault=this&&this[a444_0x1c164a(0x11d)]||function(_0x564c78){return _0x564c78&&_0x564c78['__esModule']?_0x564c78:{'default':_0x564c78};};Object[a444_0x1c164a(0x135)](exports,a444_0x1c164a(0x13a),{'value':!![]}),exports[a444_0x1c164a(0x12c)]=void 0x0;const lodash_1=require(a444_0x1c164a(0x12b)),xlsx_1=__importDefault(require(a444_0x1c164a(0x11a))),lodash_2=require(a444_0x1c164a(0x12b)),ContactListItem_1=__importDefault(require('../../models/ContactListItem')),CheckNumber_1=__importDefault(require(a444_0x1c164a(0x11f))),logger_1=require('../../utils/logger');async function ImportContacts(_0x81a837,_0x51a5b6,_0x2b771c){const _0x1fb90d=a444_0x1c164a,_0x993a90=xlsx_1['default'][_0x1fb90d(0x126)](_0x2b771c?.['path']),_0x37a0c5=(0x0,lodash_1[_0x1fb90d(0x12e)])(Object[_0x1fb90d(0x127)](_0x993a90[_0x1fb90d(0x137)])),_0x2fe18d=xlsx_1[_0x1fb90d(0x12d)][_0x1fb90d(0x113)][_0x1fb90d(0x13b)](_0x37a0c5,{'header':0x0}),_0x2352ed=_0x2fe18d['map'](_0x2b45ab=>{const _0x25d2c6=_0x1fb90d;let _0x5ae966='',_0x1b9596='',_0x268a70='';return((0x0,lodash_2[_0x25d2c6(0x120)])(_0x2b45ab,_0x25d2c6(0x117))||(0x0,lodash_2[_0x25d2c6(0x120)])(_0x2b45ab,_0x25d2c6(0x130)))&&(_0x5ae966=_0x2b45ab[_0x25d2c6(0x117)]||_0x2b45ab['Nome']),((0x0,lodash_2[_0x25d2c6(0x120)])(_0x2b45ab,_0x25d2c6(0x134))||(0x0,lodash_2['has'])(_0x2b45ab,_0x25d2c6(0x123))||(0x0,lodash_2[_0x25d2c6(0x120)])(_0x2b45ab,_0x25d2c6(0x121))||(0x0,lodash_2[_0x25d2c6(0x120)])(_0x2b45ab,_0x25d2c6(0x119)))&&(_0x1b9596=_0x2b45ab[_0x25d2c6(0x134)]||_0x2b45ab['número']||_0x2b45ab[_0x25d2c6(0x121)]||_0x2b45ab[_0x25d2c6(0x119)],_0x1b9596=(''+_0x1b9596)['replace'](/\D/g,'')),((0x0,lodash_2[_0x25d2c6(0x120)])(_0x2b45ab,_0x25d2c6(0x129))||(0x0,lodash_2[_0x25d2c6(0x120)])(_0x2b45ab,'e-mail')||(0x0,lodash_2['has'])(_0x2b45ab,_0x25d2c6(0x131))||(0x0,lodash_2[_0x25d2c6(0x120)])(_0x2b45ab,'E-mail'))&&(_0x268a70=_0x2b45ab['email']||_0x2b45ab[_0x25d2c6(0x125)]||_0x2b45ab[_0x25d2c6(0x131)]||_0x2b45ab[_0x25d2c6(0x10e)]),{'name':_0x5ae966,'number':_0x1b9596,'email':_0x268a70,'contactListId':_0x81a837,'companyId':_0x51a5b6};}),_0x5136a2=[];for(const _0x31b3a9 of _0x2352ed){const [_0x4ec4c5,_0x3d4d76]=await ContactListItem_1[_0x1fb90d(0x12d)]['findOrCreate']({'where':{'number':''+_0x31b3a9[_0x1fb90d(0x139)],'contactListId':_0x31b3a9[_0x1fb90d(0x114)],'companyId':_0x31b3a9[_0x1fb90d(0x124)]},'defaults':_0x31b3a9});_0x3d4d76&&_0x5136a2[_0x1fb90d(0x132)](_0x4ec4c5);}if(_0x5136a2)for(let _0x517b9 of _0x5136a2){try{const _0x5a5b82=await(0x0,CheckNumber_1[_0x1fb90d(0x12d)])(_0x517b9[_0x1fb90d(0x139)],_0x51a5b6);_0x517b9[_0x1fb90d(0x128)]=_0x5a5b82?!![]:![];const _0x19c978=_0x5a5b82;_0x517b9['number']=_0x19c978,await _0x517b9[_0x1fb90d(0x10f)]();}catch(_0x21eb73){logger_1[_0x1fb90d(0x12a)][_0x1fb90d(0x11e)](_0x1fb90d(0x111)+_0x517b9['number']);}}return _0x5136a2;}exports[a444_0x1c164a(0x12c)]=ImportContacts;