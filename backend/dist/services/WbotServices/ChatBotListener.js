'use strict';const a536_0x25d043=a536_0x61fd;(function(_0x20b7b6,_0x200d09){const _0x82d262=a536_0x61fd,_0x785321=_0x20b7b6();while(!![]){try{const _0x525f46=-parseInt(_0x82d262(0x1de))/0x1+parseInt(_0x82d262(0x200))/0x2+parseInt(_0x82d262(0x1ee))/0x3+parseInt(_0x82d262(0x1b8))/0x4+parseInt(_0x82d262(0x1d8))/0x5*(-parseInt(_0x82d262(0x202))/0x6)+-parseInt(_0x82d262(0x210))/0x7+parseInt(_0x82d262(0x1b2))/0x8*(-parseInt(_0x82d262(0x1f7))/0x9);if(_0x525f46===_0x200d09)break;else _0x785321['push'](_0x785321['shift']());}catch(_0x3140b0){_0x785321['push'](_0x785321['shift']());}}}(a536_0x2ec6,0x84cd7));var __importDefault=this&&this[a536_0x25d043(0x1f6)]||function(_0x56a98d){const _0x5dbe26=a536_0x25d043;return _0x56a98d&&_0x56a98d[_0x5dbe26(0x1ad)]?_0x56a98d:{'default':_0x56a98d};};Object[a536_0x25d043(0x1cc)](exports,a536_0x25d043(0x1ad),{'value':!![]}),exports[a536_0x25d043(0x1e8)]=exports[a536_0x25d043(0x1b6)]=void 0x0;const path_1=__importDefault(require('path')),wbotMessageListener_1=require(a536_0x25d043(0x1b1)),ShowDialogChatBotsServices_1=__importDefault(require(a536_0x25d043(0x1db))),ShowQueueService_1=__importDefault(require(a536_0x25d043(0x1c2))),ShowChatBotServices_1=__importDefault(require('../ChatBotServices/ShowChatBotServices')),DeleteDialogChatBotsServices_1=__importDefault(require(a536_0x25d043(0x206))),ShowChatBotByChatbotIdServices_1=__importDefault(require(a536_0x25d043(0x1fb))),CreateDialogChatBotsServices_1=__importDefault(require(a536_0x25d043(0x1e3))),ShowWhatsAppService_1=__importDefault(require(a536_0x25d043(0x201))),Mustache_1=__importDefault(require('../../helpers/Mustache')),UpdateTicketService_1=__importDefault(require(a536_0x25d043(0x1b5))),User_1=__importDefault(require(a536_0x25d043(0x1fa))),Setting_1=__importDefault(require(a536_0x25d043(0x208))),ShowService_1=__importDefault(require(a536_0x25d043(0x205))),SendWhatsAppMedia_1=__importDefault(require(a536_0x25d043(0x1ff))),fs=require('fs');var axios=require(a536_0x25d043(0x209));const isNumeric=_0x108881=>/^-?\d+$/[a536_0x25d043(0x1ef)](_0x108881),deleteAndCreateDialogStage=async(_0x587137,_0x4829e7,_0x23db78)=>{const _0x313226=a536_0x25d043;try{await(0x0,DeleteDialogChatBotsServices_1[_0x313226(0x1f9)])(_0x587137['id']);const _0x22e6cf=await(0x0,ShowChatBotByChatbotIdServices_1[_0x313226(0x1f9)])(_0x4829e7);return!_0x22e6cf&&await _0x23db78[_0x313226(0x1c0)]({'isBot':![]}),await(0x0,CreateDialogChatBotsServices_1[_0x313226(0x1f9)])({'awaiting':0x1,'contactId':_0x587137['id'],'chatbotId':_0x4829e7,'queueId':_0x22e6cf[_0x313226(0x20f)]});}catch(_0x153317){await _0x23db78[_0x313226(0x1c0)]({'isBot':![]});}};exports['deleteAndCreateDialogStage']=deleteAndCreateDialogStage;const sendMessage=async(_0x3f3ba6,_0x442d6b,_0x50248f,_0xb1a2e0)=>{const _0x3c1c2d=a536_0x25d043,_0x136b70=await _0x3f3ba6[_0x3c1c2d(0x1d3)](_0x442d6b[_0x3c1c2d(0x1df)]+'@'+(_0x50248f[_0x3c1c2d(0x211)]?_0x3c1c2d(0x1dc):_0x3c1c2d(0x1d5)),{'text':(0x0,Mustache_1[_0x3c1c2d(0x1f9)])(_0xb1a2e0,_0x50248f)});(0x0,wbotMessageListener_1[_0x3c1c2d(0x1e0)])(_0x136b70,_0x50248f,_0x442d6b);},sendMessageLink=async(_0x2e2221,_0x414726,_0x47d31f,_0x1f5802,_0x6559d0)=>{const _0x4f9127=a536_0x25d043;let _0x5913a7;try{_0x5913a7=await _0x2e2221[_0x4f9127(0x1d3)](_0x414726['number']+'@'+(_0x47d31f[_0x4f9127(0x211)]?'g.us':'s.whatsapp.net'),{'document':_0x1f5802?{'url':_0x1f5802}:fs[_0x4f9127(0x1b7)]('public/temp/'+_0x6559d0+'-'+makeid(0xa)),'fileName':_0x6559d0,'mimetype':_0x4f9127(0x1f0)});}catch(_0x49f51d){_0x5913a7=await _0x2e2221['sendMessage'](_0x414726[_0x4f9127(0x1df)]+'@'+(_0x47d31f['isGroup']?_0x4f9127(0x1dc):_0x4f9127(0x1d5)),{'text':(0x0,Mustache_1['default'])(_0x4f9127(0x1ca),_0x47d31f)});}(0x0,wbotMessageListener_1[_0x4f9127(0x1e0)])(_0x5913a7,_0x47d31f,_0x414726);},sendMessageImage=async(_0x1e9358,_0x19129d,_0x45f27d,_0x385e78,_0x3a7038)=>{const _0x19c134=a536_0x25d043;let _0x1600b4;try{_0x1600b4=await _0x1e9358[_0x19c134(0x1d3)](_0x19129d['number']+'@'+(_0x45f27d[_0x19c134(0x211)]?_0x19c134(0x1dc):_0x19c134(0x1d5)),{'image':_0x385e78?{'url':_0x385e78}:fs['readFileSync'](_0x19c134(0x1ac)+_0x3a7038+'-'+makeid(0xa)),'fileName':_0x3a7038,'caption':_0x3a7038,'mimetype':_0x19c134(0x1ea)});}catch(_0x13c90d){_0x1600b4=await _0x1e9358[_0x19c134(0x1d3)](_0x19129d['number']+'@'+(_0x45f27d[_0x19c134(0x211)]?_0x19c134(0x1dc):_0x19c134(0x1d5)),{'text':(0x0,Mustache_1[_0x19c134(0x1f9)])(_0x19c134(0x20c),_0x45f27d)});}(0x0,wbotMessageListener_1[_0x19c134(0x1e0)])(_0x1600b4,_0x45f27d,_0x19129d);},sendDialog=async(_0x44da2b,_0x223063,_0x4ef105,_0x589cd0)=>{const _0x194c0b=a536_0x25d043,_0x1bda3b=await(0x0,ShowChatBotServices_1[_0x194c0b(0x1f9)])(_0x44da2b['id']);if(_0x1bda3b[_0x194c0b(0x1aa)]){const _0x4b66fc=await Setting_1[_0x194c0b(0x1f9)][_0x194c0b(0x1da)]({'where':{'key':'chatBotType','companyId':_0x589cd0[_0x194c0b(0x1e6)]}}),_0x22765b=_0x4b66fc?.[_0x194c0b(0x1f4)]||_0x194c0b(0x1d9),_0x8ec1d2=async()=>{const _0x15290b=_0x194c0b;let _0x392746='';_0x1bda3b[_0x15290b(0x1aa)][_0x15290b(0x1c3)]((_0x2eecfd,_0x23b276)=>{const _0x55c118=_0x15290b;_0x392746+='*'+(_0x23b276+0x1)+'*\x20-\x20'+_0x2eecfd[_0x55c118(0x1c4)]+'\x0a';});const _0x52589a=_0x392746[_0x15290b(0x1c6)]>0x0?_0x392746+'\x0a*#*\x20Voltar\x20para\x20o\x20menu\x20principal':_0x392746;if(_0x392746[_0x15290b(0x1c6)]>0x0){const _0x5b22ce='‎'+_0x44da2b[_0x15290b(0x1f8)]+'\x0a\x0a'+_0x52589a,_0x594f07=await sendMessage(_0x223063,_0x4ef105,_0x589cd0,_0x5b22ce);return _0x594f07;}const _0x51ff64='‎'+_0x44da2b[_0x15290b(0x1f8)],_0x30069=await sendMessage(_0x223063,_0x4ef105,_0x589cd0,_0x51ff64);return _0x30069;},_0x485269=async()=>{const _0x1c26da=_0x194c0b,_0x1e89de=[];_0x1bda3b[_0x1c26da(0x1aa)][_0x1c26da(0x1c3)]((_0x30b4d4,_0x54499d)=>{_0x1e89de['push']({'buttonId':''+(_0x54499d+0x1),'buttonText':{'displayText':_0x30b4d4['name']},'type':0x1});});if(_0x1e89de[_0x1c26da(0x1c6)]>0x0){const _0x385f8e={'text':'‎'+_0x44da2b[_0x1c26da(0x1f8)],'buttons':_0x1e89de,'headerType':0x1},_0x4059ef=await _0x223063[_0x1c26da(0x1d3)](_0x4ef105[_0x1c26da(0x1df)]+'@'+(_0x589cd0[_0x1c26da(0x211)]?_0x1c26da(0x1dc):'s.whatsapp.net'),_0x385f8e);return await(0x0,wbotMessageListener_1[_0x1c26da(0x1e0)])(_0x4059ef,_0x589cd0,_0x4ef105),_0x4059ef;}const _0x21b2d6='‎'+_0x44da2b[_0x1c26da(0x1f8)],_0x43c72b=await sendMessage(_0x223063,_0x4ef105,_0x589cd0,_0x21b2d6);return _0x43c72b;},_0x2d19e3=async()=>{const _0x3642b3=_0x194c0b,_0x1a9dc4=[];_0x1bda3b[_0x3642b3(0x1aa)][_0x3642b3(0x1c3)]((_0x696f2b,_0x26f990)=>{const _0x12cd91=_0x3642b3;_0x1a9dc4[_0x12cd91(0x20e)]({'title':_0x696f2b[_0x12cd91(0x1c4)],'rowId':''+(_0x26f990+0x1)});});if(_0x1a9dc4['length']>0x0){const _0x3a3889=[{'title':_0x3642b3(0x1c9),'rows':_0x1a9dc4}],_0x1cc0d6={'text':(0x0,Mustache_1['default'])('‎'+_0x44da2b[_0x3642b3(0x1f8)],_0x589cd0),'buttonText':_0x3642b3(0x1dd),'sections':_0x3a3889},_0xcaa181=await _0x223063['sendMessage'](_0x4ef105['number']+'@'+(_0x589cd0[_0x3642b3(0x211)]?_0x3642b3(0x1dc):_0x3642b3(0x1d5)),_0x1cc0d6);return await(0x0,wbotMessageListener_1[_0x3642b3(0x1e0)])(_0xcaa181,_0x589cd0,_0x4ef105),_0xcaa181;}const _0x5d6ce2='‎'+_0x44da2b['greetingMessage'],_0x2d98d5=await sendMessage(_0x223063,_0x4ef105,_0x589cd0,_0x5d6ce2);return _0x2d98d5;};if(_0x22765b==='text')return await _0x8ec1d2();if(_0x22765b===_0x194c0b(0x1e4)&&_0x1bda3b[_0x194c0b(0x1aa)][_0x194c0b(0x1c6)]>0x4)return await _0x8ec1d2();if(_0x22765b==='button'&&_0x1bda3b[_0x194c0b(0x1aa)][_0x194c0b(0x1c6)]<=0x4)return await _0x485269();if(_0x22765b===_0x194c0b(0x1fe))return await _0x2d19e3();}},backToMainMenu=async(_0x16acd3,_0x2bb1ba,_0x4af0b1)=>{const _0x27a1f3=a536_0x25d043;await(0x0,UpdateTicketService_1[_0x27a1f3(0x1f9)])({'ticketData':{'queueId':null,'userId':null},'ticketId':_0x4af0b1['id'],'companyId':_0x4af0b1['companyId']});const {queues:_0xf2d86d,greetingMessage:_0x128717}=await(0x0,ShowWhatsAppService_1[_0x27a1f3(0x1f9)])(_0x16acd3['id'],_0x4af0b1[_0x27a1f3(0x1e6)]),_0x34eef7=await Setting_1['default']['findOne']({'where':{'key':'chatBotType'}}),_0x5c82ae=async()=>{const _0xf45eb1=_0x27a1f3;let _0x8991b1='';_0xf2d86d['forEach']((_0x15c2e0,_0x35dc14)=>{const _0x3399fd=a536_0x61fd;_0x8991b1+='*'+(_0x35dc14+0x1)+_0x3399fd(0x1d7)+_0x15c2e0[_0x3399fd(0x1c4)]+'\x0a';});const _0x24f82e=(0x0,Mustache_1[_0xf45eb1(0x1f9)])('‎'+_0x128717+'\x0a\x0a'+_0x8991b1,_0x4af0b1);await sendMessage(_0x16acd3,_0x2bb1ba,_0x4af0b1,_0x24f82e);const _0xef6b7e=await(0x0,DeleteDialogChatBotsServices_1['default'])(_0x2bb1ba['id']);return _0xef6b7e;},_0x52ee0f=async()=>{const _0x23b563=_0x27a1f3,_0x2be519=[];_0xf2d86d[_0x23b563(0x1c3)]((_0x9f3320,_0xf2aef)=>{const _0xdea2dd=_0x23b563;_0x2be519[_0xdea2dd(0x20e)]({'buttonId':''+(_0xf2aef+0x1),'buttonText':{'displayText':_0x9f3320[_0xdea2dd(0x1c4)]},'type':0x1});});const _0xd3c46a={'text':(0x0,Mustache_1['default'])('‎'+_0x128717,_0x4af0b1),'buttons':_0x2be519,'headerType':0x1},_0x360922=await _0x16acd3[_0x23b563(0x1d3)](_0x2bb1ba['number']+'@'+(_0x4af0b1[_0x23b563(0x211)]?_0x23b563(0x1dc):_0x23b563(0x1d5)),_0xd3c46a);await(0x0,wbotMessageListener_1['verifyMessage'])(_0x360922,_0x4af0b1,_0x2bb1ba);const _0x5cf662=await(0x0,DeleteDialogChatBotsServices_1[_0x23b563(0x1f9)])(_0x2bb1ba['id']);return _0x5cf662;},_0x43381a=async()=>{const _0x16b00e=_0x27a1f3,_0x3bb51c=[];_0xf2d86d[_0x16b00e(0x1c3)]((_0x33991f,_0x3a576e)=>{const _0x6846b0=_0x16b00e;_0x3bb51c[_0x6846b0(0x20e)]({'title':_0x33991f[_0x6846b0(0x1c4)],'rowId':''+(_0x3a576e+0x1)});});const _0x16a7c2=[{'title':_0x16b00e(0x1c9),'rows':_0x3bb51c}],_0x159909={'text':(0x0,Mustache_1['default'])('‎'+_0x128717,_0x4af0b1),'buttonText':'Escolha\x20uma\x20opção','sections':_0x16a7c2},_0x1468fe=await _0x16acd3[_0x16b00e(0x1d3)](_0x2bb1ba['number']+'@'+(_0x4af0b1[_0x16b00e(0x211)]?'g.us':_0x16b00e(0x1d5)),_0x159909);await(0x0,wbotMessageListener_1[_0x16b00e(0x1e0)])(_0x1468fe,_0x4af0b1,_0x2bb1ba);const _0x2dca17=await(0x0,DeleteDialogChatBotsServices_1['default'])(_0x2bb1ba['id']);return _0x2dca17;};if(_0x34eef7['value']===_0x27a1f3(0x1d9))return _0x5c82ae();if(_0x34eef7[_0x27a1f3(0x1f4)]==='button'&&_0xf2d86d[_0x27a1f3(0x1c6)]>0x4)return _0x5c82ae();if(_0x34eef7[_0x27a1f3(0x1f4)]===_0x27a1f3(0x1e4)&&_0xf2d86d['length']<=0x4)return _0x52ee0f();if(_0x34eef7[_0x27a1f3(0x1f4)]===_0x27a1f3(0x1fe))return _0x43381a();};function validaCpfCnpj(_0x1323af){const _0x16e47a=a536_0x25d043;if(_0x1323af[_0x16e47a(0x1c6)]==0xb){var _0x967a96=_0x1323af[_0x16e47a(0x1cb)]();_0x967a96=_0x967a96[_0x16e47a(0x1fc)](/\./g,''),_0x967a96=_0x967a96['replace']('-',''),_0x967a96=_0x967a96[_0x16e47a(0x1e5)]('');var _0x38602e=0x0,_0x1d583c=0x0,_0x308093=![];for(var _0x327dcd=0x1;_0x967a96[_0x16e47a(0x1c6)]>_0x327dcd;_0x327dcd++){_0x967a96[_0x327dcd-0x1]!=_0x967a96[_0x327dcd]&&(_0x308093=!![]);}if(_0x308093==![])return![];for(var _0x327dcd=0x0,_0x4acb9f=0xa;_0x967a96[_0x16e47a(0x1c6)]-0x2>_0x327dcd;_0x327dcd++,_0x4acb9f--){_0x38602e+=_0x967a96[_0x327dcd]*_0x4acb9f;}_0x38602e=_0x38602e*0xa%0xb;_0x38602e==0xa&&(_0x38602e=0x0);if(_0x38602e!=_0x967a96[0x9])return![];for(var _0x327dcd=0x0,_0x4acb9f=0xb;_0x967a96[_0x16e47a(0x1c6)]-0x1>_0x327dcd;_0x327dcd++,_0x4acb9f--){_0x1d583c+=_0x967a96[_0x327dcd]*_0x4acb9f;}return _0x1d583c=_0x1d583c*0xa%0xb,_0x1d583c==0xa&&(_0x1d583c=0x0),_0x1d583c!=_0x967a96[0xa]?![]:!![];}else{if(_0x1323af[_0x16e47a(0x1c6)]==0xe){var _0x15d666=_0x1323af[_0x16e47a(0x1cb)]();_0x15d666=_0x15d666['replace'](/\./g,''),_0x15d666=_0x15d666[_0x16e47a(0x1fc)]('-',''),_0x15d666=_0x15d666[_0x16e47a(0x1fc)]('/',''),_0x15d666=_0x15d666[_0x16e47a(0x1e5)]('');var _0x38602e=0x0,_0x1d583c=0x0,_0x308093=![];for(var _0x327dcd=0x1;_0x15d666['length']>_0x327dcd;_0x327dcd++){_0x15d666[_0x327dcd-0x1]!=_0x15d666[_0x327dcd]&&(_0x308093=!![]);}if(_0x308093==![])return![];for(var _0x327dcd=0x0,_0x16657b=0x5,_0x1e4bdd=0xd;_0x15d666['length']-0x2>_0x327dcd;_0x327dcd++,_0x16657b--,_0x1e4bdd--){_0x16657b>=0x2?_0x38602e+=_0x15d666[_0x327dcd]*_0x16657b:_0x38602e+=_0x15d666[_0x327dcd]*_0x1e4bdd;}_0x38602e=_0x38602e%0xb;_0x38602e<0x2?_0x38602e=0x0:_0x38602e=0xb-_0x38602e;if(_0x38602e!=_0x15d666[0xc])return![];for(var _0x327dcd=0x0,_0x16657b=0x6,_0x1e4bdd=0xe;_0x15d666['length']-0x1>_0x327dcd;_0x327dcd++,_0x16657b--,_0x1e4bdd--){_0x16657b>=0x2?_0x1d583c+=_0x15d666[_0x327dcd]*_0x16657b:_0x1d583c+=_0x15d666[_0x327dcd]*_0x1e4bdd;}return _0x1d583c=_0x1d583c%0xb,_0x1d583c<0x2?_0x1d583c=0x0:_0x1d583c=0xb-_0x1d583c,_0x1d583c!=_0x15d666[0xd]?![]:!![];}else return![];}}function timeout(_0x39a4fc){return new Promise(_0x30fa15=>setTimeout(_0x30fa15,_0x39a4fc));}async function sleep(_0x1dc761){await timeout(_0x1dc761);}function firstDayOfMonth(_0x5210c9){const _0x348257=a536_0x25d043,_0x1222c6=new Date(),_0x30d497=new Date(_0x1222c6[_0x348257(0x1ab)](),_0x1222c6[_0x348257(0x1cd)]()-_0x5210c9,0x1);return _0x30d497;};function a536_0x2ec6(){const _0x365fc9=['public','optFileId','dueDate','sendMessage','path','s.whatsapp.net','chatbotId','*\x20-\x20','170745fYdaFV','text','findOne','../DialogChatBotsServices/ShowDialogChatBotsServices','g.us','Escolha\x20uma\x20opção','181394KkKrpp','number','verifyMessage','open','localeCompare','../DialogChatBotsServices/CreateDialogChatBotsServices','button','split','companyId','getDate','sayChatbot','floor','image/jpeg','message','ticketId','charAt','1298877LsJtJx','test','application/pdf','pending','chatbots','singleSelectReply','value','random','__importDefault','1417455EswmIh','greetingMessage','default','../../models/User','../ChatBotServices/ShowChatBotByChatbotIdServices','replace','Estamos\x20finalizando\x20esta\x20conversa!\x20Caso\x20precise\x20entre\x20em\x20contato\x20conosco!','list','./SendWhatsAppMedia','1144584UZXuup','../WhatsappService/ShowWhatsAppService','30NzHkLn','substring','getBodyMessage','../../services/FileServices/ShowService','../DialogChatBotsServices/DeleteDialogChatBotsServices','queue','../../models/Setting','axios','buttonsResponseMessage','toString','Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','push','queueId','1792119aVEogL','isGroup','options','getFullYear','public/temp/','__esModule','7bit','closed','toLocaleLowerCase','./wbotMessageListener','32HUEvoL','company','file','../TicketServices/UpdateTicketService','deleteAndCreateDialogStage','readFileSync','3107376NmFXou','medias','selectedRowId','selectedButtonId','queueType','fileList','isAgent','optUserId','update','optQueueId','../QueueService/ShowQueueService','forEach','name','mediaType','length','ticketData','key','Menu','‎Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!','trim','defineProperty','getMonth','listResponseMessage','resolve'];a536_0x2ec6=function(){return _0x365fc9;};return a536_0x2ec6();}function lastDayOfMonth(_0x28e9db){const _0x254407=a536_0x25d043,_0x29c952=new Date(),_0x1f544f=new Date(_0x29c952[_0x254407(0x1ab)](),_0x29c952[_0x254407(0x1cd)]()+_0x28e9db,0x0);return _0x1f544f;};function dataAtualFormatada(_0xf98dc4){const _0x2d23b0=a536_0x25d043;var _0x261a80=_0xf98dc4[_0x2d23b0(0x1e7)]()['toString'](),_0x2710bc=_0x261a80[_0x2d23b0(0x1c6)]==0x1?'0'+_0x261a80:_0x261a80,_0x4523d8=(_0xf98dc4['getMonth']()+0x1)[_0x2d23b0(0x20b)](),_0x205621=_0x4523d8[_0x2d23b0(0x1c6)]==0x1?'0'+_0x4523d8:_0x4523d8,_0x28763e=_0xf98dc4[_0x2d23b0(0x1ab)]();return _0x2710bc+'/'+_0x205621+'/'+_0x28763e;}function makeid(_0x488eb5){const _0x251c11=a536_0x25d043;var _0x5d2f54='',_0x309b25=_0x251c11(0x20d),_0x113c0b=_0x309b25['length'];for(var _0x36df73=0x0;_0x36df73<_0x488eb5;_0x36df73++){_0x5d2f54+=_0x309b25[_0x251c11(0x1ed)](Math[_0x251c11(0x1e9)](Math[_0x251c11(0x1f5)]()*_0x113c0b));}return _0x5d2f54;}function a536_0x61fd(_0x3de9ce,_0x2236a8){const _0x2ec6de=a536_0x2ec6();return a536_0x61fd=function(_0x61fd42,_0x671366){_0x61fd42=_0x61fd42-0x1aa;let _0x57d03a=_0x2ec6de[_0x61fd42];return _0x57d03a;},a536_0x61fd(_0x3de9ce,_0x2236a8);}function replaceAll(_0x44089e,_0x4e55a4,_0x26d64a){const _0x2ee811=a536_0x25d043;return _0x44089e[_0x2ee811(0x1fc)](new RegExp(_0x4e55a4,'g'),_0x26d64a);}function formatDate(_0x560215){const _0x5a5442=a536_0x25d043;return _0x560215[_0x5a5442(0x203)](0x8,0xa)+'/'+_0x560215['substring'](0x5,0x7)+'/'+_0x560215[_0x5a5442(0x203)](0x0,0x4);}function sortfunction(_0xdbaae0,_0x315fc5){const _0x5a0d01=a536_0x25d043;return _0xdbaae0[_0x5a0d01(0x1d2)][_0x5a0d01(0x1e2)](_0x315fc5[_0x5a0d01(0x1d2)]);}async function sendMsgAndCloseTicket(_0x4a7f72,_0x12b58c,_0xb6bb6f){const _0x2e69e3=a536_0x25d043,_0x39acb9=_0x2e69e3(0x1fd);await sleep(0x7d0),await sendMessage(_0x4a7f72,_0x12b58c,_0xb6bb6f,_0x39acb9);const _0x1f5be7={'ticketData':{'status':'closed','userId':0x1,'sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0xb6bb6f['id'],'companyId':_0xb6bb6f[_0x2e69e3(0x1e6)],'ratingId':undefined};await sleep(0x7d0),await(0x0,UpdateTicketService_1['default'])(_0x1f5be7);}const sayChatbot=async(_0x30d0fb,_0xa6e011,_0x1e3b99,_0x493b8e,_0x880536)=>{const _0x3b01b7=a536_0x25d043,_0x4bf137=_0x880536?.[_0x3b01b7(0x1eb)]?.[_0x3b01b7(0x20a)]?.[_0x3b01b7(0x1bb)]||_0x880536?.[_0x3b01b7(0x1eb)]?.[_0x3b01b7(0x1ce)]?.['singleSelectReply'][_0x3b01b7(0x1ba)]||(0x0,wbotMessageListener_1[_0x3b01b7(0x204)])(_0x880536);if(!_0x30d0fb&&_0x4bf137&&_0x880536[_0x3b01b7(0x1c8)]['fromMe'])return;const _0x298a4c=await(0x0,ShowDialogChatBotsServices_1['default'])(_0x493b8e['id']),_0x4a4413=await(0x0,ShowQueueService_1[_0x3b01b7(0x1f9)])(_0x30d0fb,_0x1e3b99[_0x3b01b7(0x1e6)]);let _0x66ff0e;if(_0x4bf137[_0x3b01b7(0x1b0)]()==='finalizar'){const _0x200b15={'ticketData':{'status':_0x3b01b7(0x1af),'sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0x1e3b99['id'],'companyId':_0x1e3b99[_0x3b01b7(0x1e6)]};await(0x0,UpdateTicketService_1[_0x3b01b7(0x1f9)])(_0x200b15);}if(_0x4bf137==='#'){const _0x2d072f=await backToMainMenu(_0xa6e011,_0x493b8e,_0x1e3b99);return _0x2d072f;}if(!_0x298a4c){const _0x3da515=await(0x0,ShowQueueService_1[_0x3b01b7(0x1f9)])(_0x30d0fb,_0x1e3b99[_0x3b01b7(0x1e6)]),_0x347c0a=_0x880536?.[_0x3b01b7(0x1eb)]?.[_0x3b01b7(0x20a)]?.[_0x3b01b7(0x1bb)]||_0x880536?.['message']?.[_0x3b01b7(0x1ce)]?.[_0x3b01b7(0x1f3)]['selectedRowId']||(0x0,wbotMessageListener_1[_0x3b01b7(0x204)])(_0x880536),_0x103fed=_0x3da515[_0x3b01b7(0x1f2)][+_0x347c0a-0x1];if(_0x103fed){if(_0x103fed[_0x3b01b7(0x1bc)]===_0x3b01b7(0x207))try{const _0x26c6ab={'ticketData':{'queueId':_0x103fed[_0x3b01b7(0x1c1)],'status':_0x3b01b7(0x1f1)},'ticketId':_0x1e3b99['id']};await(0x0,UpdateTicketService_1[_0x3b01b7(0x1f9)])({'ticketData':{..._0x26c6ab['ticketData']},'ticketId':_0x26c6ab[_0x3b01b7(0x1ec)],'companyId':_0x1e3b99[_0x3b01b7(0x1e6)]});}catch(_0x5f13e6){await(0x0,exports[_0x3b01b7(0x1b6)])(_0x493b8e,_0x103fed['id'],_0x1e3b99);}if(_0x103fed['queueType']==='attendent')try{const _0x10df6c={'ticketData':{'queueId':_0x103fed['optQueueId'],'userId':_0x103fed[_0x3b01b7(0x1bf)],'status':_0x3b01b7(0x1f1)},'ticketId':_0x1e3b99['id']};await(0x0,UpdateTicketService_1[_0x3b01b7(0x1f9)])({'ticketData':{..._0x10df6c[_0x3b01b7(0x1c7)]},'ticketId':_0x10df6c[_0x3b01b7(0x1ec)],'companyId':_0x1e3b99[_0x3b01b7(0x1e6)]});}catch(_0x20be99){await(0x0,exports[_0x3b01b7(0x1b6)])(_0x493b8e,_0x103fed['id'],_0x1e3b99);}await(0x0,exports[_0x3b01b7(0x1b6)])(_0x493b8e,_0x103fed['id'],_0x1e3b99);let _0x3acbd5;_0x103fed?.[_0x3b01b7(0x1f8)]&&(_0x3acbd5=await sendDialog(_0x103fed,_0xa6e011,_0x493b8e,_0x1e3b99));if(_0x103fed[_0x3b01b7(0x1bc)]===_0x3b01b7(0x1b4))try{const _0x19ed48=path_1[_0x3b01b7(0x1f9)][_0x3b01b7(0x1cf)](__dirname,'..','..','..',_0x3b01b7(0x1d0)),_0x3b0dc9=await(0x0,ShowService_1[_0x3b01b7(0x1f9)])(_0x103fed[_0x3b01b7(0x1d1)],_0x1e3b99[_0x3b01b7(0x1e6)]),_0x3626fc=path_1[_0x3b01b7(0x1f9)][_0x3b01b7(0x1cf)](_0x19ed48,_0x3b01b7(0x1b3)+_0x1e3b99[_0x3b01b7(0x1e6)],_0x3b01b7(0x1bd),String(_0x3b0dc9['id']));for(const [_0x420d42,_0x531cd1]of _0x3b0dc9[_0x3b01b7(0x1aa)]['entries']()){const _0x35a754={'fieldname':_0x3b01b7(0x1b9),'originalname':_0x531cd1[_0x3b01b7(0x1d4)],'encoding':_0x3b01b7(0x1ae),'mimetype':_0x531cd1[_0x3b01b7(0x1c5)],'filename':_0x531cd1[_0x3b01b7(0x1d4)],'path':path_1[_0x3b01b7(0x1f9)][_0x3b01b7(0x1cf)](_0x3626fc,_0x531cd1['path'])};await(0x0,SendWhatsAppMedia_1[_0x3b01b7(0x1f9)])({'media':_0x35a754,'ticket':_0x1e3b99,'body':_0x531cd1[_0x3b01b7(0x1c4)]});};}catch(_0x4c8c09){await(0x0,exports[_0x3b01b7(0x1b6)])(_0x493b8e,_0x103fed['id'],_0x1e3b99);}return _0x3acbd5;}}if(_0x298a4c){const _0x5a9f9a=isNumeric(_0x4bf137)?_0x4bf137:0x1,_0x545db1=await(0x0,ShowChatBotServices_1[_0x3b01b7(0x1f9)])(_0x298a4c[_0x3b01b7(0x1d6)]),_0x2640b1=_0x545db1[_0x3b01b7(0x1aa)][+_0x5a9f9a-0x1]?_0x545db1[_0x3b01b7(0x1aa)][+_0x5a9f9a-0x1]:_0x545db1[_0x3b01b7(0x1aa)][0x0];if(!_0x2640b1[_0x3b01b7(0x1f8)]){await(0x0,DeleteDialogChatBotsServices_1[_0x3b01b7(0x1f9)])(_0x493b8e['id']);return;}if(_0x2640b1){if(_0x2640b1[_0x3b01b7(0x1be)]){const _0x187b29=await User_1[_0x3b01b7(0x1f9)][_0x3b01b7(0x1da)]({'where':{'name':_0x2640b1[_0x3b01b7(0x1c4)]}}),_0x1a5b49={'ticketData':{'userId':_0x187b29['id'],'status':_0x3b01b7(0x1e1)},'ticketId':_0x1e3b99['id']};await(0x0,UpdateTicketService_1['default'])({'ticketData':{..._0x1a5b49[_0x3b01b7(0x1c7)]},'ticketId':_0x1a5b49['ticketId'],'companyId':_0x1e3b99['companyId']});}await(0x0,exports[_0x3b01b7(0x1b6)])(_0x493b8e,_0x2640b1['id'],_0x1e3b99);const _0x490339=await sendDialog(_0x2640b1,_0xa6e011,_0x493b8e,_0x1e3b99);return _0x490339;}}};exports['sayChatbot']=sayChatbot;