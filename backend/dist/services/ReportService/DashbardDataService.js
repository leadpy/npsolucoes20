'use strict';const a540_0x556dab=a540_0x4d20;function a540_0x39ca(){const _0x236507=['../../database','10sjFBgO','prototype','lodash','push','__esModule','480SfvREB','writable','357250wqwjao','\x0a\x20\x20\x20\x20with\x0a\x20\x20\x20\x20traking\x20as\x20(\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.name\x20\x22companyName\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u.name\x20\x22userName\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u.online\x20\x22userOnline\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20w.name\x20\x22whatsappName\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20ct.name\x20\x22contactName\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20ct.number\x20\x22contactNumber\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(t.\x22status\x22\x20=\x20\x27closed\x27)\x20\x22finished\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(tt.\x22userId\x22\x20is\x20null\x20and\x20coalesce(tt.\x22closedAt\x22,tt.\x22finishedAt\x22)\x20is\x20null\x20and\x20t.\x22status\x22\x20=\x20\x27pending\x27)\x20\x22pending\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20coalesce((\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27day\x27,\x20age(coalesce(tt.\x22closedAt\x22,tt.\x22finishedAt\x22)))\x20*\x2024\x20*\x2060)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27hour\x27,\x20age(coalesce(tt.\x22closedAt\x22,tt.\x22finishedAt\x22),\x20tt.\x22startedAt\x22))\x20*\x2060)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27minutes\x27,\x20age(coalesce(tt.\x22closedAt\x22,tt.\x22finishedAt\x22),\x20tt.\x22startedAt\x22)))\x0a\x20\x20\x20\x20\x20\x20\x20\x20),\x200)\x20\x22supportTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20coalesce((\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27day\x27,\x20age(\x20tt.\x22queuedAt\x22,\x20tt.\x22startedAt\x22))\x20*\x2024\x20*\x2060)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27hour\x27,\x20age(tt.\x22queuedAt\x22,\x20tt.\x22startedAt\x22))\x20*\x2060)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27minutes\x27,\x20age(tt.\x22queuedAt\x22,\x20tt.\x22startedAt\x22)))\x0a\x20\x20\x20\x20\x20\x20\x20\x20),\x200)\x20\x22waitTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20t.status,\x0a\x20\x20\x20\x20\x20\x20\x20\x20tt.*,\x0a\x20\x20\x20\x20\x20\x20\x20\x20ct.\x22id\x22\x20\x22contactId\x22\x0a\x20\x20\x20\x20\x20\x20from\x20\x22TicketTraking\x22\x20tt\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Companies\x22\x20c\x20on\x20c.id\x20=\x20tt.\x22companyId\x22\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20u.id\x20=\x20tt.\x22userId\x22\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Whatsapps\x22\x20w\x20on\x20w.id\x20=\x20tt.\x22whatsappId\x22\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Tickets\x22\x20t\x20on\x20t.id\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Contacts\x22\x20ct\x20on\x20ct.id\x20=\x20t.\x22contactId\x22\x0a\x20\x20\x20\x20\x20\x20--\x20filterPeriod\x0a\x20\x20\x20\x20),\x0a\x20\x20\x20\x20counters\x20as\x20(\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20avg(\x22supportTime\x22)\x20from\x20traking\x20where\x20\x22supportTime\x22\x20>\x200)\x20\x22avgSupportTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20avg(\x22waitTime\x22)\x20from\x20traking\x20where\x20\x22waitTime\x22\x20>\x200)\x20\x22avgWaitTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(distinct\x20\x22id\x22)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20status\x20like\x20\x27open\x27\x20and\x20t.\x22companyId\x22\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22supportHappening\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(distinct\x20\x22id\x22)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20status\x20like\x20\x27pending\x27\x20and\x20t.\x22companyId\x22\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22supportPending\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20finished)\x20\x22supportFinished\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(leads.id)\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ct1.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20count(tt1.id)\x20total\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20tt1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Tickets\x22\x20t1\x20on\x20t1.id\x20=\x20tt1.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Contacts\x22\x20ct1\x20on\x20ct1.id\x20=\x20t1.\x22contactId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20group\x20by\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20having\x20count(tt1.id)\x20=\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20leads\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22leads\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27closed\x27)\x20\x22tickets\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27nps\x27)\x20\x22waitRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27closed\x27\x20and\x20\x22rated\x22\x20=\x20false)\x20\x22withoutRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27closed\x27\x20and\x20\x22rated\x22\x20=\x20true)\x20\x22withRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(((select\x20count(id)\x20from\x20traking\x20where\x20\x22rated\x22\x20=\x20true)*\x20100)\x20/\x20nullif((select\x20count(id)\x20from\x20traking),0))\x20\x22percRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=\x20true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20>\x208\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsPromotersPerc\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=\x20true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20in\x20(7,8)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsPassivePerc\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=\x20true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20<\x207\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsDetractorsPerc\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20sum(nps.promoter)\x20-\x20sum(nps.detractor)\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x20promoter\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20,0\x20detractor\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20>\x208\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20union\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200,(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.rate\x20<\x207))\x20nps\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsScore\x22\x0a\x20\x20\x20\x20),\x0a\x20\x20\x20\x20attedants\x20as\x20(\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20u1.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u1.\x22name\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u1.\x22online\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20avg(t.\x22waitTime\x22)\x20\x22avgWaitTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20avg(t.\x22supportTime\x22)\x20\x22avgSupportTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20count(t.\x22id\x22)\x20\x22tickets\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20round(coalesce(avg(ur.\x22rate\x22),\x200),2)\x20\x22rating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20coalesce(count(ur.\x22id\x22),\x200)\x20\x22countRating\x22\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Users\x22\x20u1\x0a\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20traking\x20t\x20on\x20t.\x22userId\x22\x20=\x20u1.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22userId\x22\x20=\x20t.\x22userId\x22\x20and\x20ur.\x22ticketId\x22\x20=\x20t.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20where\x20u1.\x22companyId\x22\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20group\x20by\x201,\x202\x0a\x20\x20\x20\x20\x20\x20order\x20by\x20u1.\x22name\x22\x0a\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(select\x20coalesce(jsonb_build_object(\x27counters\x27,\x20c.*)->>\x27counters\x27,\x20\x27{}\x27)::jsonb\x20from\x20counters\x20c)\x20counters,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(select\x20coalesce(json_agg(a.*),\x20\x27[]\x27)::jsonb\x20from\x20attedants\x20a)\x20attendants;\x0a\x20\x20','__createBinding','361067peBjrr','days','\x20and\x20tt.\x22createdAt\x22\x20>=\x20(now()\x20-\x20\x27?\x20days\x27::interval)','1734GFbGtT','getOwnPropertyDescriptor','__setModuleDefault','date_to','sequelize','replace','2401742HgvJVD','6DMgvpo','create','851480VUEiyK','__importStar','where\x20tt.\x22companyId\x22\x20=\x20?','566876QZpeYv','\x20and\x20tt.\x22createdAt\x22\x20>=\x20?','configurable','108515qcxjlz','call','default','has','get','query','\x2023:59:59','hasOwnProperty','defineProperty','108vsrtxH','--\x20filterPeriod','96TXSMJA'];a540_0x39ca=function(){return _0x236507;};return a540_0x39ca();}(function(_0x2e72b6,_0x409369){const _0x25c67a=a540_0x4d20,_0x5cdbce=_0x2e72b6();while(!![]){try{const _0x4e179b=parseInt(_0x25c67a(0x1f8))/0x1+-parseInt(_0x25c67a(0x1f3))/0x2*(parseInt(_0x25c67a(0x1fb))/0x3)+parseInt(_0x25c67a(0x1de))/0x4*(parseInt(_0x25c67a(0x1ee))/0x5)+parseInt(_0x25c67a(0x202))/0x6*(parseInt(_0x25c67a(0x201))/0x7)+-parseInt(_0x25c67a(0x1db))/0x8+parseInt(_0x25c67a(0x1ea))/0x9*(-parseInt(_0x25c67a(0x1f5))/0xa)+-parseInt(_0x25c67a(0x1e1))/0xb*(parseInt(_0x25c67a(0x1ec))/0xc);if(_0x4e179b===_0x409369)break;else _0x5cdbce['push'](_0x5cdbce['shift']());}catch(_0x14972b){_0x5cdbce['push'](_0x5cdbce['shift']());}}}(a540_0x39ca,0x39554));var __createBinding=this&&this[a540_0x556dab(0x1f7)]||(Object[a540_0x556dab(0x203)]?function(_0x4b4f45,_0x367706,_0x2230f9,_0x77f027){const _0x347a29=a540_0x556dab;if(_0x77f027===undefined)_0x77f027=_0x2230f9;var _0x2ba384=Object[_0x347a29(0x1fc)](_0x367706,_0x2230f9);(!_0x2ba384||(_0x347a29(0x1e5)in _0x2ba384?!_0x367706['__esModule']:_0x2ba384[_0x347a29(0x1f4)]||_0x2ba384[_0x347a29(0x1e0)]))&&(_0x2ba384={'enumerable':!![],'get':function(){return _0x367706[_0x2230f9];}}),Object[_0x347a29(0x1e9)](_0x4b4f45,_0x77f027,_0x2ba384);}:function(_0x2171cb,_0x386240,_0xfb4202,_0x47ee1c){if(_0x47ee1c===undefined)_0x47ee1c=_0xfb4202;_0x2171cb[_0x47ee1c]=_0x386240[_0xfb4202];}),__setModuleDefault=this&&this[a540_0x556dab(0x1fd)]||(Object['create']?function(_0x2b58de,_0x15db30){const _0x47768b=a540_0x556dab;Object[_0x47768b(0x1e9)](_0x2b58de,_0x47768b(0x1e3),{'enumerable':!![],'value':_0x15db30});}:function(_0x32e32e,_0xfc022f){const _0x3d852f=a540_0x556dab;_0x32e32e[_0x3d852f(0x1e3)]=_0xfc022f;}),__importStar=this&&this[a540_0x556dab(0x1dc)]||function(_0x4d8f19){const _0x822719=a540_0x556dab;if(_0x4d8f19&&_0x4d8f19['__esModule'])return _0x4d8f19;var _0x4ee0a2={};if(_0x4d8f19!=null){for(var _0x2ce425 in _0x4d8f19)if(_0x2ce425!=='default'&&Object[_0x822719(0x1ef)][_0x822719(0x1e8)][_0x822719(0x1e2)](_0x4d8f19,_0x2ce425))__createBinding(_0x4ee0a2,_0x4d8f19,_0x2ce425);}return __setModuleDefault(_0x4ee0a2,_0x4d8f19),_0x4ee0a2;},__importDefault=this&&this['__importDefault']||function(_0x484d09){const _0x261cf5=a540_0x556dab;return _0x484d09&&_0x484d09[_0x261cf5(0x1f2)]?_0x484d09:{'default':_0x484d09};};Object['defineProperty'](exports,a540_0x556dab(0x1f2),{'value':!![]});const sequelize_1=require(a540_0x556dab(0x1ff)),_=__importStar(require(a540_0x556dab(0x1f0))),database_1=__importDefault(require(a540_0x556dab(0x1ed))),fs=require('fs');async function DashboardDataService(_0xdb33b5,_0x46ebfe){const _0x6c3e99=a540_0x556dab,_0x1f7780=_0x6c3e99(0x1f6);let _0x2bcf7c=_0x6c3e99(0x1dd);const _0x2d94d4=[_0xdb33b5];_[_0x6c3e99(0x1e4)](_0x46ebfe,_0x6c3e99(0x1f9))&&(_0x2bcf7c+=_0x6c3e99(0x1fa),_0x2d94d4[_0x6c3e99(0x1f1)](parseInt((''+_0x46ebfe[_0x6c3e99(0x1f9)])[_0x6c3e99(0x200)](/\D/g,''),0xa)));_[_0x6c3e99(0x1e4)](_0x46ebfe,'date_from')&&(_0x2bcf7c+=_0x6c3e99(0x1df),_0x2d94d4['push'](_0x46ebfe['date_from']+'\x2000:00:00'));_['has'](_0x46ebfe,_0x6c3e99(0x1fe))&&(_0x2bcf7c+='\x20and\x20tt.\x22createdAt\x22\x20<=\x20?',_0x2d94d4['push'](_0x46ebfe[_0x6c3e99(0x1fe)]+_0x6c3e99(0x1e7)));_0x2d94d4['push'](_0xdb33b5),_0x2d94d4[_0x6c3e99(0x1f1)](_0xdb33b5),_0x2d94d4[_0x6c3e99(0x1f1)](_0xdb33b5),_0x2d94d4[_0x6c3e99(0x1f1)](_0xdb33b5),_0x2d94d4['push'](_0xdb33b5);const _0x4d0858=_0x1f7780[_0x6c3e99(0x200)](_0x6c3e99(0x1eb),_0x2bcf7c),_0x4a468b=await database_1['default'][_0x6c3e99(0x1e6)](_0x4d0858,{'replacements':_0x2d94d4,'type':sequelize_1['QueryTypes']['SELECT'],'plain':!![]});return _0x4a468b;}function a540_0x4d20(_0x1cf63b,_0x1eb8de){const _0x39ca8c=a540_0x39ca();return a540_0x4d20=function(_0x4d202c,_0x3b4341){_0x4d202c=_0x4d202c-0x1db;let _0xffd535=_0x39ca8c[_0x4d202c];return _0xffd535;},a540_0x4d20(_0x1cf63b,_0x1eb8de);}exports[a540_0x556dab(0x1e3)]=DashboardDataService;