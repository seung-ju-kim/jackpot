import Mojito from "../../imgs/mojito.jpg";
import Cosmopolitan from "../../imgs/Cosmopolitan.jpg";
import PinkLady from "../../imgs/PinkLady.jpg";
import B52 from "../../imgs/B-52.jpg";
import Screwdriver from "../../imgs/Screwdriver.jpg";
import JackCoke from "../../imgs/JackCoke.jpg";
import Faust from "../../imgs/Faust.jpg";
import PeachCrush from "../../imgs/PeachCrush.jpg";

const checkState = {
  types: {
    ISTJ: "어둑보라빛 하늘같은 Faust",
    ISTP: "도시적인 이미지의 Cosmopolitan",
    ISFJ: "독을 품은 양귀비같은 PinkLady",
    ISFP: "편안함을 주는 Mojito",
    INTJ: "어둑보라빛 하늘같은 Faust",
    INTP: "도시적인 이미지의 Cosmopolitan",
    INFJ: "독을 품은 양귀비같은 PinkLady",
    INFP: "편안함을 주는 Mojito",
    ESTJ: '불타오르는 화염같은 "B-52"',
    ESTP: "국민 칵테일 JackCoke",
    ESFJ: "어디서나 사랑받는 PeachCrush",
    ESFP: "국민 칵테일 JackCoke",
    ENTJ: '불타오르는 화염같은 "B-52"',
    ENTP: "열정적이고 톡쏘는 매력의 Screwdriver",
    ENFJ: "어디서나 사랑받는 PeachCrush",
    ENFP: "열정적이고 톡쏘는 매력의 Screwdriver",
  },

  typeImgs: {
    ISTJ: Faust, // Faust**
    ISTP: Cosmopolitan, // Cosmopolitan
    ISFJ: PinkLady, // PinkLady
    ISFP: Mojito, // Mojito
    INTJ: Faust, // Faust**
    INTP: Cosmopolitan, // Cosmopolitan
    INFJ: PinkLady, // PinkLady
    INFP: Mojito, // Mojito
    ESTJ: B52, // B-52
    ESTP: JackCoke, // JackCoke
    ESFJ: PeachCrush, // PeachCrush**
    ESFP: JackCoke, // JackCoke
    ENTJ: B52, // B-52
    ENTP: Screwdriver, // Screwdriver
    ENFJ: PeachCrush, // PeachCrush**
    ENFP: Screwdriver, // Screwdriver
  },
  typeInfos: {
    ISTJ: [
      "파우스트처럼 핏빛보다 진하지만 어둡지 않은 진홍빛을 ",
      <br />,
      "가지고 있는 당신, 내적인 힘이 강인한 사람이군요.",
      <br />,
      "성실하고 책임감이 강하고 규칙을 잘 지키죠",
      <br />,
      "인간성으로 사람을 평가하기 보다는",
      <br />,
      "모두를 하나의 공정한 기준으로 판단하는 군요! ",
      <br />,
      "당신에 대한 주변 판단은 엄친딸, 엄친아",
      <br />,
      " 이런 수식이 붙는 사람이에요",
      <br />,
      "때로는 차갑게 주변을 대하지만 마음은 따뜻한 사람이에요",
      <br />,
      "다른 사람들과 일을 하는 것보다는 ",
      <br />,
      "혼자 일을 하는 것을 편하게 생각해요",
      <br />,
      "가끔은 고지식하다는 말을 듣지만 일에 대한 처리능력은",
      <br />,
      " 매우 뛰어난 사람이에요",
    ],
    ISTP: [
      "시리도록 새빨간 코스모폴리탄같은 당신,",
      <br />,
      " 도심 속 현대인을 연상케하는군요.",
      <br />,
      "즉흥적으로 행동하는 경우가 많아요. ",
      <br />,
      "변덕쟁이같은 나, 계획은 바꾸라고 있는거 맞죠?",
      <br />,
      "상상력이 풍부해서 혼자 있을 때 ",
      <br />,
      "이런 저런 생각에 잠겨있는 편이에요.",
      <br />,
      "마음에 없는 소리를 잘 못해서 ",
      <br />,
      "영혼 어디갔냐는 말을 말을 자주 들어요.",
      <br />,
      "연락하는 걸 귀찮아하는편이에요. 아무리 친한 친구라도 ",
      <br />,
      "하루에 한 번 톡하면 많이 하는 편이라고 생각해요.",
      <br />,
      "관심없는 주제에 대해 말할때는 조용하지만 관심 있는 ",
      <br />,
      "주제일때는 말이 많아져요.",
      <br />,
      "토론과 논쟁을 좋아하며 자신의 논리로 상대방을 ",
      <br />,
      "설득했을 때 쾌감을 느껴요.",
      <br />,
      "본인 일에 열중하고 지적인 매력이 ",
      <br />,
      "돋보이는 사람에 매력을 느껴요. ",
      <br />,
      "내가 본받을 점이 마구마구 있었으면 좋겠어요.",
      <br />,
      "규칙에 얽매이는 건 너무 갑갑해요. 날 내버려둬 !",
      <br />,
    ],
    ISFJ: [
      "핑크레이디처럼 부드러운척 하지만 속은 독한 알콜향을",
      <br />,
      "품고 있는 당신, 뒤에서 모든 것을 조정하고 있군요!",
      <br />,
      "사람에대한 뛰어난 통찰력을 가지고 ",
      <br />,
      "완벽하게 일을 해내려고 해요",
      <br />,
      "성실하게 모든 일을 해내고 있는 당신은 가끔은 겸손한 태도로",
      <br />,
      " 종종 다른 이들로부터 존경을 받기도 하네요 ㅎㅎ",
      <br />,
      "다른 사람들의 기대치를 넘어서 만족시키려고",
      <br />,
      " 최선을 다하는 사람이군요!",
      <br />,
      "부드러운 목소리 뒤에 강인함을 가지고 있어요.",
      <br />,
      "주변 친구들이나 동료들에게 사교성이 많은 사람으로",
      <br />,
      " 오해하기도 하지만 혼자만의 시간이 매우 중요한 사람이네요.",
      <br />,
      "가끔 극심한 스트레스에 시달려서 힘들어하는 경우가 많아요.",
    ],
    ISFP: [
      '"모히또 가서 몰디브나 한 잔 하자"',
      <br />,
      "강한 맛보다는 은은하고 천천히 다가오는 맛을 좋아해요.",
      <br />,
      "편안하게 천천히 알아가는 것을 좋아하는 당신.",
      <br />,
      "Mojito는 럼 피즈에 민트를 첨가해 ",
      <br />,
      "시원한 청량감과 산뜻한 맛을 내요.",
      <br />,
      "맛은 달달함과 동시에 민트 향을 내면서 ",
      <br />,
      "씁쓸한 뒷맛이 스쳐가는 매력적인 칵테일이에요.",
    ],
    INTJ: [
      "파우스트처럼 핏빛보다 진하지만 어둡지 않은 진홍빛을 ",
      <br />,
      "가지고 있는 당신, 내적인 힘이 강인한 사람이군요.",
      <br />,
      "성실하고 책임감이 강하고 규칙을 잘 지키죠",
      <br />,
      "인간성으로 사람을 평가하기 보다는",
      <br />,
      "모두를 하나의 공정한 기준으로 판단하는 군요! ",
      <br />,
      "당신에 대한 주변 판단은 엄친딸, 엄친아",
      <br />,
      " 이런 수식이 붙는 사람이에요",
      <br />,
      "때로는 차갑게 주변을 대하지만 마음은 따뜻한 사람이에요",
      <br />,
      "다른 사람들과 일을 하는 것보다는 ",
      <br />,
      "혼자 일을 하는 것을 편하게 생각해요",
      <br />,
      "가끔은 고지식하다는 말을 듣지만 일에 대한 처리능력은",
      <br />,
      " 매우 뛰어난 사람이에요",
    ],
    INTP: [
      "시리도록 새빨간 코스모폴리탄같은 당신,",
      <br />,
      " 도심 속 현대인을 연상케하는군요.",
      <br />,
      "즉흥적으로 행동하는 경우가 많아요. ",
      <br />,
      "변덕쟁이같은 나, 계획은 바꾸라고 있는거 맞죠?",
      <br />,
      "상상력이 풍부해서 혼자 있을 때 ",
      <br />,
      "이런 저런 생각에 잠겨있는 편이에요.",
      <br />,
      "마음에 없는 소리를 잘 못해서 ",
      <br />,
      "영혼 어디갔냐는 말을 말을 자주 들어요.",
      <br />,
      "연락하는 걸 귀찮아하는편이에요. 아무리 친한 친구라도 ",
      <br />,
      "하루에 한 번 톡하면 많이 하는 편이라고 생각해요.",
      <br />,
      "관심없는 주제에 대해 말할때는 조용하지만 관심 있는 ",
      <br />,
      "주제일때는 말이 많아져요.",
      <br />,
      "토론과 논쟁을 좋아하며 자신의 논리로 상대방을 ",
      <br />,
      "설득했을 때 쾌감을 느껴요.",
      <br />,
      "본인 일에 열중하고 지적인 매력이 ",
      <br />,
      "돋보이는 사람에 매력을 느껴요. ",
      <br />,
      "내가 본받을 점이 마구마구 있었으면 좋겠어요.",
      <br />,
      "규칙에 얽매이는 건 너무 갑갑해요. 날 내버려둬 !",
      <br />,
    ],
    INFJ: [
      "핑크레이디처럼 부드러운척 하지만 속은 독한 알콜향을",
      <br />,
      "품고 있는 당신, 뒤에서 모든 것을 조정하고 있군요!",
      <br />,
      "사람에대한 뛰어난 통찰력을 가지고 ",
      <br />,
      "완벽하게 일을 해내려고 해요",
      <br />,
      "성실하게 모든 일을 해내고 있는 당신은 가끔은 겸손한 태도로",
      <br />,
      " 종종 다른 이들로부터 존경을 받기도 하네요 ㅎㅎ",
      <br />,
      "다른 사람들의 기대치를 넘어서 만족시키려고",
      <br />,
      " 최선을 다하는 사람이군요!",
      <br />,
      "부드러운 목소리 뒤에 강인함을 가지고 있어요.",
      <br />,
      "주변 친구들이나 동료들에게 사교성이 많은 사람으로",
      <br />,
      " 오해하기도 하지만 혼자만의 시간이 매우 중요한 사람이네요.",
      <br />,
      "가끔 극심한 스트레스에 시달려서 힘들어하는 경우가 많아요.",
    ],
    INFP: [
      '"모히또 가서 몰디브나 한 잔 하자"',
      <br />,
      "강한 맛보다는 은은하고 천천히 다가오는 맛을 좋아해요.",
      <br />,
      "편안하게 천천히 알아가는 것을 좋아하는 당신.",
      <br />,
      "Mojito는 럼 피즈에 민트를 첨가해 ",
      <br />,
      "시원한 청량감과 산뜻한 맛을 내요.",
      <br />,
      "맛은 달달함과 동시에 민트 향을 내면서 ",
      <br />,
      "씁쓸한 뒷맛이 스쳐가는 매력적인 칵테일이에요.",
    ],
    ESTJ: [
      "B-52처럼 강한 알콜 속에서 불이 잘 붙는 당신, ",
      <br />,
      "우두머리가 되어 일하는 것을 좋아하는군요!",
      <br />,
      "진취적인 생각과 결정력, 그리고 냉철한 판단력으로 ",
      <br />,
      "당신이 세운 목표를 잘 해결하는 사람이네요.",
      <br />,
      "뛰어난 사회성을 발휘하여 다른 동료들을 채찍질함으로써 ",
      <br />,
      "함께 더 큰 성공과 성취를 이루는군요!!",
      <br />,
      "도전 정신과 지략이 뛰어나 상황에 맞게",
      <br />,
      "일을 잘 진행시키는 경향이 있어요",
      <br />,
      "주변 상황을 잘 판단해서 문제가 생겼을 때 일을 ",
      <br />,
      "체계적으로 해결하는 사람이에요.",
      <br />,
      "사람들과의 약속을 중요시 여기고 주변사람들에게 잘해줘요",
      <br />,
      "하지만 가끔은 무심한듯 보여서 ",
      <br />,
      "다른 사람에게 상처를 주기도 해요.",
      <br />,
      "가끔은 주변을 돌아보는 자세를 가지는건 어떨까요?",
    ],
    ESTP: [
      "대중적인 칵테일인 잭콕처럼 ",
      <br />,
      "당신을 모르는 사람이 없을 것 같군요.",
      <br />,
      "노는게 제일 좋아 ~~ 당신은 인간 뽀로로 !",
      <br />,
      "생각하고 행동하기보다 일단 행동하고 생각해요.",
      <br />,
      "충동적으로 행동하는 편이에요.",
      <br />,
      "발등에 불 떨어질 때까지 미루다가 뭐든",
      <br />,
      "몰아서 하는 편이에요. 내일의 내가 해주겠죠 뭐 ㅎㅎ",
      <br />,
      "사실 주목받는 걸 좀 즐기는 편이에요. ",
      <br />,
      "학교나 직장에서 나를 모르는 사람은 없을 걸요?",
      <br />,
      "새로운 것을 도전하는데 두려움이 없어요. ",
      <br />,
      "오히려 도전 욕구가 뿜뿜해요.",
      <br />,
      "친구의 친구의 친구까지 껴서 노는",
      <br />,
      "엄청난 친화력의 소유자예요.",
      <br />,
      "성격이 단순해서 고민하다가도 뒤돌면 까먹어요. ",
      <br />,
      "잘 먹고 잘 자고 ! 닮고 싶은 성격이에요.",
      <br />,
      "누가 날 옭매는거 너무 싫어요. 간섭 노노 ! 자유로운게 좋아요.",
    ],
    ESFJ: [
      "새콤달콤한 피치크러쉬가 생각나는 당신은 ",
      <br />,
      "통통 튀는 매력으로 사람들을 사로잡는군요.",
      <br />,
      "칭찬받으면 신나서 더 열심히 해요.",
      <br />,
      "다른 사람 도와주는 것에 진심이에요. ",
      <br />,
      "친구들 고민은 내 고민이나 마찬가지 !",
      <br />,
      "하지만 정작 본인 고민은 잘 털어놓지 않아요. ",
      <br />,
      "묵묵히 참아내는 경우가 많아요.",
      <br />,
      "활기찬 성격으로 항상 주변에 사람이 많아요.",
      <br />,
      "다른사람에게는 관대하지만 본인에게는 매우 엄격해요.",
      <br />,
      " 조금은 느슨하게 자신을 바라봐도 좋을 것 같아요.",
      <br />,
      "감성적이어서 감정의 기복이 심할 때가 있어요. ",
      <br />,
      "나도 모르게 눈물이 또르륵 흘러본 경험 있지 않나요?",
      <br />,
      "내가 조금 힘들더라도 상대방을 먼저 생각하는 ",
      <br />,
      "배려깊은 사람이에요.",
      <br />,
      "앞장서서 더 나은 세상을 만드려고해요. ",
      <br />,
      "혹시 꿈이 세계 평화 ?",
    ],
    ESFP: [
      "대중적인 칵테일인 잭콕처럼 ",
      <br />,
      "당신을 모르는 사람이 없을 것 같군요.",
      <br />,
      "노는게 제일 좋아 ~~ 당신은 인간 뽀로로 !",
      <br />,
      "생각하고 행동하기보다 일단 행동하고 생각해요.",
      <br />,
      "충동적으로 행동하는 편이에요.",
      <br />,
      "발등에 불 떨어질 때까지 미루다가 뭐든",
      <br />,
      "몰아서 하는 편이에요. 내일의 내가 해주겠죠 뭐 ㅎㅎ",
      <br />,
      "사실 주목받는 걸 좀 즐기는 편이에요. ",
      <br />,
      "학교나 직장에서 나를 모르는 사람은 없을 걸요?",
      <br />,
      "새로운 것을 도전하는데 두려움이 없어요. ",
      <br />,
      "오히려 도전 욕구가 뿜뿜해요.",
      <br />,
      "친구의 친구의 친구까지 껴서 노는",
      <br />,
      "엄청난 친화력의 소유자예요.",
      <br />,
      "성격이 단순해서 고민하다가도 뒤돌면 까먹어요. ",
      <br />,
      "잘 먹고 잘 자고 ! 닮고 싶은 성격이에요.",
      <br />,
      "누가 날 옭매는거 너무 싫어요. 간섭 노노 ! 자유로운게 좋아요.",
    ],
    ENTJ: [
      "B-52처럼 강한 알콜 속에서 불이 잘 붙는 당신, ",
      <br />,
      "우두머리가 되어 일하는 것을 좋아하는군요!",
      <br />,
      "진취적인 생각과 결정력, 그리고 냉철한 판단력으로 ",
      <br />,
      "당신이 세운 목표를 잘 해결하는 사람이네요.",
      <br />,
      "뛰어난 사회성을 발휘하여 다른 동료들을 채찍질함으로써 ",
      <br />,
      "함께 더 큰 성공과 성취를 이루는군요!!",
      <br />,
      "도전 정신과 지략이 뛰어나 상황에 맞게",
      <br />,
      "일을 잘 진행시키는 경향이 있어요",
      <br />,
      "주변 상황을 잘 판단해서 문제가 생겼을 때 일을 ",
      <br />,
      "체계적으로 해결하는 사람이에요.",
      <br />,
      "사람들과의 약속을 중요시 여기고 주변사람들에게 잘해줘요",
      <br />,
      "하지만 가끔은 무심한듯 보여서 ",
      <br />,
      "다른 사람에게 상처를 주기도 해요.",
      <br />,
      "가끔은 주변을 돌아보는 자세를 가지는건 어떨까요?",
    ],
    ENTP: [
      "무한 긍정의 밝은 당신!",
      <br />,
      "Screwdriver은 강한 보드카를 베이스로 오렌지 주스를 섞어 강한 맛에",
      <br />,
      "오렌지의 상큼하고 달달한 맛이 매력적인 칵테일 입니다.",
      <br />,
      "긍정적이며 낙천적이여서 친구들과 잘 어울리고",
      <br />,
      " 다른사람들과 같이 있는것을 좋아해요",
      <br />,
      "거짓말을 못해서 입에 발린 말을 잘 못해요",
      <br />,
      "익숙함보다는 새로운 것을 좋아해요 ",
      <br />,
      "그러나 끈기가 없어서 한번 일을 하다보면 ",
      <br />,
      "금방 싫증을 내는 일이 많아요",
      <br />,
      "충동적이지만 변화에 금방 적응해서 임기응변에 능해요",
    ],
    ENFJ: [
      "새콤달콤한 피치크러쉬가 생각나는 당신은 ",
      <br />,
      "통통 튀는 매력으로 사람들을 사로잡는군요.",
      <br />,
      "칭찬받으면 신나서 더 열심히 해요.",
      <br />,
      "다른 사람 도와주는 것에 진심이에요. ",
      <br />,
      "친구들 고민은 내 고민이나 마찬가지 !",
      <br />,
      "하지만 정작 본인 고민은 잘 털어놓지 않아요. ",
      <br />,
      "묵묵히 참아내는 경우가 많아요.",
      <br />,
      "활기찬 성격으로 항상 주변에 사람이 많아요.",
      <br />,
      "다른사람에게는 관대하지만 본인에게는 매우 엄격해요.",
      <br />,
      " 조금은 느슨하게 자신을 바라봐도 좋을 것 같아요.",
      <br />,
      "감성적이어서 감정의 기복이 심할 때가 있어요. ",
      <br />,
      "나도 모르게 눈물이 또르륵 흘러본 경험 있지 않나요?",
      <br />,
      "내가 조금 힘들더라도 상대방을 먼저 생각하는 ",
      <br />,
      "배려깊은 사람이에요.",
      <br />,
      "앞장서서 더 나은 세상을 만드려고해요. ",
      <br />,
      "혹시 꿈이 세계 평화 ?",
    ],
    ENFP: [
      "무한 긍정의 밝은 당신!",
      <br />,
      "Screwdriver은 강한 보드카를 베이스로 오렌지 주스를 섞어 강한 맛에",
      <br />,
      "오렌지의 상큼하고 달달한 맛이 매력적인 칵테일 입니다.",
      <br />,
      "긍정적이며 낙천적이여서 친구들과 잘 어울리고",
      <br />,
      " 다른사람들과 같이 있는것을 좋아해요",
      <br />,
      "거짓말을 못해서 입에 발린 말을 잘 못해요",
      <br />,
      "익숙함보다는 새로운 것을 좋아해요 ",
      <br />,
      "그러나 끈기가 없어서 한번 일을 하다보면 ",
      <br />,
      "금방 싫증을 내는 일이 많아요",
      <br />,
      "충동적이지만 변화에 금방 적응해서 임기응변에 능해요",
    ],
  },
  good: {
    ISTJ: "열정적이고 톡쏘는 매력의 Screwdriver",
    ISTP: "어디서나 사랑받는 PeachCrush",
    ISFJ: "국민 칵테일 JackCoke",
    ISFP: '불타오르는 화염같은 "B-52"',
    INTJ: "열정적이고 톡쏘는 매력의 Screwdriver",
    INTP: "어디서나 사랑받는 PeachCrush",
    INFJ: "국민 칵테일 JackCoke",
    INFP: '불타오르는 화염같은 "B-52"',
    ESTJ: "편안함을 주는 Mojito",
    ESTP: "도시적인 이미지의 Cosmopolitan",
    ESFJ: "도시적인 이미지의 Cosmopolitan",
    ESFP: "도시적인 이미지의 Cosmopolitan",
    ENTJ: "편안함을 주는 Mojito",
    ENTP: "어둑보라빛 하늘같은 Faust",
    ENFJ: "도시적인 이미지의 Cosmopolitan",
    ENFP: "어둑보라빛 하늘같은 Faust",
  },
  goodImgs: {
    ISTJ: Screwdriver,
    ISTP: PeachCrush,
    ISFJ: JackCoke,
    ISFP: B52,
    INTJ: Screwdriver,
    INTP: PeachCrush,
    INFJ: JackCoke,
    INFP: B52,
    ESTJ: Mojito,
    ESTP: Cosmopolitan,
    ESFJ: Cosmopolitan,
    ESFP: Cosmopolitan,
    ENTJ: Mojito,
    ENTP: Faust,
    ENFJ: Cosmopolitan,
    ENFP: Faust,
  },
  bad: {
    ISTJ: "어디서나 사랑받는 PeachCrush",
    ISTP: "편안함을 주는 Mojito",
    ISFJ: '불타오르는 화염같은 "B-52"',
    ISFP: "도시적인 이미지의 Cosmopolitan",
    INTJ: "어디서나 사랑받는 PeachCrush",
    INTP: "편안함을 주는 Mojito",
    INFJ: '불타오르는 화염같은 "B-52"',
    INFP: "도시적인 이미지의 Cosmopolitan",
    ESTJ: "독을 품은 양귀비같은 PinkLady",
    ESTP: "열정적이고 톡쏘는 매력의 Screwdriver",
    ESFJ: "어둑보라빛 하늘같은 Faust",
    ESFP: "열정적이고 톡쏘는 매력의 Screwdriver",
    ENTJ: "독을 품은 양귀비같은 PinkLady",
    ENTP: "국민 칵테일 JackCoke",
    ENFJ: "어둑보라빛 하늘같은 Faust",
    ENFP: "국민 칵테일 JackCoke",
  },
  badImgs: {
    ISTJ: PeachCrush,
    ISTP: Mojito,
    ISFJ: B52,
    ISFP: Cosmopolitan,
    INTJ: PeachCrush,
    INTP: Mojito,
    INFJ: B52,
    INFP: Cosmopolitan,
    ESTJ: Cosmopolitan,
    ESTP: Screwdriver,
    ESFJ: Faust,
    ESFP: Screwdriver,
    ENTJ: Cosmopolitan,
    ENTP: JackCoke,
    ENFJ: Faust,
    ENFP: JackCoke,
  },
};
export default checkState;
