'use strict';const a471_0x1ec60c=a471_0x46f9;(function(_0x54140e,_0x135033){const _0x51b845=a471_0x46f9,_0x5a425c=_0x54140e();while(!![]){try{const _0x3873db=parseInt(_0x51b845(0xc1))/0x1+-parseInt(_0x51b845(0xb2))/0x2+-parseInt(_0x51b845(0xb4))/0x3*(parseInt(_0x51b845(0xbc))/0x4)+-parseInt(_0x51b845(0xbd))/0x5*(parseInt(_0x51b845(0xc2))/0x6)+parseInt(_0x51b845(0xba))/0x7+-parseInt(_0x51b845(0xb5))/0x8*(parseInt(_0x51b845(0xb3))/0x9)+parseInt(_0x51b845(0xc0))/0xa;if(_0x3873db===_0x135033)break;else _0x5a425c['push'](_0x5a425c['shift']());}catch(_0x216ab2){_0x5a425c['push'](_0x5a425c['shift']());}}}(a471_0x21dc,0x2066b));var __importDefault=this&&this[a471_0x1ec60c(0xbe)]||function(_0x4770c3){const _0x16ab7f=a471_0x1ec60c;return _0x4770c3&&_0x4770c3[_0x16ab7f(0xae)]?_0x4770c3:{'default':_0x4770c3};};Object[a471_0x1ec60c(0xb9)](exports,a471_0x1ec60c(0xae),{'value':!![]});const AppError_1=__importDefault(require(a471_0x1ec60c(0xb8))),Contact_1=__importDefault(require(a471_0x1ec60c(0xbf))),ToggleDisableBotContactService=async({contactId:_0x31845d})=>{const _0x4a50f1=a471_0x1ec60c,_0x323506=await Contact_1[_0x4a50f1(0xc3)][_0x4a50f1(0xb0)]({'where':{'id':_0x31845d},'attributes':['id','disableBot']});if(!_0x323506)throw new AppError_1['default'](_0x4a50f1(0xb6),0x194);const _0x20900f=_0x323506?.[_0x4a50f1(0xbb)]?![]:!![];return await _0x323506[_0x4a50f1(0xc5)]({'disableBot':_0x20900f}),await _0x323506['reload']({'attributes':['id',_0x4a50f1(0xb1),'number','email',_0x4a50f1(0xb7),'companyId',_0x4a50f1(0xc6),_0x4a50f1(0xbb),_0x4a50f1(0xc4)],'include':[_0x4a50f1(0xaf)]}),_0x323506;};function a471_0x46f9(_0x45a6f5,_0x115178){const _0x21dc1d=a471_0x21dc();return a471_0x46f9=function(_0x46f9ae,_0x4188c5){_0x46f9ae=_0x46f9ae-0xae;let _0x153c6f=_0x21dc1d[_0x46f9ae];return _0x153c6f;},a471_0x46f9(_0x45a6f5,_0x115178);}function a471_0x21dc(){const _0x2782d0=['__importDefault','../../models/Contact','3434110xZdNnB','257538qKxKlY','162TNQRzQ','default','urlPicture','update','acceptAudioMessage','__esModule','extraInfo','findOne','name','319122wAjoyu','9JwnfHh','2271lmRmpu','498776uslBWR','ERR_NO_CONTACT_FOUND','profilePicUrl','../../errors/AppError','defineProperty','31353ZPJoyN','disableBot','1304mLLaad','745ggROcR'];a471_0x21dc=function(){return _0x2782d0;};return a471_0x21dc();}exports[a471_0x1ec60c(0xc3)]=ToggleDisableBotContactService;