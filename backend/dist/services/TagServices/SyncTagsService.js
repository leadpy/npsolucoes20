'use strict';const a568_0x47001b=a568_0x57b6;(function(_0x448e02,_0x529098){const _0x436a26=a568_0x57b6,_0x9e6a97=_0x448e02();while(!![]){try{const _0x5a61bf=-parseInt(_0x436a26(0x16d))/0x1*(-parseInt(_0x436a26(0x16e))/0x2)+parseInt(_0x436a26(0x170))/0x3*(-parseInt(_0x436a26(0x175))/0x4)+-parseInt(_0x436a26(0x178))/0x5*(-parseInt(_0x436a26(0x173))/0x6)+-parseInt(_0x436a26(0x176))/0x7+-parseInt(_0x436a26(0x179))/0x8*(parseInt(_0x436a26(0x16f))/0x9)+parseInt(_0x436a26(0x16b))/0xa*(parseInt(_0x436a26(0x169))/0xb)+-parseInt(_0x436a26(0x172))/0xc*(parseInt(_0x436a26(0x16a))/0xd);if(_0x5a61bf===_0x529098)break;else _0x9e6a97['push'](_0x9e6a97['shift']());}catch(_0x392cdf){_0x9e6a97['push'](_0x9e6a97['shift']());}}}(a568_0x5e58,0xa8a79));function a568_0x57b6(_0x226439,_0x17ca94){const _0x5e58a8=a568_0x5e58();return a568_0x57b6=function(_0x57b646,_0x53272b){_0x57b646=_0x57b646-0x168;let _0x180f5b=_0x5e58a8[_0x57b646];return _0x180f5b;},a568_0x57b6(_0x226439,_0x17ca94);}var __importDefault=this&&this['__importDefault']||function(_0x3d8d54){const _0x3f21ba=a568_0x57b6;return _0x3d8d54&&_0x3d8d54[_0x3f21ba(0x171)]?_0x3d8d54:{'default':_0x3d8d54};};Object[a568_0x47001b(0x168)](exports,a568_0x47001b(0x171),{'value':!![]});const Tag_1=__importDefault(require('../../models/Tag')),Contact_1=__importDefault(require(a568_0x47001b(0x17b))),ContactTag_1=__importDefault(require(a568_0x47001b(0x177))),SyncTags=async({tags:_0x47dd34,contactId:_0x44b971})=>{const _0x295ed8=a568_0x47001b,_0x16f9e2=await Contact_1['default'][_0x295ed8(0x174)](_0x44b971,{'include':[Tag_1['default']]}),_0x5122b4=_0x47dd34['map'](_0x2af54c=>({'tagId':_0x2af54c['id'],'contactId':_0x44b971}));return await ContactTag_1['default'][_0x295ed8(0x16c)]({'where':{'contactId':_0x44b971}}),await ContactTag_1[_0x295ed8(0x17c)]['bulkCreate'](_0x5122b4),_0x16f9e2?.[_0x295ed8(0x17a)](),_0x16f9e2;};function a568_0x5e58(){const _0x222d29=['reload','../../models/Contact','default','defineProperty','952787AyNJuI','1170rFWUht','130snPzEX','destroy','7833wOHhfl','98PkkOQV','15003FDKLQy','21MwJcyZ','__esModule','111996ytROsJ','6927048UvyLNI','findByPk','19212osgyBW','1036623ZLWYdx','../../models/ContactTag','5jgZrNt','4568snyRyt'];a568_0x5e58=function(){return _0x222d29;};return a568_0x5e58();}exports[a568_0x47001b(0x17c)]=SyncTags;