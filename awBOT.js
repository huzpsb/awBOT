// ==UserScript==
// @name BcGod_AwBot
// @description AwBot
// @version 1.06r
// @namespace awaqwq_huzpsb
// @match *://*/*BondageClub*
// @grant GM_registerMenuCommand
// ==/UserScript==
(function() {
    GM_registerMenuCommand('awBOT', ()=>{
        SpeechGarble = function(C, CD, NoDeaf) {
            //Process the command only when it is sent first.
            if ((CD.indexOf('awq') != -1) && (CD.indexOf('awBOT') == -1)) {
                let awresult = 'Unknown Command!Available commands:release,bondage,playsuit,lock,about,lick,random.Type \'awq command\'in chat to use.';
                if (CD.indexOf('release') != -1) {
                    CharacterReleaseTotal(C);
                    C.ArousalSettings.Progress = 0;
                    ChatRoomCharacterUpdate(C);
                    awresult = 'As u wish~(Make sure u r not owner/lover locked & have permitted me)';
                } else if (CD.indexOf('bondage') != -1) {
                    InventoryWear(C, 'LeatherArmbinder', 'ItemArms', '#202020', 114514);
                    InventoryWear(C, 'Irish8Cuffs', 'ItemFeet', '#202020', 114514);
                    C.ArousalSettings.Progress = 0;
                    ChatRoomCharacterUpdate(C);
                    awresult = 'As u wish~(Make sure u have permitted me)';
                } else if (CD.indexOf('about') != -1) {
                    awresult = 'v1.05 by huzpsb / Src will be on github soon';
                } else if (CD.indexOf('lick') != -1) {
                    awresult = 'licks ' + C.Name + '.';
                } else if (CD.indexOf('playsuit') != -1) {
                    InventoryWear(C, 'BitchSuit', 'ItemArms', '#202020', 114514);
                    C.ArousalSettings.Progress = 0;
                    ChatRoomCharacterUpdate(C);
                    awresult = 'meow~(Make sure u have permitted me)';
                } else if (CD.indexOf('lock') != -1) {
                    C.Appearance.forEach(item=>{
                        let i = 0;
                        if (item.Difficulty > 0) {
                            if (item.Property == null) {
                                item.Property = {};
                            }
                            if (item.Property.Effect == null) {
                                item.Property.Effect = [];
                            }
                            if (item.Property.Effect.indexOf('Lock') < 0) {
                                item.Property.Effect.push('Lock')
                            }
                            if (Math.random() > 0.5) {
                                item.Property.LockedBy = 'MistressPadlock';
                            } else {
                                item.Property.LockedBy = 'PandoraPadlock';
                            }
                            item.Property.LockMemberNumber = Player.MemberNumber;
                            C.Appearance[i] = item;
                        }
                        i++;
                    }
                    );
                    C.ArousalSettings.Progress = 0;
                    ChatRoomCharacterUpdate(C);
                    awresult = 'meow~(Make sure u have permitted me)';
                } else if (CD.indexOf('random') != -1) {
                    let rdmList = ['ItemArms', 'ItemBoots', 'ItemBreast', 'ItemButt', 'ItemDevices', 'ItemEars', 'ItemFeet', 'ItemHands', 'ItemHead', 'ItemHood', 'ItemLegs', 'ItemMisc', 'ItemMouth', 'ItemMouth2', 'ItemMouth3', 'ItemNeck', 'ItemNeckAccessories', 'ItemNeckRestraints', 'ItemNipples', 'ItemNipplesPiercings', 'ItemNose', 'ItemPelvis', 'ItemTorso', 'ItemVulva', 'ItemVulvaPiercings'];
                    rdmList.forEach(place=>{
                        InventoryWearRandom(C, place, 114514);
                    }
                    );
                    C.ArousalSettings.Progress = 0;
                    ChatRoomCharacterUpdate(C);
                    awresult = 'meow~(Make sure u have permitted me)';
                }
                ServerSend('ChatRoomChat', {
                    Content: 'awBOT ' + awresult,
                    Type: 'Chat'
                });
            } else if (CD.indexOf('Awq') != -1) {
                ServerSend('ChatRoomChat', {
                    Content: 'awBOT CaSe SeNsItIvE!',
                    Type: 'Chat'
                });
            }
            //Process the gag in my way.
            let NS = CD;
            let GagEffect = SpeechGetTotalGagLevel(C, NoDeaf);
            if (GagEffect > 0) {
                NS = 'GAG lv' + GagEffect + ' ' + NS;
            }
            return NS;
        }
    }
    );
}
)();
