'use strict';var a274_0x1c53ea=a274_0x1b2b;(function(_0x5f24fc,_0x229af1){var _0xdb476d=a274_0x1b2b,_0x1bf6cd=_0x5f24fc();while(!![]){try{var _0x3538d3=parseInt(_0xdb476d(0x140))/0x1+parseInt(_0xdb476d(0x11f))/0x2*(-parseInt(_0xdb476d(0x135))/0x3)+parseInt(_0xdb476d(0x114))/0x4*(-parseInt(_0xdb476d(0x129))/0x5)+-parseInt(_0xdb476d(0x101))/0x6+parseInt(_0xdb476d(0x111))/0x7+parseInt(_0xdb476d(0x10c))/0x8+parseInt(_0xdb476d(0x121))/0x9;if(_0x3538d3===_0x229af1)break;else _0x1bf6cd['push'](_0x1bf6cd['shift']());}catch(_0x134698){_0x1bf6cd['push'](_0x1bf6cd['shift']());}}}(a274_0x5dbc,0xca39b));function a274_0x5dbc(){var _0x335b97=['disabled','defineProperty','expiresTicketNPS','complationMessage','queues','1012672vuwPRE','__decorate','AllowNull','createdAt','ForeignKey','11504087hDnRQQ','metadata','design:type','4484968okKejL','function','BelongsTo','isDefault','Default','__metadata','UpdatedAt','maxUseBotQueues','./WhatsappQueue','whatsappQueues','maxUseBotQueuesNPS','148WFqZAU','getOwnPropertyDescriptor','6386139fzcgpM','__importDefault','DataType','Model','status','name','provider','stable','5KitygW','token','default','Column','./Ticket','qrcode','facebookUserId','HasMany','__esModule','companyId','length','timeSendQueue','5736cOuSXC','facebookUserToken','TEXT','inactiveMessage','prototype','expiresTicket','battery','tickets','object','retries','decorate','493821NmkqxV','sequelize-typescript','./Company','company','plugged','BelongsToMany','number','groupAsTicket','5294232fUOQIy','timeInactiveMessage','facebookPageUserId','session','channel','greetingMessage'];a274_0x5dbc=function(){return _0x335b97;};return a274_0x5dbc();}var __decorate=this&&this[a274_0x1c53ea(0x10d)]||function(_0x106056,_0x425fe4,_0x15911c,_0x37c66f){var _0x4830c0=a274_0x1c53ea,_0x5f37b4=arguments[_0x4830c0(0x133)],_0x148d97=_0x5f37b4<0x3?_0x425fe4:_0x37c66f===null?_0x37c66f=Object[_0x4830c0(0x120)](_0x425fe4,_0x15911c):_0x37c66f,_0x49b60f;if(typeof Reflect===_0x4830c0(0x13d)&&typeof Reflect[_0x4830c0(0x13f)]===_0x4830c0(0x115))_0x148d97=Reflect[_0x4830c0(0x13f)](_0x106056,_0x425fe4,_0x15911c,_0x37c66f);else{for(var _0x2a3694=_0x106056[_0x4830c0(0x133)]-0x1;_0x2a3694>=0x0;_0x2a3694--)if(_0x49b60f=_0x106056[_0x2a3694])_0x148d97=(_0x5f37b4<0x3?_0x49b60f(_0x148d97):_0x5f37b4>0x3?_0x49b60f(_0x425fe4,_0x15911c,_0x148d97):_0x49b60f(_0x425fe4,_0x15911c))||_0x148d97;}return _0x5f37b4>0x3&&_0x148d97&&Object[_0x4830c0(0x108)](_0x425fe4,_0x15911c,_0x148d97),_0x148d97;},__metadata=this&&this[a274_0x1c53ea(0x119)]||function(_0x5a72e3,_0x438f15){var _0x26d52d=a274_0x1c53ea;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x26d52d(0x115))return Reflect[_0x26d52d(0x112)](_0x5a72e3,_0x438f15);},__importDefault=this&&this[a274_0x1c53ea(0x122)]||function(_0x4dd6ec){var _0x783e15=a274_0x1c53ea;return _0x4dd6ec&&_0x4dd6ec[_0x783e15(0x131)]?_0x4dd6ec:{'default':_0x4dd6ec};};Object['defineProperty'](exports,a274_0x1c53ea(0x131),{'value':!![]});const sequelize_typescript_1=require(a274_0x1c53ea(0x141)),Queue_1=__importDefault(require('./Queue')),Ticket_1=__importDefault(require(a274_0x1c53ea(0x12d))),WhatsappQueue_1=__importDefault(require(a274_0x1c53ea(0x11c))),Company_1=__importDefault(require(a274_0x1c53ea(0x142)));let Whatsapp=class Whatsapp extends sequelize_typescript_1[a274_0x1c53ea(0x124)]{};function a274_0x1b2b(_0xabbac3,_0x3648c3){var _0x5dbce2=a274_0x5dbc();return a274_0x1b2b=function(_0x1b2b38,_0x23d088){_0x1b2b38=_0x1b2b38-0x100;var _0x1ef1f1=_0x5dbce2[_0x1b2b38];return _0x1ef1f1;},a274_0x1b2b(_0xabbac3,_0x3648c3);}__decorate([sequelize_typescript_1['PrimaryKey'],sequelize_typescript_1['AutoIncrement'],sequelize_typescript_1['Column'],__metadata(a274_0x1c53ea(0x113),Number)],Whatsapp[a274_0x1c53ea(0x139)],'id',void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x10e)],sequelize_typescript_1['Unique'],(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])(sequelize_typescript_1[a274_0x1c53ea(0x123)]['TEXT']),__metadata(a274_0x1c53ea(0x113),String)],Whatsapp['prototype'],a274_0x1c53ea(0x126),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])(sequelize_typescript_1[a274_0x1c53ea(0x123)][a274_0x1c53ea(0x137)]),__metadata('design:type',String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x104),void 0x0),__decorate([(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a274_0x1c53ea(0x123)][a274_0x1c53ea(0x137)]),__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x12e),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata('design:type',String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x125),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x13b),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a274_0x1c53ea(0x113),Boolean)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x144),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a274_0x1c53ea(0x113),Number)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x13e),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x146),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x118)])(''),(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])(sequelize_typescript_1[a274_0x1c53ea(0x123)][a274_0x1c53ea(0x137)]),__metadata(a274_0x1c53ea(0x113),String)],Whatsapp['prototype'],a274_0x1c53ea(0x106),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(''),(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a274_0x1c53ea(0x123)][a274_0x1c53ea(0x137)]),__metadata('design:type',String)],Whatsapp[a274_0x1c53ea(0x139)],'farewellMessage',void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x118)])(''),(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])(sequelize_typescript_1[a274_0x1c53ea(0x123)]['TEXT']),__metadata('design:type',String)],Whatsapp['prototype'],a274_0x1c53ea(0x10a),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x118)])(''),(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])(sequelize_typescript_1[a274_0x1c53ea(0x123)]['TEXT']),__metadata('design:type',String)],Whatsapp[a274_0x1c53ea(0x139)],'outOfHoursMessage',void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])({'defaultValue':a274_0x1c53ea(0x128)}),__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x127),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x118)])(![]),sequelize_typescript_1[a274_0x1c53ea(0x10e)],sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),Boolean)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x117),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x118)])(![]),sequelize_typescript_1[a274_0x1c53ea(0x10e)],sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),Boolean)],Whatsapp['prototype'],'allowGroup',void 0x0),__decorate([sequelize_typescript_1['CreatedAt'],__metadata(a274_0x1c53ea(0x113),Date)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x10f),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x11a)],__metadata(a274_0x1c53ea(0x113),Date)],Whatsapp['prototype'],'updatedAt',void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x130)])(()=>Ticket_1[a274_0x1c53ea(0x12b)]),__metadata(a274_0x1c53ea(0x113),Array)],Whatsapp['prototype'],a274_0x1c53ea(0x13c),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x145)])(()=>Queue_1[a274_0x1c53ea(0x12b)],()=>WhatsappQueue_1['default']),__metadata(a274_0x1c53ea(0x113),Array)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x10b),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x130)])(()=>WhatsappQueue_1[a274_0x1c53ea(0x12b)]),__metadata(a274_0x1c53ea(0x113),Array)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x11d),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x110)])(()=>Company_1[a274_0x1c53ea(0x12b)]),sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),Number)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x132),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x116)])(()=>Company_1[a274_0x1c53ea(0x12b)]),__metadata(a274_0x1c53ea(0x113),Company_1[a274_0x1c53ea(0x12b)])],Whatsapp['prototype'],a274_0x1c53ea(0x143),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),String)],Whatsapp['prototype'],a274_0x1c53ea(0x12a),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])(sequelize_typescript_1[a274_0x1c53ea(0x123)][a274_0x1c53ea(0x137)]),__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x12f),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])(sequelize_typescript_1[a274_0x1c53ea(0x123)]['TEXT']),__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x136),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])(sequelize_typescript_1[a274_0x1c53ea(0x123)][a274_0x1c53ea(0x137)]),__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x103),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x12c)])(sequelize_typescript_1[a274_0x1c53ea(0x123)][a274_0x1c53ea(0x137)]),__metadata('design:type',String)],Whatsapp[a274_0x1c53ea(0x139)],'tokenMeta',void 0x0),__decorate([(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a274_0x1c53ea(0x123)]['TEXT']),__metadata('design:type',String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x105),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x118)])(0x3),sequelize_typescript_1['Column'],__metadata(a274_0x1c53ea(0x113),Number)],Whatsapp['prototype'],a274_0x1c53ea(0x11b),void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x118)])(0x0),sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),String)],Whatsapp['prototype'],'timeUseBotQueues',void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x10e)])(!![]),(0x0,sequelize_typescript_1['Default'])(0x0),sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata('design:type',Number)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x13a),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata('design:type',Number)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x134),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),Number)],Whatsapp['prototype'],'sendIdQueue',void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),String)],Whatsapp['prototype'],a274_0x1c53ea(0x102),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x138),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],'ratingMessage',void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),Number)],Whatsapp['prototype'],a274_0x1c53ea(0x11e),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata('design:type',Number)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x109),void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],'whenExpiresTicket',void 0x0),__decorate([sequelize_typescript_1[a274_0x1c53ea(0x12c)],__metadata(a274_0x1c53ea(0x113),String)],Whatsapp[a274_0x1c53ea(0x139)],'expiresInactiveMessage',void 0x0),__decorate([(0x0,sequelize_typescript_1[a274_0x1c53ea(0x118)])(a274_0x1c53ea(0x107)),sequelize_typescript_1['Column'],__metadata('design:type',String)],Whatsapp[a274_0x1c53ea(0x139)],a274_0x1c53ea(0x100),void 0x0),Whatsapp=__decorate([sequelize_typescript_1['Table']],Whatsapp),exports[a274_0x1c53ea(0x12b)]=Whatsapp;