'use strict';const a397_0x13c5fc=a397_0x284a;(function(_0x421782,_0x4b4f76){const _0x2e2792=a397_0x284a,_0x1e2f70=_0x421782();while(!![]){try{const _0x18d496=-parseInt(_0x2e2792(0xbe))/0x1*(-parseInt(_0x2e2792(0xb9))/0x2)+parseInt(_0x2e2792(0xbb))/0x3+-parseInt(_0x2e2792(0xb4))/0x4+parseInt(_0x2e2792(0xb3))/0x5*(parseInt(_0x2e2792(0xb0))/0x6)+-parseInt(_0x2e2792(0xbd))/0x7*(parseInt(_0x2e2792(0xb8))/0x8)+parseInt(_0x2e2792(0xc8))/0x9+parseInt(_0x2e2792(0xc3))/0xa*(-parseInt(_0x2e2792(0xc0))/0xb);if(_0x18d496===_0x4b4f76)break;else _0x1e2f70['push'](_0x1e2f70['shift']());}catch(_0x3a1faf){_0x1e2f70['push'](_0x1e2f70['shift']());}}}(a397_0x2ea9,0xbf919));var __importDefault=this&&this[a397_0x13c5fc(0xb5)]||function(_0x4201d0){return _0x4201d0&&_0x4201d0['__esModule']?_0x4201d0:{'default':_0x4201d0};};function a397_0x2ea9(){const _0x1f610a=['parse','push','2473435cROffz','49944ZTflgz','__importDefault','__esModule','sort','16bobysV','847718VJbbNO','default','2198808EaRdxN','update','2688301VGQmht','3wFeCYu','filter','11IxHgSZ','chats','findIndex','11737450xUDWdH','findOne','log','defineProperty','stringify','2158038yheeML','6RwIAnW'];a397_0x2ea9=function(){return _0x1f610a;};return a397_0x2ea9();}Object[a397_0x13c5fc(0xc6)](exports,a397_0x13c5fc(0xb6),{'value':!![]});function a397_0x284a(_0x3a6a8e,_0xce9e04){const _0x2ea99e=a397_0x2ea9();return a397_0x284a=function(_0x284a88,_0x20b8b1){_0x284a88=_0x284a88-0xb0;let _0x5372e6=_0x2ea99e[_0x284a88];return _0x5372e6;},a397_0x284a(_0x3a6a8e,_0xce9e04);}const Baileys_1=__importDefault(require('../../models/Baileys')),createOrUpdateBaileysService=async({whatsappId:_0x15aaa4,contacts:_0x272109,chats:_0x4609f1})=>{const _0x32fefc=a397_0x13c5fc;try{const _0x745f8f=await Baileys_1[_0x32fefc(0xba)][_0x32fefc(0xc4)]({'where':{'whatsappId':_0x15aaa4}});if(_0x745f8f){const _0x3e2ae9=_0x745f8f[_0x32fefc(0xc1)]?JSON['parse'](_0x745f8f[_0x32fefc(0xc1)]):[],_0x22e553=_0x745f8f['contacts']?JSON[_0x32fefc(0xb1)](_0x745f8f['contacts']):[];if(_0x4609f1){_0x3e2ae9[_0x32fefc(0xb2)](..._0x4609f1),_0x3e2ae9[_0x32fefc(0xb7)]();const _0x5c05e1=_0x3e2ae9[_0x32fefc(0xbf)]((_0x320179,_0x27818f,_0x52e5cc)=>_0x52e5cc[_0x32fefc(0xc2)](_0x5e20bd=>_0x5e20bd['id']===_0x320179['id'])===_0x27818f);return await _0x745f8f[_0x32fefc(0xbc)]({'chats':JSON[_0x32fefc(0xc7)](_0x5c05e1)});}if(_0x272109){_0x22e553[_0x32fefc(0xb2)](..._0x272109),_0x22e553['sort']();const _0x7b531=_0x22e553[_0x32fefc(0xbf)]((_0x18a18f,_0x55d47d,_0x32a643)=>_0x32a643[_0x32fefc(0xc2)](_0x43383e=>_0x43383e['id']===_0x18a18f['id'])===_0x55d47d);return await _0x745f8f[_0x32fefc(0xbc)]({'contacts':JSON['stringify'](_0x7b531)});}}const _0x139cb6=await Baileys_1[_0x32fefc(0xba)]['create']({'whatsappId':_0x15aaa4,'contacts':JSON[_0x32fefc(0xc7)](_0x272109),'chats':JSON[_0x32fefc(0xc7)](_0x4609f1)});return await new Promise(_0x70f51d=>setTimeout(_0x70f51d,0x3e8)),_0x139cb6;}catch(_0x1deb90){console[_0x32fefc(0xc5)](_0x1deb90);throw new Error(_0x1deb90);}};exports['default']=createOrUpdateBaileysService;