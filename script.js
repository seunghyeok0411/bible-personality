const questions = [
  {
    q: "모임에서 새로운 사람들을 만날 때, 당신은 어떤 편인가요?",
    a: { text: "먼저 다가가 대화를 시작하고 여러 사람과 교류한다", type: "E" },
    b: { text: "소수의 사람과 깊은 대화를 나누거나 조용히 관찰한다", type: "I" },
    illustration: "question1.jpg"
  },
  {
    q: "성경을 읽을 때, 당신은 어떤 부분에 더 집중하나요?",
    a: { text: "성경 말씀이 주는 영적 의미와 상징적 교훈에 집중한다", type: "N" },
    b: { text: "실제 역사적 사건과 구체적인 가르침에 집중한다", type: "S" },
    illustration: "question2.jpg"
  },
  {
    q: "교회나 공동체에서 갈등 상황이 생겼을 때, 당신은 어떻게 접근하나요?",
    a: { text: "모두의 감정을 고려하고 조화로운 해결책을 찾으려 한다", type: "F" },
    b: { text: "객관적 사실을 바탕으로 공정하고 논리적인 해결책을 찾는다", type: "T" },
    illustration: "question3.jpg"
  },
  {
    q: "신앙생활에서 당신은 어떤 방식을 선호하나요?",
    a: { text: "정해진 예배와 기도 시간, 체계적인 성경 공부 계획을 따른다", type: "J" },
    b: { text: "그때그때 영감이 올 때 기도하고, 다양한 방식으로 신앙을 표현한다", type: "P" },
    illustration: "question4.jpg"
  },
  {
    q: "어려운 결정을 내려야 할 때, 당신은 주로 어떻게 하나요?",
    a: { text: "여러 사람과 의논하고 다양한 의견을 들어본 후 결정한다", type: "E" },
    b: { text: "혼자 깊이 생각하고 기도한 후에 결정한다", type: "I" },
    illustration: "question5.jpg"
  },
  {
    q: "성경의 예언이나 계시록을 읽을 때, 당신의 반응은?",
    a: { text: "상징과 의미를 해석하며 현재와 미래에 적용할 방법을 생각한다", type: "N" },
    b: { text: "명확하게 기록된 내용에 집중하고 역사적 맥락을 이해하려 한다", type: "S" },
    illustration: "question6.jpg"
  },
  {
    q: "누군가 신앙적 고민을 나눌 때, 당신은 어떻게 반응하나요?",
    a: { text: "공감하며 위로하고 그 사람의 감정에 초점을 맞춘다", type: "F" },
    b: { text: "문제 해결을 위한 실질적인 조언과 성경적 원리를 제시한다", type: "T" },
    illustration: "question7.jpg"
  },
  {
    q: "선교나 봉사활동을 계획할 때, 당신의 접근 방식은?",
    a: { text: "세부 일정과 역할을 미리 정하고 체계적으로 준비한다", type: "J" },
    b: { text: "큰 방향만 정하고 상황에 따라 유연하게 대응한다", type: "P" },
    illustration: "question8.jpg"
  }
];

