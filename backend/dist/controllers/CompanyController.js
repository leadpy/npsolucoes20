'use strict';const a13_0x14ae0e=a13_0x5f25;(function(_0x530d1e,_0x3e77be){const _0x16d26e=a13_0x5f25,_0x33a015=_0x530d1e();while(!![]){try{const _0x11d0d6=parseInt(_0x16d26e(0x1c1))/0x1+-parseInt(_0x16d26e(0x1d7))/0x2+-parseInt(_0x16d26e(0x1a0))/0x3*(parseInt(_0x16d26e(0x1cc))/0x4)+-parseInt(_0x16d26e(0x1d6))/0x5*(parseInt(_0x16d26e(0x1ac))/0x6)+parseInt(_0x16d26e(0x1d2))/0x7*(-parseInt(_0x16d26e(0x1bc))/0x8)+-parseInt(_0x16d26e(0x1d4))/0x9+-parseInt(_0x16d26e(0x19d))/0xa*(-parseInt(_0x16d26e(0x19f))/0xb);if(_0x11d0d6===_0x3e77be)break;else _0x33a015['push'](_0x33a015['shift']());}catch(_0xeb2c89){_0x33a015['push'](_0x33a015['shift']());}}}(a13_0x1f6f,0x18ed9));var __createBinding=this&&this[a13_0x14ae0e(0x1b7)]||(Object['create']?function(_0xc0e26e,_0x8edc0d,_0x2bd974,_0x7642c8){const _0x128dfc=a13_0x14ae0e;if(_0x7642c8===undefined)_0x7642c8=_0x2bd974;var _0x3b756b=Object['getOwnPropertyDescriptor'](_0x8edc0d,_0x2bd974);(!_0x3b756b||(_0x128dfc(0x1dd)in _0x3b756b?!_0x8edc0d[_0x128dfc(0x1b9)]:_0x3b756b[_0x128dfc(0x1c3)]||_0x3b756b[_0x128dfc(0x1bd)]))&&(_0x3b756b={'enumerable':!![],'get':function(){return _0x8edc0d[_0x2bd974];}}),Object['defineProperty'](_0xc0e26e,_0x7642c8,_0x3b756b);}:function(_0x50f23f,_0x3dcf12,_0x418961,_0x255318){if(_0x255318===undefined)_0x255318=_0x418961;_0x50f23f[_0x255318]=_0x3dcf12[_0x418961];}),__setModuleDefault=this&&this[a13_0x14ae0e(0x1b0)]||(Object[a13_0x14ae0e(0x1aa)]?function(_0x1f74c4,_0x149ee5){const _0x37ecd1=a13_0x14ae0e;Object[_0x37ecd1(0x1c4)](_0x1f74c4,_0x37ecd1(0x1c5),{'enumerable':!![],'value':_0x149ee5});}:function(_0x2ebfbc,_0x21ad2f){const _0x3f6884=a13_0x14ae0e;_0x2ebfbc[_0x3f6884(0x1c5)]=_0x21ad2f;}),__importStar=this&&this[a13_0x14ae0e(0x1da)]||function(_0x3ca4b6){const _0x4ab5af=a13_0x14ae0e;if(_0x3ca4b6&&_0x3ca4b6[_0x4ab5af(0x1b9)])return _0x3ca4b6;var _0x3c90e8={};if(_0x3ca4b6!=null){for(var _0x4d0b02 in _0x3ca4b6)if(_0x4d0b02!==_0x4ab5af(0x1c5)&&Object[_0x4ab5af(0x1d9)][_0x4ab5af(0x1be)][_0x4ab5af(0x1c7)](_0x3ca4b6,_0x4d0b02))__createBinding(_0x3c90e8,_0x3ca4b6,_0x4d0b02);}return __setModuleDefault(_0x3c90e8,_0x3ca4b6),_0x3c90e8;},__importDefault=this&&this[a13_0x14ae0e(0x1bf)]||function(_0x264773){return _0x264773&&_0x264773['__esModule']?_0x264773:{'default':_0x264773};};function a13_0x5f25(_0x34dd51,_0x107663){const _0x1f6f5b=a13_0x1f6f();return a13_0x5f25=function(_0x5f25b6,_0x1026ad){_0x5f25b6=_0x5f25b6-0x19d;let _0xabb9d8=_0x1f6f5b[_0x5f25b6];return _0xabb9d8;},a13_0x5f25(_0x34dd51,_0x107663);}Object[a13_0x14ae0e(0x1c4)](exports,a13_0x14ae0e(0x1b9),{'value':!![]}),exports[a13_0x14ae0e(0x1d8)]=exports[a13_0x14ae0e(0x1a9)]=exports[a13_0x14ae0e(0x1b2)]=exports[a13_0x14ae0e(0x1b3)]=exports['update']=exports['list']=exports[a13_0x14ae0e(0x1c8)]=exports[a13_0x14ae0e(0x1cf)]=exports[a13_0x14ae0e(0x1c2)]=void 0x0;const jsonwebtoken_1=require(a13_0x14ae0e(0x1ad)),auth_1=__importDefault(require('../config/auth')),Yup=__importStar(require('yup')),AppError_1=__importDefault(require(a13_0x14ae0e(0x1a6))),Company_1=__importDefault(require(a13_0x14ae0e(0x1cd))),ListCompaniesService_1=__importDefault(require(a13_0x14ae0e(0x1b4))),CreateCompanyService_1=__importDefault(require(a13_0x14ae0e(0x1b1))),UpdateCompanyService_1=__importDefault(require('../services/CompanyService/UpdateCompanyService')),ShowCompanyService_1=__importDefault(require(a13_0x14ae0e(0x1d0))),UpdateSchedulesService_1=__importDefault(require(a13_0x14ae0e(0x1a7))),DeleteCompanyService_1=__importDefault(require(a13_0x14ae0e(0x1dc))),FindAllCompaniesService_1=__importDefault(require('../services/CompanyService/FindAllCompaniesService')),ShowPlanCompanyService_1=__importDefault(require(a13_0x14ae0e(0x1b6))),User_1=__importDefault(require(a13_0x14ae0e(0x1c6))),ListCompaniesPlanService_1=__importDefault(require(a13_0x14ae0e(0x1b8))),index=async(_0x2dcabe,_0x142f01)=>{const _0x53422a=a13_0x14ae0e,{searchParam:_0x194cea,pageNumber:_0x413511}=_0x2dcabe[_0x53422a(0x1c0)],_0xf6c88a=_0x2dcabe['headers'][_0x53422a(0x1de)],[,_0x46515a]=_0xf6c88a[_0x53422a(0x1cb)]('\x20'),_0x395831=(0x0,jsonwebtoken_1['verify'])(_0x46515a,auth_1[_0x53422a(0x1c5)]['secret']),{id:_0x285d19,profile:_0xbd9b94,companyId:_0x26cd1c}=_0x395831,_0x3e7948=await Company_1[_0x53422a(0x1c5)]['findByPk'](_0x26cd1c),_0x1671ee=await User_1[_0x53422a(0x1c5)][_0x53422a(0x19e)](_0x285d19);if(_0x1671ee[_0x53422a(0x1c9)]===!![]){const {companies:_0xb9767,count:_0x285506,hasMore:_0x358aac}=await(0x0,ListCompaniesService_1[_0x53422a(0x1c5)])({'searchParam':_0x194cea,'pageNumber':_0x413511});return _0x142f01['json']({'companies':_0xb9767,'count':_0x285506,'hasMore':_0x358aac});}else{const {companies:_0x30d5f4,count:_0x25c3a8,hasMore:_0x19ccc0}=await(0x0,ListCompaniesService_1[_0x53422a(0x1c5)])({'searchParam':_0x3e7948['name'],'pageNumber':_0x413511});return _0x142f01[_0x53422a(0x1af)]({'companies':_0x30d5f4,'count':_0x25c3a8,'hasMore':_0x19ccc0});}};exports['index']=index;const store=async(_0x78c957,_0x2c4f37)=>{const _0x5402b5=a13_0x14ae0e,_0x3bf7f6=_0x78c957[_0x5402b5(0x1ab)],_0x4472af=Yup[_0x5402b5(0x1ce)]()['shape']({'name':Yup['string']()[_0x5402b5(0x1a2)](),'password':Yup['string']()['required']()['min'](0x5)});try{await _0x4472af[_0x5402b5(0x1ca)](_0x3bf7f6);}catch(_0x3536f3){throw new AppError_1['default'](_0x3536f3[_0x5402b5(0x1a4)]);}const _0x3ababd=await(0x0,CreateCompanyService_1[_0x5402b5(0x1c5)])(_0x3bf7f6);return _0x2c4f37['status'](0xc8)['json'](_0x3ababd);};exports[a13_0x14ae0e(0x1cf)]=store;const show=async(_0x2669ee,_0x307740)=>{const _0x458542=a13_0x14ae0e,{id:_0x48a539}=_0x2669ee[_0x458542(0x1a8)],_0x51e410=_0x2669ee[_0x458542(0x1d3)][_0x458542(0x1de)],[,_0x38aa09]=_0x51e410['split']('\x20'),_0x4d648e=(0x0,jsonwebtoken_1[_0x458542(0x1a3)])(_0x38aa09,auth_1['default'][_0x458542(0x1a1)]),{id:_0xadc80a,profile:_0x548eac,companyId:_0x363ff8}=_0x4d648e,_0x8c7e57=await User_1[_0x458542(0x1c5)]['findByPk'](_0xadc80a);if(_0x8c7e57['super']===!![]){const _0x27c109=await(0x0,ShowCompanyService_1[_0x458542(0x1c5)])(_0x48a539);return _0x307740[_0x458542(0x1db)](0xc8)[_0x458542(0x1af)](_0x27c109);}else{if(_0x48a539!==_0x363ff8['toString']())return _0x307740[_0x458542(0x1db)](0x190)[_0x458542(0x1af)]({'error':_0x458542(0x1ae)});else{if(_0x48a539===_0x363ff8[_0x458542(0x1a5)]()){const _0x5de00e=await(0x0,ShowCompanyService_1[_0x458542(0x1c5)])(_0x48a539);return _0x307740[_0x458542(0x1db)](0xc8)['json'](_0x5de00e);}}}};exports[a13_0x14ae0e(0x1c8)]=show;const list=async(_0x1c4fe0,_0x57a884)=>{const _0x4e3476=a13_0x14ae0e,_0x49a6c2=_0x1c4fe0[_0x4e3476(0x1d3)]['authorization'],[,_0xc51aa3]=_0x49a6c2['split']('\x20'),_0x22a353=(0x0,jsonwebtoken_1['verify'])(_0xc51aa3,auth_1[_0x4e3476(0x1c5)][_0x4e3476(0x1a1)]),{id:_0x4e7aa4,profile:_0x21b9c9,companyId:_0x5114b2}=_0x22a353,_0x456ad9=await User_1['default'][_0x4e3476(0x19e)](_0x4e7aa4);if(_0x456ad9['super']===!![]){const _0x47372b=await(0x0,FindAllCompaniesService_1[_0x4e3476(0x1c5)])();return _0x57a884['status'](0xc8)[_0x4e3476(0x1af)](_0x47372b);}else{const _0x4bef87=await(0x0,FindAllCompaniesService_1['default'])();let _0x31cf68=[];for(let _0x54c683=0x0;_0x54c683<_0x4bef87[_0x4e3476(0x1d1)];_0x54c683++){const _0x22da31=_0x4bef87[_0x54c683]['id'];if(_0x22da31===_0x5114b2)return _0x31cf68[_0x4e3476(0x1ba)](_0x4bef87[_0x54c683]),_0x57a884[_0x4e3476(0x1db)](0xc8)[_0x4e3476(0x1af)](_0x31cf68);}}};exports[a13_0x14ae0e(0x1b5)]=list;const update=async(_0x2078e5,_0x126bb5)=>{const _0x5b3482=a13_0x14ae0e,_0x187adf=_0x2078e5[_0x5b3482(0x1ab)],_0x306470=Yup[_0x5b3482(0x1ce)]()[_0x5b3482(0x1d5)]({'name':Yup['string']()});try{await _0x306470[_0x5b3482(0x1ca)](_0x187adf);}catch(_0x1dfebe){throw new AppError_1[(_0x5b3482(0x1c5))](_0x1dfebe[_0x5b3482(0x1a4)]);}const {id:_0x2f3025}=_0x2078e5[_0x5b3482(0x1a8)],_0x3991a1=_0x2078e5[_0x5b3482(0x1d3)][_0x5b3482(0x1de)],[,_0x25c25a]=_0x3991a1[_0x5b3482(0x1cb)]('\x20'),_0x41ba19=(0x0,jsonwebtoken_1[_0x5b3482(0x1a3)])(_0x25c25a,auth_1[_0x5b3482(0x1c5)][_0x5b3482(0x1a1)]),{id:_0x5efb0a,profile:_0x1a6209,companyId:_0x23c595}=_0x41ba19,_0x30945d=await User_1[_0x5b3482(0x1c5)]['findByPk'](_0x5efb0a);if(_0x30945d[_0x5b3482(0x1c9)]===!![]){const _0x42e6cc=await(0x0,UpdateCompanyService_1['default'])({'id':_0x2f3025,..._0x187adf});return _0x126bb5['status'](0xc8)['json'](_0x42e6cc);}else{if(_0x187adf?.['id'][_0x5b3482(0x1a5)]()!==_0x2f3025||_0x23c595[_0x5b3482(0x1a5)]()!==_0x2f3025)return _0x126bb5['status'](0x190)[_0x5b3482(0x1af)]({'error':_0x5b3482(0x1ae)});else{const _0x5a400b=await(0x0,UpdateCompanyService_1[_0x5b3482(0x1c5)])({'id':_0x2f3025,..._0x187adf});return _0x126bb5[_0x5b3482(0x1db)](0xc8)[_0x5b3482(0x1af)](_0x5a400b);}}};exports[a13_0x14ae0e(0x1bb)]=update;function a13_0x1f6f(){const _0x1fe46a=['181636VZhaGw','index','writable','defineProperty','default','../models/User','call','show','super','validate','split','25640URTheM','../models/Company','object','store','../services/CompanyService/ShowCompanyService','length','37429QEGEdf','headers','1410210BPClWW','shape','105EpVzav','124346gxJtgo','indexPlan','prototype','__importStar','status','../services/CompanyService/DeleteCompanyService','get','authorization','26590YeOqyY','findByPk','1177oaNhEt','6jYEFYZ','secret','required','verify','message','toString','../errors/AppError','../services/CompanyService/UpdateSchedulesService','params','listPlan','create','body','13374HRiYfW','jsonwebtoken','Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!','json','__setModuleDefault','../services/CompanyService/CreateCompanyService','remove','updateSchedules','../services/CompanyService/ListCompaniesService','list','../services/CompanyService/ShowPlanCompanyService','__createBinding','../services/CompanyService/ListCompaniesPlanService','__esModule','push','update','128FQGYEl','configurable','hasOwnProperty','__importDefault','query'];a13_0x1f6f=function(){return _0x1fe46a;};return a13_0x1f6f();}const updateSchedules=async(_0x3b9d36,_0x23a6a4)=>{const _0x574269=a13_0x14ae0e,{schedules:_0x3af5e4}=_0x3b9d36[_0x574269(0x1ab)],{id:_0x5d1c66}=_0x3b9d36[_0x574269(0x1a8)],_0x412b1e=_0x3b9d36['headers']['authorization'],[,_0x1feb9f]=_0x412b1e['split']('\x20'),_0x46b5ed=(0x0,jsonwebtoken_1[_0x574269(0x1a3)])(_0x1feb9f,auth_1[_0x574269(0x1c5)][_0x574269(0x1a1)]),{id:_0x472f3b,profile:_0x8cba4a,companyId:_0x38fcd7}=_0x46b5ed,_0x19d899=await User_1[_0x574269(0x1c5)][_0x574269(0x19e)](_0x472f3b);if(_0x19d899[_0x574269(0x1c9)]===!![]){const _0x1077bb=await(0x0,UpdateSchedulesService_1[_0x574269(0x1c5)])({'id':_0x5d1c66,'schedules':_0x3af5e4});return _0x23a6a4[_0x574269(0x1db)](0xc8)[_0x574269(0x1af)](_0x1077bb);}else{if(_0x38fcd7[_0x574269(0x1a5)]()!==_0x5d1c66)return _0x23a6a4[_0x574269(0x1db)](0x190)[_0x574269(0x1af)]({'error':_0x574269(0x1ae)});else{const _0x474c69=await(0x0,UpdateSchedulesService_1[_0x574269(0x1c5)])({'id':_0x5d1c66,'schedules':_0x3af5e4});return _0x23a6a4[_0x574269(0x1db)](0xc8)[_0x574269(0x1af)](_0x474c69);}}};exports[a13_0x14ae0e(0x1b3)]=updateSchedules;const remove=async(_0x4b8344,_0x17406e)=>{const _0x121f5e=a13_0x14ae0e,{id:_0x4c69f1}=_0x4b8344[_0x121f5e(0x1a8)],_0x2758fb=_0x4b8344[_0x121f5e(0x1d3)][_0x121f5e(0x1de)],[,_0x949865]=_0x2758fb[_0x121f5e(0x1cb)]('\x20'),_0x52dfee=(0x0,jsonwebtoken_1[_0x121f5e(0x1a3)])(_0x949865,auth_1[_0x121f5e(0x1c5)][_0x121f5e(0x1a1)]),{id:_0x1c5b3f,profile:_0x3356e3,companyId:_0x52d0bc}=_0x52dfee,_0x361e5f=await User_1[_0x121f5e(0x1c5)][_0x121f5e(0x19e)](_0x1c5b3f);if(_0x361e5f['super']===!![]){const _0x2fbf79=await(0x0,DeleteCompanyService_1[_0x121f5e(0x1c5)])(_0x4c69f1);return _0x17406e[_0x121f5e(0x1db)](0xc8)[_0x121f5e(0x1af)](_0x2fbf79);}else return _0x17406e['status'](0x190)[_0x121f5e(0x1af)]({'error':_0x121f5e(0x1ae)});};exports[a13_0x14ae0e(0x1b2)]=remove;const listPlan=async(_0x466eb7,_0x308f1d)=>{const _0x3cc4a4=a13_0x14ae0e,{id:_0x50f1d7}=_0x466eb7['params'],_0x35f41f=_0x466eb7['headers'][_0x3cc4a4(0x1de)],[,_0x30b7ce]=_0x35f41f[_0x3cc4a4(0x1cb)]('\x20'),_0x4993d9=(0x0,jsonwebtoken_1[_0x3cc4a4(0x1a3)])(_0x30b7ce,auth_1[_0x3cc4a4(0x1c5)][_0x3cc4a4(0x1a1)]),{id:_0x237033,profile:_0x5c2f30,companyId:_0x1c35cd}=_0x4993d9,_0x162141=await User_1['default'][_0x3cc4a4(0x19e)](_0x237033);if(_0x162141[_0x3cc4a4(0x1c9)]===!![]){const _0x52f8f7=await(0x0,ShowPlanCompanyService_1[_0x3cc4a4(0x1c5)])(_0x50f1d7);return _0x308f1d[_0x3cc4a4(0x1db)](0xc8)[_0x3cc4a4(0x1af)](_0x52f8f7);}else{if(_0x1c35cd[_0x3cc4a4(0x1a5)]()!==_0x50f1d7)return _0x308f1d['status'](0x190)[_0x3cc4a4(0x1af)]({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});else{const _0x1995fa=await(0x0,ShowPlanCompanyService_1[_0x3cc4a4(0x1c5)])(_0x50f1d7);return _0x308f1d[_0x3cc4a4(0x1db)](0xc8)['json'](_0x1995fa);}}};exports['listPlan']=listPlan;const indexPlan=async(_0x5d961e,_0x3a4d1d)=>{const _0x380f2d=a13_0x14ae0e,{searchParam:_0x10b615,pageNumber:_0x583e86}=_0x5d961e['query'],_0x101d20=_0x5d961e[_0x380f2d(0x1d3)][_0x380f2d(0x1de)],[,_0x355d54]=_0x101d20['split']('\x20'),_0x5e4bc6=(0x0,jsonwebtoken_1[_0x380f2d(0x1a3)])(_0x355d54,auth_1['default'][_0x380f2d(0x1a1)]),{id:_0x42b6e3,profile:_0x418ebe,companyId:_0x4c7424}=_0x5e4bc6,_0x415654=await User_1[_0x380f2d(0x1c5)][_0x380f2d(0x19e)](_0x42b6e3);if(_0x415654[_0x380f2d(0x1c9)]===!![]){const _0x528d48=await(0x0,ListCompaniesPlanService_1[_0x380f2d(0x1c5)])();return _0x3a4d1d['json']({'companies':_0x528d48});}else return _0x3a4d1d[_0x380f2d(0x1db)](0x190)[_0x380f2d(0x1af)]({'error':_0x380f2d(0x1ae)});};exports['indexPlan']=indexPlan;