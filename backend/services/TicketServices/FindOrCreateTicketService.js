'use strict';const a519_0x15bf76=a519_0x58b9;function a519_0x58b9(_0x56e4f2,_0xb19983){const _0x1cd9b7=a519_0x1cd9();return a519_0x58b9=function(_0x58b9e2,_0x1e2ea8){_0x58b9e2=_0x58b9e2-0xe6;let _0x11fa00=_0x1cd9b7[_0x58b9e2];return _0x11fa00;},a519_0x58b9(_0x56e4f2,_0xb19983);}(function(_0x2c28b3,_0x44c786){const _0x457e6d=a519_0x58b9,_0x4a7b72=_0x2c28b3();while(!![]){try{const _0xc25c3b=-parseInt(_0x457e6d(0x102))/0x1*(-parseInt(_0x457e6d(0x10f))/0x2)+parseInt(_0x457e6d(0xed))/0x3*(-parseInt(_0x457e6d(0x10d))/0x4)+parseInt(_0x457e6d(0xec))/0x5*(parseInt(_0x457e6d(0xf2))/0x6)+-parseInt(_0x457e6d(0x107))/0x7+-parseInt(_0x457e6d(0x11a))/0x8*(parseInt(_0x457e6d(0xff))/0x9)+parseInt(_0x457e6d(0xf9))/0xa+parseInt(_0x457e6d(0x10e))/0xb*(parseInt(_0x457e6d(0xf3))/0xc);if(_0xc25c3b===_0x44c786)break;else _0x4a7b72['push'](_0x4a7b72['shift']());}catch(_0x4e9c22){_0x4a7b72['push'](_0x4a7b72['shift']());}}}(a519_0x1cd9,0x4b05e));var __importDefault=this&&this[a519_0x15bf76(0x113)]||function(_0x46ada2){const _0x204b50=a519_0x15bf76;return _0x46ada2&&_0x46ada2[_0x204b50(0xea)]?_0x46ada2:{'default':_0x46ada2};};Object[a519_0x15bf76(0x109)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a519_0x15bf76(0xe6)),date_fns_1=require(a519_0x15bf76(0xe9)),Ticket_1=__importDefault(require(a519_0x15bf76(0xf8))),ShowTicketService_1=__importDefault(require(a519_0x15bf76(0xf5))),FindOrCreateATicketTrakingService_1=__importDefault(require(a519_0x15bf76(0x115))),lodash_1=require(a519_0x15bf76(0x111)),socket_1=require(a519_0x15bf76(0x10c)),logger_1=require(a519_0x15bf76(0x114)),FindOrCreateTicketService=async(_0x80f01b,_0x3a7082,_0x551914,_0x31b768,_0x43364d,_0x574678,_0x43f706,_0x1c8615,_0x569859,_0x306df8,_0x539bdd)=>{const _0x133ba5=a519_0x15bf76;try{let _0x5b1afd=![];const _0x178bab=_0x539bdd[_0x133ba5(0xe8)](_0x2e83b0=>_0x2e83b0[_0x133ba5(0x116)]===_0x133ba5(0x119)),_0x335260=_0x539bdd[_0x133ba5(0xe8)](_0x4b8272=>_0x4b8272[_0x133ba5(0x116)]===_0x133ba5(0xeb));let _0x1df9f8=![];_0x178bab&&_0x335260&&(_0x1df9f8=_0x178bab?.[_0x133ba5(0xfd)]==='enabled'&&_0x335260?.[_0x133ba5(0xfd)]!=='');console[_0x133ba5(0xf0)](_0x1df9f8);const _0x16fe87=(0x0,socket_1[_0x133ba5(0x101)])();let _0x484e5b=await Ticket_1[_0x133ba5(0x110)][_0x133ba5(0xf1)]({'where':{'status':{[sequelize_1['Op']['or']]:[_0x133ba5(0x106),_0x133ba5(0xee),_0x133ba5(0xf4),'nps',_0x133ba5(0xf6)]},'contactId':_0x43f706?_0x43f706['id']:_0x80f01b['id'],'companyId':_0x31b768,'whatsappId':_0x3a7082['id']},'order':[['id','DESC']]});if(_0x484e5b){await _0x484e5b[_0x133ba5(0x104)]({'unreadMessages':_0x551914}),_0x484e5b=await(0x0,ShowTicketService_1[_0x133ba5(0x110)])(_0x484e5b['id'],_0x31b768),_0x5b1afd=!![];return{'ticket':_0x484e5b,'isCreated':_0x5b1afd};;}const _0x31a433=_0x3a7082[_0x133ba5(0x112)];!_0x484e5b&&(_0x31a433!==0x0&&(_0x484e5b=await Ticket_1[_0x133ba5(0x110)][_0x133ba5(0xf1)]({'where':{'updatedAt':{[sequelize_1['Op'][_0x133ba5(0x103)]]:[+(0x0,date_fns_1[_0x133ba5(0xfe)])(new Date(),{'minutes':_0x31a433}),+new Date()]},'contactId':_0x80f01b['id'],'companyId':_0x31b768,'whatsappId':_0x3a7082['id']},'order':[[_0x133ba5(0x10a),_0x133ba5(0x108)]]})),_0x484e5b&&_0x484e5b[_0x133ba5(0x118)]!==_0x133ba5(0x10b)&&await _0x484e5b['update']({'status':'closed','userId':null,'unreadMessages':_0x551914,'companyId':_0x31b768}));!_0x484e5b&&(_0x484e5b=await Ticket_1[_0x133ba5(0x110)][_0x133ba5(0xe7)]({'contactId':_0x43f706?_0x43f706['id']:_0x80f01b['id'],'status':!_0x569859&&!(0x0,lodash_1[_0x133ba5(0x100)])(_0x178bab[_0x133ba5(0xfd)])&&_0x1df9f8&&!_0x43f706?_0x133ba5(0xf6):_0x3a7082[_0x133ba5(0xfc)]==='enabled'||!_0x43f706?_0x133ba5(0xee):_0x133ba5(0xf4),'isGroup':!!_0x43f706,'unreadMessages':_0x551914,'whatsappId':_0x3a7082['id'],'companyId':_0x31b768,'isBot':!![],'channel':_0x1c8615,'imported':_0x569859?new Date():null}),await(0x0,FindOrCreateATicketTrakingService_1[_0x133ba5(0x110)])({'ticketId':_0x484e5b['id'],'companyId':_0x31b768,'whatsappId':_0x3a7082['id'],'userId':_0x484e5b[_0x133ba5(0x117)]}),_0x5b1afd=!![]);_0x43364d!=0x0&&_0x43364d!=undefined&&await _0x484e5b[_0x133ba5(0x104)]({'queueId':_0x43364d});_0x574678!=0x0&&_0x574678!=undefined&&await _0x484e5b[_0x133ba5(0x104)]({'userId':_0x574678});_0x484e5b=await(0x0,ShowTicketService_1[_0x133ba5(0x110)])(_0x484e5b['id'],_0x31b768);!_0x306df8&&_0x16fe87['to'](_0x484e5b['status'])['to'](_0x133ba5(0x105))['to'](_0x484e5b['id']['toString']())[_0x133ba5(0xf7)](_0x133ba5(0xfb)+_0x31b768+_0x133ba5(0xfa),{'action':_0x133ba5(0x104),'ticket':_0x484e5b});;return{'ticket':_0x484e5b,'isCreated':_0x5b1afd};}catch(_0x200894){logger_1['logger'][_0x133ba5(0xef)]('Error\x20to\x20find\x20or\x20create\x20a\x20ticket:',_0x200894);}};function a519_0x1cd9(){const _0xee7a03=['3963080noKihJ','sequelize','create','find','date-fns','__esModule','lgpdMessage','1345ewrBCR','6fBqWwe','pending','error','log','findOne','12270AjtlYC','1705692VStMCz','group','./ShowTicketService','lgpd','emit','../../models/Ticket','1244380XnngvY','-ticket','company-','groupAsTicket','value','add','9pqEpfa','isNil','getIO','222254cfOaDR','between','update','notification','open','3991295aSoews','DESC','defineProperty','updatedAt','nps','../../libs/socket','469276qqvmlp','55jWgHsy','2lZjwcp','default','lodash','timeCreateNewTicket','__importDefault','../../utils/logger','./FindOrCreateATicketTrakingService','key','userId','status','enableLGPD'];a519_0x1cd9=function(){return _0xee7a03;};return a519_0x1cd9();}exports[a519_0x15bf76(0x110)]=FindOrCreateTicketService;