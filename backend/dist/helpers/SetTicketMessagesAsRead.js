'use strict';const a278_0x35233c=a278_0x481c;function a278_0x1b13(){const _0x5719bb=['../utils/logger','userId','dataJson','company-','-ticket','3140RBGEjG','isBot','getIO','996936yYwKcV','logger','whatsapp','updateUnread','parse','notification','default','../libs/cache','3433116Mjxyyl','contactId','set','findAll','fromMe','330048dpOPwy','../libs/socket','__esModule','length','forEach','__importDefault','key','log','35imQdmW','readMessages','30123zAUPRs','contacts:','4MoYSJq','channel','4357848gNewuO','./GetTicketWbot','1205764pKosNC','companyId','status','5884872tRhjKd'];a278_0x1b13=function(){return _0x5719bb;};return a278_0x1b13();}function a278_0x481c(_0x509042,_0x3ecbd7){const _0x1b13cc=a278_0x1b13();return a278_0x481c=function(_0x481cb9,_0x525cc7){_0x481cb9=_0x481cb9-0x151;let _0x3015db=_0x1b13cc[_0x481cb9];return _0x3015db;},a278_0x481c(_0x509042,_0x3ecbd7);}(function(_0x57c18d,_0x364ad4){const _0x56d723=a278_0x481c,_0x54b337=_0x57c18d();while(!![]){try{const _0x714c12=parseInt(_0x56d723(0x15d))/0x1+-parseInt(_0x56d723(0x159))/0x2*(-parseInt(_0x56d723(0x169))/0x3)+-parseInt(_0x56d723(0x171))/0x4+-parseInt(_0x56d723(0x155))/0x5*(-parseInt(_0x56d723(0x176))/0x6)+parseInt(_0x56d723(0x160))/0x7+-parseInt(_0x56d723(0x15b))/0x8+parseInt(_0x56d723(0x157))/0x9*(-parseInt(_0x56d723(0x166))/0xa);if(_0x714c12===_0x364ad4)break;else _0x54b337['push'](_0x54b337['shift']());}catch(_0x3364ab){_0x54b337['push'](_0x54b337['shift']());}}}(a278_0x1b13,0x9cc7c));var __importDefault=this&&this[a278_0x35233c(0x152)]||function(_0x34980f){const _0x1d2654=a278_0x35233c;return _0x34980f&&_0x34980f[_0x1d2654(0x178)]?_0x34980f:{'default':_0x34980f};};Object['defineProperty'](exports,a278_0x35233c(0x178),{'value':!![]});const cache_1=__importDefault(require(a278_0x35233c(0x170))),socket_1=require(a278_0x35233c(0x177)),Message_1=__importDefault(require('../models/Message')),logger_1=require(a278_0x35233c(0x161)),GetTicketWbot_1=__importDefault(require(a278_0x35233c(0x15c))),SetTicketMessagesAsRead=async _0x1f3abd=>{const _0x3a3615=a278_0x35233c;!_0x1f3abd['isBot']&&(_0x1f3abd[_0x3a3615(0x162)]||_0x1f3abd['isGroup'])&&(await _0x1f3abd['update']({'unreadMessages':0x0}),await cache_1['default'][_0x3a3615(0x173)](_0x3a3615(0x158)+_0x1f3abd[_0x3a3615(0x172)]+':unreads','0'));if(_0x1f3abd[_0x3a3615(0x15a)]===_0x3a3615(0x16b))try{const _0x16afe9=await(0x0,GetTicketWbot_1[_0x3a3615(0x16f)])(_0x1f3abd),_0x1f681f=await Message_1['default'][_0x3a3615(0x174)]({'where':{'ticketId':_0x1f3abd['id'],'fromMe':![],'read':![]},'order':[['createdAt','DESC']]});_0x1f681f[_0x3a3615(0x179)]>0x0&&_0x1f681f[_0x3a3615(0x151)](async _0x28bf7d=>{const _0x8a87a=_0x3a3615,_0x21b1ba=JSON[_0x8a87a(0x16d)](_0x28bf7d[_0x8a87a(0x163)]);_0x21b1ba['key']&&_0x21b1ba[_0x8a87a(0x153)][_0x8a87a(0x175)]===![]&&!_0x1f3abd[_0x8a87a(0x167)]&&(_0x1f3abd[_0x8a87a(0x162)]||_0x1f3abd['isGroup'])&&await _0x16afe9[_0x8a87a(0x156)]([_0x21b1ba[_0x8a87a(0x153)]]);}),!_0x1f3abd[_0x3a3615(0x167)]&&(_0x1f3abd[_0x3a3615(0x162)]||_0x1f3abd['isGroup'])&&await Message_1[_0x3a3615(0x16f)]['update']({'read':!![]},{'where':{'ticketId':_0x1f3abd['id'],'read':![]}});}catch(_0x64d0d4){console[_0x3a3615(0x154)](_0x64d0d4),logger_1[_0x3a3615(0x16a)]['warn']('Could\x20not\x20mark\x20messages\x20as\x20read.\x20Maybe\x20whatsapp\x20session\x20disconnected?\x20Err:\x20'+_0x64d0d4);}const _0x1c697f=(0x0,socket_1[_0x3a3615(0x168)])();_0x1c697f['to'](_0x1f3abd[_0x3a3615(0x15f)])['to'](_0x3a3615(0x16e))['emit'](_0x3a3615(0x164)+_0x1f3abd[_0x3a3615(0x15e)]+_0x3a3615(0x165),{'action':_0x3a3615(0x16c),'ticketId':_0x1f3abd['id']});};exports[a278_0x35233c(0x16f)]=SetTicketMessagesAsRead;