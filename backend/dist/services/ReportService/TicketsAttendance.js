'use strict';function a457_0x5eb0(){const _0x562e7e=['push','query','defineProperty','name','default','QueryTypes','\x2023:59:59\x27\x0a\x20\x20group\x20by\x0a\x20\x20\x20\x20nome\x0a\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20nome\x20asc','470283sLIBKc','TicketsAttendance','144098onGjlt','320BhnVXU','3240wMkiOB','\x0a\x20\x20\x20\x20and\x20\x22ticketId\x22\x20is\x20not\x20null\x0a\x20\x20\x20\x20and\x20tt.\x22userId\x22\x20is\x20not\x20null\x0a\x20\x20\x20\x20and\x20tt.\x22finishedAt\x22\x20>=\x20\x27','12VXofVV','select\x20u.name\x20from\x20\x22Users\x22\x20u\x20where\x20u.\x22companyId\x22\x20=\x20','18Lheeuc','1188935AIxQlP','\x0a\x20\x20select\x0a\x20\x20\x20\x20COUNT(*)\x20AS\x20quantidade,\x0a\x20\x20\x20\x20u.name\x20AS\x20nome\x0a\x20\x20from\x0a\x20\x20\x20\x20\x22TicketTraking\x22\x20tt\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20u.id\x20=\x20tt.\x22userId\x22\x0a\x20\x20where\x0a\x20\x20\x20\x20tt.\x22companyId\x22\x20=\x20','8408AOMwYY','3210312EwOZTX','sequelize','SELECT','nome','663677pZlzNP','__esModule','1274539VPYgAA'];a457_0x5eb0=function(){return _0x562e7e;};return a457_0x5eb0();}const a457_0x57b335=a457_0x14e2;(function(_0x49e476,_0x3b16f5){const _0x3b16d6=a457_0x14e2,_0x2630be=_0x49e476();while(!![]){try{const _0x539f22=-parseInt(_0x3b16d6(0xee))/0x1+parseInt(_0x3b16d6(0xe0))/0x2*(parseInt(_0x3b16d6(0xe6))/0x3)+-parseInt(_0x3b16d6(0xea))/0x4+parseInt(_0x3b16d6(0xe7))/0x5*(-parseInt(_0x3b16d6(0xe4))/0x6)+parseInt(_0x3b16d6(0xf0))/0x7+parseInt(_0x3b16d6(0xe9))/0x8*(parseInt(_0x3b16d6(0xe2))/0x9)+-parseInt(_0x3b16d6(0xe1))/0xa*(-parseInt(_0x3b16d6(0xde))/0xb);if(_0x539f22===_0x3b16f5)break;else _0x2630be['push'](_0x2630be['shift']());}catch(_0x5e9986){_0x2630be['push'](_0x2630be['shift']());}}}(a457_0x5eb0,0x664b6));var __importDefault=this&&this['__importDefault']||function(_0x39cbcb){const _0x25c68d=a457_0x14e2;return _0x39cbcb&&_0x39cbcb[_0x25c68d(0xef)]?_0x39cbcb:{'default':_0x39cbcb};};function a457_0x14e2(_0x333c71,_0x57da3b){const _0x5eb052=a457_0x5eb0();return a457_0x14e2=function(_0x14e24a,_0x3870ea){_0x14e24a=_0x14e24a-0xdd;let _0x2b80f4=_0x5eb052[_0x14e24a];return _0x2b80f4;},a457_0x14e2(_0x333c71,_0x57da3b);}Object[a457_0x57b335(0xf3)](exports,a457_0x57b335(0xef),{'value':!![]}),exports[a457_0x57b335(0xdf)]=void 0x0;const index_1=__importDefault(require('../../database/index')),sequelize_1=require(a457_0x57b335(0xeb)),TicketsAttendance=async({initialDate:_0x54cfd3,finalDate:_0x26f746,companyId:_0x2f25db})=>{const _0x13051f=a457_0x57b335,_0x39d4c9=_0x13051f(0xe5)+_0x2f25db,_0x12ad0d=await index_1[_0x13051f(0xf5)][_0x13051f(0xf2)](_0x39d4c9,{'type':sequelize_1[_0x13051f(0xf6)][_0x13051f(0xec)]}),_0x58cce3=_0x13051f(0xe8)+_0x2f25db+_0x13051f(0xe3)+_0x54cfd3+'\x2000:00:00\x27\x0a\x20\x20\x20\x20and\x20tt.\x22finishedAt\x22\x20<=\x20\x27'+_0x26f746+_0x13051f(0xdd),_0xc7d4ea=await index_1[_0x13051f(0xf5)][_0x13051f(0xf2)](_0x58cce3,{'type':sequelize_1['QueryTypes'][_0x13051f(0xec)]});return _0x12ad0d['map'](_0x5a889e=>{const _0x3fd478=_0x13051f;let _0x2b9bfe=_0xc7d4ea['findIndex'](_0x5e0f73=>_0x5e0f73[_0x3fd478(0xed)]===_0x5a889e[_0x3fd478(0xf4)]);_0x2b9bfe===-0x1&&_0xc7d4ea[_0x3fd478(0xf1)]({'quantidade':0x0,'nome':_0x5a889e['name']});}),{'data':_0xc7d4ea};};exports[a457_0x57b335(0xdf)]=TicketsAttendance;