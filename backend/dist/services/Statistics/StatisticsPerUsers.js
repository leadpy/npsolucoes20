'use strict';const a560_0x3062f9=a560_0x315a;(function(_0x1d3b1b,_0x2c7099){const _0x5bd552=a560_0x315a,_0x1b6056=_0x1d3b1b();while(!![]){try{const _0x2e5088=parseInt(_0x5bd552(0x15e))/0x1*(parseInt(_0x5bd552(0x162))/0x2)+parseInt(_0x5bd552(0x160))/0x3+parseInt(_0x5bd552(0x159))/0x4*(-parseInt(_0x5bd552(0x155))/0x5)+-parseInt(_0x5bd552(0x153))/0x6*(-parseInt(_0x5bd552(0x152))/0x7)+-parseInt(_0x5bd552(0x161))/0x8*(parseInt(_0x5bd552(0x15b))/0x9)+-parseInt(_0x5bd552(0x15a))/0xa*(-parseInt(_0x5bd552(0x158))/0xb)+-parseInt(_0x5bd552(0x156))/0xc;if(_0x2e5088===_0x2c7099)break;else _0x1b6056['push'](_0x1b6056['shift']());}catch(_0x4f821f){_0x1b6056['push'](_0x1b6056['shift']());}}}(a560_0x2a55,0x432d3));var __importDefault=this&&this['__importDefault']||function(_0x27ac3f){return _0x27ac3f&&_0x27ac3f['__esModule']?_0x27ac3f:{'default':_0x27ac3f};};Object['defineProperty'](exports,'__esModule',{'value':!![]});function a560_0x315a(_0x40c802,_0x1d7f19){const _0x2a5514=a560_0x2a55();return a560_0x315a=function(_0x315abe,_0x47a3c2){_0x315abe=_0x315abe-0x152;let _0x43e519=_0x2a5514[_0x315abe];return _0x43e519;},a560_0x315a(_0x40c802,_0x1d7f19);}const sequelize_1=require('sequelize'),database_1=__importDefault(require(a560_0x3062f9(0x15c))),query=a560_0x3062f9(0x15f),StatisticsPerUser=async({startDate:_0x24342c,endDate:_0x285f4c,companyId:_0x3d4f39})=>{const _0x2928bd=a560_0x3062f9,_0x5cb01a=await database_1[_0x2928bd(0x15d)][_0x2928bd(0x163)](query,{'replacements':{'companyId':_0x3d4f39,'startDate':_0x24342c,'endDate':_0x285f4c},'type':sequelize_1[_0x2928bd(0x154)][_0x2928bd(0x157)]});return _0x5cb01a;};function a560_0x2a55(){const _0x436a10=['10AFBEvr','1880838MmOHaO','../../database','default','151fVXJpw','\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20distinct(email),\x0a\x20\x20\x20\x20name,\x0a\x20\x20\x20\x20--,\x20email,)\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27open\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_em_atendimento,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27pending\x27)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_pendentes,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27closed\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_resolvidos,\x0a\x20\x20\x20\x20count(*)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_por_usuario,\x0a\x20\x20\x20\x20min((DATE_PART(\x27day\x27,\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000))\x20*\x2024\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27hour\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20*\x2060\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27minute\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20menor_tempo_por_usuario,\x0a\x20\x20\x20\x20max((DATE_PART(\x27day\x27,\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000))\x20*\x2024\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27hour\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20*\x2060\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27minute\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20maior_tempo_por_usuario,\x0a\x20\x20\x20\x20avg((DATE_PART(\x27day\x27,\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000))\x20*\x2024\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27hour\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20*\x2060\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27minute\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20OVER\x20(PARTITION\x20by\x20email)\x20\x20as\x20tempo_medio_por_usuario\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20t.\x22userId\x22\x20=\x20\x22u\x22.\x22id\x22\x0a\x20\x20\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20q.id\x20\x20=\x20t.\x22queueId\x22\x0a\x20\x20\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20order\x20by\x206\x20Desc\x0a','20886xKvdwC','8kUpbll','2392NjeWTP','query','7LDEnmK','1242726nwamXz','QueryTypes','1695rwcRon','1973304suczVH','SELECT','4642484FXbhOl','1984YxjjCu'];a560_0x2a55=function(){return _0x436a10;};return a560_0x2a55();}exports[a560_0x3062f9(0x15d)]=StatisticsPerUser;