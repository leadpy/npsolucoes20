'use strict';const a458_0x57eced=a458_0x5d02;(function(_0x2b8959,_0x47939b){const _0x353890=a458_0x5d02,_0x4607c5=_0x2b8959();while(!![]){try{const _0x383e15=parseInt(_0x353890(0x102))/0x1*(parseInt(_0x353890(0x10f))/0x2)+parseInt(_0x353890(0x10a))/0x3+-parseInt(_0x353890(0x110))/0x4+parseInt(_0x353890(0x100))/0x5*(parseInt(_0x353890(0xff))/0x6)+-parseInt(_0x353890(0x111))/0x7+parseInt(_0x353890(0x107))/0x8+-parseInt(_0x353890(0x103))/0x9;if(_0x383e15===_0x47939b)break;else _0x4607c5['push'](_0x4607c5['shift']());}catch(_0x5a9834){_0x4607c5['push'](_0x4607c5['shift']());}}}(a458_0x5a24,0xca2dd));var __importDefault=this&&this[a458_0x57eced(0x10e)]||function(_0x565e91){const _0x42f79f=a458_0x57eced;return _0x565e91&&_0x565e91[_0x42f79f(0x109)]?_0x565e91:{'default':_0x565e91};};Object[a458_0x57eced(0x108)](exports,a458_0x57eced(0x109),{'value':!![]});function a458_0x5d02(_0x425f9b,_0x2735a0){const _0x5a2430=a458_0x5a24();return a458_0x5d02=function(_0x5d0223,_0x1d429c){_0x5d0223=_0x5d0223-0xff;let _0x5c5dad=_0x5a2430[_0x5d0223];return _0x5c5dad;},a458_0x5d02(_0x425f9b,_0x2735a0);}function a458_0x5a24(){const _0x5177f3=['../../errors/AppError','__importDefault','35510EvZOgH','1426484DwrhJq','5612894fymzrQ','10488eiixAL','2155henPzn','ASC','18ximvWw','6776334pIYieR','ERR_NO_CONTACT_FOUND','where','../../models/Contact','1394352gLYcpA','defineProperty','__esModule','4476726hlquVd','default','findAll'];a458_0x5a24=function(){return _0x5177f3;};return a458_0x5a24();}const Contact_1=__importDefault(require(a458_0x57eced(0x106))),AppError_1=__importDefault(require(a458_0x57eced(0x10d))),sequelize_1=require('sequelize'),NumberSimpleListService=async({number:_0x5e5da0,companyId:_0x13f6f5})=>{const _0xfc3adb=a458_0x57eced;let _0x186e39={'order':[['name',_0xfc3adb(0x101)]]};_0x5e5da0&&(_0x186e39['where']={'number':{[sequelize_1['Op']['like']]:'%'+_0x5e5da0+'%'}});_0x186e39[_0xfc3adb(0x105)]={..._0x186e39['where'],'companyId':_0x13f6f5};const _0x2aea0d=await Contact_1[_0xfc3adb(0x10b)][_0xfc3adb(0x10c)](_0x186e39);if(!_0x2aea0d)throw new AppError_1[(_0xfc3adb(0x10b))](_0xfc3adb(0x104),0x194);return _0x2aea0d;};exports['default']=NumberSimpleListService;