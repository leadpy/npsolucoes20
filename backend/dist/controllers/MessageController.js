'use strict';const a23_0x26cd7a=a23_0x4830;(function(_0x2f8e0d,_0x2fde05){const _0x3907aa=a23_0x4830,_0xfd3199=_0x2f8e0d();while(!![]){try{const _0x37dba8=parseInt(_0x3907aa(0x1fe))/0x1+parseInt(_0x3907aa(0x22f))/0x2+parseInt(_0x3907aa(0x227))/0x3+parseInt(_0x3907aa(0x1d6))/0x4+-parseInt(_0x3907aa(0x247))/0x5+-parseInt(_0x3907aa(0x24c))/0x6*(-parseInt(_0x3907aa(0x217))/0x7)+-parseInt(_0x3907aa(0x1de))/0x8;if(_0x37dba8===_0x2fde05)break;else _0xfd3199['push'](_0xfd3199['shift']());}catch(_0xd97488){_0xfd3199['push'](_0xfd3199['shift']());}}}(a23_0x5533,0x41843));var __createBinding=this&&this['__createBinding']||(Object['create']?function(_0x291834,_0x48ef37,_0x44da7f,_0x2131ae){const _0x23fe85=a23_0x4830;if(_0x2131ae===undefined)_0x2131ae=_0x44da7f;var _0x1da603=Object['getOwnPropertyDescriptor'](_0x48ef37,_0x44da7f);(!_0x1da603||(_0x23fe85(0x1f1)in _0x1da603?!_0x48ef37[_0x23fe85(0x1f2)]:_0x1da603['writable']||_0x1da603[_0x23fe85(0x23c)]))&&(_0x1da603={'enumerable':!![],'get':function(){return _0x48ef37[_0x44da7f];}}),Object[_0x23fe85(0x1d3)](_0x291834,_0x2131ae,_0x1da603);}:function(_0x2da05c,_0x23e8ca,_0x32d46b,_0x4b59b4){if(_0x4b59b4===undefined)_0x4b59b4=_0x32d46b;_0x2da05c[_0x4b59b4]=_0x23e8ca[_0x32d46b];}),__setModuleDefault=this&&this[a23_0x26cd7a(0x22c)]||(Object[a23_0x26cd7a(0x21c)]?function(_0x48f49e,_0xb77435){const _0x2182e3=a23_0x26cd7a;Object[_0x2182e3(0x1d3)](_0x48f49e,'default',{'enumerable':!![],'value':_0xb77435});}:function(_0x46c9c9,_0x5d575e){const _0x267cb3=a23_0x26cd7a;_0x46c9c9[_0x267cb3(0x230)]=_0x5d575e;}),__importStar=this&&this[a23_0x26cd7a(0x1da)]||function(_0x14bd4b){const _0x386bee=a23_0x26cd7a;if(_0x14bd4b&&_0x14bd4b[_0x386bee(0x1f2)])return _0x14bd4b;var _0xb65056={};if(_0x14bd4b!=null){for(var _0x3e987d in _0x14bd4b)if(_0x3e987d!==_0x386bee(0x230)&&Object[_0x386bee(0x1d8)][_0x386bee(0x1ff)][_0x386bee(0x1d4)](_0x14bd4b,_0x3e987d))__createBinding(_0xb65056,_0x14bd4b,_0x3e987d);}return __setModuleDefault(_0xb65056,_0x14bd4b),_0xb65056;},__importDefault=this&&this[a23_0x26cd7a(0x1f8)]||function(_0x11618d){const _0xda1fa8=a23_0x26cd7a;return _0x11618d&&_0x11618d[_0xda1fa8(0x1f2)]?_0x11618d:{'default':_0x11618d};};Object['defineProperty'](exports,a23_0x26cd7a(0x1f2),{'value':!![]}),exports[a23_0x26cd7a(0x234)]=exports[a23_0x26cd7a(0x22a)]=exports[a23_0x26cd7a(0x226)]=exports[a23_0x26cd7a(0x236)]=exports[a23_0x26cd7a(0x1f7)]=exports[a23_0x26cd7a(0x1dc)]=exports['index']=void 0x0;const AppError_1=__importDefault(require(a23_0x26cd7a(0x1eb))),SetTicketMessagesAsRead_1=__importDefault(require('../helpers/SetTicketMessagesAsRead')),socket_1=require(a23_0x26cd7a(0x212)),Message_1=__importDefault(require(a23_0x26cd7a(0x23f))),Queue_1=__importDefault(require('../models/Queue')),User_1=__importDefault(require(a23_0x26cd7a(0x224))),Whatsapp_1=__importDefault(require(a23_0x26cd7a(0x237))),jsonwebtoken_1=require(a23_0x26cd7a(0x1db)),auth_1=__importDefault(require('../config/auth')),path_1=__importDefault(require(a23_0x26cd7a(0x1f4))),lodash_1=require(a23_0x26cd7a(0x232)),ListMessagesService_1=__importDefault(require(a23_0x26cd7a(0x1e8))),ShowTicketService_1=__importDefault(require('../services/TicketServices/ShowTicketService')),DeleteWhatsAppMessage_1=__importDefault(require(a23_0x26cd7a(0x235))),SendWhatsAppMedia_1=__importDefault(require(a23_0x26cd7a(0x22d))),SendWhatsAppMessage_1=__importDefault(require(a23_0x26cd7a(0x213))),CreateMessageService_1=__importDefault(require(a23_0x26cd7a(0x1e7))),sendFacebookMessageMedia_1=require(a23_0x26cd7a(0x201)),sendFacebookMessage_1=__importDefault(require(a23_0x26cd7a(0x1dd))),ShowPlanCompanyService_1=__importDefault(require(a23_0x26cd7a(0x208))),ListMessagesServiceAll_1=__importDefault(require(a23_0x26cd7a(0x1e9))),ShowContactService_1=__importDefault(require(a23_0x26cd7a(0x210))),FindOrCreateTicketService_1=__importDefault(require('../services/TicketServices/FindOrCreateTicketService')),UpdateTicketService_1=__importDefault(require(a23_0x26cd7a(0x216))),ShowMessageService_1=__importStar(require('../services/MessageServices/ShowMessageService')),CompaniesSettings_1=__importDefault(require(a23_0x26cd7a(0x244))),index=async(_0x58e854,_0x5c15db)=>{const _0x2c0b07=a23_0x26cd7a,{ticketId:_0x1768a3}=_0x58e854['params'],{pageNumber:_0x1124ec,selectedQueues:_0x366edf}=_0x58e854[_0x2c0b07(0x245)],{companyId:_0x44fd1a,profile:_0x2af391}=_0x58e854[_0x2c0b07(0x21a)];let _0x33c8fc=[];const _0x5aeb06=await User_1[_0x2c0b07(0x230)]['findByPk'](_0x58e854['user']['id'],{'include':[{'model':Queue_1[_0x2c0b07(0x230)],'as':_0x2c0b07(0x1ee)}]});_0x366edf?_0x33c8fc=JSON[_0x2c0b07(0x21e)](_0x366edf):_0x5aeb06[_0x2c0b07(0x1ee)][_0x2c0b07(0x1fd)](_0x4a638c=>{const _0x141731=_0x2c0b07;_0x33c8fc[_0x141731(0x204)](_0x4a638c['id']);});const {count:_0xd919a9,messages:_0x270ecd,ticket:_0x572198,hasMore:_0x5287cb}=await(0x0,ListMessagesService_1['default'])({'pageNumber':_0x1124ec,'ticketId':_0x1768a3,'companyId':_0x44fd1a,'queues':_0x33c8fc,'user':_0x5aeb06});return _0x572198[_0x2c0b07(0x249)]===_0x2c0b07(0x23d)&&(0x0,SetTicketMessagesAsRead_1['default'])(_0x572198),_0x5c15db[_0x2c0b07(0x1df)]({'count':_0xd919a9,'messages':_0x270ecd,'ticket':_0x572198,'hasMore':_0x5287cb});};exports[a23_0x26cd7a(0x233)]=index;function obterNomeEExtensaoDoArquivo(_0x2b61b5){const _0x3188e6=a23_0x26cd7a;var _0x3ddbcf=new URL(_0x2b61b5),_0x3b2817=_0x3ddbcf['pathname'],_0x38417f=_0x3b2817[_0x3188e6(0x1fa)]('/')[_0x3188e6(0x23b)](),_0x2f9da9=_0x38417f[_0x3188e6(0x1fa)]('.'),_0x4267d4=_0x2f9da9[0x0],_0x5ec839=_0x2f9da9[0x1];return _0x4267d4+'.'+_0x5ec839;}const store=async(_0x358caf,_0x3988c0)=>{const _0x3cef8c=a23_0x26cd7a,{ticketId:_0x5bf2f6}=_0x358caf[_0x3cef8c(0x1d7)],{body:_0x31d291,quotedMsg:_0xfad73e,isPrivate:_0x36a6bd,vCard:_0x12bebd}=_0x358caf[_0x3cef8c(0x218)],_0xef9acc=_0x358caf['files'],{companyId:_0x415cbf}=_0x358caf[_0x3cef8c(0x21a)],_0x2835f4=await(0x0,ShowTicketService_1[_0x3cef8c(0x230)])(_0x5bf2f6,_0x415cbf);_0x2835f4['channel']===_0x3cef8c(0x23d)&&(0x0,SetTicketMessagesAsRead_1[_0x3cef8c(0x230)])(_0x2835f4);try{if(_0xef9acc)await Promise['all'](_0xef9acc[_0x3cef8c(0x20b)](async(_0x427259,_0x2e13e4)=>{const _0x1d29ac=_0x3cef8c;_0x2835f4['channel']==='whatsapp'&&await(0x0,SendWhatsAppMedia_1['default'])({'media':_0x427259,'ticket':_0x2835f4,'body':Array[_0x1d29ac(0x20a)](_0x31d291)?_0x31d291[_0x2e13e4]:_0x31d291,'isPrivate':/\u200d/[_0x1d29ac(0x1fb)](_0x31d291),'isForwarded':![]});if(_0x2835f4[_0x1d29ac(0x249)]===_0x1d29ac(0x24b)||_0x2835f4[_0x1d29ac(0x249)]===_0x1d29ac(0x1ea))try{await(0x0,sendFacebookMessageMedia_1['sendFacebookMessageMedia'])({'media':_0x427259,'ticket':_0x2835f4});}catch(_0x4ad1f7){console[_0x1d29ac(0x21f)](_0x4ad1f7);}}));else{_0x2835f4[_0x3cef8c(0x249)]===_0x3cef8c(0x23d)&&!_0x36a6bd&&await(0x0,SendWhatsAppMessage_1['default'])({'body':_0x31d291,'ticket':_0x2835f4,'quotedMsg':_0xfad73e,'isPrivate':_0x36a6bd,'vCard':_0x12bebd});if(_0x2835f4[_0x3cef8c(0x249)]===_0x3cef8c(0x23d)&&_0x36a6bd){const _0x4d6a51={'wid':'PVT'+_0x2835f4[_0x3cef8c(0x1e0)]['toString']()[_0x3cef8c(0x214)]('\x20',''),'ticketId':_0x2835f4['id'],'contactId':undefined,'body':_0x31d291,'fromMe':!![],'mediaType':!(0x0,lodash_1[_0x3cef8c(0x1d2)])(_0x12bebd)?_0x3cef8c(0x1e4):_0x3cef8c(0x228),'read':!![],'quotedMsgId':null,'ack':0x2,'remoteJid':_0x2835f4['contact']?.[_0x3cef8c(0x238)],'participant':null,'dataJson':null,'ticketTrakingId':null,'isPrivate':_0x36a6bd};await(0x0,CreateMessageService_1[_0x3cef8c(0x230)])({'messageData':_0x4d6a51,'companyId':_0x2835f4[_0x3cef8c(0x1fc)]});}(_0x2835f4[_0x3cef8c(0x249)]===_0x3cef8c(0x24b)||_0x2835f4[_0x3cef8c(0x249)]===_0x3cef8c(0x1ea))&&await(0x0,sendFacebookMessage_1['default'])({'body':_0x31d291,'ticket':_0x2835f4,'quotedMsg':_0xfad73e});}return _0x3988c0[_0x3cef8c(0x234)]();}catch(_0x42c882){return console[_0x3cef8c(0x21f)](_0x42c882),_0x3988c0[_0x3cef8c(0x22b)](0x190)[_0x3cef8c(0x1df)]({'error':_0x42c882['message']});}};exports[a23_0x26cd7a(0x1dc)]=store;function a23_0x4830(_0x2b9a81,_0x15e661){const _0x5533cd=a23_0x5533();return a23_0x4830=function(_0x4830c7,_0x38d60f){_0x4830c7=_0x4830c7-0x1d0;let _0x2a9050=_0x5533cd[_0x4830c7];return _0x2a9050;},a23_0x4830(_0x2b9a81,_0x15e661);}const forwardmessage=async(_0x200a15,_0xab096a)=>{const _0x44a46a=a23_0x26cd7a,_0x1b2920=_0x200a15[_0x44a46a(0x23a)][_0x44a46a(0x24e)],[,_0xf2441d]=_0x1b2920[_0x44a46a(0x1fa)]('\x20'),_0x4c320e=(0x0,jsonwebtoken_1['verify'])(_0xf2441d,auth_1['default'][_0x44a46a(0x20f)]),{id:_0x19eb96}=_0x200a15[_0x44a46a(0x21a)],_0xa6a827=await User_1[_0x44a46a(0x230)][_0x44a46a(0x240)](_0x19eb96),{currentContacts:_0x1117c3,message:_0x953d0b,signMessage:_0x5e76eb}=_0x200a15[_0x44a46a(0x218)],{companyId:_0x22b5a7}=_0x953d0b,_0x3b2a7d=await CompaniesSettings_1[_0x44a46a(0x230)]['findOne']({'where':{'companyId':_0x22b5a7}}),_0xa0c3f7=_0x953d0b[_0x44a46a(0x1f5)];let _0x1f2daa;return _0x1117c3['map'](async _0x107f62=>{const _0x1ecbf2=_0x44a46a,_0x33c728=await(0x0,ShowContactService_1[_0x1ecbf2(0x230)])(_0x107f62['id'],_0x953d0b['companyId']),_0x56bb32=await(0x0,ShowTicketService_1[_0x1ecbf2(0x230)])(_0x953d0b['ticketId'],_0x953d0b[_0x1ecbf2(0x1fc)]),{ticket:_0x4db543,isCreated:_0x544f32}=await(0x0,FindOrCreateTicketService_1[_0x1ecbf2(0x230)])(_0x33c728,_0x56bb32?.[_0x1ecbf2(0x23d)],0x0,_0x56bb32[_0x1ecbf2(0x1fc)],_0x56bb32['queueId'],_0xa6a827['id'],_0x33c728[_0x1ecbf2(0x20d)]?_0x33c728:null,_0x1ecbf2(0x23d),null,!![],_0x3b2a7d),_0xdb89a0={'status':_0x4db543[_0x1ecbf2(0x20d)]?_0x1ecbf2(0x1f6):_0x1ecbf2(0x23e),'userId':_0xa6a827['id'],'queueId':_0x56bb32[_0x1ecbf2(0x21b)]};await(0x0,UpdateTicketService_1['default'])({'ticketData':_0xdb89a0,'ticketId':_0x4db543['id'],'companyId':_0x4db543[_0x1ecbf2(0x1fc)]});if(_0x56bb32[_0x1ecbf2(0x249)]==='whatsapp'){if(_0x953d0b['mediaUrl']){_0x1f2daa=_0x1ecbf2(0x1ef);const _0x21dc12=_0x953d0b[_0x1ecbf2(0x200)][_0x1ecbf2(0x214)](':'+process[_0x1ecbf2(0x219)][_0x1ecbf2(0x1e5)],''),_0x13daa3=obterNomeEExtensaoDoArquivo(_0x21dc12),_0x241265=path_1[_0x1ecbf2(0x230)][_0x1ecbf2(0x1ec)](__dirname,'..','..','..','backend',_0x1ecbf2(0x24f)),_0x3d22a2=path_1[_0x1ecbf2(0x230)][_0x1ecbf2(0x1ec)](_0x241265,_0x1ecbf2(0x20c)+_0x56bb32[_0x1ecbf2(0x1fc)],_0x13daa3),_0x1f4b27={'fieldname':_0x1ecbf2(0x1e2),'originalname':_0x13daa3,'encoding':_0x1ecbf2(0x222),'mimetype':_0x953d0b[_0x1ecbf2(0x205)],'filename':_0x13daa3,'path':_0x3d22a2};await(0x0,SendWhatsAppMedia_1[_0x1ecbf2(0x230)])({'media':_0x1f4b27,'ticket':_0x4db543,'body':_0x1f2daa,'isForwarded':![]});}else _0x5e76eb?_0x1f2daa=_0x1ecbf2(0x231)+_0xa6a827['name']+_0x1ecbf2(0x206)+_0x953d0b[_0x1ecbf2(0x218)]:_0x1f2daa=''+_0x953d0b['body'],await(0x0,SendWhatsAppMessage_1[_0x1ecbf2(0x230)])({'body':_0x1f2daa,'ticket':_0x4db543,'quotedMsg':_0xa0c3f7});}}),_0xab096a[_0x44a46a(0x1df)](_0x44a46a(0x215));};exports[a23_0x26cd7a(0x1f7)]=forwardmessage;const forwardMessage=async(_0x18eca5,_0x2c4fb6)=>{const _0x4140a9=a23_0x26cd7a,{quotedMsg:_0x3987b2,signMessage:_0x331c11,messageId:_0x206b57,contactId:_0xec2bb3}=_0x18eca5[_0x4140a9(0x218)],{id:_0x5e2d28,companyId:_0x38aa2f}=_0x18eca5[_0x4140a9(0x21a)],_0x543708=await User_1[_0x4140a9(0x230)][_0x4140a9(0x240)](_0x5e2d28);if(!_0x206b57||!_0xec2bb3)return _0x2c4fb6[_0x4140a9(0x22b)](0xc8)[_0x4140a9(0x234)](_0x4140a9(0x1d5));const _0x289d17=await(0x0,ShowMessageService_1['default'])(_0x206b57),_0x2be499=await(0x0,ShowContactService_1[_0x4140a9(0x230)])(_0xec2bb3,_0x38aa2f);if(!_0x289d17)return _0x2c4fb6[_0x4140a9(0x22b)](0x194)[_0x4140a9(0x234)](_0x4140a9(0x24a));if(!_0x2be499)return _0x2c4fb6[_0x4140a9(0x22b)](0x194)[_0x4140a9(0x234)]('Contact\x20not\x20found');const _0x49689=await CompaniesSettings_1[_0x4140a9(0x230)][_0x4140a9(0x1e1)]({'where':{'companyId':_0x38aa2f}}),_0x53c89d=await(0x0,ShowMessageService_1[_0x4140a9(0x242)])(_0x289d17);if(!_0x53c89d)return _0x2c4fb6[_0x4140a9(0x22b)](0x194)[_0x4140a9(0x234)](_0x4140a9(0x203));const _0x45c90e=await(0x0,ShowTicketService_1[_0x4140a9(0x230)])(_0x289d17[_0x4140a9(0x21d)],_0x289d17[_0x4140a9(0x1fc)]),{ticket:_0x5df588}=await(0x0,FindOrCreateTicketService_1['default'])(_0x2be499,_0x45c90e?.[_0x4140a9(0x23d)],0x0,_0x45c90e[_0x4140a9(0x1fc)],_0x45c90e[_0x4140a9(0x21b)],_0x543708['id'],_0x2be499[_0x4140a9(0x20d)]?_0x2be499:null,_0x4140a9(0x23d),null,!![],_0x49689);let _0x3d131c;(0x0,lodash_1[_0x4140a9(0x1d2)])(_0x5df588?.[_0x4140a9(0x21b)])?_0x3d131c={'status':_0x5df588['isGroup']?_0x4140a9(0x1f6):_0x4140a9(0x23e),'userId':_0x543708['id'],'queueId':_0x45c90e[_0x4140a9(0x21b)]}:_0x3d131c={'status':_0x5df588[_0x4140a9(0x20d)]?'group':'open','userId':_0x543708['id']};await(0x0,UpdateTicketService_1[_0x4140a9(0x230)])({'ticketData':_0x3d131c,'ticketId':_0x5df588['id'],'companyId':_0x5df588[_0x4140a9(0x1fc)]});let _0x1b3036=_0x289d17[_0x4140a9(0x218)];if(_0x289d17[_0x4140a9(0x205)]===_0x4140a9(0x24d)||_0x289d17[_0x4140a9(0x205)]===_0x4140a9(0x228))await(0x0,SendWhatsAppMessage_1['default'])({'body':_0x1b3036,'ticket':_0x5df588,'quotedMsg':_0x3987b2,'isForwarded':_0x289d17[_0x4140a9(0x1d9)]?![]:!![]});else{const _0x2f7059=_0x289d17['mediaUrl'][_0x4140a9(0x214)](':'+process[_0x4140a9(0x219)][_0x4140a9(0x1e5)],''),_0xac8600=obterNomeEExtensaoDoArquivo(_0x2f7059);_0x1b3036===_0xac8600&&(_0x1b3036='');const _0x13196d=path_1[_0x4140a9(0x230)][_0x4140a9(0x1ec)](__dirname,'..','..','..',_0x4140a9(0x20e),'public'),_0x59189b=path_1[_0x4140a9(0x230)]['join'](_0x13196d,_0x4140a9(0x20c)+_0x5df588[_0x4140a9(0x1fc)],_0xac8600),_0x22ecad={'fieldname':_0x4140a9(0x1e2),'originalname':_0xac8600,'encoding':_0x4140a9(0x222),'mimetype':_0x289d17[_0x4140a9(0x205)],'filename':_0xac8600,'path':_0x59189b};await(0x0,SendWhatsAppMedia_1['default'])({'media':_0x22ecad,'ticket':_0x5df588,'body':_0x1b3036,'isForwarded':_0x289d17[_0x4140a9(0x1d9)]?![]:!![]});}return _0x2c4fb6[_0x4140a9(0x234)]();};exports[a23_0x26cd7a(0x236)]=forwardMessage;const remove=async(_0x12cd21,_0x472978)=>{const _0x1afcc7=a23_0x26cd7a,{messageId:_0x9fb8d0}=_0x12cd21[_0x1afcc7(0x1d7)],{companyId:_0x3b9dd0}=_0x12cd21[_0x1afcc7(0x21a)],_0x19330a=await(0x0,DeleteWhatsAppMessage_1[_0x1afcc7(0x230)])(_0x9fb8d0),_0x1648cf=(0x0,socket_1[_0x1afcc7(0x243)])();return _0x19330a[_0x1afcc7(0x241)]&&(await Message_1[_0x1afcc7(0x230)]['destroy']({'where':{'id':_0x19330a['id']}}),_0x1648cf['to'](_0x19330a[_0x1afcc7(0x21d)][_0x1afcc7(0x1ed)]())['emit'](_0x1afcc7(0x221)+_0x3b9dd0+_0x1afcc7(0x223),{'action':_0x1afcc7(0x1d1),'message':_0x19330a})),_0x1648cf['to'](_0x19330a[_0x1afcc7(0x21d)][_0x1afcc7(0x1ed)]())[_0x1afcc7(0x1e6)](_0x1afcc7(0x221)+_0x3b9dd0+_0x1afcc7(0x223),{'action':_0x1afcc7(0x1e3),'message':_0x19330a}),_0x472978[_0x1afcc7(0x234)]();};exports['remove']=remove;const allMe=async(_0x363bf6,_0x4fb770)=>{const _0x1f48d8=a23_0x26cd7a,_0x1b11ce=_0x363bf6[_0x1f48d8(0x245)]['dateStart'],_0x78b8d0=_0x363bf6[_0x1f48d8(0x245)]['dateEnd'],_0x53bbca=_0x363bf6[_0x1f48d8(0x245)][_0x1f48d8(0x1d9)],{companyId:_0x2fac6e}=_0x363bf6[_0x1f48d8(0x21a)],{count:_0x581f7c}=await(0x0,ListMessagesServiceAll_1[_0x1f48d8(0x230)])({'companyId':_0x2fac6e,'fromMe':_0x53bbca,'dateStart':_0x1b11ce,'dateEnd':_0x78b8d0});return _0x4fb770[_0x1f48d8(0x1df)]({'count':_0x581f7c});};exports[a23_0x26cd7a(0x22a)]=allMe;function a23_0x5533(){const _0x56a89b=['lodash','index','send','../services/WbotServices/DeleteWhatsAppMessage','forwardMessage','../models/Whatsapp','remoteJid','Essa\x20empresa\x20não\x20tem\x20permissão\x20para\x20usar\x20a\x20API\x20Externa.\x20Entre\x20em\x20contato\x20com\x20o\x20Suporte\x20para\x20verificar\x20nossos\x20planos!','headers','pop','configurable','whatsapp','open','../models/Message','findByPk','isPrivate','GetWhatsAppFromMessage','getIO','../models/CompaniesSettings','query','keys','1047330cTVtnl','O\x20número\x20é\x20obrigatório','channel','Message\x20not\x20found','facebook','6ZcvWcV','conversation','authorization','public','plan','delete','isNil','defineProperty','call','MessageId\x20or\x20ContactId\x20not\x20found','569224hGQIFu','params','prototype','fromMe','__importStar','jsonwebtoken','store','../services/FacebookServices/sendFacebookMessage','1145120DVVcpS','json','updatedAt','findOne','medias','update','contactMessage','PORT','emit','../services/MessageServices/CreateMessageService','../services/MessageServices/ListMessagesService','../services/MessageServices/ListMessagesServiceAll','instagram','../errors/AppError','join','toString','queues','_Encaminhada_','SendMessage','get','__esModule','number','path','quotedMsgId','group','forwardmessage','__importDefault','Não\x20foi\x20possível\x20enviar\x20a\x20mensagem,\x20tente\x20novamente\x20em\x20alguns\x20instantes','split','test','companyId','forEach','180197VPaaEN','hasOwnProperty','mediaUrl','../services/FacebookServices/sendFacebookMessageMedia','add','Whatsapp\x20from\x20message\x20not\x20found','push','mediaType','*\x0a\x0a','message','../services/CompanyService/ShowPlanCompanyService','Mensagem\x20enviada!','isArray','map','company','isGroup','backend','secret','../services/ContactServices/ShowContactService','app','../libs/socket','../services/WbotServices/SendWhatsAppMessage','replace','count','../services/TicketServices/UpdateTicketService','392665xOVaHM','body','env','user','queueId','create','ticketId','parse','log','length','company-','7bit','-appMessage','../models/User','Não\x20foi\x20possível\x20realizar\x20a\x20operação','remove','271677VIOphp','extendedTextMessage','all','allMe','status','__setModuleDefault','../services/WbotServices/SendWhatsAppMedia','messageQueue','303608oYOMWM','default','*Mensagem\x20encaminhada\x20de\x20'];a23_0x5533=function(){return _0x56a89b;};return a23_0x5533();}const send=async(_0x2aa516,_0x364c09)=>{const _0x3651d7=a23_0x26cd7a,_0x2d48bb=_0x2aa516[_0x3651d7(0x218)],_0x13dba6=_0x2aa516['files'];try{const _0xf7dab8=_0x2aa516['headers'][_0x3651d7(0x24e)],[,_0x338f31]=_0xf7dab8[_0x3651d7(0x1fa)]('\x20'),_0x1a0dc5=await Whatsapp_1[_0x3651d7(0x230)][_0x3651d7(0x1e1)]({'where':{'token':_0x338f31}}),_0x415df3=_0x1a0dc5['companyId'],_0x1f9906=await(0x0,ShowPlanCompanyService_1[_0x3651d7(0x230)])(_0x415df3),_0x129882=_0x1f9906[_0x3651d7(0x1d0)]['useExternalApi'];if(_0x129882){if(!_0x1a0dc5)throw new Error(_0x3651d7(0x225));if(_0x2d48bb[_0x3651d7(0x1f3)]===undefined)throw new Error(_0x3651d7(0x248));const _0xf80c34=_0x2d48bb[_0x3651d7(0x1f3)],_0x4b7b81=_0x2d48bb[_0x3651d7(0x218)];return _0x13dba6?await Promise[_0x3651d7(0x229)](_0x13dba6[_0x3651d7(0x20b)](async _0x5dfb1b=>{const _0x2c57eb=_0x3651d7;_0x2aa516['app']['get'](_0x2c57eb(0x1ee))[_0x2c57eb(0x22e)][_0x2c57eb(0x202)](_0x2c57eb(0x1f0),{'whatsappId':_0x1a0dc5['id'],'data':{'number':_0xf80c34,'body':_0x5dfb1b['originalname']['replace']('/','-'),'mediaPath':_0x5dfb1b[_0x2c57eb(0x1f4)]}},{'removeOnComplete':!![],'attempts':0x3});})):_0x2aa516[_0x3651d7(0x211)][_0x3651d7(0x1f1)](_0x3651d7(0x1ee))[_0x3651d7(0x22e)]['add'](_0x3651d7(0x1f0),{'whatsappId':_0x1a0dc5['id'],'data':{'number':_0xf80c34,'body':_0x4b7b81}},{'removeOnComplete':!![],'attempts':0x3}),_0x364c09[_0x3651d7(0x234)]({'mensagem':_0x3651d7(0x209)});}return _0x364c09['status'](0x190)[_0x3651d7(0x1df)]({'error':_0x3651d7(0x239)});}catch(_0x2a90d9){console[_0x3651d7(0x21f)](_0x2a90d9);if(Object[_0x3651d7(0x246)](_0x2a90d9)[_0x3651d7(0x220)]===0x0)throw new AppError_1[(_0x3651d7(0x230))](_0x3651d7(0x1f9));else throw new AppError_1[(_0x3651d7(0x230))](_0x2a90d9[_0x3651d7(0x207)]);}};exports[a23_0x26cd7a(0x234)]=send;