import { YaoType } from "@/types";

export interface YaoDetail {
    original: string;
    vernacular: string;
    xiaoXiang: string;
    xiaoXiangVernacular: string;
}

export const yaoData: Record<number, YaoDetail[]> = {
    1: [ // 乾卦
        {
            original: "潜龙，勿用。",
            vernacular: "龙尚未舒展，潜藏在深水之中，此时不宜有所作为。",
            xiaoXiang: "“潜龙，勿用”，阳在下也。",
            xiaoXiangVernacular: "“潜龙勿用”，说明此时阳气尚在低位，势头微弱。"
        },
        {
            original: "见龙再田，利见大人。",
            vernacular: "龙出现在田野之上，有利于寻求德高望重的大人物指点。",
            xiaoXiang: "“见龙再田”，德施普也。",
            xiaoXiangVernacular: "“见龙再田”，意味着恩泽开始普施，初露锋芒。"
        },
        {
            original: "君子终日乾乾，夕惕若，厉无咎。",
            vernacular: "君子整天勤奋努力，夜晚也保持警惕，虽处境艰难但无灾祸。",
            xiaoXiang: "“终日乾乾”，反复道也。",
            xiaoXiangVernacular: "“终日乾乾”，是要在正道上反复磨炼，不断进取。"
        },
        {
            original: "或跃在渊，无咎。",
            vernacular: "龙时而跃起，时而退守深渊，顺应时势，没有灾祸。",
            xiaoXiang: "“或跃在渊”，进无咎也。",
            xiaoXiangVernacular: "“或跃在渊”，进退自如，选择合适的时机进取并无灾难。"
        },
        {
            original: "飞龙在天，利见大人。",
            vernacular: "龙飞翔在广阔的天空，标志着事业达到巅峰，利于见大人。",
            xiaoXiang: "“飞龙在天”，“大人”造也。",
            xiaoXiangVernacular: "“飞龙在天”，这是大人物在尽情施展才华，成就伟业。"
        },
        {
            original: "亢龙有悔。",
            vernacular: "龙飞得过高，已到极限，将会有所悔恨。",
            xiaoXiang: "“亢龙有悔”，盈不可久也。",
            xiaoXiangVernacular: "“亢龙有悔”，说明满盈的状态难以持久，盛极必衰。"
        }
    ],
    2: [ // 坤卦
        {
            original: "履霜，坚冰至。",
            vernacular: "脚下踩到了薄霜，就应当知道寒冬将至，坚冰即将结成。",
            xiaoXiang: "“履霜坚冰”，阴始凝也；驯致其道，至坚冰也。",
            xiaoXiangVernacular: "“履霜坚冰”，是阴气开始凝结的征兆；顺此规律发展，必然会导致坚冰的到来。"
        },
        {
            original: "直方大，不习无不利。",
            vernacular: "正直、方正、宏大，这是大地的本性，不需要学习也能无往不利。",
            xiaoXiang: "六二之动，“直”以“方”也。“不习无不利”，地道光也。",
            xiaoXiangVernacular: "六二爻的动向，体现了正直与方正；“不习无不利”，是大地之道的广大。"
        },
        {
            original: "含章可贞；或从王事，无成有终。",
            vernacular: "胸怀美德而含而不露，可以守持正道。若从事王事，即使没有显赫成就，也能有好的结局。",
            xiaoXiang: "“含章可贞”，以时发也；“或从王事”，知光大也。",
            xiaoXiangVernacular: "“含章可贞”，是要待时而发；“或从王事”，说明智慧广大。"
        },
        {
            original: "括囊，无咎无誉。",
            vernacular: "像扎紧口袋一样严守秘密，谨言慎行，虽然没有赞誉，但也免于灾祸。",
            xiaoXiang: "“括囊无咎”，慎不害也。",
            xiaoXiangVernacular: "“括囊无咎”，说明此时只要谨慎行事，就不会受到伤害。"
        },
        {
            original: "黄裳，元吉。",
            vernacular: "穿着黄色的下衣，象征守持中道，大吉大利。",
            xiaoXiang: "“黄裳元吉”，文在中也。",
            xiaoXiangVernacular: "“黄裳元吉”，体现了内在的美德表现于外。"
        },
        {
            original: "龙战于野，其血玄黄。",
            vernacular: "雄龙在荒野上交战，阴阳之争达到顶点，渗出青黄色的血液，象征着剧烈的变革或冲突。",
            xiaoXiang: "“龙战于野”，其道穷也。",
            xiaoXiangVernacular: "“龙战于野”，意味着阴气极盛，原有的平衡已走到尽头。"
        }
    ],
    3: [ // 屯卦
        {
            original: "磐桓；利居贞，利建侯。",
            vernacular: "徘徊不前，此时利于坚守正道，建立基业。",
            xiaoXiang: "虽磐桓，志行正也；以贵下贱，大得民也。",
            xiaoXiangVernacular: "虽然徘徊不前，但志向行为正直；能以高贵的身份屈就卑微，能大得人心。"
        },
        {
            original: "屯如邅如，乘马班如。匪寇婚媾。女子贞不字，十年乃字。",
            vernacular: "营求困难，徘徊不进，骑着马旋转不前。对方不是来抢劫的，而是来求婚的。女子坚贞不愿出嫁，过了十年才答应。",
            xiaoXiang: "六二之难，乘刚也。“十年乃字”，反常也。",
            xiaoXiangVernacular: "六二面临的困难是因为乘驾在阳刚之上；“十年才出嫁”，说明这是反常的等待。"
        },
        {
            original: "即鹿无虞，惟入于林中，君子几，不如舍，往吝。",
            vernacular: "追逐野鹿却没有向导，只会误入密林深处。君子洞察时机，认为不如放弃，若一味前往必遭羞辱。",
            xiaoXiang: "“即鹿无虞”，以从禽也。君子舍之；“往吝”，穷也。",
            xiaoXiangVernacular: "“追逐野鹿却没有向导”，只是贪恋猎物。君子放弃之；因为继续前往会陷入困境。"
        },
        {
            original: "乘马班如，求婚媾，往吉，无不利。",
            vernacular: "骑着马旋转不前，是为了寻求婚配。勇往直前是吉祥的，无往不利。",
            xiaoXiang: "“求”而“往”，明也。",
            xiaoXiangVernacular: "“求取而前往”，说明志向是明达的。"
        },
        {
            original: "屯其膏，小贞吉，大贞凶。",
            vernacular: "囤积恩泽而不施予。小事守持正道尚吉，大事则会陷入凶险。",
            xiaoXiang: "“屯其膏”，施未光也。",
            xiaoXiangVernacular: "“囤积恩泽”，说明施舍不够广大。"
        },
        {
            original: "泣血涟如。",
            vernacular: "悲伤得哭出血来，眼泪连续不断。象征极度孤立或陷入绝境。",
            xiaoXiang: "“泣血涟如”，何可长也？",
            xiaoXiangVernacular: "“哭出血泪”，这种状况怎么能够持久呢？"
        }
    ],
    4: [ // 蒙卦
        {
            original: "发蒙，利用刑人，用说桎梏，以往吝。",
            vernacular: "启发蒙昧，应当适度使用刑具和束缚来规范行为，使其脱离邪路；如果放任不管，前途会忧困。",
            xiaoXiang: "“利用刑人”，以正法也。",
            xiaoXiangVernacular: "“适度惩戒”，是为了确立正确的法度与规范。"
        },
        {
            original: "包蒙吉；纳妇吉；子克家。",
            vernacular: "以宽容的心态对待蒙昧者，吉祥；娶亲吉祥；儿子能支撑起家业。",
            xiaoXiang: "“包蒙吉”，纳妇吉；子克家。",
            xiaoXiangVernacular: "“子能持家”，说明阴阳刚柔能够和谐衔接。"
        },
        {
            original: "勿用取女；见金夫，不有躬，无攸利。",
            vernacular: "不要娶这样的女子；她见到有钱的男人就失身丧志，没有节操，娶她不会有任何好处。",
            xiaoXiang: "“勿用取女”，行不顺也。",
            xiaoXiangVernacular: "“不要娶这样的女子”，是因为其行为违背了正道。"
        },
        {
            original: "困蒙，吝。",
            vernacular: "陷入蒙昧之中而无法自拔，会有羞吝或困难。",
            xiaoXiang: "“困蒙”之“吝”，独远实也。",
            xiaoXiangVernacular: "“困于蒙昧”，是因为偏离了真实或脱离了贤明的引导。"
        },
        {
            original: "童蒙，吉。",
            vernacular: "像孩子一样纯真地求教，吉祥。",
            xiaoXiang: "“童蒙”之“吉”，顺以巽也。",
            xiaoXiangVernacular: "“纯真求教”之所以吉祥，是因为顺从且谦逊。"
        },
        {
            original: "击蒙；不利为寇，利御寇。",
            vernacular: "惩治蒙昧；不应采取侵略行为，而应采取防御和自我保护的措施。",
            xiaoXiang: "“利”用“御寇”，上下顺也。",
            xiaoXiangVernacular: "“有利于抵御侵略”，说明上下能齐心顺应正道。"
        }
    ],
    5: [ // 需卦
        {
            original: "需于郊。利用恒，无咎。",
            vernacular: "在郊外等待。应当保持恒心，没有灾祸。",
            xiaoXiang: "“需于郊”，不犯难行也；“利用恒，无咎”，未失常也。",
            xiaoXiangVernacular: "“在郊外等待”，是为了避开前方的险难；“保持恒心”，说明没有违背常规。"
        },
        {
            original: "需于沙。小有言，终吉。",
            vernacular: "在沙滩上等待。虽有小的言语纷争，但最终是吉祥的。",
            xiaoXiang: "“需于沙”，衍在中也；虽“小有言”，以“吉”“终”也。",
            xiaoXiangVernacular: "“在沙滩等待”，寓意此时虽有波折但能处之泰然；最终通过吉祥来收尾。"
        },
        {
            original: "需于泥，致寇至。",
            vernacular: "在泥泞中等待，容易招来敌人的攻击或麻烦。",
            xiaoXiang: "“需于泥”，灾在外也；自我“致寇”，敬慎不败也。",
            xiaoXiangVernacular: "“在泥泞等待”，虽然受困但灾祸来自外部；只要保持敬慎，就能避免彻底失败。"
        },
        {
            original: "需于血，出自穴。",
            vernacular: "在血泊中等待（面临流血风险），但最终能从险穴中脱身。",
            xiaoXiang: "“需于血”，顺以听也。",
            xiaoXiangVernacular: "“陷于血腥之险”，应当顺应形势听命于理智，方能脱险。"
        },
        {
            original: "需于酒食，贞吉。",
            vernacular: "在酒食宴乐中等待（从容不迫），守持正道吉祥。",
            xiaoXiang: "“酒食，贞吉”，以中正也。",
            xiaoXiangVernacular: "“从容享用酒食且吉祥”，是因为其行为符合中正之道。"
        },
        {
            original: "入于穴，有不速之客三人来，敬之终吉。",
            vernacular: "落入陷穴之中，却有三位不请自来的客人，恭敬地接待他们，最终吉祥。",
            xiaoXiang: "“不速之客”来，“敬之，终吉”，虽不当位，未大失也。",
            xiaoXiangVernacular: "“不速之客”到来却能“敬之得吉”，说明虽然所处位置不佳，但行为并未造成大错。"
        }
    ],
    6: [ // 讼卦
        {
            original: "不永所事，小有言，终吉。",
            vernacular: "争讼之事不宜持久。虽然有些小的非议，但最终吉祥。",
            xiaoXiang: "“不永所事”，讼不可长也；虽“有小言”，其辩明也。",
            xiaoXiangVernacular: "“争讼不宜久持”，说明争执应当适可而止；虽有言语冲突，但道理已经辩明。"
        },
        {
            original: "不克讼，归而逋，其邑人三百户，无眚。",
            vernacular: "争讼不胜，退避而逃，躲回自己的封地，其邑中百姓安然无恙，没有灾难。",
            xiaoXiang: "“不克讼”，归逋，窜也；自下讼上，患至掇也。",
            xiaoXiangVernacular: "“争讼失败”，只能潜逃逃避；地位低下者挑战高位者，必然自讨苦吃。"
        },
        {
            original: "食旧德，贞厉，终吉。或从王事，无成。",
            vernacular: "安守家传的美德。守正道以防危险，最终吉祥。也许会从事王事，但不会有什么个人成就。",
            xiaoXiang: "“食旧德”，从上吉也。",
            xiaoXiangVernacular: "“安守祖荫与美德”，顺从上级会有吉祥的结果。"
        },
        {
            original: "不克讼，复即命，渝安贞吉。",
            vernacular: "争讼失败，改变策略，回到天命正道，安于守正，吉祥。",
            xiaoXiang: "“复即命，渝”，“安贞”不失也。",
            xiaoXiangVernacular: "“重归天命而不偏离”，这是因为始终没有丢失守正之心。"
        },
        {
            original: "讼；元吉。",
            vernacular: "在此阶段争讼是大吉大利的，因为占据了中正之位。",
            xiaoXiang: "“讼，元吉”，以中正也。",
            xiaoXiangVernacular: "“争讼大吉”，是因为其判决或主张符合中正的公义。"
        },
        {
            original: "或锡之鞶带，终朝三褫之。",
            vernacular: "即使因争讼获胜而得到荣誉大带，但在一个早晨内也会被多次剥夺。象征争逐利益的地位不稳。",
            xiaoXiang: "以讼受服，亦不足敬也。",
            xiaoXiangVernacular: "靠争讼得到的奖赏与官服，本身就不值得受人尊敬。"
        }
    ],
    7: [ // 师卦
        {
            original: "师出以律，失律凶。",
            vernacular: "出师打仗必须严守纪律；失去纪律必遭凶险。",
            xiaoXiang: "“师出以律”，失律“凶”也。",
            xiaoXiangVernacular: "“出师必须遵循军法”，不守军法必然导致灾难性的后果。"
        },
        {
            original: "在师中，吉，无咎；王三锡命。",
            vernacular: "处于军队的统帅地位，吉祥，没有灾祸；君王多次赏赐并下达委任状。",
            xiaoXiang: "“在师中吉”，承天宠也；“王三锡命”，怀万邦也。",
            xiaoXiangVernacular: "“处于军中主心骨而吉祥”，是承蒙了上天的护佑；“君王多次奖赏”，表现其安抚万民的能力。"
        },
        {
            original: "师或舆尸，凶。",
            vernacular: "军队指挥不一，导致兵马损折，拉回满车的尸体，大凶。",
            xiaoXiang: "“师或舆尸”，大无功也。",
            xiaoXiangVernacular: "“战败用车拉回尸体”，是完全没有功劳可言的惨败。"
        },
        {
            original: "师左次，无咎。",
            vernacular: "军队发现不利时及时撤退暂避，没有祸患。",
            xiaoXiang: "“左次，无咎”，未失常也。",
            xiaoXiangVernacular: "“适时撤退避乱”，并没有违背常规的行军策略。"
        },
        {
            original: "田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。",
            vernacular: "田野里有野兽侵害，应当据理说明并处理。任用有名望的长者统帅军队；若任用无能、地位低微的庸人导致混乱，即使动机正当也会凶险。",
            xiaoXiang: "“长子帅师”，以中行也；“弟子舆师”，使不当也。",
            xiaoXiangVernacular: "“长者统帅军队”，说明其行为符合中道；“庸才带兵导致战败”，是由于用人不当。"
        },
        {
            original: "大君有命，开国承家，小人勿用。",
            vernacular: "君王颁布诏命，册封功臣以开国或封家；但切记不重用那些投机的小人。",
            xiaoXiang: "“大君有命”，以正功也；“小人勿用”，必乱邦也。",
            xiaoXiangVernacular: "“君王发布诏命”，是为了公平地评定功劳；“不可重用小人”，是因为小人一旦得势必将扰乱国家运行。"
        }
    ],
    8: [ // 比卦
        {
            original: "有孚比之，无咎。有孚盈缶，终来有它吉。",
            vernacular: "怀着诚信去亲附，没有灾祸。诚信像盛满水瓮的酒一样充实，最终会有意想不到的惊喜和吉利。",
            xiaoXiang: "比之初六，有它吉也。",
            xiaoXiangVernacular: "“亲附之初”，只要开始得好，会有额外的收获。"
        },
        {
            original: "比之自内，贞吉。",
            vernacular: "从内心真诚地发起亲附，守持正道吉祥。",
            xiaoXiang: "“比之自内”，不自失也。",
            xiaoXiangVernacular: "“发自内心的亲附”，说明自己没有丢失立身之本。"
        },
        {
            original: "比之匪人，不亦伤乎！",
            vernacular: "亲附了不该亲附的人。这难道不令人感到悲哀和感伤吗？",
            xiaoXiang: "“比之匪人”，不亦伤乎！",
            xiaoXiangVernacular: "“亲附非人”，亲近了错误的对象，结局必然是痛苦的。"
        },
        {
            original: "外比之，贞吉。",
            vernacular: "向外部贤明的领导者或力量亲附，守持正道吉祥。",
            xiaoXiang: "“外比”于贤，以从上也。",
            xiaoXiangVernacular: "“向外亲附贤者”，表现了愿意追随明主的心志。"
        },
        {
            original: "显比，王用三驱，失前禽。邑人不诫，吉。",
            vernacular: "公开、坦荡地展示亲附之情。就像君王狩猎时网开一面，丢掉远去的猎物，只取投奔而来的。邑中百姓不用警戒也感到祥和，吉祥。",
            xiaoXiang: "“显比”之吉，位正中也。舍逆取顺，“失前禽”也。“邑人不诫”，上使中也。",
            xiaoXiangVernacular: "“公开亲附之所以吉祥”，是因为身处中正。舍弃违抗者、接纳顺从者，便是“失前禽”的智慧；“民心不疑”，是居于上位者行事大公至正的结果。"
        },
        {
            original: "比之无首，凶。",
            vernacular: "亲附却没有一个正确的导向或长远的目标，像无头苍蝇一样，凶险。",
            xiaoXiang: "“比之无首”，无所终也。",
            xiaoXiangVernacular: "“亲附却没有好的开端或首领”，必然导致事情无法善终。"
        }
    ],
    9: [ // 小畜卦
        {
            original: "复自道，何其咎，吉。",
            vernacular: "回归原来的正道，会有什么过错呢？吉祥。",
            xiaoXiang: "“复自道”，其义“吉”也。",
            xiaoXiangVernacular: "“找回并回归正道”，其内在含义便是通向吉祥。"
        },
        {
            original: "牵复，吉。",
            vernacular: "被牵引着或者在大家的带动下回到正道上来，吉祥。",
            xiaoXiang: "“牵复”在中，亦不自失也。",
            xiaoXiangVernacular: "“相牵着回归”，说明其处于中道，不会丢失自我也不会迷失方向。"
        },
        {
            original: "舆说辐，夫妻反目。",
            vernacular: "大车的轮辐脱落无法前行；夫妻之间闹矛盾，感情破裂。",
            xiaoXiang: "“夫妻反目”，不能正室也。",
            xiaoXiangVernacular: "“夫妻互相敌视”，说明男子不能端正家风，无法治理好家庭内部。"
        },
        {
            original: "有孚，血去惕出，无咎。",
            vernacular: "心怀诚信，能避开血光之灾，走出因恐惧引发的警惕状态，没有灾祸。",
            xiaoXiang: "“有孚”“惕出”，上合志也。",
            xiaoXiangVernacular: "“诚信能解开恐惧”，说明与上层的志向、大势能契合一致。"
        },
        {
            original: "有孚挛如，富以其邻。",
            vernacular: "诚信紧紧相系，富有资产并能以此惠及邻里。",
            xiaoXiang: "“有孚挛如”，不独富也。",
            xiaoXiangVernacular: "“诚信之情紧紧相连”，是因为他不想独自占有财富，而是愿意分享。"
        },
        {
            original: "既雨既处，尚德载，妇贞厉. 月几望，君子征凶。",
            vernacular: "雨已落下，应当解甲静处。此时应重视积蓄阴德（内在力量）。虽然守持正道仍有险情，但若能像月亮接近满月般保持圆满心态，则无大碍；若君子此时强行出征，则会招致凶险。",
            xiaoXiang: "“既雨既处”，“德”积“载”也。“君子征凶”，有所疑也。",
            xiaoXiangVernacular: "“雨后安处”，预示着阴德已经积累并显现；“出征告凶”，是因为局势仍不明朗，不可轻举妄动。"
        }
    ],
    10: [ // 履卦
        {
            original: "素履，往无咎。",
            vernacular: "纯朴自然地前行，没有任何灾祸。",
            xiaoXiang: "“素履”之“往”，独行愿也。",
            xiaoXiangVernacular: "“朴实地践行”，实现了自己最初的纯粹愿望。"
        },
        {
            original: "幽人贞吉。",
            vernacular: "幽居避世之人（或处境幽静之人）守持正道吉祥。",
            xiaoXiang: "“幽人贞吉”，中不自乱也。",
            xiaoXiangVernacular: "“幽居守正而吉祥”，说明其内心淡泊坚定，不因外界纷扰而自乱方寸。"
        },
        {
            original: "眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。",
            vernacular: "眼力不足却想看远，腿脚不便却想疾行。不自量力地触碰虎尾，必遭反噬。如同草莽武夫空有满腔热血，却想统治万民，最终力不从心。",
            xiaoXiang: "“眇能视”，不足以有明也；“跛能履”，不足以与行也；“咥人之凶”，位不当也；“武人为于大君”，志刚也。",
            xiaoXiangVernacular: "“眼花想看清”终归不够明亮，“腿瘸想远行”注定无法持久；“遭虎噬之凶”源于自不量力、位职不配；“草莽欲登极”仅凭刚猛之气是难以成事的。"
        },
        {
            original: "履虎尾，愬愬，终吉。",
            vernacular: "虽然踩到了虎尾，但因心怀戒惧、小心翼翼，最终吉祥。",
            xiaoXiang: "“愬愬，终吉”，志行也。",
            xiaoXiangVernacular: "“小心戒惧终得吉祥”，是因为其行为顺应了志向且行事谨慎。"
        },
        {
            original: "夬履，贞厉。",
            vernacular: "果断坚决地践行（过于刚强），守正道也会有危险。",
            xiaoXiang: "“夬履，贞厉”，位正当也。",
            xiaoXiangVernacular: "“果断前行仍觉危险”，是因为他虽然身处正位，但过分刚断，不免受到冲击。"
        },
        {
            original: "视履考祥，其旋元吉。",
            vernacular: "回顾自己走过的路，考察吉凶祸福的来龙去脉。人生回归本真，大吉大利。",
            xiaoXiang: "元吉在上，大有庆也。",
            xiaoXiangVernacular: "极高的吉祥降临，这是一个值得大大庆贺的圆满结局。"
        }
    ],
    11: [ // 泰卦
        {
            original: "拔茅茹，以其汇，征吉。",
            vernacular: "拔起一棵茅草，同类的根也联带着拔了出来。这时出征会有吉祥的结果。",
            xiaoXiang: "“拔茅”“征吉”，志在外也。",
            xiaoXiangVernacular: "“拔茅出征吉祥”，说明志向在于向外拓展，大展宏图。"
        },
        {
            original: "包荒，用冯河，不遐遗，朋亡，得尚于中行。",
            vernacular: "能包容荒秽，有徒步涉河的勇气，不遗弃远方的人，不结党营私，就能符合中庸之道的德行。",
            xiaoXiang: "“包荒”，“得尚于中行”，以光大也。",
            xiaoXiangVernacular: "“包容荒秽并符合中道”，是为了使自己的德行更加广大。"
        },
        {
            original: "无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。",
            vernacular: "没有平坦而不倾斜的地势，没有只去不回的旅程。在艰难中守持正道能没有灾祸。不用担心失去信任，在饮食生活中会有福报。",
            xiaoXiang: "“无往不复”，天地际也。",
            xiaoXiangVernacular: "“终而有始”，这是天地运行交接的自然规律。"
        },
        {
            original: "翩翩不富，以其邻，不戒以孚。",
            vernacular: "轻快地飞翔且不求私利，与邻居和睦相处，不需要告诫也彼此信任。",
            xiaoXiang: "“翩翩，不富”，皆失实也。“不戒以孚”，中心愿也。",
            xiaoXiangVernacular: "“潇洒而不求财”，说明此时物资虽不充裕，但志气高昂；“无需告诫便能信任”，表达了大家心气相通的愿景。"
        },
        {
            original: "帝乙归妹，以祉元吉。",
            vernacular: "商王帝乙下嫁女儿，这种谦逊的德行使她获得福祉，大吉大利。",
            xiaoXiang: "“以祉元吉”，中以行愿也。",
            xiaoXiangVernacular: "“以祉元吉”，是通过持中守正实现了自己造福天下的志愿。"
        },
        {
            original: "城复于隍，勿用师。自邑告命，贞吝。",
            vernacular: "城墙倒塌在护城河里，此时不宜动用武力。从邑中发布反省的告命，若一味固执现状必招羞辱。",
            xiaoXiang: "“城复于隍”，其命乱也。",
            xiaoXiangVernacular: "“城墙塌入壕沟”，意味着当前的秩序已经陷入了混乱。"
        }
    ],
    12: [ // 否卦
        {
            original: "拔茅茹，以其汇，贞吉，亨。",
            vernacular: "拔起一棵茅草，同类的根也联带着拔了出来。在闭塞之时能守持正道，最终会亨通。",
            xiaoXiang: "“拔茅”“贞吉”，志在君也。",
            xiaoXiangVernacular: "“拔茅守正必吉”，说明其志向在于辅助君王而非谋取私利。"
        },
        {
            original: "包承。小人吉，大人否亨。",
            vernacular: "包容顺承。这对小人来说是吉利的，但对大人来说，应当拒绝这种平庸的顺从，才能真正守持节操而亨通。",
            xiaoXiang: "“大人否，亨”，不乱群也。",
            xiaoXiangVernacular: "“大人的决绝带来亨通”，是因为他能保持独立，不与小人为伍。"
        },
        {
            original: "包羞。",
            vernacular: "忍受羞辱，处境尴尬。",
            xiaoXiang: "“包羞”，位不当也。",
            xiaoXiangVernacular: "“心怀羞惭”，是因为所处的地位名不正言不顺。"
        },
        {
            original: "有命无咎，畴离祉。",
            vernacular: "有所命定（或受天命感召），没有灾祸，同伴们也能享受到福祉。",
            xiaoXiang: "“有命无咎”，志行也。",
            xiaoXiangVernacular: "“承天命而无祸”，说明其志向正在逐步实现。"
        },
        {
            original: "休否，大人吉。其亡其亡，系于苞桑。",
            vernacular: "闭塞的局面开始停止。大人吉祥。要时常抱持“快灭亡了，快灭亡了”的忧患意识，像系在坚固的桑树根上一样稳固。",
            xiaoXiang: "“大人”之“吉”，位正当也。",
            xiaoXiangVernacular: "“大人的吉祥”，是因为他身处显正之位，且行事合宜。"
        },
        {
            original: "倾否，先否后喜。",
            vernacular: "倾覆了闭塞的局面，起初虽然闭塞不顺，但最后会迎来喜庆的结果。",
            xiaoXiang: "否终则倾，何可长也？",
            xiaoXiangVernacular: "闭塞局面到了尽头必然会倾覆，怎么可能长久持续下去呢？"
        }
    ],
    13: [ // 同人卦
        {
            original: "同人于门，无咎。",
            vernacular: "在出门时与志同道合的人聚会，坦荡而无灾祸。",
            xiaoXiang: "出门同人，又谁“咎”也。",
            xiaoXiangVernacular: "“出门便遇到志同道合者”，这又会有谁来责难呢？"
        },
        {
            original: "同人于宗，吝。",
            vernacular: "局限于同宗族、小圈子里的亲附，志向偏狭，会产生羞吝之情。",
            xiaoXiang: "“同人于宗”，吝道也。",
            xiaoXiangVernacular: "“只与小圈子苟同”，这是一种通往狭隘与羞辱的道路。"
        },
        {
            original: "伏戎于莽，升其高陵，三岁不兴。",
            vernacular: "把士兵埋伏在草丛里，爬上高地观望。整整三年也不敢发起进攻。象征疑虑重重或实力不足。",
            xiaoXiang: "“伏戎于莽”，敌刚也；“三岁不兴”，安行也？",
            xiaoXiangVernacular: "“在草丛埋伏士兵”，是因为对手过于强大；“三年不敢发动”，是因为根本找不到安全进攻的路。"
        },
        {
            original: "乘其墉，义弗克也，吉。",
            vernacular: "爬上了对方的城墙，但因理亏而没有发起进攻。由于能适时收手回归正义，结果是吉祥的。",
            xiaoXiang: "“乘其墉”，义弗克也；其吉，则困而反则也。",
            xiaoXiangVernacular: "“攻上城墙却不战”，是因为意识到道义上行不通；其所以能转祸为吉，是因为在困顿中回归了法则。"
        },
        {
            original: "同人，先号咷而后笑。大师克相遇。",
            vernacular: "志同道合的人，起初因遭遇阻碍而痛哭流涕，此后因终于聚首而欢笑。强大的军队互相配合，最终能够会师。",
            xiaoXiang: "“同人”之先，以中直也。大师相遇，言相克也。",
            xiaoXiangVernacular: "“同人者起初痛哭”，是因为心中秉持着正直；“大军相遇”，说明双方的共识最终战胜了隔阂。"
        },
        {
            original: "同人于郊，无悔。",
            vernacular: "在远郊这种空旷平等的地方聚合。虽然没有热烈的响应，但绝对没有悔恨。",
            xiaoXiang: "“同人于郊”，志未得也。",
            xiaoXiangVernacular: "“在远郊聚众”，说明此时想要大同天下的远大志向还没有完全实现。"
        }
    ],
    14: [ // 大有卦
        {
            original: "无交害，匪咎，艰则无咎。",
            vernacular: "不与有害的事物纠缠。虽然会有困难，但并不算过错；在艰难中保持警惕就能没有祸害。",
            xiaoXiang: "大有初九，“无交害”也。",
            xiaoXiangVernacular: "大有之初，“应当避免不正当的交往带来的伤害”。"
        },
        {
            original: "大车以载，有攸往，无咎。",
            vernacular: "像大车负载重物一样稳固充实。有所行动，没有灾祸。",
            xiaoXiang: "“大车以载”，积中不败也。",
            xiaoXiangVernacular: "“大车载物”，意味着其内在积累丰厚，行事稳重而不会失败。"
        },
        {
            original: "公用亨于天子，小人弗克。",
            vernacular: "公侯接受天子的宴请赏赐（或向天子贡献）。小人即使处于这种高位也是无法担当重任的。",
            xiaoXiang: "“公用亨于天子”，小人害也。",
            xiaoXiangVernacular: "“公侯献于天子”，若是小人居此高位，必然会招致祸害。"
        },
        {
            original: "匪其彭，无咎。",
            vernacular: "不仗恃自己的强盛而傲慢，没有灾祸。",
            xiaoXiang: "“匪其彭，无咎”，明辨晢也。",
            xiaoXiangVernacular: "“不凭依盛势”，表现了明智而深刻的洞察力。"
        },
        {
            original: "厥孚交如，威如；吉。",
            vernacular: "以诚信感通他人，上下和洽，充满威信。吉祥。",
            xiaoXiang: "“厥孚交如”，信以发志也；“威如”之吉，易而无备也。",
            xiaoXiangVernacular: "“诚信交感”，是用诚信来激发大家共同的心志；“有威望而吉”，是因为处事平易而不需要过分防备。"
        },
        {
            original: "自天佑之，吉无不利。",
            vernacular: "承蒙上天的护佑，吉祥且无往不利。",
            xiaoXiang: "大有上吉，“自天祐”也。",
            xiaoXiangVernacular: "大有卦最高位的吉祥，是得到了“天道助诚”的必然结果。"
        }
    ],
    15: [ // 谦卦
        {
            original: "谦谦君子，用涉大川，吉。",
            vernacular: "非常谦虚的君子，即使涉越大河险阻，也是吉祥的。",
            xiaoXiang: "“谦谦君子”，卑以自牧也。",
            xiaoXiangVernacular: "“谦而又谦的君子”，是用卑和谦下的态度来修养自律。"
        },
        {
            original: "鸣谦，贞吉。",
            vernacular: "谦虚的美名远播，守持正道吉祥。",
            xiaoXiang: "“鸣谦，贞吉”，中心得也。",
            xiaoXiangVernacular: "“因谦虚而声名远扬”，是其内心因守正而获得了真正的安适。"
        },
        {
            original: "劳谦君子，有终，吉。",
            vernacular: "勤劳而又谦虚的君子，能够善始善终，吉祥。",
            xiaoXiang: "“劳谦君子”，万民服也。",
            xiaoXiangVernacular: "“勤劳谦虚的君子”，会得到万民的敬佩与归服。"
        },
        {
            original: "无不利，撝谦。",
            vernacular: "无往不利，应当发挥这种谦虚的德行。",
            xiaoXiang: "“无不利，撝谦”，不违则也。",
            xiaoXiangVernacular: "“发挥谦逊而无往不利”，说明这种行为没有违背自然的准则。"
        },
        {
            original: "利用侵伐，征不服也。",
            vernacular: "此时有利于采取强制措施（如出兵征伐），因为是在征讨那些不顺从道义的人。",
            xiaoXiang: "“利用侵伐”，征不服也。",
            xiaoXiangVernacular: "“有利于征伐”，是为了教化和制裁那些冥顽不灵的人。"
        },
        {
            original: "鸣谦，利用行师，征邑国。",
            vernacular: "谦虚之名广为人知，此时有利于调动军队，去征讨那些割据的小国（或不服从的内部邑落）。",
            xiaoXiang: "“鸣谦”，志未得也；可“用行师”，“征邑国”也。",
            xiaoXiangVernacular: "“声名显赫的谦虚”，说明大同的志向尚未圆满；因此可以“动用武力”来处理遗留的问题。"
        }
    ],
    16: [ // 豫卦
        {
            original: "鸣豫，凶。",
            vernacular: "自鸣得意、流连享乐，会有凶险。",
            xiaoXiang: "初六“鸣豫”，志穷“凶”也。",
            xiaoXiangVernacular: "“享乐之情溢于言表”，是志向穷尽而招致“灾难”的征兆。"
        },
        {
            original: "介于石，不终日，贞吉。",
            vernacular: "节操坚定如磐石一样，不等一整天就做出决断（反应敏锐），守持正道吉祥。",
            xiaoXiang: "“不终日，贞吉”，以中正也。",
            xiaoXiangVernacular: "“果断决策而吉祥”，是因为他立身处世秉承了中正之道。"
        },
        {
            original: "盱豫，悔。迟，有悔。",
            vernacular: "向上仰望、巴结以求享乐，会有悔恨。如果动作迟缓，也会产生悔意。",
            xiaoXiang: "“盱豫”“有悔”，位不当也。",
            xiaoXiangVernacular: "“仰面讨好他人以求安乐”，是因为其所处位置名不副实，且行事失当。"
        },
        {
            original: "由豫，大有得。勿疑。朋盍簪。",
            vernacular: "正因能够引导安乐（或众望所归），会有巨大的收获。不要怀疑。志同道合的朋友会像簪子聚拢头发一样快速地聚集在你身边。",
            xiaoXiang: "“由豫，大有得”，志大行也。",
            xiaoXiangVernacular: "“以此统筹安乐而获得丰厚”，说明其志向正在大步推行。"
        },
        {
            original: "贞疾，恒不死。",
            vernacular: "守持正道以应对疾病。虽然长期处于困扰中（或病情严重），但终究不会有生命危险。",
            xiaoXiang: "六五“贞疾”，乘刚也；“恒不死”，中未亡也。",
            xiaoXiangVernacular: "“长期患病”，是因为位置略显虚弱且承受着压力；“终能生还”，是因为其中庸的德性尚未磨灭。"
        },
        {
            original: "冥豫，成有渝，无咎。",
            vernacular: "沉溺于安乐之中，但这已成定局。如果能及时改变这种现状，就没有灾祸。",
            xiaoXiang: "“冥豫”在上，何可长也？",
            xiaoXiangVernacular: "“沉溺安乐”到了极点，怎么可能长期维持下去呢？"
        }
    ],
    17: [ // 随卦
        {
            original: "官有渝，贞吉。出门交有功。",
            vernacular: "思想或立场有所改变。守持正道吉祥。出门与人交往会建立功勋。",
            xiaoXiang: "“官有渝”，从正“吉”也；“出门交有功”，不失也。",
            xiaoXiangVernacular: "“观点立场改变”，是为了顺从正确的方向，故而吉祥；“外向交往建功”，说明其行为没有失当。"
        },
        {
            original: "系小子，失丈夫。",
            vernacular: "亲附于那些浅薄的小人，就会失去德才兼备的大丈夫。象征格局狭隘。",
            xiaoXiang: "“系小子”，弗兼与也。",
            xiaoXiangVernacular: "“只知道依附小人”，是无法同时得到贤者支持的。"
        },
        {
            original: "系丈夫，失小子。随有求得，利居贞。",
            vernacular: "亲附于德高望重的丈夫，就会舍弃浅薄的小人。随从正道必有所求而得。利于守持正道。",
            xiaoXiang: "“系丈夫”，志舍下也。",
            xiaoXiangVernacular: "“追随丈夫”，体现了志向在于舍弃低俗而追求高远。"
        },
        {
            original: "随有获，贞凶。有孚在道，以明，何咎。",
            vernacular: "随顺时势而有所收获，但这容易导致因固执而招致凶险。只要心怀诚信且行于正道，行事光明磊落，能有什么过错呢？",
            xiaoXiang: "“随有获”，其义“凶”也；“有孚在道”，明功也。",
            xiaoXiangVernacular: "“以此收获为目的而随从”，其本质是危险的；“坚持道义的诚信”，是足以显耀一生的功勋。"
        },
        {
            original: "孚于嘉，吉。",
            vernacular: "在美好的事物（或贤德之人）面前表现出诚信，吉祥。",
            xiaoXiang: "“孚于嘉，吉”，位正中也。",
            xiaoXiangVernacular: "“以此诚信而获吉”，是因为他身处尊位且行事中庸公正。"
        },
        {
            original: "拘系之，乃从维之。王用亨于西山。",
            vernacular: "紧紧地联系在一起，像绳索捆绑一样牢固。君王在此地（西山）举行隆重的祭祀和联合。",
            xiaoXiang: "“拘系之”，上穷也。",
            xiaoXiangVernacular: "“像被束缚着一样被动追随”，说明当前的随波逐流已经到了尽头。"
        }
    ],
    18: [ // 蛊卦
        {
            original: "干父之蛊，有子，考无咎，厉终吉。",
            vernacular: "收拾父亲遗留下的败局。有能干的后辈来继任，使先辈免受责难。虽然处境艰难，但最终吉祥。",
            xiaoXiang: "“干父之蛊”，意承考也。",
            xiaoXiangVernacular: "“承担父亲留下的重担”，是为了继承先人的志向。"
        },
        {
            original: "干母之蛊，不可贞。",
            vernacular: "收拾母亲遗留下的败局。应当采取温和的方式，不可一味强硬刻板。",
            xiaoXiang: "“干母之蛊”，得中道也。",
            xiaoXiangVernacular: "“妥善处理母亲留下的事务”，体现了处事秉持中庸之道而获得圆满。"
        },
        {
            original: "干父之蛊，小有悔，无大咎。",
            vernacular: "收拾父亲留下的烂摊子。过程中可能会有一点小遗憾，但不会有什么大过失。",
            xiaoXiang: "“干父之蛊”，终“无咎”也。",
            xiaoXiangVernacular: "“承担父亲的败局”，其最终结果还是能够免受祸患的。"
        },
        {
            original: "裕父之蛊，往见吝。",
            vernacular: "宽容地放任父亲留下的败局而不去处理。这种消极的态度会导致前进时受阻，令人羞吝。",
            xiaoXiang: "“裕父之蛊”，往未得也。",
            xiaoXiangVernacular: "“姑息先人的过错”，其结果必然是导致将来的事业一无所成。"
        },
        {
            original: "干父之蛊，用誉。",
            vernacular: "收拾父亲留下的败局，不仅获得了成功，还赢得了美誉。",
            xiaoXiang: "“干父”“用誉”，承以德也。",
            xiaoXiangVernacular: "“整理烂摊子而获赠美名”，是用厚重的德行继承了先人的事业。"
        },
        {
            original: "不事王侯，高尚其事。",
            vernacular: "不再为王侯权贵们效力，追求自己高尚的、独立的事业与志向。",
            xiaoXiang: "“不事王侯”，志可则也。",
            xiaoXiangVernacular: "“不贪慕权位”，这种高尚的志向是可以作为后人效法准则的。"
        }
    ],
    19: [ // 临卦
        {
            original: "咸临，贞吉。",
            vernacular: "以感通的态度亲临其事，守持正道吉祥。",
            xiaoXiang: "“咸临，贞吉”，志行正也。",
            xiaoXiangVernacular: "“感通临民而获吉”，是因为其志向和行为都立足于正道。"
        },
        {
            original: "咸临，吉，无不利。",
            vernacular: "以感通的态度亲临天下，吉祥，无往不利。",
            xiaoXiang: "“咸临，吉，无不利”，未顺命也。",
            xiaoXiangVernacular: "“广泛感通并获大吉”，说明目前不需要被动地听命于人，而是主动把握了时势。"
        },
        {
            original: "甘临，无攸利。既忧之，无咎。",
            vernacular: "以甜言蜜语的方式去临民（或以取巧的方式处理），没有任何好处。既然已经意识到了忧虑，能及时反省就没有灾祸。",
            xiaoXiang: "“甘临”，位不当也；“既忧之”，“咎”不长也。",
            xiaoXiangVernacular: "“巧言临民”，是因为其所处位置德不如位；“感知忧患”，则能使潜在的过失不至于扩大。"
        },
        {
            original: "至临，无咎。",
            vernacular: "亲自督导、事必躬亲地亲临指挥，没有灾祸。",
            xiaoXiang: "“至临，无咎”，位当也。",
            xiaoXiangVernacular: "“亲临第一线而不招致过失”，是因为他很好地履行了当前的职责。"
        },
        {
            original: "知临，大君之宜，吉。",
            vernacular: "以智慧的方式、宏观的格局去临治天下。这是作为大国君主应当具备的风范，吉祥。",
            xiaoXiang: "“大君之宜”，行中之谓也。",
            xiaoXiangVernacular: "“表现了君王应有的风度”，便是处事符合中道、得体且高效。"
        },
        {
            original: "敦临，吉，无咎。",
            vernacular: "以敦厚、笃实的心态亲临。吉祥，没有灾祸。",
            xiaoXiang: "“敦临”之“吉”，志在内也。",
            xiaoXiangVernacular: "“敦厚临民的吉祥”，源于其内心深处那种真正的淳朴与诚实。"
        }
    ],
    20: [ // 观卦
        {
            original: "童观，小人无咎，君子吝。",
            vernacular: "像小孩子一样幼稚地观察。对小人来说还可以容忍；但对君子来说则是这种浅薄是一种羞涩。",
            xiaoXiang: "初六“童观”，小人道也。",
            xiaoXiangVernacular: "“幼稚地看待事物”，这是那些不求进取的小人惯用的方法。"
        },
        {
            original: "窥观，利女贞。",
            vernacular: "像从门缝里偷窥一样（视野局限）。这种姿态有利于女子守持正道（在古代偏向于处内），但不适合担当大任。",
            xiaoXiang: "“窥观”“女贞”，亦可丑也。",
            xiaoXiangVernacular: "“见识短浅的观察”，从君子的视野来看，也是值得引以为耻的。"
        },
        {
            original: "观我生，进退。",
            vernacular: "反观自省自己的一生轨迹（或当前处境），以此决定进退。",
            xiaoXiang: "“观我生，进退”，未失道也。",
            xiaoXiangVernacular: "“通过审视自我来决定行止”，这样行事是不会违背生存之道的。"
        },
        {
            original: "观国之光，利用宾于王。",
            vernacular: "观察到一个国家的治乱与光辉景象。这时利于作为贤宾上客去觐见并辅助君王。",
            xiaoXiang: "“观国之光”，尚“宾”也。",
            xiaoXiangVernacular: "“洞察国家的盛衰迹象”，是为了推崇那些辅政的“国宾”上客。"
        },
        {
            original: "观我生，君子无咎。",
            vernacular: "经常审视反思自己的德行操守。君子通过这种自省能做到无灾祸。",
            xiaoXiang: "“观我生”，观民也。",
            xiaoXiangVernacular: "“审视自己的人生”，本质其实是通过了解民情来纠正自己的行为。"
        },
        {
            original: "观其生，君子无咎。",
            vernacular: "观察天下众生的疾苦（或观察局势的波动）。君子通过宏观视野的把握能做到无灾祸。",
            xiaoXiang: "“观其生”，志未平也。",
            xiaoXiangVernacular: "“观察众生的生存状态”，说明此时胸怀天下的志向尚未平复，仍需努力。"
        }
    ],
    21: [ // 噬嗑卦
        {
            original: "履校灭趾，无咎。",
            vernacular: "脚上套着木枷，遮住了脚趾。这是对轻微过错的惩戒，能使其改过自新，没有大碍。",
            xiaoXiang: "“履校灭趾”，不行也。",
            xiaoXiangVernacular: "“脚套木枷”，是为了防止其在错误的道路上继续前行。"
        },
        {
            original: "噬肤灭鼻，无咎。",
            vernacular: "咬坚硬的肉，鼻子都陷进去了（象征惩戒有力）。处理果断，没有灾祸。",
            xiaoXiang: "“噬肤灭鼻”，乘刚也。",
            xiaoXiangVernacular: "“咬肉陷鼻”，是因为其行为果断，且得到了刚强力量的支持。"
        },
        {
            original: "噬腊肉，遇毒；小吝，无咎。",
            vernacular: "咬陈旧的腊肉，却遇到了毒气（处理陈年旧案时遇到阻力）。虽然有些小麻烦，但最终没有大碍。",
            xiaoXiang: "“遇毒”，位不当也。",
            xiaoXiangVernacular: "“遇到毒气”，是因为其所处位置德不配位，处理问题时略显吃力。"
        },
        {
            original: "噬干胏，得金矢，利艰贞，吉。",
            vernacular: "咬带骨的干肉，却得到了金色的箭头（在艰难的断案中获得了核心依据）。利于在艰难中守持正道，吉祥。",
            xiaoXiang: "“利艰贞，吉”，未光也。",
            xiaoXiangVernacular: "“在艰难中守正获吉”，说明虽然目前前途尚未完全大放异彩，但由于方向正确，前途依然是好的。"
        },
        {
            original: "噬干肉，得黄金，贞厉，无咎。",
            vernacular: "咬干肉，得到了黄金（象征在处理棘手问题时获得了极高的威信或公正的赞誉）。此时应持守正道以防危险，没有灾祸。",
            xiaoXiang: "“贞厉，无咎”，得当也。",
            xiaoXiangVernacular: "“守正以防险且无祸”，是因为其处理手段非常得当，符合身份。"
        },
        {
            original: "何校灭耳，凶。",
            vernacular: "颈上戴着沉重的木枷，遮住了耳朵。只因顽固不化、犯罪严重，结局凶险。",
            xiaoXiang: "“何校灭耳”，聪不明也。",
            xiaoXiangVernacular: "“颈戴枷锁而遮耳”，是因为其听不进劝诫，耳不聪、心不明。"
        }
    ],
    22: [ // 贲卦
        {
            original: "贲其趾，舍车而徒。",
            vernacular: "装饰自己的脚趾，宁愿舍弃安逸的车马而步行。表现了一种朴实而刚毅的初始态度。",
            xiaoXiang: "“舍车而徒”，义弗乘也。",
            xiaoXiangVernacular: "“弃车而行”，是因为在道义上觉得不应当凭借外力而获得这种华而不实的虚名。"
        },
        {
            original: "贲其须。",
            vernacular: "修饰胡须（象征依附于更有权势或更重要的人物而获得光彩）。",
            xiaoXiang: "“贲其须”，与上兴也。",
            xiaoXiangVernacular: "“修饰胡须”，表现了其意图跟从上位者一同兴旺。"
        },
        {
            original: "贲如濡如，永贞吉。",
            vernacular: "装饰得润泽华美。如果能长久地守持正道，结果是吉祥的。",
            xiaoXiang: "“永贞”之“吉”，终莫之陵也。",
            xiaoXiangVernacular: "“长久守正的吉祥”，是因为这种德行最终将无人能够侵犯或凌辱。"
        },
        {
            original: "贲如皤如，白马翰如，匪寇婚媾。",
            vernacular: "装饰得素白洁净（反璞归真），白马轻快地飞翔。对方不是来抢劫的，而是来求亲的。",
            xiaoXiang: "六四，当位疑也。“匪寇婚媾”，终无尤也。",
            xiaoXiangVernacular: "六四爻处于此位心存疑虑；但既然“非寇即亲”，最终也不会有任何埋怨或过失。"
        },
        {
            original: "贲于丘园，束帛戋戋，吝，终吉。",
            vernacular: "装饰在偏僻的丘原园林之中（招纳贤才）。虽然送出的聘礼微薄，显得有些吝啬，但最终是吉祥的。",
            xiaoXiang: "六五之吉，有喜也。",
            xiaoXiangVernacular: "六五爻的吉祥，来自于志同道合者带来的喜悦。"
        },
        {
            original: "白贲，无咎。",
            vernacular: "返璞归真，不再进行多余的装饰，没有灾祸。",
            xiaoXiang: "“白贲，无咎”，上得志也。",
            xiaoXiangVernacular: "“纯白之饰无祸”，说明此时志向已经达到最高境界，不需要外表的修饰了。"
        }
    ],
    23: [ // 剥卦
        {
            original: "剥床以足，蔑贞，凶。",
            vernacular: "床脚开始朽坏（根基受到侵蚀）。正道受到蔑视和破坏，结局凶险。",
            xiaoXiang: "“剥床以足”，以灭下也。",
            xiaoXiangVernacular: "“床脚朽坏”，是因为危机正从最底层的根基处开始爆发。"
        },
        {
            original: "剥床以辨，蔑贞，凶。",
            vernacular: "床板的支架开始朽坏。正道受到蔑视，结局凶险。",
            xiaoXiang: "“剥床以辨”，未有与也。",
            xiaoXiangVernacular: "“剥蚀了支架”，是因为此时并没有得到外部力量的有效支持。"
        },
        {
            original: "剥之，无咎。",
            vernacular: "虽有剥蚀，但并未造成不可挽回的过失。没有灾祸。",
            xiaoXiang: "“剥之，无咎”，失上下也。",
            xiaoXiangVernacular: "“在这个阶段没有过失”，是因为他懂得在上下受损的局面中保持独立而不随波逐流。"
        },
        {
            original: "剥床以肤，凶。",
            vernacular: "剥蚀已经侵袭到了床上的皮肤（危险已迫在眉睫），结局凶险。",
            xiaoXiang: "“剥床以肤”，切近灾也。",
            xiaoXiangVernacular: "“灾祸触及肌肤”，意味着灾难已经发生了，且极其切近。"
        },
        {
            original: "贯鱼，以宫人宠，无不利。",
            vernacular: "像成串的鱼一样（鱼贯而入），承蒙宫中人的引导和宠爱，无往不利。",
            xiaoXiang: "“以宫人宠”，终无尤也。",
            xiaoXiangVernacular: "“得到宫中人的引导”，其最终结果还是不会产生什么大的埋怨的。"
        },
        {
            original: "硕果不食，君子得舆，小人剥庐。",
            vernacular: "硕果仅存。君子得到了民众拥戴的车舆，而小人因贪得无厌，最终连自己的草庐也被剥蚀了。",
            xiaoXiang: "“君子得舆”，民所载也；“小人剥庐”，终不可用也。",
            xiaoXiangVernacular: "“君子获得车舆”，是人民真心爱戴的结果；“小人剥蚀了自己的草庐”，说明这种做法最终行不通，无法被社会所接受。"
        }
    ],
    24: [ // 复卦
        {
            original: "不远复，无祗悔，元吉。",
            vernacular: "迷途未远便能及时回头。不会产生大的悔恨，大吉大利。",
            xiaoXiang: "“不远”之“复”，以修身也。",
            xiaoXiangVernacular: "“迷途知返的回归”，是通过自我反省和修身养德达成的。"
        },
        {
            original: "休复，吉。",
            vernacular: "能够安适地、合时宜地回归。吉祥。",
            xiaoXiang: "“休复”之“吉”，以下仁也。",
            xiaoXiangVernacular: "“安适回归之所以吉祥”，是因为他能放低姿态去亲近那些更仁德的人。"
        },
        {
            original: "频复，厉，无咎。",
            vernacular: "频繁地出错又频繁地纠正回归。处境虽有些危险，但仍能做到没有大过失。",
            xiaoXiang: "“频复”之“厉”，义“无咎”也。",
            xiaoXiangVernacular: "“频繁回归虽显艰难”，但在道义上终究是可以获得原谅而无害的。"
        },
        {
            original: "中行独复。",
            vernacular: "在随众而行的情况下，唯独自己能够看清局势并回归正道。",
            xiaoXiang: "“中行独复”，以从道也。",
            xiaoXiangVernacular: "“唯独自己回归”，说明其心中始终秉持着客观的天道法则。"
        },
        {
            original: "敦复，无悔。",
            vernacular: "以敦厚朴实的方式回归。没有悔恨。",
            xiaoXiang: "“敦复，无悔”，中以自考也。",
            xiaoXiangVernacular: "“真诚回归且无悔”，是通过内心反复考察中正之德而实现的。"
        },
        {
            original: "迷复，凶，有灾眚。用行师，终有大败，以其国君，凶；至于十年不克征。",
            vernacular: "迷失了回归的路。结局凶险，会有天灾人祸。如果这时出兵打仗，终将面临大败；对国家君主来说也会带来灾难。甚至十年内都无法恢复元气。",
            xiaoXiang: "“迷复”之“凶”，反君道也。",
            xiaoXiangVernacular: "“因迷失而不及回归的凶险”，是因为这种做法严重背离了为君为臣的正道。"
        }
    ],
    25: [ // 无妄卦
        {
            original: "无妄，往吉。",
            vernacular: "没有虚伪和不切实际的幻想。这时勇往直前是吉祥的。",
            xiaoXiang: "“无妄”之“往”，得志也。",
            xiaoXiangVernacular: "“在真诚中前行”，说明此时个人的志向能够得以顺遂开展。"
        },
        {
            original: "不耕获，不菑畬，则利有攸往。",
            vernacular: "不计较眼前的耕耘，不刻意追求立竿见影的收获，这种不功利的心态有利于长远发展。",
            xiaoXiang: "“不耕获”，未富也。",
            xiaoXiangVernacular: "“不急于收获”，说明此时虽然尚未大富大贵，但因心态健康，前途依然光明。"
        },
        {
            original: "无妄之灾，或系之牛，行人之得，邑人之灾。",
            vernacular: "突如其来的横祸。如同有人拴牛于路旁，过客顺手牵羊得了便宜，邑中当地人却要蒙受不白之白冤。",
            xiaoXiang: "行人得牛，邑人灾也。",
            xiaoXiangVernacular: "路人得了便宜，当地人却遭殃，这就是受外部变动影响而产生的无妄之灾。"
        },
        {
            original: "可贞，无咎。",
            vernacular: "可以守持正道。没有灾祸。",
            xiaoXiang: "“可贞，无咎”，固有之也。",
            xiaoXiangVernacular: "“守正而无过失”，表现了其骨子里固有的那份正直、坚定。"
        },
        {
            original: "无妄之疾，勿药有喜。",
            vernacular: "意外感染的小毛病（或面临的小波动）。不用吃药也会自然痊愈并迎来喜庆。",
            xiaoXiang: "“无妄”之“药”，不可试也。",
            xiaoXiangVernacular: "“意外之灾若非己过”，切不可乱用旁门左道的医药去盲目处理，否则反而有害。"
        },
        {
            original: "无妄，行有眚，无攸利。",
            vernacular: "在不该行动时却抱有幻想或盲目行动。会有灾难性的人祸，没有任何好处。",
            xiaoXiang: "“无妄”之“行”，穷之灾也。",
            xiaoXiangVernacular: "“妄想中的行动”，是穷途末路时必然招致的灾祸。"
        }
    ],
    26: [ // 大畜卦
        {
            original: "有厉，利已。",
            vernacular: "面临危险，利于及时停止行动。",
            xiaoXiang: "“有厉，利已”，不犯灾也。",
            xiaoXiangVernacular: "“处险即停”，是为了不主动去触碰和引发更大的灾难。"
        },
        {
            original: "舆说輹。",
            vernacular: "车轴上的輹脱落了（车无法前行）。象征受到了某种阻力而被迫停止蓄势。",
            xiaoXiang: "“舆说輹”，中无尤也。",
            xiaoXiangVernacular: "“车轴脱落”，是因为其心中秉持正道，知道此时不宜强行，故而并没有错。"
        },
        {
            original: "良马逐，利艰贞。曰闲舆卫，利有攸往。",
            vernacular: "像良马相互追逐一样充满活力。利于在艰难中守持正道。每日练习驾车和防卫的技术，利于在关键时刻有所作为。",
            xiaoXiang: "“利有攸往”，上合志也。",
            xiaoXiangVernacular: "“利于向前进发”，说明整体形势和各方志向正在趋于统一。"
        },
        {
            original: "童牛之牐，元吉。",
            vernacular: "在小牛的角上安装防护横木（从源头上进行防范约束）。大吉大利。",
            xiaoXiang: "六四“元吉”，有喜也。",
            xiaoXiangVernacular: "六四爻的吉祥，来自于能够预见风险并提前做好良性的预防措施。"
        },
        {
            original: "豮豕之牙，吉。",
            vernacular: "拔掉阉猪的獠牙（从根本上化解危险因素）。吉祥。",
            xiaoXiang: "六五“吉”，有庆也。",
            xiaoXiangVernacular: "六五爻的吉祥，源于其能够巧妙地通过化解冲突来赢得社会的赞誉。"
        },
        {
            original: "何天之衢，亨。",
            vernacular: "达到了天的通途大道（大功告成）。极为亨通。",
            xiaoXiang: "“何天之衢”，道大行也。",
            xiaoXiangVernacular: "“踏上天际的坦途”，意味着个人的思想与事业已经达到了大步实施的境界。"
        }
    ],
    27: [ // 颐卦
        {
            original: "舍尔灵龟，观我朵颐，凶。",
            vernacular: "舍弃了你那像灵龟一样自足的本性，却贪婪地看着我在大快朵颐。这种舍本逐末、自失身份的行为是凶险的。",
            xiaoXiang: "“观我朵颐”，亦不足贵也。",
            xiaoXiangVernacular: "“垂涎他人的饮食”，这样的行为在道德层面上是根本不值一提的。"
        },
        {
            original: "颠颐，拂经，于丘颐，征凶。",
            vernacular: "违背常理向下求食。颠三倒四地向丘陵高处求食（求援）。此时出征或轻率行动必遭凶险。",
            xiaoXiang: "六二“征凶”，行失类也。",
            xiaoXiangVernacular: "六二爻的凶险，在于其行为完全背离了与同类志趣平衡的正道。"
        },
        {
            original: "拂颐，贞凶，十年勿用，无攸利。",
            vernacular: "违背了颐养的正道。守持这种错误观念会有凶险，即使等上十年也无法发挥作用，没有任何好处。",
            xiaoXiang: "“十年勿用”，道大悖也。",
            xiaoXiangVernacular: "“十年不可任用”，说明这种行为方式已经严重违背了大自然基本的生存法则。"
        },
        {
            original: "颠颐吉，虎视眈眈，其欲逐逐，无咎。",
            vernacular: "向下求贤以颐养众人（或低调求援）。像老虎一样专注而专注，欲望虽多但追求的是正当的事业。没有灾祸。",
            xiaoXiang: "“颠颐”之“吉”，上施光也。",
            xiaoXiangVernacular: "“从高位向下照应而获吉”，体现了上方通过施与德行来照亮了下方。"
        },
        {
            original: "拂经，居贞吉，不可涉大川。",
            vernacular: "虽然违背了一些常规，但如果能安于守正，结果是吉祥的。不过此时不宜进行涉越大河这种高风险的尝试。",
            xiaoXiang: "“居贞”之“吉”，顺以从上也。",
            xiaoXiangVernacular: "“守正吉祥”，是因为他在大变动中能够柔顺地服从上位的指引。"
        },
        {
            original: "由颐，厉吉，利涉大川。",
            vernacular: "作为颐养众生、化解矛盾的源头。处境虽危险但结果吉祥。利于在重大风险（涉大川）中挑战自我的极限。",
            xiaoXiang: "“由颐，厉吉”，大有庆也。",
            xiaoXiangVernacular: "“作为颐养的担当而获吉”，这是一个值得全国上下大加庆贺的成就。"
        }
    ],
    28: [ // 大过卦
        {
            original: "藉用白茅，无咎。",
            vernacular: "祭祀或平时用洁白的茅草来垫衬。表现了做事极其细致、恭敬且谨慎的态度。没有灾祸。",
            xiaoXiang: "“藉用白茅”，柔在下也。",
            xiaoXiangVernacular: "“垫衬白茅”，体现了此时应当抱持一种极致的谦逊与柔顺的态度。"
        },
        {
            original: "枯杨生稊，老夫得其女妻，无不利。",
            vernacular: "枯杨生出嫩芽。老夫娶了少妻。在处于极端状态时因枯木逢春而重获生机，无往不利。",
            xiaoXiang: "“老夫女妻”，过以相与也。",
            xiaoXiangVernacular: "“老夫少妻的结合”，表现了处于过度状态下的阴阳能重新相遇并产生奇妙的共生。"
        },
        {
            original: "栋挠，凶。",
            vernacular: "屋顶的横梁渐因沉重而弯曲（因承载过重而偏离重心）。结局凶险。",
            xiaoXiang: "“栋挠”之“凶”，不可以有辅也。",
            xiaoXiangVernacular: "“栋梁弯折”，说明局势已极其危险，外部助力已难以支撑。"
        },
        {
            original: "栋隆，吉；有它吝。",
            vernacular: "事梁不仅没有弯曲反而通过某种方式获得了加固。吉祥。但要注意防止可能出现的其他小波折。",
            xiaoXiang: "“栋隆”之“吉”，不挠下也。",
            xiaoXiangVernacular: "“加固事梁之所以吉祥”，是因为在上层的抗压过程中并没有给下层造成崩塌式的压力。"
        },
        {
            original: "枯杨生华，老妇得其士夫，无咎无誉。",
            vernacular: "枯杨不仅生芽而且开了花。年老的妻子得到了年轻的丈夫。虽有表面的繁荣却难以持久，没有大灾但也谈不上真正的荣誉。",
            xiaoXiang: "“枯杨生华”，何可久也？“老妇士夫”，亦可丑也。",
            xiaoXiangVernacular: "“枯杨开花”这种景象怎么可能长久维持呢？“老妻少夫”这种组合在传统看来也略显不伦不类。"
        },
        {
            original: "过涉灭顶，凶，无咎。",
            vernacular: "处理棘手问题时因用力过猛（过分涉水）导致河水没过了头顶。虽因志向高远被大众理解，但结果终究是凶险的。",
            xiaoXiang: "“过涉”之“凶”，不可咎也。",
            xiaoXiangVernacular: "“过勇涉行带来的凶险”，虽道义上无可厚非，但结果确实是失败了。"
        }
    ],
    29: [ // 坎卦
        {
            original: "习坎，入于坎窞，凶。",
            vernacular: "重重险陷。掉进了深穴之中，结局凶险。",
            xiaoXiang: "“习坎”入坎，失道“凶”也。",
            xiaoXiangVernacular: "“重重陷阱中却越陷越深”，是因为此时已经完全偏离了避险的正确道路。"
        },
        {
            original: "坎有险，求小得。",
            vernacular: "陷入险境。此时只能追求小的突破或小的自保，大事业难成。",
            xiaoXiang: "“求小得”，未出中也。",
            xiaoXiangVernacular: "“能获得小的进展”，说明目前虽然能保全自己，但还远未走出险境。"
        },
        {
            original: "来之坎坎，险且枕，入于坎窞，勿用。",
            vernacular: "左右为难、进退都是陷阱。险象环生且无法安稳（像睡在悬崖边上）。落入了最危险的深洞，此时不宜采取任何大的行动。",
            xiaoXiang: "“来之坎坎”，终无功也。",
            xiaoXiangVernacular: "“进退维谷的坎坷”，说明此时所有的努力最终都可能化为泡影，一无所成。"
        },
        {
            original: "樽酒簋贰，用缶，纳约自牖，终无咎。",
            vernacular: "祭祀时仅备薄酒与简祭，盛于瓦罐，由窗棂处呈献，以此表达极致的诚意。如此行事因心中有道，最终必无祸患。",
            xiaoXiang: "“樽酒簋贰”，刚柔际也。",
            xiaoXiangVernacular: "“祭礼简约”，体现了在险境中刚硬力量与柔顺德行的某种绝妙交会。"
        },
        {
            original: "坎不盈，祗既平，无咎。",
            vernacular: "陷穴里的水还不算太满。只要能审慎观察等水位平复，就能平安无事。",
            xiaoXiang: "“坎不盈”，中未大也。",
            xiaoXiangVernacular: "“陷阱尚未完全填满”，意味着此时的危险还并没有达到不可控制的地步。"
        },
        {
            original: "系用徽纆，置于丛棘，三岁不得，凶。",
            vernacular: "被绳索牢牢捆绑，扔进了长满荆棘的监牢里。整整三年也没能脱困。结局极其凶险。",
            xiaoXiang: "上六失道，凶三岁也。",
            xiaoXiangVernacular: "上六爻已经完全背离了正道，因此其困顿与凶险将长达三年之久。"
        }
    ],
    30: [ // 离卦
        {
            original: "履错然，敬之无咎。",
            vernacular: "起步时显得有些杂乱无章（错落而忙碌）。只要能保持恭敬、严谨的态度，就不会有大过失。",
            xiaoXiang: "“履错”之“敬”，以避咎也。",
            xiaoXiangVernacular: "“行事忙乱但由于恭敬”，正是为了及早避开可能发生的祸患。"
        },
        {
            original: "黄离，元吉。",
            vernacular: "像由于依附着明黄色的正统光辉（象征中道与智慧）。大吉大利。",
            xiaoXiang: "“黄离，元吉”，得中道也。",
            xiaoXiangVernacular: "“明黄色的一附之所以大吉”，是因为他真正获得了符合大自然法则的中庸之道。"
        },
        {
            original: "日昃之离，不鼓缶而歌，则大耋之嗟，凶。",
            vernacular: "快落山的夕阳余晖。如果不趁此时敲着瓦罐尽情高歌享受当下，就只能像垂暮老人那样哀叹年华老去。这种消极焦虑的心态是凶险的。",
            xiaoXiang: "“日昃之离”，何可久也。",
            xiaoXiangVernacular: "“夕阳残余的光辉”，这种景象怎么可能长久持续下去呢？"
        },
        {
            original: "突如其来如，焚如，死如，弃如。",
            vernacular: "灾祸突如其来。像大火焚烧一切一样酷烈。这种突发的、不留余地的毁灭感往往导致彻底的失败或离散。",
            xiaoXiang: "“突如其来如”，无所容也。",
            xiaoXiangVernacular: "“面临突如其来的变故”，这种打击之重已经到了让人无法容身、无处躲藏的地步。"
        },
        {
            original: "出涕沱若，戚嗟若，吉。",
            vernacular: "悲伤得直流眼泪，忧虑得连声叹气（由于忧患意识强烈）。这种因时刻警惕危机而产生的忧惧心理最终将导向吉祥。",
            xiaoXiang: "六五之吉，离王公也。",
            xiaoXiangVernacular: "六五爻的吉祥，源于他在上位之时依然能保持对下层疾苦和国家安危的深刻感怀。"
        },
        {
            original: "王用出征，有嘉折首，获匪其丑，无咎。",
            vernacular: "君王亲自出征。取得了伟大的战果，斩杀了敌方首领，但也宽厚地没有牵连其他人（或表现了极高的正义性）。这并没有过失。",
            xiaoXiang: "“王用出征”，以正邦也。",
            xiaoXiangVernacular: "“君王御驾亲征”，是为了通过纠正邪恶来端正国家的法度和正气。"
        }
    ],
    31: [ // 咸卦
        {
            original: "咸其拇。",
            vernacular: "脚的大拇指感受到了感应（开始产生动念）。表现了外部影响最初的作用层面。",
            xiaoXiang: "“咸其拇”，志在外也。",
            xiaoXiangVernacular: "“脚趾产生感应”，说明个人的志向已经开始由于受到外部环境的影响而向外舒展。"
        },
        {
            original: "咸其腓，凶，居吉。",
            vernacular: "小腿肚子产生感应（因冲动而盲目跟随）。此时若轻举妄动会有凶险，安守不动则是吉祥的。",
            xiaoXiang: "虽然“凶，居吉”，顺不害也。",
            xiaoXiangVernacular: "“盲目跟随虽险但安守获吉”，说明只要能顺应规律、保持克制，就不会受到伤害。"
        },
        {
            original: "咸其股，执其随，往吝。",
            vernacular: "大腿产生感应（急于行动且受制于他人的带动）。表现了缺乏主见、一味随声附和的态度，前进必遭羞吝。",
            xiaoXiang: "“咸其股”，亦不处也；志在随人，所执下也。",
            xiaoXiangVernacular: "“大腿感应”说明其内心已经无法安静处之；由于志向只在于追随他人，这种追求是非常低下的。"
        },
        {
            original: "贞吉，悔亡。憧憧往来，朋从尔思。",
            vernacular: "守持正道吉祥，悔恨会消失。如果心猿意马、思虑不定，那么你的朋友也只会因为你的主观想法而附和，无法获得真心的契合。",
            xiaoXiang: "“贞吉，悔亡”，未感害也；“憧憧往来”，未光大也。",
            xiaoXiangVernacular: "“守正获吉”，说明感应本身并没有造成伤害；但“思虑不宁”，表现了感应的境界还不够远大和纯粹。"
        },
        {
            original: "咸其脢，无悔。",
            vernacular: "脊背肌肉产生感应（虽有感应但无法通过言语表达，或反应迟钝）。虽然不够灵敏，但也因此避免了轻率行动带来的悔恨。",
            xiaoXiang: "“咸其脢”，志末也。",
            xiaoXiangVernacular: "“脊背产生感应”，说明这种感应还停留在表皮，并未真正触及到志向的核心。"
        },
        {
            original: "咸其辅颊舌。",
            vernacular: "感应体现在牙床、脸颊和舌头上（只停留在口头言语的表象感应）。象征只有空谈而没有实际的行动感通。",
            xiaoXiang: "“咸其辅颊舌”，滕口说也。",
            xiaoXiangVernacular: "“口舌的感应”，只不过是夸夸其谈、搬弄是非罢了。"
        }
    ],
    32: [ // 恒卦
        {
            original: "浚恒，贞凶，无攸利。",
            vernacular: "过深地追求恒久（由于急功近利地想要达到永恒）。守持这种过激的观念会有凶险，没有任何好处。",
            xiaoXiang: "“浚恒”之“凶”，始求深也。",
            xiaoXiangVernacular: "“过深追求恒久之所以危险”，是因为在事物刚开始时就过分奢求长远，违背了成长的规律。"
        },
        {
            original: "悔亡。",
            vernacular: "悔恨消失（因能持守中道而获得了稳固）。",
            xiaoXiang: "九二“悔亡”，能久中也。",
            xiaoXiangVernacular: "九二爻“悔恨消失”，是因为他能够长期地坚守中庸之道。"
        },
        {
            original: "不恒其德，或承之羞，贞吝。",
            vernacular: "不能持之以恒地坚守自己的美德。这会招致羞辱，即使动机正当也会由于性格不稳定而面临困境。",
            xiaoXiang: "“不恒其德”，无所容也。",
            xiaoXiangVernacular: "“德行不能持久”，最终会导致其在社会上无处容身，失去信任。"
        },
        {
            original: "田无禽。",
            vernacular: "在田野狩猎却一无所获（因位置不对或方法不恒定）。象征因方向性错误导致徒劳无功。",
            xiaoXiang: "久非其位，安得禽也。",
            xiaoXiangVernacular: "长久地处在不该处的位置上，又怎么可能得到猎物（成果）呢？"
        },
        {
            original: "恒其德，贞，妇人吉，夫子凶。",
            vernacular: "恒久地坚守这种顺从的德行。对于家庭内部（或地位偏阴者）是吉祥的；但对于需要担当和开拓的男子（或领导者）来说，一味保守则是凶险的。",
            xiaoXiang: "妇人贞吉，从一终也；夫子制义，从妇凶也。",
            xiaoXiangVernacular: "“妇人守正获吉”，是因为她能从一而终；而男子应当裁断道义、随机应变，如果只会盲目从属，那就是凶兆了。"
        },
        {
            original: "振恒，凶。",
            vernacular: "心浮气躁、频繁变动的“假恒定”。结局凶险。",
            xiaoXiang: "“振恒”在上，大无功也。",
            xiaoXiangVernacular: "“处于高位却心浮气躁”，必然导致事业一事无成，完全没有功绩。"
        }
    ],
    33: [ // 遁卦
        {
            original: "遁尾，厉，勿用有攸往。",
            vernacular: "处于撤退的最末尾（危险已至）。处境艰危，此时不宜由于贪恋眼前的波动而有所行动。",
            xiaoXiang: "“遁尾”之“厉”，不往何灾也。",
            xiaoXiangVernacular: "“撤退时处于尾部的危险”，只要能坚决停止前进，又会有什么灾祸呢？"
        },
        {
            original: "执之用黄牛之革，莫之胜说。",
            vernacular: "像用黄牛皮绳紧紧捆绑一样坚固。意志坚定（或由于依附着某种力量而极其稳固），没有任何人能说服改变其志向。",
            xiaoXiang: "“执用黄牛”，固志也。",
            xiaoXiangVernacular: "“利用黄牛皮捆绑”，是为了比喻其内心防守和退避的意志非常坚定。"
        },
        {
            original: "系遁，有疾厉，畜臣妾吉。",
            vernacular: "由于依恋而被迫退避（拖泥带水）。像身患疾病一样令人不安，处境险恶。虽然处理个人私事（如蓄养家仆）还可以，但大事业难成。",
            xiaoXiang: "“系遁”之“厉”，有疾惛也；“畜臣妾吉”，不可大事也。",
            xiaoXiangVernacular: "“拖泥带水的退避”，是由于被情感、私欲干扰而产生的迷惘；这种心态只能处理家务小事，无法担当重任。"
        },
        {
            original: "好遁，君子吉，小人否。",
            vernacular: "能够凭理智和喜好克制私欲而安然退避。君子在此时吉祥，小人则因贪婪而无法做到这一点。",
            xiaoXiang: "君子“好遁”，小人“否”也。",
            xiaoXiangVernacular: "“君子能从容退隐”，表现了其超脱；而小人则会因为执着于名利而遭受灾害。"
        },
        {
            original: "嘉遁，贞吉。",
            vernacular: "由于坚持正道而获得了众人的赞美并安然退隐。守持正道吉祥。",
            xiaoXiang: "“嘉遁，贞吉”，以正志也。",
            xiaoXiangVernacular: "“美好的退隐之所以吉祥”，是因为其退避的动机纯正，符合道义。"
        },
        {
            original: "肥遁，无不利。",
            vernacular: "以极其优渥、洒脱的姿态退避。无往不利。",
            xiaoXiang: "“肥遁，无不利”，无所疑也。",
            xiaoXiangVernacular: "“洒脱的退隐之所以无往不利”，是因为其心中已经没有任何疑虑和牵挂。"
        }
    ],
    34: [ // 大壮卦
        {
            original: "壮于趾，征凶，有孚。",
            vernacular: "只在脚趾（象征初始、底层）表现出强壮和冲动。此时如果急于出征会有凶险，这是必然的客观规律。",
            xiaoXiang: "“壮于趾”，其孚穷也。",
            xiaoXiangVernacular: "“脚趾逞强”，说明其表面虽然信誓旦旦，但后劲严重不足，很快就会陷入绝境。"
        },
        {
            original: "贞吉。",
            vernacular: "守持正道吉祥（由于能持守中庸而获得了真正的力量）。",
            xiaoXiang: "九二“贞吉”，以中也。",
            xiaoXiangVernacular: "九二爻之所以吉祥，是因为他在刚强时依然能行于中道，不偏不倚。"
        },
        {
            original: "小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。",
            vernacular: "小人喜欢炫耀武力，而君子对此不屑一顾（或视若不见）。如果执意逞强必遭危险。就像公羊用头去撞击篱笆，最终由于用力过猛而夹住了角。",
            xiaoXiang: "小人“用壮”，君子“罔”也。",
            xiaoXiangVernacular: "小人才到处显摆力量，而君子懂得藏锋守拙。"
        },
        {
            original: "贞吉，悔亡。藩决不羸，壮于大舆之輹。",
            vernacular: "守持正道吉祥，悔恨消失。篱笆被撞开了，角不再受累。此时力量强盛得像大车的轴一样稳固可靠。",
            xiaoXiang: "“藩决不羸”，尚往也。",
            xiaoXiangVernacular: "“篱笆撞开而不受困”，说明目前可以由于力量的合理运用而大步前进了。"
        },
        {
            original: "丧羊于易，无悔。",
            vernacular: "在平易的田野上丢了羊（虽然受了点小损失但也化解了不必要的争执）。没有什么可悔恨的。",
            xiaoXiang: "“丧羊于易”，位不当也。",
            xiaoXiangVernacular: "“由于疏忽丢了羊”，是因为其所处位置虽然尊贵但略显柔弱，不免有些小瑕疵。"
        },
        {
            original: "羝羊触藩，不能退，不能遂，无攸利，艰则吉。",
            vernacular: "公羊撞击篱笆，进不去也退不回来，没有任何好处。如果能在艰难中保持冷静和反思，最终会转为吉祥。",
            xiaoXiang: "“不能退，不能遂”，不详也；“艰则吉”，咎不长也。",
            xiaoXiangVernacular: "“进退两难”，说明行事不够周详；“在艰难中磨炼得吉”，说明由于反省及时，过失不会长久持续。"
        }
    ],
    35: [ // 晋卦
        {
            original: "晋如愁如，贞吉。罔孚，裕无咎。",
            vernacular: "前进的过程中面临忧愁。守持正道吉祥。即使暂时得不到信任，也要保持宽容的心态，这样就没有灾祸。",
            xiaoXiang: "“晋如愁如”，独行正也；“裕无咎”，未受命也。",
            xiaoXiangVernacular: "“前进中伴随忧愁”，是因为只有他在孤独地坚守正道；“宽容待人而无祸”，是因为此时还没到大展鸿图的时机。"
        },
        {
            original: "晋如，愁如，贞吉。受兹介福，于其王母。",
            vernacular: "在前行中忧虑审慎。守持正道吉祥。此时将承蒙极大的福祉，这种护佑甚至可以溯及至先辈（王母）的余荫。",
            xiaoXiang: "“受兹介福”，以中正也。",
            xiaoXiangVernacular: "“承蒙伟大的天佑”，是因为他的人格真正契合了中庸之道。"
        },
        {
            original: "众允，悔亡。",
            vernacular: "得到了众人的信任和认可。悔恨自然会由于力量的聚集而消失。",
            xiaoXiang: "“众允”之志，上行也。",
            xiaoXiangVernacular: "“获得众人信任”，这种强大的民意基础必将推动事业向上发展。"
        },
        {
            original: "晋如硕鼠，贞厉。",
            vernacular: "在前行中像大耗子一样贪婪且投机。虽然目前守持这种状态没出大事，但由于德不配位，处境是极其危险的。",
            xiaoXiang: "“硕鼠贞厉”，位不当也。",
            xiaoXiangVernacular: "“像硕鼠一样投机”，是因为其身处高位却只会谋取私利，德行完全不配位。"
        },
        {
            original: "悔亡，失得勿恤。往吉，无不利。",
            vernacular: "悔恨消失。不用计较一时的得失。勇敢前进是吉祥的，无往不利。",
            xiaoXiang: "“失得勿恤”，往有庆也。",
            xiaoXiangVernacular: "“不计较得失”，是因为未来的前进必将迎来全国人民乃至全社会的庆贺。"
        },
        {
            original: "晋其角，维用伐邑。厉吉无咎，贞吝。",
            vernacular: "前进得已经达到了顶端（强弩之末）。此时只适合用于处理内部事务（如征讨不服的邑落）。处境虽然艰危但由于果断而获吉且无大祸，但格局难免有些狭隘，令人羞吝。",
            xiaoXiang: "“维用伐邑”，道未光也。",
            xiaoXiangVernacular: "“仅局限于处理局部冲突”，说明他的道义和影响力还远没有达到普照天下的程度。"
        }
    ],
    36: [ // 明夷卦
        {
            original: "明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言。",
            vernacular: "光明受阻。像鸟儿在飞行中受伤垂下翅膀。君子在匆忙赶路的过程中甚至三天顾不上吃饭。虽然有所行动，但由于目前局势混乱，难免会受到他人的非议。",
            xiaoXiang: "“君子于行”，义不食也。",
            xiaoXiangVernacular: "“君子赶路顾不上吃饭”，是因为在道义上觉得目前拯救危机比个人享受重要得多。"
        },
        {
            original: "明夷，夷于左股，用拯马壮，吉。",
            vernacular: "光明受阻。左大腿受了伤。只要能借助强壮的马匹（或借助外力）及时自救，结果是吉祥的。",
            xiaoXiang: "六二之吉，顺以则也。",
            xiaoXiangVernacular: "六二爻的吉祥，源于他在危险中能够柔顺地遵循自然的避险法则。"
        },
        {
            original: "明夷于南狩，得其大首，不可疾贞。",
            vernacular: "光明受阻时向南巡狩（或寻找突破）。结果意外获得了对方的首领（核心问题的解决）。但此时切记不可由于急于求成而强行推进。",
            xiaoXiang: "“南狩”之志，乃大得也。",
            xiaoXiangVernacular: "“南方巡狩的志向”，让他在乱世中真正获得了重整秩序的机会。"
        },
        {
            original: "入于左腹，获明夷之心，于出门庭。",
            vernacular: "深入到局势的最深处（腹地）。洞察了危机产生的根源（明夷之心）。于是能够及时果断地抽身退出门庭。",
            xiaoXiang: "“入于左腹”，获心意也。",
            xiaoXiangVernacular: "“深入腹地”，是因为他真正看穿了对手或该事物的真实意图。"
        },
        {
            original: "箕子之明夷，利贞。",
            vernacular: "像箕子在昏君统治下怀才不遇、潜伏自保一样。利于在黑暗中坚守正道、内敛其光华。",
            xiaoXiang: "箕子之“贞”，明不可息也。",
            xiaoXiangVernacular: "箕子的“坚贞”，表现了真正的光明是永远不会被外界的黑暗所彻底熄灭的。"
        },
        {
            original: "不明晦，初登于天，后入于地。",
            vernacular: "毫无光明。起初像升上天空一样显赫一时，最后却彻底坠入地下黑暗之中。象征由于极端暴虐或昏庸导致的最终覆灭。",
            xiaoXiang: "“初登于天”，照四国也；“后入于地”，失则也。",
            xiaoXiangVernacular: "“起初升上天空”，光亮照耀四方；“后来坠入地下”，是因为其彻底丧失了自然与人性的法度。"
        }
    ],
    37: [ // 家人卦
        {
            original: "闲有家，悔亡。",
            vernacular: "刚建立家庭时就确立规范和规矩。由于防患于未然，悔恨会自然消失。",
            xiaoXiang: "“闲有家”，志未变也。",
            xiaoXiangVernacular: "“立规齐家”，说明此时家庭成员的志向和心气尚未受到外界不良风气的干扰。"
        },
        {
            original: "无攸遂，在中馈，贞吉。",
            vernacular: "不追求在外面出风头，而是安守本分。专心处理好家庭内部的琐事（如主持饮食）。守持中道吉祥。",
            xiaoXiang: "六二之吉，顺以巽也。",
            xiaoXiangVernacular: "六二爻的吉祥，源于其能够平和而且谦逊地顺应规则。"
        },
        {
            original: "家人嗃嗃，悔厉吉；妇子嘻嘻，终吝。",
            vernacular: "家庭管理由于严格而显得严厉且有斥责声（虽然会有暂时的不快但最终是吉祥的）。如果妇女孩子整天嬉笑无度、缺乏管教，最终会招致羞吝。",
            xiaoXiang: "“家人嗃嗃”，未失也；“妇子嘻嘻”，失家节也。",
            xiaoXiangVernacular: "“治家严厉”，并没有丢失管理的原则；“嬉笑无度”，则是彻底丧失了持家的礼节。"
        },
        {
            original: "富家，大吉。",
            vernacular: "家庭和睦充裕（因勤俭持家而获得了财富和声望）。大吉大利。",
            xiaoXiang: "“富家大吉”，顺在位也。",
            xiaoXiangVernacular: "“家庭富足且大吉”，表现了身居此位的人能够顺应时势，真正撑起家业。"
        },
        {
            original: "王假有家，勿恤吉。",
            vernacular: "君王能够像治理一个家庭一样治理天下（或君王感化了家庭关系）。不用忧虑，一切都是吉祥的。",
            xiaoXiang: "“王假有家”，交相爱也。",
            xiaoXiangVernacular: "“君王降临治理家庭”，体现了上下之间那种由于相互爱护而产生的极度和谐。"
        },
        {
            original: "有孚威如，终吉。",
            vernacular: "心怀诚信且具有威严。由于德威并重，最终是吉祥的。",
            xiaoXiang: "威如之吉，反身之谓也。",
            xiaoXiangVernacular: "“具备威望而获吉”，是因为他能够时常反省自身，通过修身来确立威仪。"
        }
    ],
    38: [ // 睽卦
        {
            original: "悔亡，丧马勿逐，自复；见恶人，无咎。",
            vernacular: "悔恨消失。丢失的马无需追赶，它自会因思主而归。即便遭遇不怀好意的“恶人”，只要能机智应对，也必无大碍。",
            xiaoXiang: "“见恶人”，以辟咎也。",
            xiaoXiangVernacular: "“接触不合群的恶人”，是为了通过一定的妥协来化解和避免更大的祸患。"
        },
        {
            original: "遇主于巷，无咎。",
            vernacular: "虽然意见不合，但却在偏僻的小巷子里意外遇到了可以辅助自己的君主（或志同道合者）。这是没有灾祸的。",
            xiaoXiang: "“遇主于巷”，未失道也。",
            xiaoXiangVernacular: "“巷弄偶遇明主”，说明这种看似非正式的结合并没有违背大自然的规律逻辑。"
        },
        {
            original: "见舆曳，其牛掣，其人天且劓，无初有终。",
            vernacular: "见到大车因受阻而被拖拽，拉车的牛也极其吃力。当事人甚至遭受了面部刺字和割鼻的奇耻大辱。起初虽举步维艰，但若能坚忍守正，最终仍会有个结果。",
            xiaoXiang: "“见舆曳”，位不当也；“无初有终”，遇刚也。",
            xiaoXiangVernacular: "“行车受阻”，是因为其所处位置完全不合宜；“先苦后甜”，是因为他在困局中遇到了强有力的刚正力量的支持。"
        },
        {
            original: "睽孤，遇元夫，交孚，厉无咎。",
            vernacular: "身处离散孤立的境地。意外遇到了由于德行高迈的大丈夫（元夫），双方互相信任。虽然处境危险，但并没有大祸。",
            xiaoXiang: "“交孚无咎”，志行也。",
            xiaoXiangVernacular: "“互相信任而无祸”，说明其共同的志向终于可以付诸实施了。"
        },
        {
            original: "悔亡，厥宗噬肤，往何咎。",
            vernacular: "悔恨消失。同宗同族的人在一起轻松愉快地吃肉（化干戈为玉帛）。前进又会有什么过错呢？",
            xiaoXiang: "“厥宗噬肤”，往有庆也。",
            xiaoXiangVernacular: "“同宗聚餐”，意味着内部的矛盾已经化解，未来的前进必将迎来社会的庆贺。"
        },
        {
            original: "睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧。匪寇婚媾，往遇雨则吉。",
            vernacular: "身处孤立之境，眼前幻象丛生：见背满泥垢之猪，载满鬼魂之车。起初欲拉弓射箭，后因理智而放下。发现对方非寇即亲。若能遇甘雨洗刷疑虑，结果必吉。",
            xiaoXiang: "“遇雨”之“吉”，群疑亡也。",
            xiaoXiangVernacular: "“遇雨获吉”，意味着由于真相大白，所有的怀疑和误解都已经彻底烟消云散了。"
        }
    ],
    39: [ // 蹇卦
        {
            original: "往蹇，来誉。",
            vernacular: "盲目前进会面临困难。如果能在危急时退回来守持正道，反而会赢得美誉。",
            xiaoXiang: "“往蹇来誉”，宜待也。",
            xiaoXiangVernacular: "“由于退守而赢得美名”，说明目前最好的策略就是静心等待更合适的时机。"
        },
        {
            original: "王臣蹇蹇，匪躬之故。",
            vernacular: "君主和臣下都在为当下的艰难局势而忧心忡忡、反复奔走。这绝非为了个人私利，而是由于大局考虑而不得不承担重任。",
            xiaoXiang: "“王臣蹇蹇”，终无尤也。",
            xiaoXiangVernacular: "“上下左右奔忙于危难”，其最终结果还是会被人们理解和宽恕的。"
        },
        {
            original: "往蹇来反。",
            vernacular: "前行有难。此时应当退回来（或寻找其他路径），不可硬碰硬。",
            xiaoXiang: "“往蹇来反”，内喜之也。",
            xiaoXiangVernacular: "“退守避险”，说明内部核心已经意识到危险，并为这种理智的回归感到由衷的高兴。"
        },
        {
            original: "往蹇来连。",
            vernacular: "前行遇到困难。此时应当联合志同道合的朋友、外部的力量共同应对，而不是孤军奋斗。",
            xiaoXiang: "“往蹇来连”，当位实也。",
            xiaoXiangVernacular: "“联合各方应对危难”，这种做法与他所处的关键地位是完全相符的，而且很充实。"
        },
        {
            original: "大蹇朋来。",
            vernacular: "在极度的艰难困苦中，有大批志同道合的朋友（或援兵）闻讯赶来支援。",
            xiaoXiang: "“大蹇朋来”，以中节也。",
            xiaoXiangVernacular: "“处于危难却有朋自远方来”，是因为其为人处世真正契合了大自然的某种正义气节。"
        },
        {
            original: "往蹇来硕，吉；利见大人。",
            vernacular: "前行受阻。退守（或转向）反而能获得极其丰硕的结果，吉祥。此时宜寻求大德之人的指引与决断。",
            xiaoXiang: "“往蹇来硕”，志在内也；“利见大人”，以从贵也。",
            xiaoXiangVernacular: "“由于退守而获丰硕”，是因为其志向始终立足于核心根基；“利见大人”，表现了其愿意追随高尚权威的智慧。"
        }
    ],
    40: [ // 解卦
        {
            original: "无咎。",
            vernacular: "暂无过失。局势刚刚开始舒解，万事起头稳健，因此没有灾祸。",
            xiaoXiang: "刚柔之际，义“无咎”也。",
            xiaoXiangVernacular: "正处于刚柔交替的边缘，这种守持中道的行为在道义上自然没有过失。"
        },
        {
            original: "田获三狐，得黄矢，贞吉。",
            vernacular: "在田猎中捕获了三只狡猾的狐狸，并得到了象征公正的黄色利箭。坚守正道可获吉祥。",
            xiaoXiang: "九二“贞吉”，得中道也。",
            xiaoXiangVernacular: "九二爻之所以吉祥，是因为其处理复杂问题时能秉持中正公允之道。"
        },
        {
            original: "负且乘，致寇至，贞吝。",
            vernacular: "背着重物却又乘坐着高贵的车舆，容易招致强盗的窥视。即使守持现状，难免也会有些羞吝之情。",
            xiaoXiang: "“负且乘”，亦可丑也；自我致戎，又谁“咎”也。",
            xiaoXiangVernacular: "“身负重担却又要乘车炫耀”，这种名实不符的行为非常令人引以为耻；由于自身失措而招致祸乱，又该去责怪谁呢？"
        },
        {
            original: "解而拇，朋至斯孚。",
            vernacular: "从脚大拇指处开始感到舒解（转机已从根基萌芽）。志同道合的朋友会因相互信任而聚集在你身边。",
            xiaoXiang: "“解而拇”，未当位也。",
            xiaoXiangVernacular: "“舒解从脚拇指开始”，说明虽然目前地位尚未显赫，但基层的转机已经显现。"
        },
        {
            original: "君子维有解，吉；有孚于小人。",
            vernacular: "君子主导局势的舒解，化解危机，结果吉祥。此时即使面对小人也能以诚信感化。",
            xiaoXiang: "君子有“解”，小人退也。",
            xiaoXiangVernacular: "“君子主导的舒解”，能让投机的小人意识到无机可乘，从而自然而然地退去。"
        },
        {
            original: "公用射隼于高墉之上，获之，无不利。",
            vernacular: "公侯在城墙高处射中了凶狠的隼鸟（果断清除了祸乱的根源）。大获全胜，无往不利。",
            xiaoXiang: "“公用射隼”，以解悖也。",
            xiaoXiangVernacular: "“公侯射杀恶隼”，寓意通过果敢的策略彻底铲除悖逆与不安的隐患。"
        }
    ],
    41: [ // 损卦
        {
            original: "已事遄往，无咎。酌损之。",
            vernacular: "处理完紧要事务后迅速前往支援，并无过失。但应当懂得根据实际情况适度减少个人的消耗。",
            xiaoXiang: "“已事遄往”，尚合志也。",
            xiaoXiangVernacular: "“紧急奔赴援助”，反映了上下各方志向的契合与统一步调。"
        },
        {
            original: "利贞，征凶。弗损益之。",
            vernacular: "利于持守正道。若急于盲目扩张会有凶险。不求减损自身利益，反而能通过内部优化获得增益。",
            xiaoXiang: "九二“利贞”，中以为志也。",
            xiaoXiangVernacular: "九二爻之所以吉祥，是因为他始终以中正之道作为行事的核心志向。"
        },
        {
            original: "三人行则损一人，一人行则得其友。",
            vernacular: "三人同行往往会因各种牵制而减损效率；若单独前行，反而更容易找到志趣相投的知心好友。象征在精简中寻找真挚的合作。",
            xiaoXiang: "“一人行”，三则疑也。",
            xiaoXiangVernacular: "“一人独行比较纯粹”，人数过多（三人）往往会产生相互猜忌和不必要的纷扰。"
        },
        {
            original: "损其疾，使遄有喜，无咎。",
            vernacular: "努力革除自身的弊端和不足。只要行动迅速，就能迎来喜悦的结果，不会有过失。",
            xiaoXiang: "“损其疾”，亦可喜也。",
            xiaoXiangVernacular: "“改掉自身的缺点”，这本身就是一件非常值得庆幸和令人宽慰的好事。"
        },
        {
            original: "或益之，十朋之龟弗克违，元吉。",
            vernacular: "获得了来自外界的巨大助益。像通灵的大宝龟这样的神圣之物也不会违背这种好运。大吉大利。",
            xiaoXiang: "六五“元吉”，自上佑也。",
            xiaoXiangVernacular: "六五爻的吉祥，源于他在高位之上依然能感通天地，得到了各方乃至大局趋势的护佑。"
        },
        {
            original: "弗损益之，无咎，贞吉，利有攸往。得臣无家。",
            vernacular: "无需刻意减损整体利益，反而能实现全局共赢。由于建立了极高的威望，众人归心，已不再局限于个人小家的利益。",
            xiaoXiang: "“弗损益之”，大得志也。",
            xiaoXiangVernacular: "“全方位获益”，意味着个人的远大抱负已经得到了全面且彻底的施展空间。"
        }
    ],
    42: [ // 益卦
        {
            original: "利用为大作，元吉，无咎。",
            vernacular: "此时利于开启大事业或进行重大工程。大吉大利，没有过失。",
            xiaoXiang: "“元吉无咎”，下不厚事也。",
            xiaoXiangVernacular: "“大吉无过”，体现了在民心归向、基础深厚的前提下，重大事务得以圆满完成。"
        },
        {
            original: "或益之，十朋之龟弗克违，永贞吉。王用享于帝，吉。",
            vernacular: "承蒙外界乃至上天的巨大增益。即便是通灵宝龟也不会违背这种运势。长久守正可获吉祥。举行感恩祭祀，吉祥。",
            xiaoXiang: "“或益之”，自外来也。",
            xiaoXiangVernacular: "“获得增益”，说明这种力量是从广阔的外部环境、在某种自然大趋势之下汇聚而来的。"
        },
        {
            original: "益之用凶事，无咎。有孚中行，告公用圭。",
            vernacular: "通过处理艰巨危难的事务来磨练意志并获得增益。心怀诚信且行事中庸，向上级禀报定能获得高度认可。没有过失。",
            xiaoXiang: "“益用凶事”，固有之也。",
            xiaoXiangVernacular: "“在危难中求得受益”，进一步展现了原本就具备的那种坚韧不拔的优秀素质。"
        },
        {
            original: "中行，告公从。利用为依迁国。",
            vernacular: "行事中庸公正，能获得公侯的采纳。利于以此为依托进行重大的搬迁、转轨或由于结构性改革。",
            xiaoXiang: "“告公从”，以益志也。",
            xiaoXiangVernacular: "“公侯听从”，是因为你的主张真正增益并强化了社会的整体利益与核心志向。"
        },
        {
            original: "有孚惠心，勿问元吉。有孚惠我德。",
            vernacular: "满怀诚信并具备仁爱之心，无需占卜也是大吉大利的。这种诚信美德能惠及大众，使天下人也承蒙这种感化。",
            xiaoXiang: "“有孚惠心”，勿问之也；“惠我德”，大得志也。",
            xiaoXiangVernacular: "“诚信利他”，结果必然吉祥无疑；“美德惠泽大众”，个人志向在此刻达到了最高的人生境界。"
        },
        {
            original: "莫益之，或击之，立心勿恒，凶。",
            vernacular: "如果不思进取，由于反复无信、立心不恒，周边就没人会再来帮助你，甚至会招致攻击。结局凶险。",
            xiaoXiang: "“莫益之”，偏辞也；“或击之”，自外来也。",
            xiaoXiangVernacular: "“得不到外界的任何增益”，是因为德行已然偏离；“招致攻击”，说明由于自身过失导致外部压力随之而来。"
        }
    ],
    43: [ // 夬卦
        {
            original: "壮于前趾，往不胜为吝。",
            vernacular: "仅凭表面的气势或脚趾尖的力量（起步不够稳重）就盲目前进，最终因无法取胜而令人感到羞吝。",
            xiaoXiang: "“不胜而往”，咎也。",
            xiaoXiangVernacular: "“胜负未分便盲目进击”，这种鲁莽的行为最终必然导致过错与挫败。"
        },
        {
            original: "惕号，莫夜有戎，勿恤。",
            vernacular: "时刻保持高度警觉，即便在深夜突发警报遭遇袭击，也不必过分惊慌忧虑，因早已做好了充分准备。",
            xiaoXiang: "“有戎勿恤”，得中道也。",
            xiaoXiangVernacular: "“遭遇戎兵也无需忧虑”，体现了九二爻在处理紧急危机时既有备无患又沉着冷静的中庸智慧。"
        },
        {
            original: "壮于頄，有凶。君子夬夬独行，遇雨若濡，有愠无咎。",
            vernacular: "仅在颧骨（脸部）显示出愤怒与强悍，结局必然会有凶险。君子应当果敢独立前行，哪怕遭遇暴雨被淋透、被他人误解埋怨，最终也不会有过失。",
            xiaoXiang: "“君子夬夬”，终无咎也。",
            xiaoXiangVernacular: "“君子的这种极致果断”，虽然过程艰辛，但其秉持的正义逻辑最终会被时间证明是正确的、无过的。"
        },
        {
            original: "臀无肤，其行次且。牵羊悔亡，闻言不信。",
            vernacular: "内心焦虑惶恐得仿佛臀部被磨烂（坐立难安），行动也犹豫滞涩。若能像牧羊人随众那样顺势而行，悔恨就会消失。但此时即便听到真诚的建议也很难产生信任感。",
            xiaoXiang: "“其行次且”，位不当也；“闻言不信”，聪不明也。",
            xiaoXiangVernacular: "“行动慢而不前”，是因为其目前所处并非最佳发力位置；“听不进良言”，表现了其在困局中判断力受到干扰。"
        },
        {
            original: "苋陆夬夬，中行无咎。",
            vernacular: "如果能像铲除苋菜这类柔弱的杂质一样坚决（夬夬），且行事秉持公平的中庸之道，就不会有祸殃。",
            xiaoXiang: "“中行无咎”，中未光也。",
            xiaoXiangVernacular: "“只要守中即无过”，但由于此时还处于博弈的关键点，光明大放异彩的时机尚未完全成熟。"
        },
        {
            original: "无号，终有凶。",
            vernacular: "丧失了警觉，也不再发出提醒与号令，最终必然会有凶险的结果。",
            xiaoXiang: "“无号之凶”，终不可长也。",
            xiaoXiangVernacular: "“丧失呼号警觉之凶”，说明这种危险状态下若还不醒悟，是不可能维持长久生存的。"
        }
    ],
    44: [ // 姤卦
        {
            original: "系于金柅，贞吉。有攸往，见凶，羸豕孚蹢躑。",
            vernacular: "守持正道，将其牢牢系在制动器（金柅）上。此时盲目有所作为会预见凶险，就像瘦弱的野猪被束缚后依然焦躁不安、疯狂跳动，须严加防范。",
            xiaoXiang: "“系于金柅”，柔道牵也。",
            xiaoXiangVernacular: "“将其系在强力的金属刹车片上”，是为了通过这种极致手段阻止那份阴柔的负面力量逐步渗透。"
        },
        {
            original: "包有鱼，无咎，不利宾。",
            vernacular: "意外获得了原本不易多得的收益（如包中得鱼）。暂无灾祸，但这些意外的收益不宜与外界或不相干的人分享，防止节外生枝。",
            xiaoXiang: "“包有鱼”，义不及宾也。",
            xiaoXiangVernacular: "“包里有鱼”，意味着这是一份属于内部的意外成果，在道义上本身就不适宜推而广之。"
        },
        {
            original: "臀无肤，其行次且，厉，无大咎。",
            vernacular: "内心焦急不安导致坐立难宁，由于这种反复的徘徊犹豫，虽然暂时处境艰难，但并未真正触及原则，所以没有大的凶害。",
            xiaoXiang: "“其行次且”，行未牵也。",
            xiaoXiangVernacular: "“想走却又犹豫踟蹰”，说明其目前虽然有了退身的预兆，但还没能真正付诸实际行动。"
        },
        {
            original: "包无鱼，起凶。",
            vernacular: "意外的支撑或收益消失（包中空无一人）。一旦此时采取盲目的行动，必然会有凶险发生。",
            xiaoXiang: "“无鱼”之“凶”，远民也。",
            xiaoXiangVernacular: "“厨房空空之凶”，是由于已经严重脱离了基层、脱离了人民的支持。"
        },
        {
            original: "以杞包瓜，含章，有陨自天。",
            vernacular: "就像用细密的杷柳叶包裹甜瓜一样（处理得极其含蓄妥帖）。即使内含才华也不轻易流露。如此守持，最终必将获得意想不到的天降福祉。",
            xiaoXiang: "九五“含章”，中正也；“有陨自天”，志不舍命也。",
            xiaoXiangVernacular: "九五爻之所以大成，是因为其处事极致的中庸且周密；“天降好运”，源于其志向与天命趋势达到了高度契合。"
        },
        {
            original: "姤其角，吝，无咎。",
            vernacular: "此时相遇的情况发生在过于极端、高亢的位置。虽然可能因不合时宜而感到羞吝，但并没有实质性的灾祸。",
            xiaoXiang: "“姤其角”，上穷吝也。",
            xiaoXiangVernacular: "“在牛角极端纠结”，表明已经处于事物发展的末梢位置，虽然有些尴尬，但也已无伤大局。"
        }
    ],
    45: [ // 萃卦
        {
            original: "有孚不终，乃乱乃萃，若号，一握为笑，勿恤，往无咎。",
            vernacular: "诚信无法始终贯穿，导致聚合的过程显得混乱无序。即便大家惊慌呼号，只要最终握手言和、转忧为笑。此时不用忧虑，勇敢前进是没有过错的。",
            xiaoXiang: "“乃乱乃萃”，其志乱也。",
            xiaoXiangVernacular: "“由于聚合过程发生的混乱”，归根结底是因为参与各方的意志尚处于不统一、散漫的状态。"
        },
        {
            original: "引吉，无咎，孚乃利用禴。",
            vernacular: "受到正确的引导而汇聚，结局吉祥。没有灾祸。只要心中怀着至诚的诚信，即便举行最简约的祭祀也能感通神明。",
            xiaoXiang: "“引吉无咎”，中未变也。",
            xiaoXiangVernacular: "“通过正向引导获得吉祥”，说明该位置的人核心意志并未因外部的复杂环境而动揺。"
        },
        {
            original: "萃如，嗟如，无攸利，往无咎，小吝。",
            vernacular: "聚合之初感到极其无奈与悲伤（叹息连连）。虽然目前来看没有重大利益，但前进还是没有灾祸的。仅仅会有一些小的羞吝遗憾。",
            xiaoXiang: "“往无咎”，上巽也。",
            xiaoXiangVernacular: "“前进并无大碍”，说明上方高层表现得相对谦逊与和气，愿意给予大家接纳的机会。"
        },
        {
            original: "大吉，无咎。",
            vernacular: "获得极其宏大的吉祥。没有过失。在这种大的聚合背景下取得了决定性的成功。",
            xiaoXiang: "“大吉无咎”，位当也。",
            xiaoXiangVernacular: "“极度的吉祥且无过失”，是因为其非常好地掌控了全局，出色地履行了当下的职守。"
        },
        {
            original: "萃有位，无咎。匪孚，元永贞，悔亡。",
            vernacular: "身居聚合的高位，暂无过失。即便有人不太信任或认可你的统帅，只要能坚持长久守持极致的诚信与正道，所有的偏见都会冰释解，悔恨也会消亡。",
            xiaoXiang: "“萃有位”，志未光也。",
            xiaoXiangVernacular: "“虽然拥有了某种核心位置”，但目前的政治理想和这种诚信的影响力还没能达到那种大放异彩、众望所归的境界。"
        },
        {
            original: "赍咨涕洟，无咎。",
            vernacular: "因局面失控或未受重用而感到极其悲哀、涕泪横流。虽处境艰难让人唏嘘，但并没有违背正义的准则，所以没有灾祸。",
            xiaoXiang: "“赍咨涕洟”，未安上也。",
            xiaoXiangVernacular: "“处于极端地惆怅与忧虑中”，说明其内心始终处于一种无法与高层达成真正和谐共振的纠结边缘。"
        }
    ],
    46: [ // 升卦
        {
            original: "允升，大吉。",
            vernacular: "获得认可并顺势上升，大吉大利。",
            xiaoXiang: "“允升，大吉”，上合志也。",
            xiaoXiangVernacular: "“顺势上升的吉祥”，说明个人的才华与高层的志向达到了高度统一。"
        },
        {
            original: "孚乃利用禴，无咎。",
            vernacular: "只要心中怀着赤诚的诚信，即使举行简朴的祭祀仪式，也能获得神明佑助。没有灾祸。",
            xiaoXiang: "九二之“孚”，有喜也。",
            xiaoXiangVernacular: "九二爻所展现的诚信，必将为人际关系带来喜悦与转机。"
        },
        {
            original: "升虚邑。",
            vernacular: "像进入一个空旷无人的城镇一样，晋升过程极其顺利，毫无阻碍。",
            xiaoXiang: "“升虚邑”，无所疑也。",
            xiaoXiangVernacular: "“步入空城”，意味着可以放手施展，无需有任何猜疑与顾虑。"
        },
        {
            original: "王用亨于岐山，吉，无咎。",
            vernacular: "像周王在岐山祭祀上天一样。守持这种诚敬之心自然吉祥，没有灾祸。",
            xiaoXiang: "“王用亨于岐山”，顺事也。",
            xiaoXiangVernacular: "“在岐山举事”，体现了其行事顺应大局天命的自然法则。"
        },
        {
            original: "贞吉，升阶。",
            vernacular: "守持正道吉祥。此刻就像踏着台阶稳步上升。象征晋升之路通达无碍。",
            xiaoXiang: "“贞吉升阶”，大得志也。",
            xiaoXiangVernacular: "“拾级而上”，说明其平生志向已然得到了全面且彻底的伸张机会。"
        },
        {
            original: "冥升，利于不息之贞。",
            vernacular: "在昏暗的高度仍盲目执着于上升。此时利于保持不屈不挠、自强不息的坚贞品质，化这种盲目为正向驱动力。",
            xiaoXiang: "“冥升”在上，消不富也。",
            xiaoXiangVernacular: "“在昏暗处盲目向上”，若不懂得止损，最终会让原本丰厚的资源在过度消耗中逐渐匮乏。"
        }
    ],
    47: [ // 困卦
        {
            original: "臀困于株木，入于幽谷，三岁不觌。",
            vernacular: "陷入困境，仿佛被拴在枯木桩上动弹不得；又如坠入深幽的山谷，连续三年都见不到光明与出路。",
            xiaoXiang: "“入于幽谷”，幽不明也。",
            xiaoXiangVernacular: "“坠入幽谷”，身处暗无天日之境，说明此时尚未找到摆脱困顿的明亮契机。"
        },
        {
            original: "困于酒食，朱绂方来，利用亨祀。征凶，无咎。",
            vernacular: "虽被丰厚的酒食或安逸现状所困（或表面安逸内心困顿），但由于地位高贵的宾客（朱绂）即将带来新的机遇。此时利于诚心祈祷，不宜盲目出征，守持现状则没有过失。",
            xiaoXiang: "“困于酒食”，中有庆也。",
            xiaoXiangVernacular: "“困于安逸”，预示着其核心能量依然充沛，内部尚有值得庆贺的潜力与德行。"
        },
        {
            original: "困于石，据于蒺藜，入于其宫，不见其妻，凶。",
            vernacular: "前有乱石阻挡，后有蒺藜刺脚；回到家中又是一片凄凉，见不到亲人的身影。结局极其凶险。",
            xiaoXiang: "“据于蒺藜”，乘刚也；“入于其宫，不见其妻”，不祥也。",
            xiaoXiangVernacular: "“被棘刺包围”，是因为其强行对抗无法逾越的阻力；“家中空无一人”，则预示了这种现状极其不吉且备受孤立。"
        },
        {
            original: "来徐徐，困于金车，吝，有终。",
            vernacular: "由于受到权势或财力（金车）的各种各样的牵绊，救援虽然来得缓慢且有些尴尬遗憾，但最终还是能够有一个结局。",
            xiaoXiang: "“来徐徐”，志在下也；虽不当位，有与也。",
            xiaoXiangVernacular: "“动作慢腾腾”，是因为其志向倾向于底层且左右不得不考虑到各方平衡；所幸在困顿中依然有志同道合者提供支援。"
        },
        {
            original: "劓刖，困于赤绂，乃徐有说，利用祭祀。",
            vernacular: "遭受了如割鼻剁足般的重创与摧残，被显赫的虚名（赤绂）所困阻。经过一段时间的舒解慢慢会有解脱。此时利于沟通诚意，建立新的转机。",
            xiaoXiang: "“劓刖”，志未得也；“乃徐有说”，以中直也；“利用祭祀”，受福也。",
            xiaoXiangVernacular: "“遭受摧残”，说明其平生志向目前遭受极大压制；“最终获释”，得益于其始终秉持的中正气度；“祭祀获福”，则是通过诚意改善了外部大环境的反馈。"
        },
        {
            original: "困于葛藟，于臲卼，曰动悔有悔，征吉。",
            vernacular: "被乱草乱藤纠缠，处境高峻且极其不稳（臲卼）。内心自省：动辄则有悔恨，不如勇于做出改变，结局反而是吉祥的。",
            xiaoXiang: "“困于葛藟”，未当也；“动悔有悔”，吉行也。",
            xiaoXiangVernacular: "“被乱藤纠缠”，说明目前身处的位置完全不合适；“动悔自省”，如果能顺势而变做出决断，那将是通往吉祥的关键启动步点。"
        }
    ],
    48: [ // 井卦
        {
            original: "井泥不食，旧井无禽。",
            vernacular: "井底堆积了厚厚的淤泥，泉水完全已经浑浊无法饮用。这口废弃的旧井甚至连飞禽走兽也不再光顾。象征彻底丧失了社会价值。",
            xiaoXiang: "“井泥不食”，下也；“旧井无禽”，时舍也。",
            xiaoXiangVernacular: "“井泥不可食”，说明其目前的地位太低下、能力尚未开发；“无鸟问津”，那是他已经被这个变化的时代所抛弃了。"
        },
        {
            original: "井谷射鲋，瓮敝漏。",
            vernacular: "在井底浅水中射抓一些小泥鳅，不仅收获极其微小而且原本提水的瓦瓮也破漏残缺。象征志向短浅导致资源的巨大的浪费。",
            xiaoXiang: "“井谷射鲋”，无与也。",
            xiaoXiangVernacular: "“只剩泥鳅可折腾”，是因为他目前根本得不到任何志同道合者的高位支持。"
        },
        {
            original: "井渫不食，为我心恻。可用汲，王明，并受其福。",
            vernacular: "井水已经淘洗得极其清冽但却没人来饮用，这让真心想为社会做贡献的人感到无比痛惜。此时完全是可以汲取利用的，若能遇到明君大政，必将普降甘露、泽被万民。",
            xiaoXiang: "“井渫不食”，行恻也；求“王明”，受福也。",
            xiaoXiangVernacular: "“好水没人喝”实在堪忧；“渴求明上”，是为了让这种优秀的才华与能量能真正实现其应有的社会福报。"
        },
        {
            original: "井甃，无咎。",
            vernacular: "正在用砖石修整加固井壁。虽暂时无法供水，但这是在进行必要的基础建设，没有灾祸。",
            xiaoXiang: "“井甃无咎”，修井也。",
            xiaoXiangVernacular: "“修整井壁”，反映了目前正处于自我完善与机制修复的关键阶段，必有后效。"
        },
        {
            original: "井冽，寒泉食。",
            vernacular: "井水清凉甘冽，清澈见底，沁人心脾，正是大家争相汲饮的好时节。象征核心资源的供应达到了极致的完美状态。",
            xiaoXiang: "“寒泉之食”，中正也。",
            xiaoXiangVernacular: "“大家共同饮用这清泉”，是因为这口井（或这个人才）真正达到了中庸、公平、普惠的最高境界。"
        },
        {
            original: "井收勿幕，有孚元吉。",
            vernacular: "井已经修成，不用盖子遮挡（大方坦诚地供人取用）。保持长久的极致诚信，大吉大利。",
            xiaoXiang: "“元吉”在上，大成也。",
            xiaoXiangVernacular: "既然高居上位又能展现出这种极度的豁达与诚信，这意味着事业已经达到了圆满的大成顶峰。"
        }
    ],
    49: [ // 革卦
        {
            original: "巩用黄牛之革。",
            vernacular: "像用结实的黄牛皮绳将自己牢牢困住一样。当下时机尚未成熟，千万不可盲目采取变革行动。",
            xiaoXiang: "“巩用黄牛”，不可以有为也。",
            xiaoXiangVernacular: "“用牛皮加固自身”，说明其目前还没有具备任何出去进行重大变革的客观条件。"
        },
        {
            original: "巳日乃革之，征吉，无咎。",
            vernacular: "到了特殊的时机（巳日）才正式开启变革。此时勇往直前大义凛然，结局吉祥，没有过失。",
            xiaoXiang: "“巳日革之”，行有嘉也。",
            xiaoXiangVernacular: "“找准时机发起变革”，是因为你的行动逻辑顺应了民心的嘉许和时代的大趋势。"
        },
        {
            original: "征凶，贞厉。革言三就，有孚。",
            vernacular: "轻率冒进发动变革会有凶险，守旧死守也有危险。关于改革的主张已经反复讨论并达成了高度共识。此时已具备了坚实的诚信基础。",
            xiaoXiang: "“革言三就”，又何之矣！",
            xiaoXiangVernacular: "“改革共识已经反复达成”，既然大局已定，还犹豫着徘徊去哪儿呢？果断行事吧。"
        },
        {
            original: "悔亡，有孚改命，吉。",
            vernacular: "悔恨消失。凭借建立起的极致诚信，果敢地变革旧有秩序，大吉大利。",
            xiaoXiang: "“改命之吉”，信志也。",
            xiaoXiangVernacular: "“改天换地的吉祥”，那是源于你坚定的信念与核心志向真正得到了天人共鸣。"
        },
        {
            original: "大人虎变，未占有孚。",
            vernacular: "伟大的人物像老虎焕发虎纹一样实现了华丽、威严的转型。即使不占卜，也能得到天下人的绝对诚信认可。",
            xiaoXiang: "“大人虎变”，其文炳也。",
            xiaoXiangVernacular: "“大人的虎变转型”，表现了这种核心变革已经达到了极其光彩夺目且威名远播的境界。 "
        },
        {
            original: "君子豹变，小人革面，征凶，居贞吉。",
            vernacular: "君子通过变革像豹子变色一样实现了深层次的自我超越；平庸的小人也能洗心革面顺应趋势。此时不宜再大肆扩张，守持现状可获吉祥。",
            xiaoXiang: "“君子豹变”，其文蔚也；“小人革面”，顺以从君也。",
            xiaoXiangVernacular: "“君子的豹变”，那是自身修养已经达到如虎添翼般的蔚然大观；“小人的顺应”，仅仅是对于时代新秩序的跟风服从。 "
        }
    ],
    50: [ // 鼎卦
        {
            original: "鼎颠趾，利出否。得妾以其子，无咎。",
            vernacular: "鼎足翻转了过来（底座朝上）。但这反而有利于清除鼎中陈旧的灰渣。就像为了家族传承而娶妾，并没有过失。象征通过极端手段推陈出新。",
            xiaoXiang: "“鼎颠趾”，未悖也；“利出否”，以从贵也。",
            xiaoXiangVernacular: "“鼎足翻转”，这并没有违背规律的大方向；“清除残渣”，是为了进一步追随高贵的新格局。"
        },
        {
            original: "鼎有实，我仇有疾，不我能即，吉。",
            vernacular: "鼎中已装满了丰富的食物。我的对手（竞争者）虽然嫉妒焦躁但却能力不足无法靠近我。大吉。",
            xiaoXiang: "“鼎有实”，慎所之也；“我仇有疾”，终无尤也。",
            xiaoXiangVernacular: "“鼎中有实货”，说明事业根基坚实；“敌人无法得逞”，意味着这种结局最终也不会有任何的灾吝。"
        },
        {
            original: "鼎耳革，其行塞。雉膏不食，方雨亏悔，终吉。",
            vernacular: "鼎耳坏了而无法如意提携。虽然守着美味的如山肉糜（雉膏）却无人问津。等到时机转好、如甘雨落下时，悔恨终会慢慢消失，结局吉祥。",
            xiaoXiang: "“鼎耳革”，失其义也。",
            xiaoXiangVernacular: "“鼎耳损坏”，说明暂时丧失了核心价值与社会对接的逻辑桥梁。 "
        },
        {
            original: "鼎折足，覆公餗，其形渥，凶。",
            vernacular: "鼎足折断了，不仅打翻了高贵的美食（公餗），还溅得自己满身污秽，尴尬狼藉。其结局必定凶险。象征能力平庸导致重责难负。",
            xiaoXiang: "“覆公餗”，信如何也。",
            xiaoXiangVernacular: "“打翻了最高端的晚餐”，发生这种极度失责的事，又怎么可能再获得任何诚信认可呢？"
        },
        {
            original: "鼎黄耳金铉，利贞。",
            vernacular: "鼎配上了尊贵的黄色鼎耳和金属提杠（金铉）。守持这种中正尊贵的正道利于事业的长久发展。",
            xiaoXiang: "“鼎黄耳”，中以为实也。",
            xiaoXiangVernacular: "“配上尊贵的鼎耳”，是因为他内心始终以中庸作为最踏实、最极致的核心内容。 "
        },
        {
            original: "鼎玉铉，大吉，无不利。",
            vernacular: "鼎配上了极度温润如玉的高级提杠（玉铉）。大吉大利，无往而不利。",
            xiaoXiang: "“玉铉”在上，刚柔节也。",
            xiaoXiangVernacular: "处于巅峰位置依然能让刚强的意志配合极致温润的柔和这种调节力，这才是周易周易最高级的平衡艺术。"
        }
    ],
    51: [ // 震卦
        {
            original: "震来虩虩，后笑言哑哑，吉。",
            vernacular: "惊天动地的雷鸣初至时让人惊恐万分。但守持正道应对得当，随后便能轻松地谈笑风生。结局吉祥。 ",
            xiaoXiang: "“震来虩虩”，恐致福也；“笑言哑哑”，后有则也。",
            xiaoXiangVernacular: "“惊雷而恐惧”，其实是内心对规则产生了极致的敬畏从而带来了后福；“随后欢笑”，说明他心中早有定见与处事法则了。"
        },
        {
            original: "震来厉，亿丧贝，跻于九陵，勿逐，七日得。",
            vernacular: "雷震来势极猛，局势凶险。哪怕暂时丢失了巨大的财富（丧贝）也不必盲目追寻，只要退守到高地暂避锋芒。到了一个回归周期（七日），丢失的东西会自然失而复得。 ",
            xiaoXiang: "“震来厉”，乘刚也。",
            xiaoXiangVernacular: "“处于雷震的剧烈冲击核心之中”，是因为你目前的格局正在承受着一种超出负荷的、来自高压的冲击。 "
        },
        {
            original: "震苏苏，震行无眚。",
            vernacular: "巨大的雷鸣震慑得人精神有些恍惚不决（苏苏）。如果能够趁着这股气势勇敢做出改变，就不会有大的灾殃过失。",
            xiaoXiang: "“震苏苏”，位不当也。",
            xiaoXiangVernacular: "“在震动中徘徊”，是因为其所处位置德不配位、实不副名，心里一直没底气。"
        },
        {
            original: "震遂泥。",
            vernacular: "巨大的变革阻力让整个局势陷入了像污泥中那样难以自拔。行动滞塞不前。 ",
            xiaoXiang: "“震遂泥”，未光也。",
            xiaoXiangVernacular: "“雷震陷于泥沼”，说明你的各种想法和这种雷霆手段还并没有真正转化为真正的结果光辉。"
        },
        {
            original: "震往来厉，亿无丧，有事。",
            vernacular: "震动之势一波接一波，局势极其危殆凶险。只要心中无私秉持中道，就没有大的实质损失，依旧能妥善主持大局。",
            xiaoXiang: "“震往来厉”，危行也；其事在中，大无丧也。",
            xiaoXiangVernacular: "“在剧烈动荡中艰难维持”，这虽然有些惊险，但因为你掌握了自然规律的核心，所以大局是绝对不会彻底崩解的。"
        },
        {
            original: "震索索，视矍矍，征凶. 震不于其躬，于其邻，无咎. 婚媾有言。",
            vernacular: "雷声渐远但余威犹存。让人惊魂未定、目光游移（索索矍矍）。此时盲目前进会有凶险。如果这种祸患还没有直接降临在自己身上而是显现在周边邻居那里（杀鸡儆猴），如果能因此警觉便能没有灾祸。虽有人议论婚姻但并无大碍。",
            xiaoXiang: "“震索索”，中未得也；虽凶无咎，畏邻戒也。",
            xiaoXiangVernacular: "“精神紧张到极点”，源于他内心已经彻底失去了作为。之所以即便有凶也没有灾，是因为他在外部的那个极致警示中已经找到了一些自我救赎的边界。"
        }
    ],
    52: [ // 艮卦
        {
            original: "艮其趾，无咎，利永贞。",
            vernacular: "止步于脚趾尖，意味着在行动之初就因警觉而停下脚步，没有灾祸。利于长久地守持正道。",
            xiaoXiang: "“艮其趾”，未失正也。",
            xiaoXiangVernacular: "“止于足下”，说明其在变革初始阶段并没有偏离正义的准则。"
        },
        {
            original: "艮其腓，不拯其随，其心不快。",
            vernacular: "止于小腿腹部，因下肢被迫停滞而无法跟随心意自如行动。由于违背了身体自然的运动逻辑，内心感到非常闷闷不乐。",
            xiaoXiang: "“不拯其随”，未退听也。",
            xiaoXiangVernacular: "“无法挽救这种盲目追随”，是因为他根本听不进那些让其静止自守的理智建议。"
        },
        {
            original: "艮其限，列其夤，厉薰心。",
            vernacular: "止于腰际（限），这种生硬的阻断导致脊背肌肉（夤）紧绷扭曲，处境极度危险，内心焦虑得仿佛在被烈火熏灼。",
            xiaoXiang: "“艮其限”，危薰心也。",
            xiaoXiangVernacular: "“止步在半途腰部”，这种极其危险的中断让他的内心深感焦虑。"
        },
        {
            original: "艮其身，无咎。",
            vernacular: "能止于全身的协调与稳重。意味着修身卓有成效，不再妄动，没有过失。",
            xiaoXiang: "“艮其身”，止诸躬也。",
            xiaoXiangVernacular: "“止步于自我修养”，表现了其能够从自身做起，真正掌握了克己复礼的智慧。"
        },
        {
            original: "艮其辅，言有序，悔亡。",
            vernacular: "能止于言辞沟通（艮其辅）。言语变得井然有序、慎重得当，悔恨随之消失。",
            xiaoXiang: "“艮其辅”，以中正也。",
            xiaoXiangVernacular: "“言语谨慎”，是因为他的思维方式真正做到了中庸和公正。"
        },
        {
            original: "敦艮，吉。",
            vernacular: "以敦厚、纯正的态度实现最终的静止与守持。大吉大利。",
            xiaoXiang: "“敦艮”之吉，以厚终也。",
            xiaoXiangVernacular: "“敦厚守静之大吉”，意味着其人生修为终于在至善的高地获得了功德圆满的结局。"
        }
    ],
    53: [ // 渐卦
        {
            original: "鸿渐于干，小子厉，有言，无咎。",
            vernacular: "鸿雁逐渐飞向水边（起步阶段）。年轻人经验尚浅而感到有些惊险，虽然难免招致一些议论和批评，但并没有实质的过失。",
            xiaoXiang: "“小子之厉”，义无咎也。",
            xiaoXiangVernacular: "“年轻人的那份惊险”，在成长的自然逻辑中本身就是无过的、合理的。"
        },
        {
            original: "鸿渐于磐，饮食衎衎，吉。",
            vernacular: "鸿雁飞落到稳固的磐石上休息。生活安定且心情和悦，吉祥。",
            xiaoXiang: "“饮食衎衎”，不素饱也。",
            xiaoXiangVernacular: "“和乐地享用美食”，说明其目前的稳定获取是建立在过去真实努力的基础上，并非平白无故的获得。"
        },
        {
            original: "鸿渐于陆，夫征不复，妇孕不育，凶；利御寇。",
            vernacular: "鸿雁飞向了错误的陆地高处。象征脱离了自然的客观规律：丈夫远征不归，妻子甚至无法保育胎儿。结局凶险。此时唯有建立防卫、抵御外侮才是有利的。",
            xiaoXiang: "“夫征不复”，离群丑也；“妇孕不育”，失其道也；“利用御寇”，顺相保也。",
            xiaoXiangVernacular: "“远征不归”，是因为其背离了核心群体；“无法育后”，是因为彻底背离了生长的逻辑；“建立防卫”，则是为了在错误的位置保持起码的生存协作。 "
        },
        {
            original: "鸿渐于木，或得其桷，无咎。",
            vernacular: "鸿雁逐渐停在树木上。如果能找到一根平稳横斜的枝干（桷）作为栖身之所，就不会有过失。",
            xiaoXiang: "“或得其桷”，顺以巽也。",
            xiaoXiangVernacular: "“偶然找到平直的枝干”，体现了在复杂的环境中运用顺应变通的才智成功地实现了软着陆。"
        },
        {
            original: "鸿渐于陵，妇三岁不孕。终莫之胜，吉。",
            vernacular: "鸿雁坚持直到飞向了高高的山陵。虽然暂时的各种隔阂导致有些成果延迟（如妇人三年不孕），但最终没有人能战胜这种正义的持续前进，结局吉祥。",
            xiaoXiang: "“终莫之胜”，吉；得所愿也。",
            xiaoXiangVernacular: "“最终无人能敌”，是因为其长久以来的循序渐进终于达到了最终的理想彼岸。 "
        },
        {
            original: "鸿渐于陆，其羽可用为仪，吉。",
            vernacular: "鸿雁飞向了神圣的天际陆地。其优美且整齐的羽毛可以作为大典仪仗的装饰。大吉大利。象征其人格魅力和成果已经达到了可以典范文明的高度。",
            xiaoXiang: "“其羽可用为仪”，吉；不可乱也。",
            xiaoXiangVernacular: "“羽毛可做仪仗”，是因为其内在的逻辑和这种循序渐进积累的威望已经达到了一种极其稳定、有序且无法动揺的巅峰。"
        }
    ],
    54: [ // 归妹卦
        {
            original: "归妹以娣，跛能履，征吉。",
            vernacular: "作为陪嫁的侍妾随嫁（处于辅助地位）。像蹩脚的人勉强可以行走一样，只要能按部就班勇敢前进，也是吉祥的。",
            xiaoXiang: "“归妹以娣”，以恒也；“跛能履”，吉相承也。",
            xiaoXiangVernacular: "“随嫁而行”，是为了维持一种事业的长久持续性；“蹩脚前行”，说明虽然起点不高，但顺应了这种发展的必然规律，依然能获得阶段性的成功。 "
        },
        {
            original: "眇能视，利幽人之贞。",
            vernacular: "虽然眼睛患疾（眇）但依然能隐约视物。此时利于像隐居者那样守持一份宁静的、深藏不露的坚贞品质。",
            xiaoXiang: "“利幽人之贞”，未变常也。",
            xiaoXiangVernacular: "“利于隐士的守正”，说明其在纷繁复杂的外部干扰下并没有改变初衷和作为人的核心准则。"
        },
        {
            original: "归妹以须，反归以娣。",
            vernacular: "想作为正妻出嫁却被沦为侍女（须）。最终还是作为侍妾回来了。象征志向宏大但才华并不匹配目前的位置。 ",
            xiaoXiang: "“归妹以须”，未当也。",
            xiaoXiangVernacular: "“想当正室却被淘汰”，说明该核心能力与该位置的需求完全不相称。"
        },
        {
            original: "归妹愆期，迟归有时。",
            vernacular: "因找不到合适的归宿而延误了婚期。虽然有些缓慢迟来，但最终还是会在一个更合适的时机达成圆满。",
            xiaoXiang: "“愆期”之“志”，有待而行也。",
            xiaoXiangVernacular: "“耽误工期的意志”，其实是在这种主动的等待中寻找一种更有价值的爆发点。"
        },
        {
            original: "帝乙归妹，其君之袂，不如其娣之袂良。月几望，吉。",
            vernacular: "地位尊贵的公主要出嫁，其婚服的华丽程度甚至不如她的随嫁侍妾。但其人格正如将圆的明月大吉大利（重名不重利）。",
            xiaoXiang: "“帝乙归妹”，不如其娣之袂良也；其位在中，以贵行也。",
            xiaoXiangVernacular: "“帝乙嫁女”，服饰虽然极其简约自然；但因为其核心位置正、操行极其高尚，这种内涵才是真正的贵气。 "
        },
        {
            original: "女承筐无实，士刲羊无血，无攸利。",
            vernacular: "女子拿着空空的祭篮，男子宰羊却不见鲜血（名实皆亡）。在这种极其尴尬且极度虚无的祭祀构架中，没有任何实质利益面。",
            xiaoXiang: "上六“无实”，承虚筐也。",
            xiaoXiangVernacular: "上六爻之所以“无利”，是因为事情已经到了末梢且完全沦为了一种毫无意义的尴尬表演。 "
        }
    ],
    55: [ // 丰卦
        {
            original: "遇其配主，虽旬无咎，往有尚。",
            vernacular: "遇到了志趣相投的关键合作伙伴（配主）。虽然大家相处的时间极短且有些急躁，但并没有过错，勇敢行动会受到高度赞赏。",
            xiaoXiang: "“虽旬无咎”，过旬灾也。",
            xiaoXiangVernacular: "“短期的急躁并无过错”，是因为目前正处于需要快速决策的上升期；如果过了这种时机还在这里磨蹭那就有灾了。 "
        },
        {
            original: "丰其蔀，日中见斗，往得疑疾，有孚发若，吉。",
            vernacular: "光芒被厚厚的遮蔽物（蔀）完全挡住，在大白天的正午甚至竟然能看到星斗（极度的昏暗阴霾）。盲目行动必招猜忌。唯有用极其极致的诚信来感化这种极度的误解，才能重获吉祥。 ",
            xiaoXiang: "“有孚发若”，信以发志也。",
            xiaoXiangVernacular: "“用诚信感通黑暗”，是通过个人的极致信誉强行唤醒了被尘垢遮蔽的大局志向。 "
        },
        {
            original: "丰其沛，日中见沬，折其右肱，无咎。",
            vernacular: "遮蔽物像厚云一样进一步加深，正午甚至只能看见一些极微小的星团（沬）。甚至导致手臂受创。虽然这种状态非常危殆，但并未触及操守，所以暂时没有大碍。",
            xiaoXiang: "“丰其沛”，不可大事也；“折其右肱”，终不可用也。",
            xiaoXiangVernacular: "“遮蔽到了极点”，说明现在根本无法处理任何重大的抉择；“折断了手臂”，表现了核心执行力量已经完全丧失了。"
        },
        {
            original: "丰其蔀，日中见斗，遇其夷主，吉。",
            vernacular: "虽然目前的遮蔽依然极其严重、正午可见星斗，但幸好遇到了同样陷入困境但志向坚定的明道之友（夷主）。结局吉祥。 ",
            xiaoXiang: "“丰其蔀”，位不当也；“日中见斗”，幽不明也；“遇其夷主”，吉行也。",
            xiaoXiangVernacular: "“遮蔽依然严重”，是因为目前的架构还极其名不副实；“能与那份正义的火种汇合”，所以行动路径最终还是会吉祥的。 "
        },
        {
            original: "来章，有庆誉，吉。",
            vernacular: "才华终于大放异彩且有各方贤达纷纷归附。既有喜庆也有美誉，大吉大利。",
            xiaoXiang: "六五之吉，有庆也。",
            xiaoXiangVernacular: "六五爻之所以吉祥，是因为他的这种美德终因得到了时代的回响而变成了全局的庆典。"
        },
        {
            original: "丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。",
            vernacular: "虽然拥有奢华的大屋，却将其房屋搞得一团漆黑。窥视房中竟然阒寂无人。连续三年也见不到光亮和希望。结局极其凶险。象征走向了自闭和自我毁灭的巅峰。 ",
            xiaoXiang: "“丰其屋”，天际翔也；“窥其户，阒其无人”，自藏也。",
            xiaoXiangVernacular: "“虽然房屋极其宏大”，那是他已经彻底陷入了极具虚妄自大的幻梦中；“躲着不见人”，是他正在走向这种极致自我孤立的毁灭之路。"
        }
    ],
    56: [ // 旅卦
        {
            original: "旅琐琐，斯其所取灾。",
            vernacular: "行旅出行前处理极其琐碎且心态过于焦虑卑微。这反而会招致灾祸。 ",
            xiaoXiang: "“旅琐琐”，志穷灾也。",
            xiaoXiangVernacular: "“心态过于猥琐琐碎”，是因为其个人格局和这种远大的志向已经彻底枯竭了。"
        },
        {
            original: "旅即次，怀其资，得童仆贞。",
            vernacular: "旅客到达了驿站旅社，怀揣着充足的旅费并获得了忠诚家仆的悉心侍奉。结局守正吉祥。",
            xiaoXiang: "“得童仆贞”，终无尤也。",
            xiaoXiangVernacular: "“能够获得忠诚的辅助之力”，这意味着虽然在异乡，但最终也不会有任何的灾吝和遗憾。"
        },
        {
            original: "旅焚其次，丧其童仆，贞厉。",
            vernacular: "旅舍意外发生了火灾被焚毁，且丧失了忠诚的佣仆。即使守持现状也会极其危险。象征极端的意外灾祸导致一无所有。 ",
            xiaoXiang: "“旅焚其次”，亦以伤矣；以旅与下，其义丧也。",
            xiaoXiangVernacular: "“旅舍被焚烧”，确实是让人深感同情的重大挫败；但如果作为领导者在客居的过程中不能够善待基层（丧其仆），那这种丧失就是命中注定的逻辑必然。 "
        },
        {
            original: "旅于处，得其资斧，我心不快。",
            vernacular: "行旅虽然大致安定（处），也获得了一些生存和防御的资材武器（资斧）。但目前的核心心态还是感到极度的闷闷不乐。 ",
            xiaoXiang: "“旅于处”，未得位也；“得其资斧”，心未快也。",
            xiaoXiangVernacular: "“暂时的小安”，是因为他目前还没有获得真正的社会核心位置；“虽然钱物不缺”但心里还是缺乏起码的归属感。"
        },
        {
            original: "射雉，一矢亡，终以誉命。",
            vernacular: "射猎野鸡虽然暂时仅仅浪费了一支箭，但最终大获全胜并获得了极高的赞誉与荣宠。 ",
            xiaoXiang: "“终以誉命”，上逮也。",
            xiaoXiangVernacular: "“最终名扬天下”，是高层已经真正感受到了你的才华并给予了实质性的认可与选拔。 "
        },
        {
            original: "鸟焚其巢，旅人先笑后号咷。丧牛于易，凶。",
            vernacular: "飞鸟的巢穴被焚毁。行旅之人起初得意轻浮（笑），随后灾祸降临嚎啕大哭。在这种丧失核心生产资料（丧牛于易）的轻率行为中，是大凶之兆。 ",
            xiaoXiang: "以旅在上，其义焚也；“丧牛于易”，终莫之闻也。",
            xiaoXiangVernacular: "“既然客居还表现得如此骄横身处高位”，那被焚烧则是客观规律对于这种极度傲慢的惩罚；“不知不觉间丢了牛马家畜”，说明外界已经对他彻底丧失了基本的关注和同情了。 "
        }
    ],
    57: [ // 巽卦
        {
            original: "进退，利武人之贞。",
            vernacular: "总是陷于犹豫不定的思考与进退之中。此时利于像武士那样坚守一份果敢简洁且中正的品质。",
            xiaoXiang: "“进退”，志疑也；“利武人之贞”，志治也。",
            xiaoXiangVernacular: "“犹疑不定”，是因为其志向目前不够坚定；“推崇武士的果决”，是为了通过这种极其极致的自律和这种雷霆意志来治理内心的动摇。 "
        },
        {
            original: "巽在床下，用史巫纷若，吉，无咎。",
            vernacular: "谦逊到了极点甚至躲在了床底下。此时唯有像举行极其庄重的祭典那样诚恳地借助周边的力量。吉祥，没有灾祸。",
            xiaoXiang: "“纷若”之“吉”，得中也。",
            xiaoXiangVernacular: "“借助外力获得的吉祥”，是因为他虽然处于极其微妙、卑微的地位，但其内心依然真正掌握了核心应对的中道逻辑。"
        },
        {
            original: "频巽，吝。",
            vernacular: "反复无常频繁表现出甚至有些卑躬屈膝的这种虚假的谦逊。这种行为非常令人感到羞吝并会因此导致灾难。 ",
            xiaoXiang: "“频巽”之“吝”，志穷也。",
            xiaoXiangVernacular: "“动辄低头顺从”，表现了其内心已经完全丧失了任何核心的志气和原则了。"
        },
        {
            original: "悔亡，田获三品。",
            vernacular: "悔恨消失。在这种顺应变通的行动中，大获全胜，竟然捕捉到了三种不同类别的猎物（多方面的收益）。 ",
            xiaoXiang: "“田获三品”，有功也。",
            xiaoXiangVernacular: "“田猎大获全胜”，那是源于你在极其顺应变通的力量引导下真正立下了显赫的战功。 "
        },
        {
            original: "贞吉，悔亡，无不利。无初有终。先庚三日，后庚三日，吉。",
            vernacular: "守持正道吉祥，悔恨消失，无往而不利。虽然起初显得有些动荡犹豫，但最终结局非常圆满。改革的前后三天一定要极其反复推敲周密。吉祥。",
            xiaoXiang: "九五之吉，位正中也。",
            xiaoXiangVernacular: "九五爻之所以大吉大利，是因为他的位置极其中正，这种处理大局的逻辑是无可非议的完美。 "
        },
        {
            original: "巽在床下，丧其资斧，贞凶。",
            vernacular: "谦卑到了极点竟然躲在床下（极度畏葸）。甚至因此丧失了求生和防御的核心工具。结局凶险。 ",
            xiaoXiang: "“巽在床下”，上穷也；“丧其资斧”，正乎凶也。",
            xiaoXiangVernacular: "“再次极度卑微地自藏”，说明目前的这种谦逊策略已经彻底走到了尽头了；“丧失了生存工具”，这种极度软弱的行为注定了就是大凶的命。 "
        }
    ],
    58: [ // 兑卦
        {
            original: "和兑，吉。",
            vernacular: "平和、纯粹地表达内心的喜悦。这种发自内心的愉悦最为吉祥。",
            xiaoXiang: "“和兑”之吉，行未疑也。",
            xiaoXiangVernacular: "“平和的喜悦”，是因为行事光明磊落，内心没有任何猜疑。"
        },
        {
            original: "孚兑，吉，悔亡。",
            vernacular: "在真诚与信任的基础上获得愉悦。大吉大利，过往的悔恨消失。",
            xiaoXiang: "“孚兑”之吉，信志也。",
            xiaoXiangVernacular: "“建立在诚信上的喜悦”，体现了个人志趣与社会价值的高度契合。"
        },
        {
            original: "来兑，凶。",
            vernacular: "投机取巧、试图从外部引诱虚假的欢愉。结局凶险。",
            xiaoXiang: "“来兑”之凶，位不当也。",
            xiaoXiangVernacular: "“向外求取欢愉”，是因为失去了内在定位。"
        },
        {
            original: "商兑未宁，介疾有喜。",
            vernacular: "在各种利益与欢愉中权衡考量，内心尚未平静。若能果断隔绝贪欲带来的干扰，最终会有喜事发生。",
            xiaoXiang: "九四之“喜”，有庆也。",
            xiaoXiangVernacular: "“九四爻的喜悦”，源于他在动荡中守住了正道，获得了全局性的庆贺。"
        },
        {
            original: "孚于剥，有厉。",
            vernacular: "轻信投机剥离正轨的小人，或被虚假表象所迷乱。处境极其危殆。",
            xiaoXiang: "“孚于剥”，位正当也。",
            xiaoXiangVernacular: "“信任了不正义的势力”，说明其地位正面临被掏空的危险。"
        },
        {
            original: "引兑。",
            vernacular: "通过夸张、炫耀强行营造虚浮的欢愉。这种不切实际的虚名并无实质意义。",
            xiaoXiang: "上六“引兑”，未光也。",
            xiaoXiangVernacular: "“强行制造的欢庆”，表现了核心意志已经完全偏离了光明的轨道。"
        }
    ],
    59: [ // 涣卦
        {
            original: "用拯马壮，吉。",
            vernacular: "凭借强壮的骏马，或果断及时的外援，迅速脱离困境。大吉大利。",
            xiaoXiang: "初六之吉，顺也。",
            xiaoXiangVernacular: "“初六爻的吉祥”，源于行事顺应了自然发展的规律。"
        },
        {
            original: "涣奔其几，悔亡。",
            vernacular: "涣散危机来临时，迅速奔向赖以生存的支点。以前的悔恨随之消失。",
            xiaoXiang: "“涣奔其几”，得愿也。",
            xiaoXiangVernacular: "“危机中找到依靠”，说明在动荡中如愿实现了自我定位。"
        },
        {
            original: "涣其躬，无悔。",
            vernacular: "为了化解局势的涣散，能够舍弃个人的私利。大公无私，故无悔恨。",
            xiaoXiang: "“涣其躬”，志在外也。",
            xiaoXiangVernacular: "“舍弃私欲”，表现了志向已经超越个人得失，投身于宏大的事业中。"
        },
        {
            original: "涣其群，元吉。涣其丘，匪夷所思。",
            vernacular: "化解了小团体的私利，获得大吉。能化解如山丘般沉重的成见与障碍，成效惊人。",
            xiaoXiang: "“涣其群，元吉”，光大也。",
            xiaoXiangVernacular: "“彻底化解狭隘的小团体关系”，意味着胸怀坦荡，格局已达巅峰。"
        },
        {
            original: "涣汗其大号，涣王居，无咎。",
            vernacular: "像流汗舒解热气一样发出宏大的号令，彻底化解积弊。没有过失。",
            xiaoXiang: "“王居无咎”，正位也。",
            xiaoXiangVernacular: "“妥善处理涣散危机”，是因为始终秉持着端正的核心立场。"
        },
        {
            original: "涣其血，去逖出，无咎。",
            vernacular: "彻底涣散了猜忌或冲突带来的危机感，平安脱险。没有过失。",
            xiaoXiang: "“涣其血”，远害也。",
            xiaoXiangVernacular: "“涣散了杀机”，表现了通变求生的智慧，成功规避了重大灾厄。"
        }
    ],
    60: [ // 节卦
        {
            original: "不出户庭，无咎。",
            vernacular: "谨慎自律。局势不明时安守家中，不轻易涉险。没有灾祸。",
            xiaoXiang: "“不出户庭”，知通塞也。",
            xiaoXiangVernacular: "“不出家门”，表现了对时局趋势中机遇与障碍的高度敏锐。"
        },
        {
            original: "不出门庭，凶。",
            vernacular: "过度节制以致丧失时机。在上升期仍然蜷缩不出，结局凶险。",
            xiaoXiang: "“不出门庭”之“凶”，失时极也。",
            xiaoXiangVernacular: "“闭门不出之凶”，说明对时机的严重浪费已达极限。"
        },
        {
            original: "不节若，则嗟若，无咎。",
            vernacular: "如果不懂得节制而放任自流，难免感叹唏嘘。这是自作自受，非外部之咎。",
            xiaoXiang: "“不节若”之“嗟”，又谁“咎”也。",
            xiaoXiangVernacular: "“失节后的叹息”，既然是个人意志导致，也只能反思自己。"
        },
        {
            original: "安节，亨。",
            vernacular: "能够心安理得地守持节制。事业通达顺利。",
            xiaoXiang: "“安节”之“亨”，承上道也。",
            xiaoXiangVernacular: "“安然节制获亨通”，是因为顺应了自然的秩序与自律的要求。"
        },
        {
            original: "甘节，吉，往有尚。",
            vernacular: "发自内心地推行温润、自然的节制。吉祥，行动会受到推崇。",
            xiaoXiang: "“甘节”之“吉”，居位中也。",
            xiaoXiangVernacular: "“甘甜舒泰的节制”，是因为所处位置中庸平衡，核心逻辑完美。"
        },
        {
            original: "苦节，贞凶，悔亡。",
            vernacular: "僵化、苦涩的极端节制。即便初衷正确，结局也凶多吉少。但若能守住初心，遗恨也会随之而解。",
            xiaoXiang: "“苦节贞凶”，其道穷也。",
            xiaoXiangVernacular: "“死板极端的节制”，这种方法论已到尽头，没有社会价值。"
        }
    ],
    61: [ // 中孚卦
        {
            original: "虞吉，有它不燕。",
            vernacular: "严谨周密地准备并坚守诚信。结局吉祥。若产生私欲杂念，则会陷入不安。",
            xiaoXiang: "初九“虞吉”，志未变也。",
            xiaoXiangVernacular: "“起初的筹策获吉”，是因为志向尚未被外部欲望动摇。"
        },
        {
            original: "鸣鹤在阴，其子和之；我有好爵，吾与尔靡之。",
            vernacular: "老鹤在隐秘处鸣叫，幼雏发自内心应和。我拥有高尚的爵位与智慧，愿与你分享共鸣。",
            xiaoXiang: "“其子和之”，中心愿也。",
            xiaoXiangVernacular: "“幼雏应声”，源于内心深处本源意志的极致同步。"
        },
        {
            original: "得敌，或鼓或罢，或泣或歌。",
            vernacular: "遇到势均力敌的对手。内心极不稳定：时而擂鼓进攻，时而疲惫退缩，时而泣不成声，时而欢呼雀跃。",
            xiaoXiang: "“或鼓或罢”，位不当也。",
            xiaoXiangVernacular: "“行动反复无常”，是因为身处位置名不副实，缺乏掌控全局的能力。"
        },
        {
            original: "月几望，马匹亡，无咎。",
            vernacular: "月亮将圆，丢失了马匹。并无大碍，象征为了达成核心的大圆满，牺牲了具体的外部资源。",
            xiaoXiang: "“马匹亡”，绝类上也。",
            xiaoXiangVernacular: "“丢失马匹”，是因为已经脱离了低级的圈子，正在奔向更高的人生层次。"
        },
        {
            original: "有孚挛如，无咎。",
            vernacular: "诚信深厚，彼此紧密相连。没有过错。",
            xiaoXiang: "“有孚挛如”，位正当也。",
            xiaoXiangVernacular: "“极致诚信的吸引”，源于在架构中找到了中正的核心位置。"
        },
        {
            original: "翰音登于天，贞凶。",
            vernacular: "仅凭虚名或虚弱的口号试图一飞冲天。即便立场正确，也是大凶之兆。",
            xiaoXiang: "“翰音登于天”，何可长也。",
            xiaoXiangVernacular: "“靠叫喊构筑虚构繁华”，没有实质核心支撑，不可能长存。"
        }
    ],
    62: [ // 小过卦
        {
            original: "飞鸟以凶。",
            vernacular: "飞鸟过分高飞招致凶险。此时任何激进越位的行为都会招致严重的负面打击。",
            xiaoXiang: "“飞鸟以凶”，不可如何也。",
            xiaoXiangVernacular: "“飞鸟受灾”，面对自作自受的既定事实，已经无可救药。"
        },
        {
            original: "过其祖，遇其妣；不及其君，遇其臣；无咎。",
            vernacular: "越过了尊长，却在次一级的位置获得契合。虽未能直接面见最高层，但能与核心权要达成默契。在这种权宜之计中并无过错。",
            xiaoXiang: "“不及其君”，臣不可过也。",
            xiaoXiangVernacular: "“未见最高领袖”，是因为在现有逻辑下，执行者绝不可跨越核心权力的界限。"
        },
        {
            original: "弗过防之，从或戕之，凶。",
            vernacular: "如果不加强防范细节上的逾越，随之而来的不仅是猜忌，更有实质伤害。结局凶险。",
            xiaoXiang: "“从或戕之”，凶如何也。",
            xiaoXiangVernacular: "“遭受人身攻击的凶灾”，这种凶险是不堪设想且无可奈何的。"
        },
        {
            original: "无咎，弗过遇之。往厉必戒，勿用永贞。",
            vernacular: "没有过失。不盲目追求越位，顺时而遇。此时必须极其警惕，不可死守教条。",
            xiaoXiang: "“弗过遇之”，位不当也；“往厉必戒”，终不可长也。",
            xiaoXiangVernacular: "“特殊时期的偶得”，源于应对得当。然而目前的稳定缺乏长久持续的根基。"
        },
        {
            original: "密云不雨，自我西郊，公弋取彼在穴。",
            vernacular: "乌云密布却始终未雨。阻碍来自西方。王公大臣深入细节，捕获了转机的核心关键。",
            xiaoXiang: "“密云不雨”，已上也。",
            xiaoXiangVernacular: "“云厚不雨”，是因为内部压力与外部博弈已达顶点，尚未爆发。"
        },
        {
            original: "弗遇过之，飞鸟离之，凶，是谓灾眚。",
            vernacular: "不懂得顺应而盲目越位。像飞鸟撞入罗网，结局极其凶险，是天灾与人祸叠加的结果。",
            xiaoXiang: "“弗遇过之”，已亢也。",
            xiaoXiangVernacular: "“变本加厉的傲慢越位”，源于贪欲已达不可一世且即将覆灭的程度。"
        }
    ],
    63: [ // 既济卦
        {
            original: "濡其尾，吝。",
            vernacular: "小狐狸渡河时浸湿了尾巴。象征在大功告成之际，出现了令人羞涩的意外小挫败。",
            xiaoXiang: "“濡其尾”，亦不知极致理也。",
            xiaoXiangVernacular: "“浸湿了美丽的尾巴”，是因为临近成功时还没领悟慎始慎终的智慧。"
        },
        {
            original: "妇丧其茀，勿逐，七日得。",
            vernacular: "女子丢失了贵重车辆的布幔。不必盲目追寻。过了一定周期，丢失的东西会自然而归。",
            xiaoXiang: "“七日得”，以中道也。",
            xiaoXiangVernacular: "“失物复得”，体现了只要坚守中正，核心资源最终会回归。"
        },
        {
            original: "高宗伐鬼方，三年克之，小人勿用。",
            vernacular: "殷王高宗兴师攻打远方部落，历时三年才平定。此时切不可任用投机小人，以免毁掉战果。",
            xiaoXiang: "“三年克之”，惫也。",
            xiaoXiangVernacular: "“付出三年艰辛”，表现了虽然获得扩张，但元气已极度疲惫。"
        },
        {
            original: "繻有衣袽，终日戒。",
            vernacular: "穿着华丽丝绸，也要备好补漏布渣。时刻保持高度忧患意识，终日自省。",
            xiaoXiang: "“终日戒”，有所疑也。",
            xiaoXiangVernacular: "“终日戒备”，是因为洞察到了隐藏在平稳表象下的核心疑虑。"
        },
        {
            original: "东邻杀牛，不如西邻之禴祭，实受其福。",
            vernacular: "东邻大肆杀牛祭祀极其豪奢，不如西邻简朴而赤诚。重实质而轻排场，才能获得真福。",
            xiaoXiang: "“东邻杀牛，不如西邻之禴祭”，实受其福，吉大来也。",
            xiaoXiangVernacular: "“简朴赤诚胜于豪奢”，意味着在思想境界上真正掌握了诚信的本源。"
        },
        {
            original: "濡其首，厉。",
            vernacular: "头颅竟然也陷入水中淋湿。局势危殆，象征事业的高地与尊严已经蒙尘。",
            xiaoXiang: "“濡其首，厉”，何可久也。",
            xiaoXiangVernacular: "“脑袋被淋透”，说明已处于丧失逻辑自救可能的毁灭边缘，无法长久。"
        }
    ],
    64: [ // 未济卦
        {
            original: "濡其尾，吝。",
            vernacular: "渡过时代洪流时再次浸湿尾巴。起步阶段有些尴尬的遗憾。",
            xiaoXiang: "“濡其尾”，亦不知极也。",
            xiaoXiangVernacular: "“浸湿尾巴”，表现了对宏大局势整体变迁的逻辑尚未完全觉醒。"
        },
        {
            original: "曳其轮，贞吉。",
            vernacular: "能像制动车轮一样，在动荡中守持审慎中正。以此自律最为吉祥。",
            xiaoXiang: "九二“贞吉”，中以行正也。",
            xiaoXiangVernacular: "九二爻大吉大利，是因为内心身居中正，行事顺应自然法理。"
        },
        {
            original: "未济，征凶，利涉大川。",
            vernacular: "处于成功的最后阶段。盲目行动会有大险。此时利于建立宏大的视野，通过渡过重重磨难来实现自我重生。",
            xiaoXiang: "“未济征凶”，位不当也。",
            xiaoXiangVernacular: "“还没准备好就强行出发”，是因为才华与伟大的位置完全不匹配。"
        },
        {
            original: "贞吉，悔亡，震用伐鬼方，三年有赏于大国。",
            vernacular: "守持正道吉祥，遗恨消失。以雷霆之势解决核心隐患。历经艰辛，终将获得公认的重赏与美誉。",
            xiaoXiang: "“贞吉悔亡”，志行也。",
            xiaoXiangVernacular: "“吉祥且终结遗憾”，是因为宏远的平生志向在这一刻终于得到了施展机会。"
        },
        {
            original: "贞吉，无悔，君子之光，有孚，吉。",
            vernacular: "守正大吉，无悔。君子的人格光辉大放异彩，具备威望并赢得社会极致的信任。大吉。",
            xiaoXiang: "“君子之光”，其晖吉也。",
            xiaoXiangVernacular: "“君子的人格光辉”，照耀之处即是自然吉祥大业达成的境地。"
        },
        {
            original: "有孚于饮酒，无咎；濡其首，有孚失是。",
            vernacular: "心怀诚信，与人欢庆饮酒。无过错。但若沉溺过度，即便是原本有信誉，也会因为丧失原则而失掉大局的正义。",
            xiaoXiang: "“饮酒濡其首”，亦不知节制也。",
            xiaoXiangVernacular: "“饮酒过度埋头其中”，是因为在即将成功的巅峰时刻，丧失了对“节制”这一核心法则的敬畏。"
        }
    ]
};
