'use strict';function a23_0x427e(){const _0x4e807b=['default','../models/Company','update','prototype','toString','117MOQjQR','secret','name','object','json','719836mjqAlL','../models/User','Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!','status','create','24805286Lftaef','findByPk','__importDefault','4554354GVGYTR','params','3hCtvlz','6KOnipD','validate','string','required','query','store','list','super','show','../services/PlanService/CreatePlanService','split','300376MPWULs','../errors/AppError','__createBinding','__importStar','message','9416600BcBFJC','defineProperty','../config/auth','../services/PlanService/DeletePlanService','index','7BwGRZT','verify','planId','authorization','1482930dHghqw','609344bGKGkO','headers','yup','../models/Plan','shape','getOwnPropertyDescriptor','remove','__esModule'];a23_0x427e=function(){return _0x4e807b;};return a23_0x427e();}const a23_0x4b50a7=a23_0x319a;(function(_0x492612,_0xe087ce){const _0x2a947f=a23_0x319a,_0x5eb538=_0x492612();while(!![]){try{const _0x14a07c=-parseInt(_0x2a947f(0x214))/0x1*(parseInt(_0x2a947f(0x21f))/0x2)+-parseInt(_0x2a947f(0x213))/0x3*(parseInt(_0x2a947f(0x209))/0x4)+parseInt(_0x2a947f(0x1f6))/0x5+parseInt(_0x2a947f(0x211))/0x6*(-parseInt(_0x2a947f(0x1f2))/0x7)+-parseInt(_0x2a947f(0x1f7))/0x8*(parseInt(_0x2a947f(0x204))/0x9)+parseInt(_0x2a947f(0x224))/0xa+parseInt(_0x2a947f(0x20e))/0xb;if(_0x14a07c===_0xe087ce)break;else _0x5eb538['push'](_0x5eb538['shift']());}catch(_0x597719){_0x5eb538['push'](_0x5eb538['shift']());}}}(a23_0x427e,0xa1d9e));var __createBinding=this&&this[a23_0x4b50a7(0x221)]||(Object[a23_0x4b50a7(0x20d)]?function(_0x5df253,_0x573ccd,_0x113ee,_0xd7e6be){const _0x336bd5=a23_0x4b50a7;if(_0xd7e6be===undefined)_0xd7e6be=_0x113ee;var _0x4b41cd=Object[_0x336bd5(0x1fc)](_0x573ccd,_0x113ee);(!_0x4b41cd||('get'in _0x4b41cd?!_0x573ccd[_0x336bd5(0x1fe)]:_0x4b41cd['writable']||_0x4b41cd['configurable']))&&(_0x4b41cd={'enumerable':!![],'get':function(){return _0x573ccd[_0x113ee];}}),Object[_0x336bd5(0x225)](_0x5df253,_0xd7e6be,_0x4b41cd);}:function(_0x209b31,_0x64f4,_0x571147,_0x10f556){if(_0x10f556===undefined)_0x10f556=_0x571147;_0x209b31[_0x10f556]=_0x64f4[_0x571147];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object['create']?function(_0x2a594e,_0x56ba47){const _0x1b9482=a23_0x4b50a7;Object['defineProperty'](_0x2a594e,_0x1b9482(0x1ff),{'enumerable':!![],'value':_0x56ba47});}:function(_0xd4d12d,_0x6c9245){const _0x5d0263=a23_0x4b50a7;_0xd4d12d[_0x5d0263(0x1ff)]=_0x6c9245;}),__importStar=this&&this[a23_0x4b50a7(0x222)]||function(_0x3e7e24){const _0x544eec=a23_0x4b50a7;if(_0x3e7e24&&_0x3e7e24[_0x544eec(0x1fe)])return _0x3e7e24;var _0x4e5901={};if(_0x3e7e24!=null){for(var _0x439865 in _0x3e7e24)if(_0x439865!==_0x544eec(0x1ff)&&Object[_0x544eec(0x202)]['hasOwnProperty']['call'](_0x3e7e24,_0x439865))__createBinding(_0x4e5901,_0x3e7e24,_0x439865);}return __setModuleDefault(_0x4e5901,_0x3e7e24),_0x4e5901;},__importDefault=this&&this[a23_0x4b50a7(0x210)]||function(_0x311c49){const _0x1c3a65=a23_0x4b50a7;return _0x311c49&&_0x311c49[_0x1c3a65(0x1fe)]?_0x311c49:{'default':_0x311c49};};Object[a23_0x4b50a7(0x225)](exports,a23_0x4b50a7(0x1fe),{'value':!![]}),exports['remove']=exports[a23_0x4b50a7(0x201)]=exports[a23_0x4b50a7(0x21c)]=exports[a23_0x4b50a7(0x219)]=exports[a23_0x4b50a7(0x21a)]=exports[a23_0x4b50a7(0x228)]=void 0x0;const jsonwebtoken_1=require('jsonwebtoken'),auth_1=__importDefault(require(a23_0x4b50a7(0x226))),Yup=__importStar(require(a23_0x4b50a7(0x1f9))),AppError_1=__importDefault(require(a23_0x4b50a7(0x220))),Plan_1=__importDefault(require(a23_0x4b50a7(0x1fa))),ListPlansService_1=__importDefault(require('../services/PlanService/ListPlansService')),CreatePlanService_1=__importDefault(require(a23_0x4b50a7(0x21d))),UpdatePlanService_1=__importDefault(require('../services/PlanService/UpdatePlanService')),ShowPlanService_1=__importDefault(require('../services/PlanService/ShowPlanService')),FindAllPlanService_1=__importDefault(require('../services/PlanService/FindAllPlanService')),DeletePlanService_1=__importDefault(require(a23_0x4b50a7(0x227))),User_1=__importDefault(require(a23_0x4b50a7(0x20a))),Company_1=__importDefault(require(a23_0x4b50a7(0x200))),index=async(_0x1a9fad,_0xc5bc09)=>{const _0x477051=a23_0x4b50a7,{searchParam:_0xf1b958,pageNumber:_0x5aaf18}=_0x1a9fad[_0x477051(0x218)],_0x1789d2=_0x1a9fad[_0x477051(0x1f8)][_0x477051(0x1f5)],[,_0x24bb05]=_0x1789d2['split']('\x20'),_0xbb9feb=(0x0,jsonwebtoken_1[_0x477051(0x1f3)])(_0x24bb05,auth_1[_0x477051(0x1ff)][_0x477051(0x205)]),{id:_0x391aaa,profile:_0x3c93bf,companyId:_0x59653c}=_0xbb9feb,_0x2176b8=await User_1[_0x477051(0x1ff)]['findByPk'](_0x391aaa),_0x4a6a1f=await Company_1[_0x477051(0x1ff)][_0x477051(0x20f)](_0x59653c),_0x23d4ee=_0x4a6a1f['planId'],_0x57d689=await Plan_1[_0x477051(0x1ff)][_0x477051(0x20f)](_0x23d4ee),_0x2f5a13=_0x57d689[_0x477051(0x206)];if(_0x2176b8['super']===!![]){const {plans:_0x28071b,count:_0x4ec6a1,hasMore:_0x13396e}=await(0x0,ListPlansService_1['default'])({'searchParam':_0xf1b958,'pageNumber':_0x5aaf18});return _0xc5bc09[_0x477051(0x208)]({'plans':_0x28071b,'count':_0x4ec6a1,'hasMore':_0x13396e});}else{const {plans:_0x2cb5eb,count:_0x192388,hasMore:_0x5488e9}=await(0x0,ListPlansService_1[_0x477051(0x1ff)])({'searchParam':_0x2f5a13,'pageNumber':_0x5aaf18});return _0xc5bc09[_0x477051(0x208)]({'plans':_0x2cb5eb,'count':_0x192388,'hasMore':_0x5488e9});}};exports['index']=index;const list=async(_0x476221,_0x1355d0)=>{const _0x1a24e9=a23_0x4b50a7,_0x2f6a64=await(0x0,FindAllPlanService_1['default'])();return _0x1355d0[_0x1a24e9(0x20c)](0xc8)[_0x1a24e9(0x208)](_0x2f6a64);};exports['list']=list;function a23_0x319a(_0x3a98e5,_0x451056){const _0x427e85=a23_0x427e();return a23_0x319a=function(_0x319ab1,_0x5d13d0){_0x319ab1=_0x319ab1-0x1f2;let _0x39d6ea=_0x427e85[_0x319ab1];return _0x39d6ea;},a23_0x319a(_0x3a98e5,_0x451056);}const store=async(_0x304ded,_0x2e1ad4)=>{const _0x3fbcee=a23_0x4b50a7,_0x1b554a=_0x304ded['body'],_0x313856=Yup[_0x3fbcee(0x207)]()[_0x3fbcee(0x1fb)]({'name':Yup[_0x3fbcee(0x216)]()[_0x3fbcee(0x217)]()});try{await _0x313856[_0x3fbcee(0x215)](_0x1b554a);}catch(_0x247fbc){throw new AppError_1[(_0x3fbcee(0x1ff))](_0x247fbc[_0x3fbcee(0x223)]);}const _0x185c72=await(0x0,CreatePlanService_1['default'])(_0x1b554a);return _0x2e1ad4[_0x3fbcee(0x20c)](0xc8)[_0x3fbcee(0x208)](_0x185c72);};exports[a23_0x4b50a7(0x219)]=store;const show=async(_0x331ad6,_0x58ac0b)=>{const _0x26b820=a23_0x4b50a7,{id:_0x3bb70b}=_0x331ad6[_0x26b820(0x212)],_0x235455=_0x331ad6['headers'][_0x26b820(0x1f5)],[,_0x2627e0]=_0x235455[_0x26b820(0x21e)]('\x20'),_0x3344d7=(0x0,jsonwebtoken_1[_0x26b820(0x1f3)])(_0x2627e0,auth_1[_0x26b820(0x1ff)][_0x26b820(0x205)]),{id:_0x48f6ce,profile:_0x245216,companyId:_0x267fb5}=_0x3344d7,_0x31cfdb=await User_1['default']['findByPk'](_0x48f6ce),_0x3bf82b=await Company_1[_0x26b820(0x1ff)][_0x26b820(0x20f)](_0x267fb5),_0x1808b1=_0x3bf82b[_0x26b820(0x1f4)];if(_0x31cfdb[_0x26b820(0x21b)]===!![]){const _0x167cf7=await(0x0,ShowPlanService_1[_0x26b820(0x1ff)])(_0x3bb70b);return _0x58ac0b[_0x26b820(0x20c)](0xc8)[_0x26b820(0x208)](_0x167cf7);}else{if(_0x3bb70b!==_0x1808b1['toString']())return _0x58ac0b[_0x26b820(0x20c)](0x190)[_0x26b820(0x208)]({'error':_0x26b820(0x20b)});else{if(_0x3bb70b===_0x1808b1[_0x26b820(0x203)]()){const _0x3f4c50=await(0x0,ShowPlanService_1['default'])(_0x3bb70b);return _0x58ac0b[_0x26b820(0x20c)](0xc8)[_0x26b820(0x208)](_0x3f4c50);}}}};exports['show']=show;const update=async(_0x49e55f,_0x468735)=>{const _0x472d16=a23_0x4b50a7,_0x4041f0=_0x49e55f['body'],_0x55c0f7=Yup[_0x472d16(0x207)]()[_0x472d16(0x1fb)]({'name':Yup[_0x472d16(0x216)]()});try{await _0x55c0f7['validate'](_0x4041f0);}catch(_0x486de3){throw new AppError_1['default'](_0x486de3['message']);}const {id:_0xab84c3,name:_0x421a2a,users:_0x17f811,connections:_0x223a35,queues:_0x18dd57,amount:_0x5d32bc,useWhatsapp:_0x15b4c3,useFacebook:_0x111e4e,useInstagram:_0x4740c3,useCampaigns:_0x110c9f,useSchedules:_0x39b74b,useInternalChat:_0xab12a3,useExternalApi:_0x5cd3ba}=_0x4041f0,_0x357ece=_0x49e55f[_0x472d16(0x1f8)]['authorization'],[,_0x497fe1]=_0x357ece[_0x472d16(0x21e)]('\x20'),_0x111794=(0x0,jsonwebtoken_1[_0x472d16(0x1f3)])(_0x497fe1,auth_1[_0x472d16(0x1ff)]['secret']),{id:_0x54202b,profile:_0x1fdcbf,companyId:_0x3b59c2}=_0x111794,_0x441082=await User_1[_0x472d16(0x1ff)][_0x472d16(0x20f)](_0x54202b),_0x448bdb=await Company_1[_0x472d16(0x1ff)][_0x472d16(0x20f)](_0x3b59c2),_0x1a96db=_0x448bdb[_0x472d16(0x1f4)];if(_0x441082['super']===!![]){const _0x247cb7=await(0x0,UpdatePlanService_1['default'])({'id':_0xab84c3,'name':_0x421a2a,'users':_0x17f811,'connections':_0x223a35,'queues':_0x18dd57,'amount':_0x5d32bc,'useWhatsapp':_0x15b4c3,'useFacebook':_0x111e4e,'useInstagram':_0x4740c3,'useCampaigns':_0x110c9f,'useSchedules':_0x39b74b,'useInternalChat':_0xab12a3,'useExternalApi':_0x5cd3ba});return _0x468735[_0x472d16(0x20c)](0xc8)[_0x472d16(0x208)](_0x247cb7);}else{if(_0x1a96db['toString']()!==_0xab84c3)return _0x468735[_0x472d16(0x20c)](0x190)[_0x472d16(0x208)]({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});}};exports[a23_0x4b50a7(0x201)]=update;const remove=async(_0x13b308,_0x561e37)=>{const _0xb6fc33=a23_0x4b50a7,{id:_0x587934}=_0x13b308[_0xb6fc33(0x212)],_0x3c1762=_0x13b308[_0xb6fc33(0x1f8)][_0xb6fc33(0x1f5)],[,_0xc12945]=_0x3c1762[_0xb6fc33(0x21e)]('\x20'),_0x27a474=(0x0,jsonwebtoken_1['verify'])(_0xc12945,auth_1[_0xb6fc33(0x1ff)][_0xb6fc33(0x205)]),{id:_0x5cb699,profile:_0x3c0226,companyId:_0x2ac751}=_0x27a474,_0xe66004=await User_1['default']['findByPk'](_0x5cb699);if(_0xe66004[_0xb6fc33(0x21b)]===!![]){const _0x251982=await(0x0,DeletePlanService_1[_0xb6fc33(0x1ff)])(_0x587934);return _0x561e37['status'](0xc8)[_0xb6fc33(0x208)](_0x251982);}else{if(_0x2ac751[_0xb6fc33(0x203)]()!==_0x587934)return _0x561e37['status'](0x190)['json']({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});}};exports[a23_0x4b50a7(0x1fd)]=remove;