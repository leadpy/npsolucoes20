'use strict';const a418_0xf402e6=a418_0x533f;(function(_0x36b5a1,_0x3bcd7e){const _0x260455=a418_0x533f,_0x16234b=_0x36b5a1();while(!![]){try{const _0x1ac9ba=parseInt(_0x260455(0x128))/0x1+parseInt(_0x260455(0x11f))/0x2+-parseInt(_0x260455(0x127))/0x3*(-parseInt(_0x260455(0x116))/0x4)+parseInt(_0x260455(0x111))/0x5+-parseInt(_0x260455(0x11c))/0x6+-parseInt(_0x260455(0x123))/0x7*(parseInt(_0x260455(0x110))/0x8)+parseInt(_0x260455(0x126))/0x9*(-parseInt(_0x260455(0x11b))/0xa);if(_0x1ac9ba===_0x3bcd7e)break;else _0x16234b['push'](_0x16234b['shift']());}catch(_0x25582f){_0x16234b['push'](_0x16234b['shift']());}}}(a418_0x5685,0xd6357));var __importDefault=this&&this[a418_0xf402e6(0x121)]||function(_0x50f337){return _0x50f337&&_0x50f337['__esModule']?_0x50f337:{'default':_0x50f337};};Object[a418_0xf402e6(0x112)](exports,a418_0xf402e6(0x113),{'value':!![]});function a418_0x533f(_0x5578b2,_0x51991a){const _0x5685fe=a418_0x5685();return a418_0x533f=function(_0x533f70,_0x19eb9e){_0x533f70=_0x533f70-0x110;let _0x2f0574=_0x5685fe[_0x533f70];return _0x2f0574;},a418_0x533f(_0x5578b2,_0x51991a);}function a418_0x5685(){const _0x5315b8=['defineProperty','__esModule','default','length','20lVKWFz','ASC','findAndCountAll','trim','detail','210TVuSEw','8247276jxyHpv','toLowerCase','Sequelize','3417002HGvkGO','sequelize','__importDefault','col','2967769cyAWXf','../../models/Invoices','LIKE','469242InUGzO','537468NvEtFk','926668Ykeqgn','24FOMlmT','5438975VPUnQl'];a418_0x5685=function(){return _0x5315b8;};return a418_0x5685();}const sequelize_1=require(a418_0xf402e6(0x120)),Invoices_1=__importDefault(require(a418_0xf402e6(0x124))),ListInvoicesServices=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0x1c2a32=a418_0xf402e6,_0x3a7251={[sequelize_1['Op']['or']]:[{'name':sequelize_1[_0x1c2a32(0x11e)]['where'](sequelize_1[_0x1c2a32(0x11e)]['fn']('LOWER',sequelize_1[_0x1c2a32(0x11e)][_0x1c2a32(0x122)](_0x1c2a32(0x11a))),_0x1c2a32(0x125),'%'+searchParam[_0x1c2a32(0x11d)]()[_0x1c2a32(0x119)]()+'%')}]},_0xfcc651=0x14,_0x1bf9d2=_0xfcc651*(+pageNumber-0x1),{count:_0x1af9f1,rows:_0x1e4c62}=await Invoices_1[_0x1c2a32(0x114)][_0x1c2a32(0x118)]({'where':_0x3a7251,'limit':_0xfcc651,'offset':_0x1bf9d2,'order':[['id',_0x1c2a32(0x117)]]}),_0x34c8ac=_0x1af9f1>_0x1bf9d2+_0x1e4c62[_0x1c2a32(0x115)];return{'invoices':_0x1e4c62,'count':_0x1af9f1,'hasMore':_0x34c8ac};};exports['default']=ListInvoicesServices;