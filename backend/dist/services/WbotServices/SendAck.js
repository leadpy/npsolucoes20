'use strict';function a507_0x5c87(_0x5f0f57,_0x2af240){const _0x2a9bd9=a507_0x2a9b();return a507_0x5c87=function(_0x5c8755,_0xdddce0){_0x5c8755=_0x5c8755-0x113;let _0x25ab72=_0x2a9bd9[_0x5c8755];return _0x25ab72;},a507_0x5c87(_0x5f0f57,_0x2af240);}const a507_0x11d924=a507_0x5c87;(function(_0x32a031,_0x4b84f2){const _0x174e0a=a507_0x5c87,_0x589aad=_0x32a031();while(!![]){try{const _0x45011c=parseInt(_0x174e0a(0x127))/0x1+parseInt(_0x174e0a(0x12b))/0x2+-parseInt(_0x174e0a(0x12f))/0x3+parseInt(_0x174e0a(0x11a))/0x4+parseInt(_0x174e0a(0x12e))/0x5*(parseInt(_0x174e0a(0x11d))/0x6)+-parseInt(_0x174e0a(0x11c))/0x7*(-parseInt(_0x174e0a(0x131))/0x8)+-parseInt(_0x174e0a(0x123))/0x9;if(_0x45011c===_0x4b84f2)break;else _0x589aad['push'](_0x589aad['shift']());}catch(_0x57ec7d){_0x589aad['push'](_0x589aad['shift']());}}}(a507_0x2a9b,0x6a1a4));var __importDefault=this&&this[a507_0x11d924(0x124)]||function(_0x25ec95){const _0x19c456=a507_0x11d924;return _0x25ec95&&_0x25ec95[_0x19c456(0x11b)]?_0x25ec95:{'default':_0x25ec95};};Object[a507_0x11d924(0x11e)](exports,a507_0x11d924(0x11b),{'value':!![]}),exports[a507_0x11d924(0x130)]=exports['SendAckBYticketId']=void 0x0;const AppError_1=__importDefault(require(a507_0x11d924(0x134))),GetTicketWbot_1=__importDefault(require(a507_0x11d924(0x113))),Ticket_1=__importDefault(require(a507_0x11d924(0x132))),Message_1=__importDefault(require(a507_0x11d924(0x125))),ShowTicketService_1=__importDefault(require('../TicketServices/ShowTicketService')),SendAckBYticketId=async({ticketId:_0x51d273,companyId:_0xcacbad})=>{const _0x1a6cc3=a507_0x11d924,_0x599ede=await(0x0,ShowTicketService_1[_0x1a6cc3(0x129)])(_0x51d273,_0xcacbad);let _0x1f0104=_0x599ede['unreadMessages'];if(_0x1f0104>0x0){let _0x23946e;try{_0x23946e=await(0x0,GetTicketWbot_1[_0x1a6cc3(0x129)])(_0x599ede);}catch(_0x21af1d){console[_0x1a6cc3(0x122)]('não\x20consegui\x20pegar\x20o\x20wbot');}if(!_0x599ede)throw new AppError_1[(_0x1a6cc3(0x129))]('ERR_NO_TICKET_FOUND',0x194);const _0x41a8c6=0x64,{count:_0x17ee36,rows:_0x56349f}=await Message_1['default']['findAndCountAll']({'limit':_0x41a8c6,'include':[_0x1a6cc3(0x135),{'model':Message_1[_0x1a6cc3(0x129)],'as':'quotedMsg','include':[_0x1a6cc3(0x135)]},{'model':Ticket_1[_0x1a6cc3(0x129)],'where':{'contactId':_0x599ede['contactId']},'required':!![]}],'order':[[_0x1a6cc3(0x114),_0x1a6cc3(0x119)]]});_0x56349f[_0x1a6cc3(0x136)](async _0x309211=>{const _0xc0a9e2=_0x1a6cc3;if(_0x23946e){const _0x3cc349=_0x23946e[_0xc0a9e2(0x12d)][_0xc0a9e2(0x121)][_0xc0a9e2(0x11f)](_0x309211[_0xc0a9e2(0x120)]);_0x23946e[_0xc0a9e2(0x116)]([_0x309211]);let _0x4cd022=_0x309211[_0xc0a9e2(0x120)],_0x5c59c8=_0x309211['ticket'];_0x5c59c8[_0xc0a9e2(0x12a)]({'unreadMessages':0x0});_0x4cd022&&_0x3cc349?.['unreadCount']>0x0&&(_0x23946e[_0xc0a9e2(0x12d)]['chats']['deleteById'](_0x4cd022),_0x23946e[_0xc0a9e2(0x128)](_0xc0a9e2(0x118)),setTimeout(()=>{const _0xd60f4f=_0xc0a9e2;_0x23946e[_0xd60f4f(0x128)](_0xd60f4f(0x115));},0x1388));try{return!![];}catch(_0x4bdac4){throw new AppError_1[(_0xc0a9e2(0x129))](_0xc0a9e2(0x133));}}});return;}};exports[a507_0x11d924(0x12c)]=SendAckBYticketId;function a507_0x2a9b(){const _0x370a5a=['459639oEquoz','SendAckBYRemoteJid','40536kEJRrN','../../models/Ticket','ERR_SENDING_WAPP_MSG','../../errors/AppError','contact','forEach','../../helpers/GetTicketWbot','createdAt','unavailable','readMessages','findAndCountAll','available','DESC','340372wXIZmn','__esModule','581AigKyq','951222dfxXlB','defineProperty','get','remoteJid','chats','log','10957410LdqGDx','__importDefault','../../models/Message','ticketId','641338jZQpAO','sendPresenceUpdate','default','update','48318KbnmXe','SendAckBYticketId','store','20BLCXrN'];a507_0x2a9b=function(){return _0x370a5a;};return a507_0x2a9b();}const SendAckBYRemoteJid=async({remoteJid:_0x460e09,companyId:_0x11b8d5})=>{const _0x31f5f6=a507_0x11d924,{rows:_0x11285d}=await Message_1[_0x31f5f6(0x129)][_0x31f5f6(0x117)]({'limit':0x1,'order':[[_0x31f5f6(0x114),_0x31f5f6(0x119)]],'where':{'remoteJid':_0x460e09,'ack':0x0,'companyId':_0x11b8d5}});_0x11285d[_0x31f5f6(0x136)](async _0x4e53f6=>{const _0x412d82=_0x31f5f6;let _0x36cacc=_0x4e53f6[_0x412d82(0x126)];});return;};exports[a507_0x11d924(0x130)]=SendAckBYRemoteJid;