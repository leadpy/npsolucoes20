'use strict';function a505_0x1426(_0x5297f4,_0x46657e){const _0x2f0534=a505_0x2f05();return a505_0x1426=function(_0x142676,_0x5c1c1e){_0x142676=_0x142676-0x1df;let _0x4b807a=_0x2f0534[_0x142676];return _0x4b807a;},a505_0x1426(_0x5297f4,_0x46657e);}const a505_0x55b7eb=a505_0x1426;(function(_0x4b8889,_0x13fff1){const _0x16d392=a505_0x1426,_0x4d3755=_0x4b8889();while(!![]){try{const _0x3822be=parseInt(_0x16d392(0x1f2))/0x1*(-parseInt(_0x16d392(0x1e2))/0x2)+-parseInt(_0x16d392(0x1ed))/0x3*(parseInt(_0x16d392(0x1e3))/0x4)+parseInt(_0x16d392(0x1ea))/0x5*(parseInt(_0x16d392(0x1fa))/0x6)+-parseInt(_0x16d392(0x1e0))/0x7+parseInt(_0x16d392(0x1f7))/0x8+-parseInt(_0x16d392(0x1ef))/0x9*(parseInt(_0x16d392(0x1f8))/0xa)+parseInt(_0x16d392(0x1f9))/0xb;if(_0x3822be===_0x13fff1)break;else _0x4d3755['push'](_0x4d3755['shift']());}catch(_0x330bac){_0x4d3755['push'](_0x4d3755['shift']());}}}(a505_0x2f05,0xca89d));var __importDefault=this&&this[a505_0x55b7eb(0x1f5)]||function(_0x527abb){const _0x53709b=a505_0x55b7eb;return _0x527abb&&_0x527abb[_0x53709b(0x1e4)]?_0x527abb:{'default':_0x527abb};};function a505_0x2f05(){const _0x542939=['229370uhRPzd','22190707hvfihx','41802StfEYr','ticketTags.ticketId','findAndCountAll','1987993lJxjwe','length','11156OhfsIw','2318540nYgoXp','__esModule','../../models/ContactTag','defineProperty','like','contactTags.contactId','default','345JcMXtb','tagId','Tag.id','3mfApAK','contactTags.tagId','207UYFbFX','ASC','sequelize','64SpksXE','ticketTags','../../models/Tag','__importDefault','ticketTags.tagId','637712jTqwQo'];a505_0x2f05=function(){return _0x542939;};return a505_0x2f05();}Object[a505_0x55b7eb(0x1e6)](exports,a505_0x55b7eb(0x1e4),{'value':!![]});const sequelize_1=require(a505_0x55b7eb(0x1f1)),Tag_1=__importDefault(require(a505_0x55b7eb(0x1f4))),ContactTag_1=__importDefault(require(a505_0x55b7eb(0x1e5))),TicketTag_1=__importDefault(require('../../models/TicketTag')),ListService=async({companyId:_0x3b52a4,searchParam:_0x4dd2d5,pageNumber:pageNumber='1',kanban:kanban=0x0})=>{const _0x59a046=a505_0x55b7eb;let _0x3ff88e={};const _0x2495f6=0x14,_0x4588e7=_0x2495f6*(+pageNumber-0x1);if(Number(kanban)===0x0){_0x4dd2d5&&(_0x3ff88e={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x59a046(0x1e7)]]:'%'+_0x4dd2d5+'%'}},{'color':{[sequelize_1['Op']['like']]:'%'+_0x4dd2d5+'%'}}]});const {count:_0x9de8e3,rows:_0xe8a468}=await Tag_1[_0x59a046(0x1e9)][_0x59a046(0x1df)]({'where':{..._0x3ff88e,'companyId':_0x3b52a4,'kanban':kanban},'limit':_0x2495f6,'offset':_0x4588e7,'order':[['name',_0x59a046(0x1f0)]],'subQuery':![],'include':[{'model':ContactTag_1[_0x59a046(0x1e9)],'as':'contactTags','attributes':[_0x59a046(0x1eb)]}],'group':[_0x59a046(0x1ec),_0x59a046(0x1ee),_0x59a046(0x1e8)]}),_0x5af0f1=_0x9de8e3>_0x4588e7+_0xe8a468['length'];return{'tags':_0xe8a468,'count':_0x9de8e3,'hasMore':_0x5af0f1};}else{_0x4dd2d5&&(_0x3ff88e={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op']['like']]:'%'+_0x4dd2d5+'%'}},{'color':{[sequelize_1['Op'][_0x59a046(0x1e7)]]:'%'+_0x4dd2d5+'%'}}]});const {count:_0x205e9a,rows:_0x4832fa}=await Tag_1[_0x59a046(0x1e9)][_0x59a046(0x1df)]({'where':{..._0x3ff88e,'companyId':_0x3b52a4,'kanban':kanban},'limit':_0x2495f6,'offset':_0x4588e7,'order':[['name',_0x59a046(0x1f0)]],'subQuery':![],'include':[{'model':TicketTag_1[_0x59a046(0x1e9)],'as':_0x59a046(0x1f3),'attributes':[_0x59a046(0x1eb)]}],'group':[_0x59a046(0x1ec),_0x59a046(0x1f6),_0x59a046(0x1fb)]}),_0x12b075=_0x205e9a>_0x4588e7+_0x4832fa[_0x59a046(0x1e1)];return{'tags':_0x4832fa,'count':_0x205e9a,'hasMore':_0x12b075};}};exports[a505_0x55b7eb(0x1e9)]=ListService;