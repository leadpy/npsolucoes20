'use strict';const a565_0x11666b=a565_0x29e5;(function(_0x109cfb,_0xb35e){const _0x47c15c=a565_0x29e5,_0x271f4e=_0x109cfb();while(!![]){try{const _0x418290=parseInt(_0x47c15c(0x1a7))/0x1+-parseInt(_0x47c15c(0x1a6))/0x2*(-parseInt(_0x47c15c(0x19b))/0x3)+parseInt(_0x47c15c(0x198))/0x4+parseInt(_0x47c15c(0x1a3))/0x5+-parseInt(_0x47c15c(0x194))/0x6*(parseInt(_0x47c15c(0x195))/0x7)+-parseInt(_0x47c15c(0x196))/0x8*(parseInt(_0x47c15c(0x1a1))/0x9)+-parseInt(_0x47c15c(0x19a))/0xa;if(_0x418290===_0xb35e)break;else _0x271f4e['push'](_0x271f4e['shift']());}catch(_0x2c1d8b){_0x271f4e['push'](_0x271f4e['shift']());}}}(a565_0x2e60,0x716dd));function a565_0x2e60(){const _0x47560e=['__importDefault','../../database','\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(1)\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a','default','8102691ZjVphp','defineProperty','718830OAKsUN','admin','query','14cglSnw','869952ClKCdG','\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(distinct(c.\x22id\x22))\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22Tickets\x22\x20tc\x20ON\x20tc.\x22contactId\x22\x20=\x20c.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20ltc\x20ON\x20ltc.\x22ticketId\x22\x20=\x20tc.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20ltc.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20lt.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a','SELECT','402ZzMUqA','70364sQyPBp','8csDKBW','QueryTypes','2035932bAXhbX','__esModule','233970ORpOFm','231036GYbTXq','sequelize'];a565_0x2e60=function(){return _0x47560e;};return a565_0x2e60();}function a565_0x29e5(_0x59864c,_0x1fdea1){const _0x2e6092=a565_0x2e60();return a565_0x29e5=function(_0x29e5ab,_0x4b7057){_0x29e5ab=_0x29e5ab-0x193;let _0x4e2fd8=_0x2e6092[_0x29e5ab];return _0x4e2fd8;},a565_0x29e5(_0x59864c,_0x1fdea1);}var __importDefault=this&&this[a565_0x11666b(0x19d)]||function(_0x3b4d5f){return _0x3b4d5f&&_0x3b4d5f['__esModule']?_0x3b4d5f:{'default':_0x3b4d5f};};Object[a565_0x11666b(0x1a2)](exports,a565_0x11666b(0x199),{'value':!![]});const sequelize_1=require(a565_0x11666b(0x19c)),database_1=__importDefault(require(a565_0x11666b(0x19e))),query=a565_0x11666b(0x1a8),queryAdmin=a565_0x11666b(0x19f),DashTicketsAndTimes=async({startDate:_0x4ed868,endDate:_0x15ee33,tenantId:_0x1930f2,userId:_0xe84bfb,userProfile:_0x136e6e})=>{const _0xa9b7f2=a565_0x11666b,_0x58394d=await database_1[_0xa9b7f2(0x1a0)][_0xa9b7f2(0x1a5)](_0x136e6e==_0xa9b7f2(0x1a4)?queryAdmin:query,{'replacements':{'tenantId':_0x1930f2,'startDate':_0x4ed868,'endDate':_0x15ee33,'userId':_0xe84bfb},'type':sequelize_1[_0xa9b7f2(0x197)][_0xa9b7f2(0x193)]});return _0x58394d;};exports[a565_0x11666b(0x1a0)]=DashTicketsAndTimes;