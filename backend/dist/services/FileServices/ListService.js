'use strict';const a476_0x10afc5=a476_0xa06b;function a476_0xa06b(_0x34a545,_0x5cc8e0){const _0x1cc5d9=a476_0x1cc5();return a476_0xa06b=function(_0xa06ba8,_0x10c3e6){_0xa06ba8=_0xa06ba8-0xd0;let _0x17d83e=_0x1cc5d9[_0xa06ba8];return _0x17d83e;},a476_0xa06b(_0x34a545,_0x5cc8e0);}(function(_0x2bb4eb,_0x44f302){const _0x22d00b=a476_0xa06b,_0x3df78c=_0x2bb4eb();while(!![]){try{const _0x35815b=-parseInt(_0x22d00b(0xda))/0x1*(-parseInt(_0x22d00b(0xe1))/0x2)+parseInt(_0x22d00b(0xd3))/0x3*(parseInt(_0x22d00b(0xe0))/0x4)+parseInt(_0x22d00b(0xd2))/0x5+-parseInt(_0x22d00b(0xd4))/0x6+parseInt(_0x22d00b(0xd7))/0x7+-parseInt(_0x22d00b(0xdb))/0x8+-parseInt(_0x22d00b(0xd6))/0x9;if(_0x35815b===_0x44f302)break;else _0x3df78c['push'](_0x3df78c['shift']());}catch(_0x4ca416){_0x3df78c['push'](_0x3df78c['shift']());}}}(a476_0x1cc5,0x442de));var __importDefault=this&&this['__importDefault']||function(_0x44df68){const _0x127530=a476_0xa06b;return _0x44df68&&_0x44df68[_0x127530(0xd8)]?_0x44df68:{'default':_0x44df68};};Object[a476_0x10afc5(0xd1)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a476_0x10afc5(0xde)),Files_1=__importDefault(require(a476_0x10afc5(0xdd))),ListService=async({searchParam:_0x1c0a67,pageNumber:pageNumber='1',companyId:_0x5c621a})=>{const _0x19b281=a476_0x10afc5;let _0x1a02c0={};const _0x27900f=0x14,_0x3e6de0=_0x27900f*(+pageNumber-0x1);_0x1c0a67&&(_0x1a02c0={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op']['like']]:'%'+_0x1c0a67+'%'}}]});const {count:_0x55f7d8,rows:_0x287b58}=await Files_1[_0x19b281(0xdc)][_0x19b281(0xd0)]({'where':{'companyId':_0x5c621a,..._0x1a02c0},'limit':_0x27900f,'offset':_0x3e6de0,'order':[[_0x19b281(0xdf),_0x19b281(0xd9)]]}),_0x18fe07=_0x55f7d8>_0x3e6de0+_0x287b58[_0x19b281(0xd5)];return{'files':_0x287b58,'count':_0x55f7d8,'hasMore':_0x18fe07};};function a476_0x1cc5(){const _0x363e7b=['ASC','47hIrlKM','414448dEXYdm','default','../../models/Files','sequelize','name','132vQmGRF','6922HaxVUL','findAndCountAll','defineProperty','1372760psnYeZ','40419SvYoyr','827898YIesNX','length','8481141CiXmtN','3707004pEmsna','__esModule'];a476_0x1cc5=function(){return _0x363e7b;};return a476_0x1cc5();}exports[a476_0x10afc5(0xdc)]=ListService;