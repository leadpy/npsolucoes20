'use strict';function a298_0x5880(){var _0x265861=['remove','3093625JqCZHX','8GTLFJj','__importDefault','__esModule','post','__importStar','call','getOwnPropertyDescriptor','defineProperty','../controllers/QueueController','__createBinding','453780ENDLcA','configurable','get','hasOwnProperty','1568388rupzqf','default','21gxvSSo','434376wCYUkY','writable','/queue/:queueId','1172568TcKPeB','10056177BiQSgP','index','322438GBxpSK','put','create','__setModuleDefault','/queue','delete','express','Router'];a298_0x5880=function(){return _0x265861;};return a298_0x5880();}var a298_0x447d32=a298_0x24f5;(function(_0x4437b9,_0x210f07){var _0x16130d=a298_0x24f5,_0x2a418b=_0x4437b9();while(!![]){try{var _0x5075fa=parseInt(_0x16130d(0x118))/0x1+parseInt(_0x16130d(0xfd))/0x2+parseInt(_0x16130d(0xfa))/0x3+-parseInt(_0x16130d(0x115))/0x4+parseInt(_0x16130d(0x106))/0x5+-parseInt(_0x16130d(0x111))/0x6*(-parseInt(_0x16130d(0x117))/0x7)+parseInt(_0x16130d(0x107))/0x8*(-parseInt(_0x16130d(0xfb))/0x9);if(_0x5075fa===_0x210f07)break;else _0x2a418b['push'](_0x2a418b['shift']());}catch(_0x433921){_0x2a418b['push'](_0x2a418b['shift']());}}}(a298_0x5880,0x4ec38));var __createBinding=this&&this[a298_0x447d32(0x110)]||(Object[a298_0x447d32(0xff)]?function(_0x2af296,_0x4ae333,_0x418eb4,_0x3d2aa1){var _0x4a908c=a298_0x447d32;if(_0x3d2aa1===undefined)_0x3d2aa1=_0x418eb4;var _0x322b3f=Object[_0x4a908c(0x10d)](_0x4ae333,_0x418eb4);(!_0x322b3f||(_0x4a908c(0x113)in _0x322b3f?!_0x4ae333[_0x4a908c(0x109)]:_0x322b3f[_0x4a908c(0x119)]||_0x322b3f[_0x4a908c(0x112)]))&&(_0x322b3f={'enumerable':!![],'get':function(){return _0x4ae333[_0x418eb4];}}),Object[_0x4a908c(0x10e)](_0x2af296,_0x3d2aa1,_0x322b3f);}:function(_0x49c5a4,_0x93072f,_0xc0060d,_0x3657a9){if(_0x3657a9===undefined)_0x3657a9=_0xc0060d;_0x49c5a4[_0x3657a9]=_0x93072f[_0xc0060d];}),__setModuleDefault=this&&this[a298_0x447d32(0x100)]||(Object[a298_0x447d32(0xff)]?function(_0x325e2b,_0x3b109a){var _0x17aed0=a298_0x447d32;Object[_0x17aed0(0x10e)](_0x325e2b,_0x17aed0(0x116),{'enumerable':!![],'value':_0x3b109a});}:function(_0x26b8b4,_0x20ea8c){var _0x4b056b=a298_0x447d32;_0x26b8b4[_0x4b056b(0x116)]=_0x20ea8c;}),__importStar=this&&this[a298_0x447d32(0x10b)]||function(_0x706e79){var _0x5ee44a=a298_0x447d32;if(_0x706e79&&_0x706e79['__esModule'])return _0x706e79;var _0x64c894={};if(_0x706e79!=null){for(var _0x2def77 in _0x706e79)if(_0x2def77!=='default'&&Object['prototype'][_0x5ee44a(0x114)][_0x5ee44a(0x10c)](_0x706e79,_0x2def77))__createBinding(_0x64c894,_0x706e79,_0x2def77);}return __setModuleDefault(_0x64c894,_0x706e79),_0x64c894;},__importDefault=this&&this[a298_0x447d32(0x108)]||function(_0x3a9717){return _0x3a9717&&_0x3a9717['__esModule']?_0x3a9717:{'default':_0x3a9717};};Object[a298_0x447d32(0x10e)](exports,a298_0x447d32(0x109),{'value':!![]});function a298_0x24f5(_0x807c7c,_0x4ac811){var _0x588032=a298_0x5880();return a298_0x24f5=function(_0x24f5ee,_0x5b7806){_0x24f5ee=_0x24f5ee-0xfa;var _0x51340b=_0x588032[_0x24f5ee];return _0x51340b;},a298_0x24f5(_0x807c7c,_0x4ac811);}const express_1=require(a298_0x447d32(0x103)),isAuth_1=__importDefault(require('../middleware/isAuth')),QueueController=__importStar(require(a298_0x447d32(0x10f))),queueRoutes=(0x0,express_1[a298_0x447d32(0x104)])();queueRoutes['get'](a298_0x447d32(0x101),isAuth_1[a298_0x447d32(0x116)],QueueController[a298_0x447d32(0xfc)]),queueRoutes[a298_0x447d32(0x10a)]('/queue',isAuth_1['default'],QueueController['store']),queueRoutes[a298_0x447d32(0x113)](a298_0x447d32(0x11a),isAuth_1[a298_0x447d32(0x116)],QueueController['show']),queueRoutes[a298_0x447d32(0xfe)](a298_0x447d32(0x11a),isAuth_1['default'],QueueController['update']),queueRoutes[a298_0x447d32(0x102)](a298_0x447d32(0x11a),isAuth_1['default'],QueueController[a298_0x447d32(0x105)]),exports[a298_0x447d32(0x116)]=queueRoutes;