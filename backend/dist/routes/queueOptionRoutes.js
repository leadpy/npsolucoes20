'use strict';var a361_0xcbbd6b=a361_0x1b14;function a361_0xc038(){var _0x3635e8=['__importDefault','default','355874EEKUmc','get','904499liwWZj','__esModule','__createBinding','put','writable','367308irZDcj','../middleware/isAuth','hasOwnProperty','create','4755RFQNMD','defineProperty','/queue-options','2406rXwree','9759582sGGAJt','5071064UVrruE','store','post','call','9fiogax','../controllers/QueueOptionController','5983208JXUXnv','getOwnPropertyDescriptor','express','delete','/queue-options/:queueOptionId','Router','update'];a361_0xc038=function(){return _0x3635e8;};return a361_0xc038();}(function(_0x5b8a56,_0x40b481){var _0x29e08e=a361_0x1b14,_0x524f6b=_0x5b8a56();while(!![]){try{var _0xdfca9e=parseInt(_0x29e08e(0x1b0))/0x1+-parseInt(_0x29e08e(0x1ae))/0x2*(parseInt(_0x29e08e(0x1c2))/0x3)+parseInt(_0x29e08e(0x1b5))/0x4+parseInt(_0x29e08e(0x1b9))/0x5*(-parseInt(_0x29e08e(0x1bc))/0x6)+parseInt(_0x29e08e(0x1c4))/0x7+parseInt(_0x29e08e(0x1be))/0x8+-parseInt(_0x29e08e(0x1bd))/0x9;if(_0xdfca9e===_0x40b481)break;else _0x524f6b['push'](_0x524f6b['shift']());}catch(_0x299846){_0x524f6b['push'](_0x524f6b['shift']());}}}(a361_0xc038,0x76811));var __createBinding=this&&this[a361_0xcbbd6b(0x1b2)]||(Object[a361_0xcbbd6b(0x1b8)]?function(_0x443cf4,_0x241cc4,_0x278af6,_0x3ad870){var _0x59a770=a361_0xcbbd6b;if(_0x3ad870===undefined)_0x3ad870=_0x278af6;var _0x28f1a7=Object[_0x59a770(0x1c5)](_0x241cc4,_0x278af6);(!_0x28f1a7||('get'in _0x28f1a7?!_0x241cc4[_0x59a770(0x1b1)]:_0x28f1a7[_0x59a770(0x1b4)]||_0x28f1a7['configurable']))&&(_0x28f1a7={'enumerable':!![],'get':function(){return _0x241cc4[_0x278af6];}}),Object[_0x59a770(0x1ba)](_0x443cf4,_0x3ad870,_0x28f1a7);}:function(_0x25b346,_0x21954c,_0x13bb60,_0x50f938){if(_0x50f938===undefined)_0x50f938=_0x13bb60;_0x25b346[_0x50f938]=_0x21954c[_0x13bb60];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a361_0xcbbd6b(0x1b8)]?function(_0x8ea021,_0x334a35){var _0x5533fa=a361_0xcbbd6b;Object[_0x5533fa(0x1ba)](_0x8ea021,_0x5533fa(0x1ad),{'enumerable':!![],'value':_0x334a35});}:function(_0x1acc36,_0x469377){var _0x33fd3b=a361_0xcbbd6b;_0x1acc36[_0x33fd3b(0x1ad)]=_0x469377;}),__importStar=this&&this['__importStar']||function(_0x5792eb){var _0x32845b=a361_0xcbbd6b;if(_0x5792eb&&_0x5792eb['__esModule'])return _0x5792eb;var _0x16b053={};if(_0x5792eb!=null){for(var _0x2346f2 in _0x5792eb)if(_0x2346f2!=='default'&&Object['prototype'][_0x32845b(0x1b7)][_0x32845b(0x1c1)](_0x5792eb,_0x2346f2))__createBinding(_0x16b053,_0x5792eb,_0x2346f2);}return __setModuleDefault(_0x16b053,_0x5792eb),_0x16b053;},__importDefault=this&&this[a361_0xcbbd6b(0x1ac)]||function(_0x5c36bf){var _0x563c1a=a361_0xcbbd6b;return _0x5c36bf&&_0x5c36bf[_0x563c1a(0x1b1)]?_0x5c36bf:{'default':_0x5c36bf};};Object[a361_0xcbbd6b(0x1ba)](exports,a361_0xcbbd6b(0x1b1),{'value':!![]});const express_1=require(a361_0xcbbd6b(0x1a7)),isAuth_1=__importDefault(require(a361_0xcbbd6b(0x1b6))),QueueOptionController=__importStar(require(a361_0xcbbd6b(0x1c3))),queueOptionRoutes=(0x0,express_1[a361_0xcbbd6b(0x1aa)])();function a361_0x1b14(_0x558644,_0x4aab74){var _0xc0388b=a361_0xc038();return a361_0x1b14=function(_0x1b14b,_0x2ace3e){_0x1b14b=_0x1b14b-0x1a7;var _0x514f91=_0xc0388b[_0x1b14b];return _0x514f91;},a361_0x1b14(_0x558644,_0x4aab74);}queueOptionRoutes[a361_0xcbbd6b(0x1af)](a361_0xcbbd6b(0x1bb),isAuth_1[a361_0xcbbd6b(0x1ad)],QueueOptionController['index']),queueOptionRoutes[a361_0xcbbd6b(0x1c0)]('/queue-options',isAuth_1[a361_0xcbbd6b(0x1ad)],QueueOptionController[a361_0xcbbd6b(0x1bf)]),queueOptionRoutes['get']('/queue-options/:queueOptionId',isAuth_1[a361_0xcbbd6b(0x1ad)],QueueOptionController['show']),queueOptionRoutes[a361_0xcbbd6b(0x1b3)](a361_0xcbbd6b(0x1a9),isAuth_1[a361_0xcbbd6b(0x1ad)],QueueOptionController[a361_0xcbbd6b(0x1ab)]),queueOptionRoutes[a361_0xcbbd6b(0x1a8)]('/queue-options/:queueOptionId',isAuth_1[a361_0xcbbd6b(0x1ad)],QueueOptionController['remove']),exports[a361_0xcbbd6b(0x1ad)]=queueOptionRoutes;