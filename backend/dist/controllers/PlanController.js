'use strict';const a24_0x1e8e1a=a24_0x478f;(function(_0x3b91bb,_0x55cfcf){const _0x5a272f=a24_0x478f,_0x1ce7ab=_0x3b91bb();while(!![]){try{const _0x421a41=-parseInt(_0x5a272f(0x17a))/0x1+parseInt(_0x5a272f(0x19d))/0x2+parseInt(_0x5a272f(0x19f))/0x3+-parseInt(_0x5a272f(0x197))/0x4+-parseInt(_0x5a272f(0x19c))/0x5*(-parseInt(_0x5a272f(0x185))/0x6)+-parseInt(_0x5a272f(0x16e))/0x7*(parseInt(_0x5a272f(0x17c))/0x8)+-parseInt(_0x5a272f(0x16c))/0x9;if(_0x421a41===_0x55cfcf)break;else _0x1ce7ab['push'](_0x1ce7ab['shift']());}catch(_0x2c02e1){_0x1ce7ab['push'](_0x1ce7ab['shift']());}}}(a24_0x5de9,0x7f6c4));var __createBinding=this&&this[a24_0x1e8e1a(0x17f)]||(Object['create']?function(_0x58689a,_0x3480e0,_0x4138d3,_0x34b29e){const _0x3bd342=a24_0x1e8e1a;if(_0x34b29e===undefined)_0x34b29e=_0x4138d3;var _0x8b650c=Object[_0x3bd342(0x189)](_0x3480e0,_0x4138d3);(!_0x8b650c||('get'in _0x8b650c?!_0x3480e0['__esModule']:_0x8b650c[_0x3bd342(0x17e)]||_0x8b650c[_0x3bd342(0x194)]))&&(_0x8b650c={'enumerable':!![],'get':function(){return _0x3480e0[_0x4138d3];}}),Object[_0x3bd342(0x186)](_0x58689a,_0x34b29e,_0x8b650c);}:function(_0x3dcef3,_0x154eb1,_0x3ede68,_0x51d652){if(_0x51d652===undefined)_0x51d652=_0x3ede68;_0x3dcef3[_0x51d652]=_0x154eb1[_0x3ede68];}),__setModuleDefault=this&&this[a24_0x1e8e1a(0x193)]||(Object[a24_0x1e8e1a(0x175)]?function(_0x1972b9,_0x4c1ace){const _0x5aef60=a24_0x1e8e1a;Object['defineProperty'](_0x1972b9,_0x5aef60(0x183),{'enumerable':!![],'value':_0x4c1ace});}:function(_0x47205b,_0x66bd5a){const _0x3d2629=a24_0x1e8e1a;_0x47205b[_0x3d2629(0x183)]=_0x66bd5a;}),__importStar=this&&this[a24_0x1e8e1a(0x18c)]||function(_0xbc3083){const _0x25b9c9=a24_0x1e8e1a;if(_0xbc3083&&_0xbc3083[_0x25b9c9(0x16a)])return _0xbc3083;var _0x541638={};if(_0xbc3083!=null){for(var _0x112cce in _0xbc3083)if(_0x112cce!==_0x25b9c9(0x183)&&Object[_0x25b9c9(0x178)]['hasOwnProperty'][_0x25b9c9(0x18f)](_0xbc3083,_0x112cce))__createBinding(_0x541638,_0xbc3083,_0x112cce);}return __setModuleDefault(_0x541638,_0xbc3083),_0x541638;},__importDefault=this&&this[a24_0x1e8e1a(0x181)]||function(_0x2a35d9){const _0x667036=a24_0x1e8e1a;return _0x2a35d9&&_0x2a35d9[_0x667036(0x16a)]?_0x2a35d9:{'default':_0x2a35d9};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a24_0x1e8e1a(0x176)]=exports['update']=exports[a24_0x1e8e1a(0x16f)]=exports['store']=exports['list']=exports['index']=void 0x0;const jsonwebtoken_1=require('jsonwebtoken'),auth_1=__importDefault(require(a24_0x1e8e1a(0x184))),Yup=__importStar(require(a24_0x1e8e1a(0x172))),AppError_1=__importDefault(require('../errors/AppError')),Plan_1=__importDefault(require(a24_0x1e8e1a(0x17b))),ListPlansService_1=__importDefault(require('../services/PlanService/ListPlansService')),CreatePlanService_1=__importDefault(require('../services/PlanService/CreatePlanService')),UpdatePlanService_1=__importDefault(require('../services/PlanService/UpdatePlanService')),ShowPlanService_1=__importDefault(require(a24_0x1e8e1a(0x16d))),FindAllPlanService_1=__importDefault(require(a24_0x1e8e1a(0x180))),DeletePlanService_1=__importDefault(require(a24_0x1e8e1a(0x188))),User_1=__importDefault(require(a24_0x1e8e1a(0x1a0))),Company_1=__importDefault(require(a24_0x1e8e1a(0x19a))),index=async(_0x18f20c,_0x5ceecb)=>{const _0x2b9860=a24_0x1e8e1a,{searchParam:_0x211698,pageNumber:_0x44e176}=_0x18f20c['query'],_0x1209e1=_0x18f20c[_0x2b9860(0x196)][_0x2b9860(0x19e)],[,_0x32ec5a]=_0x1209e1[_0x2b9860(0x174)]('\x20'),_0x33c1fe=(0x0,jsonwebtoken_1['verify'])(_0x32ec5a,auth_1[_0x2b9860(0x183)][_0x2b9860(0x177)]),{id:_0xe85ddd,profile:_0x30f9b6,companyId:_0xf9ebe1}=_0x33c1fe,_0x147ddb=await User_1[_0x2b9860(0x183)][_0x2b9860(0x18a)](_0xe85ddd),_0x35affa=await Company_1[_0x2b9860(0x183)][_0x2b9860(0x18a)](_0xf9ebe1),_0x51075e=_0x35affa[_0x2b9860(0x19b)],_0x45a39e=await Plan_1[_0x2b9860(0x183)]['findByPk'](_0x51075e),_0x5878eb=_0x45a39e[_0x2b9860(0x18d)];if(_0x147ddb[_0x2b9860(0x171)]===!![]){const {plans:_0xaefebd,count:_0x2f8280,hasMore:_0x351b06}=await(0x0,ListPlansService_1[_0x2b9860(0x183)])({'searchParam':_0x211698,'pageNumber':_0x44e176});return _0x5ceecb[_0x2b9860(0x192)]({'plans':_0xaefebd,'count':_0x2f8280,'hasMore':_0x351b06});}else{const {plans:_0x434c67,count:_0x381499,hasMore:_0xf7fdbc}=await(0x0,ListPlansService_1[_0x2b9860(0x183)])({'searchParam':_0x5878eb,'pageNumber':_0x44e176});return _0x5ceecb['json']({'plans':_0x434c67,'count':_0x381499,'hasMore':_0xf7fdbc});}};exports[a24_0x1e8e1a(0x190)]=index;const list=async(_0x4c9080,_0x1cbd37)=>{const _0x3fe11b=a24_0x1e8e1a,_0x359287=await(0x0,FindAllPlanService_1['default'])();return _0x1cbd37[_0x3fe11b(0x199)](0xc8)[_0x3fe11b(0x192)](_0x359287);};exports[a24_0x1e8e1a(0x187)]=list;function a24_0x5de9(){const _0x354299=['../services/PlanService/FindAllPlanService','__importDefault','message','default','../config/auth','6086406WQkfck','defineProperty','list','../services/PlanService/DeletePlanService','getOwnPropertyDescriptor','findByPk','store','__importStar','name','body','call','index','Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!','json','__setModuleDefault','configurable','verify','headers','344652PGrcBW','object','status','../models/Company','planId','5VDQnXK','22524EOYREw','authorization','3109260JfTWtm','../models/User','string','__esModule','params','6826401ChysCS','../services/PlanService/ShowPlanService','1191715OvgiWS','show','validate','super','yup','toString','split','create','remove','secret','prototype','required','14527kIabJN','../models/Plan','32KXqCQQ','update','writable','__createBinding'];a24_0x5de9=function(){return _0x354299;};return a24_0x5de9();}const store=async(_0x2d383a,_0x26c029)=>{const _0x28efa3=a24_0x1e8e1a,_0x44d936=_0x2d383a[_0x28efa3(0x18e)],_0x4ca3e8=Yup[_0x28efa3(0x198)]()['shape']({'name':Yup[_0x28efa3(0x1a1)]()[_0x28efa3(0x179)]()});try{await _0x4ca3e8[_0x28efa3(0x170)](_0x44d936);}catch(_0x3e2e56){throw new AppError_1[(_0x28efa3(0x183))](_0x3e2e56[_0x28efa3(0x182)]);}const _0x40e295=await(0x0,CreatePlanService_1[_0x28efa3(0x183)])(_0x44d936);return _0x26c029[_0x28efa3(0x199)](0xc8)[_0x28efa3(0x192)](_0x40e295);};exports[a24_0x1e8e1a(0x18b)]=store;const show=async(_0x5b9b22,_0x49d7a7)=>{const _0xa40e05=a24_0x1e8e1a,{id:_0xefca81}=_0x5b9b22[_0xa40e05(0x16b)],_0x42b8ac=_0x5b9b22[_0xa40e05(0x196)]['authorization'],[,_0x8a8d57]=_0x42b8ac[_0xa40e05(0x174)]('\x20'),_0xde3594=(0x0,jsonwebtoken_1[_0xa40e05(0x195)])(_0x8a8d57,auth_1[_0xa40e05(0x183)][_0xa40e05(0x177)]),{id:_0x560518,profile:_0x53f332,companyId:_0x169e02}=_0xde3594,_0x451d76=await User_1[_0xa40e05(0x183)][_0xa40e05(0x18a)](_0x560518),_0x354526=await Company_1[_0xa40e05(0x183)][_0xa40e05(0x18a)](_0x169e02),_0x524ff2=_0x354526[_0xa40e05(0x19b)];if(_0x451d76[_0xa40e05(0x171)]===!![]){const _0x48e829=await(0x0,ShowPlanService_1[_0xa40e05(0x183)])(_0xefca81);return _0x49d7a7[_0xa40e05(0x199)](0xc8)['json'](_0x48e829);}else{if(_0xefca81!==_0x524ff2[_0xa40e05(0x173)]())return _0x49d7a7[_0xa40e05(0x199)](0x190)['json']({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});else{if(_0xefca81===_0x524ff2['toString']()){const _0x5400cc=await(0x0,ShowPlanService_1[_0xa40e05(0x183)])(_0xefca81);return _0x49d7a7[_0xa40e05(0x199)](0xc8)[_0xa40e05(0x192)](_0x5400cc);}}}};exports[a24_0x1e8e1a(0x16f)]=show;const update=async(_0x2a77ff,_0x5ee8c5)=>{const _0x1ff734=a24_0x1e8e1a,_0x28c7bb=_0x2a77ff['body'],_0x364318=Yup[_0x1ff734(0x198)]()['shape']({'name':Yup[_0x1ff734(0x1a1)]()});try{await _0x364318[_0x1ff734(0x170)](_0x28c7bb);}catch(_0x43671d){throw new AppError_1['default'](_0x43671d[_0x1ff734(0x182)]);}const {id:_0x3834ae,name:_0x55b735,users:_0x548b92,connections:_0x3eece9,queues:_0x25865a,amount:_0x25128e,useWhatsapp:_0x153dcc,useFacebook:_0x4fdb4a,useInstagram:_0x3b9886,useCampaigns:_0x50fdc2,useSchedules:_0x2043ab,useInternalChat:_0x1a5f49,useExternalApi:_0x46d03f,useKanban:_0x2c8883}=_0x28c7bb,_0x162450=_0x2a77ff[_0x1ff734(0x196)][_0x1ff734(0x19e)],[,_0x39475e]=_0x162450[_0x1ff734(0x174)]('\x20'),_0x5b4dfc=(0x0,jsonwebtoken_1[_0x1ff734(0x195)])(_0x39475e,auth_1[_0x1ff734(0x183)][_0x1ff734(0x177)]),{id:_0x10e709,profile:_0x9bce20,companyId:_0x1f68fe}=_0x5b4dfc,_0x1f1d80=await User_1[_0x1ff734(0x183)]['findByPk'](_0x10e709),_0x18fdcc=await Company_1[_0x1ff734(0x183)][_0x1ff734(0x18a)](_0x1f68fe),_0x47535b=_0x18fdcc[_0x1ff734(0x19b)];if(_0x1f1d80['super']===!![]){const _0x426908=await(0x0,UpdatePlanService_1[_0x1ff734(0x183)])({'id':_0x3834ae,'name':_0x55b735,'users':_0x548b92,'connections':_0x3eece9,'queues':_0x25865a,'amount':_0x25128e,'useWhatsapp':_0x153dcc,'useFacebook':_0x4fdb4a,'useInstagram':_0x3b9886,'useCampaigns':_0x50fdc2,'useSchedules':_0x2043ab,'useInternalChat':_0x1a5f49,'useExternalApi':_0x46d03f,'useKanban':_0x2c8883});return _0x5ee8c5[_0x1ff734(0x199)](0xc8)['json'](_0x426908);}else{if(_0x47535b[_0x1ff734(0x173)]()!==_0x3834ae)return _0x5ee8c5['status'](0x190)[_0x1ff734(0x192)]({'error':_0x1ff734(0x191)});}};function a24_0x478f(_0x5e4fee,_0x253d7b){const _0x5de94b=a24_0x5de9();return a24_0x478f=function(_0x478f01,_0x30535d){_0x478f01=_0x478f01-0x16a;let _0xe99c98=_0x5de94b[_0x478f01];return _0xe99c98;},a24_0x478f(_0x5e4fee,_0x253d7b);}exports[a24_0x1e8e1a(0x17d)]=update;const remove=async(_0xe1b97d,_0x31b69c)=>{const _0x212c1d=a24_0x1e8e1a,{id:_0x36d644}=_0xe1b97d['params'],_0x36ef9e=_0xe1b97d[_0x212c1d(0x196)][_0x212c1d(0x19e)],[,_0x5b8561]=_0x36ef9e['split']('\x20'),_0xeea010=(0x0,jsonwebtoken_1['verify'])(_0x5b8561,auth_1[_0x212c1d(0x183)]['secret']),{id:_0x459f03,profile:_0x323179,companyId:_0x3bb41c}=_0xeea010,_0x19e8ac=await User_1[_0x212c1d(0x183)][_0x212c1d(0x18a)](_0x459f03);if(_0x19e8ac[_0x212c1d(0x171)]===!![]){const _0xcb555c=await(0x0,DeletePlanService_1['default'])(_0x36d644);return _0x31b69c['status'](0xc8)[_0x212c1d(0x192)](_0xcb555c);}else{if(_0x3bb41c['toString']()!==_0x36d644)return _0x31b69c[_0x212c1d(0x199)](0x190)[_0x212c1d(0x192)]({'error':_0x212c1d(0x191)});}};exports[a24_0x1e8e1a(0x176)]=remove;