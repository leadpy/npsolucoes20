'use strict';const a259_0x23b34e=a259_0x148a;(function(_0x973adf,_0x48d1dc){const _0x5b1ec3=a259_0x148a,_0x15dbe5=_0x973adf();while(!![]){try{const _0x984a22=-parseInt(_0x5b1ec3(0x91))/0x1+-parseInt(_0x5b1ec3(0x7f))/0x2+-parseInt(_0x5b1ec3(0x87))/0x3*(-parseInt(_0x5b1ec3(0x84))/0x4)+-parseInt(_0x5b1ec3(0x8b))/0x5*(-parseInt(_0x5b1ec3(0x8e))/0x6)+-parseInt(_0x5b1ec3(0x8c))/0x7+-parseInt(_0x5b1ec3(0x92))/0x8+parseInt(_0x5b1ec3(0x8f))/0x9*(parseInt(_0x5b1ec3(0x86))/0xa);if(_0x984a22===_0x48d1dc)break;else _0x15dbe5['push'](_0x15dbe5['shift']());}catch(_0x1bd824){_0x15dbe5['push'](_0x15dbe5['shift']());}}}(a259_0x2816,0x7cb29));function a259_0x148a(_0x13ea23,_0x2d4008){const _0x28169e=a259_0x2816();return a259_0x148a=function(_0x148a82,_0x2bac79){_0x148a82=_0x148a82-0x7c;let _0x34f0ee=_0x28169e[_0x148a82];return _0x34f0ee;},a259_0x148a(_0x13ea23,_0x2d4008);}var __importDefault=this&&this[a259_0x23b34e(0x83)]||function(_0x17acbb){const _0x7e3e2f=a259_0x23b34e;return _0x17acbb&&_0x17acbb[_0x7e3e2f(0x82)]?_0x17acbb:{'default':_0x17acbb};};Object[a259_0x23b34e(0x8d)](exports,a259_0x23b34e(0x82),{'value':!![]});const sequelize_1=require(a259_0x23b34e(0x88)),AppError_1=__importDefault(require(a259_0x23b34e(0x93))),Ticket_1=__importDefault(require('../models/Ticket')),User_1=__importDefault(require('../models/User')),Queue_1=__importDefault(require('../models/Queue')),CheckContactOpenTickets=async(_0x207975,_0x2ac793)=>{const _0x127d5f=a259_0x23b34e,_0xe70cfe=await Ticket_1[_0x127d5f(0x90)][_0x127d5f(0x7d)]({'where':{'contactId':_0x207975,'status':{[sequelize_1['Op']['or']]:[_0x127d5f(0x85),_0x127d5f(0x8a)]},'whatsappId':_0x2ac793},'include':[{'model':Queue_1[_0x127d5f(0x90)],'as':_0x127d5f(0x7e),'attributes':['id',_0x127d5f(0x7c),_0x127d5f(0x89)]},{'model':User_1[_0x127d5f(0x90)],'as':_0x127d5f(0x80),'attributes':['id',_0x127d5f(0x7c)]}]});if(_0xe70cfe)throw new AppError_1['default'](JSON[_0x127d5f(0x81)](_0xe70cfe),0x199);};function a259_0x2816(){const _0x577cf5=['name','findOne','queue','477130EebKPh','user','stringify','__esModule','__importDefault','8aaVoXH','open','21266510vfZzMU','136002gnHuiU','sequelize','color','pending','5zrvRKd','6292195OdXcDo','defineProperty','2387724QkcEhz','9DDnbSx','default','952003uFFVpw','120472BXRQdG','../errors/AppError'];a259_0x2816=function(){return _0x577cf5;};return a259_0x2816();}exports[a259_0x23b34e(0x90)]=CheckContactOpenTickets;