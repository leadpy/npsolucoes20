'use strict';const a232_0x12773a=a232_0x4f1c;(function(_0x257bb3,_0x2f9235){const _0x1db230=a232_0x4f1c,_0x309f31=_0x257bb3();while(!![]){try{const _0x4b784f=parseInt(_0x1db230(0xfd))/0x1*(-parseInt(_0x1db230(0x104))/0x2)+parseInt(_0x1db230(0xff))/0x3*(parseInt(_0x1db230(0x10c))/0x4)+-parseInt(_0x1db230(0xfc))/0x5*(parseInt(_0x1db230(0xfb))/0x6)+-parseInt(_0x1db230(0xf8))/0x7*(-parseInt(_0x1db230(0x106))/0x8)+parseInt(_0x1db230(0x10a))/0x9+-parseInt(_0x1db230(0xf9))/0xa+parseInt(_0x1db230(0x10b))/0xb*(parseInt(_0x1db230(0x103))/0xc);if(_0x4b784f===_0x2f9235)break;else _0x309f31['push'](_0x309f31['shift']());}catch(_0xe3adde){_0x309f31['push'](_0x309f31['shift']());}}}(a232_0x4871,0xf041e));var __importDefault=this&&this[a232_0x12773a(0x105)]||function(_0x5c1632){const _0x56a4f4=a232_0x12773a;return _0x5c1632&&_0x5c1632[_0x56a4f4(0x108)]?_0x5c1632:{'default':_0x5c1632};};function a232_0x4f1c(_0x3d32dc,_0x1f263d){const _0x48718b=a232_0x4871();return a232_0x4f1c=function(_0x4f1cb8,_0x4a1b73){_0x4f1cb8=_0x4f1cb8-0xf8;let _0x1c4ff7=_0x48718b[_0x4f1cb8];return _0x1c4ff7;},a232_0x4f1c(_0x3d32dc,_0x1f263d);}Object['defineProperty'](exports,a232_0x12773a(0x108),{'value':!![]});function a232_0x4871(){const _0x80bd13=['pending','__esModule','color','2565027vpTDrx','14632915VdYKjz','91900xZsleZ','sequelize','name','7sFPdhY','15998470PtAbRb','default','6chBama','7198635QYElZY','17054bWUAjJ','../models/Queue','150EXBAOm','findOne','queue','../models/Ticket','24ESONmT','206XplDrN','__importDefault','13487576YpKCmh'];a232_0x4871=function(){return _0x80bd13;};return a232_0x4871();}const sequelize_1=require(a232_0x12773a(0x10d)),AppError_1=__importDefault(require('../errors/AppError')),Ticket_1=__importDefault(require(a232_0x12773a(0x102))),User_1=__importDefault(require('../models/User')),Queue_1=__importDefault(require(a232_0x12773a(0xfe))),CheckContactOpenTickets=async(_0x56e628,_0x56d30e)=>{const _0x240a4a=a232_0x12773a,_0x6d7725=await Ticket_1[_0x240a4a(0xfa)][_0x240a4a(0x100)]({'where':{'contactId':_0x56e628,'status':{[sequelize_1['Op']['or']]:['open',_0x240a4a(0x107)]},'whatsappId':_0x56d30e},'include':[{'model':Queue_1['default'],'as':_0x240a4a(0x101),'attributes':['id',_0x240a4a(0x10e),_0x240a4a(0x109)]},{'model':User_1[_0x240a4a(0xfa)],'as':'user','attributes':['id',_0x240a4a(0x10e)]}]});if(_0x6d7725)throw new AppError_1['default'](JSON['stringify'](_0x6d7725),0x199);};exports[a232_0x12773a(0xfa)]=CheckContactOpenTickets;