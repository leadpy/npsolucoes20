'use strict';const a31_0x4ee876=a31_0x5239;(function(_0x142f6f,_0x456926){const _0x2550c8=a31_0x5239,_0x5eaf99=_0x142f6f();while(!![]){try{const _0x5293c5=parseInt(_0x2550c8(0x208))/0x1+parseInt(_0x2550c8(0x1f4))/0x2*(-parseInt(_0x2550c8(0x20f))/0x3)+parseInt(_0x2550c8(0x1e7))/0x4+parseInt(_0x2550c8(0x214))/0x5+-parseInt(_0x2550c8(0x1ed))/0x6*(-parseInt(_0x2550c8(0x1fa))/0x7)+parseInt(_0x2550c8(0x1f9))/0x8*(-parseInt(_0x2550c8(0x1e9))/0x9)+parseInt(_0x2550c8(0x1f1))/0xa*(-parseInt(_0x2550c8(0x202))/0xb);if(_0x5293c5===_0x456926)break;else _0x5eaf99['push'](_0x5eaf99['shift']());}catch(_0x4f2dbf){_0x5eaf99['push'](_0x5eaf99['shift']());}}}(a31_0x4c27,0x8df00));var __createBinding=this&&this['__createBinding']||(Object[a31_0x4ee876(0x1e3)]?function(_0x42ede8,_0xf18aee,_0x353de6,_0x49a700){const _0x2bd858=a31_0x4ee876;if(_0x49a700===undefined)_0x49a700=_0x353de6;var _0x4f7579=Object[_0x2bd858(0x20a)](_0xf18aee,_0x353de6);(!_0x4f7579||(_0x2bd858(0x212)in _0x4f7579?!_0xf18aee[_0x2bd858(0x1fe)]:_0x4f7579[_0x2bd858(0x1df)]||_0x4f7579[_0x2bd858(0x20b)]))&&(_0x4f7579={'enumerable':!![],'get':function(){return _0xf18aee[_0x353de6];}}),Object[_0x2bd858(0x220)](_0x42ede8,_0x49a700,_0x4f7579);}:function(_0x273cbb,_0x51493e,_0x1f99af,_0x6c4eff){if(_0x6c4eff===undefined)_0x6c4eff=_0x1f99af;_0x273cbb[_0x6c4eff]=_0x51493e[_0x1f99af];}),__setModuleDefault=this&&this[a31_0x4ee876(0x1dd)]||(Object[a31_0x4ee876(0x1e3)]?function(_0x594148,_0x57bb71){const _0x4c8f32=a31_0x4ee876;Object[_0x4c8f32(0x220)](_0x594148,_0x4c8f32(0x1e6),{'enumerable':!![],'value':_0x57bb71});}:function(_0x25cded,_0x412bad){const _0x451c97=a31_0x4ee876;_0x25cded[_0x451c97(0x1e6)]=_0x412bad;}),__importStar=this&&this['__importStar']||function(_0xc18869){const _0xe76e21=a31_0x4ee876;if(_0xc18869&&_0xc18869[_0xe76e21(0x1fe)])return _0xc18869;var _0x3b6e4b={};if(_0xc18869!=null){for(var _0x1e8f08 in _0xc18869)if(_0x1e8f08!==_0xe76e21(0x1e6)&&Object[_0xe76e21(0x1d9)][_0xe76e21(0x21b)]['call'](_0xc18869,_0x1e8f08))__createBinding(_0x3b6e4b,_0xc18869,_0x1e8f08);}return __setModuleDefault(_0x3b6e4b,_0xc18869),_0x3b6e4b;},__importDefault=this&&this[a31_0x4ee876(0x209)]||function(_0x48f9ce){const _0x20cd6a=a31_0x4ee876;return _0x48f9ce&&_0x48f9ce[_0x20cd6a(0x1fe)]?_0x48f9ce:{'default':_0x48f9ce};};Object['defineProperty'](exports,a31_0x4ee876(0x1fe),{'value':!![]}),exports[a31_0x4ee876(0x215)]=exports[a31_0x4ee876(0x1f7)]=exports['createWebhook']=exports[a31_0x4ee876(0x1fd)]=exports[a31_0x4ee876(0x1d7)]=void 0x0;const Yup=__importStar(require(a31_0x4ee876(0x1f3))),gn_api_sdk_typescript_1=__importDefault(require(a31_0x4ee876(0x204))),AppError_1=__importDefault(require('../errors/AppError')),Gn_1=__importDefault(require(a31_0x4ee876(0x223))),Company_1=__importDefault(require(a31_0x4ee876(0x1e0))),Invoices_1=__importDefault(require('../models/Invoices')),socket_1=require('../libs/socket'),Plan_1=__importDefault(require('../models/Plan')),index=async(_0x430722,_0x1cee40)=>{const _0x4cac93=a31_0x4ee876,_0x2b9f47=new gn_api_sdk_typescript_1[(_0x4cac93(0x1e6))](Gn_1[_0x4cac93(0x1e6)]);return _0x1cee40['json'](_0x2b9f47[_0x4cac93(0x1ee)]());};exports['index']=index;const createSubscription=async(_0x569830,_0xb30c87)=>{const _0x5cea33=a31_0x4ee876,_0x1e5eaf=new gn_api_sdk_typescript_1[(_0x5cea33(0x1e6))](Gn_1[_0x5cea33(0x1e6)]),{companyId:_0x3bd023}=_0x569830[_0x5cea33(0x224)],_0x583383=Yup[_0x5cea33(0x1db)]()['shape']({'price':Yup[_0x5cea33(0x221)]()[_0x5cea33(0x1f0)](),'users':Yup[_0x5cea33(0x221)]()[_0x5cea33(0x1f0)](),'plan':Yup[_0x5cea33(0x221)]()[_0x5cea33(0x1f0)]()});if(!await _0x583383[_0x5cea33(0x227)](_0x569830['body']))throw new AppError_1['default'](_0x5cea33(0x20d),0x190);const _0x4dac7c=new Intl[(_0x5cea33(0x20c))](_0x5cea33(0x201),{'style':_0x5cea33(0x205),'currency':_0x5cea33(0x21c)}),_0x53ec14=await Company_1['default'][_0x5cea33(0x1dc)]({'where':{'id':_0x3bd023}}),_0xd8eef5=await Plan_1[_0x5cea33(0x1e6)][_0x5cea33(0x1dc)]({'where':{'id':_0x53ec14[_0x5cea33(0x207)]}}),{invoiceId:_0x109dae}=_0x569830[_0x5cea33(0x210)],_0xcb5197=_0xd8eef5[_0x5cea33(0x1e8)],_0x9f916b=_0x4dac7c[_0x5cea33(0x20e)](_0xcb5197)['replace']('$',''),_0x1c96ea={'nome':_0x53ec14[_0x5cea33(0x1fb)]},_0x39332e=_0x53ec14[_0x5cea33(0x1f8)][_0x5cea33(0x213)](/\D/g,'');_0x39332e['length']===0xb?_0x1c96ea[_0x5cea33(0x226)]=_0x39332e:_0x1c96ea[_0x5cea33(0x1e4)]=_0x39332e;const _0x12b64e={'calendario':{'expiracao':0xe10},'devedor':{..._0x1c96ea},'valor':{'original':_0x9f916b},'chave':process[_0x5cea33(0x1ea)][_0x5cea33(0x219)],'solicitacaoPagador':_0x5cea33(0x1e5)+_0x109dae};try{const _0x3c172b=await _0x1e5eaf['pixCreateImmediateCharge'](null,_0x12b64e),_0x339ee1=await _0x1e5eaf[_0x5cea33(0x1e1)]({'id':_0x3c172b[_0x5cea33(0x211)]['id']});if(!_0x53ec14)throw new AppError_1['default'](_0x5cea33(0x1ff),0x194);return _0xb30c87[_0x5cea33(0x1f5)]({..._0x3c172b,'qrcode':_0x339ee1});}catch(_0x363fcd){console[_0x5cea33(0x21a)]('error_subscription',_0x363fcd);throw new AppError_1['default'](_0x5cea33(0x20d),0x190);}};exports[a31_0x4ee876(0x1fd)]=createSubscription;const createWebhook=async(_0x355ff9,_0x3f910d)=>{const _0x4db886=a31_0x4ee876,_0x1bc530=Yup[_0x4db886(0x1db)]()['shape']({'chave':Yup[_0x4db886(0x221)]()[_0x4db886(0x1f0)](),'url':Yup[_0x4db886(0x221)]()[_0x4db886(0x1f0)]()});if(!await _0x1bc530[_0x4db886(0x227)](_0x355ff9[_0x4db886(0x210)]))throw new AppError_1['default'](_0x4db886(0x20d),0x190);const {chave:_0x14697f,url:_0x3198f3}=_0x355ff9[_0x4db886(0x210)],_0x1f97a1={'webhookUrl':_0x3198f3},_0x4866cf={'chave':_0x14697f};try{const _0x1eb809=new gn_api_sdk_typescript_1[(_0x4db886(0x1e6))](Gn_1[_0x4db886(0x1e6)]),_0x541b0d=await _0x1eb809[_0x4db886(0x1e2)](_0x4866cf,_0x1f97a1);return _0x3f910d[_0x4db886(0x1f5)](_0x541b0d);}catch(_0x590d01){console[_0x4db886(0x21a)](_0x590d01);}};exports[a31_0x4ee876(0x206)]=createWebhook;const deleteWebhook=async(_0x656c0d,_0x280647)=>{const _0x478bb8=a31_0x4ee876,_0x5814e3=Yup[_0x478bb8(0x1db)]()[_0x478bb8(0x21d)]({'chave':Yup[_0x478bb8(0x221)]()[_0x478bb8(0x1f0)]()});if(!await _0x5814e3['isValid'](_0x656c0d[_0x478bb8(0x210)]))throw new AppError_1[(_0x478bb8(0x1e6))](_0x478bb8(0x20d),0x190);const {chave:_0x15d8ab}=_0x656c0d[_0x478bb8(0x210)],_0xd41fd2={'chave':_0x15d8ab},_0x39066e=new gn_api_sdk_typescript_1[(_0x478bb8(0x1e6))](Gn_1[_0x478bb8(0x1e6)]),_0x2b38b0=await _0x39066e[_0x478bb8(0x1f6)](_0xd41fd2);return _0x280647['json'](_0x2b38b0);};exports[a31_0x4ee876(0x1f7)]=deleteWebhook;const webhook=async(_0xd91569,_0x40b4f2)=>{const _0x37aa4a=a31_0x4ee876,{type:_0xbe934}=_0xd91569[_0x37aa4a(0x222)],{evento:_0x393a64}=_0xd91569[_0x37aa4a(0x210)];if(_0x393a64==='teste_webhook')return _0x40b4f2[_0x37aa4a(0x1f5)]({'ok':!![]});if(_0xd91569[_0x37aa4a(0x210)][_0x37aa4a(0x1f2)]){const _0x51dd5c=new gn_api_sdk_typescript_1[(_0x37aa4a(0x1e6))](Gn_1['default']);_0xd91569[_0x37aa4a(0x210)][_0x37aa4a(0x1f2)][_0x37aa4a(0x1d8)](async _0x11e734=>{const _0x39c2f2=_0x37aa4a,_0x274129=await _0x51dd5c[_0x39c2f2(0x203)]({'txid':_0x11e734[_0x39c2f2(0x1ec)]});if(_0x274129[_0x39c2f2(0x225)]===_0x39c2f2(0x1da)){const {solicitacaoPagador:_0xe2519}=_0x274129,_0x4da1e1=_0xe2519[_0x39c2f2(0x213)](_0x39c2f2(0x1e5),''),_0x354f1e=await Invoices_1[_0x39c2f2(0x1e6)][_0x39c2f2(0x217)](_0x4da1e1),_0x318a7e=_0x354f1e[_0x39c2f2(0x21e)],_0x13000a=await Company_1[_0x39c2f2(0x1e6)]['findByPk'](_0x318a7e),_0x3ec22b=new Date(_0x13000a[_0x39c2f2(0x1ef)]);_0x3ec22b[_0x39c2f2(0x216)](_0x3ec22b['getDate']()+0x1e);const _0x39110b=_0x3ec22b[_0x39c2f2(0x1eb)]()[_0x39c2f2(0x200)]('T')[0x0];if(_0x13000a){await _0x13000a[_0x39c2f2(0x21f)]({'dueDate':_0x39110b});const _0x24791f=await _0x354f1e['update']({'id':_0x4da1e1,'status':_0x39c2f2(0x1fc)});await _0x13000a[_0x39c2f2(0x1de)]();const _0x5a9396=(0x0,socket_1['getIO'])(),_0x2d113a=await Company_1[_0x39c2f2(0x1e6)][_0x39c2f2(0x1dc)]({'where':{'id':_0x318a7e}});_0x5a9396['emit'](_0x39c2f2(0x218)+_0x318a7e+'-payment',{'action':_0x274129[_0x39c2f2(0x225)],'company':_0x2d113a});}}});}return _0x40b4f2[_0x37aa4a(0x1f5)]({'ok':!![]});};function a31_0x5239(_0x1fdeee,_0x8c2da0){const _0x4c2766=a31_0x4c27();return a31_0x5239=function(_0x52393b,_0x1914f4){_0x52393b=_0x52393b-0x1d7;let _0x7816aa=_0x4c2766[_0x52393b];return _0x7816aa;},a31_0x5239(_0x1fdeee,_0x8c2da0);}exports['webhook']=webhook;function a31_0x4c27(){const _0x305d8e=['en-US','475981hJpjFx','pixDetailCharge','gn-api-sdk-typescript','currency','createWebhook','planId','826091CiGbwv','__importDefault','getOwnPropertyDescriptor','configurable','NumberFormat','Validation\x20fails','format','2516343QEFQPR','body','loc','get','replace','911690EErfjo','webhook','setDate','findByPk','company-','GERENCIANET_CHAVEPIX','log','hasOwnProperty','USD','shape','companyId','update','defineProperty','string','params','../config/Gn','user','status','cpf','isValid','index','forEach','prototype','CONCLUIDA','object','findOne','__setModuleDefault','reload','writable','../models/Company','pixGenerateQRCode','pixConfigWebhook','create','cnpj','#Fatura:','default','763416lBOrxm','amount','1260utDJAf','env','toISOString','txid','6zgHPqj','getSubscriptions','dueDate','required','50bZHuxv','pix','yup','2amQgHh','json','pixDeleteWebhook','deleteWebhook','document','12784lSXYyH','4626643xCpUNP','name','paid','createSubscription','__esModule','Company\x20not\x20found','split'];a31_0x4c27=function(){return _0x305d8e;};return a31_0x4c27();}