'use strict';function a89_0x296f(){const _0x2c9cd7=['1164192MOBaQh','sequelize','INTEGER','3842697SOMhFH','25332560aBquaY','2466226PDhooH','26pUCYOX','11675RrAmPE','STRING','DataTypes','CASCADE','4stdzTn','DATE','3030945LVKyhU','Tickets','5134563FBDSiK','createTable','Users','Plans','Contacts','exports','SET\x20NULL','6uvkivI'];a89_0x296f=function(){return _0x2c9cd7;};return a89_0x296f();}const a89_0x1a0adb=a89_0x4867;function a89_0x4867(_0x189afb,_0x2b62c2){const _0x296fca=a89_0x296f();return a89_0x4867=function(_0x486744,_0x469951){_0x486744=_0x486744-0x104;let _0x14df49=_0x296fca[_0x486744];return _0x14df49;},a89_0x4867(_0x189afb,_0x2b62c2);}(function(_0x44b494,_0x5daeba){const _0x5980a2=a89_0x4867,_0x472fa1=_0x44b494();while(!![]){try{const _0x15e5cb=parseInt(_0x5980a2(0x10a))/0x1*(parseInt(_0x5980a2(0x109))/0x2)+-parseInt(_0x5980a2(0x106))/0x3+-parseInt(_0x5980a2(0x10e))/0x4*(parseInt(_0x5980a2(0x110))/0x5)+parseInt(_0x5980a2(0x119))/0x6*(parseInt(_0x5980a2(0x108))/0x7)+parseInt(_0x5980a2(0x11a))/0x8+-parseInt(_0x5980a2(0x112))/0x9+parseInt(_0x5980a2(0x107))/0xa;if(_0x15e5cb===_0x5daeba)break;else _0x472fa1['push'](_0x472fa1['shift']());}catch(_0xb0e2e1){_0x472fa1['push'](_0x472fa1['shift']());}}}(a89_0x296f,0xb111e));Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=require(a89_0x1a0adb(0x104));module[a89_0x1a0adb(0x117)]={'up':_0x425048=>{const _0x3b4b00=a89_0x1a0adb;return _0x425048[_0x3b4b00(0x113)]('TicketNotes',{'id':{'type':sequelize_1[_0x3b4b00(0x10c)][_0x3b4b00(0x105)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'note':{'type':sequelize_1[_0x3b4b00(0x10c)][_0x3b4b00(0x10b)],'allowNull':![]},'userId':{'type':sequelize_1[_0x3b4b00(0x10c)]['INTEGER'],'references':{'model':_0x3b4b00(0x114),'key':'id'},'onUpdate':_0x3b4b00(0x10d),'onDelete':'SET\x20NULL'},'contactId':{'type':sequelize_1[_0x3b4b00(0x10c)][_0x3b4b00(0x105)],'references':{'model':_0x3b4b00(0x116),'key':'id'},'onUpdate':_0x3b4b00(0x10d),'onDelete':'CASCADE','allowNull':![]},'ticketId':{'type':sequelize_1['DataTypes']['INTEGER'],'references':{'model':_0x3b4b00(0x111),'key':'id'},'onUpdate':_0x3b4b00(0x10d),'onDelete':_0x3b4b00(0x118)},'createdAt':{'type':sequelize_1[_0x3b4b00(0x10c)][_0x3b4b00(0x10f)],'allowNull':![]},'updatedAt':{'type':sequelize_1['DataTypes'][_0x3b4b00(0x10f)],'allowNull':![]}});},'down':_0xcff699=>{const _0x4a013e=a89_0x1a0adb;return _0xcff699['dropTable'](_0x4a013e(0x115));}};