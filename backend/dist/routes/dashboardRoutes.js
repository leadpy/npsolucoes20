'use strict';var a361_0x330c14=a361_0x9215;(function(_0x12159f,_0x2a8ac1){var _0x125486=a361_0x9215,_0x5b59af=_0x12159f();while(!![]){try{var _0x11baec=parseInt(_0x125486(0x18f))/0x1*(-parseInt(_0x125486(0x187))/0x2)+-parseInt(_0x125486(0x18d))/0x3+-parseInt(_0x125486(0x196))/0x4+-parseInt(_0x125486(0x17e))/0x5*(-parseInt(_0x125486(0x18e))/0x6)+parseInt(_0x125486(0x188))/0x7*(parseInt(_0x125486(0x186))/0x8)+parseInt(_0x125486(0x190))/0x9*(parseInt(_0x125486(0x17b))/0xa)+-parseInt(_0x125486(0x195))/0xb*(-parseInt(_0x125486(0x185))/0xc);if(_0x11baec===_0x2a8ac1)break;else _0x5b59af['push'](_0x5b59af['shift']());}catch(_0x1a1b29){_0x5b59af['push'](_0x5b59af['shift']());}}}(a361_0x447a,0xc0217));var __createBinding=this&&this['__createBinding']||(Object['create']?function(_0x408e44,_0xf36979,_0x274072,_0x5105c4){var _0x136752=a361_0x9215;if(_0x5105c4===undefined)_0x5105c4=_0x274072;var _0x5a5574=Object[_0x136752(0x17a)](_0xf36979,_0x274072);(!_0x5a5574||(_0x136752(0x17f)in _0x5a5574?!_0xf36979[_0x136752(0x184)]:_0x5a5574[_0x136752(0x192)]||_0x5a5574['configurable']))&&(_0x5a5574={'enumerable':!![],'get':function(){return _0xf36979[_0x274072];}}),Object[_0x136752(0x193)](_0x408e44,_0x5105c4,_0x5a5574);}:function(_0x41f6ad,_0x1de6e5,_0x34f32e,_0x1e3d5a){if(_0x1e3d5a===undefined)_0x1e3d5a=_0x34f32e;_0x41f6ad[_0x1e3d5a]=_0x1de6e5[_0x34f32e];}),__setModuleDefault=this&&this[a361_0x330c14(0x17c)]||(Object['create']?function(_0x112462,_0x5336bc){var _0x2d8d4b=a361_0x330c14;Object[_0x2d8d4b(0x193)](_0x112462,_0x2d8d4b(0x191),{'enumerable':!![],'value':_0x5336bc});}:function(_0x42df19,_0x18b1ce){var _0x1b9f39=a361_0x330c14;_0x42df19[_0x1b9f39(0x191)]=_0x18b1ce;}),__importStar=this&&this[a361_0x330c14(0x18a)]||function(_0x1f9786){var _0x3a8819=a361_0x330c14;if(_0x1f9786&&_0x1f9786[_0x3a8819(0x184)])return _0x1f9786;var _0xef15d3={};if(_0x1f9786!=null){for(var _0x48f1f1 in _0x1f9786)if(_0x48f1f1!==_0x3a8819(0x191)&&Object[_0x3a8819(0x194)][_0x3a8819(0x18c)][_0x3a8819(0x183)](_0x1f9786,_0x48f1f1))__createBinding(_0xef15d3,_0x1f9786,_0x48f1f1);}return __setModuleDefault(_0xef15d3,_0x1f9786),_0xef15d3;},__importDefault=this&&this[a361_0x330c14(0x18b)]||function(_0x38dde5){var _0x30d33=a361_0x330c14;return _0x38dde5&&_0x38dde5[_0x30d33(0x184)]?_0x38dde5:{'default':_0x38dde5};};function a361_0x9215(_0x2ba457,_0x221e55){var _0x447ab3=a361_0x447a();return a361_0x9215=function(_0x92150b,_0x4ab8d4){_0x92150b=_0x92150b-0x17a;var _0x3c5dc5=_0x447ab3[_0x92150b];return _0x3c5dc5;},a361_0x9215(_0x2ba457,_0x221e55);}Object['defineProperty'](exports,a361_0x330c14(0x184),{'value':!![]});const express_1=__importDefault(require('express')),isAuth_1=__importDefault(require('../middleware/isAuth')),DashboardController=__importStar(require('../controllers/DashbardController')),routes=express_1[a361_0x330c14(0x191)]['Router']();function a361_0x447a(){var _0x394588=['239wecQtO','117RGxCHA','default','writable','defineProperty','prototype','184657ziOOKN','2196184DKOUNR','getOwnPropertyDescriptor','382130LdcOmx','__setModuleDefault','/dashboard','10PAZdpQ','get','reportsDay','/dashboard/ticketsDay','/dashboard/moments','call','__esModule','1704tfYlxK','1325416qergbS','13092PYHDZt','7jfKalL','reportsUsers','__importStar','__importDefault','hasOwnProperty','1276827ezkHEv','839748hVFXjA'];a361_0x447a=function(){return _0x394588;};return a361_0x447a();}routes[a361_0x330c14(0x17f)](a361_0x330c14(0x17d),isAuth_1['default'],DashboardController['index']),routes[a361_0x330c14(0x17f)]('/dashboard/ticketsUsers',DashboardController[a361_0x330c14(0x189)]),routes[a361_0x330c14(0x17f)](a361_0x330c14(0x181),DashboardController[a361_0x330c14(0x180)]),routes['get'](a361_0x330c14(0x182),isAuth_1[a361_0x330c14(0x191)],DashboardController['DashTicketsQueues']),exports['default']=routes;