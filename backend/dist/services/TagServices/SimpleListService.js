'use strict';function a567_0x187b(_0x4f5508,_0x540465){const _0x3dc218=a567_0x3dc2();return a567_0x187b=function(_0x187b49,_0x45f607){_0x187b49=_0x187b49-0x1d4;let _0x12ebb5=_0x3dc218[_0x187b49];return _0x12ebb5;},a567_0x187b(_0x4f5508,_0x540465);}const a567_0x2a1a10=a567_0x187b;(function(_0x2c90cf,_0x4c82be){const _0x496349=a567_0x187b,_0x193444=_0x2c90cf();while(!![]){try{const _0x4bea24=-parseInt(_0x496349(0x1d7))/0x1*(-parseInt(_0x496349(0x1e0))/0x2)+-parseInt(_0x496349(0x1e8))/0x3*(-parseInt(_0x496349(0x1da))/0x4)+parseInt(_0x496349(0x1d4))/0x5+parseInt(_0x496349(0x1e9))/0x6+-parseInt(_0x496349(0x1ef))/0x7+parseInt(_0x496349(0x1d9))/0x8+parseInt(_0x496349(0x1e4))/0x9*(-parseInt(_0x496349(0x1e3))/0xa);if(_0x4bea24===_0x4c82be)break;else _0x193444['push'](_0x193444['shift']());}catch(_0x52dd8e){_0x193444['push'](_0x193444['shift']());}}}(a567_0x3dc2,0x5b1dd));var __importDefault=this&&this[a567_0x2a1a10(0x1e1)]||function(_0x2f2685){const _0x35135d=a567_0x2a1a10;return _0x2f2685&&_0x2f2685[_0x35135d(0x1ea)]?_0x2f2685:{'default':_0x2f2685};};Object[a567_0x2a1a10(0x1df)](exports,a567_0x2a1a10(0x1ea),{'value':!![]});const sequelize_1=require(a567_0x2a1a10(0x1dc)),Tag_1=__importDefault(require('../../models/Tag')),Contact_1=__importDefault(require(a567_0x2a1a10(0x1dd))),ListService=async({companyId:_0x556a9f,searchParam:_0x3c61e9,kanban:kanban=0x0})=>{const _0x208916=a567_0x2a1a10;let _0x298740={};_0x3c61e9&&(_0x298740={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x208916(0x1e2)]]:'%'+_0x3c61e9+'%'}},{'color':{[sequelize_1['Op'][_0x208916(0x1e2)]]:'%'+_0x3c61e9+'%'}}]});const _0x2f3976=await Tag_1[_0x208916(0x1d5)][_0x208916(0x1de)]({'where':{..._0x298740,'companyId':_0x556a9f,'kanban':kanban},'order':[['name',_0x208916(0x1e6)]],'include':[{'model':Contact_1[_0x208916(0x1d5)],'as':_0x208916(0x1e5)}],'attributes':{'exclude':['createdAt',_0x208916(0x1d6)],'include':[[sequelize_1[_0x208916(0x1ed)]['fn'](_0x208916(0x1eb),sequelize_1[_0x208916(0x1ed)]['col']('contacts.id')),_0x208916(0x1ec)]]},'group':[_0x208916(0x1e7),_0x208916(0x1ee),_0x208916(0x1d8),'contacts.ContactTag.createdAt',_0x208916(0x1db),'contacts.id']});return _0x2f3976;};function a567_0x3dc2(){const _0x4d3ee0=['3602120mYszzk','16HmBjmG','contacts.ContactTag.updatedAt','sequelize','../../models/Contact','findAll','defineProperty','1032158zsaIqz','__importDefault','like','10fouHZc','11608479znvZrA','contacts','ASC','Tag.id','234948jlKZwY','3106062tOaSXb','__esModule','COUNT','contactsCount','Sequelize','contacts.ContactTag.tagId','4835824gDpEMM','2782955YNJILO','default','updatedAt','1AoMVWb','contacts.ContactTag.contactId'];a567_0x3dc2=function(){return _0x4d3ee0;};return a567_0x3dc2();}exports['default']=ListService;