const results = {
  // 기존 4개 유형
  INFP: {
    name: "다윗",
    desc: "감정이 깊고 진심 어린 마음으로 하나님을 따르는 이상주의자입니다. 시와 음악을 통해 자신의 감정을 표현하며, 하나님과 깊은 관계를 맺고자 합니다. 창의적이고 독창적인 생각으로 주변 사람들에게 영감을 줍니다.",
    image: "cartoon/david.jpg",
    verse: "여호와는 나의 목자시니 내게 부족함이 없으리로다 - 시편 23:1"
  },
  ENTJ: {
    name: "모세",
    desc: "지도력과 추진력을 가진 개척형 리더입니다. 명확한 비전과 목표를 가지고 사람들을 이끌며, 어려운 상황에서도 결단력 있게 행동합니다. 하나님의 뜻을 따라 이스라엘 백성을 애굽에서 이끌어낸 위대한 지도자입니다.",
    image: "cartoon/moses.jpg",
    verse: "내가 누구를 보내며 누가 우리를 위하여 갈꼬 하시니 그때에 내가 이르되 내가 여기 있나이다 나를 보내소서 - 이사야 6:8"
  },
  ISFJ: {
    name: "마리아",
    desc: "사랑으로 헌신하며 조용히 섬기는 인물입니다. 세심하고 따뜻한 마음으로 주변 사람들을 돌보며, 신실함과 충성심이 강합니다. 예수님의 어머니로서 하나님의 뜻에 순종하며 겸손하게 섬겼습니다.",
    image: "cartoon/mary.jpg",
    verse: "마리아가 이르되 주의 여종이오니 말씀대로 내게 이루어지이다 - 누가복음 1:38"
  },
  ENFP: {
    name: "바울",
    desc: "열정으로 복음을 전하며 세상을 변화시키는 전도자입니다. 창의적이고 열정적인 성격으로 다양한 사람들과 쉽게 관계를 맺고, 새로운 아이디어와 가능성을 탐구합니다. 많은 교회를 세우고 서신서를 통해 신앙의 가르침을 전했습니다.",
    image: "cartoon/paul.jpg",
    verse: "내가 그리스도와 함께 십자가에 못 박혔나니 그런즉 이제는 내가 사는 것이 아니요 오직 내 안에 그리스도께서 사시는 것이라 - 갈라디아서 2:20"
  },
  
  // 추가된 12개 유형
  INTJ: {
    name: "느헤미야",
    desc: "전략적 계획가이자 비전을 실현시키는 지도자입니다. 예루살렘 성벽 재건을 체계적으로 계획하고 실행했으며, 반대와 방해에도 불구하고 목표를 달성했습니다. 분석적 사고와 미래를 내다보는 통찰력이 뛰어납니다.",
    image: "cartoon/nehemiah.jpg",
    verse: "내 하나님이 내 마음에 두신 일을 내가 아직 예루살렘에 있는 사람들에게 말하지 아니하고 - 느헤미야 2:12"
  },
  INTP: {
    name: "솔로몬",
    desc: "지혜로운 사색가이자 논리적 분석가입니다. 깊은 통찰력으로 복잡한 문제를 해결하며, 지식과 지혜를 추구합니다. 하나님께 지혜를 구했으며, 그의 지혜는 잠언과 전도서에 담겨 있습니다.",
    image: "cartoon/solomon.jpg",
    verse: "내가 지혜를 구하였더니 명철이 내게 왔도다 - 잠언 7:4"
  },
  ENTP: {
    name: "베드로",
    desc: "열정적 혁신가이자 도전을 두려워하지 않는 인물입니다. 때로는 충동적이지만, 창의적이고 적응력이 뛰어납니다. 예수님을 세 번 부인했지만 회개하고 초대교회의 중요한 지도자가 되었습니다.",
    image: "cartoon/peter.jpg",
    verse: "주는 그리스도시요 살아 계신 하나님의 아들이시니이다 - 마태복음 16:16"
  },
  ENFJ: {
    name: "에스더",
    desc: "영감을 주는 지도자이자 사람들을 배려하는 인물입니다. 자기 민족을 구하기 위해 용기를 낸 왕비로, 타인의 필요에 민감하게 반응하며 조화와 화합을 추구합니다.",
    image: "cartoon/esther.jpg",
    verse: "네가 왕후의 자리를 얻은 것이 이때를 위함이 아닌지 누가 알겠느냐 - 에스더 4:14"
  },
  INFJ: {
    name: "요한",
    desc: "이상주의적 조언자이자 깊은 통찰력을 가진 사도입니다. 사랑과 진리의 메시지를 전하며, 예수님의 사랑하시는 제자로 불렸습니다. 요한복음과 요한계시록을 통해 깊은 영적 진리를 전했습니다.",
    image: "cartoon/john.jpg",
    verse: "사랑하는 자들아 우리가 서로 사랑하자 사랑은 하나님께 속한 것이니 - 요한일서 4:7"
  },
  ISTJ: {
    name: "다니엘",
    desc: "신실한 관리자이자 원칙을 지키는 인물입니다. 바벨론 포로 시절에도 신앙의 원칙을 굳게 지켰으며, 책임감과 성실함으로 높은 지위에 올랐습니다. 정직하고 체계적인 성격으로 신뢰를 받았습니다.",
    image: "cartoon/daniel.jpg",
    verse: "다니엘이 뜻을 정하여 왕의 음식과 그가 마시는 포도주로 자기를 더럽히지 아니하리라 - 다니엘 1:8"
  },
  ISTP: {
    name: "기드온",
    desc: "실용적 문제 해결사이자 위기 상황에서 빛을 발하는 인물입니다. 적은 수의 군사로 미디안을 물리친 사사로, 실용적이고 적응력이 뛰어나며 위기 상황에서 뛰어난 능력을 발휘합니다.",
    image: "cartoon/gideon.jpg",
    verse: "여호와께서 그에게 이르시되 내가 반드시 너와 함께 하리니 네가 미디안 사람 치기를 한 사람을 치듯 하리라 - 사사기 6:16"
  },
  ESTP: {
    name: "삼손",
    desc: "대담한 행동가이자 즉흥적인 모험가입니다. 강인한 힘으로 블레셋과 싸운 사사로, 현재에 충실하며 실용적인 해결책을 선호합니다. 때로는 충동적이지만 위기 상황에서 뛰어난 능력을 발휘합니다.",
    image: "cartoon/samson.jpg",
    verse: "여호와의 영이 삼손에게 강하게 임하니 - 사사기 14:6"
  },
  ESTJ: {
    name: "여호수아",
    desc: "실행력 있는 지도자이자 체계적인 관리자입니다. 가나안 정복을 이끈 지도자로, 명확한 목표와 계획을 세우고 실행에 옮깁니다. 책임감이 강하고 전통과 질서를 중요시합니다.",
    image: "cartoon/joshua.jpg",
    verse: "오직 나와 내 집은 여호와를 섬기겠노라 - 여호수아 24:15"
  },
  ESFP: {
    name: "미리암",
    desc: "즐거운 공연자이자 열정적인 격려자입니다. 출애굽 후 춤과 노래로 하나님을 찬양한 모세의 누이로, 사교적이고 낙관적이며 현재의 즐거움을 중요시합니다.",
    image: "cartoon/miriam.jpg",
    verse: "모세의 누이 선지자 미리암이 손에 소고를 잡으매 모든 여인도 그를 따라 나오며 소고를 잡고 춤추니 - 출애굽기 15:20"
  },
  ESFJ: {
    name: "마르다",
    desc: "헌신적 보호자이자 따뜻한 돌봄의 인물입니다. 예수님과 제자들을 정성껏 섬겼으며, 타인의 필요에 민감하게 반응하고 실질적인 도움을 주는 것을 중요시합니다.",
    image: "cartoon/martha.jpg",
    verse: "마르다는 준비하는 일이 많아 마음이 분주한지라 - 누가복음 10:40"
  },
  ISFP: {
    name: "룻",
    desc: "평화로운 중재자이자 충성스러운 동반자입니다. 시어머니 나오미에게 충성을 다한 인물로, 조용하고 겸손하며 깊은 가치관을 가지고 있습니다. 현재에 충실하며 타인을 진심으로 배려합니다.",
    image: "cartoon/ruth.jpg",
    verse: "어머니의 백성이 나의 백성이 되고 어머니의 하나님이 나의 하나님이 되시리니 - 룻기 1:16"
  }
};

