'use strict';const a551_0x3cbca7=a551_0x3838;(function(_0x3e6f66,_0xc7a50c){const _0x144763=a551_0x3838,_0x2d3b5d=_0x3e6f66();while(!![]){try{const _0x3cb084=parseInt(_0x144763(0x96))/0x1*(-parseInt(_0x144763(0xa4))/0x2)+parseInt(_0x144763(0x92))/0x3*(parseInt(_0x144763(0xa1))/0x4)+-parseInt(_0x144763(0xb4))/0x5*(-parseInt(_0x144763(0x8d))/0x6)+-parseInt(_0x144763(0x87))/0x7+-parseInt(_0x144763(0xaa))/0x8*(-parseInt(_0x144763(0xa6))/0x9)+parseInt(_0x144763(0x99))/0xa+parseInt(_0x144763(0xab))/0xb*(parseInt(_0x144763(0x93))/0xc);if(_0x3cb084===_0xc7a50c)break;else _0x2d3b5d['push'](_0x2d3b5d['shift']());}catch(_0x7bd7fb){_0x2d3b5d['push'](_0x2d3b5d['shift']());}}}(a551_0x107c,0x7beb6));var __importDefault=this&&this[a551_0x3cbca7(0x98)]||function(_0x4ea3a2){const _0x9348a5=a551_0x3cbca7;return _0x4ea3a2&&_0x4ea3a2[_0x9348a5(0x84)]?_0x4ea3a2:{'default':_0x4ea3a2};};function a551_0x3838(_0x2badf8,_0x30291a){const _0x107c84=a551_0x107c();return a551_0x3838=function(_0x383802,_0x3e18fd){_0x383802=_0x383802-0x83;let _0x1e9a69=_0x107c84[_0x383802];return _0x1e9a69;},a551_0x3838(_0x2badf8,_0x30291a);}Object[a551_0x3cbca7(0x91)](exports,'__esModule',{'value':!![]}),exports[a551_0x3cbca7(0x89)]=void 0x0;const sequelize_1=require('sequelize'),Ticket_1=__importDefault(require(a551_0x3cbca7(0xb3))),Whatsapp_1=__importDefault(require(a551_0x3cbca7(0xaf))),socket_1=require('../../libs/socket'),Mustache_1=__importDefault(require(a551_0x3cbca7(0x9c))),SendWhatsAppMessage_1=__importDefault(require(a551_0x3cbca7(0x8c))),moment_1=__importDefault(require('moment')),ShowTicketService_1=__importDefault(require('../TicketServices/ShowTicketService')),wbotMessageListener_1=require(a551_0x3cbca7(0x94)),TicketTraking_1=__importDefault(require(a551_0x3cbca7(0x9e))),ClosedAllOpenTickets=async _0x21e32a=>{const _0xd125a1=a551_0x3cbca7,_0x412798=async(_0x375c7c,_0x2b83b2,_0x535f0d)=>{const _0xe1c868=a551_0x3838;if(_0x2b83b2==='nps')await _0x375c7c[_0xe1c868(0xb0)]({'status':_0xe1c868(0xa7),'lastMessage':_0x535f0d,'unreadMessages':0x0,'amountUseBotQueues':0x0});else _0x2b83b2===_0xe1c868(0x83)?await _0x375c7c[_0xe1c868(0xb0)]({'status':_0xe1c868(0xa7),'lastMessage':_0x535f0d,'unreadMessages':0x0,'amountUseBotQueues':0x0}):await _0x375c7c[_0xe1c868(0xb0)]({'status':'closed','unreadMessages':0x0});},_0x44437f=(0x0,socket_1[_0xd125a1(0x86)])();try{const {rows:_0x14dc35}=await Ticket_1[_0xd125a1(0x85)][_0xd125a1(0x8e)]({'where':{'status':{[sequelize_1['Op']['in']]:[_0xd125a1(0x83),_0xd125a1(0xad)]},'companyId':_0x21e32a},'order':[['updatedAt',_0xd125a1(0xb2)]]});_0x14dc35[_0xd125a1(0x8f)](async _0x22b6ad=>{const _0x43b030=_0xd125a1,_0x847ec3=await(0x0,ShowTicketService_1[_0x43b030(0x85)])(_0x22b6ad['id'],_0x21e32a),_0x46f3df=await Whatsapp_1[_0x43b030(0x85)][_0x43b030(0x97)](_0x847ec3?.[_0x43b030(0xac)]),_0x3c7cc7=await TicketTraking_1[_0x43b030(0x85)]['findOne']({'where':{'ticketId':_0x22b6ad['id'],'finishedAt':null}});if(!_0x46f3df)return;let {timeInactiveMessage:_0x40fba2,expiresInactiveMessage:_0x3a0a26,inactiveMessage:_0x163bc5,expiresTicket:_0x4eba6a,expiresTicketNPS:_0x34e92e,whenExpiresTicket:_0x3c07f9,complationMessage:_0x75c0d9}=_0x46f3df;if(_0x34e92e&&_0x34e92e!==''&&_0x34e92e!=='0'&&Number(_0x34e92e)>0x0){const _0x41fbc7=new Date();_0x41fbc7['setMinutes'](_0x41fbc7['getMinutes']()-Number(_0x34e92e));if(_0x22b6ad[_0x43b030(0xb1)]===_0x43b030(0xad)){const _0x5abec7=new Date(_0x847ec3['updatedAt']);if(_0x5abec7<_0x41fbc7){_0x412798(_0x847ec3,_0x847ec3['status'],'');const _0x46e134=(0x0,Mustache_1[_0x43b030(0x85)])('‎'+_0x75c0d9,_0x847ec3);if(_0x75c0d9!==''&&_0x75c0d9!==undefined){const _0x4d2893=await(0x0,SendWhatsAppMessage_1[_0x43b030(0x85)])({'body':_0x46e134,'ticket':_0x847ec3});await(0x0,wbotMessageListener_1[_0x43b030(0xa5)])(_0x4d2893,_0x847ec3,_0x847ec3['contact']);}await _0x3c7cc7[_0x43b030(0xb0)]({'finishedAt':(0x0,moment_1[_0x43b030(0x85)])()[_0x43b030(0x95)](),'closedAt':(0x0,moment_1[_0x43b030(0x85)])()[_0x43b030(0x95)](),'whatsappId':_0x22b6ad[_0x43b030(0xac)],'userId':_0x22b6ad[_0x43b030(0xa8)]}),_0x44437f['to'](_0x43b030(0x83))[_0x43b030(0x8b)]('company'+_0x21e32a+_0x43b030(0xa2),{'action':_0x43b030(0x9d),'ticket':_0x847ec3,'ticketId':_0x847ec3['id']});}}}if(_0x4eba6a&&_0x4eba6a!==''&&_0x4eba6a!=='0'&&Number(_0x4eba6a)>0x0){const _0x2d802d=(0x0,Mustache_1[_0x43b030(0x85)])('‎'+_0x3a0a26,_0x847ec3),_0x52875d=new Date();_0x52875d[_0x43b030(0xa3)](_0x52875d[_0x43b030(0xae)]()-Number(_0x4eba6a));_0x40fba2&&_0x40fba2!==''&&_0x40fba2!==null&&_0x40fba2!=='0'&&Number(_0x40fba2)>0x0&&_0x52875d[_0x43b030(0x9a)](_0x52875d[_0x43b030(0x9b)]()-Number(_0x40fba2));if(_0x847ec3[_0x43b030(0xb1)]===_0x43b030(0x83)&&!_0x847ec3[_0x43b030(0xb5)]){const _0x591fb6=new Date(_0x847ec3[_0x43b030(0x9f)]);if(_0x591fb6<_0x52875d&&(_0x3c07f9==='0'||_0x3c07f9==='1'&&_0x847ec3[_0x43b030(0x88)])){_0x412798(_0x847ec3,_0x847ec3[_0x43b030(0xb1)],_0x2d802d);if(_0x3a0a26!==''&&_0x3a0a26!==undefined){const _0x71dd9c=await(0x0,SendWhatsAppMessage_1['default'])({'body':_0x2d802d,'ticket':_0x847ec3});await(0x0,wbotMessageListener_1[_0x43b030(0xa5)])(_0x71dd9c,_0x847ec3,_0x847ec3['contact']);}await _0x3c7cc7[_0x43b030(0xb0)]({'finishedAt':(0x0,moment_1[_0x43b030(0x85)])()[_0x43b030(0x95)](),'closedAt':(0x0,moment_1['default'])()[_0x43b030(0x95)](),'whatsappId':_0x22b6ad[_0x43b030(0xac)],'userId':_0x22b6ad['userId']}),_0x44437f['to'](_0x43b030(0x83))['emit'](_0x43b030(0xa9)+_0x21e32a+'-ticket',{'action':'delete','ticket':_0x847ec3,'ticketId':_0x847ec3['id']});}}}if(_0x40fba2&&_0x40fba2!==''&&_0x40fba2!=='0'&&Number(_0x40fba2)>0x0){const _0x21b420=(0x0,Mustache_1['default'])('‎'+_0x163bc5,_0x847ec3),_0x19dadf=new Date();_0x19dadf[_0x43b030(0x9a)](_0x19dadf[_0x43b030(0x9b)]()-Number(_0x40fba2));if(_0x847ec3[_0x43b030(0xb1)]===_0x43b030(0x83)&&!_0x847ec3[_0x43b030(0xb5)]){const _0x3ec1c8=new Date(_0x847ec3['updatedAt']);if(_0x3ec1c8<_0x19dadf&&!_0x847ec3[_0x43b030(0x8a)]&&(_0x3c07f9==='0'||_0x3c07f9==='1'&&_0x847ec3[_0x43b030(0x88)])){const _0x6cdc89=await(0x0,SendWhatsAppMessage_1[_0x43b030(0x85)])({'body':_0x21b420,'ticket':_0x847ec3});await(0x0,wbotMessageListener_1[_0x43b030(0xa5)])(_0x6cdc89,_0x847ec3,_0x847ec3[_0x43b030(0x90)]),await _0x847ec3[_0x43b030(0xb0)]({'sendInactiveMessage':!![]}),_0x44437f['to'](_0x43b030(0x83))[_0x43b030(0x8b)](_0x43b030(0xa9)+_0x21e32a+'-ticket',{'action':_0x43b030(0x9d),'ticket':_0x847ec3,'ticketId':_0x847ec3['id']});}}}});}catch(_0x4fc2b7){console[_0xd125a1(0xa0)]('e',_0x4fc2b7);}};function a551_0x107c(){const _0x322ef0=['defineProperty','1083vlXjiI','12VYIqTe','./wbotMessageListener','toDate','41hAuzFV','findByPk','__importDefault','6282290qZrbWF','setMinutes','getMinutes','../../helpers/Mustache','delete','../../models/TicketTraking','updatedAt','log','7324eXgiSM','-ticket','setHours','35146HUHjbu','verifyMessage','250533mVhNeU','closed','userId','company','8JkNLtj','683573vWfLXe','whatsappId','nps','getHours','../../models/Whatsapp','update','status','DESC','../../models/Ticket','10ZjguuV','isGroup','open','__esModule','default','getIO','3603229vKMkFo','fromMe','ClosedAllOpenTickets','sendInactiveMessage','emit','./SendWhatsAppMessage','1090842VUGjWm','findAndCountAll','forEach','contact'];a551_0x107c=function(){return _0x322ef0;};return a551_0x107c();}exports[a551_0x3cbca7(0x89)]=ClosedAllOpenTickets;