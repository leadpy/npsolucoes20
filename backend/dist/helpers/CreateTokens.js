'use strict';const a263_0x2e14c5=a263_0x4653;(function(_0x10e276,_0x40e2aa){const _0x1cf999=a263_0x4653,_0xb0cb89=_0x10e276();while(!![]){try{const _0x138107=-parseInt(_0x1cf999(0x93))/0x1+parseInt(_0x1cf999(0x99))/0x2+-parseInt(_0x1cf999(0x87))/0x3*(parseInt(_0x1cf999(0x97))/0x4)+parseInt(_0x1cf999(0x8d))/0x5+-parseInt(_0x1cf999(0x92))/0x6+parseInt(_0x1cf999(0x8f))/0x7*(parseInt(_0x1cf999(0x8b))/0x8)+parseInt(_0x1cf999(0x96))/0x9;if(_0x138107===_0x40e2aa)break;else _0xb0cb89['push'](_0xb0cb89['shift']());}catch(_0x503747){_0xb0cb89['push'](_0xb0cb89['shift']());}}}(a263_0x10bd,0x56c36));var __importDefault=this&&this[a263_0x2e14c5(0x94)]||function(_0x3c43bb){const _0x30a84f=a263_0x2e14c5;return _0x3c43bb&&_0x3c43bb[_0x30a84f(0x86)]?_0x3c43bb:{'default':_0x3c43bb};};Object[a263_0x2e14c5(0x88)](exports,'__esModule',{'value':!![]}),exports[a263_0x2e14c5(0x8e)]=exports[a263_0x2e14c5(0x95)]=void 0x0;function a263_0x10bd(){const _0x1cd923=['25992iKEtrj','default','1084115PjBuTh','createRefreshToken','1407oPUYRU','../config/auth','profile','1773738vMYDLM','222358cbwKyh','__importDefault','createAccessToken','3556071YgmRkb','564MVaMvU','sign','139730BWsmXz','companyId','jsonwebtoken','__esModule','9819hzQPTt','defineProperty','tokenVersion','name'];a263_0x10bd=function(){return _0x1cd923;};return a263_0x10bd();}const jsonwebtoken_1=require(a263_0x2e14c5(0x85)),auth_1=__importDefault(require(a263_0x2e14c5(0x90))),createAccessToken=_0x1a0e3a=>{const _0x159f16=a263_0x2e14c5,{secret:_0x463199,expiresIn:_0x2370a5}=auth_1[_0x159f16(0x8c)];return(0x0,jsonwebtoken_1[_0x159f16(0x98)])({'usarname':_0x1a0e3a[_0x159f16(0x8a)],'profile':_0x1a0e3a[_0x159f16(0x91)],'id':_0x1a0e3a['id'],'companyId':_0x1a0e3a[_0x159f16(0x9a)]},_0x463199,{'expiresIn':_0x2370a5});};function a263_0x4653(_0x3addfd,_0x5adc7b){const _0x10bda9=a263_0x10bd();return a263_0x4653=function(_0x465353,_0x3c65ca){_0x465353=_0x465353-0x85;let _0x4783ea=_0x10bda9[_0x465353];return _0x4783ea;},a263_0x4653(_0x3addfd,_0x5adc7b);}exports[a263_0x2e14c5(0x95)]=createAccessToken;const createRefreshToken=_0x4451da=>{const _0x3478cc=a263_0x2e14c5,{refreshSecret:_0x1da63a,refreshExpiresIn:_0x24e3b1}=auth_1[_0x3478cc(0x8c)];return(0x0,jsonwebtoken_1['sign'])({'id':_0x4451da['id'],'tokenVersion':_0x4451da[_0x3478cc(0x89)],'companyId':_0x4451da[_0x3478cc(0x9a)]},_0x1da63a,{'expiresIn':_0x24e3b1});};exports[a263_0x2e14c5(0x8e)]=createRefreshToken;