'use strict';const a587_0x4ea63b=a587_0x4acf;(function(_0xf4b070,_0x27a641){const _0x97ca26=a587_0x4acf,_0x2ec90d=_0xf4b070();while(!![]){try{const _0x4239cc=-parseInt(_0x97ca26(0x96))/0x1+-parseInt(_0x97ca26(0x90))/0x2+-parseInt(_0x97ca26(0x85))/0x3+parseInt(_0x97ca26(0x8b))/0x4*(parseInt(_0x97ca26(0xa2))/0x5)+parseInt(_0x97ca26(0x89))/0x6+parseInt(_0x97ca26(0x95))/0x7+parseInt(_0x97ca26(0x8d))/0x8;if(_0x4239cc===_0x27a641)break;else _0x2ec90d['push'](_0x2ec90d['shift']());}catch(_0x3c3032){_0x2ec90d['push'](_0x2ec90d['shift']());}}}(a587_0x587b,0xab3b8));var __importDefault=this&&this[a587_0x4ea63b(0x88)]||function(_0x352514){const _0x2c18b6=a587_0x4ea63b;return _0x352514&&_0x352514[_0x2c18b6(0xa6)]?_0x352514:{'default':_0x352514};};Object[a587_0x4ea63b(0x94)](exports,a587_0x4ea63b(0xa6),{'value':!![]});function a587_0x4acf(_0x262fde,_0x29c216){const _0x587be1=a587_0x587b();return a587_0x4acf=function(_0x4acf58,_0x545173){_0x4acf58=_0x4acf58-0x7e;let _0x5fb2d=_0x587be1[_0x4acf58];return _0x5fb2d;},a587_0x4acf(_0x262fde,_0x29c216);}const Ticket_1=__importDefault(require(a587_0x4ea63b(0x86))),AppError_1=__importDefault(require('../../errors/AppError')),Contact_1=__importDefault(require(a587_0x4ea63b(0x93))),User_1=__importDefault(require(a587_0x4ea63b(0x9c))),Queue_1=__importDefault(require('../../models/Queue')),Tag_1=__importDefault(require(a587_0x4ea63b(0x9f))),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),Company_1=__importDefault(require(a587_0x4ea63b(0x98))),QueueIntegrations_1=__importDefault(require(a587_0x4ea63b(0x7e))),ShowTicketService=async(_0x5a4707,_0x2d2676)=>{const _0x18ceeb=a587_0x4ea63b,_0xf6cbac=await Ticket_1[_0x18ceeb(0xa4)][_0x18ceeb(0x8f)]({'where':{'id':_0x5a4707,'companyId':_0x2d2676},'include':[{'model':Contact_1['default'],'as':_0x18ceeb(0xa3),'attributes':['id',_0x18ceeb(0x9e),_0x18ceeb(0x80),_0x18ceeb(0x91),_0x18ceeb(0x8c),'profilePicUrl','acceptAudioMessage',_0x18ceeb(0x99),_0x18ceeb(0x8e),_0x18ceeb(0x7f),'urlPicture',_0x18ceeb(0x84)],'include':[_0x18ceeb(0x82),_0x18ceeb(0xa1),_0x18ceeb(0x97)]},{'model':Queue_1[_0x18ceeb(0xa4)],'as':_0x18ceeb(0x9a),'attributes':['id','name',_0x18ceeb(0x81)],'include':[_0x18ceeb(0x9d)]},{'model':User_1[_0x18ceeb(0xa4)],'as':'user','attributes':['id',_0x18ceeb(0x80)]},{'model':Tag_1[_0x18ceeb(0xa4)],'as':_0x18ceeb(0x97),'attributes':['id','name','color']},{'model':Whatsapp_1[_0x18ceeb(0xa4)],'as':'whatsapp','attributes':['id',_0x18ceeb(0x80),_0x18ceeb(0x92),_0x18ceeb(0xa7),_0x18ceeb(0x9b),_0x18ceeb(0x8a)]},{'model':Company_1[_0x18ceeb(0xa4)],'as':_0x18ceeb(0xa5),'attributes':['id',_0x18ceeb(0x80)]},{'model':QueueIntegrations_1[_0x18ceeb(0xa4)],'as':_0x18ceeb(0x83),'attributes':['id',_0x18ceeb(0x80)]}]});if(_0xf6cbac?.[_0x18ceeb(0x9e)]!==_0x2d2676)throw new AppError_1[(_0x18ceeb(0xa4))](_0x18ceeb(0x87));if(!_0xf6cbac)throw new AppError_1[(_0x18ceeb(0xa4))](_0x18ceeb(0xa0),0x194);return _0xf6cbac;};function a587_0x587b(){const _0x103525=['email','11836704lOMLfv','disableBot','findOne','1682008dTByus','number','groupAsTicket','../../models/Contact','defineProperty','7571879HwBNtQ','756895BiKrZd','tags','../../models/Company','active','queue','facebookUserToken','../../models/User','chatbots','companyId','../../models/Tag','ERR_NO_TICKET_FOUND','contactTags','2567045UJWkHQ','contact','default','company','__esModule','greetingMediaAttachment','../../models/QueueIntegrations','remoteJid','name','color','extraInfo','queueIntegration','lgpdAcceptedAt','4000752aCwidV','../../models/Ticket','Não\x20é\x20possível\x20consultar\x20registros\x20de\x20outra\x20empresa','__importDefault','3348942zruQiL','facebookUserId','4mfjhWa'];a587_0x587b=function(){return _0x103525;};return a587_0x587b();}exports[a587_0x4ea63b(0xa4)]=ShowTicketService;