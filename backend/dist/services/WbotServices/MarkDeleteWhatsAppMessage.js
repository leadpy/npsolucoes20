'use strict';function a506_0x203f(){const _0x3f0cb9=['68285aNhEmM','lgpdDeleteMessage','@s.whatsapp.net','8380164UthKmY','../../libs/socket','replace','quotedMsg','20UMJQhN','contact','Erro\x20ao\x20tentar\x20marcar\x20a\x20mensagem\x20com\x20excluída','58457AzSPMO','3VLaJoH','defineProperty','843174ngaPXd','__esModule','update','34498893xveZOZ','value','ticketId','toString','enableLGPD','404WQrrPN','getIO','findOne','log','../../models/Ticket','enabled','../../models/Message','936groSOk','1464801VfETEP','default','wid','2303572ECgQmY','appMessage-','@c.us','findAll','emit'];a506_0x203f=function(){return _0x3f0cb9;};return a506_0x203f();}const a506_0x4a44f9=a506_0x2ac9;(function(_0x1ea9d5,_0x1ead43){const _0x3ad9d6=a506_0x2ac9,_0x362f6a=_0x1ea9d5();while(!![]){try{const _0x2bc5a9=-parseInt(_0x3ad9d6(0xc5))/0x1+parseInt(_0x3ad9d6(0xc8))/0x2*(parseInt(_0x3ad9d6(0xb3))/0x3)+parseInt(_0x3ad9d6(0xbd))/0x4*(-parseInt(_0x3ad9d6(0xcd))/0x5)+-parseInt(_0x3ad9d6(0xab))/0x6+-parseInt(_0x3ad9d6(0xb2))/0x7*(-parseInt(_0x3ad9d6(0xc4))/0x8)+parseInt(_0x3ad9d6(0xb5))/0x9*(-parseInt(_0x3ad9d6(0xaf))/0xa)+parseInt(_0x3ad9d6(0xb8))/0xb;if(_0x2bc5a9===_0x1ead43)break;else _0x362f6a['push'](_0x362f6a['shift']());}catch(_0x4c4b24){_0x362f6a['push'](_0x362f6a['shift']());}}}(a506_0x203f,0xcc51c));var __importDefault=this&&this['__importDefault']||function(_0x1b7ab5){const _0x56df23=a506_0x2ac9;return _0x1b7ab5&&_0x1b7ab5[_0x56df23(0xb6)]?_0x1b7ab5:{'default':_0x1b7ab5};};Object[a506_0x4a44f9(0xb4)](exports,a506_0x4a44f9(0xb6),{'value':!![]});const Message_1=__importDefault(require(a506_0x4a44f9(0xc3))),socket_1=require(a506_0x4a44f9(0xac)),ListSettingsServiceOne_1=__importDefault(require('../SettingServices/ListSettingsServiceOne')),Ticket_1=__importDefault(require(a506_0x4a44f9(0xc1))),MarkDeleteWhatsAppMessage=async(_0x1eaa8f,_0x27718c,_0x472508,_0x8ba088)=>{const _0x46a3b4=a506_0x4a44f9;_0x1eaa8f=_0x1eaa8f[_0x46a3b4(0xad)](_0x46a3b4(0xca),'')['replace'](_0x46a3b4(0xaa),'');if(_0x472508){const _0x35de75=await Message_1['default'][_0x46a3b4(0xcb)]({'where':{'wid':_0x472508,'companyId':_0x8ba088}});try{const _0x15a9e7=await Message_1[_0x46a3b4(0xc6)][_0x46a3b4(0xbf)]({'where':{'wid':_0x35de75[0x0][_0x46a3b4(0xc7)]},'include':[_0x46a3b4(0xb0),{'model':Message_1['default'],'as':_0x46a3b4(0xae),'include':[_0x46a3b4(0xb0)]}]});if(_0x15a9e7){const _0x51e6eb=await(0x0,ListSettingsServiceOne_1[_0x46a3b4(0xc6)])({'companyId':_0x8ba088,'key':_0x46a3b4(0xbc)}),_0x1e9ee3=await(0x0,ListSettingsServiceOne_1[_0x46a3b4(0xc6)])({'companyId':_0x8ba088,'key':_0x46a3b4(0xa9)});if(_0x1e9ee3['value']===_0x46a3b4(0xc2)&&_0x51e6eb[_0x46a3b4(0xb9)]===_0x46a3b4(0xc2)){const _0x1a3a02=await Ticket_1[_0x46a3b4(0xc6)]['findOne']({'where':{'id':_0x15a9e7['ticketId']}});await _0x15a9e7['update']({'isDeleted':!![]}),_0x1a3a02&&_0x1a3a02['update']({'lastMessage':'🚫\x20_Mensagem\x20Apagada_'});}else await _0x15a9e7[_0x46a3b4(0xb7)]({'isDeleted':!![]});const _0x4867bc=(0x0,socket_1[_0x46a3b4(0xbe)])();_0x4867bc['to'](_0x15a9e7[_0x46a3b4(0xba)][_0x46a3b4(0xbb)]())[_0x46a3b4(0xcc)](_0x46a3b4(0xc9)+_0x15a9e7,{'action':_0x46a3b4(0xb7),'message':_0x15a9e7});}}catch(_0x144be0){console[_0x46a3b4(0xc0)](_0x46a3b4(0xb1));}return _0x27718c;};};function a506_0x2ac9(_0x9e9b99,_0x27da06){const _0x203f7a=a506_0x203f();return a506_0x2ac9=function(_0x2ac92b,_0x152f25){_0x2ac92b=_0x2ac92b-0xa9;let _0xc4b85f=_0x203f7a[_0x2ac92b];return _0xc4b85f;},a506_0x2ac9(_0x9e9b99,_0x27da06);}exports[a506_0x4a44f9(0xc6)]=MarkDeleteWhatsAppMessage;