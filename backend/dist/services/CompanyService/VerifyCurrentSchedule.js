'use strict';const a365_0x12d419=a365_0x232b;(function(_0x2ccdb4,_0x383b68){const _0x39f5ec=a365_0x232b,_0x549df6=_0x2ccdb4();while(!![]){try{const _0xef9aba=-parseInt(_0x39f5ec(0xdf))/0x1*(parseInt(_0x39f5ec(0xe5))/0x2)+-parseInt(_0x39f5ec(0xec))/0x3+parseInt(_0x39f5ec(0xdc))/0x4*(-parseInt(_0x39f5ec(0xef))/0x5)+-parseInt(_0x39f5ec(0xee))/0x6*(-parseInt(_0x39f5ec(0xe1))/0x7)+-parseInt(_0x39f5ec(0xde))/0x8+-parseInt(_0x39f5ec(0xea))/0x9*(-parseInt(_0x39f5ec(0xe9))/0xa)+parseInt(_0x39f5ec(0xeb))/0xb;if(_0xef9aba===_0x383b68)break;else _0x549df6['push'](_0x549df6['shift']());}catch(_0x2ab76b){_0x549df6['push'](_0x549df6['shift']());}}}(a365_0x1c3e,0x4dbfb));function a365_0x1c3e(){const _0x34335a=['2EWIkte','\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentSchedule,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeA\x27)\x20\x22startTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeA\x27)\x20\x22endTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeB\x27)\x20\x22startTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeB\x27)\x20\x22endTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeA\x27\x20=\x20\x27\x27\x20then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeA\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20)\x20)\x20or\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20))\x20\x22inActivity\x22\x0a\x20\x20\x20\x20\x20\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20q.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to_char(current_date,\x20\x27day\x27)\x20currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(array_to_json(array_agg(s))->>0)::jsonb\x20currentSchedule\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20\x22Queues\x22\x20q,\x20jsonb_array_elements(q.schedules)\x20s\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20s->>\x27weekdayEn\x27\x20like\x20trim(to_char(current_date,\x20\x27day\x27))\x20and\x20q.id\x20=\x20:queueId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20q.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x201,\x202\x0a\x20\x20\x20\x20\x20\x20)\x20s\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20','default','query','10gTokvJ','1855485UrEQiM','4510726iAYmoE','582063Idvtse','SELECT','647850iZxzEz','57935llhUMM','sequelize','__importDefault','76HvdHhJ','QueryTypes','181024rafeuG','292870nOsTLK','__esModule','28wfCqch','../../database','defineProperty','\x0a\x20\x20\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentSchedule,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeA\x27)\x20\x22startTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeA\x27)\x20\x22endTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeB\x27)\x20\x22startTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeB\x27)\x20\x22endTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeA\x27\x20=\x20\x27\x27\x20then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeA\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20)\x20)\x20or\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20))\x20\x22inActivity\x22\x0a\x20\x20\x20\x20\x20\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to_char(current_date,\x20\x27day\x27)\x20currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(array_to_json(array_agg(s))->>0)::jsonb\x20currentSchedule\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20\x22Companies\x22\x20c,\x20jsonb_array_elements(c.schedules)\x20s\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20s->>\x27weekdayEn\x27\x20like\x20trim(to_char(current_date,\x20\x27day\x27))\x20and\x20c.id\x20=\x20:companyId\x0a\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x201,\x202\x0a\x20\x20\x20\x20\x20\x20)\x20s\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20'];a365_0x1c3e=function(){return _0x34335a;};return a365_0x1c3e();}function a365_0x232b(_0x15a0f8,_0x3d74cb){const _0x1c3ec8=a365_0x1c3e();return a365_0x232b=function(_0x232bc6,_0x1e13f4){_0x232bc6=_0x232bc6-0xda;let _0x22729b=_0x1c3ec8[_0x232bc6];return _0x22729b;},a365_0x232b(_0x15a0f8,_0x3d74cb);}var __importDefault=this&&this[a365_0x12d419(0xdb)]||function(_0x440ab4){const _0x59de8a=a365_0x12d419;return _0x440ab4&&_0x440ab4[_0x59de8a(0xe0)]?_0x440ab4:{'default':_0x440ab4};};Object[a365_0x12d419(0xe3)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a365_0x12d419(0xda)),database_1=__importDefault(require(a365_0x12d419(0xe2))),VerifyCurrentSchedule=async(_0x2d3e8b,_0x28e199)=>{const _0x1a2c65=a365_0x12d419;if(_0x28e199===null||_0x28e199===undefined){const _0x51d42f=_0x1a2c65(0xe4),_0x538734=await database_1['default'][_0x1a2c65(0xe8)](_0x51d42f,{'replacements':{'companyId':_0x2d3e8b},'type':sequelize_1[_0x1a2c65(0xdd)][_0x1a2c65(0xed)],'plain':!![]});return _0x538734;}else{const _0x2ed817=_0x1a2c65(0xe6),_0x109678=await database_1[_0x1a2c65(0xe7)][_0x1a2c65(0xe8)](_0x2ed817,{'replacements':{'companyId':_0x2d3e8b,'queueId':_0x28e199},'type':sequelize_1['QueryTypes']['SELECT'],'plain':!![]});return _0x109678;}};exports[a365_0x12d419(0xe7)]=VerifyCurrentSchedule;