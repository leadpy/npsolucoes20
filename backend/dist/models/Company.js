'use strict';const a310_0x20f641=a310_0x1de7;function a310_0x2229(){const _0x588a45=['./Message','./Setting','plan','HasMany','__metadata','document','1893414oWxrRB','Table','2101455NVctgi','14Pxvrgw','recurrence','userRatings','object','length','default','JSONB','schedules','decorate','users','planId','status','30etfzrt','__esModule','Column','metadata','companieSettings','dueDate','tickets','PrimaryKey','settings','./Plan','./Contact','CASCADE','AutoIncrement','email','__decorate','14825130rujvDO','queues','function','paymentMethod','updatedAt','5016042xumCJu','defineProperty','BelongsTo','whatsapps','./Whatsapp','design:type','17638QIHFSE','UpdatedAt','3772080ddnAKQ','6gbdjfA','36776NHyJdO','prototype','contacts','./Queue','getOwnPropertyDescriptor'];a310_0x2229=function(){return _0x588a45;};return a310_0x2229();}(function(_0x433810,_0x462604){const _0x5e821c=a310_0x1de7,_0xb49a75=_0x433810();while(!![]){try{const _0x255601=parseInt(_0x5e821c(0x89))/0x1*(-parseInt(_0x5e821c(0x86))/0x2)+-parseInt(_0x5e821c(0xa4))/0x3*(parseInt(_0x5e821c(0x8a))/0x4)+-parseInt(_0x5e821c(0x97))/0x5+parseInt(_0x5e821c(0x95))/0x6*(-parseInt(_0x5e821c(0x98))/0x7)+-parseInt(_0x5e821c(0x88))/0x8+parseInt(_0x5e821c(0x80))/0x9+parseInt(_0x5e821c(0x7b))/0xa;if(_0x255601===_0x462604)break;else _0xb49a75['push'](_0xb49a75['shift']());}catch(_0x51e6b4){_0xb49a75['push'](_0xb49a75['shift']());}}}(a310_0x2229,0x5ad5a));var __decorate=this&&this[a310_0x20f641(0x7a)]||function(_0x2bb5d2,_0x1ee7d2,_0x4096fd,_0x4a5ec7){const _0x1de4fa=a310_0x20f641;var _0x50c477=arguments[_0x1de4fa(0x9c)],_0x1a0dfa=_0x50c477<0x3?_0x1ee7d2:_0x4a5ec7===null?_0x4a5ec7=Object[_0x1de4fa(0x8e)](_0x1ee7d2,_0x4096fd):_0x4a5ec7,_0x32d446;if(typeof Reflect===_0x1de4fa(0x9b)&&typeof Reflect[_0x1de4fa(0xa0)]===_0x1de4fa(0x7d))_0x1a0dfa=Reflect[_0x1de4fa(0xa0)](_0x2bb5d2,_0x1ee7d2,_0x4096fd,_0x4a5ec7);else{for(var _0xa95ef1=_0x2bb5d2[_0x1de4fa(0x9c)]-0x1;_0xa95ef1>=0x0;_0xa95ef1--)if(_0x32d446=_0x2bb5d2[_0xa95ef1])_0x1a0dfa=(_0x50c477<0x3?_0x32d446(_0x1a0dfa):_0x50c477>0x3?_0x32d446(_0x1ee7d2,_0x4096fd,_0x1a0dfa):_0x32d446(_0x1ee7d2,_0x4096fd))||_0x1a0dfa;}return _0x50c477>0x3&&_0x1a0dfa&&Object[_0x1de4fa(0x81)](_0x1ee7d2,_0x4096fd,_0x1a0dfa),_0x1a0dfa;},__metadata=this&&this[a310_0x20f641(0x93)]||function(_0x5874bf,_0x3e3124){const _0x4b63e8=a310_0x20f641;if(typeof Reflect===_0x4b63e8(0x9b)&&typeof Reflect[_0x4b63e8(0x6f)]==='function')return Reflect[_0x4b63e8(0x6f)](_0x5874bf,_0x3e3124);},__importDefault=this&&this['__importDefault']||function(_0x17b711){return _0x17b711&&_0x17b711['__esModule']?_0x17b711:{'default':_0x17b711};};Object[a310_0x20f641(0x81)](exports,a310_0x20f641(0xa5),{'value':!![]});const sequelize_typescript_1=require('sequelize-typescript'),Contact_1=__importDefault(require(a310_0x20f641(0x76))),Message_1=__importDefault(require(a310_0x20f641(0x8f))),Plan_1=__importDefault(require(a310_0x20f641(0x75))),Queue_1=__importDefault(require(a310_0x20f641(0x8d))),Setting_1=__importDefault(require(a310_0x20f641(0x90))),Ticket_1=__importDefault(require('./Ticket')),TicketTraking_1=__importDefault(require('./TicketTraking')),User_1=__importDefault(require('./User')),UserRating_1=__importDefault(require('./UserRating')),Whatsapp_1=__importDefault(require(a310_0x20f641(0x84))),CompaniesSettings_1=__importDefault(require('./CompaniesSettings'));function a310_0x1de7(_0x27c1f4,_0x192823){const _0x222999=a310_0x2229();return a310_0x1de7=function(_0x1de762,_0xfd757c){_0x1de762=_0x1de762-0x6e;let _0x188d40=_0x222999[_0x1de762];return _0x188d40;},a310_0x1de7(_0x27c1f4,_0x192823);}let Company=class Company extends sequelize_typescript_1['Model']{};__decorate([sequelize_typescript_1[a310_0x20f641(0x73)],sequelize_typescript_1[a310_0x20f641(0x78)],sequelize_typescript_1['Column'],__metadata('design:type',Number)],Company[a310_0x20f641(0x8b)],'id',void 0x0),__decorate([sequelize_typescript_1[a310_0x20f641(0x6e)],__metadata('design:type',String)],Company[a310_0x20f641(0x8b)],'name',void 0x0),__decorate([sequelize_typescript_1[a310_0x20f641(0x6e)],__metadata(a310_0x20f641(0x85),String)],Company[a310_0x20f641(0x8b)],'phone',void 0x0),__decorate([sequelize_typescript_1[a310_0x20f641(0x6e)],__metadata(a310_0x20f641(0x85),String)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0x79),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x6e)])({'defaultValue':''}),__metadata(a310_0x20f641(0x85),String)],Company['prototype'],a310_0x20f641(0x94),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x6e)])({'defaultValue':''}),__metadata(a310_0x20f641(0x85),String)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0x7e),void 0x0),__decorate([sequelize_typescript_1[a310_0x20f641(0x6e)],__metadata(a310_0x20f641(0x85),Date)],Company[a310_0x20f641(0x8b)],'lastLogin',void 0x0),__decorate([sequelize_typescript_1[a310_0x20f641(0x6e)],__metadata('design:type',Boolean)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0xa3),void 0x0),__decorate([sequelize_typescript_1[a310_0x20f641(0x6e)],__metadata(a310_0x20f641(0x85),String)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0x71),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a310_0x20f641(0x85),String)],Company['prototype'],a310_0x20f641(0x99),void 0x0),__decorate([(0x0,sequelize_typescript_1['Column'])({'type':sequelize_typescript_1['DataType'][a310_0x20f641(0x9e)]}),__metadata(a310_0x20f641(0x85),Array)],Company['prototype'],a310_0x20f641(0x9f),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Plan_1['default']),sequelize_typescript_1[a310_0x20f641(0x6e)],__metadata('design:type',Number)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0xa2),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x82)])(()=>Plan_1[a310_0x20f641(0x9d)]),__metadata(a310_0x20f641(0x85),Plan_1['default'])],Company[a310_0x20f641(0x8b)],a310_0x20f641(0x91),void 0x0),__decorate([sequelize_typescript_1['CreatedAt'],__metadata(a310_0x20f641(0x85),Date)],Company['prototype'],'createdAt',void 0x0),__decorate([sequelize_typescript_1[a310_0x20f641(0x87)],__metadata(a310_0x20f641(0x85),Date)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0x7f),void 0x0),__decorate([(0x0,sequelize_typescript_1['HasMany'])(()=>User_1[a310_0x20f641(0x9d)],{'onUpdate':a310_0x20f641(0x77),'onDelete':'CASCADE','hooks':!![]}),__metadata(a310_0x20f641(0x85),Array)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0xa1),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x92)])(()=>UserRating_1[a310_0x20f641(0x9d)],{'onUpdate':a310_0x20f641(0x77),'onDelete':a310_0x20f641(0x77),'hooks':!![]}),__metadata(a310_0x20f641(0x85),Array)],Company['prototype'],a310_0x20f641(0x9a),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x92)])(()=>Queue_1['default'],{'onUpdate':a310_0x20f641(0x77),'onDelete':a310_0x20f641(0x77),'hooks':!![]}),__metadata(a310_0x20f641(0x85),Array)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0x7c),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x92)])(()=>Whatsapp_1[a310_0x20f641(0x9d)],{'onUpdate':'CASCADE','onDelete':a310_0x20f641(0x77),'hooks':!![]}),__metadata(a310_0x20f641(0x85),Array)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0x83),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x92)])(()=>Message_1[a310_0x20f641(0x9d)],{'onUpdate':a310_0x20f641(0x77),'onDelete':a310_0x20f641(0x77),'hooks':!![]}),__metadata(a310_0x20f641(0x85),Array)],Company[a310_0x20f641(0x8b)],'messages',void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x92)])(()=>Contact_1['default'],{'onUpdate':a310_0x20f641(0x77),'onDelete':'CASCADE','hooks':!![]}),__metadata(a310_0x20f641(0x85),Array)],Company['prototype'],a310_0x20f641(0x8c),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x92)])(()=>Setting_1['default'],{'onUpdate':a310_0x20f641(0x77),'onDelete':'CASCADE','hooks':!![]}),__metadata(a310_0x20f641(0x85),Array)],Company[a310_0x20f641(0x8b)],a310_0x20f641(0x74),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x92)])(()=>CompaniesSettings_1[a310_0x20f641(0x9d)],{'onUpdate':a310_0x20f641(0x77),'onDelete':a310_0x20f641(0x77),'hooks':!![]}),__metadata(a310_0x20f641(0x85),CompaniesSettings_1[a310_0x20f641(0x9d)])],Company[a310_0x20f641(0x8b)],a310_0x20f641(0x70),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x92)])(()=>Ticket_1[a310_0x20f641(0x9d)],{'onUpdate':a310_0x20f641(0x77),'onDelete':a310_0x20f641(0x77),'hooks':!![]}),__metadata(a310_0x20f641(0x85),Array)],Company['prototype'],a310_0x20f641(0x72),void 0x0),__decorate([(0x0,sequelize_typescript_1[a310_0x20f641(0x92)])(()=>TicketTraking_1[a310_0x20f641(0x9d)],{'onUpdate':a310_0x20f641(0x77),'onDelete':a310_0x20f641(0x77),'hooks':!![]}),__metadata(a310_0x20f641(0x85),Array)],Company[a310_0x20f641(0x8b)],'ticketTrankins',void 0x0),Company=__decorate([sequelize_typescript_1[a310_0x20f641(0x96)]],Company),exports[a310_0x20f641(0x9d)]=Company;