'use strict';const a578_0x41ddef=a578_0x5ef8;(function(_0x26d630,_0x337c68){const _0x198d97=a578_0x5ef8,_0x7e586c=_0x26d630();while(!![]){try{const _0x36b79f=parseInt(_0x198d97(0xfb))/0x1+parseInt(_0x198d97(0x101))/0x2*(parseInt(_0x198d97(0x10c))/0x3)+parseInt(_0x198d97(0x104))/0x4+-parseInt(_0x198d97(0x111))/0x5+parseInt(_0x198d97(0x108))/0x6+parseInt(_0x198d97(0x100))/0x7*(parseInt(_0x198d97(0x10d))/0x8)+-parseInt(_0x198d97(0x10f))/0x9;if(_0x36b79f===_0x337c68)break;else _0x7e586c['push'](_0x7e586c['shift']());}catch(_0x388de2){_0x7e586c['push'](_0x7e586c['shift']());}}}(a578_0xbe04,0x2f9c6));var __importDefault=this&&this[a578_0x41ddef(0x110)]||function(_0x55645f){const _0x2b0f9a=a578_0x41ddef;return _0x55645f&&_0x55645f[_0x2b0f9a(0xfc)]?_0x55645f:{'default':_0x55645f};};Object[a578_0x41ddef(0x10a)](exports,a578_0x41ddef(0xfc),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),GetDefaultWhatsApp_1=__importDefault(require(a578_0x41ddef(0x112))),GetDefaultWhatsAppByUser_1=__importDefault(require(a578_0x41ddef(0x115))),Ticket_1=__importDefault(require('../../models/Ticket')),ShowContactService_1=__importDefault(require(a578_0x41ddef(0xff))),socket_1=require(a578_0x41ddef(0x114)),ShowWhatsAppService_1=__importDefault(require(a578_0x41ddef(0x113))),CheckContactOpenTickets_1=__importDefault(require('../../helpers/CheckContactOpenTickets')),CreateLogTicketService_1=__importDefault(require(a578_0x41ddef(0x103))),ShowTicketService_1=__importDefault(require('./ShowTicketService')),CreateTicketService=async({contactId:_0x480f11,status:_0x4d523d,userId:_0x53709c,queueId:_0x2027e6,companyId:_0x459f35,whatsappId:_0x233fb0})=>{const _0x58d5a7=a578_0x41ddef,_0xf81d0=(0x0,socket_1['getIO'])();let _0x234688;_0x233fb0!==undefined&&_0x233fb0!==null&&_0x233fb0!==''&&(_0x234688=await(0x0,ShowWhatsAppService_1[_0x58d5a7(0xfe)])(_0x233fb0,_0x459f35));let _0x159865=await(0x0,GetDefaultWhatsAppByUser_1[_0x58d5a7(0xfe)])(_0x53709c);_0x234688&&(_0x159865=_0x234688);if(!_0x159865)_0x159865=await(0x0,GetDefaultWhatsApp_1[_0x58d5a7(0xfe)])(_0x459f35);await(0x0,CheckContactOpenTickets_1['default'])(_0x480f11,_0x159865['id']);const {isGroup:_0x5edff8}=await(0x0,ShowContactService_1[_0x58d5a7(0xfe)])(_0x480f11,_0x459f35);let _0x3e5139=await Ticket_1[_0x58d5a7(0xfe)][_0x58d5a7(0x102)]({'contactId':_0x480f11,'companyId':_0x459f35,'whatsappId':_0x159865['id'],'isGroup':_0x5edff8,'userId':_0x53709c,'isBot':!![],'queueId':_0x2027e6,'status':_0x5edff8?_0x58d5a7(0x106):_0x58d5a7(0xfd)});_0x3e5139=await(0x0,ShowTicketService_1[_0x58d5a7(0xfe)])(_0x3e5139['id'],_0x459f35);if(!_0x3e5139)throw new AppError_1[(_0x58d5a7(0xfe))](_0x58d5a7(0x107));return _0xf81d0['to'](_0x3e5139[_0x58d5a7(0x10b)])['to'](_0x58d5a7(0x109))['to'](_0x3e5139['id']['toString']())[_0x58d5a7(0x105)]('company-'+_0x459f35+_0x58d5a7(0x116),{'action':_0x58d5a7(0x10e),'ticket':_0x3e5139}),await(0x0,CreateLogTicketService_1[_0x58d5a7(0xfe)])({'userId':_0x53709c,'queueId':_0x2027e6,'ticketId':_0x3e5139['id'],'type':_0x58d5a7(0x102)}),_0x3e5139;};function a578_0xbe04(){const _0x6a1c09=['../ContactServices/ShowContactService','113533uJBPlr','98UgTCAw','create','./CreateLogTicketService','349816swFUPG','emit','group','ERR_CREATING_TICKET','1568100JfTyYc','notification','defineProperty','status','19563pVgwkG','24EcStZu','update','3250296wdWFHi','__importDefault','1558280iWDozN','../../helpers/GetDefaultWhatsApp','../WhatsappService/ShowWhatsAppService','../../libs/socket','../../helpers/GetDefaultWhatsAppByUser','-ticket','150824FVnFkc','__esModule','open','default'];a578_0xbe04=function(){return _0x6a1c09;};return a578_0xbe04();}function a578_0x5ef8(_0x273118,_0x5402a3){const _0xbe046d=a578_0xbe04();return a578_0x5ef8=function(_0x5ef864,_0x2f7872){_0x5ef864=_0x5ef864-0xfb;let _0x559ae1=_0xbe046d[_0x5ef864];return _0x559ae1;},a578_0x5ef8(_0x273118,_0x5402a3);}exports['default']=CreateTicketService;