'use strict';var a365_0x24efd6=a365_0x10b2;function a365_0x10b2(_0x3b7b4d,_0x4da821){var _0x1d7cea=a365_0x1d7c();return a365_0x10b2=function(_0x10b2e4,_0x4e1742){_0x10b2e4=_0x10b2e4-0x1f4;var _0x18fe1a=_0x1d7cea[_0x10b2e4];return _0x18fe1a;},a365_0x10b2(_0x3b7b4d,_0x4da821);}(function(_0xe8df01,_0xd62cae){var _0x318b0b=a365_0x10b2,_0xcb2a43=_0xe8df01();while(!![]){try{var _0xd23ccd=parseInt(_0x318b0b(0x1f5))/0x1*(-parseInt(_0x318b0b(0x201))/0x2)+parseInt(_0x318b0b(0x1f7))/0x3*(-parseInt(_0x318b0b(0x204))/0x4)+parseInt(_0x318b0b(0x20d))/0x5+parseInt(_0x318b0b(0x211))/0x6+-parseInt(_0x318b0b(0x20f))/0x7*(-parseInt(_0x318b0b(0x203))/0x8)+-parseInt(_0x318b0b(0x208))/0x9*(parseInt(_0x318b0b(0x1fb))/0xa)+-parseInt(_0x318b0b(0x1f9))/0xb*(-parseInt(_0x318b0b(0x214))/0xc);if(_0xd23ccd===_0xd62cae)break;else _0xcb2a43['push'](_0xcb2a43['shift']());}catch(_0x42c54a){_0xcb2a43['push'](_0xcb2a43['shift']());}}}(a365_0x1d7c,0xa1d40));var __createBinding=this&&this[a365_0x24efd6(0x207)]||(Object[a365_0x24efd6(0x1fc)]?function(_0x1210e8,_0x3746fb,_0x158c15,_0x225893){var _0x1a1cd9=a365_0x24efd6;if(_0x225893===undefined)_0x225893=_0x158c15;var _0xebb80b=Object[_0x1a1cd9(0x205)](_0x3746fb,_0x158c15);(!_0xebb80b||(_0x1a1cd9(0x1fd)in _0xebb80b?!_0x3746fb['__esModule']:_0xebb80b[_0x1a1cd9(0x216)]||_0xebb80b[_0x1a1cd9(0x1f8)]))&&(_0xebb80b={'enumerable':!![],'get':function(){return _0x3746fb[_0x158c15];}}),Object['defineProperty'](_0x1210e8,_0x225893,_0xebb80b);}:function(_0x217e5c,_0x9d69c7,_0x286906,_0x8a25bb){if(_0x8a25bb===undefined)_0x8a25bb=_0x286906;_0x217e5c[_0x8a25bb]=_0x9d69c7[_0x286906];}),__setModuleDefault=this&&this[a365_0x24efd6(0x1ff)]||(Object[a365_0x24efd6(0x1fc)]?function(_0xf630b1,_0x33bcca){var _0x5b8948=a365_0x24efd6;Object['defineProperty'](_0xf630b1,_0x5b8948(0x202),{'enumerable':!![],'value':_0x33bcca});}:function(_0x5b2932,_0x21ddb4){var _0x192f79=a365_0x24efd6;_0x5b2932[_0x192f79(0x202)]=_0x21ddb4;}),__importStar=this&&this[a365_0x24efd6(0x213)]||function(_0x556714){var _0x1bf39a=a365_0x24efd6;if(_0x556714&&_0x556714[_0x1bf39a(0x1f4)])return _0x556714;var _0x226e94={};if(_0x556714!=null){for(var _0x201980 in _0x556714)if(_0x201980!==_0x1bf39a(0x202)&&Object[_0x1bf39a(0x20a)][_0x1bf39a(0x212)][_0x1bf39a(0x1f6)](_0x556714,_0x201980))__createBinding(_0x226e94,_0x556714,_0x201980);}return __setModuleDefault(_0x226e94,_0x556714),_0x226e94;},__importDefault=this&&this[a365_0x24efd6(0x217)]||function(_0x30ba18){var _0x5e1594=a365_0x24efd6;return _0x30ba18&&_0x30ba18[_0x5e1594(0x1f4)]?_0x30ba18:{'default':_0x30ba18};};function a365_0x1d7c(){var _0x4796e8=['prototype','/setting/:settingKey','showOne','4899020DfrMYJ','updateOne','21HNDVmX','put','2177592uQqEiG','hasOwnProperty','__importStar','12unjuwH','getSetting','writable','__importDefault','/settings/:settingKey','../middleware/isAuth','__esModule','115603zmypkl','call','9loeZln','configurable','8420522TcVwpo','express','1770rozBWK','create','get','Router','__setModuleDefault','/settings','22nSpPbt','default','663880zcaSTy','239116TLlOcW','getOwnPropertyDescriptor','defineProperty','__createBinding','12375iQssgD','update'];a365_0x1d7c=function(){return _0x4796e8;};return a365_0x1d7c();}Object[a365_0x24efd6(0x206)](exports,'__esModule',{'value':!![]});const express_1=require(a365_0x24efd6(0x1fa)),isAuth_1=__importDefault(require(a365_0x24efd6(0x219))),SettingController=__importStar(require('../controllers/SettingController')),settingRoutes=(0x0,express_1[a365_0x24efd6(0x1fe)])();settingRoutes['get'](a365_0x24efd6(0x200),isAuth_1[a365_0x24efd6(0x202)],SettingController['index']),settingRoutes[a365_0x24efd6(0x1fd)](a365_0x24efd6(0x218),isAuth_1[a365_0x24efd6(0x202)],SettingController[a365_0x24efd6(0x20c)]),settingRoutes[a365_0x24efd6(0x210)]('/settings/:settingKey',isAuth_1[a365_0x24efd6(0x202)],SettingController[a365_0x24efd6(0x209)]),settingRoutes[a365_0x24efd6(0x1fd)](a365_0x24efd6(0x20b),isAuth_1[a365_0x24efd6(0x202)],SettingController[a365_0x24efd6(0x215)]),settingRoutes[a365_0x24efd6(0x210)](a365_0x24efd6(0x20b),isAuth_1[a365_0x24efd6(0x202)],SettingController[a365_0x24efd6(0x20e)]),exports[a365_0x24efd6(0x202)]=settingRoutes;