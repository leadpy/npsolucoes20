'use strict';const a621_0x2d0dc9=a621_0x2cec;function a621_0x3ff0(){const _0xe2963c=['default','544uMwNQt','5205612CwiMSk','../../models/Whatsapp','175023ecWiDH','../../models/Queue','attributes','884433TawPtt','170WvJiJI','prompt','__importDefault','name','../../models/Prompt','254778OJICGq','36QpfZJM','740646xDRGhd','session','5533626ofCLDV','color','63012TmyhVS','65hjVhsq','__esModule','greetingMessage'];a621_0x3ff0=function(){return _0xe2963c;};return a621_0x3ff0();}(function(_0x4ba9c0,_0x6a4deb){const _0x46ac6c=a621_0x2cec,_0x293b43=_0x4ba9c0();while(!![]){try{const _0x3c13c6=parseInt(_0x46ac6c(0x131))/0x1+parseInt(_0x46ac6c(0x12f))/0x2*(parseInt(_0x46ac6c(0x130))/0x3)+-parseInt(_0x46ac6c(0x135))/0x4*(-parseInt(_0x46ac6c(0x136))/0x5)+-parseInt(_0x46ac6c(0x13b))/0x6+-parseInt(_0x46ac6c(0x133))/0x7+-parseInt(_0x46ac6c(0x13a))/0x8*(parseInt(_0x46ac6c(0x13d))/0x9)+-parseInt(_0x46ac6c(0x141))/0xa*(-parseInt(_0x46ac6c(0x140))/0xb);if(_0x3c13c6===_0x6a4deb)break;else _0x293b43['push'](_0x293b43['shift']());}catch(_0x5ad8ba){_0x293b43['push'](_0x293b43['shift']());}}}(a621_0x3ff0,0xd2116));var __importDefault=this&&this[a621_0x2d0dc9(0x143)]||function(_0x263595){return _0x263595&&_0x263595['__esModule']?_0x263595:{'default':_0x263595};};Object['defineProperty'](exports,a621_0x2d0dc9(0x137),{'value':!![]});const Queue_1=__importDefault(require(a621_0x2d0dc9(0x13e))),Whatsapp_1=__importDefault(require(a621_0x2d0dc9(0x13c))),Prompt_1=__importDefault(require(a621_0x2d0dc9(0x145))),ListWhatsAppsService=async({session:_0x456e5a,companyId:_0x6966c0})=>{const _0x26f1fb=a621_0x2d0dc9,_0x2e4c38={'where':{'companyId':_0x6966c0},'include':[{'model':Queue_1[_0x26f1fb(0x139)],'as':'queues','attributes':['id',_0x26f1fb(0x144),_0x26f1fb(0x134),_0x26f1fb(0x138)]},{'model':Prompt_1[_0x26f1fb(0x139)],'as':_0x26f1fb(0x142)}]};_0x456e5a!==undefined&&_0x456e5a==0x0&&(_0x2e4c38[_0x26f1fb(0x13f)]={'exclude':[_0x26f1fb(0x132)]});const _0x5c47c2=await Whatsapp_1['default']['findAll'](_0x2e4c38);return _0x5c47c2;};function a621_0x2cec(_0x1b0f7e,_0x3f9dac){const _0x3ff0f9=a621_0x3ff0();return a621_0x2cec=function(_0x2cec79,_0x1e43a8){_0x2cec79=_0x2cec79-0x12f;let _0x4ba233=_0x3ff0f9[_0x2cec79];return _0x4ba233;},a621_0x2cec(_0x1b0f7e,_0x3f9dac);}exports['default']=ListWhatsAppsService;