'use strict';const a34_0x405a3d=a34_0x9a68;(function(_0x3b4623,_0x1519ba){const _0x321210=a34_0x9a68,_0x2f079a=_0x3b4623();while(!![]){try{const _0x3fb104=parseInt(_0x321210(0x107))/0x1*(parseInt(_0x321210(0xbb))/0x2)+parseInt(_0x321210(0x101))/0x3+parseInt(_0x321210(0xd3))/0x4*(parseInt(_0x321210(0xdf))/0x5)+-parseInt(_0x321210(0xcc))/0x6+parseInt(_0x321210(0xdc))/0x7*(parseInt(_0x321210(0xdb))/0x8)+-parseInt(_0x321210(0x102))/0x9*(-parseInt(_0x321210(0xca))/0xa)+parseInt(_0x321210(0x10c))/0xb*(-parseInt(_0x321210(0xc0))/0xc);if(_0x3fb104===_0x1519ba)break;else _0x2f079a['push'](_0x2f079a['shift']());}catch(_0x4580bc){_0x2f079a['push'](_0x2f079a['shift']());}}}(a34_0x51aa,0xb920b));function a34_0x51aa(){const _0x2a14f4=['43505484Dezuqj','../models/Invoices','required','prototype','split','env','error_subscription','writable','deleteWebhook','Company\x20not\x20found','1302790ihFBBX','user','3511488URGkhp','../models/Plan','findOne','../config/Gn','object','amount','getDate','25736dzJyyM','status','index','createSubscription','body','default','__createBinding','GERENCIANET_CHAVEPIX','16muyrVN','5113024CWHYwp','findByPk','../models/Company','1025nAjSPi','call','gn-api-sdk-typescript','yup','webhook','#Fatura:','getSubscriptions','json','replace','isValid','dueDate','company-','__esModule','emit','setDate','params','defineProperty','pixDeleteWebhook','length','format','update','__importStar','create','cnpj','en-US','NumberFormat','__setModuleDefault','string','pixDetailCharge','createWebhook','configurable','hasOwnProperty','loc','__importDefault','1462191rBBKHM','63YmfdiP','companyId','document','get','Validation\x20fails','9xzaxlo','shape','log','cpf','getIO','11FyTvul','reload','175512JEVYpq','forEach','getOwnPropertyDescriptor','pix','planId'];a34_0x51aa=function(){return _0x2a14f4;};return a34_0x51aa();}var __createBinding=this&&this[a34_0x405a3d(0xd9)]||(Object[a34_0x405a3d(0xf5)]?function(_0x33eb29,_0x5cbdc3,_0xc193cd,_0x438565){const _0x2c762f=a34_0x405a3d;if(_0x438565===undefined)_0x438565=_0xc193cd;var _0x57f830=Object[_0x2c762f(0xbd)](_0x5cbdc3,_0xc193cd);(!_0x57f830||(_0x2c762f(0x105)in _0x57f830?!_0x5cbdc3[_0x2c762f(0xeb)]:_0x57f830[_0x2c762f(0xc7)]||_0x57f830[_0x2c762f(0xfd)]))&&(_0x57f830={'enumerable':!![],'get':function(){return _0x5cbdc3[_0xc193cd];}}),Object[_0x2c762f(0xef)](_0x33eb29,_0x438565,_0x57f830);}:function(_0x334ffc,_0x165342,_0x5840eb,_0x85f3e8){if(_0x85f3e8===undefined)_0x85f3e8=_0x5840eb;_0x334ffc[_0x85f3e8]=_0x165342[_0x5840eb];}),__setModuleDefault=this&&this[a34_0x405a3d(0xf9)]||(Object['create']?function(_0x3579ec,_0x58cbed){const _0x12783e=a34_0x405a3d;Object[_0x12783e(0xef)](_0x3579ec,_0x12783e(0xd8),{'enumerable':!![],'value':_0x58cbed});}:function(_0x316cba,_0x5096dc){const _0x2f8539=a34_0x405a3d;_0x316cba[_0x2f8539(0xd8)]=_0x5096dc;}),__importStar=this&&this[a34_0x405a3d(0xf4)]||function(_0x57a9f7){const _0x2eaacc=a34_0x405a3d;if(_0x57a9f7&&_0x57a9f7['__esModule'])return _0x57a9f7;var _0x122d77={};if(_0x57a9f7!=null){for(var _0x512745 in _0x57a9f7)if(_0x512745!==_0x2eaacc(0xd8)&&Object[_0x2eaacc(0xc3)][_0x2eaacc(0xfe)][_0x2eaacc(0xe0)](_0x57a9f7,_0x512745))__createBinding(_0x122d77,_0x57a9f7,_0x512745);}return __setModuleDefault(_0x122d77,_0x57a9f7),_0x122d77;},__importDefault=this&&this[a34_0x405a3d(0x100)]||function(_0x44c7d3){const _0x5268de=a34_0x405a3d;return _0x44c7d3&&_0x44c7d3[_0x5268de(0xeb)]?_0x44c7d3:{'default':_0x44c7d3};};Object['defineProperty'](exports,a34_0x405a3d(0xeb),{'value':!![]}),exports[a34_0x405a3d(0xe3)]=exports[a34_0x405a3d(0xc8)]=exports[a34_0x405a3d(0xfc)]=exports[a34_0x405a3d(0xd6)]=exports[a34_0x405a3d(0xd5)]=void 0x0;const Yup=__importStar(require(a34_0x405a3d(0xe2))),gn_api_sdk_typescript_1=__importDefault(require(a34_0x405a3d(0xe1))),AppError_1=__importDefault(require('../errors/AppError')),Gn_1=__importDefault(require(a34_0x405a3d(0xcf))),Company_1=__importDefault(require(a34_0x405a3d(0xde))),Invoices_1=__importDefault(require(a34_0x405a3d(0xc1))),socket_1=require('../libs/socket'),Plan_1=__importDefault(require(a34_0x405a3d(0xcd))),index=async(_0x425f19,_0x474a8f)=>{const _0x5957ed=a34_0x405a3d,_0x19a4e4=new gn_api_sdk_typescript_1[(_0x5957ed(0xd8))](Gn_1[_0x5957ed(0xd8)]);return _0x474a8f[_0x5957ed(0xe6)](_0x19a4e4[_0x5957ed(0xe5)]());};function a34_0x9a68(_0xe5a552,_0x7132f4){const _0x51aa39=a34_0x51aa();return a34_0x9a68=function(_0x9a6854,_0x19918f){_0x9a6854=_0x9a6854-0xba;let _0xe372e0=_0x51aa39[_0x9a6854];return _0xe372e0;},a34_0x9a68(_0xe5a552,_0x7132f4);}exports['index']=index;const createSubscription=async(_0x37a13e,_0x551e05)=>{const _0x7d7171=a34_0x405a3d,_0x117958=new gn_api_sdk_typescript_1[(_0x7d7171(0xd8))](Gn_1[_0x7d7171(0xd8)]),{companyId:_0x20d577}=_0x37a13e[_0x7d7171(0xcb)],_0x46e68a=Yup[_0x7d7171(0xd0)]()[_0x7d7171(0x108)]({'price':Yup[_0x7d7171(0xfa)]()[_0x7d7171(0xc2)](),'users':Yup[_0x7d7171(0xfa)]()[_0x7d7171(0xc2)](),'plan':Yup['string']()[_0x7d7171(0xc2)]()});if(!await _0x46e68a[_0x7d7171(0xe8)](_0x37a13e[_0x7d7171(0xd7)]))throw new AppError_1['default']('Validation\x20fails',0x190);const _0x11e0d7=new Intl[(_0x7d7171(0xf8))](_0x7d7171(0xf7),{'style':'currency','currency':'USD'}),_0x9bc2f=await Company_1[_0x7d7171(0xd8)]['findOne']({'where':{'id':_0x20d577}}),_0x325674=await Plan_1[_0x7d7171(0xd8)][_0x7d7171(0xce)]({'where':{'id':_0x9bc2f[_0x7d7171(0xbf)]}}),{invoiceId:_0x3d3594}=_0x37a13e['body'],_0x59dd3e=_0x325674[_0x7d7171(0xd1)],_0xcbc2ae=_0x11e0d7[_0x7d7171(0xf2)](_0x59dd3e)['replace']('$',''),_0x511b5d={'nome':_0x9bc2f['name']},_0x2c39ae=_0x9bc2f[_0x7d7171(0x104)][_0x7d7171(0xe7)](/\D/g,'');_0x2c39ae[_0x7d7171(0xf1)]===0xb?_0x511b5d[_0x7d7171(0x10a)]=_0x2c39ae:_0x511b5d[_0x7d7171(0xf6)]=_0x2c39ae;const _0x59ebb1={'calendario':{'expiracao':0xe10},'devedor':{..._0x511b5d},'valor':{'original':_0xcbc2ae},'chave':process[_0x7d7171(0xc5)][_0x7d7171(0xda)],'solicitacaoPagador':_0x7d7171(0xe4)+_0x3d3594};try{const _0x8f288c=await _0x117958['pixCreateImmediateCharge'](null,_0x59ebb1),_0xd0abe8=await _0x117958['pixGenerateQRCode']({'id':_0x8f288c[_0x7d7171(0xff)]['id']});if(!_0x9bc2f)throw new AppError_1['default'](_0x7d7171(0xc9),0x194);return _0x551e05[_0x7d7171(0xe6)]({..._0x8f288c,'qrcode':_0xd0abe8});}catch(_0x24fd5c){console[_0x7d7171(0x109)](_0x7d7171(0xc6),_0x24fd5c);throw new AppError_1[(_0x7d7171(0xd8))](_0x7d7171(0x106),0x190);}};exports[a34_0x405a3d(0xd6)]=createSubscription;const createWebhook=async(_0x424544,_0x5c06c6)=>{const _0x6d78ff=a34_0x405a3d,_0x290b4f=Yup[_0x6d78ff(0xd0)]()[_0x6d78ff(0x108)]({'chave':Yup[_0x6d78ff(0xfa)]()[_0x6d78ff(0xc2)](),'url':Yup[_0x6d78ff(0xfa)]()[_0x6d78ff(0xc2)]()});if(!await _0x290b4f[_0x6d78ff(0xe8)](_0x424544[_0x6d78ff(0xd7)]))throw new AppError_1['default'](_0x6d78ff(0x106),0x190);const {chave:_0x4815d0,url:_0x107c5f}=_0x424544[_0x6d78ff(0xd7)],_0x342b40={'webhookUrl':_0x107c5f},_0x53945c={'chave':_0x4815d0};try{const _0x495fa5=new gn_api_sdk_typescript_1['default'](Gn_1['default']),_0x31faba=await _0x495fa5['pixConfigWebhook'](_0x53945c,_0x342b40);return _0x5c06c6[_0x6d78ff(0xe6)](_0x31faba);}catch(_0x487dab){console[_0x6d78ff(0x109)](_0x487dab);}};exports[a34_0x405a3d(0xfc)]=createWebhook;const deleteWebhook=async(_0x2c072e,_0x5e72f3)=>{const _0x2d684e=a34_0x405a3d,_0x462949=Yup[_0x2d684e(0xd0)]()[_0x2d684e(0x108)]({'chave':Yup[_0x2d684e(0xfa)]()[_0x2d684e(0xc2)]()});if(!await _0x462949['isValid'](_0x2c072e[_0x2d684e(0xd7)]))throw new AppError_1[(_0x2d684e(0xd8))]('Validation\x20fails',0x190);const {chave:_0x4fe50d}=_0x2c072e[_0x2d684e(0xd7)],_0x52261f={'chave':_0x4fe50d},_0x40af30=new gn_api_sdk_typescript_1[(_0x2d684e(0xd8))](Gn_1[_0x2d684e(0xd8)]),_0x195e22=await _0x40af30[_0x2d684e(0xf0)](_0x52261f);return _0x5e72f3['json'](_0x195e22);};exports['deleteWebhook']=deleteWebhook;const webhook=async(_0x2ed566,_0x5de0b1)=>{const _0x371423=a34_0x405a3d,{type:_0xe2eb58}=_0x2ed566[_0x371423(0xee)],{evento:_0x5cc328}=_0x2ed566[_0x371423(0xd7)];if(_0x5cc328==='teste_webhook')return _0x5de0b1[_0x371423(0xe6)]({'ok':!![]});if(_0x2ed566[_0x371423(0xd7)][_0x371423(0xbe)]){const _0x1ac28a=new gn_api_sdk_typescript_1[(_0x371423(0xd8))](Gn_1[_0x371423(0xd8)]);_0x2ed566[_0x371423(0xd7)][_0x371423(0xbe)][_0x371423(0xbc)](async _0x5011eb=>{const _0x33e6b3=_0x371423,_0x360514=await _0x1ac28a[_0x33e6b3(0xfb)]({'txid':_0x5011eb['txid']});if(_0x360514[_0x33e6b3(0xd4)]==='CONCLUIDA'){const {solicitacaoPagador:_0x581199}=_0x360514,_0xc664a6=_0x581199[_0x33e6b3(0xe7)](_0x33e6b3(0xe4),''),_0x1f32a5=await Invoices_1[_0x33e6b3(0xd8)][_0x33e6b3(0xdd)](_0xc664a6),_0xefb3f8=_0x1f32a5[_0x33e6b3(0x103)],_0x2b2154=await Company_1['default'][_0x33e6b3(0xdd)](_0xefb3f8),_0x302819=new Date(_0x2b2154[_0x33e6b3(0xe9)]);_0x302819[_0x33e6b3(0xed)](_0x302819[_0x33e6b3(0xd2)]()+0x1e);const _0x228648=_0x302819['toISOString']()[_0x33e6b3(0xc4)]('T')[0x0];if(_0x2b2154){await _0x2b2154[_0x33e6b3(0xf3)]({'dueDate':_0x228648});const _0x1e7860=await _0x1f32a5[_0x33e6b3(0xf3)]({'id':_0xc664a6,'status':'paid'});await _0x2b2154[_0x33e6b3(0xba)]();const _0x337262=(0x0,socket_1[_0x33e6b3(0x10b)])(),_0x2d320f=await Company_1[_0x33e6b3(0xd8)][_0x33e6b3(0xce)]({'where':{'id':_0xefb3f8}});_0x337262[_0x33e6b3(0xec)](_0x33e6b3(0xea)+_0xefb3f8+'-payment',{'action':_0x360514['status'],'company':_0x2d320f});}}});}return _0x5de0b1[_0x371423(0xe6)]({'ok':!![]});};exports[a34_0x405a3d(0xe3)]=webhook;