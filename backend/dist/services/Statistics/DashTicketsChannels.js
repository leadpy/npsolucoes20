'use strict';function a555_0x1934(){const _0x1bf5a5=['3loVhlI','default','8754YrDdTZ','__esModule','1591788KAlNPF','88YSjHCB','SELECT','4085091HgPXrh','477659zCUSoc','sequelize','10CiZvri','1793TmCiiD','47XaniWZ','../../database','query','\x0a\x20\x20select\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','defineProperty','\x0a\x20\x20select\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','2148308YhWuwU','36996zncogT','admin','QueryTypes','1099935koLyln','__importDefault'];a555_0x1934=function(){return _0x1bf5a5;};return a555_0x1934();}function a555_0x5020(_0x1ac4df,_0x4e8c9c){const _0x193441=a555_0x1934();return a555_0x5020=function(_0x5020ad,_0x1967b7){_0x5020ad=_0x5020ad-0x129;let _0x16fe08=_0x193441[_0x5020ad];return _0x16fe08;},a555_0x5020(_0x1ac4df,_0x4e8c9c);}const a555_0x57e2c9=a555_0x5020;(function(_0x270f00,_0x358df7){const _0x34f53f=a555_0x5020,_0x3b0819=_0x270f00();while(!![]){try{const _0x830e90=parseInt(_0x34f53f(0x131))/0x1*(parseInt(_0x34f53f(0x13f))/0x2)+parseInt(_0x34f53f(0x13d))/0x3*(parseInt(_0x34f53f(0x137))/0x4)+parseInt(_0x34f53f(0x13b))/0x5+parseInt(_0x34f53f(0x129))/0x6+parseInt(_0x34f53f(0x12d))/0x7*(-parseInt(_0x34f53f(0x12a))/0x8)+-parseInt(_0x34f53f(0x12c))/0x9*(-parseInt(_0x34f53f(0x12f))/0xa)+-parseInt(_0x34f53f(0x130))/0xb*(parseInt(_0x34f53f(0x138))/0xc);if(_0x830e90===_0x358df7)break;else _0x3b0819['push'](_0x3b0819['shift']());}catch(_0x50d4e7){_0x3b0819['push'](_0x3b0819['shift']());}}}(a555_0x1934,0x68b2c));var __importDefault=this&&this[a555_0x57e2c9(0x13c)]||function(_0x1f64a3){const _0x4b653f=a555_0x57e2c9;return _0x1f64a3&&_0x1f64a3[_0x4b653f(0x140)]?_0x1f64a3:{'default':_0x1f64a3};};Object[a555_0x57e2c9(0x135)](exports,a555_0x57e2c9(0x140),{'value':!![]});const sequelize_1=require(a555_0x57e2c9(0x12e)),database_1=__importDefault(require(a555_0x57e2c9(0x132))),queryAdmin=a555_0x57e2c9(0x136),query=a555_0x57e2c9(0x134),DashTicketsChannels=async({startDate:_0x2d30e6,endDate:_0x1cc2e7,companyId:_0x4c85de,userId:_0x250f5c,userProfile:_0x264459})=>{const _0x3610ec=a555_0x57e2c9,_0x3a14bf=await database_1[_0x3610ec(0x13e)][_0x3610ec(0x133)](_0x264459==_0x3610ec(0x139)?queryAdmin:query,{'replacements':{'companyId':_0x4c85de,'startDate':_0x2d30e6,'endDate':_0x1cc2e7,'userId':_0x250f5c},'type':sequelize_1[_0x3610ec(0x13a)][_0x3610ec(0x12b)]});return _0x3a14bf;};exports[a555_0x57e2c9(0x13e)]=DashTicketsChannels;