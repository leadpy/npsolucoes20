'use strict';const a573_0x294164=a573_0x14f4;(function(_0x42804d,_0x3da542){const _0xbd00f0=a573_0x14f4,_0x27c63c=_0x42804d();while(!![]){try{const _0x35819f=parseInt(_0xbd00f0(0x115))/0x1+parseInt(_0xbd00f0(0x11f))/0x2*(-parseInt(_0xbd00f0(0x11c))/0x3)+parseInt(_0xbd00f0(0x113))/0x4+parseInt(_0xbd00f0(0x110))/0x5+-parseInt(_0xbd00f0(0x117))/0x6*(parseInt(_0xbd00f0(0x10f))/0x7)+-parseInt(_0xbd00f0(0x120))/0x8*(-parseInt(_0xbd00f0(0x118))/0x9)+-parseInt(_0xbd00f0(0x11d))/0xa;if(_0x35819f===_0x3da542)break;else _0x27c63c['push'](_0x27c63c['shift']());}catch(_0x141062){_0x27c63c['push'](_0x27c63c['shift']());}}}(a573_0x1af9,0x76ed6));function a573_0x1af9(){const _0x13fbc0=['__importDefault','defineProperty','__esModule','default','5782JlnezT','1245075AidkHB','name','findAll','3409168nrPSVN','../../models/User','163646SppuCe','email','6294GaklSn','9cTSyCH','contact','status','user','3kuQNRa','1202220PHuysO','../../models/Contact','164056HpCTSh','2327176KPFCWv','ticket','createdAt'];a573_0x1af9=function(){return _0x13fbc0;};return a573_0x1af9();}function a573_0x14f4(_0x496f17,_0x23bc18){const _0x1af958=a573_0x1af9();return a573_0x14f4=function(_0x14f4af,_0x5ed154){_0x14f4af=_0x14f4af-0x10b;let _0x47da62=_0x1af958[_0x14f4af];return _0x47da62;},a573_0x14f4(_0x496f17,_0x23bc18);}var __importDefault=this&&this[a573_0x294164(0x10b)]||function(_0x1357dd){const _0x28e443=a573_0x294164;return _0x1357dd&&_0x1357dd[_0x28e443(0x10d)]?_0x1357dd:{'default':_0x1357dd};};Object[a573_0x294164(0x10c)](exports,'__esModule',{'value':!![]});const TicketNote_1=__importDefault(require('../../models/TicketNote')),User_1=__importDefault(require(a573_0x294164(0x114))),Contact_1=__importDefault(require(a573_0x294164(0x11e))),Ticket_1=__importDefault(require('../../models/Ticket')),FindNotesByContactIdAndTicketId=async({contactId:_0x55ca2d,ticketId:_0x25b4d4})=>{const _0x4531f2=a573_0x294164,_0x2a50f8=await TicketNote_1[_0x4531f2(0x10e)][_0x4531f2(0x112)]({'where':{'contactId':_0x55ca2d,'ticketId':_0x25b4d4},'include':[{'model':User_1[_0x4531f2(0x10e)],'as':_0x4531f2(0x11b),'attributes':['id',_0x4531f2(0x111),_0x4531f2(0x116)]},{'model':Contact_1['default'],'as':_0x4531f2(0x119),'attributes':['id',_0x4531f2(0x111)]},{'model':Ticket_1[_0x4531f2(0x10e)],'as':_0x4531f2(0x121),'attributes':['id',_0x4531f2(0x11a),'createdAt']}],'order':[[_0x4531f2(0x122),'DESC']]});return _0x2a50f8;};exports[a573_0x294164(0x10e)]=FindNotesByContactIdAndTicketId;