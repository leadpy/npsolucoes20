'use strict';var a342_0x355990=a342_0x12fd;function a342_0x4e72(){var _0x560f45=['express','remove','call','getOwnPropertyDescriptor','store','6151054rawRdG','2410XuoorY','create','__createBinding','writable','default','prototype','48eqJaxO','__importStar','configurable','../middleware/isAuth','defineProperty','113553RGMoev','43822teeXDp','/refresh_token','Router','13937BCbihv','update','__importDefault','3XkLgDy','get','1639314RniOKe','/me','393748aTffOQ','__esModule','/signup','1617100LhJEjU','../controllers/SessionController','40DvuIxh'];a342_0x4e72=function(){return _0x560f45;};return a342_0x4e72();}(function(_0x21c487,_0x4ef5a1){var _0x63c285=a342_0x12fd,_0x387b42=_0x21c487();while(!![]){try{var _0x358b8c=-parseInt(_0x63c285(0x77))/0x1*(parseInt(_0x63c285(0x68))/0x2)+parseInt(_0x63c285(0x6e))/0x3*(parseInt(_0x63c285(0x72))/0x4)+parseInt(_0x63c285(0x75))/0x5+parseInt(_0x63c285(0x70))/0x6+parseInt(_0x63c285(0x7d))/0x7+parseInt(_0x63c285(0x84))/0x8*(parseInt(_0x63c285(0x67))/0x9)+parseInt(_0x63c285(0x7e))/0xa*(-parseInt(_0x63c285(0x6b))/0xb);if(_0x358b8c===_0x4ef5a1)break;else _0x387b42['push'](_0x387b42['shift']());}catch(_0x3da61c){_0x387b42['push'](_0x387b42['shift']());}}}(a342_0x4e72,0x72301));var __createBinding=this&&this[a342_0x355990(0x80)]||(Object['create']?function(_0x107570,_0x38b297,_0x1b0c23,_0x384e6a){var _0x1f8e5f=a342_0x355990;if(_0x384e6a===undefined)_0x384e6a=_0x1b0c23;var _0x3d2b63=Object[_0x1f8e5f(0x7b)](_0x38b297,_0x1b0c23);(!_0x3d2b63||(_0x1f8e5f(0x6f)in _0x3d2b63?!_0x38b297[_0x1f8e5f(0x73)]:_0x3d2b63[_0x1f8e5f(0x81)]||_0x3d2b63[_0x1f8e5f(0x86)]))&&(_0x3d2b63={'enumerable':!![],'get':function(){return _0x38b297[_0x1b0c23];}}),Object[_0x1f8e5f(0x88)](_0x107570,_0x384e6a,_0x3d2b63);}:function(_0x13236a,_0x5a1edd,_0x3b4019,_0x947ad0){if(_0x947ad0===undefined)_0x947ad0=_0x3b4019;_0x13236a[_0x947ad0]=_0x5a1edd[_0x3b4019];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a342_0x355990(0x7f)]?function(_0x5cc689,_0x5cd725){var _0x1619d6=a342_0x355990;Object['defineProperty'](_0x5cc689,_0x1619d6(0x82),{'enumerable':!![],'value':_0x5cd725});}:function(_0x4128ca,_0x1148e4){var _0x573b53=a342_0x355990;_0x4128ca[_0x573b53(0x82)]=_0x1148e4;}),__importStar=this&&this[a342_0x355990(0x85)]||function(_0x23b736){var _0x2e6a1b=a342_0x355990;if(_0x23b736&&_0x23b736[_0x2e6a1b(0x73)])return _0x23b736;var _0x562836={};if(_0x23b736!=null){for(var _0x43a2f2 in _0x23b736)if(_0x43a2f2!==_0x2e6a1b(0x82)&&Object[_0x2e6a1b(0x83)]['hasOwnProperty'][_0x2e6a1b(0x7a)](_0x23b736,_0x43a2f2))__createBinding(_0x562836,_0x23b736,_0x43a2f2);}return __setModuleDefault(_0x562836,_0x23b736),_0x562836;},__importDefault=this&&this[a342_0x355990(0x6d)]||function(_0x422afd){return _0x422afd&&_0x422afd['__esModule']?_0x422afd:{'default':_0x422afd};};Object['defineProperty'](exports,a342_0x355990(0x73),{'value':!![]});function a342_0x12fd(_0x473a15,_0xbcba93){var _0x4e7267=a342_0x4e72();return a342_0x12fd=function(_0x12fd0c,_0x566d9f){_0x12fd0c=_0x12fd0c-0x67;var _0x1d1657=_0x4e7267[_0x12fd0c];return _0x1d1657;},a342_0x12fd(_0x473a15,_0xbcba93);}const express_1=require(a342_0x355990(0x78)),SessionController=__importStar(require(a342_0x355990(0x76))),UserController=__importStar(require('../controllers/UserController')),isAuth_1=__importDefault(require(a342_0x355990(0x87))),authRoutes=(0x0,express_1[a342_0x355990(0x6a)])();authRoutes['post'](a342_0x355990(0x74),UserController[a342_0x355990(0x7c)]),authRoutes['post']('/login',SessionController[a342_0x355990(0x7c)]),authRoutes['post'](a342_0x355990(0x69),SessionController[a342_0x355990(0x6c)]),authRoutes['delete']('/logout',isAuth_1[a342_0x355990(0x82)],SessionController[a342_0x355990(0x79)]),authRoutes[a342_0x355990(0x6f)](a342_0x355990(0x71),isAuth_1[a342_0x355990(0x82)],SessionController['me']),exports[a342_0x355990(0x82)]=authRoutes;