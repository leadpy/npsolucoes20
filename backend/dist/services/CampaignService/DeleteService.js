'use strict';const a358_0x589ccc=a358_0x547b;(function(_0x555c3d,_0x4fcd47){const _0x5313ff=a358_0x547b,_0x1b3c1d=_0x555c3d();while(!![]){try{const _0x3362db=parseInt(_0x5313ff(0x99))/0x1+parseInt(_0x5313ff(0x96))/0x2+-parseInt(_0x5313ff(0x9a))/0x3+parseInt(_0x5313ff(0x97))/0x4+parseInt(_0x5313ff(0xa0))/0x5*(parseInt(_0x5313ff(0x9c))/0x6)+-parseInt(_0x5313ff(0x91))/0x7*(parseInt(_0x5313ff(0x94))/0x8)+parseInt(_0x5313ff(0xa2))/0x9;if(_0x3362db===_0x4fcd47)break;else _0x1b3c1d['push'](_0x1b3c1d['shift']());}catch(_0x199ff4){_0x1b3c1d['push'](_0x1b3c1d['shift']());}}}(a358_0xe533,0x9f4d1));var __importDefault=this&&this[a358_0x589ccc(0x9e)]||function(_0x5ceab8){return _0x5ceab8&&_0x5ceab8['__esModule']?_0x5ceab8:{'default':_0x5ceab8};};Object[a358_0x589ccc(0x9d)](exports,a358_0x589ccc(0x9f),{'value':!![]});function a358_0x547b(_0x51a84a,_0x43cbaf){const _0xe533ba=a358_0xe533();return a358_0x547b=function(_0x547bfe,_0x33d305){_0x547bfe=_0x547bfe-0x91;let _0xc68445=_0xe533ba[_0x547bfe];return _0xc68445;},a358_0x547b(_0x51a84a,_0x43cbaf);}function a358_0xe533(){const _0x1e0b81=['__esModule','1480IuFNrB','findOne','4236309HYeuTx','3465qSQNHH','default','Não\x20é\x20permitido\x20excluir\x20campanha\x20em\x20andamento','17272NeAwxL','destroy','411054nkySUk','3919388hZXPAU','status','347832sXdjmd','2083323MwrOne','ERR_NO_CAMPAIGN_FOUND','8346vShPtt','defineProperty','__importDefault'];a358_0xe533=function(){return _0x1e0b81;};return a358_0xe533();}const Campaign_1=__importDefault(require('../../models/Campaign')),AppError_1=__importDefault(require('../../errors/AppError')),DeleteService=async _0x281c99=>{const _0x5e9a71=a358_0x589ccc,_0x336698=await Campaign_1[_0x5e9a71(0x92)][_0x5e9a71(0xa1)]({'where':{'id':_0x281c99}});if(!_0x336698)throw new AppError_1[(_0x5e9a71(0x92))](_0x5e9a71(0x9b),0x194);if(_0x336698[_0x5e9a71(0x98)]==='EM_ANDAMENTO')throw new AppError_1[(_0x5e9a71(0x92))](_0x5e9a71(0x93),0x190);await _0x336698[_0x5e9a71(0x95)]();};exports[a358_0x589ccc(0x92)]=DeleteService;