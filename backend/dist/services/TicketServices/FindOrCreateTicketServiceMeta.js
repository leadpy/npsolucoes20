'use strict';const a485_0x850655=a485_0x3357;(function(_0x5d53a6,_0x9375ba){const _0x12ab7e=a485_0x3357,_0x2e502e=_0x5d53a6();while(!![]){try{const _0x50f23f=parseInt(_0x12ab7e(0x106))/0x1*(parseInt(_0x12ab7e(0x123))/0x2)+parseInt(_0x12ab7e(0x11b))/0x3*(parseInt(_0x12ab7e(0x11e))/0x4)+-parseInt(_0x12ab7e(0x124))/0x5+parseInt(_0x12ab7e(0x112))/0x6*(-parseInt(_0x12ab7e(0x11c))/0x7)+-parseInt(_0x12ab7e(0x107))/0x8+parseInt(_0x12ab7e(0x11d))/0x9+parseInt(_0x12ab7e(0x120))/0xa*(-parseInt(_0x12ab7e(0x111))/0xb);if(_0x50f23f===_0x9375ba)break;else _0x2e502e['push'](_0x2e502e['shift']());}catch(_0x1251f0){_0x2e502e['push'](_0x2e502e['shift']());}}}(a485_0x4f3b,0x4ec80));var __importDefault=this&&this['__importDefault']||function(_0xe10832){return _0xe10832&&_0xe10832['__esModule']?_0xe10832:{'default':_0xe10832};};Object[a485_0x850655(0x125)](exports,a485_0x850655(0x11f),{'value':!![]});function a485_0x3357(_0x4ebc57,_0x2d1241){const _0x4f3b4e=a485_0x4f3b();return a485_0x3357=function(_0x335749,_0x28ad97){_0x335749=_0x335749-0x106;let _0x23e00d=_0x4f3b4e[_0x335749];return _0x23e00d;},a485_0x3357(_0x4ebc57,_0x2d1241);}const date_fns_1=require(a485_0x850655(0x109)),sequelize_1=require(a485_0x850655(0x10f)),Ticket_1=__importDefault(require(a485_0x850655(0x10e))),ShowTicketService_1=__importDefault(require(a485_0x850655(0x10a))),FindOrCreateATicketTrakingService_1=__importDefault(require(a485_0x850655(0x108))),Setting_1=__importDefault(require(a485_0x850655(0x113))),FindOrCreateTicketServiceMeta=async(_0x1181bd,_0x4e2b51,_0x478b38,_0x1ca327,_0x29b573)=>{const _0x2fa1a9=a485_0x850655;let _0x39a651=await Ticket_1[_0x2fa1a9(0x10b)]['findOne']({'where':{'status':{[sequelize_1['Op']['or']]:[_0x2fa1a9(0x116),_0x2fa1a9(0x114),_0x2fa1a9(0x121)]},'contactId':_0x1181bd['id'],'companyId':_0x1ca327,'channel':_0x29b573},'order':[['id','DESC']]});_0x39a651&&await _0x39a651['update']({'unreadMessages':_0x478b38});if(!_0x39a651){_0x39a651=await Ticket_1[_0x2fa1a9(0x10b)][_0x2fa1a9(0x10c)]({'where':{'contactId':_0x1181bd['id'],'channel':_0x29b573},'order':[['updatedAt','DESC']]});_0x39a651&&(await _0x39a651[_0x2fa1a9(0x10d)]({'status':'pending','userId':null,'unreadMessages':_0x478b38,'companyId':_0x1ca327,'channel':_0x29b573}),await(0x0,FindOrCreateATicketTrakingService_1[_0x2fa1a9(0x10b)])({'ticketId':_0x39a651['id'],'companyId':_0x1ca327,'whatsappId':_0x39a651[_0x2fa1a9(0x118)],'userId':_0x39a651[_0x2fa1a9(0x126)]}));const _0x37ada8=await Setting_1[_0x2fa1a9(0x10b)][_0x2fa1a9(0x10c)]({'where':{'key':_0x2fa1a9(0x119)}}),_0x5858cb=_0x37ada8?parseInt(_0x37ada8[_0x2fa1a9(0x11a)],0xa):0x1c20;}return!_0x39a651&&(_0x39a651=await Ticket_1[_0x2fa1a9(0x10b)][_0x2fa1a9(0x10c)]({'where':{'updatedAt':{[sequelize_1['Op'][_0x2fa1a9(0x127)]]:[+(0x0,date_fns_1[_0x2fa1a9(0x122)])(new Date(),0x2),+new Date()]},'contactId':_0x1181bd['id']},'order':[[_0x2fa1a9(0x117),_0x2fa1a9(0x110)]]}),_0x39a651&&(await _0x39a651[_0x2fa1a9(0x10d)]({'status':_0x2fa1a9(0x114),'userId':null,'unreadMessages':_0x478b38,'companyId':_0x1ca327,'channel':_0x29b573}),await(0x0,FindOrCreateATicketTrakingService_1['default'])({'ticketId':_0x39a651['id'],'companyId':_0x1ca327,'whatsappId':_0x39a651[_0x2fa1a9(0x118)],'userId':_0x39a651['userId']}))),!_0x39a651?(_0x39a651=await Ticket_1['default'][_0x2fa1a9(0x115)]({'contactId':_0x1181bd['id'],'status':_0x2fa1a9(0x114),'isGroup':![],'unreadMessages':_0x478b38,'whatsappId':_0x4e2b51,'companyId':_0x1ca327,'channel':_0x29b573}),await(0x0,FindOrCreateATicketTrakingService_1[_0x2fa1a9(0x10b)])({'ticketId':_0x39a651['id'],'companyId':_0x1ca327,'whatsappId':_0x4e2b51,'userId':_0x39a651[_0x2fa1a9(0x126)]})):await _0x39a651[_0x2fa1a9(0x10d)]({'whatsappId':_0x4e2b51}),_0x39a651=await(0x0,ShowTicketService_1[_0x2fa1a9(0x10b)])(_0x39a651['id'],_0x1ca327),_0x39a651;};exports[a485_0x850655(0x10b)]=FindOrCreateTicketServiceMeta;function a485_0x4f3b(){const _0x5511f9=['1472316AGmRll','../../models/Setting','pending','create','open','updatedAt','whatsappId','timeCreateNewTicket','value','1663923lgFMzQ','7ZYMdCw','3258342tukUlp','4ojXUvO','__esModule','30dswphA','closed','subHours','10znVhnv','963775xpWGXb','defineProperty','userId','between','115927fniMrZ','201424HRryJn','./FindOrCreateATicketTrakingService','date-fns','./ShowTicketService','default','findOne','update','../../models/Ticket','sequelize','DESC','2604459vTnOQC'];a485_0x4f3b=function(){return _0x5511f9;};return a485_0x4f3b();}