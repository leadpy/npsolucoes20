'use strict';const a34_0x358168=a34_0x56fc;(function(_0x20c565,_0x4eefd3){const _0x16f74f=a34_0x56fc,_0x1b8028=_0x20c565();while(!![]){try{const _0x245fb7=parseInt(_0x16f74f(0x166))/0x1*(-parseInt(_0x16f74f(0x18e))/0x2)+-parseInt(_0x16f74f(0x17e))/0x3+parseInt(_0x16f74f(0x164))/0x4*(parseInt(_0x16f74f(0x18a))/0x5)+-parseInt(_0x16f74f(0x186))/0x6+parseInt(_0x16f74f(0x167))/0x7+-parseInt(_0x16f74f(0x173))/0x8+parseInt(_0x16f74f(0x187))/0x9*(parseInt(_0x16f74f(0x18c))/0xa);if(_0x245fb7===_0x4eefd3)break;else _0x1b8028['push'](_0x1b8028['shift']());}catch(_0x55779c){_0x1b8028['push'](_0x1b8028['shift']());}}}(a34_0x295d,0xd9ec2));var __createBinding=this&&this[a34_0x358168(0x180)]||(Object[a34_0x358168(0x17d)]?function(_0x293af8,_0x5612ff,_0x512dbd,_0x2c11e6){const _0x42cdc4=a34_0x358168;if(_0x2c11e6===undefined)_0x2c11e6=_0x512dbd;var _0x211286=Object[_0x42cdc4(0x17c)](_0x5612ff,_0x512dbd);(!_0x211286||(_0x42cdc4(0x16e)in _0x211286?!_0x5612ff[_0x42cdc4(0x163)]:_0x211286[_0x42cdc4(0x174)]||_0x211286[_0x42cdc4(0x193)]))&&(_0x211286={'enumerable':!![],'get':function(){return _0x5612ff[_0x512dbd];}}),Object['defineProperty'](_0x293af8,_0x2c11e6,_0x211286);}:function(_0x1574e3,_0x2e2597,_0x5c2795,_0x44e5b1){if(_0x44e5b1===undefined)_0x44e5b1=_0x5c2795;_0x1574e3[_0x44e5b1]=_0x2e2597[_0x5c2795];}),__setModuleDefault=this&&this[a34_0x358168(0x177)]||(Object[a34_0x358168(0x17d)]?function(_0x2cd9c2,_0x833210){const _0x30a418=a34_0x358168;Object[_0x30a418(0x169)](_0x2cd9c2,_0x30a418(0x179),{'enumerable':!![],'value':_0x833210});}:function(_0x1c3f35,_0x2d2026){_0x1c3f35['default']=_0x2d2026;}),__importStar=this&&this['__importStar']||function(_0x30702d){const _0x29419b=a34_0x358168;if(_0x30702d&&_0x30702d[_0x29419b(0x163)])return _0x30702d;var _0xff8347={};if(_0x30702d!=null){for(var _0x599927 in _0x30702d)if(_0x599927!==_0x29419b(0x179)&&Object[_0x29419b(0x182)][_0x29419b(0x16b)][_0x29419b(0x17f)](_0x30702d,_0x599927))__createBinding(_0xff8347,_0x30702d,_0x599927);}return __setModuleDefault(_0xff8347,_0x30702d),_0xff8347;},__importDefault=this&&this['__importDefault']||function(_0x2c4111){const _0x3122c3=a34_0x358168;return _0x2c4111&&_0x2c4111[_0x3122c3(0x163)]?_0x2c4111:{'default':_0x2c4111};};Object[a34_0x358168(0x169)](exports,a34_0x358168(0x163),{'value':!![]}),exports[a34_0x358168(0x172)]=exports[a34_0x358168(0x192)]=exports[a34_0x358168(0x17a)]=exports[a34_0x358168(0x183)]=exports[a34_0x358168(0x184)]=exports[a34_0x358168(0x175)]=exports['index']=void 0x0;const Yup=__importStar(require(a34_0x358168(0x170))),AppError_1=__importDefault(require('../errors/AppError')),ListTicketNotesService_1=__importDefault(require(a34_0x358168(0x18f))),CreateTicketNoteService_1=__importDefault(require(a34_0x358168(0x178))),UpdateTicketNoteService_1=__importDefault(require(a34_0x358168(0x16a))),ShowTicketNoteService_1=__importDefault(require(a34_0x358168(0x189))),FindAllTicketNotesService_1=__importDefault(require(a34_0x358168(0x185))),DeleteTicketNoteService_1=__importDefault(require(a34_0x358168(0x195))),FindNotesByContactIdAndTicketId_1=__importDefault(require(a34_0x358168(0x191))),index=async(_0x392dc8,_0x27224e)=>{const _0x2bcac6=a34_0x358168,{searchParam:_0x59fc08,pageNumber:_0x4084cb}=_0x392dc8['query'],{ticketNotes:_0x28be2c,count:_0x4a6204,hasMore:_0x5d1ccc}=await(0x0,ListTicketNotesService_1[_0x2bcac6(0x179)])({'searchParam':_0x59fc08,'pageNumber':_0x4084cb});return _0x27224e['json']({'ticketNotes':_0x28be2c,'count':_0x4a6204,'hasMore':_0x5d1ccc});};exports[a34_0x358168(0x176)]=index;const list=async(_0x5ec8d4,_0x2168cf)=>{const _0x597db7=a34_0x358168,_0x1747e7=await(0x0,FindAllTicketNotesService_1[_0x597db7(0x179)])();return _0x2168cf[_0x597db7(0x16d)](0xc8)[_0x597db7(0x168)](_0x1747e7);};exports[a34_0x358168(0x175)]=list;const store=async(_0x540de6,_0x517ff7)=>{const _0x49f6ae=a34_0x358168,_0xb73535=_0x540de6['body'],{id:_0x27d1cf}=_0x540de6['user'],_0x460f9a=Yup[_0x49f6ae(0x16c)]()[_0x49f6ae(0x171)]({'note':Yup[_0x49f6ae(0x16f)]()[_0x49f6ae(0x190)]()});try{await _0x460f9a['validate'](_0xb73535);}catch(_0x58ac85){throw new AppError_1[(_0x49f6ae(0x179))](_0x58ac85[_0x49f6ae(0x188)]);}const _0x81ec2b=await(0x0,CreateTicketNoteService_1['default'])({..._0xb73535,'userId':_0x27d1cf});return _0x517ff7[_0x49f6ae(0x16d)](0xc8)['json'](_0x81ec2b);};exports['store']=store;function a34_0x56fc(_0x52adb7,_0x3589a5){const _0x295deb=a34_0x295d();return a34_0x56fc=function(_0x56fc75,_0xea33a){_0x56fc75=_0x56fc75-0x163;let _0x5df7ca=_0x295deb[_0x56fc75];return _0x5df7ca;},a34_0x56fc(_0x52adb7,_0x3589a5);}const show=async(_0x58f628,_0x18d0bb)=>{const _0x50c80b=a34_0x358168,{id:_0x2c6172}=_0x58f628[_0x50c80b(0x17b)],_0x420892=await(0x0,ShowTicketNoteService_1[_0x50c80b(0x179)])(_0x2c6172);return _0x18d0bb['status'](0xc8)[_0x50c80b(0x168)](_0x420892);};exports['show']=show;const update=async(_0x55f959,_0x357173)=>{const _0x45b535=a34_0x358168,_0x23db9d=_0x55f959['body'],_0x2c386f=Yup[_0x45b535(0x16c)]()[_0x45b535(0x171)]({'note':Yup[_0x45b535(0x16f)]()});try{await _0x2c386f[_0x45b535(0x194)](_0x23db9d);}catch(_0x504683){throw new AppError_1[(_0x45b535(0x179))](_0x504683[_0x45b535(0x188)]);}const _0x3d6b3a=await(0x0,UpdateTicketNoteService_1[_0x45b535(0x179)])(_0x23db9d);return _0x357173[_0x45b535(0x16d)](0xc8)[_0x45b535(0x168)](_0x3d6b3a);};exports[a34_0x358168(0x17a)]=update;const remove=async(_0x1fdf9e,_0x12b6b0)=>{const _0x4278a5=a34_0x358168,{id:_0x32f05a}=_0x1fdf9e[_0x4278a5(0x17b)];if(_0x1fdf9e[_0x4278a5(0x181)]['profile']!==_0x4278a5(0x18b))throw new AppError_1['default'](_0x4278a5(0x18d),0x193);return await(0x0,DeleteTicketNoteService_1[_0x4278a5(0x179)])(_0x32f05a),_0x12b6b0[_0x4278a5(0x16d)](0xc8)[_0x4278a5(0x168)]({'message':'Observação\x20removida'});};exports[a34_0x358168(0x192)]=remove;const findFilteredList=async(_0x5182e1,_0x3d0fc7)=>{const _0x382247=a34_0x358168;try{const {contactId:_0x441a44,ticketId:_0x5a2319}=_0x5182e1[_0x382247(0x165)],_0x3918cf=await(0x0,FindNotesByContactIdAndTicketId_1['default'])({'contactId':_0x441a44,'ticketId':_0x5a2319});return _0x3d0fc7[_0x382247(0x16d)](0xc8)['json'](_0x3918cf);}catch(_0x15e41d){return _0x3d0fc7[_0x382247(0x16d)](0x1f4)[_0x382247(0x168)]({'message':_0x15e41d});}};exports['findFilteredList']=findFilteredList;function a34_0x295d(){const _0x3de9dd=['default','update','params','getOwnPropertyDescriptor','create','1117398aacBWF','call','__createBinding','user','prototype','show','store','../services/TicketNoteService/FindAllTicketNotesService','5032308lbNBUQ','99rFAihn','message','../services/TicketNoteService/ShowTicketNoteService','5JxkuDc','admin','736110NWNkgR','ERR_NO_PERMISSION','978GHxcqh','../services/TicketNoteService/ListTicketNotesService','required','../services/TicketNoteService/FindNotesByContactIdAndTicketId','remove','configurable','validate','../services/TicketNoteService/DeleteTicketNoteService','__esModule','6705380JgvYJM','query','985UMcvdQ','10641197sTGXEg','json','defineProperty','../services/TicketNoteService/UpdateTicketNoteService','hasOwnProperty','object','status','get','string','yup','shape','findFilteredList','11366224mSBWNa','writable','list','index','__setModuleDefault','../services/TicketNoteService/CreateTicketNoteService'];a34_0x295d=function(){return _0x3de9dd;};return a34_0x295d();}