'use strict';var a348_0x9e5e59=a348_0x3f32;(function(_0xc75ec8,_0xb2a381){var _0x2130f9=a348_0x3f32,_0x201569=_0xc75ec8();while(!![]){try{var _0xbccd4=parseInt(_0x2130f9(0x19a))/0x1+parseInt(_0x2130f9(0x19d))/0x2*(parseInt(_0x2130f9(0x1aa))/0x3)+-parseInt(_0x2130f9(0x195))/0x4+-parseInt(_0x2130f9(0x194))/0x5*(parseInt(_0x2130f9(0x1a9))/0x6)+-parseInt(_0x2130f9(0x196))/0x7+-parseInt(_0x2130f9(0x1ab))/0x8+parseInt(_0x2130f9(0x1a3))/0x9;if(_0xbccd4===_0xb2a381)break;else _0x201569['push'](_0x201569['shift']());}catch(_0x4f68ca){_0x201569['push'](_0x201569['shift']());}}}(a348_0x37a7,0x63b15));var __createBinding=this&&this[a348_0x9e5e59(0x1a7)]||(Object[a348_0x9e5e59(0x1a0)]?function(_0x26fe6e,_0x411b2b,_0x3e65ea,_0x5f4cf8){var _0x4d84bd=a348_0x9e5e59;if(_0x5f4cf8===undefined)_0x5f4cf8=_0x3e65ea;var _0x375535=Object[_0x4d84bd(0x19c)](_0x411b2b,_0x3e65ea);(!_0x375535||('get'in _0x375535?!_0x411b2b['__esModule']:_0x375535[_0x4d84bd(0x19e)]||_0x375535[_0x4d84bd(0x198)]))&&(_0x375535={'enumerable':!![],'get':function(){return _0x411b2b[_0x3e65ea];}}),Object[_0x4d84bd(0x193)](_0x26fe6e,_0x5f4cf8,_0x375535);}:function(_0x18031a,_0x3eedb7,_0x534e63,_0x5843be){if(_0x5843be===undefined)_0x5843be=_0x534e63;_0x18031a[_0x5843be]=_0x3eedb7[_0x534e63];}),__setModuleDefault=this&&this[a348_0x9e5e59(0x1ac)]||(Object[a348_0x9e5e59(0x1a0)]?function(_0x2d78a3,_0x175b02){var _0x2bd232=a348_0x9e5e59;Object['defineProperty'](_0x2d78a3,_0x2bd232(0x1ad),{'enumerable':!![],'value':_0x175b02});}:function(_0x4a1564,_0x133aaa){var _0x10dcb0=a348_0x9e5e59;_0x4a1564[_0x10dcb0(0x1ad)]=_0x133aaa;}),__importStar=this&&this[a348_0x9e5e59(0x1a1)]||function(_0x1b3d41){var _0x204f1c=a348_0x9e5e59;if(_0x1b3d41&&_0x1b3d41['__esModule'])return _0x1b3d41;var _0x58a91a={};if(_0x1b3d41!=null){for(var _0x28ac4d in _0x1b3d41)if(_0x28ac4d!==_0x204f1c(0x1ad)&&Object[_0x204f1c(0x197)]['hasOwnProperty']['call'](_0x1b3d41,_0x28ac4d))__createBinding(_0x58a91a,_0x1b3d41,_0x28ac4d);}return __setModuleDefault(_0x58a91a,_0x1b3d41),_0x58a91a;},__importDefault=this&&this[a348_0x9e5e59(0x1a2)]||function(_0x4f2c44){var _0x5be96b=a348_0x9e5e59;return _0x4f2c44&&_0x4f2c44[_0x5be96b(0x19b)]?_0x4f2c44:{'default':_0x4f2c44};};Object[a348_0x9e5e59(0x193)](exports,'__esModule',{'value':!![]});function a348_0x37a7(){var _0x27c310=['3882992nyQCyK','__setModuleDefault','default','express','defineProperty','645HyIeyG','2445152JFxpzx','4938710Dvrhof','prototype','configurable','/companySettingOne/','341150Cqimnz','__esModule','getOwnPropertyDescriptor','110756YSgJVA','writable','get','create','__importStar','__importDefault','22115952cQHWDq','Router','/companySettings/:companyId','update','__createBinding','/companySettings/','29922HvQOsH','3aqgzYm'];a348_0x37a7=function(){return _0x27c310;};return a348_0x37a7();}const express_1=__importDefault(require(a348_0x9e5e59(0x192))),isAuth_1=__importDefault(require('../middleware/isAuth')),CompanySettingsController=__importStar(require('../controllers/CompanySettingsController')),companySettingsRoutes=express_1['default'][a348_0x9e5e59(0x1a4)]();function a348_0x3f32(_0xbad02e,_0x54cd8a){var _0x37a7a3=a348_0x37a7();return a348_0x3f32=function(_0x3f327c,_0xe5bd9d){_0x3f327c=_0x3f327c-0x192;var _0x14c94e=_0x37a7a3[_0x3f327c];return _0x14c94e;},a348_0x3f32(_0xbad02e,_0x54cd8a);}companySettingsRoutes[a348_0x9e5e59(0x19f)](a348_0x9e5e59(0x1a5),isAuth_1[a348_0x9e5e59(0x1ad)],CompanySettingsController['show']),companySettingsRoutes[a348_0x9e5e59(0x19f)](a348_0x9e5e59(0x199),isAuth_1['default'],CompanySettingsController['showOne']),companySettingsRoutes['put'](a348_0x9e5e59(0x1a8),isAuth_1[a348_0x9e5e59(0x1ad)],CompanySettingsController[a348_0x9e5e59(0x1a6)]),exports[a348_0x9e5e59(0x1ad)]=companySettingsRoutes;