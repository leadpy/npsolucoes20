'use strict';const a98_0x212c7c=a98_0x2b7a;(function(_0x469cfa,_0x2fb2fc){const _0x2af711=a98_0x2b7a,_0x1da708=_0x469cfa();while(!![]){try{const _0x3532d4=parseInt(_0x2af711(0xb6))/0x1+-parseInt(_0x2af711(0xac))/0x2*(parseInt(_0x2af711(0xa9))/0x3)+-parseInt(_0x2af711(0xae))/0x4+-parseInt(_0x2af711(0xa6))/0x5*(parseInt(_0x2af711(0xb0))/0x6)+-parseInt(_0x2af711(0xad))/0x7+-parseInt(_0x2af711(0xb4))/0x8*(parseInt(_0x2af711(0xb7))/0x9)+parseInt(_0x2af711(0xaa))/0xa*(parseInt(_0x2af711(0xb2))/0xb);if(_0x3532d4===_0x2fb2fc)break;else _0x1da708['push'](_0x1da708['shift']());}catch(_0x3a6183){_0x1da708['push'](_0x1da708['shift']());}}}(a98_0x4312,0x85fba));function a98_0x2b7a(_0x55581e,_0x27be2d){const _0x4312b2=a98_0x4312();return a98_0x2b7a=function(_0x2b7a0a,_0x46c720){_0x2b7a0a=_0x2b7a0a-0xa4;let _0x20695c=_0x4312b2[_0x2b7a0a];return _0x20695c;},a98_0x2b7a(_0x55581e,_0x27be2d);}Object['defineProperty'](exports,'__esModule',{'value':!![]});function a98_0x4312(){const _0x20b92b=['dropTable','INTEGER','693755cDniFU','Users','UserRatings','646053JgPGqu','280LJmgMU','DATE','2zrOXub','1782165hUwvqg','3539200sFAbvd','sequelize','36BGXMjQ','SET\x20NULL','885698uIUmoz','createTable','3227128XEysCV','DataTypes','884933eldpHh','9eBAmNS'];a98_0x4312=function(){return _0x20b92b;};return a98_0x4312();}const sequelize_1=require(a98_0x212c7c(0xaf));module['exports']={'up':_0x300860=>{const _0x817523=a98_0x212c7c;return _0x300860[_0x817523(0xb3)](_0x817523(0xa8),{'id':{'type':sequelize_1['DataTypes'][_0x817523(0xa5)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'ticketId':{'type':sequelize_1['DataTypes'][_0x817523(0xa5)],'references':{'model':'Tickets','key':'id'},'onDelete':_0x817523(0xb1)},'companyId':{'type':sequelize_1['DataTypes']['INTEGER'],'references':{'model':'Companies','key':'id'},'onDelete':_0x817523(0xb1)},'userId':{'type':sequelize_1[_0x817523(0xb5)][_0x817523(0xa5)],'references':{'model':_0x817523(0xa7),'key':'id'},'onDelete':_0x817523(0xb1),'allowNull':!![]},'rate':{'type':sequelize_1[_0x817523(0xb5)]['INTEGER'],'defaultValue':0x0},'createdAt':{'type':sequelize_1['DataTypes'][_0x817523(0xab)],'allowNull':!![]},'updatedAt':{'type':sequelize_1[_0x817523(0xb5)][_0x817523(0xab)],'allowNull':!![]}});},'down':_0x330e65=>{const _0x1680cb=a98_0x212c7c;return _0x330e65[_0x1680cb(0xa4)](_0x1680cb(0xa8));}};