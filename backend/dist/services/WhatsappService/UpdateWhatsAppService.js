'use strict';const a623_0x37ad06=a623_0x17b7;(function(_0x318da4,_0x1547e8){const _0x3c0776=a623_0x17b7,_0xf6f7c0=_0x318da4();while(!![]){try{const _0x3c529d=-parseInt(_0x3c0776(0x14f))/0x1+parseInt(_0x3c0776(0x13f))/0x2+-parseInt(_0x3c0776(0x144))/0x3*(-parseInt(_0x3c0776(0x143))/0x4)+-parseInt(_0x3c0776(0x159))/0x5*(-parseInt(_0x3c0776(0x15b))/0x6)+parseInt(_0x3c0776(0x142))/0x7*(-parseInt(_0x3c0776(0x158))/0x8)+-parseInt(_0x3c0776(0x152))/0x9+parseInt(_0x3c0776(0x156))/0xa;if(_0x3c529d===_0x1547e8)break;else _0xf6f7c0['push'](_0xf6f7c0['shift']());}catch(_0x44e804){_0xf6f7c0['push'](_0xf6f7c0['shift']());}}}(a623_0x4d7c,0xef3eb));function a623_0x4d7c(){const _0x475aec=['update','./AssociateWhatsappQueue','1448334EitBgQ','string','__esModule','3562223csOcup','20LhHSYf','290013TMixKu','message','prototype','object','defineProperty','validate','not','../../errors/AppError','ERR_WAPP_GREETING_REQUIRED','hasOwnProperty','shape','149879sVuhQD','get','getOwnPropertyDescriptor','9201384iiTyYk','yup','boolean','min','18165180fkMdXC','length','24ZonPEF','3274145BxldMB','__createBinding','6wKMuoH','__setModuleDefault','default','create'];a623_0x4d7c=function(){return _0x475aec;};return a623_0x4d7c();}var __createBinding=this&&this[a623_0x37ad06(0x15a)]||(Object[a623_0x37ad06(0x15e)]?function(_0x258170,_0x4428ee,_0x23e21f,_0x422c4a){const _0x223b9b=a623_0x37ad06;if(_0x422c4a===undefined)_0x422c4a=_0x23e21f;var _0x535180=Object[_0x223b9b(0x151)](_0x4428ee,_0x23e21f);(!_0x535180||(_0x223b9b(0x150)in _0x535180?!_0x4428ee[_0x223b9b(0x141)]:_0x535180['writable']||_0x535180['configurable']))&&(_0x535180={'enumerable':!![],'get':function(){return _0x4428ee[_0x23e21f];}}),Object[_0x223b9b(0x148)](_0x258170,_0x422c4a,_0x535180);}:function(_0x54351b,_0x2a9c7d,_0x4bd882,_0x2d82cd){if(_0x2d82cd===undefined)_0x2d82cd=_0x4bd882;_0x54351b[_0x2d82cd]=_0x2a9c7d[_0x4bd882];}),__setModuleDefault=this&&this[a623_0x37ad06(0x15c)]||(Object[a623_0x37ad06(0x15e)]?function(_0x433ff7,_0xf77961){const _0xd4b86b=a623_0x37ad06;Object[_0xd4b86b(0x148)](_0x433ff7,'default',{'enumerable':!![],'value':_0xf77961});}:function(_0x3ee292,_0x39bb9b){_0x3ee292['default']=_0x39bb9b;}),__importStar=this&&this['__importStar']||function(_0x4dc1e4){const _0x5bafaf=a623_0x37ad06;if(_0x4dc1e4&&_0x4dc1e4[_0x5bafaf(0x141)])return _0x4dc1e4;var _0x3877c7={};if(_0x4dc1e4!=null){for(var _0x24192d in _0x4dc1e4)if(_0x24192d!==_0x5bafaf(0x15d)&&Object[_0x5bafaf(0x146)][_0x5bafaf(0x14d)]['call'](_0x4dc1e4,_0x24192d))__createBinding(_0x3877c7,_0x4dc1e4,_0x24192d);}return __setModuleDefault(_0x3877c7,_0x4dc1e4),_0x3877c7;},__importDefault=this&&this['__importDefault']||function(_0x317a0d){const _0x52da62=a623_0x37ad06;return _0x317a0d&&_0x317a0d[_0x52da62(0x141)]?_0x317a0d:{'default':_0x317a0d};};Object[a623_0x37ad06(0x148)](exports,a623_0x37ad06(0x141),{'value':!![]});function a623_0x17b7(_0x148677,_0x22cf54){const _0x4d7c26=a623_0x4d7c();return a623_0x17b7=function(_0x17b713,_0x3bb003){_0x17b713=_0x17b713-0x13f;let _0x8e84a=_0x4d7c26[_0x17b713];return _0x8e84a;},a623_0x17b7(_0x148677,_0x22cf54);}const Yup=__importStar(require(a623_0x37ad06(0x153))),sequelize_1=require('sequelize'),AppError_1=__importDefault(require(a623_0x37ad06(0x14b))),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),ShowWhatsAppService_1=__importDefault(require('./ShowWhatsAppService')),AssociateWhatsappQueue_1=__importDefault(require(a623_0x37ad06(0x160))),UpdateWhatsAppService=async({whatsappData:_0x3b141f,whatsappId:_0x36c420,companyId:_0x5dc1dc})=>{const _0x51cb71=a623_0x37ad06,_0x424db1=Yup[_0x51cb71(0x147)]()[_0x51cb71(0x14e)]({'name':Yup[_0x51cb71(0x140)]()[_0x51cb71(0x155)](0x2),'status':Yup[_0x51cb71(0x140)](),'isDefault':Yup[_0x51cb71(0x154)]()}),{name:_0xbe211f,status:_0x1c2bf8,isDefault:_0x7a4484,session:_0x3203e5,greetingMessage:_0x4c73b8,complationMessage:_0x4cb6ff,outOfHoursMessage:_0x3a7138,queueIds:queueIds=[],token:_0x48dfb6,maxUseBotQueues:maxUseBotQueues=0x0,timeUseBotQueues:timeUseBotQueues=0x0,expiresTicket:expiresTicket=0x0,allowGroup:_0x3ce885,timeSendQueue:timeSendQueue=0x0,sendIdQueue:sendIdQueue=null,timeInactiveMessage:timeInactiveMessage=0x0,inactiveMessage:_0x50d3eb,ratingMessage:_0x30d16e,maxUseBotQueuesNPS:_0x127f13,expiresTicketNPS:expiresTicketNPS=0x0,whenExpiresTicket:_0x553ac2,expiresInactiveMessage:_0x23fc6e,groupAsTicket:_0x51f234,importOldMessages:_0xbf7de8,importRecentMessages:_0x305463,closedTicketsPostImported:_0x50d7d3,importOldMessagesGroups:_0x1bf6b6,timeCreateNewTicket:timeCreateNewTicket=null,integrationId:_0x3770e2,schedules:_0x158e60,promptId:_0x2d80df,requestQR:requestQR=![]}=_0x3b141f;try{await _0x424db1[_0x51cb71(0x149)]({'name':_0xbe211f,'status':_0x1c2bf8,'isDefault':_0x7a4484});}catch(_0x26eea3){throw new AppError_1[(_0x51cb71(0x15d))](_0x26eea3[_0x51cb71(0x145)]);}if(queueIds[_0x51cb71(0x157)]>0x1&&!_0x4c73b8)throw new AppError_1['default'](_0x51cb71(0x14c));let _0x440c29=null;_0x7a4484&&(_0x440c29=await Whatsapp_1[_0x51cb71(0x15d)]['findOne']({'where':{'isDefault':!![],'id':{[sequelize_1['Op'][_0x51cb71(0x14a)]]:_0x36c420},'companyId':_0x5dc1dc}}),_0x440c29&&await _0x440c29[_0x51cb71(0x15f)]({'isDefault':![]}));const _0x3e72bb=await(0x0,ShowWhatsAppService_1[_0x51cb71(0x15d)])(_0x36c420,_0x5dc1dc);return await _0x3e72bb[_0x51cb71(0x15f)]({'name':_0xbe211f,'status':_0x1c2bf8,'session':_0x3203e5,'greetingMessage':_0x4c73b8,'complationMessage':_0x4cb6ff,'outOfHoursMessage':_0x3a7138,'isDefault':_0x7a4484,'companyId':_0x5dc1dc,'token':_0x48dfb6,'maxUseBotQueues':maxUseBotQueues||0x0,'timeUseBotQueues':timeUseBotQueues||0x0,'expiresTicket':expiresTicket||0x0,'allowGroup':_0x3ce885,'timeSendQueue':timeSendQueue,'sendIdQueue':sendIdQueue,'timeInactiveMessage':timeInactiveMessage,'inactiveMessage':_0x50d3eb,'ratingMessage':_0x30d16e,'maxUseBotQueuesNPS':_0x127f13,'expiresTicketNPS':expiresTicketNPS,'whenExpiresTicket':_0x553ac2,'expiresInactiveMessage':_0x23fc6e,'groupAsTicket':_0x51f234,'importOldMessages':_0xbf7de8,'importRecentMessages':_0x305463,'closedTicketsPostImported':_0x50d7d3,'importOldMessagesGroups':_0x1bf6b6,'timeCreateNewTicket':timeCreateNewTicket,'integrationId':_0x3770e2,'schedules':_0x158e60,'promptId':_0x2d80df}),!requestQR&&await(0x0,AssociateWhatsappQueue_1[_0x51cb71(0x15d)])(_0x3e72bb,queueIds),{'whatsapp':_0x3e72bb,'oldDefaultWhatsapp':_0x440c29};};exports[a623_0x37ad06(0x15d)]=UpdateWhatsAppService;