let current = 0;
let mbti = [];
let progress = 0;
let answers = []; // 사용자의 답변 기록

// 페이지 로드 시 실행
window.onload = function() {
  loadQuestion();
  updateProgress();
  
  // 뒤로가기 버튼 초기 상태 설정
  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.style.display = current === 0 ? "none" : "block";
  }
  
  // URL 파라미터에서 결과 불러오기
  loadResultFromUrl();
};

// 사용자 응답 처리
function answer(choice) {
  // 사용자 답변 저장
  answers.push(choice);
  
  // MBTI 유형 저장
  mbti.push(questions[current][choice.toLowerCase()].type);
  
  current++;
  progress = (current / questions.length) * 100;
  
  if (current < questions.length) {
    loadQuestion();
    updateProgress();
  } else {
    showResult();
  }
}

// 이전 질문으로 돌아가기
function goBack() {
  if (current > 0) {
    current--;
    // 마지막 답변과 MBTI 유형 제거
    answers.pop();
    mbti.pop();
    
    progress = (current / questions.length) * 100;
    loadQuestion();
    updateProgress();
  }
}

// 질문 로드
function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.q;
  document.getElementById("btnA").innerText = q.a.text;
  document.getElementById("btnB").innerText = q.b.text;
  document.getElementById("questionNumber").innerText = `${current + 1}/${questions.length}`;
  
  // 첫 번째 질문이면 뒤로가기 버튼 숨기기, 아니면 보이기
  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.style.display = current === 0 ? "none" : "block";
  }
  
  // 질문별 일러스트 표시 (있는 경우)
  if (q.illustration) {
    // 기존 일러스트 제거
    const oldIllustration = document.querySelector(".question-illustration");
    if (oldIllustration) {
      oldIllustration.remove();
    }
    
    // 새 일러스트 추가
    const img = document.createElement("img");
    img.src = `images/${q.illustration}`;
    img.alt = "질문 일러스트";
    img.className = "question-illustration";
    
    // 질문 위에 삽입
    const questionElement = document.getElementById("question");
    questionElement.parentNode.insertBefore(img, questionElement);
  }
}

