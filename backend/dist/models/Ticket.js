'use strict';const a296_0x4e76cb=a296_0x2875;(function(_0x121636,_0x140762){const _0x514507=a296_0x2875,_0x227eae=_0x121636();while(!![]){try{const _0x521f13=-parseInt(_0x514507(0x1f3))/0x1*(-parseInt(_0x514507(0x1f5))/0x2)+parseInt(_0x514507(0x1dd))/0x3*(-parseInt(_0x514507(0x1f1))/0x4)+parseInt(_0x514507(0x1e4))/0x5+parseInt(_0x514507(0x1dc))/0x6*(parseInt(_0x514507(0x1ea))/0x7)+-parseInt(_0x514507(0x1f7))/0x8+parseInt(_0x514507(0x1f8))/0x9*(-parseInt(_0x514507(0x1fe))/0xa)+parseInt(_0x514507(0x1ed))/0xb*(parseInt(_0x514507(0x203))/0xc);if(_0x521f13===_0x140762)break;else _0x227eae['push'](_0x227eae['shift']());}catch(_0x3d22d7){_0x227eae['push'](_0x227eae['shift']());}}}(a296_0x3049,0x8bb58));function a296_0x2875(_0x3b04e9,_0x301a38){const _0x3049e9=a296_0x3049();return a296_0x2875=function(_0x2875dd,_0x3313cc){_0x2875dd=_0x2875dd-0x1c6;let _0x494440=_0x3049e9[_0x2875dd];return _0x494440;},a296_0x2875(_0x3b04e9,_0x301a38);}var __decorate=this&&this[a296_0x4e76cb(0x1c6)]||function(_0x5b5607,_0x1b31a0,_0x39a2ed,_0x1c672a){const _0x5c1007=a296_0x4e76cb;var _0x1dc0e9=arguments[_0x5c1007(0x1fc)],_0x49729c=_0x1dc0e9<0x3?_0x1b31a0:_0x1c672a===null?_0x1c672a=Object[_0x5c1007(0x1e9)](_0x1b31a0,_0x39a2ed):_0x1c672a,_0x47c334;if(typeof Reflect===_0x5c1007(0x1ee)&&typeof Reflect[_0x5c1007(0x1fd)]===_0x5c1007(0x1df))_0x49729c=Reflect[_0x5c1007(0x1fd)](_0x5b5607,_0x1b31a0,_0x39a2ed,_0x1c672a);else{for(var _0x1df12f=_0x5b5607[_0x5c1007(0x1fc)]-0x1;_0x1df12f>=0x0;_0x1df12f--)if(_0x47c334=_0x5b5607[_0x1df12f])_0x49729c=(_0x1dc0e9<0x3?_0x47c334(_0x49729c):_0x1dc0e9>0x3?_0x47c334(_0x1b31a0,_0x39a2ed,_0x49729c):_0x47c334(_0x1b31a0,_0x39a2ed))||_0x49729c;}return _0x1dc0e9>0x3&&_0x49729c&&Object[_0x5c1007(0x1e3)](_0x1b31a0,_0x39a2ed,_0x49729c),_0x49729c;},__metadata=this&&this['__metadata']||function(_0x53cdf7,_0x3e9421){const _0x383528=a296_0x4e76cb;if(typeof Reflect===_0x383528(0x1ee)&&typeof Reflect['metadata']==='function')return Reflect[_0x383528(0x201)](_0x53cdf7,_0x3e9421);},__importDefault=this&&this[a296_0x4e76cb(0x202)]||function(_0x2a9848){return _0x2a9848&&_0x2a9848['__esModule']?_0x2a9848:{'default':_0x2a9848};};Object[a296_0x4e76cb(0x1e3)](exports,a296_0x4e76cb(0x1fb),{'value':!![]});const sequelize_typescript_1=require('sequelize-typescript'),uuid_1=require(a296_0x4e76cb(0x1c9)),Contact_1=__importDefault(require('./Contact')),Message_1=__importDefault(require(a296_0x4e76cb(0x204))),Queue_1=__importDefault(require('./Queue')),User_1=__importDefault(require(a296_0x4e76cb(0x1e5))),Whatsapp_1=__importDefault(require(a296_0x4e76cb(0x1f6))),Company_1=__importDefault(require('./Company')),Tag_1=__importDefault(require('./Tag')),TicketTag_1=__importDefault(require('./TicketTag'));let Ticket=class Ticket extends sequelize_typescript_1[a296_0x4e76cb(0x1e1)]{static[a296_0x4e76cb(0x1f2)](_0x2abdfc){const _0x3c6454=a296_0x4e76cb;_0x2abdfc[_0x3c6454(0x1c9)]=(0x0,uuid_1['v4'])();}};__decorate([sequelize_typescript_1[a296_0x4e76cb(0x1f4)],sequelize_typescript_1[a296_0x4e76cb(0x1c7)],sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Number)],Ticket[a296_0x4e76cb(0x1c8)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1e6)])({'defaultValue':'pending'}),__metadata('design:type',String)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1da),void 0x0),__decorate([sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Number)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x200),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata('design:type',String)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1d1),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1['Column'],__metadata('design:type',Boolean)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1f0),void 0x0),__decorate([sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Date)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1fa),void 0x0),__decorate([sequelize_typescript_1[a296_0x4e76cb(0x1de)],__metadata(a296_0x4e76cb(0x1ce),Date)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1d0),void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1d9)])(()=>User_1[a296_0x4e76cb(0x1e2)]),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Number)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1cf),void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1cc)])(()=>User_1[a296_0x4e76cb(0x1e2)]),__metadata(a296_0x4e76cb(0x1ce),User_1[a296_0x4e76cb(0x1e2)])],Ticket['prototype'],'user',void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1d9)])(()=>Contact_1[a296_0x4e76cb(0x1e2)]),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Number)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1ef),void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1cc)])(()=>Contact_1[a296_0x4e76cb(0x1e2)]),__metadata(a296_0x4e76cb(0x1ce),Contact_1[a296_0x4e76cb(0x1e2)])],Ticket[a296_0x4e76cb(0x1c8)],'contact',void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1d9)])(()=>Whatsapp_1['default']),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Number)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1d4),void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1cc)])(()=>Whatsapp_1['default']),__metadata(a296_0x4e76cb(0x1ce),Whatsapp_1['default'])],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1ff),void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1d9)])(()=>Queue_1[a296_0x4e76cb(0x1e2)]),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Number)],Ticket['prototype'],'queueId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1cc)])(()=>Queue_1[a296_0x4e76cb(0x1e2)]),__metadata('design:type',Queue_1[a296_0x4e76cb(0x1e2)])],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1d2),void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1e8)])(![]),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Boolean)],Ticket[a296_0x4e76cb(0x1c8)],'isBot',void 0x0),__decorate([(0x0,sequelize_typescript_1['HasMany'])(()=>Message_1['default']),__metadata('design:type',Array)],Ticket[a296_0x4e76cb(0x1c8)],'messages',void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1f9)])(()=>TicketTag_1[a296_0x4e76cb(0x1e2)]),__metadata(a296_0x4e76cb(0x1ce),Array)],Ticket[a296_0x4e76cb(0x1c8)],'ticketTags',void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1db)])(()=>Tag_1[a296_0x4e76cb(0x1e2)],()=>TicketTag_1[a296_0x4e76cb(0x1e2)]),__metadata(a296_0x4e76cb(0x1ce),Array)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1cb),void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1d9)])(()=>Company_1[a296_0x4e76cb(0x1e2)]),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Number)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1ca),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>Company_1[a296_0x4e76cb(0x1e2)]),__metadata(a296_0x4e76cb(0x1ce),Company_1['default'])],Ticket['prototype'],a296_0x4e76cb(0x1eb),void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1e8)])((0x0,uuid_1['v4'])()),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),String)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1c9),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(a296_0x4e76cb(0x1ff)),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),String)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x205),void 0x0),__decorate([(0x0,sequelize_typescript_1['AllowNull'])(![]),(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1e8)])(0x0),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Number)],Ticket['prototype'],a296_0x4e76cb(0x1d5),void 0x0),__decorate([(0x0,sequelize_typescript_1['AllowNull'])(![]),(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1e8)])(0x0),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata('design:type',Number)],Ticket[a296_0x4e76cb(0x1c8)],'amountUsedBotQueuesNPS',void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1e8)])(![]),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Boolean)],Ticket['prototype'],'fromMe',void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata(a296_0x4e76cb(0x1ce),Boolean)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1cd),void 0x0),__decorate([sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata('design:type',Date)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1e7),void 0x0),__decorate([sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata('design:type',Date)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1d3),void 0x0),__decorate([sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata('design:type',Date)],Ticket['prototype'],a296_0x4e76cb(0x1d8),void 0x0),__decorate([(0x0,sequelize_typescript_1[a296_0x4e76cb(0x1e8)])(![]),sequelize_typescript_1[a296_0x4e76cb(0x1e6)],__metadata('design:type',Boolean)],Ticket[a296_0x4e76cb(0x1c8)],a296_0x4e76cb(0x1d6),void 0x0),__decorate([sequelize_typescript_1['BeforeCreate'],__metadata('design:type',Function),__metadata(a296_0x4e76cb(0x1e0),[Ticket]),__metadata(a296_0x4e76cb(0x1ec),void 0x0)],Ticket,'setUUID',null),Ticket=__decorate([sequelize_typescript_1[a296_0x4e76cb(0x1d7)]],Ticket),exports[a296_0x4e76cb(0x1e2)]=Ticket;function a296_0x3049(){const _0x3844f2=['sendInactiveMessage','design:type','userId','updatedAt','lastMessage','queue','lgpdAcceptedAt','whatsappId','amountUsedBotQueues','isOutOfHour','Table','imported','ForeignKey','status','BelongsToMany','6LDcaaN','18srPRNI','UpdatedAt','function','design:paramtypes','Model','default','defineProperty','5580680ZguZkp','./User','Column','lgpdSendMessageAt','Default','getOwnPropertyDescriptor','104461uMawEo','company','design:returntype','569437jiMgiy','object','contactId','isGroup','559412NwDnGX','setUUID','5dPktxu','PrimaryKey','181142NPTVwK','./Whatsapp','5629872rKqceF','9YFthQI','HasMany','createdAt','__esModule','length','decorate','3488530toVPUd','whatsapp','unreadMessages','metadata','__importDefault','204GdRDrH','./Message','channel','__decorate','AutoIncrement','prototype','uuid','companyId','tags','BelongsTo'];a296_0x3049=function(){return _0x3844f2;};return a296_0x3049();}