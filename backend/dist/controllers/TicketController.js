'use strict';const a33_0x5492a5=a33_0x2f38;function a33_0x2f38(_0x24aacb,_0xceb0bc){const _0x2225b7=a33_0x2225();return a33_0x2f38=function(_0x2f38af,_0x55e1c8){_0x2f38af=_0x2f38af-0x199;let _0x5a8a79=_0x2225b7[_0x2f38af];return _0x5a8a79;},a33_0x2f38(_0x24aacb,_0xceb0bc);}(function(_0x2b22c2,_0x49ca67){const _0x5f10aa=a33_0x2f38,_0x198172=_0x2b22c2();while(!![]){try{const _0xc626cb=-parseInt(_0x5f10aa(0x1b7))/0x1*(parseInt(_0x5f10aa(0x1bd))/0x2)+parseInt(_0x5f10aa(0x19a))/0x3*(-parseInt(_0x5f10aa(0x1b5))/0x4)+parseInt(_0x5f10aa(0x1bc))/0x5*(-parseInt(_0x5f10aa(0x19c))/0x6)+-parseInt(_0x5f10aa(0x1c4))/0x7+-parseInt(_0x5f10aa(0x1ae))/0x8+-parseInt(_0x5f10aa(0x1ab))/0x9+-parseInt(_0x5f10aa(0x1af))/0xa*(-parseInt(_0x5f10aa(0x1a6))/0xb);if(_0xc626cb===_0x49ca67)break;else _0x198172['push'](_0x198172['shift']());}catch(_0x1f7cc6){_0x198172['push'](_0x198172['shift']());}}}(a33_0x2225,0x90785));var __importDefault=this&&this['__importDefault']||function(_0x4d1b51){const _0x3572d5=a33_0x2f38;return _0x4d1b51&&_0x4d1b51[_0x3572d5(0x1b4)]?_0x4d1b51:{'default':_0x4d1b51};};Object[a33_0x5492a5(0x1a1)](exports,a33_0x5492a5(0x1b4),{'value':!![]}),exports[a33_0x5492a5(0x1ba)]=exports[a33_0x5492a5(0x1b1)]=exports[a33_0x5492a5(0x1bb)]=exports['showFromUUID']=exports[a33_0x5492a5(0x1cc)]=exports[a33_0x5492a5(0x1c7)]=exports[a33_0x5492a5(0x1a8)]=exports['index']=void 0x0;const socket_1=require(a33_0x5492a5(0x1b9)),Ticket_1=__importDefault(require(a33_0x5492a5(0x199))),CreateTicketService_1=__importDefault(require(a33_0x5492a5(0x1c5))),DeleteTicketService_1=__importDefault(require(a33_0x5492a5(0x1c2))),ListTicketsService_1=__importDefault(require(a33_0x5492a5(0x1c0))),ShowTicketFromUUIDService_1=__importDefault(require(a33_0x5492a5(0x1c9))),ShowTicketService_1=__importDefault(require(a33_0x5492a5(0x1ca))),UpdateTicketService_1=__importDefault(require('../services/TicketServices/UpdateTicketService')),ListTicketsServiceKanban_1=__importDefault(require(a33_0x5492a5(0x1b6))),index=async(_0x12b124,_0x4b75fd)=>{const _0x348382=a33_0x5492a5,{pageNumber:_0xc519ac,status:_0x471160,date:_0x2a65e7,dateStart:_0x156f1f,dateEnd:_0x53d63e,updatedAt:_0x44f814,searchParam:_0x50cde5,showAll:_0x16f774,queueIds:_0x253a4c,tags:_0x20dedf,users:_0xd435bc,withUnreadMessages:_0xc9d853,whatsapps:_0x57a3f1,statusFilter:_0x8a73e2}=_0x12b124[_0x348382(0x1be)],_0x380365=_0x12b124[_0x348382(0x1a5)]['id'],{companyId:_0x25e4e1}=_0x12b124[_0x348382(0x1a5)];let _0x5377f2=[],_0x57aa41=[],_0x39daa1=[],_0x1d91ff=[],_0x6eae35=[];_0x253a4c&&(_0x5377f2=JSON[_0x348382(0x1c8)](_0x253a4c));_0x20dedf&&(_0x57aa41=JSON['parse'](_0x20dedf));_0xd435bc&&(_0x39daa1=JSON[_0x348382(0x1c8)](_0xd435bc));_0x57a3f1&&(_0x1d91ff=JSON['parse'](_0x57a3f1));_0x8a73e2&&(_0x6eae35=JSON[_0x348382(0x1c8)](_0x8a73e2));const {tickets:_0x3cfcaf,count:_0x30bd98,hasMore:_0xed9149}=await(0x0,ListTicketsService_1[_0x348382(0x19e)])({'searchParam':_0x50cde5,'tags':_0x57aa41,'users':_0x39daa1,'pageNumber':_0xc519ac,'status':_0x471160,'date':_0x2a65e7,'dateStart':_0x156f1f,'dateEnd':_0x53d63e,'updatedAt':_0x44f814,'showAll':_0x16f774,'userId':_0x380365,'queueIds':_0x5377f2,'withUnreadMessages':_0xc9d853,'whatsappIds':_0x1d91ff,'statusFilters':_0x6eae35,'companyId':_0x25e4e1});return _0x4b75fd[_0x348382(0x1a9)](0xc8)[_0x348382(0x1a3)]({'tickets':_0x3cfcaf,'count':_0x30bd98,'hasMore':_0xed9149});};exports[a33_0x5492a5(0x1a0)]=index;const kanban=async(_0x525566,_0x136a8b)=>{const _0x2f0047=a33_0x5492a5,{pageNumber:_0x367e30,status:_0x20304e,date:_0xa8fd09,updatedAt:_0x210afe,searchParam:_0x1b872f,showAll:_0x32cb33,queueIds:_0xf4d6b5,tags:_0x108130,users:_0x361aca,withUnreadMessages:_0x4a07aa}=_0x525566['query'],_0x5f2aaf=_0x525566['user']['id'],{companyId:_0x3ef835}=_0x525566[_0x2f0047(0x1a5)];let _0x2c8950=[],_0xc95e14=[],_0x4690f5=[];_0xf4d6b5&&(_0x2c8950=JSON[_0x2f0047(0x1c8)](_0xf4d6b5));_0x108130&&(_0xc95e14=JSON[_0x2f0047(0x1c8)](_0x108130));_0x361aca&&(_0x4690f5=JSON[_0x2f0047(0x1c8)](_0x361aca));const {tickets:_0x4515e1,count:_0x5f1982,hasMore:_0xe26ed7}=await(0x0,ListTicketsServiceKanban_1['default'])({'searchParam':_0x1b872f,'tags':_0xc95e14,'users':_0x4690f5,'pageNumber':_0x367e30,'status':_0x20304e,'date':_0xa8fd09,'updatedAt':_0x210afe,'showAll':_0x32cb33,'userId':_0x5f2aaf,'queueIds':_0x2c8950,'withUnreadMessages':_0x4a07aa,'companyId':_0x3ef835});return _0x136a8b[_0x2f0047(0x1a9)](0xc8)['json']({'tickets':_0x4515e1,'count':_0x5f1982,'hasMore':_0xe26ed7});};exports['kanban']=kanban;const store=async(_0x509422,_0x17c96c)=>{const _0x151e72=a33_0x5492a5,{contactId:_0x78e835,status:_0x7edf93,userId:_0x3926f8,queueId:_0x263993,whatsappId:_0x4de31e}=_0x509422[_0x151e72(0x1c6)],{companyId:_0x4a43b8}=_0x509422[_0x151e72(0x1a5)],_0x53b01b=await(0x0,CreateTicketService_1[_0x151e72(0x19e)])({'contactId':_0x78e835,'status':_0x7edf93,'userId':_0x3926f8,'companyId':_0x4a43b8,'queueId':_0x263993,'whatsappId':_0x4de31e}),_0x18c098=(0x0,socket_1[_0x151e72(0x19d)])();return _0x18c098['to'](_0x53b01b['status'])[_0x151e72(0x19b)](_0x151e72(0x1ac)+_0x4a43b8+_0x151e72(0x1b8),{'action':_0x151e72(0x1bb),'ticket':_0x53b01b}),_0x17c96c[_0x151e72(0x1a9)](0xc8)['json'](_0x53b01b);};exports['store']=store;const show=async(_0xddd3e9,_0x5b1d8a)=>{const _0x15e648=a33_0x5492a5,{ticketId:_0x3eb6a1}=_0xddd3e9[_0x15e648(0x1b2)],{companyId:_0x5b404f}=_0xddd3e9['user'],_0x10d6bf=await(0x0,ShowTicketService_1[_0x15e648(0x19e)])(_0x3eb6a1,_0x5b404f);return _0x5b1d8a[_0x15e648(0x1a9)](0xc8)['json'](_0x10d6bf);};exports[a33_0x5492a5(0x1cc)]=show;const showFromUUID=async(_0x21b3d8,_0x158d01)=>{const _0x5184ed=a33_0x5492a5,{uuid:_0xa6ff47}=_0x21b3d8['params'],_0x548892=await(0x0,ShowTicketFromUUIDService_1[_0x5184ed(0x19e)])(_0xa6ff47);return _0x158d01[_0x5184ed(0x1a9)](0xc8)['json'](_0x548892);};exports[a33_0x5492a5(0x1a4)]=showFromUUID;const update=async(_0x3a78f8,_0x1f6bff)=>{const _0x23accf=a33_0x5492a5,{ticketId:_0x2ae0b2}=_0x3a78f8[_0x23accf(0x1b2)],_0x1e2e17=_0x3a78f8[_0x23accf(0x1c6)],{companyId:_0xc7d88a}=_0x3a78f8[_0x23accf(0x1a5)],{ticket:_0x46446b}=await(0x0,UpdateTicketService_1[_0x23accf(0x19e)])({'ticketData':_0x1e2e17,'ticketId':_0x2ae0b2,'companyId':_0xc7d88a});return _0x1f6bff[_0x23accf(0x1a9)](0xc8)[_0x23accf(0x1a3)](_0x46446b);};exports[a33_0x5492a5(0x1bb)]=update;const remove=async(_0x1cd0b9,_0x48e0a8)=>{const _0x5ed8cb=a33_0x5492a5,{ticketId:_0x1ef527}=_0x1cd0b9['params'],{companyId:_0x47b3f9}=_0x1cd0b9[_0x5ed8cb(0x1a5)];await(0x0,ShowTicketService_1[_0x5ed8cb(0x19e)])(_0x1ef527,_0x47b3f9);const _0x43c68d=await(0x0,DeleteTicketService_1['default'])(_0x1ef527),_0x90216=(0x0,socket_1[_0x5ed8cb(0x19d)])();return _0x90216['to'](_0x43c68d[_0x5ed8cb(0x1a9)])['to'](_0x1ef527)['to'](_0x5ed8cb(0x1a7))[_0x5ed8cb(0x19b)](_0x5ed8cb(0x1ac)+_0x47b3f9+_0x5ed8cb(0x1b8),{'action':_0x5ed8cb(0x19f),'ticketId':+_0x1ef527}),_0x48e0a8[_0x5ed8cb(0x1a9)](0xc8)['json']({'message':_0x5ed8cb(0x1b0)});};function a33_0x2225(){const _0x4f815d=['../services/TicketServices/DeleteTicketService','DESC','2094071NfiYxi','../services/TicketServices/CreateTicketService','body','store','parse','../services/TicketServices/ShowTicketFromUUIDService','../services/TicketServices/ShowTicketService','updatedAt','show','../models/Ticket','3247947kqkauw','emit','453108XiPxKV','getIO','default','delete','index','defineProperty','userId','json','showFromUUID','user','47545861fdFSPZ','notification','kanban','status','findAndCountAll','1394847kklUax','company-','companyId','8259024bNijfd','10QzpCZt','ticket\x20deleted','remove','params','closed','__esModule','4gmgQpk','../services/TicketServices/ListTicketsServiceKanban','13021rFEnEm','-ticket','../libs/socket','closeAll','update','45RdkjHR','74VJtDLi','query','toString','../services/TicketServices/ListTicketsService','queueId'];a33_0x2225=function(){return _0x4f815d;};return a33_0x2225();}exports['remove']=remove;const closeAll=async(_0x2abd3b,_0x572d12)=>{const _0x170093=a33_0x5492a5,{companyId:_0x5bf21a}=_0x2abd3b['user'],{status:_0x466bc3}=_0x2abd3b['body'],_0x240c51=(0x0,socket_1['getIO'])(),{rows:_0xcacc57}=await Ticket_1[_0x170093(0x19e)][_0x170093(0x1aa)]({'where':{'companyId':_0x5bf21a,'status':_0x466bc3,'isGroup':![]},'order':[[_0x170093(0x1cb),_0x170093(0x1c3)]]});return _0xcacc57['forEach'](async _0x555434=>{const _0x6fcfa4=_0x170093;await _0x555434[_0x6fcfa4(0x1bb)]({'status':_0x6fcfa4(0x1b3),'userId':_0x555434[_0x6fcfa4(0x1a2)]||0x1,'queueId':_0x555434[_0x6fcfa4(0x1c1)]||null,'unreadMessages':0x0,'amountUsedBotQueues':0x0}),_0x240c51['to'](_0x466bc3)['to'](_0x555434['id'][_0x6fcfa4(0x1bf)]())[_0x6fcfa4(0x19b)]('company-'+_0x555434[_0x6fcfa4(0x1ad)]+_0x6fcfa4(0x1b8),{'action':_0x6fcfa4(0x19f),'ticketId':_0x555434['id']});}),_0x572d12['status'](0xc8)[_0x170093(0x1a3)]();};exports[a33_0x5492a5(0x1ba)]=closeAll;