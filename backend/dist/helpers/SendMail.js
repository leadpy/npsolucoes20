'use strict';const a273_0x1cd769=a273_0x52b3;(function(_0x4753a2,_0x455adb){const _0x20cc96=a273_0x52b3,_0x4b240a=_0x4753a2();while(!![]){try{const _0x2b4cbc=parseInt(_0x20cc96(0x18c))/0x1+-parseInt(_0x20cc96(0x197))/0x2*(parseInt(_0x20cc96(0x196))/0x3)+parseInt(_0x20cc96(0x19a))/0x4+parseInt(_0x20cc96(0x1a4))/0x5*(parseInt(_0x20cc96(0x19f))/0x6)+-parseInt(_0x20cc96(0x19e))/0x7*(parseInt(_0x20cc96(0x190))/0x8)+-parseInt(_0x20cc96(0x195))/0x9*(-parseInt(_0x20cc96(0x19b))/0xa)+parseInt(_0x20cc96(0x18b))/0xb*(-parseInt(_0x20cc96(0x192))/0xc);if(_0x2b4cbc===_0x455adb)break;else _0x4b240a['push'](_0x4b240a['shift']());}catch(_0x35ecd7){_0x4b240a['push'](_0x4b240a['shift']());}}}(a273_0x59cc,0x6955e));var __importDefault=this&&this[a273_0x1cd769(0x191)]||function(_0x18189c){const _0x329043=a273_0x1cd769;return _0x18189c&&_0x18189c[_0x329043(0x1a2)]?_0x18189c:{'default':_0x18189c};};Object[a273_0x1cd769(0x18f)](exports,a273_0x1cd769(0x1a2),{'value':!![]}),exports[a273_0x1cd769(0x1a3)]=void 0x0;function a273_0x59cc(){const _0x2ae9c4=['defineProperty','816wmeEOR','__importDefault','95688XlBHaY','MAIL_USER','createTransport','150021GkYWVv','1894566VbXTbG','2wyJyjU','subject','default','2889964xldcKK','70mSDhne','Preview\x20URL:\x20%s','env','910BllTYN','550674WOECfR','text','log','__esModule','SendMail','35xdpiQm','1122aBoloK','407957RcYpyk','MAIL_HOST','html'];a273_0x59cc=function(){return _0x2ae9c4;};return a273_0x59cc();}function a273_0x52b3(_0x25b84a,_0x38f913){const _0x59ccd8=a273_0x59cc();return a273_0x52b3=function(_0x52b39a,_0x1d6307){_0x52b39a=_0x52b39a-0x18b;let _0x3bd0e7=_0x59ccd8[_0x52b39a];return _0x3bd0e7;},a273_0x52b3(_0x25b84a,_0x38f913);}const nodemailer_1=__importDefault(require('nodemailer'));async function SendMail(_0x330c36){const _0x53c8ec=a273_0x1cd769,_0x49dbc3={'host':process[_0x53c8ec(0x19d)][_0x53c8ec(0x18d)],'auth':{'user':process[_0x53c8ec(0x19d)][_0x53c8ec(0x193)],'pass':process[_0x53c8ec(0x19d)]['MAIL_PASS']}},_0x12b1ee=nodemailer_1[_0x53c8ec(0x199)][_0x53c8ec(0x194)](_0x49dbc3);let _0x5514e7=await _0x12b1ee['sendMail']({'from':process[_0x53c8ec(0x19d)]['MAIL_FROM'],'to':_0x330c36['to'],'subject':_0x330c36[_0x53c8ec(0x198)],'text':_0x330c36['text'],'html':_0x330c36[_0x53c8ec(0x18e)]||_0x330c36[_0x53c8ec(0x1a0)]});console[_0x53c8ec(0x1a1)]('Message\x20sent:\x20%s',_0x5514e7['messageId']),console['log'](_0x53c8ec(0x19c),nodemailer_1[_0x53c8ec(0x199)]['getTestMessageUrl'](_0x5514e7));}exports['SendMail']=SendMail;