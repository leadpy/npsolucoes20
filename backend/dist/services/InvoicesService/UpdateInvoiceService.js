'use strict';const a491_0x1a0339=a491_0x5e4c;(function(_0x5f22bf,_0x3032df){const _0x27db07=a491_0x5e4c,_0x4ddfea=_0x5f22bf();while(!![]){try{const _0x3a9f58=parseInt(_0x27db07(0x109))/0x1+-parseInt(_0x27db07(0x105))/0x2*(parseInt(_0x27db07(0x107))/0x3)+parseInt(_0x27db07(0x103))/0x4*(parseInt(_0x27db07(0x10a))/0x5)+-parseInt(_0x27db07(0x108))/0x6+-parseInt(_0x27db07(0x10f))/0x7+-parseInt(_0x27db07(0x104))/0x8*(parseInt(_0x27db07(0x10c))/0x9)+parseInt(_0x27db07(0x10d))/0xa;if(_0x3a9f58===_0x3032df)break;else _0x4ddfea['push'](_0x4ddfea['shift']());}catch(_0x149688){_0x4ddfea['push'](_0x4ddfea['shift']());}}}(a491_0x3b16,0x3a373));function a491_0x3b16(){const _0x15e41c=['../../errors/AppError','621927NDDNLj','5931050VqiNOL','defineProperty','1790481nWkWmb','../../models/Invoices','__esModule','__importDefault','3020TdClQT','16fgJVWx','6xuzcLI','default','149067cdsoKt','380184HJFGnu','195896LyRuXQ','370bWnGvd'];a491_0x3b16=function(){return _0x15e41c;};return a491_0x3b16();}var __importDefault=this&&this[a491_0x1a0339(0x102)]||function(_0x34f7af){const _0xbaa8fe=a491_0x1a0339;return _0x34f7af&&_0x34f7af[_0xbaa8fe(0x101)]?_0x34f7af:{'default':_0x34f7af};};function a491_0x5e4c(_0x2fd960,_0x33cda6){const _0x3b1691=a491_0x3b16();return a491_0x5e4c=function(_0x5e4cd5,_0x1a6ee2){_0x5e4cd5=_0x5e4cd5-0x101;let _0x165ea2=_0x3b1691[_0x5e4cd5];return _0x165ea2;},a491_0x5e4c(_0x2fd960,_0x33cda6);}Object[a491_0x1a0339(0x10e)](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require(a491_0x1a0339(0x10b))),Invoices_1=__importDefault(require(a491_0x1a0339(0x110))),UpdateInvoiceService=async _0x2574c4=>{const _0x5926b2=a491_0x1a0339,{id:_0x4de1b7,status:_0x32b52a}=_0x2574c4,_0x33d402=await Invoices_1[_0x5926b2(0x106)]['findByPk'](_0x4de1b7);if(!_0x33d402)throw new AppError_1[(_0x5926b2(0x106))]('ERR_NO_PLAN_FOUND',0x194);return await _0x33d402['update']({'status':_0x32b52a}),_0x33d402;};exports[a491_0x1a0339(0x106)]=UpdateInvoiceService;