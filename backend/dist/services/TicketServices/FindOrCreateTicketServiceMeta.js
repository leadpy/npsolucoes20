'use strict';const a582_0x5a10d8=a582_0x2e13;function a582_0x2e13(_0x4e2d89,_0x5d188e){const _0x2a1e26=a582_0x2a1e();return a582_0x2e13=function(_0x2e1313,_0x34b7af){_0x2e1313=_0x2e1313-0x192;let _0x43693f=_0x2a1e26[_0x2e1313];return _0x43693f;},a582_0x2e13(_0x4e2d89,_0x5d188e);}(function(_0x17f939,_0x424a05){const _0x11ba16=a582_0x2e13,_0x546454=_0x17f939();while(!![]){try{const _0x5079db=-parseInt(_0x11ba16(0x194))/0x1+-parseInt(_0x11ba16(0x1a7))/0x2+-parseInt(_0x11ba16(0x192))/0x3*(-parseInt(_0x11ba16(0x1aa))/0x4)+-parseInt(_0x11ba16(0x19c))/0x5+parseInt(_0x11ba16(0x19f))/0x6+-parseInt(_0x11ba16(0x1a5))/0x7+-parseInt(_0x11ba16(0x1a9))/0x8*(-parseInt(_0x11ba16(0x1a3))/0x9);if(_0x5079db===_0x424a05)break;else _0x546454['push'](_0x546454['shift']());}catch(_0x49f6ef){_0x546454['push'](_0x546454['shift']());}}}(a582_0x2a1e,0x2c261));var __importDefault=this&&this[a582_0x5a10d8(0x195)]||function(_0x193dec){return _0x193dec&&_0x193dec['__esModule']?_0x193dec:{'default':_0x193dec};};Object[a582_0x5a10d8(0x197)](exports,'__esModule',{'value':!![]});const date_fns_1=require(a582_0x5a10d8(0x198)),sequelize_1=require(a582_0x5a10d8(0x1ab)),Ticket_1=__importDefault(require(a582_0x5a10d8(0x196))),ShowTicketService_1=__importDefault(require('./ShowTicketService')),FindOrCreateATicketTrakingService_1=__importDefault(require(a582_0x5a10d8(0x1a1))),Setting_1=__importDefault(require('../../models/Setting')),FindOrCreateTicketServiceMeta=async(_0x505361,_0x477efe,_0x33876c,_0x260458,_0x289bec)=>{const _0x5f567c=a582_0x5a10d8;let _0x50a01e=await Ticket_1[_0x5f567c(0x1a4)][_0x5f567c(0x199)]({'where':{'status':{[sequelize_1['Op']['or']]:[_0x5f567c(0x1a2),'pending',_0x5f567c(0x1a8)]},'contactId':_0x505361['id'],'companyId':_0x260458,'channel':_0x289bec},'order':[['id',_0x5f567c(0x193)]]});_0x50a01e&&await _0x50a01e[_0x5f567c(0x1a0)]({'unreadMessages':_0x33876c});if(!_0x50a01e){_0x50a01e=await Ticket_1[_0x5f567c(0x1a4)][_0x5f567c(0x199)]({'where':{'contactId':_0x505361['id'],'channel':_0x289bec},'order':[['updatedAt','DESC']]});_0x50a01e&&(await _0x50a01e[_0x5f567c(0x1a0)]({'status':'pending','userId':null,'unreadMessages':_0x33876c,'companyId':_0x260458,'channel':_0x289bec}),await(0x0,FindOrCreateATicketTrakingService_1['default'])({'ticketId':_0x50a01e['id'],'companyId':_0x260458,'whatsappId':_0x50a01e[_0x5f567c(0x19d)],'userId':_0x50a01e[_0x5f567c(0x19a)]}));const _0x542e8f=await Setting_1['default'][_0x5f567c(0x199)]({'where':{'key':_0x5f567c(0x19b)}}),_0x158197=_0x542e8f?parseInt(_0x542e8f['value'],0xa):0x1c20;}return!_0x50a01e&&(_0x50a01e=await Ticket_1[_0x5f567c(0x1a4)][_0x5f567c(0x199)]({'where':{'updatedAt':{[sequelize_1['Op']['between']]:[+(0x0,date_fns_1[_0x5f567c(0x19e)])(new Date(),0x2),+new Date()]},'contactId':_0x505361['id']},'order':[['updatedAt',_0x5f567c(0x193)]]}),_0x50a01e&&(await _0x50a01e[_0x5f567c(0x1a0)]({'status':_0x5f567c(0x1a6),'userId':null,'unreadMessages':_0x33876c,'companyId':_0x260458,'channel':_0x289bec}),await(0x0,FindOrCreateATicketTrakingService_1['default'])({'ticketId':_0x50a01e['id'],'companyId':_0x260458,'whatsappId':_0x50a01e['whatsappId'],'userId':_0x50a01e[_0x5f567c(0x19a)]}))),!_0x50a01e?(_0x50a01e=await Ticket_1[_0x5f567c(0x1a4)]['create']({'contactId':_0x505361['id'],'status':'pending','isGroup':![],'unreadMessages':_0x33876c,'whatsappId':_0x477efe,'companyId':_0x260458,'channel':_0x289bec}),await(0x0,FindOrCreateATicketTrakingService_1[_0x5f567c(0x1a4)])({'ticketId':_0x50a01e['id'],'companyId':_0x260458,'whatsappId':_0x477efe,'userId':_0x50a01e['userId']})):await _0x50a01e['update']({'whatsappId':_0x477efe}),_0x50a01e=await(0x0,ShowTicketService_1['default'])(_0x50a01e['id'],_0x260458),_0x50a01e;};function a582_0x2a1e(){const _0x2d5108=['513345kJsUZA','pending','658374xwLHSz','closed','1838744uxYPPM','267172opiDBe','sequelize','15adMvkQ','DESC','49290vxaCGc','__importDefault','../../models/Ticket','defineProperty','date-fns','findOne','userId','timeCreateNewTicket','609325GMnFnv','whatsappId','subHours','1144212mOYvcp','update','./FindOrCreateATicketTrakingService','open','9tvIEzy','default'];a582_0x2a1e=function(){return _0x2d5108;};return a582_0x2a1e();}exports[a582_0x5a10d8(0x1a4)]=FindOrCreateTicketServiceMeta;