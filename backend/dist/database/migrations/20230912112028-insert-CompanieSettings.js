function a238_0x4611(_0xa366ff,_0x402032){var _0x3d1751=a238_0x3d17();return a238_0x4611=function(_0x4611c0,_0x5afc4b){_0x4611c0=_0x4611c0-0x175;var _0x45ade1=_0x3d1751[_0x4611c0];return _0x45ade1;},a238_0x4611(_0xa366ff,_0x402032);}var a238_0x3f3868=a238_0x4611;function a238_0x3d17(){var _0x2def35=['423051zIZnlj','984796rYdbQy','573894vWBbLW','752949VSGbpR','sequelize','DELETE\x20FROM\x20\x22CompaniesSettings\x22\x20WHERE\x20\x22companyId\x22\x20<>\x201','exports','2185332uekfnE','119JtQacg','212488PSYQLg','976590YnsUxs','\x0a\x20\x20\x20\x20\x20\x20do\x0a\x20\x20\x20\x20\x20\x20\x20\x20$$\x0a\x20\x20\x20\x20\x20\x20declare\x0a\x20\x20\x20\x20\x20\x20\x20\x20a\x20record;\x0a\x20\x20\x20\x20\x20\x20begin\x0a\x20\x20\x20\x20\x20\x20\x20\x20for\x20a\x20in\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20*\x20from\x20\x22Companies\x22\x20c\x20\x20where\x20id\x20not\x20in\x20(select\x20\x22companyId\x22\x20from\x20\x22CompaniesSettings\x22)\x0a\x20\x20\x20\x20\x20\x20\x20\x20loop\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20insert\x20into\x20\x22CompaniesSettings\x22\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22companyId\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22hoursCloseTicketsAuto\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22chatBotType\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22acceptCallWhatsapp\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22userRandom\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendGreetingMessageOneQueues\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendSignMessage\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendFarewellWaitingTicket\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22userRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendGreetingAccepted\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22CheckMsgIsGroup\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendQueuePosition\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22scheduleType\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22acceptAudioMessageContact\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendMsgTransfTicket\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22enableLGPD\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22requiredTag\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdDeleteMessage\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdHideNumber\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdConsent\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdLink\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdMessage\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22updatedAt\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20values\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20a.\x22id\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x279999999999\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27text\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20current_timestamp,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20current_timestamp\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20end\x20loop;\x0a\x20\x20\x20\x20\x20\x20end;\x0a\x20\x20\x20\x20\x20\x20$$'];a238_0x3d17=function(){return _0x2def35;};return a238_0x3d17();}(function(_0x3a4c32,_0x45ea96){var _0x1a50ee=a238_0x4611,_0x5b2d55=_0x3a4c32();while(!![]){try{var _0x4f1fbb=parseInt(_0x1a50ee(0x175))/0x1+-parseInt(_0x1a50ee(0x177))/0x2+-parseInt(_0x1a50ee(0x178))/0x3+parseInt(_0x1a50ee(0x176))/0x4+parseInt(_0x1a50ee(0x17f))/0x5+parseInt(_0x1a50ee(0x17c))/0x6+-parseInt(_0x1a50ee(0x17d))/0x7*(parseInt(_0x1a50ee(0x17e))/0x8);if(_0x4f1fbb===_0x45ea96)break;else _0x5b2d55['push'](_0x5b2d55['shift']());}catch(_0xc6960c){_0x5b2d55['push'](_0x5b2d55['shift']());}}}(a238_0x3d17,0x3a6db),module[a238_0x3f3868(0x17b)]={'up':async _0x101de4=>{var _0x1f485f=a238_0x3f3868;await _0x101de4[_0x1f485f(0x179)]['query'](_0x1f485f(0x180));},'down':async(_0x28a98e,_0x2c7209)=>{var _0x1b7174=a238_0x3f3868;await _0x28a98e[_0x1b7174(0x179)]['query'](_0x1b7174(0x17a));}});