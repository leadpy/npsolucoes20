'use strict';function a455_0x2425(_0x432eb4,_0x4698d1){const _0x4ffc23=a455_0x4ffc();return a455_0x2425=function(_0x242581,_0x5b5239){_0x242581=_0x242581-0x1cf;let _0x364e54=_0x4ffc23[_0x242581];return _0x364e54;},a455_0x2425(_0x432eb4,_0x4698d1);}const a455_0x8bfd85=a455_0x2425;function a455_0x4ffc(){const _0x38e94f=['__esModule','1207173ytbdTG','CONTACT_NOT_FIND','82724tReLUo','44FPemZm','28zlNMgD','../../models/Contact','defineProperty','1483370vUffBR','3204tPTFqJ','findOne','610744hjrYQh','51685YBXtCW','578223AlODAK','87qMgDIZ','default','204VXvOIu'];a455_0x4ffc=function(){return _0x38e94f;};return a455_0x4ffc();}(function(_0x156cbf,_0x161c78){const _0x46d555=a455_0x2425,_0x206782=_0x156cbf();while(!![]){try{const _0x4c35c4=-parseInt(_0x46d555(0x1cf))/0x1*(parseInt(_0x46d555(0x1db))/0x2)+parseInt(_0x46d555(0x1d3))/0x3+-parseInt(_0x46d555(0x1d5))/0x4+parseInt(_0x46d555(0x1de))/0x5*(-parseInt(_0x46d555(0x1d1))/0x6)+parseInt(_0x46d555(0x1d7))/0x7*(-parseInt(_0x46d555(0x1dd))/0x8)+parseInt(_0x46d555(0x1df))/0x9+parseInt(_0x46d555(0x1da))/0xa*(parseInt(_0x46d555(0x1d6))/0xb);if(_0x4c35c4===_0x161c78)break;else _0x206782['push'](_0x206782['shift']());}catch(_0x5e8d75){_0x206782['push'](_0x206782['shift']());}}}(a455_0x4ffc,0x3b59d));var __importDefault=this&&this['__importDefault']||function(_0x48152f){const _0x4c3136=a455_0x2425;return _0x48152f&&_0x48152f[_0x4c3136(0x1d2)]?_0x48152f:{'default':_0x48152f};};Object[a455_0x8bfd85(0x1d9)](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),Contact_1=__importDefault(require(a455_0x8bfd85(0x1d8))),CreateContactService_1=__importDefault(require('./CreateContactService')),GetContactService=async({name:_0x454744,number:_0x2c8d90,companyId:_0x59d94f})=>{const _0x1cf19c=a455_0x8bfd85,_0x355941=await Contact_1['default'][_0x1cf19c(0x1dc)]({'where':{'number':_0x2c8d90,'companyId':_0x59d94f}});if(!_0x355941){const _0x115b8b=await(0x0,CreateContactService_1['default'])({'name':_0x454744,'number':_0x2c8d90,'companyId':_0x59d94f});if(_0x115b8b==null)throw new AppError_1['default'](_0x1cf19c(0x1d4));else return _0x115b8b;}return _0x355941;};exports[a455_0x8bfd85(0x1d0)]=GetContactService;