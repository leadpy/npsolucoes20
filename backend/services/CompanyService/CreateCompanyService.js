'use strict';function a384_0xbdb5(){const _0x104b02=['sendMsgTransfTicket','admin','200niHHYv','../../errors/AppError','email','__importDefault','__createBinding','get','validate','default','907242ZRrGEj','sendGreetingAccepted','create','__esModule','call','getOwnPropertyDescriptor','yup','configurable','writable','defineProperty','userRating','11052640KbXEMr','commit','required','6avkOtx','../../models/Setting','text','lgpdConsent','9954792kLobex','46466WjOeOW','377610mXYRCu','lgpdDeleteMessage','__importStar','min','disabled','prototype','../../models/Company','128bNPcSM','transaction','ERR_COMPANY_INVALID_NAME','string','__setModuleDefault','message','requiredTag','rollback','chatBotType','Não\x20foi\x20possível\x20criar\x20a\x20empresa!','scheduleType','hasOwnProperty','228991wrZKoP','42865qvIWxX'];a384_0xbdb5=function(){return _0x104b02;};return a384_0xbdb5();}const a384_0x181f4f=a384_0x4e09;function a384_0x4e09(_0x247d3b,_0xacc1f8){const _0xbdb558=a384_0xbdb5();return a384_0x4e09=function(_0x4e0981,_0x42911d){_0x4e0981=_0x4e0981-0xdc;let _0x15adad=_0xbdb558[_0x4e0981];return _0x15adad;},a384_0x4e09(_0x247d3b,_0xacc1f8);}(function(_0x1c7bb3,_0x1ff8b7){const _0x2c3802=a384_0x4e09,_0x2c7022=_0x1c7bb3();while(!![]){try{const _0x82805c=-parseInt(_0x2c3802(0xdf))/0x1+parseInt(_0x2c3802(0xde))/0x2*(parseInt(_0x2c3802(0x10c))/0x3)+-parseInt(_0x2c3802(0xe6))/0x4*(-parseInt(_0x2c3802(0xf3))/0x5)+-parseInt(_0x2c3802(0xfe))/0x6+-parseInt(_0x2c3802(0xf2))/0x7*(-parseInt(_0x2c3802(0xf6))/0x8)+parseInt(_0x2c3802(0xdd))/0x9+-parseInt(_0x2c3802(0x109))/0xa;if(_0x82805c===_0x1ff8b7)break;else _0x2c7022['push'](_0x2c7022['shift']());}catch(_0x12aafc){_0x2c7022['push'](_0x2c7022['shift']());}}}(a384_0xbdb5,0x9514a));var __createBinding=this&&this[a384_0x181f4f(0xfa)]||(Object[a384_0x181f4f(0x100)]?function(_0x40d280,_0x2384cd,_0x11a356,_0x3504ef){const _0x38d81c=a384_0x181f4f;if(_0x3504ef===undefined)_0x3504ef=_0x11a356;var _0x5ed907=Object[_0x38d81c(0x103)](_0x2384cd,_0x11a356);(!_0x5ed907||(_0x38d81c(0xfb)in _0x5ed907?!_0x2384cd[_0x38d81c(0x101)]:_0x5ed907[_0x38d81c(0x106)]||_0x5ed907[_0x38d81c(0x105)]))&&(_0x5ed907={'enumerable':!![],'get':function(){return _0x2384cd[_0x11a356];}}),Object[_0x38d81c(0x107)](_0x40d280,_0x3504ef,_0x5ed907);}:function(_0x471098,_0x49a398,_0x381d24,_0x2912c4){if(_0x2912c4===undefined)_0x2912c4=_0x381d24;_0x471098[_0x2912c4]=_0x49a398[_0x381d24];}),__setModuleDefault=this&&this[a384_0x181f4f(0xea)]||(Object[a384_0x181f4f(0x100)]?function(_0xca08f,_0x377c7e){const _0x377830=a384_0x181f4f;Object['defineProperty'](_0xca08f,_0x377830(0xfd),{'enumerable':!![],'value':_0x377c7e});}:function(_0x5aa082,_0x3ac96c){const _0x325de7=a384_0x181f4f;_0x5aa082[_0x325de7(0xfd)]=_0x3ac96c;}),__importStar=this&&this[a384_0x181f4f(0xe1)]||function(_0xbb6b0b){const _0x101baf=a384_0x181f4f;if(_0xbb6b0b&&_0xbb6b0b['__esModule'])return _0xbb6b0b;var _0x77d795={};if(_0xbb6b0b!=null){for(var _0x4778cc in _0xbb6b0b)if(_0x4778cc!=='default'&&Object[_0x101baf(0xe4)][_0x101baf(0xf1)][_0x101baf(0x102)](_0xbb6b0b,_0x4778cc))__createBinding(_0x77d795,_0xbb6b0b,_0x4778cc);}return __setModuleDefault(_0x77d795,_0xbb6b0b),_0x77d795;},__importDefault=this&&this[a384_0x181f4f(0xf9)]||function(_0xdba7ae){const _0x73d86f=a384_0x181f4f;return _0xdba7ae&&_0xdba7ae[_0x73d86f(0x101)]?_0xdba7ae:{'default':_0xdba7ae};};Object[a384_0x181f4f(0x107)](exports,a384_0x181f4f(0x101),{'value':!![]});const Yup=__importStar(require(a384_0x181f4f(0x104))),AppError_1=__importDefault(require(a384_0x181f4f(0xf7))),Company_1=__importDefault(require(a384_0x181f4f(0xe5))),User_1=__importDefault(require('../../models/User')),Setting_1=__importDefault(require(a384_0x181f4f(0x10d))),database_1=__importDefault(require('../../database')),CreateCompanyService=async _0x25d2e2=>{const _0x51c122=a384_0x181f4f,{name:_0x47e347,phone:_0x383477,password:_0x271174,email:_0x14f4ee,status:_0x59e0b0,planId:_0x17bf2e,dueDate:_0x50fa23,recurrence:_0x5b5625,document:_0x1422f0,paymentMethod:_0x3d40f9,companyUserName:_0x20065b}=_0x25d2e2,_0x10c4a5=Yup['object']()['shape']({'name':Yup[_0x51c122(0xe9)]()[_0x51c122(0xe2)](0x2,_0x51c122(0xe8))[_0x51c122(0x10b)](_0x51c122(0xe8))});try{await _0x10c4a5[_0x51c122(0xfc)]({'name':_0x47e347});}catch(_0xe065d){throw new AppError_1['default'](_0xe065d[_0x51c122(0xeb)]);}const _0x4d8f54=await database_1[_0x51c122(0xfd)][_0x51c122(0xe7)]();try{const _0x1ecc7b=await Company_1[_0x51c122(0xfd)]['create']({'name':_0x47e347,'phone':_0x383477,'email':_0x14f4ee,'status':_0x59e0b0,'planId':_0x17bf2e,'dueDate':_0x50fa23,'recurrence':_0x5b5625,'document':_0x1422f0,'paymentMethod':_0x3d40f9},{'transaction':_0x4d8f54});return await User_1['default'][_0x51c122(0x100)]({'name':_0x20065b?_0x20065b:_0x47e347,'email':_0x1ecc7b[_0x51c122(0xf8)],'password':_0x271174?_0x271174:'mudar123','profile':_0x51c122(0xf5),'companyId':_0x1ecc7b['id']},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':'sendSignMessage','value':'enabled'},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':'acceptCallWhatsapp','value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':_0x51c122(0xf0),'value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':_0x51c122(0x108),'value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':_0x51c122(0xee),'value':_0x51c122(0x10e)},{'transaction':_0x4d8f54}),await Setting_1['default'][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':'userRandom','value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)]['create']({'companyId':_0x1ecc7b['id'],'key':_0x51c122(0xf4),'value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':_0x51c122(0xff),'value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':'enableLGPD','value':'disabled'},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':_0x51c122(0xdc),'value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)]['create']({'companyId':_0x1ecc7b['id'],'key':_0x51c122(0xe0),'value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':'lgpdHideNumber','value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await Setting_1[_0x51c122(0xfd)][_0x51c122(0x100)]({'companyId':_0x1ecc7b['id'],'key':_0x51c122(0xec),'value':_0x51c122(0xe3)},{'transaction':_0x4d8f54}),await _0x4d8f54[_0x51c122(0x10a)](),_0x1ecc7b;}catch(_0x88121a){await _0x4d8f54[_0x51c122(0xed)]();throw new AppError_1[(_0x51c122(0xfd))](_0x51c122(0xef));}};exports[a384_0x181f4f(0xfd)]=CreateCompanyService;