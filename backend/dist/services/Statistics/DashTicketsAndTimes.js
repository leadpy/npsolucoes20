'use strict';const a565_0xdd85c4=a565_0x3a24;function a565_0x3a24(_0x35db0f,_0x4bc565){const _0x456b4f=a565_0x456b();return a565_0x3a24=function(_0x3a24b6,_0x1a9690){_0x3a24b6=_0x3a24b6-0x88;let _0xe03c59=_0x456b4f[_0x3a24b6];return _0xe03c59;},a565_0x3a24(_0x35db0f,_0x4bc565);}(function(_0x13980e,_0x521029){const _0x252182=a565_0x3a24,_0x2a91b0=_0x13980e();while(!![]){try{const _0x471a9a=parseInt(_0x252182(0x93))/0x1*(-parseInt(_0x252182(0x95))/0x2)+parseInt(_0x252182(0x94))/0x3*(-parseInt(_0x252182(0x88))/0x4)+-parseInt(_0x252182(0x8b))/0x5+-parseInt(_0x252182(0x8a))/0x6+parseInt(_0x252182(0x90))/0x7*(-parseInt(_0x252182(0x96))/0x8)+-parseInt(_0x252182(0x8f))/0x9*(-parseInt(_0x252182(0x91))/0xa)+parseInt(_0x252182(0x89))/0xb;if(_0x471a9a===_0x521029)break;else _0x2a91b0['push'](_0x2a91b0['shift']());}catch(_0x32ccba){_0x2a91b0['push'](_0x2a91b0['shift']());}}}(a565_0x456b,0xebeba));function a565_0x456b(){const _0x1047f1=['1180665TAQINT','63qpLjLr','20YOZeRK','\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(distinct(c.\x22id\x22))\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22Tickets\x22\x20tc\x20ON\x20tc.\x22contactId\x22\x20=\x20c.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20ltc\x20ON\x20ltc.\x22ticketId\x22\x20=\x20tc.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20ltc.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20lt.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a','74GUmhHa','8811igRqvK','41326PgzHIL','127416maVpCB','\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(1)\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a','__esModule','query','admin','2088wLJUzG','50485446DotYNO','3331602AIssPK','624200tJugnH','sequelize','QueryTypes','default'];a565_0x456b=function(){return _0x1047f1;};return a565_0x456b();}var __importDefault=this&&this['__importDefault']||function(_0x33dcdd){const _0x3a7c80=a565_0x3a24;return _0x33dcdd&&_0x33dcdd[_0x3a7c80(0x98)]?_0x33dcdd:{'default':_0x33dcdd};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=require(a565_0xdd85c4(0x8c)),database_1=__importDefault(require('../../database')),query=a565_0xdd85c4(0x92),queryAdmin=a565_0xdd85c4(0x97),DashTicketsAndTimes=async({startDate:_0x2f4fc6,endDate:_0x4d385a,tenantId:_0x287e79,userId:_0x2305b5,userProfile:_0x5ea24a})=>{const _0x3f8e29=a565_0xdd85c4,_0xce3a29=await database_1[_0x3f8e29(0x8e)][_0x3f8e29(0x99)](_0x5ea24a==_0x3f8e29(0x9a)?queryAdmin:query,{'replacements':{'tenantId':_0x287e79,'startDate':_0x2f4fc6,'endDate':_0x4d385a,'userId':_0x2305b5},'type':sequelize_1[_0x3f8e29(0x8d)]['SELECT']});return _0xce3a29;};exports[a565_0xdd85c4(0x8e)]=DashTicketsAndTimes;