'use strict';const a286_0x515233=a286_0x4ef7;(function(_0x5a81f9,_0x13c076){const _0x1d489f=a286_0x4ef7,_0x5a3ad6=_0x5a81f9();while(!![]){try{const _0xf3076f=parseInt(_0x1d489f(0x172))/0x1*(parseInt(_0x1d489f(0x14f))/0x2)+parseInt(_0x1d489f(0x195))/0x3+parseInt(_0x1d489f(0x148))/0x4*(parseInt(_0x1d489f(0x12c))/0x5)+parseInt(_0x1d489f(0x141))/0x6+parseInt(_0x1d489f(0x168))/0x7+parseInt(_0x1d489f(0x144))/0x8*(parseInt(_0x1d489f(0x170))/0x9)+-parseInt(_0x1d489f(0x191))/0xa;if(_0xf3076f===_0x13c076)break;else _0x5a3ad6['push'](_0x5a3ad6['shift']());}catch(_0x335a4d){_0x5a3ad6['push'](_0x5a3ad6['shift']());}}}(a286_0x22f7,0x9ea04));var __createBinding=this&&this[a286_0x515233(0x128)]||(Object[a286_0x515233(0x15e)]?function(_0x444e0a,_0x71ebc8,_0x4173cd,_0x43570d){const _0x3a6490=a286_0x515233;if(_0x43570d===undefined)_0x43570d=_0x4173cd;var _0x52518b=Object['getOwnPropertyDescriptor'](_0x71ebc8,_0x4173cd);(!_0x52518b||('get'in _0x52518b?!_0x71ebc8[_0x3a6490(0x16b)]:_0x52518b['writable']||_0x52518b[_0x3a6490(0x15f)]))&&(_0x52518b={'enumerable':!![],'get':function(){return _0x71ebc8[_0x4173cd];}}),Object[_0x3a6490(0x143)](_0x444e0a,_0x43570d,_0x52518b);}:function(_0x30701f,_0x213919,_0x1be538,_0x6fb6){if(_0x6fb6===undefined)_0x6fb6=_0x1be538;_0x30701f[_0x6fb6]=_0x213919[_0x1be538];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a286_0x515233(0x15e)]?function(_0x4eecf8,_0x1eb631){const _0x3d6324=a286_0x515233;Object[_0x3d6324(0x143)](_0x4eecf8,_0x3d6324(0x18c),{'enumerable':!![],'value':_0x1eb631});}:function(_0x19fcca,_0x221ddb){_0x19fcca['default']=_0x221ddb;}),__importStar=this&&this[a286_0x515233(0x150)]||function(_0x70930){const _0x1ef97a=a286_0x515233;if(_0x70930&&_0x70930[_0x1ef97a(0x16b)])return _0x70930;var _0x377ba6={};if(_0x70930!=null){for(var _0x57bc14 in _0x70930)if(_0x57bc14!==_0x1ef97a(0x18c)&&Object[_0x1ef97a(0x190)][_0x1ef97a(0x166)][_0x1ef97a(0x177)](_0x70930,_0x57bc14))__createBinding(_0x377ba6,_0x70930,_0x57bc14);}return __setModuleDefault(_0x377ba6,_0x70930),_0x377ba6;},__importDefault=this&&this[a286_0x515233(0x13a)]||function(_0x384014){return _0x384014&&_0x384014['__esModule']?_0x384014:{'default':_0x384014};};Object[a286_0x515233(0x143)](exports,a286_0x515233(0x16b),{'value':!![]}),exports[a286_0x515233(0x12d)]=exports[a286_0x515233(0x161)]=exports[a286_0x515233(0x12a)]=exports[a286_0x515233(0x17a)]=exports[a286_0x515233(0x186)]=void 0x0;const Sentry=__importStar(require('@sentry/node')),baileys_1=__importStar(require(a286_0x515233(0x18b))),Whatsapp_1=__importDefault(require('../models/Whatsapp')),logger_1=require(a286_0x515233(0x145)),logger_2=__importDefault(require('@whiskeysockets/baileys/lib/Utils/logger')),useMultiFileAuthState_1=require(a286_0x515233(0x147)),AppError_1=__importDefault(require(a286_0x515233(0x187))),socket_1=require('./socket'),StartWhatsAppSession_1=require(a286_0x515233(0x171)),DeleteBaileysService_1=__importDefault(require(a286_0x515233(0x163))),cache_1=__importDefault(require(a286_0x515233(0x17f))),ImportWhatsAppMessageService_1=__importDefault(require('../services/WhatsappService/ImportWhatsAppMessageService')),date_fns_1=require(a286_0x515233(0x13c)),moment_1=__importDefault(require('moment')),wbotMessageListener_1=require(a286_0x515233(0x13f)),addLogs_1=require(a286_0x515233(0x12b)),node_cache_1=__importDefault(require(a286_0x515233(0x178))),loggerBaileys=logger_2[a286_0x515233(0x18c)]['child']({});function a286_0x4ef7(_0xf5d2b3,_0x5dd8e8){const _0x22f72c=a286_0x22f7();return a286_0x4ef7=function(_0x4ef753,_0x4ab7dd){_0x4ef753=_0x4ef753-0x125;let _0x31e512=_0x22f72c[_0x4ef753];return _0x31e512;},a286_0x4ef7(_0xf5d2b3,_0x5dd8e8);}loggerBaileys[a286_0x515233(0x149)]=a286_0x515233(0x193);const sessions=[],retriesQrCodeMap=new Map(),getWbot=_0x12d9d2=>{const _0x550f10=a286_0x515233,_0x351128=sessions[_0x550f10(0x130)](_0x292b51=>_0x292b51['id']===_0x12d9d2);if(_0x351128===-0x1)throw new AppError_1[(_0x550f10(0x18c))](_0x550f10(0x18d));return sessions[_0x351128];};exports['getWbot']=getWbot;const restartWbot=async(_0x533600,_0x384be0)=>{const _0x11d8f6=a286_0x515233;try{const _0x3f4b44={'where':{'companyId':_0x533600},'attributes':['id']},_0x20fc60=await Whatsapp_1[_0x11d8f6(0x18c)]['findAll'](_0x3f4b44);_0x20fc60[_0x11d8f6(0x179)](async _0x31a611=>{const _0x3585a6=_0x11d8f6,_0x2d9d5b=sessions[_0x3585a6(0x130)](_0x1617c4=>_0x1617c4['id']===_0x31a611['id']);_0x2d9d5b!==-0x1&&sessions[_0x2d9d5b]['ws'][_0x3585a6(0x162)]();});}catch(_0x113442){logger_1[_0x11d8f6(0x12f)]['error'](_0x113442);}};exports[a286_0x515233(0x17a)]=restartWbot;const removeWbot=async(_0xfad6f3,_0x2edd1d=!![])=>{const _0x4ffbd5=a286_0x515233;try{const _0x330972=sessions[_0x4ffbd5(0x130)](_0x14955e=>_0x14955e['id']===_0xfad6f3);_0x330972!==-0x1&&(_0x2edd1d&&(sessions[_0x330972]['logout'](),sessions[_0x330972]['ws'][_0x4ffbd5(0x162)]()),sessions[_0x4ffbd5(0x152)](_0x330972,0x1));}catch(_0xfa8f6){logger_1[_0x4ffbd5(0x12f)][_0x4ffbd5(0x193)](_0xfa8f6);}};exports[a286_0x515233(0x12a)]=removeWbot,exports['dataMessages']={};function a286_0x22f7(){const _0x3fc022=['creds','type','Starting\x20session\x20','10829493NNFdSo','../services/WbotServices/StartWhatsAppSession','1082PxwelD','split','DD/MM/YYYY\x20HH:mm:ss','creds.update','status','call','node-cache','map','restartWbot','\x0a\x20\x20Contato\x20da\x20Mensagem\x20:\x20','\x0a\x20\x20\x0a\x20\x20','Adicionando\x20mensagem\x20para\x20pos\x20processamento:\x0a\x20\x20Mensagem\x20de\x20GRUPO\x20>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\x0a\x20\x20Data\x20e\x20hora\x20da\x20mensagem:\x20','get','../libs/cache','Browsers','messaging-history.set','Aguardando\x20conexão\x20para\x20iniciar\x20a\x20importação\x20de\x20mensagens:\x0a\x20\x20Whatsapp\x20nome:\x20','log','set','\x0a\x20\x20Selecionado\x20Data\x20de\x20inicio\x20de\x20importação:\x20','getWbot','../errors/AppError','using\x20WA\x20v','StartWhatsAppSession',',\x20isLatest:\x20','@whiskeysockets/baileys','default','ERR_WAPP_NOT_INITIALIZED','makeCacheableSignalKeyStore','whatsappSession','prototype','31633480qCJsYy','fetchLatestBaileysVersion','error','\x0a\x20\x20Tipo\x20da\x20mensagem\x20:\x20','637338rxOgGg','low','findByPk','Status:::::','removeAllListeners','getTypeMessage','__createBinding','floor','removeWbot','../helpers/addLogs','190ToknNq','initWASocket','getTime','logger','findIndex','CONNECTED','add','emit','preparingImportMessagesWppId','Adicionando\x20mensagem\x20para\x20pos\x20processamento:\x0a\x20\x20Não\x20é\x20Mensagem\x20de\x20GRUPO\x20>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\x0a\x20\x20Data\x20e\x20hora\x20da\x20mensagem:\x20','key','connection.update','qrcode','companyId','__importDefault','company-','date-fns','sessions:','statusCode','../services/WbotServices/wbotMessageListener','-whatsappSession','6159870UtXZOr','output','defineProperty','8iyOZkR','../utils/logger','push','../helpers/useMultiFileAuthState','33560bvjXur','level','.txt','Running','addLogs','importMessages-','messages','1130NOmzrp','__importStar','keys','splice','format','remoteJid','\x20\x0a\x20\x20Selecionado\x20Data\x20final\x20da\x20importação:\x20','info','PENDING','messageTimestamp','\x20\x0a\x20\x20','\x0a\x20\x20Criação\x20do\x20arquivo\x20de\x20logs:\x20','importOldMessages','DisconnectReason','importRecentMessages','create','configurable','useMultiFileAuthState','dataMessages','close','../services/BaileysServices/DeleteBaileysService','DISCONNECTED','user','hasOwnProperty','Session\x20QRCode\x20Generate\x20','3083934sXFYda','unshift','update','__esModule','findOne'];a286_0x22f7=function(){return _0x3fc022;};return a286_0x22f7();}const initWASocket=async _0x4d6d6b=>{return new Promise(async(_0x5932b6,_0x159f17)=>{try{((async()=>{const _0x3899c0=a286_0x4ef7,_0x24e9b1=(0x0,socket_1['getIO'])(),_0x5efeed=await Whatsapp_1[_0x3899c0(0x18c)][_0x3899c0(0x16c)]({'where':{'id':_0x4d6d6b['id']}});if(!_0x5efeed)return;const {id:_0x1471e4,name:_0x1b6ac6,provider:_0x53cf03}=_0x5efeed,{version:_0x5b1456,isLatest:_0x284c16}=await(0x0,baileys_1[_0x3899c0(0x192)])();logger_1['logger'][_0x3899c0(0x156)](_0x3899c0(0x188)+_0x5b1456['join']('.')+_0x3899c0(0x18a)+_0x284c16),logger_1[_0x3899c0(0x12f)][_0x3899c0(0x156)](_0x3899c0(0x16f)+_0x1b6ac6);let _0x37d6bd=0x0,_0x296647=null;const {state:_0x55bb8c,saveCreds:_0x5dd017}=await(0x0,useMultiFileAuthState_1[_0x3899c0(0x160)])(_0x4d6d6b),_0x3357ba=new node_cache_1['default']();_0x296647=(0x0,baileys_1[_0x3899c0(0x18c)])({'logger':loggerBaileys,'printQRInTerminal':![],'browser':baileys_1[_0x3899c0(0x180)]['appropriate']('Desktop'),'auth':{'creds':_0x55bb8c[_0x3899c0(0x16d)],'keys':(0x0,baileys_1[_0x3899c0(0x18e)])(_0x55bb8c[_0x3899c0(0x151)],logger_1[_0x3899c0(0x12f)])},'version':_0x5b1456,'defaultQueryTimeoutMs':0xea60,'msgRetryCounterCache':_0x3357ba,'shouldIgnoreJid':_0x379cc6=>(0x0,baileys_1['isJidBroadcast'])(_0x379cc6)}),setTimeout(async()=>{const _0x43cdd6=_0x3899c0,_0x4a6764=await Whatsapp_1[_0x43cdd6(0x18c)][_0x43cdd6(0x197)](_0x4d6d6b['id']);console[_0x43cdd6(0x183)](_0x43cdd6(0x125),_0x4a6764['status']);if(_0x4a6764?.[_0x43cdd6(0x15b)]&&_0x4a6764[_0x43cdd6(0x176)]===_0x43cdd6(0x131)){let _0x2d7413=new Date(_0x4a6764[_0x43cdd6(0x15b)])[_0x43cdd6(0x12e)](),_0x565eee=new Date(_0x4a6764[_0x43cdd6(0x15d)])[_0x43cdd6(0x12e)]();(0x0,addLogs_1[_0x43cdd6(0x14c)])({'fileName':_0x43cdd6(0x134)+_0x4d6d6b['id']+'.txt','forceNewFile':!![],'text':_0x43cdd6(0x182)+_0x4a6764['name']+'\x0a\x20\x20Whatsapp\x20Id:\x20'+_0x4a6764['id']+_0x43cdd6(0x15a)+(0x0,moment_1[_0x43cdd6(0x18c)])()[_0x43cdd6(0x153)](_0x43cdd6(0x174))+_0x43cdd6(0x185)+(0x0,moment_1[_0x43cdd6(0x18c)])(_0x2d7413)['format'](_0x43cdd6(0x174))+_0x43cdd6(0x155)+(0x0,moment_1[_0x43cdd6(0x18c)])(_0x565eee)[_0x43cdd6(0x153)](_0x43cdd6(0x174))+_0x43cdd6(0x159)});const _0x1958ad=new Date()[_0x43cdd6(0x12e)]();await _0x4a6764[_0x43cdd6(0x16a)]({'statusImportMessages':_0x1958ad}),_0x296647['ev']['on'](_0x43cdd6(0x181),async _0x40b571=>{const _0x417f88=_0x43cdd6,_0x295325=new Date()[_0x417f88(0x12e)]();await _0x4a6764[_0x417f88(0x16a)]({'statusImportMessages':_0x295325});const _0x4e2772=_0x4d6d6b['id'];let _0x2ce8f1=_0x40b571[_0x417f88(0x14e)],_0x3a6b22=[];_0x2ce8f1['forEach'](_0x12f62c=>{const _0x30a6d5=_0x417f88,_0x196333=Math[_0x30a6d5(0x129)](_0x12f62c[_0x30a6d5(0x158)][_0x30a6d5(0x196)]*0x3e8);(0x0,wbotMessageListener_1['isValidMsg'])(_0x12f62c)&&_0x2d7413<_0x196333&&_0x565eee>_0x196333&&(_0x12f62c[_0x30a6d5(0x136)]?.[_0x30a6d5(0x154)][_0x30a6d5(0x173)]('@')[0x1]!='g.us'?((0x0,addLogs_1[_0x30a6d5(0x14c)])({'fileName':_0x30a6d5(0x134)+_0x4d6d6b['id']+_0x30a6d5(0x14a),'text':_0x30a6d5(0x135)+(0x0,moment_1[_0x30a6d5(0x18c)])(_0x196333)[_0x30a6d5(0x153)](_0x30a6d5(0x174))+_0x30a6d5(0x17b)+_0x12f62c[_0x30a6d5(0x136)]?.[_0x30a6d5(0x154)]+_0x30a6d5(0x194)+(0x0,wbotMessageListener_1[_0x30a6d5(0x127)])(_0x12f62c)+_0x30a6d5(0x17c)}),_0x3a6b22[_0x30a6d5(0x146)](_0x12f62c)):_0x4a6764?.['importOldMessagesGroups']&&((0x0,addLogs_1['addLogs'])({'fileName':_0x30a6d5(0x134)+_0x4d6d6b['id']+_0x30a6d5(0x14a),'text':_0x30a6d5(0x17d)+(0x0,moment_1['default'])(_0x196333)['format'](_0x30a6d5(0x174))+'\x0a\x20\x20Contato\x20da\x20Mensagem\x20:\x20'+_0x12f62c[_0x30a6d5(0x136)]?.['remoteJid']+'\x0a\x20\x20Tipo\x20da\x20mensagem\x20:\x20'+(0x0,wbotMessageListener_1[_0x30a6d5(0x127)])(_0x12f62c)+_0x30a6d5(0x17c)}),_0x3a6b22[_0x30a6d5(0x146)](_0x12f62c)));}),!exports['dataMessages']?.[_0x4e2772]?(exports['dataMessages'][_0x4e2772]=[],exports['dataMessages'][_0x4e2772]['unshift'](..._0x3a6b22)):exports[_0x417f88(0x161)][_0x4e2772][_0x417f88(0x169)](..._0x3a6b22),setTimeout(async()=>{const _0x2d98f7=_0x417f88,_0x115bc8=await Whatsapp_1['default'][_0x2d98f7(0x197)](_0x4e2772);_0x24e9b1[_0x2d98f7(0x133)](_0x2d98f7(0x14d)+_0x115bc8[_0x2d98f7(0x139)],{'action':'update','status':{'this':-0x1,'all':-0x1}}),_0x24e9b1[_0x2d98f7(0x133)](_0x2d98f7(0x18f),{'action':'update','session':_0x115bc8});},0x1f4),setTimeout(async()=>{const _0x574609=_0x417f88,_0x2af100=await Whatsapp_1[_0x574609(0x18c)][_0x574609(0x197)](_0x4e2772);if(_0x2af100?.['importOldMessages']){let _0x21a38e=!isNaN(new Date(Math['floor'](parseInt(_0x2af100?.['statusImportMessages'])))['getTime']());if(_0x21a38e){const _0x5dd1cb=new Date(Math['floor'](parseInt(_0x2af100?.['statusImportMessages'])))[_0x574609(0x12e)](),_0x347be7=+(0x0,date_fns_1[_0x574609(0x132)])(_0x5dd1cb,{'seconds':+0x2d})[_0x574609(0x12e)]();if(_0x347be7<new Date()[_0x574609(0x12e)]())(0x0,ImportWhatsAppMessageService_1['default'])(_0x2af100['id']),_0x2af100['update']({'statusImportMessages':_0x574609(0x14b)});else{}}}_0x24e9b1[_0x574609(0x133)](_0x574609(0x18f),{'action':_0x574609(0x16a),'session':_0x2af100});},0x3e8*0x2d);});}},0x9c4),_0x296647['ev']['on']('connection.update',async({connection:_0x590105,lastDisconnect:_0x2a5063,qr:_0x45f6de})=>{const _0x8d02db=_0x3899c0;logger_1[_0x8d02db(0x12f)]['info']('Socket\x20\x20'+_0x1b6ac6+'\x20Connection\x20Update\x20'+(_0x590105||'')+'\x20'+(_0x2a5063||''));_0x590105===_0x8d02db(0x162)&&(_0x2a5063?.[_0x8d02db(0x193)]?.[_0x8d02db(0x142)]?.[_0x8d02db(0x13e)]===0x193&&(await _0x4d6d6b[_0x8d02db(0x16a)]({'status':_0x8d02db(0x157),'session':''}),await(0x0,DeleteBaileysService_1[_0x8d02db(0x18c)])(_0x4d6d6b['id']),await cache_1[_0x8d02db(0x18c)]['delFromPattern'](_0x8d02db(0x13d)+_0x4d6d6b['id']+':*'),_0x24e9b1[_0x8d02db(0x133)](_0x8d02db(0x13b)+_0x4d6d6b[_0x8d02db(0x139)]+'-whatsappSession',{'action':_0x8d02db(0x16a),'session':_0x4d6d6b}),(0x0,exports[_0x8d02db(0x12a)])(_0x1471e4,![])),_0x2a5063?.['error']?.[_0x8d02db(0x142)]?.[_0x8d02db(0x13e)]!==baileys_1[_0x8d02db(0x15c)]['loggedOut']?((0x0,exports['removeWbot'])(_0x1471e4,![]),setTimeout(()=>(0x0,StartWhatsAppSession_1[_0x8d02db(0x189)])(_0x4d6d6b,_0x4d6d6b[_0x8d02db(0x139)]),0x7d0)):(await _0x4d6d6b[_0x8d02db(0x16a)]({'status':_0x8d02db(0x157),'session':''}),await(0x0,DeleteBaileysService_1[_0x8d02db(0x18c)])(_0x4d6d6b['id']),await cache_1[_0x8d02db(0x18c)]['delFromPattern'](_0x8d02db(0x13d)+_0x4d6d6b['id']+':*'),_0x24e9b1[_0x8d02db(0x133)]('company-'+_0x4d6d6b[_0x8d02db(0x139)]+_0x8d02db(0x140),{'action':_0x8d02db(0x16a),'session':_0x4d6d6b}),(0x0,exports[_0x8d02db(0x12a)])(_0x1471e4,![]),setTimeout(()=>(0x0,StartWhatsAppSession_1[_0x8d02db(0x189)])(_0x4d6d6b,_0x4d6d6b['companyId']),0x7d0)));if(_0x590105==='open'){await _0x4d6d6b[_0x8d02db(0x16a)]({'status':_0x8d02db(0x131),'qrcode':'','retries':0x0,'number':_0x296647[_0x8d02db(0x16e)]==='md'?(0x0,baileys_1['jidNormalizedUser'])(_0x296647[_0x8d02db(0x165)]['id'])['split']('@')[0x0]:'-'}),_0x24e9b1[_0x8d02db(0x133)](_0x8d02db(0x13b)+_0x4d6d6b[_0x8d02db(0x139)]+_0x8d02db(0x140),{'action':_0x8d02db(0x16a),'session':_0x4d6d6b});const _0xa05a94=sessions['findIndex'](_0x57406e=>_0x57406e['id']===_0x4d6d6b['id']);_0xa05a94===-0x1&&(_0x296647['id']=_0x4d6d6b['id'],sessions[_0x8d02db(0x146)](_0x296647)),_0x5932b6(_0x296647);}if(_0x45f6de!==undefined){if(retriesQrCodeMap[_0x8d02db(0x17e)](_0x1471e4)&&retriesQrCodeMap[_0x8d02db(0x17e)](_0x1471e4)>=0x3)await _0x5efeed[_0x8d02db(0x16a)]({'status':_0x8d02db(0x164),'qrcode':''}),await(0x0,DeleteBaileysService_1[_0x8d02db(0x18c)])(_0x5efeed['id']),await cache_1[_0x8d02db(0x18c)]['delFromPattern'](_0x8d02db(0x13d)+_0x4d6d6b['id']+':*'),_0x24e9b1[_0x8d02db(0x133)](_0x8d02db(0x13b)+_0x4d6d6b['companyId']+_0x8d02db(0x140),{'action':_0x8d02db(0x16a),'session':_0x5efeed}),_0x296647['ev'][_0x8d02db(0x126)](_0x8d02db(0x137)),_0x296647['ws']['close'](),_0x296647=null,retriesQrCodeMap['delete'](_0x1471e4);else{logger_1[_0x8d02db(0x12f)]['info'](_0x8d02db(0x167)+_0x1b6ac6),retriesQrCodeMap[_0x8d02db(0x184)](_0x1471e4,_0x37d6bd+=0x1),await _0x4d6d6b[_0x8d02db(0x16a)]({'qrcode':_0x45f6de,'status':_0x8d02db(0x138),'retries':0x0,'number':''});const _0x2db032=sessions[_0x8d02db(0x130)](_0x4f367c=>_0x4f367c['id']===_0x4d6d6b['id']);_0x2db032===-0x1&&(_0x296647['id']=_0x4d6d6b['id'],sessions[_0x8d02db(0x146)](_0x296647)),_0x24e9b1[_0x8d02db(0x133)]('company-'+_0x4d6d6b[_0x8d02db(0x139)]+_0x8d02db(0x140),{'action':_0x8d02db(0x16a),'session':_0x4d6d6b});}}}),_0x296647['ev']['on'](_0x3899c0(0x175),_0x5dd017);})());}catch(_0x26989a){Sentry['captureException'](_0x26989a),console['log'](_0x26989a),_0x159f17(_0x26989a);}});};exports['initWASocket']=initWASocket;