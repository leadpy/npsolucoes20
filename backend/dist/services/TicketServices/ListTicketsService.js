'use strict';const a486_0x27401f=a486_0x1772;(function(_0x478fec,_0x43d6a1){const _0x3a1af4=a486_0x1772,_0x5e9bb8=_0x478fec();while(!![]){try{const _0x3008d6=parseInt(_0x3a1af4(0x183))/0x1+parseInt(_0x3a1af4(0x1a6))/0x2+parseInt(_0x3a1af4(0x19c))/0x3+-parseInt(_0x3a1af4(0x1ba))/0x4*(-parseInt(_0x3a1af4(0x195))/0x5)+parseInt(_0x3a1af4(0x1b9))/0x6+parseInt(_0x3a1af4(0x181))/0x7+parseInt(_0x3a1af4(0x1a5))/0x8*(-parseInt(_0x3a1af4(0x1a9))/0x9);if(_0x3008d6===_0x43d6a1)break;else _0x5e9bb8['push'](_0x5e9bb8['shift']());}catch(_0x23b079){_0x5e9bb8['push'](_0x5e9bb8['shift']());}}}(a486_0x546f,0xf0356));function a486_0x1772(_0x313595,_0xac7bfb){const _0x546f62=a486_0x546f();return a486_0x1772=function(_0x177236,_0x1a8d1a){_0x177236=_0x177236-0x180;let _0x1b6884=_0x546f62[_0x177236];return _0x1b6884;},a486_0x1772(_0x313595,_0xac7bfb);}var __importDefault=this&&this[a486_0x27401f(0x190)]||function(_0x1f2599){const _0xb9c1c4=a486_0x27401f;return _0x1f2599&&_0x1f2599[_0xb9c1c4(0x194)]?_0x1f2599:{'default':_0x1f2599};};Object[a486_0x27401f(0x1b4)](exports,a486_0x27401f(0x194),{'value':!![]});function a486_0x546f(){const _0x5bb0fa=['8275694iMUDrU','push','1071058XyyQOa','where','like','admin','isArray','endOfDay','messages','body','DESC','search','true','Sequelize','allowGroup','__importDefault','open','col','disable','__esModule','8957285mJdmWo','group','name','whatsappId','max','startOfDay','LOWER','1202739IXnwRc','extraInfo','contact','closed','queue','contactId','default','parseISO','pending','8MhQXdG','1733660qWHvHX','between','updatedAt','52535889gvSPMZ','intersection','profilePicUrl','../../models/Tag','user','acceptAudioMessage','../../models/Queue','../../models/ContactTag','enable','trim','tags','defineProperty','contactTags','allTicket','expiresTicket','../../models/Whatsapp','9052290MLlCde','4mTHoMw','LIKE','findAll','map','queueId','../../models/Ticket','../../models/Contact','color','../../models/Message','date-fns','sequelize','length','contact.name','companyId'];a486_0x546f=function(){return _0x5bb0fa;};return a486_0x546f();}const sequelize_1=require(a486_0x27401f(0x1c4)),date_fns_1=require(a486_0x27401f(0x1c3)),Ticket_1=__importDefault(require(a486_0x27401f(0x1bf))),Contact_1=__importDefault(require(a486_0x27401f(0x1c0))),Message_1=__importDefault(require(a486_0x27401f(0x1c2))),Queue_1=__importDefault(require(a486_0x27401f(0x1af))),User_1=__importDefault(require('../../models/User')),ShowUserService_1=__importDefault(require('../UserServices/ShowUserService')),Tag_1=__importDefault(require(a486_0x27401f(0x1ac))),lodash_1=require('lodash'),Whatsapp_1=__importDefault(require(a486_0x27401f(0x1b8))),ContactTag_1=__importDefault(require(a486_0x27401f(0x1b0))),ListTicketsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x40746c,tags:_0x2c0829,users:_0x135893,status:_0x209128,date:_0x3bbbb8,dateStart:_0x1015aa,dateEnd:_0x56fa68,updatedAt:_0x45f99b,showAll:_0x35d8b5,userId:_0x13c7e6,withUnreadMessages:_0x43adcb,whatsappIds:_0x3235b1,statusFilters:_0x113ae5,companyId:_0x995df6})=>{const _0x4abe24=a486_0x27401f;let _0x5e8512={'status':_0x4abe24(0x1a4)},_0x455c60;_0x455c60=[{'model':Contact_1[_0x4abe24(0x1a2)],'as':_0x4abe24(0x19e),'attributes':['id','name','number','email',_0x4abe24(0x1ab),_0x4abe24(0x1ae),'active'],'include':[_0x4abe24(0x19d),_0x4abe24(0x1b5),_0x4abe24(0x1b3)]},{'model':Queue_1['default'],'as':_0x4abe24(0x1a0),'attributes':['id','name',_0x4abe24(0x1c1)]},{'model':User_1[_0x4abe24(0x1a2)],'as':_0x4abe24(0x1ad),'attributes':['id',_0x4abe24(0x197)]},{'model':Tag_1[_0x4abe24(0x1a2)],'as':_0x4abe24(0x1b3),'attributes':['id','name','color']},{'model':Whatsapp_1[_0x4abe24(0x1a2)],'as':'whatsapp','attributes':[_0x4abe24(0x197),_0x4abe24(0x1b7)]}];const _0x35e493=await(0x0,ShowUserService_1[_0x4abe24(0x1a2)])(_0x13c7e6);_0x209128===_0x4abe24(0x191)&&(_0x5e8512={..._0x5e8512,'userId':_0x13c7e6,'queueId':{[sequelize_1['Op']['in']]:_0x40746c}});_0x209128===_0x4abe24(0x196)&&(_0x5e8512={..._0x5e8512,'queueId':_0x35e493[_0x4abe24(0x18f)]&&_0x35e493['allTicket']||_0x35d8b5===_0x4abe24(0x18d)?null:{[sequelize_1['Op']['in']]:_0x40746c}});if(_0x35e493['profile']===_0x4abe24(0x1ad)&&_0x209128===_0x4abe24(0x1a4)&&_0x35e493['allTicket']===_0x4abe24(0x1b1)){const _0x3e275f=[],_0x5f5cb0=await Ticket_1['default'][_0x4abe24(0x1bc)]({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x35e493['id'],null]},'queueId':{[sequelize_1['Op']['or']]:[_0x40746c,null]},'status':_0x4abe24(0x1a4)}});_0x5f5cb0&&_0x3e275f[_0x4abe24(0x182)](_0x5f5cb0[_0x4abe24(0x1bd)](_0x11705d=>_0x11705d['id']));const _0x38729a=(0x0,lodash_1[_0x4abe24(0x1aa)])(..._0x3e275f);_0x5e8512={..._0x5e8512,'id':{[sequelize_1['Op']['in']]:_0x38729a}};}if(_0x35e493['profile']===_0x4abe24(0x1ad)&&_0x209128==='pending'&&_0x35e493[_0x4abe24(0x1b6)]===_0x4abe24(0x193)){const _0x463a3f=[],_0x3f6f5e=await Ticket_1[_0x4abe24(0x1a2)][_0x4abe24(0x1bc)]({'where':{[sequelize_1['Op']['or']]:[{'userId':{[sequelize_1['Op']['or']]:[_0x35e493['id'],null]}},{'status':{[sequelize_1['Op']['or']]:[_0x4abe24(0x1a4),'closed']}}],'queueId':{[sequelize_1['Op']['in']]:_0x40746c},'status':'pending'}});_0x3f6f5e&&_0x463a3f[_0x4abe24(0x182)](_0x3f6f5e[_0x4abe24(0x1bd)](_0xdaabc4=>_0xdaabc4['id']));const _0x36d9bb=(0x0,lodash_1['intersection'])(..._0x463a3f);_0x5e8512={..._0x5e8512,'id':{[sequelize_1['Op']['in']]:_0x36d9bb}};}_0x35d8b5===_0x4abe24(0x18d)&&_0x35e493['profile']===_0x4abe24(0x186)&&(_0x5e8512={'queueId':{[sequelize_1['Op']['or']]:[_0x40746c,null]}});_0x209128&&_0x209128!==_0x4abe24(0x18c)&&(_0x5e8512={..._0x5e8512,'status':_0x209128});if(_0x209128===_0x4abe24(0x19f)){const _0x43789f=[],_0x116e00=await Ticket_1[_0x4abe24(0x1a2)]['findAll']({'where':{'queueId':_0x35d8b5===_0x4abe24(0x18d)||_0x35e493['allTicket']===_0x4abe24(0x1b1)?{[sequelize_1['Op']['or']]:[_0x40746c,null]}:_0x40746c},'group':[_0x4abe24(0x180),_0x4abe24(0x1a1),_0x4abe24(0x1be),_0x4abe24(0x198)],'attributes':[_0x4abe24(0x180),_0x4abe24(0x1a1),'queueId',_0x4abe24(0x198),[sequelize_1[_0x4abe24(0x18e)]['fn'](_0x4abe24(0x199),sequelize_1[_0x4abe24(0x18e)][_0x4abe24(0x192)]('id')),'id']]});_0x116e00&&_0x43789f['push'](_0x116e00[_0x4abe24(0x1bd)](_0x407db8=>_0x407db8['id']));const _0xbb7ac3=(0x0,lodash_1[_0x4abe24(0x1aa)])(..._0x43789f);_0x5e8512={..._0x5e8512,'id':{[sequelize_1['Op']['in']]:_0xbb7ac3}};}if(_0x209128===_0x4abe24(0x18c)){_0x5e8512={'companyId':_0x995df6};_0x35e493['profile']===_0x4abe24(0x1ad)&&(_0x5e8512={'userId':{[sequelize_1['Op']['or']]:[_0x13c7e6,null]},'queueId':{[sequelize_1['Op']['in']]:_0x40746c}});_0x3bbbb8&&(_0x5e8512={'createdAt':{[sequelize_1['Op'][_0x4abe24(0x1a7)]]:[+(0x0,date_fns_1[_0x4abe24(0x19a)])((0x0,date_fns_1['parseISO'])(_0x3bbbb8)),+(0x0,date_fns_1['endOfDay'])((0x0,date_fns_1[_0x4abe24(0x1a3)])(_0x3bbbb8))]}});_0x1015aa&&_0x56fa68&&(_0x5e8512={'updatedAt':{[sequelize_1['Op'][_0x4abe24(0x1a7)]]:[+(0x0,date_fns_1[_0x4abe24(0x19a)])((0x0,date_fns_1[_0x4abe24(0x1a3)])(_0x1015aa)),+(0x0,date_fns_1[_0x4abe24(0x188)])((0x0,date_fns_1[_0x4abe24(0x1a3)])(_0x56fa68))]}});_0x45f99b&&(_0x5e8512={'updatedAt':{[sequelize_1['Op']['between']]:[+(0x0,date_fns_1[_0x4abe24(0x19a)])((0x0,date_fns_1[_0x4abe24(0x1a3)])(_0x45f99b)),+(0x0,date_fns_1[_0x4abe24(0x188)])((0x0,date_fns_1[_0x4abe24(0x1a3)])(_0x45f99b))]}});_0x43adcb==='true'&&(_0x5e8512={[sequelize_1['Op']['or']]:[{'userId':_0x13c7e6},{'status':_0x4abe24(0x1a4)}],'queueId':{[sequelize_1['Op']['or']]:[_0x40746c,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0}});if(searchParam){const _0x41f82f=searchParam['toLocaleLowerCase']()[_0x4abe24(0x1b2)]();_0x455c60=[..._0x455c60,{'model':Message_1[_0x4abe24(0x1a2)],'as':_0x4abe24(0x189),'attributes':['id',_0x4abe24(0x18a)],'where':{'body':(0x0,sequelize_1[_0x4abe24(0x184)])((0x0,sequelize_1['fn'])(_0x4abe24(0x19b),(0x0,sequelize_1[_0x4abe24(0x192)])(_0x4abe24(0x18a))),_0x4abe24(0x1bb),'%'+_0x41f82f+'%')},'required':![],'duplicating':![]}],_0x5e8512={..._0x5e8512,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1[_0x4abe24(0x184)])((0x0,sequelize_1['fn'])('LOWER',(0x0,sequelize_1[_0x4abe24(0x192)])(_0x4abe24(0x1c6))),_0x4abe24(0x1bb),'%'+_0x41f82f+'%')},{'$contact.number$':{[sequelize_1['Op'][_0x4abe24(0x185)]]:'%'+_0x41f82f+'%'}},{'$message.body$':(0x0,sequelize_1[_0x4abe24(0x184)])((0x0,sequelize_1['fn'])(_0x4abe24(0x19b),(0x0,sequelize_1[_0x4abe24(0x192)])('body')),_0x4abe24(0x1bb),'%'+_0x41f82f+'%')}]};}if(Array[_0x4abe24(0x187)](_0x2c0829)&&_0x2c0829[_0x4abe24(0x1c5)]>0x0){const _0x1745dd=[],_0x270bbe=await ContactTag_1[_0x4abe24(0x1a2)][_0x4abe24(0x1bc)]({'where':{'tagId':{[sequelize_1['Op']['in']]:_0x2c0829}}});_0x270bbe&&_0x1745dd[_0x4abe24(0x182)](_0x270bbe['map'](_0x417add=>_0x417add['contactId']));const _0x4d0636=(0x0,lodash_1[_0x4abe24(0x1aa)])(..._0x1745dd);_0x5e8512={..._0x5e8512,'contactId':{[sequelize_1['Op']['in']]:_0x4d0636}};}Array[_0x4abe24(0x187)](_0x135893)&&_0x135893[_0x4abe24(0x1c5)]>0x0&&(_0x5e8512={..._0x5e8512,'userId':{[sequelize_1['Op']['in']]:_0x135893}}),Array[_0x4abe24(0x187)](_0x3235b1)&&_0x3235b1['length']>0x0&&(_0x5e8512={..._0x5e8512,'whatsappId':{[sequelize_1['Op']['in']]:_0x3235b1}}),Array[_0x4abe24(0x187)](_0x113ae5)&&_0x113ae5[_0x4abe24(0x1c5)]>0x0&&(_0x5e8512={..._0x5e8512,'status':{[sequelize_1['Op']['in']]:_0x113ae5}});}const _0x3ccd2d=0x28,_0x310d98=_0x3ccd2d*(+pageNumber-0x1);_0x5e8512={..._0x5e8512,'companyId':_0x995df6};const {count:_0x6f3151,rows:_0xb24ed5}=await Ticket_1[_0x4abe24(0x1a2)]['findAndCountAll']({'where':_0x5e8512,'include':_0x455c60,'distinct':!![],'limit':_0x3ccd2d,'offset':_0x310d98,'order':[[_0x4abe24(0x1a8),_0x4abe24(0x18b)]],'subQuery':![]}),_0x344447=_0x6f3151>_0x310d98+_0xb24ed5['length'];return{'tickets':_0xb24ed5,'count':_0x6f3151,'hasMore':_0x344447};};exports[a486_0x27401f(0x1a2)]=ListTicketsService;