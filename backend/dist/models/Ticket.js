'use strict';const a327_0x9aeb75=a327_0x4002;(function(_0x323430,_0x2f7786){const _0x318b22=a327_0x4002,_0x1b2e90=_0x323430();while(!![]){try{const _0x34f0d6=parseInt(_0x318b22(0xfd))/0x1*(-parseInt(_0x318b22(0xdf))/0x2)+parseInt(_0x318b22(0xe5))/0x3*(-parseInt(_0x318b22(0xe0))/0x4)+-parseInt(_0x318b22(0x10b))/0x5*(-parseInt(_0x318b22(0xfe))/0x6)+-parseInt(_0x318b22(0xd5))/0x7*(parseInt(_0x318b22(0x106))/0x8)+-parseInt(_0x318b22(0xe2))/0x9*(parseInt(_0x318b22(0x101))/0xa)+parseInt(_0x318b22(0xe3))/0xb*(-parseInt(_0x318b22(0x114))/0xc)+parseInt(_0x318b22(0xd7))/0xd*(parseInt(_0x318b22(0xeb))/0xe);if(_0x34f0d6===_0x2f7786)break;else _0x1b2e90['push'](_0x1b2e90['shift']());}catch(_0x12a632){_0x1b2e90['push'](_0x1b2e90['shift']());}}}(a327_0x57e1,0xb01ba));function a327_0x4002(_0x5d80b1,_0x4c8e8c){const _0x57e11e=a327_0x57e1();return a327_0x4002=function(_0x400218,_0x12ffea){_0x400218=_0x400218-0xcc;let _0x29bb37=_0x57e11e[_0x400218];return _0x29bb37;},a327_0x4002(_0x5d80b1,_0x4c8e8c);}var __decorate=this&&this['__decorate']||function(_0x4c2360,_0x1fef9f,_0x243104,_0x3e989f){const _0x5890ce=a327_0x4002;var _0xf7705d=arguments[_0x5890ce(0xf8)],_0x480ffc=_0xf7705d<0x3?_0x1fef9f:_0x3e989f===null?_0x3e989f=Object[_0x5890ce(0x113)](_0x1fef9f,_0x243104):_0x3e989f,_0x4c9a23;if(typeof Reflect===_0x5890ce(0xdd)&&typeof Reflect[_0x5890ce(0xf1)]==='function')_0x480ffc=Reflect[_0x5890ce(0xf1)](_0x4c2360,_0x1fef9f,_0x243104,_0x3e989f);else{for(var _0x25166c=_0x4c2360[_0x5890ce(0xf8)]-0x1;_0x25166c>=0x0;_0x25166c--)if(_0x4c9a23=_0x4c2360[_0x25166c])_0x480ffc=(_0xf7705d<0x3?_0x4c9a23(_0x480ffc):_0xf7705d>0x3?_0x4c9a23(_0x1fef9f,_0x243104,_0x480ffc):_0x4c9a23(_0x1fef9f,_0x243104))||_0x480ffc;}return _0xf7705d>0x3&&_0x480ffc&&Object[_0x5890ce(0xee)](_0x1fef9f,_0x243104,_0x480ffc),_0x480ffc;},__metadata=this&&this['__metadata']||function(_0x41072f,_0x403825){const _0x187ef7=a327_0x4002;if(typeof Reflect==='object'&&typeof Reflect[_0x187ef7(0xf4)]===_0x187ef7(0xf9))return Reflect[_0x187ef7(0xf4)](_0x41072f,_0x403825);},__importDefault=this&&this[a327_0x9aeb75(0xf3)]||function(_0x430d47){const _0x16f785=a327_0x9aeb75;return _0x430d47&&_0x430d47[_0x16f785(0x111)]?_0x430d47:{'default':_0x430d47};};Object[a327_0x9aeb75(0xee)](exports,a327_0x9aeb75(0x111),{'value':!![]});const sequelize_typescript_1=require(a327_0x9aeb75(0xf2)),uuid_1=require(a327_0x9aeb75(0xf0)),Contact_1=__importDefault(require('./Contact')),Message_1=__importDefault(require(a327_0x9aeb75(0xed))),Queue_1=__importDefault(require(a327_0x9aeb75(0xd4))),User_1=__importDefault(require(a327_0x9aeb75(0xfb))),Whatsapp_1=__importDefault(require('./Whatsapp')),Company_1=__importDefault(require(a327_0x9aeb75(0xcc))),Tag_1=__importDefault(require(a327_0x9aeb75(0x109))),TicketTag_1=__importDefault(require(a327_0x9aeb75(0xea))),QueueIntegrations_1=__importDefault(require(a327_0x9aeb75(0xe7)));let Ticket=class Ticket extends sequelize_typescript_1['Model']{static['setUUID'](_0x186f4b){const _0x579c5e=a327_0x9aeb75;_0x186f4b[_0x579c5e(0xf0)]=(0x0,uuid_1['v4'])();}};__decorate([sequelize_typescript_1['PrimaryKey'],sequelize_typescript_1[a327_0x9aeb75(0xe6)],sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Number)],Ticket[a327_0x9aeb75(0xd2)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x10c)])({'defaultValue':'pending'}),__metadata('design:type',String)],Ticket[a327_0x9aeb75(0xd2)],'status',void 0x0),__decorate([sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Number)],Ticket[a327_0x9aeb75(0xd2)],'unreadMessages',void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a327_0x9aeb75(0x10d),String)],Ticket[a327_0x9aeb75(0xd2)],'lastMessage',void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Boolean)],Ticket['prototype'],'isGroup',void 0x0),__decorate([sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Date)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xef),void 0x0),__decorate([sequelize_typescript_1['UpdatedAt'],__metadata(a327_0x9aeb75(0x10d),Date)],Ticket['prototype'],a327_0x9aeb75(0x107),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x112)])(()=>User_1[a327_0x9aeb75(0x10f)]),sequelize_typescript_1['Column'],__metadata(a327_0x9aeb75(0x10d),Number)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xfc),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>User_1['default']),__metadata('design:type',User_1[a327_0x9aeb75(0x10f)])],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xe8),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Contact_1[a327_0x9aeb75(0x10f)]),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Number)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xd1),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0xd8)])(()=>Contact_1[a327_0x9aeb75(0x10f)]),__metadata('design:type',Contact_1[a327_0x9aeb75(0x10f)])],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xff),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x112)])(()=>Whatsapp_1[a327_0x9aeb75(0x10f)]),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Number)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xf6),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0xd8)])(()=>Whatsapp_1[a327_0x9aeb75(0x10f)]),__metadata(a327_0x9aeb75(0x10d),Whatsapp_1['default'])],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xe1),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x112)])(()=>Queue_1[a327_0x9aeb75(0x10f)]),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Number)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xce),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0xd8)])(()=>Queue_1[a327_0x9aeb75(0x10f)]),__metadata('design:type',Queue_1['default'])],Ticket['prototype'],a327_0x9aeb75(0xf7),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x102)])(![]),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Boolean)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xe9),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0xd0)])(()=>Message_1[a327_0x9aeb75(0x10f)]),__metadata(a327_0x9aeb75(0x10d),Array)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xdb),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0xd0)])(()=>TicketTag_1[a327_0x9aeb75(0x10f)]),__metadata(a327_0x9aeb75(0x10d),Array)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xd6),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0xda)])(()=>Tag_1[a327_0x9aeb75(0x10f)],()=>TicketTag_1[a327_0x9aeb75(0x10f)]),__metadata(a327_0x9aeb75(0x10d),Array)],Ticket['prototype'],a327_0x9aeb75(0x10e),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Company_1[a327_0x9aeb75(0x10f)]),sequelize_typescript_1['Column'],__metadata(a327_0x9aeb75(0x10d),Number)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xdc),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0xd8)])(()=>Company_1[a327_0x9aeb75(0x10f)]),__metadata(a327_0x9aeb75(0x10d),Company_1['default'])],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xfa),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x102)])((0x0,uuid_1['v4'])()),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),String)],Ticket[a327_0x9aeb75(0xd2)],'uuid',void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x102)])('whatsapp'),sequelize_typescript_1['Column'],__metadata(a327_0x9aeb75(0x10d),String)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xd9),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x104)])(![]),(0x0,sequelize_typescript_1[a327_0x9aeb75(0x102)])(0x0),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Number)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0x103),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x104)])(![]),(0x0,sequelize_typescript_1['Default'])(0x0),sequelize_typescript_1['Column'],__metadata('design:type',Number)],Ticket[a327_0x9aeb75(0xd2)],'amountUsedBotQueuesNPS',void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x102)])(![]),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Boolean)],Ticket['prototype'],a327_0x9aeb75(0xde),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x102)])(![]),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata('design:type',Boolean)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xd3),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata('design:type',Date)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xcd),void 0x0),__decorate([sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Date)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xf5),void 0x0),__decorate([sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Date)],Ticket['prototype'],a327_0x9aeb75(0x100),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x102)])(![]),sequelize_typescript_1['Column'],__metadata('design:type',Boolean)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0x110),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x102)])(![]),sequelize_typescript_1['Column'],__metadata(a327_0x9aeb75(0x10d),Boolean)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0xec),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0x112)])(()=>QueueIntegrations_1[a327_0x9aeb75(0x10f)]),sequelize_typescript_1[a327_0x9aeb75(0x10c)],__metadata(a327_0x9aeb75(0x10d),Number)],Ticket[a327_0x9aeb75(0xd2)],a327_0x9aeb75(0x10a),void 0x0),__decorate([(0x0,sequelize_typescript_1[a327_0x9aeb75(0xd8)])(()=>QueueIntegrations_1[a327_0x9aeb75(0x10f)]),__metadata(a327_0x9aeb75(0x10d),QueueIntegrations_1[a327_0x9aeb75(0x10f)])],Ticket['prototype'],'queueIntegration',void 0x0),__decorate([sequelize_typescript_1[a327_0x9aeb75(0xcf)],__metadata(a327_0x9aeb75(0x10d),Function),__metadata(a327_0x9aeb75(0x108),[Ticket]),__metadata(a327_0x9aeb75(0x105),void 0x0)],Ticket,'setUUID',null),Ticket=__decorate([sequelize_typescript_1[a327_0x9aeb75(0xe4)]],Ticket),exports[a327_0x9aeb75(0x10f)]=Ticket;function a327_0x57e1(){const _0x1d1b7c=['metadata','lgpdAcceptedAt','whatsappId','queue','length','function','company','./User','userId','11oSTsVU','4248078WCuIUo','contact','imported','490950ajjqfe','Default','amountUsedBotQueues','AllowNull','design:returntype','413352JGLmPN','updatedAt','design:paramtypes','./Tag','integrationId','5pHfxws','Column','design:type','tags','default','isOutOfHour','__esModule','ForeignKey','getOwnPropertyDescriptor','23988TWOrSr','./Company','lgpdSendMessageAt','queueId','BeforeCreate','HasMany','contactId','prototype','sendInactiveMessage','./Queue','77lAHNUR','ticketTags','117YCgQNu','BelongsTo','channel','BelongsToMany','messages','companyId','object','fromMe','231202eEKhpS','25848sloYYC','whatsapp','27YNnWoW','1518cwWWof','Table','654bpwEcq','AutoIncrement','./QueueIntegrations','user','isBot','./TicketTag','5732468wGKqqg','useIntegration','./Message','defineProperty','createdAt','uuid','decorate','sequelize-typescript','__importDefault'];a327_0x57e1=function(){return _0x1d1b7c;};return a327_0x57e1();}