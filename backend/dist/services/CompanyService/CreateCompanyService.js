'use strict';const a431_0x5cb4c9=a431_0x10e9;(function(_0x2d04dc,_0x151c14){const _0x398766=a431_0x10e9,_0x37f014=_0x2d04dc();while(!![]){try{const _0x38f11b=-parseInt(_0x398766(0xb1))/0x1*(parseInt(_0x398766(0x94))/0x2)+-parseInt(_0x398766(0xad))/0x3*(parseInt(_0x398766(0x9f))/0x4)+-parseInt(_0x398766(0xb6))/0x5+-parseInt(_0x398766(0x9d))/0x6+-parseInt(_0x398766(0xa0))/0x7*(parseInt(_0x398766(0xa7))/0x8)+-parseInt(_0x398766(0xa1))/0x9+parseInt(_0x398766(0xa3))/0xa*(parseInt(_0x398766(0xa5))/0xb);if(_0x38f11b===_0x151c14)break;else _0x37f014['push'](_0x37f014['shift']());}catch(_0x195044){_0x37f014['push'](_0x37f014['shift']());}}}(a431_0x5dd2,0x6dd0b));function a431_0x10e9(_0x364231,_0x5bd609){const _0x5dd234=a431_0x5dd2();return a431_0x10e9=function(_0x10e9b2,_0x147f07){_0x10e9b2=_0x10e9b2-0x90;let _0x516843=_0x5dd234[_0x10e9b2];return _0x516843;},a431_0x10e9(_0x364231,_0x5bd609);}var __createBinding=this&&this[a431_0x5cb4c9(0x92)]||(Object[a431_0x5cb4c9(0xa4)]?function(_0x53f53b,_0x171f5f,_0x28b29b,_0xb9266e){const _0x3e7ce0=a431_0x5cb4c9;if(_0xb9266e===undefined)_0xb9266e=_0x28b29b;var _0x1da138=Object['getOwnPropertyDescriptor'](_0x171f5f,_0x28b29b);(!_0x1da138||(_0x3e7ce0(0xae)in _0x1da138?!_0x171f5f[_0x3e7ce0(0xb2)]:_0x1da138[_0x3e7ce0(0xb8)]||_0x1da138[_0x3e7ce0(0xb7)]))&&(_0x1da138={'enumerable':!![],'get':function(){return _0x171f5f[_0x28b29b];}}),Object[_0x3e7ce0(0xa8)](_0x53f53b,_0xb9266e,_0x1da138);}:function(_0xffe993,_0x40d8c3,_0x3cbfe3,_0x163a98){if(_0x163a98===undefined)_0x163a98=_0x3cbfe3;_0xffe993[_0x163a98]=_0x40d8c3[_0x3cbfe3];}),__setModuleDefault=this&&this[a431_0x5cb4c9(0x96)]||(Object[a431_0x5cb4c9(0xa4)]?function(_0x52f206,_0x4187f8){const _0x4430cf=a431_0x5cb4c9;Object['defineProperty'](_0x52f206,_0x4430cf(0xa6),{'enumerable':!![],'value':_0x4187f8});}:function(_0x3ff0c5,_0x54d694){const _0x3de761=a431_0x5cb4c9;_0x3ff0c5[_0x3de761(0xa6)]=_0x54d694;}),__importStar=this&&this['__importStar']||function(_0x248bbe){const _0x4da36c=a431_0x5cb4c9;if(_0x248bbe&&_0x248bbe['__esModule'])return _0x248bbe;var _0x235eb3={};if(_0x248bbe!=null){for(var _0x1b6735 in _0x248bbe)if(_0x1b6735!=='default'&&Object[_0x4da36c(0xb0)][_0x4da36c(0x98)][_0x4da36c(0xaa)](_0x248bbe,_0x1b6735))__createBinding(_0x235eb3,_0x248bbe,_0x1b6735);}return __setModuleDefault(_0x235eb3,_0x248bbe),_0x235eb3;},__importDefault=this&&this['__importDefault']||function(_0x8c6e75){return _0x8c6e75&&_0x8c6e75['__esModule']?_0x8c6e75:{'default':_0x8c6e75};};function a431_0x5dd2(){const _0x507a56=['text','object','__createBinding','shape','1188306cThstv','email','__setModuleDefault','string','hasOwnProperty','enabled','admin','../../models/User','validate','2860320gvVqLV','../../database','12XanzeO','7tKWcJI','7236936dhvxlo','commit','44970360snxlhM','create','11iuKKPt','default','4314584iwJSDn','defineProperty','../../models/Company','call','ERR_COMPANY_INVALID_NAME','required','760623DmlPhY','get','transaction','prototype','1lnIjvd','__esModule','min','rollback','disabled','4361550fIrlBU','configurable','writable','../../errors/AppError','9999999999'];a431_0x5dd2=function(){return _0x507a56;};return a431_0x5dd2();}Object[a431_0x5cb4c9(0xa8)](exports,'__esModule',{'value':!![]});const Yup=__importStar(require('yup')),AppError_1=__importDefault(require(a431_0x5cb4c9(0xb9))),Company_1=__importDefault(require(a431_0x5cb4c9(0xa9))),User_1=__importDefault(require(a431_0x5cb4c9(0x9b))),database_1=__importDefault(require(a431_0x5cb4c9(0x9e))),CompaniesSettings_1=__importDefault(require('../../models/CompaniesSettings')),CreateCompanyService=async _0x2ce236=>{const _0x557813=a431_0x5cb4c9,{name:_0x801c2e,phone:_0x2c0435,password:_0x8c5aa2,email:_0x4ac588,status:_0x2f6e49,planId:_0x443579,dueDate:_0x13a92d,recurrence:_0x297fc1,document:_0x4b4c5c,paymentMethod:_0x4faaf2,companyUserName:_0x390f3b}=_0x2ce236,_0x5c6cd9=Yup[_0x557813(0x91)]()[_0x557813(0x93)]({'name':Yup[_0x557813(0x97)]()[_0x557813(0xb3)](0x2,_0x557813(0xab))[_0x557813(0xac)](_0x557813(0xab))});try{await _0x5c6cd9[_0x557813(0x9c)]({'name':_0x801c2e});}catch(_0x48254a){throw new AppError_1['default'](_0x48254a['message']);}const _0x593ed3=await database_1['default'][_0x557813(0xaf)]();try{const _0xee181=await Company_1['default']['create']({'name':_0x801c2e,'phone':_0x2c0435,'email':_0x4ac588,'status':_0x2f6e49,'planId':_0x443579,'dueDate':_0x13a92d,'recurrence':_0x297fc1,'document':_0x4b4c5c,'paymentMethod':_0x4faaf2},{'transaction':_0x593ed3}),_0x36cd25=await User_1[_0x557813(0xa6)][_0x557813(0xa4)]({'name':_0x390f3b?_0x390f3b:_0x801c2e,'email':_0xee181[_0x557813(0x95)],'password':_0x8c5aa2?_0x8c5aa2:'mudar123','profile':_0x557813(0x9a),'companyId':_0xee181['id']},{'transaction':_0x593ed3}),_0xc3870d=await CompaniesSettings_1[_0x557813(0xa6)][_0x557813(0xa4)]({'companyId':_0xee181['id'],'hoursCloseTicketsAuto':_0x557813(0xba),'chatBotType':_0x557813(0x90),'acceptCallWhatsapp':_0x557813(0x99),'userRandom':_0x557813(0x99),'sendGreetingMessageOneQueues':_0x557813(0x99),'sendSignMessage':_0x557813(0x99),'sendFarewellWaitingTicket':'disabled','userRating':_0x557813(0xb5),'sendGreetingAccepted':'enabled','CheckMsgIsGroup':_0x557813(0x99),'sendQueuePosition':_0x557813(0xb5),'scheduleType':_0x557813(0xb5),'acceptAudioMessageContact':_0x557813(0x99),'sendMsgTransfTicket':_0x557813(0xb5),'enableLGPD':_0x557813(0xb5),'requiredTag':_0x557813(0xb5),'lgpdDeleteMessage':_0x557813(0xb5),'lgpdHideNumber':_0x557813(0xb5),'lgpdConsent':'disabled','lgpdLink':'','lgpdMessage':'','createdAt':new Date(),'updatedAt':new Date(),'closeTicketOnTransfer':![],'DirectTicketsToWallets':![]},{'transaction':_0x593ed3});return await _0x593ed3[_0x557813(0xa2)](),_0xee181;}catch(_0x28fa28){await _0x593ed3[_0x557813(0xb4)]();throw new AppError_1[(_0x557813(0xa6))]('Não\x20foi\x20possível\x20criar\x20a\x20empresa!',_0x28fa28);}};exports['default']=CreateCompanyService;