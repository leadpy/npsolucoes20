'use strict';const a326_0x4efbf7=a326_0x42b1;(function(_0x4c9b0f,_0x3482ab){const _0x5a9968=a326_0x42b1,_0x3f24a9=_0x4c9b0f();while(!![]){try{const _0x274e18=-parseInt(_0x5a9968(0x6d))/0x1*(parseInt(_0x5a9968(0x71))/0x2)+parseInt(_0x5a9968(0x81))/0x3+parseInt(_0x5a9968(0x72))/0x4+parseInt(_0x5a9968(0x75))/0x5+parseInt(_0x5a9968(0x7b))/0x6+parseInt(_0x5a9968(0x80))/0x7+parseInt(_0x5a9968(0x77))/0x8*(-parseInt(_0x5a9968(0x74))/0x9);if(_0x274e18===_0x3482ab)break;else _0x3f24a9['push'](_0x3f24a9['shift']());}catch(_0x33e8d4){_0x3f24a9['push'](_0x3f24a9['shift']());}}}(a326_0x5a4c,0xb2770));var __importDefault=this&&this[a326_0x4efbf7(0x6e)]||function(_0x272348){const _0x52c8ac=a326_0x4efbf7;return _0x272348&&_0x272348[_0x52c8ac(0x6b)]?_0x272348:{'default':_0x272348};};Object[a326_0x4efbf7(0x83)](exports,a326_0x4efbf7(0x6b),{'value':!![]}),exports[a326_0x4efbf7(0x69)]=void 0x0;function a326_0x42b1(_0x2912ab,_0x1b471d){const _0x5a4c0b=a326_0x5a4c();return a326_0x42b1=function(_0x42b1e1,_0x46bd95){_0x42b1e1=_0x42b1e1-0x69;let _0x2a5e00=_0x5a4c0b[_0x42b1e1];return _0x2a5e00;},a326_0x42b1(_0x2912ab,_0x1b471d);}const sequelize_1=require('sequelize'),Campaign_1=__importDefault(require(a326_0x4efbf7(0x6c))),CampaignShipping_1=__importDefault(require(a326_0x4efbf7(0x78))),queues_1=require(a326_0x4efbf7(0x6f));async function CancelService(_0x2d7696){const _0x2cad41=a326_0x4efbf7,_0x2bb7fa=await Campaign_1[_0x2cad41(0x70)][_0x2cad41(0x7d)](_0x2d7696);await _0x2bb7fa[_0x2cad41(0x73)]({'status':_0x2cad41(0x84)});const _0x4a6f9f=await CampaignShipping_1['default'][_0x2cad41(0x7e)]({'where':{'campaignId':_0x2bb7fa['id'],'jobId':{[sequelize_1['Op'][_0x2cad41(0x82)]]:null},'deliveredAt':null}}),_0x243678=[];for(let _0x138516 of _0x4a6f9f){const _0x1ae3b6=await queues_1[_0x2cad41(0x6a)][_0x2cad41(0x79)](+_0x138516[_0x2cad41(0x76)]);_0x243678[_0x2cad41(0x7a)](_0x1ae3b6[_0x2cad41(0x7c)]());}await Promise[_0x2cad41(0x7f)](_0x243678);}function a326_0x5a4c(){const _0x31682a=['1444626qpwisE','5142480MjMTcT','update','9mDQxQl','2832760gDnTIm','jobId','15084952zaixyZ','../../models/CampaignShipping','getJob','push','8583942bZdBHU','remove','findByPk','findAll','all','3031616rKhFcU','1035960oceMKs','not','defineProperty','CANCELADA','CancelService','campaignQueue','__esModule','../../models/Campaign','2yCoAQQ','__importDefault','../../queues','default'];a326_0x5a4c=function(){return _0x31682a;};return a326_0x5a4c();}exports['CancelService']=CancelService;