'use strict';const a396_0x15d7a3=a396_0x3db6;(function(_0x510cad,_0x9c0db5){const _0x36c26d=a396_0x3db6,_0x3f26d7=_0x510cad();while(!![]){try{const _0x4fb805=parseInt(_0x36c26d(0x197))/0x1+-parseInt(_0x36c26d(0x191))/0x2+-parseInt(_0x36c26d(0x187))/0x3+parseInt(_0x36c26d(0x19a))/0x4*(parseInt(_0x36c26d(0x19c))/0x5)+-parseInt(_0x36c26d(0x1a0))/0x6*(parseInt(_0x36c26d(0x195))/0x7)+parseInt(_0x36c26d(0x190))/0x8*(parseInt(_0x36c26d(0x19e))/0x9)+-parseInt(_0x36c26d(0x18e))/0xa*(-parseInt(_0x36c26d(0x1a1))/0xb);if(_0x4fb805===_0x9c0db5)break;else _0x3f26d7['push'](_0x3f26d7['shift']());}catch(_0x341472){_0x3f26d7['push'](_0x3f26d7['shift']());}}}(a396_0xa11e,0xeef1e));function a396_0x3db6(_0x5399c0,_0x4581f5){const _0xa11e25=a396_0xa11e();return a396_0x3db6=function(_0x3db6d2,_0x3df0ab){_0x3db6d2=_0x3db6d2-0x187;let _0x59f8c5=_0xa11e25[_0x3db6d2];return _0x59f8c5;},a396_0x3db6(_0x5399c0,_0x4581f5);}var __importDefault=this&&this[a396_0x15d7a3(0x198)]||function(_0x16f2cd){const _0x58cff2=a396_0x15d7a3;return _0x16f2cd&&_0x16f2cd[_0x58cff2(0x193)]?_0x16f2cd:{'default':_0x16f2cd};};Object[a396_0x15d7a3(0x19b)](exports,a396_0x15d7a3(0x193),{'value':!![]}),exports[a396_0x15d7a3(0x18d)]=void 0x0;const jsonwebtoken_1=require(a396_0x15d7a3(0x199)),AppError_1=__importDefault(require('../../errors/AppError')),ShowUserService_1=__importDefault(require('../UserServices/ShowUserService')),auth_1=__importDefault(require(a396_0x15d7a3(0x19f))),CreateTokens_1=require(a396_0x15d7a3(0x18a)),RefreshTokenService=async(_0x96f77c,_0x524c5a)=>{const _0x384446=a396_0x15d7a3;try{const _0x3c3e7f=(0x0,jsonwebtoken_1[_0x384446(0x189)])(_0x524c5a,auth_1['default'][_0x384446(0x18f)]),{id:_0x28911f,tokenVersion:_0x51ca2c,companyId:_0x4df534}=_0x3c3e7f,_0x4e2253=await(0x0,ShowUserService_1[_0x384446(0x19d)])(_0x28911f,_0x4df534);if(_0x4e2253[_0x384446(0x196)]!==_0x51ca2c){_0x96f77c['clearCookie'](_0x384446(0x18b));throw new AppError_1[(_0x384446(0x19d))](_0x384446(0x188),0x191);}const _0x52708f=(0x0,CreateTokens_1[_0x384446(0x192)])(_0x4e2253),_0x209a01=(0x0,CreateTokens_1[_0x384446(0x194)])(_0x4e2253);return{'user':_0x4e2253,'newToken':_0x52708f,'refreshToken':_0x209a01};}catch(_0x312217){_0x96f77c[_0x384446(0x18c)](_0x384446(0x18b));throw new AppError_1[(_0x384446(0x19d))](_0x384446(0x188),0x191);}};function a396_0xa11e(){const _0x4eb203=['clearCookie','RefreshTokenService','765770igLgUA','refreshSecret','117336levlqQ','2488766ZOiRih','createAccessToken','__esModule','createRefreshToken','3836UaHNhH','tokenVersion','1767393gquLeG','__importDefault','jsonwebtoken','25588OgGyfw','defineProperty','655VIcLqt','default','567KIBLId','../../config/auth','4518SEDFbY','11scbSfy','2910759jrCVHl','ERR_SESSION_EXPIRED','verify','../../helpers/CreateTokens','jrt'];a396_0xa11e=function(){return _0x4eb203;};return a396_0xa11e();}exports[a396_0x15d7a3(0x18d)]=RefreshTokenService;