'use strict';const a13_0x4eaf47=a13_0x1e2e;(function(_0x47e462,_0x53fdb4){const _0x43b0cc=a13_0x1e2e,_0x5a7c7a=_0x47e462();while(!![]){try{const _0x453b99=parseInt(_0x43b0cc(0x157))/0x1+parseInt(_0x43b0cc(0x15c))/0x2+-parseInt(_0x43b0cc(0x16e))/0x3*(parseInt(_0x43b0cc(0x15a))/0x4)+-parseInt(_0x43b0cc(0x14e))/0x5+parseInt(_0x43b0cc(0x149))/0x6+-parseInt(_0x43b0cc(0x183))/0x7*(parseInt(_0x43b0cc(0x178))/0x8)+-parseInt(_0x43b0cc(0x170))/0x9;if(_0x453b99===_0x53fdb4)break;else _0x5a7c7a['push'](_0x5a7c7a['shift']());}catch(_0xc53e6c){_0x5a7c7a['push'](_0x5a7c7a['shift']());}}}(a13_0x1b57,0x9934e));var __createBinding=this&&this[a13_0x4eaf47(0x14c)]||(Object[a13_0x4eaf47(0x159)]?function(_0x2c129f,_0xec4189,_0x5f49f6,_0x2c3a4f){const _0x2bc271=a13_0x4eaf47;if(_0x2c3a4f===undefined)_0x2c3a4f=_0x5f49f6;var _0x4814a1=Object[_0x2bc271(0x174)](_0xec4189,_0x5f49f6);(!_0x4814a1||(_0x2bc271(0x175)in _0x4814a1?!_0xec4189['__esModule']:_0x4814a1[_0x2bc271(0x145)]||_0x4814a1['configurable']))&&(_0x4814a1={'enumerable':!![],'get':function(){return _0xec4189[_0x5f49f6];}}),Object[_0x2bc271(0x156)](_0x2c129f,_0x2c3a4f,_0x4814a1);}:function(_0xb307a4,_0x585abb,_0x512562,_0x4aaddd){if(_0x4aaddd===undefined)_0x4aaddd=_0x512562;_0xb307a4[_0x4aaddd]=_0x585abb[_0x512562];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object['create']?function(_0x4f446b,_0x5efab8){const _0x127696=a13_0x4eaf47;Object[_0x127696(0x156)](_0x4f446b,_0x127696(0x15e),{'enumerable':!![],'value':_0x5efab8});}:function(_0x1e5857,_0x33ea1c){const _0x5b9333=a13_0x4eaf47;_0x1e5857[_0x5b9333(0x15e)]=_0x33ea1c;}),__importStar=this&&this[a13_0x4eaf47(0x184)]||function(_0x23d5db){const _0x525f33=a13_0x4eaf47;if(_0x23d5db&&_0x23d5db['__esModule'])return _0x23d5db;var _0x3dee38={};if(_0x23d5db!=null){for(var _0x4a395c in _0x23d5db)if(_0x4a395c!=='default'&&Object[_0x525f33(0x164)][_0x525f33(0x169)][_0x525f33(0x180)](_0x23d5db,_0x4a395c))__createBinding(_0x3dee38,_0x23d5db,_0x4a395c);}return __setModuleDefault(_0x3dee38,_0x23d5db),_0x3dee38;},__importDefault=this&&this[a13_0x4eaf47(0x179)]||function(_0x162321){const _0x4dd965=a13_0x4eaf47;return _0x162321&&_0x162321[_0x4dd965(0x167)]?_0x162321:{'default':_0x162321};};Object[a13_0x4eaf47(0x156)](exports,'__esModule',{'value':!![]}),exports[a13_0x4eaf47(0x16c)]=exports[a13_0x4eaf47(0x153)]=exports['remove']=exports['updateSchedules']=exports[a13_0x4eaf47(0x161)]=exports[a13_0x4eaf47(0x16f)]=exports[a13_0x4eaf47(0x173)]=exports[a13_0x4eaf47(0x146)]=exports[a13_0x4eaf47(0x17e)]=void 0x0;const jsonwebtoken_1=require(a13_0x4eaf47(0x177)),auth_1=__importDefault(require(a13_0x4eaf47(0x14a))),Yup=__importStar(require('yup')),AppError_1=__importDefault(require(a13_0x4eaf47(0x17a))),Company_1=__importDefault(require(a13_0x4eaf47(0x163))),ListCompaniesService_1=__importDefault(require(a13_0x4eaf47(0x17c))),CreateCompanyService_1=__importDefault(require('../services/CompanyService/CreateCompanyService')),UpdateCompanyService_1=__importDefault(require(a13_0x4eaf47(0x172))),ShowCompanyService_1=__importDefault(require(a13_0x4eaf47(0x16a))),UpdateSchedulesService_1=__importDefault(require(a13_0x4eaf47(0x155))),DeleteCompanyService_1=__importDefault(require('../services/CompanyService/DeleteCompanyService')),FindAllCompaniesService_1=__importDefault(require(a13_0x4eaf47(0x152))),ShowPlanCompanyService_1=__importDefault(require('../services/CompanyService/ShowPlanCompanyService')),User_1=__importDefault(require('../models/User')),ListCompaniesPlanService_1=__importDefault(require(a13_0x4eaf47(0x17b))),index=async(_0x20056a,_0x2741cd)=>{const _0x1013c4=a13_0x4eaf47,{searchParam:_0x53b4ae,pageNumber:_0x2c5f9e}=_0x20056a[_0x1013c4(0x158)],_0x24b2fa=_0x20056a['headers'][_0x1013c4(0x150)],[,_0x368d10]=_0x24b2fa[_0x1013c4(0x14f)]('\x20'),_0x1914fa=(0x0,jsonwebtoken_1['verify'])(_0x368d10,auth_1['default'][_0x1013c4(0x148)]),{id:_0x236409,profile:_0x5c20e4,companyId:_0x5e5eed}=_0x1914fa,_0x5a2ac7=await Company_1[_0x1013c4(0x15e)][_0x1013c4(0x166)](_0x5e5eed),_0xa55fb3=await User_1['default'][_0x1013c4(0x166)](_0x236409);if(_0xa55fb3[_0x1013c4(0x15f)]===!![]){const {companies:_0x18173f,count:_0x23485b,hasMore:_0x17a2d5}=await(0x0,ListCompaniesService_1[_0x1013c4(0x15e)])({'searchParam':_0x53b4ae,'pageNumber':_0x2c5f9e});return _0x2741cd['json']({'companies':_0x18173f,'count':_0x23485b,'hasMore':_0x17a2d5});}else{const {companies:_0xbc8eaf,count:_0x30e299,hasMore:_0x16af79}=await(0x0,ListCompaniesService_1['default'])({'searchParam':_0x5a2ac7[_0x1013c4(0x14d)],'pageNumber':_0x2c5f9e});return _0x2741cd[_0x1013c4(0x16d)]({'companies':_0xbc8eaf,'count':_0x30e299,'hasMore':_0x16af79});}};exports['index']=index;function a13_0x1e2e(_0x14dc78,_0x3cc07f){const _0x1b57c0=a13_0x1b57();return a13_0x1e2e=function(_0x1e2e97,_0x1d50e4){_0x1e2e97=_0x1e2e97-0x145;let _0x1282e8=_0x1b57c0[_0x1e2e97];return _0x1282e8;},a13_0x1e2e(_0x14dc78,_0x3cc07f);}const store=async(_0x43b628,_0x167338)=>{const _0x4b3b59=a13_0x4eaf47,_0x50cae6=_0x43b628[_0x4b3b59(0x16b)],_0xa03ec6=Yup[_0x4b3b59(0x15d)]()[_0x4b3b59(0x171)]({'name':Yup['string']()[_0x4b3b59(0x176)](),'password':Yup[_0x4b3b59(0x168)]()[_0x4b3b59(0x176)]()[_0x4b3b59(0x165)](0x5)});try{await _0xa03ec6[_0x4b3b59(0x182)](_0x50cae6);}catch(_0x27f11d){throw new AppError_1[(_0x4b3b59(0x15e))](_0x27f11d[_0x4b3b59(0x17f)]);}const _0x3a2400=await(0x0,CreateCompanyService_1['default'])(_0x50cae6);return _0x167338['status'](0xc8)[_0x4b3b59(0x16d)](_0x3a2400);};exports[a13_0x4eaf47(0x146)]=store;const show=async(_0x3ef99b,_0xe181d2)=>{const _0x354a42=a13_0x4eaf47,{id:_0x24e081}=_0x3ef99b['params'],_0x3db5af=_0x3ef99b[_0x354a42(0x154)][_0x354a42(0x150)],[,_0x7bfd90]=_0x3db5af['split']('\x20'),_0x4eb96c=(0x0,jsonwebtoken_1[_0x354a42(0x181)])(_0x7bfd90,auth_1[_0x354a42(0x15e)][_0x354a42(0x148)]),{id:_0x5268c3,profile:_0x20e45c,companyId:_0x113286}=_0x4eb96c,_0xc2d556=await User_1['default'][_0x354a42(0x166)](_0x5268c3);if(_0xc2d556['super']===!![]){const _0x4aa2d0=await(0x0,ShowCompanyService_1[_0x354a42(0x15e)])(_0x24e081);return _0xe181d2[_0x354a42(0x15b)](0xc8)[_0x354a42(0x16d)](_0x4aa2d0);}else{if(_0x24e081!==_0x113286[_0x354a42(0x151)]())return _0xe181d2[_0x354a42(0x15b)](0x190)[_0x354a42(0x16d)]({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});else{if(_0x24e081===_0x113286[_0x354a42(0x151)]()){const _0x39ea10=await(0x0,ShowCompanyService_1[_0x354a42(0x15e)])(_0x24e081);return _0xe181d2['status'](0xc8)[_0x354a42(0x16d)](_0x39ea10);}}}};exports[a13_0x4eaf47(0x173)]=show;const list=async(_0x3616ba,_0x52f93f)=>{const _0x42c3af=a13_0x4eaf47,_0x25a665=_0x3616ba[_0x42c3af(0x154)][_0x42c3af(0x150)],[,_0x184159]=_0x25a665[_0x42c3af(0x14f)]('\x20'),_0x4e6ddf=(0x0,jsonwebtoken_1[_0x42c3af(0x181)])(_0x184159,auth_1[_0x42c3af(0x15e)][_0x42c3af(0x148)]),{id:_0x5ce9cc,profile:_0x14799d,companyId:_0x3ba265}=_0x4e6ddf,_0x157c5a=await User_1[_0x42c3af(0x15e)][_0x42c3af(0x166)](_0x5ce9cc);if(_0x157c5a[_0x42c3af(0x15f)]===!![]){const _0x1fdd92=await(0x0,FindAllCompaniesService_1[_0x42c3af(0x15e)])();return _0x52f93f[_0x42c3af(0x15b)](0xc8)[_0x42c3af(0x16d)](_0x1fdd92);}else{const _0x584f52=await(0x0,FindAllCompaniesService_1['default'])();let _0x1bd017=[];for(let _0x854a9b=0x0;_0x854a9b<_0x584f52[_0x42c3af(0x17d)];_0x854a9b++){const _0x42c430=_0x584f52[_0x854a9b]['id'];if(_0x42c430===_0x3ba265)return _0x1bd017['push'](_0x584f52[_0x854a9b]),_0x52f93f[_0x42c3af(0x15b)](0xc8)['json'](_0x1bd017);}}};exports[a13_0x4eaf47(0x16f)]=list;const update=async(_0x1b627f,_0x8c5b13)=>{const _0x5915b6=a13_0x4eaf47,_0x4bc26d=_0x1b627f[_0x5915b6(0x16b)],_0x394896=Yup[_0x5915b6(0x15d)]()[_0x5915b6(0x171)]({'name':Yup[_0x5915b6(0x168)]()});try{await _0x394896['validate'](_0x4bc26d);}catch(_0x202856){throw new AppError_1[(_0x5915b6(0x15e))](_0x202856[_0x5915b6(0x17f)]);}const {id:_0x40b12a}=_0x1b627f['params'],_0x167e3d=_0x1b627f[_0x5915b6(0x154)][_0x5915b6(0x150)],[,_0x122118]=_0x167e3d[_0x5915b6(0x14f)]('\x20'),_0x1489ad=(0x0,jsonwebtoken_1['verify'])(_0x122118,auth_1[_0x5915b6(0x15e)][_0x5915b6(0x148)]),{id:_0xf4c875,profile:_0x3fcbe4,companyId:_0x4dd77c}=_0x1489ad,_0x416ced=await User_1[_0x5915b6(0x15e)]['findByPk'](_0xf4c875);if(_0x416ced['super']===!![]){const _0x4e1275=await(0x0,UpdateCompanyService_1[_0x5915b6(0x15e)])({'id':_0x40b12a,..._0x4bc26d});return _0x8c5b13[_0x5915b6(0x15b)](0xc8)['json'](_0x4e1275);}else{if(_0x4bc26d?.['id'][_0x5915b6(0x151)]()!==_0x40b12a||_0x4dd77c[_0x5915b6(0x151)]()!==_0x40b12a)return _0x8c5b13['status'](0x190)['json']({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});else{const _0x5ec2c1=await(0x0,UpdateCompanyService_1[_0x5915b6(0x15e)])({'id':_0x40b12a,..._0x4bc26d});return _0x8c5b13[_0x5915b6(0x15b)](0xc8)[_0x5915b6(0x16d)](_0x5ec2c1);}}};exports[a13_0x4eaf47(0x161)]=update;const updateSchedules=async(_0x2faee9,_0x5bbf92)=>{const _0x50b8ce=a13_0x4eaf47,{schedules:_0x72e350}=_0x2faee9['body'],{id:_0x19e634}=_0x2faee9[_0x50b8ce(0x162)],_0x1d4cd7=_0x2faee9[_0x50b8ce(0x154)][_0x50b8ce(0x150)],[,_0x176ad9]=_0x1d4cd7['split']('\x20'),_0x54969f=(0x0,jsonwebtoken_1[_0x50b8ce(0x181)])(_0x176ad9,auth_1['default'][_0x50b8ce(0x148)]),{id:_0xe946fb,profile:_0x3e944a,companyId:_0x4eff0b}=_0x54969f,_0x4e2a13=await User_1['default'][_0x50b8ce(0x166)](_0xe946fb);if(_0x4e2a13[_0x50b8ce(0x15f)]===!![]){const _0x264728=await(0x0,UpdateSchedulesService_1[_0x50b8ce(0x15e)])({'id':_0x19e634,'schedules':_0x72e350});return _0x5bbf92[_0x50b8ce(0x15b)](0xc8)[_0x50b8ce(0x16d)](_0x264728);}else{if(_0x4eff0b['toString']()!==_0x19e634)return _0x5bbf92[_0x50b8ce(0x15b)](0x190)['json']({'error':_0x50b8ce(0x147)});else{const _0x407b2e=await(0x0,UpdateSchedulesService_1['default'])({'id':_0x19e634,'schedules':_0x72e350});return _0x5bbf92[_0x50b8ce(0x15b)](0xc8)[_0x50b8ce(0x16d)](_0x407b2e);}}};exports[a13_0x4eaf47(0x160)]=updateSchedules;const remove=async(_0x599946,_0x100004)=>{const _0x2c9e4e=a13_0x4eaf47,{id:_0x38bf0f}=_0x599946['params'],_0x30cf96=_0x599946[_0x2c9e4e(0x154)][_0x2c9e4e(0x150)],[,_0x5757af]=_0x30cf96['split']('\x20'),_0x15b114=(0x0,jsonwebtoken_1[_0x2c9e4e(0x181)])(_0x5757af,auth_1[_0x2c9e4e(0x15e)]['secret']),{id:_0x3ae694,profile:_0xc96e51,companyId:_0x152182}=_0x15b114,_0x58d74a=await User_1[_0x2c9e4e(0x15e)][_0x2c9e4e(0x166)](_0x3ae694);if(_0x58d74a[_0x2c9e4e(0x15f)]===!![]){const _0x410bf5=await(0x0,DeleteCompanyService_1[_0x2c9e4e(0x15e)])(_0x38bf0f);return _0x100004[_0x2c9e4e(0x15b)](0xc8)[_0x2c9e4e(0x16d)](_0x410bf5);}else return _0x100004[_0x2c9e4e(0x15b)](0x190)[_0x2c9e4e(0x16d)]({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});};exports[a13_0x4eaf47(0x14b)]=remove;const listPlan=async(_0x120b25,_0x3bb65f)=>{const _0x1aae33=a13_0x4eaf47,{id:_0x381096}=_0x120b25[_0x1aae33(0x162)],_0x38f903=_0x120b25[_0x1aae33(0x154)][_0x1aae33(0x150)],[,_0x5e12d3]=_0x38f903[_0x1aae33(0x14f)]('\x20'),_0xdd92c7=(0x0,jsonwebtoken_1[_0x1aae33(0x181)])(_0x5e12d3,auth_1[_0x1aae33(0x15e)]['secret']),{id:_0x5999dd,profile:_0x5a0de5,companyId:_0x53e161}=_0xdd92c7,_0x55022e=await User_1['default'][_0x1aae33(0x166)](_0x5999dd);if(_0x55022e[_0x1aae33(0x15f)]===!![]){const _0x929235=await(0x0,ShowPlanCompanyService_1[_0x1aae33(0x15e)])(_0x381096);return _0x3bb65f[_0x1aae33(0x15b)](0xc8)[_0x1aae33(0x16d)](_0x929235);}else{if(_0x53e161['toString']()!==_0x381096)return _0x3bb65f[_0x1aae33(0x15b)](0x190)[_0x1aae33(0x16d)]({'error':_0x1aae33(0x147)});else{const _0x1ad955=await(0x0,ShowPlanCompanyService_1[_0x1aae33(0x15e)])(_0x381096);return _0x3bb65f[_0x1aae33(0x15b)](0xc8)[_0x1aae33(0x16d)](_0x1ad955);}}};exports[a13_0x4eaf47(0x153)]=listPlan;function a13_0x1b57(){const _0x830040=['indexPlan','json','756RoOIQI','list','3755448tCOLoa','shape','../services/CompanyService/UpdateCompanyService','show','getOwnPropertyDescriptor','get','required','jsonwebtoken','8sIsXML','__importDefault','../errors/AppError','../services/CompanyService/ListCompaniesPlanService','../services/CompanyService/ListCompaniesService','length','index','message','call','verify','validate','1799763SJvbbZ','__importStar','writable','store','Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!','secret','2825070eSJtEz','../config/auth','remove','__createBinding','name','3042405sHuHJO','split','authorization','toString','../services/CompanyService/FindAllCompaniesService','listPlan','headers','../services/CompanyService/UpdateSchedulesService','defineProperty','732963LiiIRs','query','create','4364DGiybw','status','1963040UXdgmr','object','default','super','updateSchedules','update','params','../models/Company','prototype','min','findByPk','__esModule','string','hasOwnProperty','../services/CompanyService/ShowCompanyService','body'];a13_0x1b57=function(){return _0x830040;};return a13_0x1b57();}const indexPlan=async(_0x445303,_0x3d54f8)=>{const _0x8bd96a=a13_0x4eaf47,{searchParam:_0x5eaca3,pageNumber:_0x4a39c2}=_0x445303[_0x8bd96a(0x158)],_0x46487c=_0x445303[_0x8bd96a(0x154)][_0x8bd96a(0x150)],[,_0x3208d5]=_0x46487c[_0x8bd96a(0x14f)]('\x20'),_0x58433e=(0x0,jsonwebtoken_1[_0x8bd96a(0x181)])(_0x3208d5,auth_1[_0x8bd96a(0x15e)][_0x8bd96a(0x148)]),{id:_0x49313b,profile:_0x338449,companyId:_0x21d996}=_0x58433e,_0x47aec0=await User_1[_0x8bd96a(0x15e)][_0x8bd96a(0x166)](_0x49313b);if(_0x47aec0[_0x8bd96a(0x15f)]===!![]){const _0x57d837=await(0x0,ListCompaniesPlanService_1['default'])();return _0x3d54f8[_0x8bd96a(0x16d)]({'companies':_0x57d837});}else return _0x3d54f8['status'](0x190)['json']({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});};exports[a13_0x4eaf47(0x16c)]=indexPlan;