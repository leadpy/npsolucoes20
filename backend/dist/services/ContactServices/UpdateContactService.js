'use strict';const a463_0x261514=a463_0x4d26;(function(_0x3f182e,_0x4175ee){const _0x2fd21f=a463_0x4d26,_0x3644f5=_0x3f182e();while(!![]){try{const _0x1922c7=parseInt(_0x2fd21f(0x1c1))/0x1+-parseInt(_0x2fd21f(0x1b2))/0x2*(-parseInt(_0x2fd21f(0x1cb))/0x3)+-parseInt(_0x2fd21f(0x1c8))/0x4*(-parseInt(_0x2fd21f(0x1ac))/0x5)+parseInt(_0x2fd21f(0x1c5))/0x6*(parseInt(_0x2fd21f(0x1bd))/0x7)+parseInt(_0x2fd21f(0x1c4))/0x8*(parseInt(_0x2fd21f(0x1b9))/0x9)+parseInt(_0x2fd21f(0x1bf))/0xa*(-parseInt(_0x2fd21f(0x1c6))/0xb)+-parseInt(_0x2fd21f(0x1af))/0xc;if(_0x1922c7===_0x4175ee)break;else _0x3644f5['push'](_0x3644f5['shift']());}catch(_0x322fe9){_0x3644f5['push'](_0x3644f5['shift']());}}}(a463_0x1613,0x8448a));var __importDefault=this&&this[a463_0x261514(0x1b6)]||function(_0x62fc5){const _0x6e8226=a463_0x261514;return _0x62fc5&&_0x62fc5[_0x6e8226(0x1ca)]?_0x62fc5:{'default':_0x62fc5};};function a463_0x4d26(_0x4abcb8,_0x5aa40d){const _0x161343=a463_0x1613();return a463_0x4d26=function(_0x4d26fd,_0x4db8e3){_0x4d26fd=_0x4d26fd-0x1aa;let _0x4a8390=_0x161343[_0x4d26fd];return _0x4a8390;},a463_0x4d26(_0x4abcb8,_0x5aa40d);}Object[a463_0x261514(0x1b3)](exports,a463_0x261514(0x1ca),{'value':!![]});const AppError_1=__importDefault(require(a463_0x261514(0x1c2))),Contact_1=__importDefault(require(a463_0x261514(0x1ab))),ContactCustomField_1=__importDefault(require(a463_0x261514(0x1ce))),UpdateContactService=async({contactData:_0x58f1f1,contactId:_0x559820,companyId:_0x3b52d1})=>{const _0x3583a7=a463_0x261514,{email:_0x4a7236,name:_0x36dc71,number:_0x141a13,extraInfo:_0x4fe982,acceptAudioMessage:_0x1b02a1,active:_0x1626c3,disableBot:_0x419599,remoteJid:_0x826ef5}=_0x58f1f1,_0x175694=await Contact_1[_0x3583a7(0x1bc)][_0x3583a7(0x1ba)]({'where':{'id':_0x559820},'attributes':['id',_0x3583a7(0x1c7),_0x3583a7(0x1be),_0x3583a7(0x1ad),'email',_0x3583a7(0x1c3),_0x3583a7(0x1b5),'active',_0x3583a7(0x1b7),_0x3583a7(0x1b8),_0x3583a7(0x1b0)],'include':[_0x3583a7(0x1ae)]});if(_0x175694?.[_0x3583a7(0x1c3)]!==_0x3b52d1)throw new AppError_1['default']('Não\x20é\x20possível\x20alterar\x20registros\x20de\x20outra\x20empresa');if(!_0x175694)throw new AppError_1[(_0x3583a7(0x1bc))](_0x3583a7(0x1bb),0x194);return _0x4fe982&&(await Promise[_0x3583a7(0x1cf)](_0x4fe982['map'](async _0x2a9ff6=>{const _0x53e024=_0x3583a7;await ContactCustomField_1['default'][_0x53e024(0x1b1)]({..._0x2a9ff6,'contactId':_0x175694['id']});})),await Promise[_0x3583a7(0x1cf)](_0x175694['extraInfo'][_0x3583a7(0x1cc)](async _0x24d7bd=>{const _0x540757=_0x3583a7,_0x55309d=_0x4fe982[_0x540757(0x1c9)](_0x445c30=>_0x445c30['id']===_0x24d7bd['id']);_0x55309d===-0x1&&await ContactCustomField_1[_0x540757(0x1bc)][_0x540757(0x1aa)]({'where':{'id':_0x24d7bd['id']}});}))),await _0x175694[_0x3583a7(0x1cd)]({'name':_0x36dc71,'number':_0x141a13,'email':_0x4a7236,'acceptAudioMessage':_0x1b02a1,'active':_0x1626c3,'disableBot':_0x419599,'remoteJid':_0x826ef5}),await _0x175694['reload']({'attributes':['id',_0x3583a7(0x1c7),_0x3583a7(0x1ad),_0x3583a7(0x1be),_0x3583a7(0x1c0),_0x3583a7(0x1b5),_0x3583a7(0x1b4),_0x3583a7(0x1b7),_0x3583a7(0x1b8)],'include':[_0x3583a7(0x1ae)]}),_0x175694;};exports['default']=UpdateContactService;function a463_0x1613(){const _0x5ce307=['5938245xlejET','findOne','ERR_NO_CONTACT_FOUND','default','5892943KVmYcY','number','100BOhdDk','email','452947BdrZyS','../../errors/AppError','companyId','8Hhjqya','6QRzXYc','777645QCTcYT','name','411524cxAjpQ','findIndex','__esModule','21VmWpEq','map','update','../../models/ContactCustomField','all','destroy','../../models/Contact','5NpfCHi','channel','extraInfo','14584020iSpkpY','urlPicture','upsert','116182QiAjwA','defineProperty','active','acceptAudioMessage','__importDefault','profilePicUrl','remoteJid'];a463_0x1613=function(){return _0x5ce307;};return a463_0x1613();}