// 진행 상태 업데이트
function updateProgress() {
  document.getElementById("progressBar").style.width = `${progress}%`;
}

// 결과 표시
function showResult() {
  // 정확한 MBTI 매칭
  let result;
  
  // MBTI 유형 결정 (각 지표별로 더 많이 선택된 것 기준)
  let e = 0, i = 0, n = 0, s = 0, f = 0, t = 0, j = 0, p = 0;
  
  for (let idx = 0; idx < mbti.length; idx++) {
    const char = mbti[idx];
    
    switch(char) {
      case 'E': e++; break;
      case 'I': i++; break;
      case 'N': n++; break;
      case 'S': s++; break;
      case 'F': f++; break;
      case 'T': t++; break;
      case 'J': j++; break;
      case 'P': p++; break;
    }
  }
  
  // 최종 MBTI 결정 - 동점일 경우 첫 번째 선택에 가중치 부여
  let finalMbti = '';
  finalMbti += (e > i) ? 'E' : ((e < i) ? 'I' : (mbti[0] === 'E' ? 'E' : 'I'));
  finalMbti += (n > s) ? 'N' : ((n < s) ? 'S' : (mbti[1] === 'N' ? 'N' : 'S'));
  finalMbti += (f > t) ? 'F' : ((f < t) ? 'T' : (mbti[2] === 'F' ? 'F' : 'T'));
  finalMbti += (j > p) ? 'J' : ((j < p) ? 'P' : (mbti[3] === 'J' ? 'J' : 'P'));
  
  // 결과 찾기
  if (results[finalMbti]) {
    result = results[finalMbti];
  } else {
    // 만약 결과가 없다면 (이론상 발생하지 않음) 가장 유사한 유형 찾기
    const similarTypes = findSimilarTypes(finalMbti);
    result = results[similarTypes[0]];
  }
  
  // 결과 화면 표시
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("resultTitle").innerText = `${result.name} 형 (${finalMbti})`;
  document.getElementById("resultDesc").innerText = result.desc;
  document.getElementById("resultVerse").innerText = result.verse;
  
  // 이미지가 있으면 표시
  if (result.image) {
    const imgElement = document.getElementById("resultImage");
    imgElement.src = `images/${result.image}`;
    imgElement.alt = result.name;
    document.getElementById("resultImageContainer").style.display = "block";
  }
  
  // 결과 저장 (URL 파라미터용)
  mbti = finalMbti;
}

// 가장 유사한 MBTI 유형 찾기
function findSimilarTypes(userType) {
  const availableTypes = Object.keys(results);
  
  // 유사도 점수 계산 (일치하는 글자 수)
  const typesWithScores = availableTypes.map(type => {
    let score = 0;
    for (let i = 0; i < 4; i++) {
      if (i < userType.length && type[i] === userType[i]) {
        score++;
      }
    }
    return { type, score };
  });
  
  // 점수 기준 내림차순 정렬
  typesWithScores.sort((a, b) => b.score - a.score);
  
  // 유형만 추출하여 반환
  return typesWithScores.map(item => item.type);
}

// 테스트 재시작
function restartTest() {
  current = 0;
  mbti = [];
  answers = [];
  progress = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
  updateProgress();
}

// 결과 공유
function shareResult() {
  // 공유 링크 생성
  const url = window.location.href.split('?')[0];
  const shareUrl = `${url}?mbti=${mbti}`;
  
  // 클립보드에 복사
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = shareUrl;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  
  alert("결과 링크가 클립보드에 복사되었습니다!");
}

// 결과 인쇄
function printResult() {
  window.print();
}

// URL 파라미터에서 결과 불러오기
function loadResultFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const mbtiParam = urlParams.get('mbti');
  
  if (mbtiParam && mbtiParam.length === 4) {
    mbti = mbtiParam;
    current = questions.length;
    showResult();
  }
}
