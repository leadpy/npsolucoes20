'use strict';function a555_0x2155(_0x50c052,_0x149f9e){const _0x369935=a555_0x3699();return a555_0x2155=function(_0x2155af,_0x2ba8ba){_0x2155af=_0x2155af-0x76;let _0x193c74=_0x369935[_0x2155af];return _0x193c74;},a555_0x2155(_0x50c052,_0x149f9e);}const a555_0x2471f1=a555_0x2155;(function(_0x498e5e,_0x294666){const _0x1e6544=a555_0x2155,_0x47f1f9=_0x498e5e();while(!![]){try{const _0x3a88ef=parseInt(_0x1e6544(0x7f))/0x1*(parseInt(_0x1e6544(0x7c))/0x2)+-parseInt(_0x1e6544(0x84))/0x3+parseInt(_0x1e6544(0x7e))/0x4+-parseInt(_0x1e6544(0x87))/0x5*(parseInt(_0x1e6544(0x81))/0x6)+parseInt(_0x1e6544(0x83))/0x7+parseInt(_0x1e6544(0x76))/0x8*(parseInt(_0x1e6544(0x89))/0x9)+parseInt(_0x1e6544(0x78))/0xa;if(_0x3a88ef===_0x294666)break;else _0x47f1f9['push'](_0x47f1f9['shift']());}catch(_0x1ce3ed){_0x47f1f9['push'](_0x47f1f9['shift']());}}}(a555_0x3699,0xe62e5));function a555_0x3699(){const _0x5e286f=['QueryTypes','5136630tdAaMf','default','defineProperty','admin','598SGxaBc','sequelize','3781476oFCTqn','2497EWsLaw','__importDefault','36faEPlQ','__esModule','3574319fCIMiI','2743620NAscPl','query','\x0a\x20\x20select\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','1412085AjjEYs','\x0a\x20\x20select\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','358119OGELOw','168LEKePh'];a555_0x3699=function(){return _0x5e286f;};return a555_0x3699();}var __importDefault=this&&this[a555_0x2471f1(0x80)]||function(_0x407980){const _0x3a4c94=a555_0x2471f1;return _0x407980&&_0x407980[_0x3a4c94(0x82)]?_0x407980:{'default':_0x407980};};Object[a555_0x2471f1(0x7a)](exports,a555_0x2471f1(0x82),{'value':!![]});const sequelize_1=require(a555_0x2471f1(0x7d)),database_1=__importDefault(require('../../database')),queryAdmin=a555_0x2471f1(0x88),query=a555_0x2471f1(0x86),DashTicketsChannels=async({startDate:_0x294ec4,endDate:_0x5c41ae,companyId:_0x4c0f59,userId:_0x31d639,userProfile:_0x344d74})=>{const _0x3a23aa=a555_0x2471f1,_0x72df9b=await database_1[_0x3a23aa(0x79)][_0x3a23aa(0x85)](_0x344d74==_0x3a23aa(0x7b)?queryAdmin:query,{'replacements':{'companyId':_0x4c0f59,'startDate':_0x294ec4,'endDate':_0x5c41ae,'userId':_0x31d639},'type':sequelize_1[_0x3a23aa(0x77)]['SELECT']});return _0x72df9b;};exports[a555_0x2471f1(0x79)]=DashTicketsChannels;