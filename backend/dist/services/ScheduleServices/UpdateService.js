'use strict';var a547_0x3ba919=a547_0x45a5;(function(_0x42278f,_0x3c6911){var _0x27232e=a547_0x45a5,_0x301a88=_0x42278f();while(!![]){try{var _0x4cab33=parseInt(_0x27232e(0x183))/0x1*(parseInt(_0x27232e(0x17a))/0x2)+-parseInt(_0x27232e(0x189))/0x3*(-parseInt(_0x27232e(0x192))/0x4)+-parseInt(_0x27232e(0x182))/0x5*(parseInt(_0x27232e(0x17b))/0x6)+parseInt(_0x27232e(0x187))/0x7+-parseInt(_0x27232e(0x198))/0x8+-parseInt(_0x27232e(0x18e))/0x9+-parseInt(_0x27232e(0x185))/0xa;if(_0x4cab33===_0x3c6911)break;else _0x301a88['push'](_0x301a88['shift']());}catch(_0xc7772a){_0x301a88['push'](_0x301a88['shift']());}}}(a547_0xe67b,0xdbefa));var __createBinding=this&&this['__createBinding']||(Object[a547_0x3ba919(0x18b)]?function(_0x4eb921,_0x4227e2,_0x40d3b5,_0x127ca1){var _0x3fe901=a547_0x3ba919;if(_0x127ca1===undefined)_0x127ca1=_0x40d3b5;var _0x23ba5e=Object[_0x3fe901(0x188)](_0x4227e2,_0x40d3b5);(!_0x23ba5e||(_0x3fe901(0x180)in _0x23ba5e?!_0x4227e2[_0x3fe901(0x191)]:_0x23ba5e[_0x3fe901(0x18c)]||_0x23ba5e[_0x3fe901(0x190)]))&&(_0x23ba5e={'enumerable':!![],'get':function(){return _0x4227e2[_0x40d3b5];}}),Object[_0x3fe901(0x196)](_0x4eb921,_0x127ca1,_0x23ba5e);}:function(_0x42ee8c,_0x5a9874,_0xc2f78d,_0x17ec10){if(_0x17ec10===undefined)_0x17ec10=_0xc2f78d;_0x42ee8c[_0x17ec10]=_0x5a9874[_0xc2f78d];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a547_0x3ba919(0x18b)]?function(_0x2c28b7,_0xd7aacc){var _0x4dd67d=a547_0x3ba919;Object[_0x4dd67d(0x196)](_0x2c28b7,_0x4dd67d(0x197),{'enumerable':!![],'value':_0xd7aacc});}:function(_0x595eee,_0x17a29f){var _0x4f6a52=a547_0x3ba919;_0x595eee[_0x4f6a52(0x197)]=_0x17a29f;}),__importStar=this&&this['__importStar']||function(_0x5cff70){var _0x1f2e20=a547_0x3ba919;if(_0x5cff70&&_0x5cff70[_0x1f2e20(0x191)])return _0x5cff70;var _0x338cf0={};if(_0x5cff70!=null){for(var _0x16e452 in _0x5cff70)if(_0x16e452!=='default'&&Object[_0x1f2e20(0x195)]['hasOwnProperty'][_0x1f2e20(0x17e)](_0x5cff70,_0x16e452))__createBinding(_0x338cf0,_0x5cff70,_0x16e452);}return __setModuleDefault(_0x338cf0,_0x5cff70),_0x338cf0;},__importDefault=this&&this[a547_0x3ba919(0x18a)]||function(_0x4d0a6c){var _0x5017d2=a547_0x3ba919;return _0x4d0a6c&&_0x4d0a6c[_0x5017d2(0x191)]?_0x4d0a6c:{'default':_0x4d0a6c};};function a547_0x45a5(_0x23446e,_0x1f1324){var _0xe67b3e=a547_0xe67b();return a547_0x45a5=function(_0x45a5f6,_0x2751e2){_0x45a5f6=_0x45a5f6-0x17a;var _0x29ca86=_0xe67b3e[_0x45a5f6];return _0x29ca86;},a547_0x45a5(_0x23446e,_0x1f1324);}Object[a547_0x3ba919(0x196)](exports,a547_0x3ba919(0x191),{'value':!![]});const Yup=__importStar(require('yup')),AppError_1=__importDefault(require(a547_0x3ba919(0x186))),ShowService_1=__importDefault(require(a547_0x3ba919(0x193))),UpdateUserService=async({scheduleData:_0x3e205f,id:_0x12d47f,companyId:_0x4cc798})=>{var _0x2b45d5=a547_0x3ba919;const _0x12bd29=await(0x0,ShowService_1[_0x2b45d5(0x197)])(_0x12d47f,_0x4cc798);if(_0x12bd29?.[_0x2b45d5(0x181)]!==_0x4cc798)throw new AppError_1['default'](_0x2b45d5(0x18d));const _0x256a76=Yup[_0x2b45d5(0x194)]()[_0x2b45d5(0x18f)]({'body':Yup[_0x2b45d5(0x17f)]()[_0x2b45d5(0x17c)](0x5)}),{body:_0x59a4ef,sendAt:_0x26d1f6,sentAt:_0x337ac0,contactId:_0x230761,ticketId:_0x5f04a5,userId:_0x51b367}=_0x3e205f;try{await _0x256a76['validate']({'body':_0x59a4ef});}catch(_0x439430){throw new AppError_1[(_0x2b45d5(0x197))](_0x439430[_0x2b45d5(0x184)]);}return await _0x12bd29['update']({'body':_0x59a4ef,'sendAt':_0x26d1f6,'sentAt':_0x337ac0,'contactId':_0x230761,'ticketId':_0x5f04a5,'userId':_0x51b367}),await _0x12bd29[_0x2b45d5(0x17d)](),_0x12bd29;};exports[a547_0x3ba919(0x197)]=UpdateUserService;function a547_0xe67b(){var _0x2c972e=['__importDefault','create','writable','Não\x20é\x20possível\x20alterar\x20registros\x20de\x20outra\x20empresa','14658714KWEvmi','shape','configurable','__esModule','21292lzALbG','./ShowService','object','prototype','defineProperty','default','3251624YlhOgj','2tDJXdj','12gJIlOP','min','reload','call','string','get','companyId','894535nnOsna','1393743QkpiQo','message','8470540ruxzOf','../../errors/AppError','8014713MqQtdZ','getOwnPropertyDescriptor','903IqVAyX'];a547_0xe67b=function(){return _0x2c972e;};return a547_0xe67b();}