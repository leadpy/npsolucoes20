'use strict';const a551_0x57950d=a551_0x532e;(function(_0x4254d1,_0x24e91f){const _0xeb88ff=a551_0x532e,_0x4d42e7=_0x4254d1();while(!![]){try{const _0x527119=-parseInt(_0xeb88ff(0x131))/0x1*(parseInt(_0xeb88ff(0x127))/0x2)+parseInt(_0xeb88ff(0x12f))/0x3+parseInt(_0xeb88ff(0x12e))/0x4*(-parseInt(_0xeb88ff(0x124))/0x5)+-parseInt(_0xeb88ff(0x121))/0x6*(-parseInt(_0xeb88ff(0x128))/0x7)+-parseInt(_0xeb88ff(0x11a))/0x8*(parseInt(_0xeb88ff(0x125))/0x9)+parseInt(_0xeb88ff(0x119))/0xa*(parseInt(_0xeb88ff(0x133))/0xb)+parseInt(_0xeb88ff(0x12d))/0xc*(parseInt(_0xeb88ff(0x129))/0xd);if(_0x527119===_0x24e91f)break;else _0x4d42e7['push'](_0x4d42e7['shift']());}catch(_0x4e4d02){_0x4d42e7['push'](_0x4d42e7['shift']());}}}(a551_0x5f1b,0x3bcad));var __importDefault=this&&this[a551_0x57950d(0x122)]||function(_0x15a5fa){const _0x3c1457=a551_0x57950d;return _0x15a5fa&&_0x15a5fa[_0x3c1457(0x11b)]?_0x15a5fa:{'default':_0x15a5fa};};Object[a551_0x57950d(0x12c)](exports,a551_0x57950d(0x11b),{'value':!![]}),exports[a551_0x57950d(0x12b)]=void 0x0;function a551_0x532e(_0x3a10ac,_0x4ff224){const _0x5f1b62=a551_0x5f1b();return a551_0x532e=function(_0x532e46,_0x3c3f03){_0x532e46=_0x532e46-0x115;let _0x142c81=_0x5f1b62[_0x532e46];return _0x142c81;},a551_0x532e(_0x3a10ac,_0x4ff224);}const index_1=__importDefault(require(a551_0x57950d(0x126))),sequelize_1=require(a551_0x57950d(0x134)),TicketsAttendance=async({initialDate:_0x183372,finalDate:_0x47dc08,companyId:_0x336240})=>{const _0x1b9faf=a551_0x57950d,_0x5405f3=_0x1b9faf(0x132)+_0x336240,_0x61c1a1=await index_1[_0x1b9faf(0x11e)][_0x1b9faf(0x11c)](_0x5405f3,{'type':sequelize_1[_0x1b9faf(0x123)]['SELECT']}),_0x1f72a6=_0x1b9faf(0x118)+_0x336240+_0x1b9faf(0x130)+_0x183372+_0x1b9faf(0x12a)+_0x47dc08+_0x1b9faf(0x115),_0x1c9654=await index_1[_0x1b9faf(0x11e)]['query'](_0x1f72a6,{'type':sequelize_1['QueryTypes'][_0x1b9faf(0x117)]});return _0x61c1a1[_0x1b9faf(0x11f)](_0x39076c=>{const _0x15f437=_0x1b9faf;let _0x4df1f4=_0x1c9654[_0x15f437(0x120)](_0x386daf=>_0x386daf['nome']===_0x39076c[_0x15f437(0x116)]);_0x4df1f4===-0x1&&_0x1c9654[_0x15f437(0x11d)]({'quantidade':0x0,'nome':_0x39076c[_0x15f437(0x116)]});}),{'data':_0x1c9654};};function a551_0x5f1b(){const _0x2562fc=['\x2000:00:00\x27\x0a\x20\x20\x20\x20and\x20tt.\x22createdAt\x22\x20<=\x20\x27','TicketsAttendance','defineProperty','12NNUJPI','4CdOeHq','1290843HVGYmI','\x0a\x20\x20\x20\x20and\x20\x22ticketId\x22\x20is\x20not\x20null\x0a\x20\x20\x20\x20and\x20tt.\x22userId\x22\x20is\x20not\x20null\x0a\x20\x20\x20\x20and\x20tt.\x22createdAt\x22\x20>=\x20\x27','5gFfjga','select\x20u.name\x20from\x20\x22Users\x22\x20u\x20where\x20u.\x22companyId\x22\x20=\x20','138655witebe','sequelize','\x2023:59:59\x27\x0a\x20\x20group\x20by\x0a\x20\x20\x20\x20nome\x0a\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20nome\x20asc','name','SELECT','\x0a\x20\x20select\x0a\x20\x20\x20\x20COUNT(*)\x20AS\x20quantidade,\x0a\x20\x20\x20\x20u.name\x20AS\x20nome\x0a\x20\x20from\x0a\x20\x20\x20\x20\x22TicketTraking\x22\x20tt\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20u.id\x20=\x20tt.\x22userId\x22\x0a\x20\x20where\x0a\x20\x20\x20\x20tt.\x22companyId\x22\x20=\x20','30QCaUiD','635568QJgRHt','__esModule','query','push','default','map','findIndex','18dmHfca','__importDefault','QueryTypes','1426655juxXbO','18WhXXBn','../../database/index','136042DwJBit','567378QJxkKI','4133727elLvwu'];a551_0x5f1b=function(){return _0x2562fc;};return a551_0x5f1b();}exports['TicketsAttendance']=TicketsAttendance;