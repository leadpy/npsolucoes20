'use strict';const a24_0x1fc42a=a24_0x21e2;(function(_0x3ab25c,_0x4c37e5){const _0x1aac48=a24_0x21e2,_0xa9c244=_0x3ab25c();while(!![]){try{const _0x4fb5f8=-parseInt(_0x1aac48(0x1e6))/0x1+-parseInt(_0x1aac48(0x1db))/0x2*(-parseInt(_0x1aac48(0x1d1))/0x3)+-parseInt(_0x1aac48(0x1f5))/0x4*(parseInt(_0x1aac48(0x1d7))/0x5)+parseInt(_0x1aac48(0x1d6))/0x6+-parseInt(_0x1aac48(0x206))/0x7*(-parseInt(_0x1aac48(0x1f1))/0x8)+-parseInt(_0x1aac48(0x1da))/0x9*(-parseInt(_0x1aac48(0x1e5))/0xa)+parseInt(_0x1aac48(0x207))/0xb*(-parseInt(_0x1aac48(0x1dc))/0xc);if(_0x4fb5f8===_0x4c37e5)break;else _0xa9c244['push'](_0xa9c244['shift']());}catch(_0x5aef2e){_0xa9c244['push'](_0xa9c244['shift']());}}}(a24_0x986d,0xa7fda));var __createBinding=this&&this[a24_0x1fc42a(0x1f8)]||(Object[a24_0x1fc42a(0x1e7)]?function(_0x3623de,_0x1f5041,_0x579195,_0x42c33c){const _0x296230=a24_0x1fc42a;if(_0x42c33c===undefined)_0x42c33c=_0x579195;var _0x3ee127=Object[_0x296230(0x1de)](_0x1f5041,_0x579195);(!_0x3ee127||('get'in _0x3ee127?!_0x1f5041['__esModule']:_0x3ee127['writable']||_0x3ee127[_0x296230(0x1e0)]))&&(_0x3ee127={'enumerable':!![],'get':function(){return _0x1f5041[_0x579195];}}),Object['defineProperty'](_0x3623de,_0x42c33c,_0x3ee127);}:function(_0x4676e9,_0xfb700a,_0x13a7fc,_0x523960){if(_0x523960===undefined)_0x523960=_0x13a7fc;_0x4676e9[_0x523960]=_0xfb700a[_0x13a7fc];}),__setModuleDefault=this&&this[a24_0x1fc42a(0x1f0)]||(Object[a24_0x1fc42a(0x1e7)]?function(_0x20ce9a,_0x42ec79){const _0x12afd0=a24_0x1fc42a;Object['defineProperty'](_0x20ce9a,_0x12afd0(0x1f6),{'enumerable':!![],'value':_0x42ec79});}:function(_0x19eae5,_0x27c027){const _0x34c86d=a24_0x1fc42a;_0x19eae5[_0x34c86d(0x1f6)]=_0x27c027;}),__importStar=this&&this[a24_0x1fc42a(0x1f4)]||function(_0x50147a){const _0x4668eb=a24_0x1fc42a;if(_0x50147a&&_0x50147a[_0x4668eb(0x1fc)])return _0x50147a;var _0x233acf={};if(_0x50147a!=null){for(var _0x238530 in _0x50147a)if(_0x238530!==_0x4668eb(0x1f6)&&Object[_0x4668eb(0x1cf)][_0x4668eb(0x1cc)][_0x4668eb(0x1cd)](_0x50147a,_0x238530))__createBinding(_0x233acf,_0x50147a,_0x238530);}return __setModuleDefault(_0x233acf,_0x50147a),_0x233acf;},__importDefault=this&&this['__importDefault']||function(_0x28f29e){const _0x1eb57a=a24_0x1fc42a;return _0x28f29e&&_0x28f29e[_0x1eb57a(0x1fc)]?_0x28f29e:{'default':_0x28f29e};};Object[a24_0x1fc42a(0x1d5)](exports,a24_0x1fc42a(0x1fc),{'value':!![]}),exports[a24_0x1fc42a(0x1eb)]=exports['update']=exports[a24_0x1fc42a(0x1fe)]=exports[a24_0x1fc42a(0x1f7)]=exports[a24_0x1fc42a(0x1ed)]=exports['index']=void 0x0;const jsonwebtoken_1=require(a24_0x1fc42a(0x1ee)),auth_1=__importDefault(require('../config/auth')),Yup=__importStar(require(a24_0x1fc42a(0x208))),AppError_1=__importDefault(require('../errors/AppError')),Plan_1=__importDefault(require(a24_0x1fc42a(0x1e4))),ListPlansService_1=__importDefault(require('../services/PlanService/ListPlansService')),CreatePlanService_1=__importDefault(require(a24_0x1fc42a(0x1fb))),UpdatePlanService_1=__importDefault(require(a24_0x1fc42a(0x1e8))),ShowPlanService_1=__importDefault(require('../services/PlanService/ShowPlanService')),FindAllPlanService_1=__importDefault(require(a24_0x1fc42a(0x204))),DeletePlanService_1=__importDefault(require('../services/PlanService/DeletePlanService')),User_1=__importDefault(require(a24_0x1fc42a(0x1ec))),Company_1=__importDefault(require(a24_0x1fc42a(0x1ff))),index=async(_0x57365d,_0x35f3cd)=>{const _0x418bb3=a24_0x1fc42a,{searchParam:_0x369688,pageNumber:_0x7eddf4}=_0x57365d[_0x418bb3(0x1e9)],_0x2188e8=_0x57365d[_0x418bb3(0x202)][_0x418bb3(0x1e1)],[,_0x55b5af]=_0x2188e8[_0x418bb3(0x1e2)]('\x20'),_0x3a9ce5=(0x0,jsonwebtoken_1[_0x418bb3(0x209)])(_0x55b5af,auth_1[_0x418bb3(0x1f6)]['secret']),{id:_0x2c7703,profile:_0x43406e,companyId:_0xfb7f56}=_0x3a9ce5,_0x3edc06=await User_1['default'][_0x418bb3(0x1cb)](_0x2c7703),_0x3da5fa=await Company_1['default'][_0x418bb3(0x1cb)](_0xfb7f56),_0x57ea5d=_0x3da5fa[_0x418bb3(0x1d9)],_0x288937=await Plan_1[_0x418bb3(0x1f6)][_0x418bb3(0x1cb)](_0x57ea5d),_0x17b659=_0x288937[_0x418bb3(0x205)];if(_0x3edc06['super']===!![]){const {plans:_0x1a9bb9,count:_0x29e08f,hasMore:_0x2f3286}=await(0x0,ListPlansService_1[_0x418bb3(0x1f6)])({'searchParam':_0x369688,'pageNumber':_0x7eddf4});return _0x35f3cd[_0x418bb3(0x201)]({'plans':_0x1a9bb9,'count':_0x29e08f,'hasMore':_0x2f3286});}else{const {plans:_0x2678df,count:_0x17e021,hasMore:_0x30412d}=await(0x0,ListPlansService_1['default'])({'searchParam':_0x17b659,'pageNumber':_0x7eddf4});return _0x35f3cd['json']({'plans':_0x2678df,'count':_0x17e021,'hasMore':_0x30412d});}};exports[a24_0x1fc42a(0x1dd)]=index;const list=async(_0x178d5c,_0x35b2e9)=>{const _0x1cb71e=a24_0x1fc42a,_0x35fedd=await(0x0,FindAllPlanService_1[_0x1cb71e(0x1f6)])();return _0x35b2e9[_0x1cb71e(0x1fd)](0xc8)[_0x1cb71e(0x201)](_0x35fedd);};exports[a24_0x1fc42a(0x1ed)]=list;const store=async(_0x45b909,_0x51f23f)=>{const _0x2bb150=a24_0x1fc42a,_0x17138c=_0x45b909[_0x2bb150(0x1d0)],_0x16239b=Yup[_0x2bb150(0x203)]()[_0x2bb150(0x1ce)]({'name':Yup[_0x2bb150(0x1ef)]()[_0x2bb150(0x1d3)]()});try{await _0x16239b[_0x2bb150(0x1f3)](_0x17138c);}catch(_0x4626f6){throw new AppError_1['default'](_0x4626f6[_0x2bb150(0x1ea)]);}const _0xb13ab4=await(0x0,CreatePlanService_1[_0x2bb150(0x1f6)])(_0x17138c);return _0x51f23f[_0x2bb150(0x1fd)](0xc8)[_0x2bb150(0x201)](_0xb13ab4);};exports[a24_0x1fc42a(0x1f7)]=store;function a24_0x986d(){const _0x58a6fd=['1344FiudwU','22rTLOtP','yup','verify','findByPk','hasOwnProperty','call','shape','prototype','body','119319uSbXcH','params','required','update','defineProperty','8158314ZfNOMJ','5iUJURF','toString','planId','10286019cglbFE','62uBUrXx','14307312vYLYdZ','index','getOwnPropertyDescriptor','super','configurable','authorization','split','secret','../models/Plan','10tmTmTM','10289IbADII','create','../services/PlanService/UpdatePlanService','query','message','remove','../models/User','list','jsonwebtoken','string','__setModuleDefault','15544WtbOOa','plano\x20id>\x20','validate','__importStar','4102792PpYwFQ','default','store','__createBinding','useOpenAi','log','../services/PlanService/CreatePlanService','__esModule','status','show','../models/Company','Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!','json','headers','object','../services/PlanService/FindAllPlanService','name'];a24_0x986d=function(){return _0x58a6fd;};return a24_0x986d();}const show=async(_0x566259,_0x26b781)=>{const _0x194708=a24_0x1fc42a,{id:_0x590111}=_0x566259[_0x194708(0x1d2)],_0xd6e493=_0x566259['headers']['authorization'],[,_0x59cd86]=_0xd6e493[_0x194708(0x1e2)]('\x20'),_0x44aab8=(0x0,jsonwebtoken_1[_0x194708(0x209)])(_0x59cd86,auth_1[_0x194708(0x1f6)][_0x194708(0x1e3)]),{id:_0x281e50,profile:_0x5b323c,companyId:_0x553d1a}=_0x44aab8,_0x5b8082=await User_1[_0x194708(0x1f6)][_0x194708(0x1cb)](_0x281e50),_0x126817=await Company_1['default']['findByPk'](_0x553d1a),_0x4decff=_0x126817[_0x194708(0x1d9)];if(_0x5b8082[_0x194708(0x1df)]===!![]){const _0x58d28f=await(0x0,ShowPlanService_1['default'])(_0x590111);return _0x26b781[_0x194708(0x1fd)](0xc8)['json'](_0x58d28f);}else{if(_0x590111!==_0x4decff[_0x194708(0x1d8)]())return _0x26b781['status'](0x190)[_0x194708(0x201)]({'error':_0x194708(0x200)});else{if(_0x590111===_0x4decff['toString']()){const _0x5f032e=await(0x0,ShowPlanService_1[_0x194708(0x1f6)])(_0x590111);return _0x26b781['status'](0xc8)['json'](_0x5f032e);}}}};exports[a24_0x1fc42a(0x1fe)]=show;function a24_0x21e2(_0x3abd54,_0x4f5a26){const _0x986d5f=a24_0x986d();return a24_0x21e2=function(_0x21e230,_0x40094b){_0x21e230=_0x21e230-0x1cb;let _0x50a90c=_0x986d5f[_0x21e230];return _0x50a90c;},a24_0x21e2(_0x3abd54,_0x4f5a26);}const update=async(_0x36843c,_0x5137eb)=>{const _0x3ffac1=a24_0x1fc42a,_0x3f0a7d=_0x36843c[_0x3ffac1(0x1d0)],_0x1b2d67=Yup[_0x3ffac1(0x203)]()['shape']({'name':Yup[_0x3ffac1(0x1ef)]()});try{await _0x1b2d67['validate'](_0x3f0a7d);}catch(_0x5a6d25){throw new AppError_1[(_0x3ffac1(0x1f6))](_0x5a6d25[_0x3ffac1(0x1ea)]);}const {id:_0x5f1ed7}=_0x3f0a7d;console[_0x3ffac1(0x1fa)](_0x3ffac1(0x1f2),_0x5f1ed7);const _0x162957=_0x36843c[_0x3ffac1(0x202)][_0x3ffac1(0x1e1)],[,_0x482acb]=_0x162957[_0x3ffac1(0x1e2)]('\x20'),_0x56d88b=(0x0,jsonwebtoken_1[_0x3ffac1(0x209)])(_0x482acb,auth_1[_0x3ffac1(0x1f6)][_0x3ffac1(0x1e3)]),{id:_0x311546,profile:_0x2a1c0b,companyId:_0x1bdc0d}=_0x56d88b,_0x1a311a=await User_1['default'][_0x3ffac1(0x1cb)](_0x311546),_0x1c7137=await Company_1[_0x3ffac1(0x1f6)]['findByPk'](_0x1bdc0d),_0x35177e=_0x1c7137[_0x3ffac1(0x1d9)];if(_0x1a311a[_0x3ffac1(0x1df)]===!![]){const _0x462698=await(0x0,UpdatePlanService_1[_0x3ffac1(0x1f6)])(_0x3f0a7d);return console[_0x3ffac1(0x1fa)](_0x462698[_0x3ffac1(0x1f9)]),_0x5137eb[_0x3ffac1(0x1fd)](0xc8)['json'](_0x462698);}else{if(_0x35177e[_0x3ffac1(0x1d8)]()!==_0x5f1ed7)return _0x5137eb[_0x3ffac1(0x1fd)](0x190)[_0x3ffac1(0x201)]({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});}};exports[a24_0x1fc42a(0x1d4)]=update;const remove=async(_0xc6cee2,_0x13571e)=>{const _0xeaa4f3=a24_0x1fc42a,{id:_0x2abc10}=_0xc6cee2[_0xeaa4f3(0x1d2)],_0x1a7105=_0xc6cee2[_0xeaa4f3(0x202)]['authorization'],[,_0x30bccc]=_0x1a7105[_0xeaa4f3(0x1e2)]('\x20'),_0x328cee=(0x0,jsonwebtoken_1['verify'])(_0x30bccc,auth_1['default'][_0xeaa4f3(0x1e3)]),{id:_0xbb4475,profile:_0x27d813,companyId:_0x15e7ff}=_0x328cee,_0x33b8ff=await User_1['default']['findByPk'](_0xbb4475);if(_0x33b8ff[_0xeaa4f3(0x1df)]===!![]){const _0x475d73=await(0x0,DeletePlanService_1['default'])(_0x2abc10);return _0x13571e[_0xeaa4f3(0x1fd)](0xc8)[_0xeaa4f3(0x201)](_0x475d73);}else{if(_0x15e7ff[_0xeaa4f3(0x1d8)]()!==_0x2abc10)return _0x13571e[_0xeaa4f3(0x1fd)](0x190)[_0xeaa4f3(0x201)]({'error':_0xeaa4f3(0x200)});}};exports['remove']=remove;