'use strict';const a545_0x593a72=a545_0x8977;(function(_0xd2ef04,_0x33ece3){const _0x239ab3=a545_0x8977,_0x1b17da=_0xd2ef04();while(!![]){try{const _0x442d5c=parseInt(_0x239ab3(0xe4))/0x1+parseInt(_0x239ab3(0xcd))/0x2*(parseInt(_0x239ab3(0xef))/0x3)+-parseInt(_0x239ab3(0xfa))/0x4*(-parseInt(_0x239ab3(0x107))/0x5)+parseInt(_0x239ab3(0x109))/0x6+-parseInt(_0x239ab3(0xf2))/0x7*(parseInt(_0x239ab3(0x10b))/0x8)+parseInt(_0x239ab3(0xf3))/0x9+-parseInt(_0x239ab3(0xde))/0xa;if(_0x442d5c===_0x33ece3)break;else _0x1b17da['push'](_0x1b17da['shift']());}catch(_0x990e5a){_0x1b17da['push'](_0x1b17da['shift']());}}}(a545_0x4df6,0xbc187));var __createBinding=this&&this['__createBinding']||(Object[a545_0x593a72(0xd0)]?function(_0x45c12e,_0x13367a,_0x4204ca,_0x8443c1){const _0x2d1fc2=a545_0x593a72;if(_0x8443c1===undefined)_0x8443c1=_0x4204ca;var _0x2906bf=Object[_0x2d1fc2(0xfe)](_0x13367a,_0x4204ca);(!_0x2906bf||(_0x2d1fc2(0xdd)in _0x2906bf?!_0x13367a[_0x2d1fc2(0xfc)]:_0x2906bf[_0x2d1fc2(0x105)]||_0x2906bf[_0x2d1fc2(0xf8)]))&&(_0x2906bf={'enumerable':!![],'get':function(){return _0x13367a[_0x4204ca];}}),Object[_0x2d1fc2(0xf4)](_0x45c12e,_0x8443c1,_0x2906bf);}:function(_0x2e92e9,_0x1782c3,_0x3fb3a7,_0x3990c5){if(_0x3990c5===undefined)_0x3990c5=_0x3fb3a7;_0x2e92e9[_0x3990c5]=_0x1782c3[_0x3fb3a7];}),__setModuleDefault=this&&this[a545_0x593a72(0xf7)]||(Object[a545_0x593a72(0xd0)]?function(_0x472bae,_0x268308){const _0x269b7b=a545_0x593a72;Object['defineProperty'](_0x472bae,_0x269b7b(0xc8),{'enumerable':!![],'value':_0x268308});}:function(_0x53cf79,_0xfa661c){const _0xc66eb7=a545_0x593a72;_0x53cf79[_0xc66eb7(0xc8)]=_0xfa661c;}),__importStar=this&&this[a545_0x593a72(0xd3)]||function(_0x4c9da1){const _0x1ecc90=a545_0x593a72;if(_0x4c9da1&&_0x4c9da1[_0x1ecc90(0xfc)])return _0x4c9da1;var _0x52bc30={};if(_0x4c9da1!=null){for(var _0x52246f in _0x4c9da1)if(_0x52246f!==_0x1ecc90(0xc8)&&Object[_0x1ecc90(0xcc)][_0x1ecc90(0xee)][_0x1ecc90(0xe8)](_0x4c9da1,_0x52246f))__createBinding(_0x52bc30,_0x4c9da1,_0x52246f);}return __setModuleDefault(_0x52bc30,_0x4c9da1),_0x52bc30;},__importDefault=this&&this['__importDefault']||function(_0x48b4a1){const _0x9b2917=a545_0x593a72;return _0x48b4a1&&_0x48b4a1[_0x9b2917(0xfc)]?_0x48b4a1:{'default':_0x48b4a1};};Object[a545_0x593a72(0xf4)](exports,'__esModule',{'value':!![]}),exports['getMessageOptions']=void 0x0;const Sentry=__importStar(require(a545_0x593a72(0x100))),fs_1=__importStar(require('fs')),child_process_1=require(a545_0x593a72(0xce)),path_1=__importDefault(require(a545_0x593a72(0xd2))),ffmpeg_1=__importDefault(require(a545_0x593a72(0xff))),AppError_1=__importDefault(require(a545_0x593a72(0xfb))),mime_types_1=__importDefault(require(a545_0x593a72(0x102))),Contact_1=__importDefault(require('../../models/Contact')),wbot_1=require(a545_0x593a72(0xd9)),CreateMessageService_1=__importDefault(require(a545_0x593a72(0xd7))),Mustache_1=__importDefault(require(a545_0x593a72(0xfd))),publicFolder=path_1[a545_0x593a72(0xc8)][a545_0x593a72(0x104)](__dirname,'..','..','..',a545_0x593a72(0x101)),processAudio=async(_0x4b135f,_0x1b14af)=>{const _0x2c9511=a545_0x593a72,_0xa898c3=publicFolder+_0x2c9511(0xe6)+_0x1b14af+'/'+new Date()[_0x2c9511(0xcf)]()+'.m4a';return new Promise((_0x154127,_0xb0199a)=>{const _0x53b907=_0x2c9511;(0x0,child_process_1['exec'])(ffmpeg_1['default'][_0x53b907(0xd2)]+_0x53b907(0xf0)+_0x4b135f+_0x53b907(0xe1)+_0xa898c3+_0x53b907(0xc7),(_0x4ba8bc,_0x34b739,_0x450835)=>{if(_0x4ba8bc)_0xb0199a(_0x4ba8bc);_0x154127(_0xa898c3);});});},processAudioFile=async(_0x2c1806,_0x5623fc)=>{const _0x3dfd94=a545_0x593a72,_0x18db73=publicFolder+_0x3dfd94(0xe6)+_0x5623fc+'/'+new Date()[_0x3dfd94(0xcf)]()+_0x3dfd94(0xea);return new Promise((_0x54f7b1,_0x246f00)=>{const _0x309d84=_0x3dfd94;(0x0,child_process_1[_0x309d84(0xed)])(ffmpeg_1[_0x309d84(0xc8)][_0x309d84(0xd2)]+'\x20-i\x20'+_0x2c1806+'\x20-vn\x20-ar\x2044100\x20-ac\x202\x20-b:a\x20192k\x20'+_0x18db73,(_0x583b45,_0x11ef68,_0x29e54c)=>{if(_0x583b45)_0x246f00(_0x583b45);_0x54f7b1(_0x18db73);});});},getMessageOptions=async(_0x4c49ca,_0x588cc4,_0x1a3188,_0x47bf68)=>{const _0x11cc17=a545_0x593a72,_0x33631e=mime_types_1[_0x11cc17(0xc8)][_0x11cc17(0xc9)](_0x588cc4),_0x449de6=_0x33631e[_0x11cc17(0xd8)]('/')[0x0];try{if(!_0x33631e)throw new Error('Invalid\x20mimetype');let _0x3909c4;if(_0x449de6===_0x11cc17(0x103))_0x3909c4={'video':fs_1[_0x11cc17(0xc8)]['readFileSync'](_0x588cc4),'caption':_0x47bf68?_0x47bf68:null,'fileName':_0x4c49ca};else{if(_0x449de6===_0x11cc17(0xca)){const _0x2b0aca=!![],_0x1658e5=await processAudio(_0x588cc4,_0x1a3188);_0x2b0aca?_0x3909c4={'audio':fs_1[_0x11cc17(0xc8)]['readFileSync'](_0x1658e5),'mimetype':_0x11cc17(0xdb),'ptt':!![]}:_0x3909c4={'audio':fs_1[_0x11cc17(0xc8)][_0x11cc17(0xc5)](_0x1658e5),'mimetype':_0x2b0aca?_0x11cc17(0xdb):_0x33631e,'ptt':!![]};}else{if(_0x449de6===_0x11cc17(0xec))_0x3909c4={'document':fs_1['default'][_0x11cc17(0xc5)](_0x588cc4),'caption':_0x47bf68?_0x47bf68:null,'fileName':_0x4c49ca,'mimetype':_0x33631e};else _0x449de6===_0x11cc17(0x108)?_0x3909c4={'document':fs_1[_0x11cc17(0xc8)]['readFileSync'](_0x588cc4),'caption':_0x47bf68?_0x47bf68:null,'fileName':_0x4c49ca,'mimetype':_0x33631e}:_0x3909c4={'image':fs_1[_0x11cc17(0xc8)]['readFileSync'](_0x588cc4),'caption':_0x47bf68?_0x47bf68:_0x4c49ca};}}return _0x3909c4;}catch(_0x14dd72){return Sentry[_0x11cc17(0x106)](_0x14dd72),console[_0x11cc17(0xe5)](_0x14dd72),null;}};exports[a545_0x593a72(0xeb)]=getMessageOptions;function a545_0x4df6(){const _0x55bb98=['configurable','update','779084WQgbMk','../../errors/AppError','__esModule','../../helpers/Mustache','getOwnPropertyDescriptor','@ffmpeg-installer/ffmpeg','@sentry/node','public','mime-types','video','resolve','writable','captureException','10wyLkkx','application','1365630gRADLD','replace','88YUxrTh','readFileSync','filename','\x20-y','default','lookup','audio','unlinkSync','prototype','2nSfpSy','child_process','getTime','create','substring','path','__importStar','📂\x20Documento','getWbot','number','../MessageServices/CreateMessageService','split','../../libs/wbot','includes','audio/mp4','🎥\x20Arquivo\x20de\x20vídeo','get','25371190bBZqzy','contactId','g.us','\x20-vn\x20-ab\x20128k\x20-ar\x2044100\x20-f\x20ipod\x20','mimetype','companyId','1112954XSwOrv','log','/company','ERR_SENDING_WAPP_MSG','call','remoteJid','.mp3','getMessageOptions','document','exec','hasOwnProperty','2092197mCABGT','\x20-i\x20','whatsappId','325339DynnfQ','12521745FQGvyO','defineProperty','originalname','📎\x20Outros\x20anexos','__setModuleDefault'];a545_0x4df6=function(){return _0x55bb98;};return a545_0x4df6();}const SendWhatsAppMedia=async({media:_0xa07d8,ticket:_0x222e11,body:_0x282a0a,isPrivate:_0x1adbb0})=>{const _0x3ecc1e=a545_0x593a72;try{const _0x4db869=await(0x0,wbot_1[_0x3ecc1e(0xd5)])(_0x222e11[_0x3ecc1e(0xf1)]),_0x1207ed=_0x222e11[_0x3ecc1e(0xe3)]['toString'](),_0x37ec76=_0xa07d8[_0x3ecc1e(0xd2)],_0x1976ae=_0xa07d8[_0x3ecc1e(0xe2)][_0x3ecc1e(0xd8)]('/')[0x0];let _0x154d16,_0x2e2017='';const _0x14549a=(0x0,Mustache_1['default'])(_0x282a0a,_0x222e11);if(_0x1976ae===_0x3ecc1e(0x103))_0x154d16={'video':fs_1['default'][_0x3ecc1e(0xc5)](_0x37ec76),'caption':_0x14549a,'fileName':_0xa07d8[_0x3ecc1e(0xf5)]['replace']('/','-')},_0x2e2017=_0x3ecc1e(0xdc);else{if(_0x1976ae===_0x3ecc1e(0xca)){const _0x5c8f2e=!![];if(_0x5c8f2e){const _0xb46bfe=await processAudio(_0xa07d8[_0x3ecc1e(0xd2)],_0x1207ed);_0x154d16={'audio':fs_1[_0x3ecc1e(0xc8)]['readFileSync'](_0xb46bfe),'mimetype':_0x5c8f2e?_0x3ecc1e(0xdb):_0xa07d8[_0x3ecc1e(0xe2)],'ptt':!![]},(0x0,fs_1[_0x3ecc1e(0xcb)])(_0xb46bfe);}else{const _0x1afd8a=await processAudio(_0xa07d8[_0x3ecc1e(0xd2)],_0x1207ed);_0x154d16={'audio':fs_1[_0x3ecc1e(0xc8)][_0x3ecc1e(0xc5)](_0x1afd8a),'mimetype':_0x3ecc1e(0xdb),'ptt':!![]},(0x0,fs_1['unlinkSync'])(_0x1afd8a);}_0x2e2017='🎵\x20Arquivo\x20de\x20áudio';}else{if(_0x1976ae===_0x3ecc1e(0xec)||_0x1976ae==='text')_0x154d16={'document':fs_1[_0x3ecc1e(0xc8)][_0x3ecc1e(0xc5)](_0x37ec76),'caption':_0x14549a,'fileName':_0xa07d8['originalname'][_0x3ecc1e(0x10a)]('/','-'),'mimetype':_0xa07d8['mimetype']},_0x2e2017=_0x3ecc1e(0xd4);else _0x1976ae===_0x3ecc1e(0x108)?(_0x154d16={'document':fs_1[_0x3ecc1e(0xc8)][_0x3ecc1e(0xc5)](_0x37ec76),'caption':_0x14549a,'fileName':_0xa07d8[_0x3ecc1e(0xf5)][_0x3ecc1e(0x10a)]('/','-'),'mimetype':_0xa07d8[_0x3ecc1e(0xe2)]},_0x2e2017=_0x3ecc1e(0xf6)):(_0x154d16={'image':fs_1['default'][_0x3ecc1e(0xc5)](_0x37ec76),'caption':_0x14549a},_0x2e2017=_0x3ecc1e(0xf6));}}if(_0x1adbb0){const _0x128704={'wid':'PVT'+_0x1207ed+_0x222e11['id']+_0x282a0a[_0x3ecc1e(0xd1)](0x0,0x6),'ticketId':_0x222e11['id'],'contactId':undefined,'body':_0x2e2017,'fromMe':!![],'mediaUrl':_0xa07d8['filename'],'mediaType':_0xa07d8[_0x3ecc1e(0xe2)][_0x3ecc1e(0xd8)]('/')[0x0],'read':!![],'quotedMsgId':null,'ack':0x2,'remoteJid':null,'participant':null,'dataJson':null,'ticketTrakingId':null,'isPrivate':_0x1adbb0};await(0x0,CreateMessageService_1['default'])({'messageData':_0x128704,'companyId':_0x222e11[_0x3ecc1e(0xe3)]});return;}const _0x530cf3=await Contact_1[_0x3ecc1e(0xc8)]['findByPk'](_0x222e11[_0x3ecc1e(0xdf)]);let _0x516124;_0x530cf3[_0x3ecc1e(0xe9)]&&_0x530cf3[_0x3ecc1e(0xe9)]!==''&&_0x530cf3['remoteJid'][_0x3ecc1e(0xda)]('@')?_0x516124=_0x530cf3[_0x3ecc1e(0xe9)]:_0x516124=_0x530cf3[_0x3ecc1e(0xd6)]+'@'+(_0x222e11['isGroup']?_0x3ecc1e(0xe0):'s.whatsapp.net');const _0x3a6c0b=await _0x4db869['sendMessage'](_0x516124,{..._0x154d16});return await _0x222e11[_0x3ecc1e(0xf9)]({'lastMessage':(0x0,Mustache_1[_0x3ecc1e(0xc8)])(_0x282a0a!==_0xa07d8[_0x3ecc1e(0xc6)]?(0x0,Mustache_1['default'])(_0x282a0a,_0x222e11):_0x2e2017,_0x222e11),'imported':null}),_0x3a6c0b;}catch(_0x1d9125){Sentry['captureException'](_0x1d9125),console['log'](_0x1d9125);throw new AppError_1[(_0x3ecc1e(0xc8))](_0x3ecc1e(0xe7));}};function a545_0x8977(_0x4c76ba,_0x174d1c){const _0x4df6d6=a545_0x4df6();return a545_0x8977=function(_0x897730,_0x451633){_0x897730=_0x897730-0xc5;let _0x258a08=_0x4df6d6[_0x897730];return _0x258a08;},a545_0x8977(_0x4c76ba,_0x174d1c);}exports[a545_0x593a72(0xc8)]=SendWhatsAppMedia;