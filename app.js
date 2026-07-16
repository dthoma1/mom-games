const BASE="https://dthoma1.github.io/mom-games/games/";

/* =====================================================================
   PHASE 0 CONFIG — paste your real URLs/IDs here to switch each piece on.
   Leave a value as "" and that element stays hidden (nothing broken ships).
   The masthead promise line and the footer trust line are always on
   (they need no external service).
   ---------------------------------------------------------------------
   kofiUrl           Donate: your Ko-fi page,  e.g. "https://ko-fi.com/yourname"
   githubSponsorsUrl Donate: GitHub Sponsors,  e.g. "https://github.com/sponsors/dthoma1"
   newsletterUrl     Consumer email capture (Tally/Buttondown form URL)
   orgInquiryUrl     Institutional "For organizations" lead form URL  ← most important
   goatcounterCode   Privacy-first analytics: your GoatCounter subdomain,
                     e.g. "momsarcade" -> https://momsarcade.goatcounter.com
   ===================================================================== */
const CONFIG={
  kofiUrl:"",
  githubSponsorsUrl:"",
  newsletterUrl:"",
  orgInquiryUrl:"",
  goatcounterCode:"",
};
const BOOKS=[{"id": "macbook", "vol": "I", "tko": "맥북과 함께하는 첫 주", "ten": "Your First Week with Your MacBook", "subko": "손가락 쓰는 법부터 파일과 비밀번호까지", "suben": "From your fingertips to files and passwords", "blurbko": "맥북을 처음 켜는 순간부터 함께해요. 트랙패드로 손가락 쓰는 법, 창과 파일 정리, 비밀번호까지 — 하나씩, 천천히.", "blurben": "Everything from the first time you open the lid: using the trackpad with your fingers, arranging windows and files, and passwords — one gentle step at a time.", "c1": "#6366f1", "c2": "#8b93ff", "spine": "#0e1f3a", "parts": [{"tko": "1부 · 맥북에 오신 걸 환영해요", "ten": "Part 1 · Welcome to Your MacBook", "games": [{"key": "hardware", "url": "hardware-game/", "tko": "내 맥북 살펴보기", "ten": "Meet Your MacBook", "sko": "카메라·키보드·트랙패드·터치 아이디·옆면 구멍(USB-C·헤드폰)", "sen": "Camera, keyboard, trackpad, Touch ID & the ports (USB-C, headphone)"}, {"key": "trackpad", "url": "trackpad-game/", "tko": "탭과 트랙패드 연습", "ten": "Taps & Trackpad Practice", "sko": "손가락으로 톡·더블 탭·드래그·스크롤·확대까지 배우고 연습하기", "sen": "Tap, double-tap, drag, scroll, swipe and zoom with your fingers"}, {"key": "select", "url": "select-game/", "tko": "고르기 연습", "ten": "Selecting Practice", "sko": "선택하고·취소하고·다른 걸로 바꿔 고르기", "sen": "Select, deselect, and switch your choice"}, {"key": "window", "url": "window-game/", "tko": "창 정리 연습", "ten": "Window Practice", "sko": "창 옮기기·크기 바꾸기·드래그", "sen": "Move, resize, and drag windows"}, {"key": "menus", "url": "menus-game/", "tko": "메뉴 배우기", "ten": "Learn Menus", "sko": "숨은 메뉴 열고 닫기·오른쪽 클릭", "sen": "Open hidden menus & right-click"}, {"key": "controls", "url": "controls-game/", "tko": "화면 익히기", "ten": "Learn the Screen", "sko": "버튼·체크박스·스위치·드롭다운", "sen": "Buttons, checkboxes, switches, dropdowns"}, {"key": "dock", "url": "dock-game/", "tko": "독과 앱 관리 배우기", "ten": "The Dock & Managing Apps", "sko": "독·런치패드·앱 열고 완전히 종료하기", "sen": "Dock, Launchpad, opening & fully quitting apps"}, {"key": "install", "url": "install-game/", "tko": "앱 설치 배우기", "ten": "Installing Apps", "sko": "앱 내려받기·DMG 파일·안전하게 지우기", "sen": "Download apps, DMG files, safe removal"}]}, {"tko": "2부 · 글자와 파일 다루기", "ten": "Part 2 · Text & Files", "games": [{"key": "finder", "url": "finder-game/", "tko": "파인더 연습", "ten": "Finder Practice", "sko": "파인더로 파일·폴더 다루기", "sen": "Handle files & folders in Finder"}, {"key": "finder2", "url": "finder2-game/", "tko": "파인더 길찾기 (2편)", "ten": "Finder Navigation (Part 2)", "sko": "폴더 드나들기·삼각형으로 속 들여다보기", "sen": "Move through folders & peek with triangles"}, {"key": "files", "url": "files-game/", "tko": "파일과 폴더 배우기", "ten": "Files & Folders", "sko": "컴퓨터가 물건을 보관하는 방법", "sen": "How the computer stores your things"}, {"key": "folders", "url": "folders-game/", "tko": "특별한 폴더 배우기", "ten": "Special Folders", "sko": "다운로드·데스크탑·문서·휴지통의 역할", "sen": "Downloads, Desktop, Documents & Trash"}, {"key": "spotlight", "url": "spotlight-game/", "tko": "스팟라이트 배우기", "ten": "Spotlight Search", "sko": "앱·파일·계산까지 빠르게 검색하기", "sen": "Quickly find apps, files, even do math"}, {"key": "koreankb", "url": "koreankb-game/", "tko": "한국어 키보드 추가하기", "ten": "Add the Korean Keyboard", "sko": "한국어 입력 추가하고 영어 ↔ 한국어 전환하기", "sen": "Add Korean input & switch English ↔ Korean"}, {"key": "text", "url": "text-game/", "tko": "글자 다루기", "ten": "Working with Text", "sko": "글자 선택·복사·붙여넣기·되돌리기", "sen": "Select, copy, paste, and undo text"}, {"key": "keyboard", "url": "keyboard-game/", "tko": "단축키 배우기", "ten": "Keyboard Shortcuts", "sko": "복사·붙여넣기·되돌리기, 도우미 키", "sen": "Copy, paste, undo & helper keys"}]}, {"tko": "3부 · 꼭 알아야 할 개념들", "ten": "Part 3 · Key Concepts", "games": [{"key": "passwords", "url": "password-game/", "tko": "비밀번호 배우기", "ten": "Learn Passwords", "sko": "암호화·강한 비밀번호·비밀번호 관리자", "sen": "Encryption, strong passwords, password managers"}, {"key": "passwords2", "url": "password2-game/", "tko": "비밀번호 배우기 (2편)", "ten": "Passwords (Part 2)", "sko": "2단계 인증·문자 코드·앱 승인·모르는 요청 거부", "sen": "2-factor codes, app approvals, rejecting unknown requests"}, {"key": "passwords3", "url": "password3-game/", "tko": "비밀번호 배우기 (3편)", "ten": "Passwords (Part 3)", "sko": "패스키·지문/얼굴로 로그인·가짜 사이트 차단", "sen": "Passkeys, fingerprint/face login, blocking fake sites"}, {"key": "passwords4", "url": "password4-game/", "tko": "비밀번호 배우기 (4편)", "ten": "Passwords (Part 4)", "sko": "비밀번호 앱에서 만들고 다시 찾아보기", "sen": "Make & look up logins in the Passwords app"}, {"key": "autofill", "url": "autofill-game/", "tko": "자동 채우기란?", "ten": "What Is Autofill?", "sko": "저장된 비밀번호가 저절로 채워지는 법", "sen": "How saved passwords fill in for you"}]}]}, {"id": "browser", "vol": "II", "tko": "인터넷 기본 개념", "ten": "Internet Concepts", "subko": "웹·검색·이메일, 그리고 안전하게", "suben": "The web, search, email, and staying safe", "blurbko": "인터넷이 어떻게 움직이는지 기본부터 배워요. 사파리로 웹사이트를 열고, 검색하고, 이메일을 확인하고, 나쁜 속임수로부터 안전하게 지내는 법까지.", "blurben": "Learn how the internet works, from the basics. Open websites with Safari, search, check email, and stay safe from online tricks.", "c1": "#0ea5e9", "c2": "#4bc0f5", "spine": "#075985", "parts": [{"tko": "웹 서핑하고 안전하게 지내기", "ten": "Browsing & Staying Safe", "games": [{"key": "safari", "url": "safari-game/", "tko": "사파리 배우기", "ten": "Learn Safari", "sko": "주소창·탭·뒤로가기·즐겨찾기·글자 크게", "sen": "Address bar, tabs, back, bookmarks, bigger text"}, {"key": "search", "url": "search-game/", "tko": "검색 잘하기", "ten": "Search Well", "sko": "검색어 입력·광고 구별·좋은 검색어 고르기", "sen": "Type queries, spot ads, pick good search words"}, {"key": "mail", "url": "mail-game/", "tko": "이메일 배우기", "ten": "Learn Email", "sko": "메일 열기·답장·사진 넣기·정리하기", "sen": "Open, reply, add photos, organize mail"}, {"key": "scam", "url": "scam-game/", "tko": "사기 피하기", "ten": "Avoid Scams", "sko": "가짜 경고·수상한 링크·비밀번호 요구 알아채기", "sen": "Spot fake alerts, suspicious links & password requests"}, {"key": "tricks", "url": "tricks-game/", "tko": "속임수·피싱 알아채기", "ten": "Tricks & Phishing", "sko": "가짜 친척 전화·피싱 문자·사칭 알아채기", "sen": "Fake relative calls, phishing texts & impersonators"}, {"key": "privacy", "url": "privacy-game/", "tko": "내 정보 지키기", "ten": "Keeping Info Private", "sko": "개인 정보란?·공개로 올리지 않기·손주 사진 안전하게", "sen": "What's personal info, why not to post it, sharing photos safely"}, {"key": "undo", "url": "undo-game/", "tko": "실수해도 괜찮아", "ten": "Mistakes Are OK", "sko": "되돌리기·휴지통 되살리기·닫은 창 다시 열기", "sen": "Undo, restore from Trash, reopen closed windows"}]}]}, {"id": "ai", "vol": "III", "tko": "AI란 무엇인가", "ten": "What Is AI?", "subko": "챗봇과 친해지고, AI로 만들어 보기", "suben": "Get comfy with chatbots and make things with AI", "blurbko": "AI(챗봇)에게 말을 거는 법부터, 노래와 영상을 만들고, ‘모델’이 무엇인지까지. 무서워하지 않아도 돼요 — AI는 예시로 공부한 똑똑한 도우미예요.", "blurben": "From talking to a chatbot, to making songs and videos, to understanding what a ‘model’ is. Nothing to fear — AI is just a clever helper that studied lots of examples.", "c1": "#7c3aed", "c2": "#a855f7", "spine": "#2a0f52", "parts": [{"tko": "1부 · AI로 만들기", "ten": "Part 1 · Making with AI", "games": [{"key": "chatbot", "url": "chatbot-game/", "tko": "챗봇이 뭐예요?", "ten": "What Is a Chatbot?", "sko": "훈련 데이터로 똑똑해진 AI·내 정보는 조심해서", "sen": "How AI got smart from training data — and being careful with your info"}, {"key": "prompts", "url": "prompts-game/", "tko": "좋은 부탁 하기", "ten": "Ask Clearly", "sko": "막연한 부탁 vs 자세한 부탁·더 좋은 답 얻기", "sen": "Vague vs. detailed asks — get better answers"}, {"key": "song", "url": "song-game/", "tko": "노래 만들기", "ten": "Make a Song", "sko": "누구에게·무엇을·다시 부탁하며 노래 완성하기", "sen": "Choose who & what, then refine — make a song!"}, {"key": "audio", "url": "audio-game/", "tko": "노래를 소리로 듣기", "ten": "Hear Your Song", "sko": "ChatGPT 가사를 Suno 같은 음악 앱으로 듣기", "sen": "Turn ChatGPT lyrics into real music with an app like Suno"}, {"key": "canva", "url": "canva-game/", "tko": "캔바로 AI 영상 만들기", "ten": "Make an AI Video in Canva", "sko": "보고 싶은 장면을 글로 적으면 AI가 영상을 만들어요", "sen": "Describe a scene in words — AI turns it into a video"}, {"key": "aimodels", "url": "ai-models-game/", "tko": "AI 모델이 뭐예요?", "ten": "What Is an AI Model?", "sko": "모델은 예시로 공부한 ‘뇌’·왜 영상 모델은 다를까", "sen": "A model is a ‘brain’ that studied examples — why video models differ"}, {"key": "llm", "url": "llm-game/", "tko": "AI는 계산기와 어떻게 다를까요?", "ten": "How Is AI Different from a Calculator?", "sko": "옛날 컴퓨터의 규칙 vs AI의 ‘다음 단어 추측’", "sen": "Old-computer rules vs. AI guessing the next word"}, {"key": "trust", "url": "trust-game/", "tko": "AI를 믿어도 될까요?", "ten": "Can We Trust AI?", "sko": "확인하기·자신 있게 틀리기·편향은 왜 생길까", "sen": "Double-check it, confidently wrong, why bias happens"}]}, {"tko": "2부 · 영상 편집하고 나누기", "ten": "Part 2 · Editing & Sharing Video", "games": [{"key": "videoedit", "url": "video-editor-game/", "tko": "영상 편집기 사용하기", "ten": "Using a Video Editor", "sko": "클립·자르기·순서·내보내기가 뭔지 배우기", "sen": "Learn what clips, trimming, order, and exporting mean"}, {"key": "ytupload", "url": "youtube-game/", "tko": "유튜브에 영상 올리기", "ten": "Upload to YouTube", "sko": "계정·올리기·공유·나쁜 댓글 다루기·삭제", "sen": "Account, upload, share, handling mean comments, delete"}]}]}, {"id": "internet", "vol": "IV", "tko": "인터넷의 역사", "ten": "The History of the Internet", "subko": "전선 몇 가닥에서 온 세상을 잇기까지", "suben": "From a few wires to connecting the whole world", "blurbko": "인터넷은 어떻게 태어났을까요? 이 책은 곧 나와요 — 조금만 기다려 주세요! 😊", "blurben": "How was the internet born? This book is coming soon — hang tight! 😊", "c1": "#0fb5b0", "c2": "#45d3c2", "spine": "#0a3838", "soon": true, "toc": [["편지에서 전선으로", "From letters to wires"], ["작은 조각(패킷)으로 보내기", "Sending in little pieces (packets)"], ["‘웹’과 첫 브라우저", "The ‘web’ and the first browser"], ["검색의 시대", "The age of search"], ["손안의 인터넷 · 스마트폰", "The internet in your hand"]]}, {"id": "companies", "vol": "V", "tko": "거대 기술 회사의 역사", "ten": "The History of Major Technology Companies", "subko": "우리가 매일 쓰는 앱은 어떻게 시작됐을까", "suben": "How the apps we use every day began", "blurbko": "작은 아이디어에서 시작한 회사들의 이야기예요. 유튜브, 인스타그램, 카카오, 네이버 — 어떻게 시작해서 세상을 바꿨는지 함께 들어봐요.", "blurben": "Stories of companies that started from tiny ideas. YouTube, Instagram, Kakao, and Naver — how they began and changed the world.", "c1": "#fb8c3c", "c2": "#f9a94b", "spine": "#5c1f0c", "parts": [{"tko": "이야기 모음", "ten": "The Stories", "games": [{"key": "youtube", "url": "youtube-story-game/", "tko": "유튜브 이야기", "ten": "The YouTube Story", "sko": "세 친구·첫 영상·구글이 사기까지 + 퀴즈", "sen": "Three friends, the first video, Google's buyout — with a quiz"}, {"key": "instagram", "url": "instagram-game/", "tko": "인스타그램 이야기", "ten": "The Instagram Story", "sko": "복잡한 앱에서 사진 하나만 남기기까지 + 퀴즈", "sen": "From a busy app to just photos — with a quiz"}, {"key": "kakao", "url": "kakao-game/", "tko": "카카오톡 이야기", "ten": "The KakaoTalk Story", "sko": "공짜 메시지가 온 나라의 앱이 되기까지 + 퀴즈", "sen": "How free messages became a nation's app — with a quiz"}, {"key": "naver", "url": "naver-game/", "tko": "네이버 이야기", "ten": "The Naver Story", "sko": "초록 검색창·지식iN·한국의 구글 + 퀴즈", "sen": "The green search box, Knowledge iN, Korea's Google — with a quiz"}]}]}, {"id": "design", "vol": "VII", "tko": "그래픽 디자인과 예술", "ten": "Graphic Design & Art", "subko": "캔바·포토샵의 기본기 — 도형을 다루는 법", "suben": "The basics of Canva & Photoshop — how to handle shapes", "blurbko": "캔바로 카드나 포스터를 만들 때 꼭 필요한 기본기를 배워요. 도형을 선택하고, 크기를 바꾸고, 돌리고, 겹쳐 쌓는 법 — 포토피아·포토샵에서도 거의 똑같아요.", "blurben": "Learn the essentials for making cards and posters in Canva. Select shapes, resize, rotate, and stack them — it works almost the same in Photopea and Photoshop.", "c1": "#a855f7", "c2": "#c471ed", "spine": "#3b0a5c", "parts": [{"tko": "기본기", "ten": "The Basics", "games": [{"key": "shapes", "url": "shapes-game/", "tko": "도형 다루기", "ten": "Working with Shapes", "sko": "선택 · 이동 · 크기 · 늘이기 · 회전", "sen": "Select, move, resize, stretch, rotate"}, {"key": "layers", "url": "layers-game/", "tko": "겹치기와 편집 단계", "ten": "Layers & Editing Levels", "sko": "한 번 클릭 · 두 번 클릭 · 쌓기 순서", "sen": "One click, double-click, stacking order"}, {"key": "templates", "url": "templates-game/", "tko": "템플릿 사용하기", "ten": "Using Templates", "sko": "미리 만든 디자인 고르고 글자·사진 바꾸기", "sen": "Pick a ready-made design & swap text/photo"}]}, {"tko": "정리와 파일 관리", "ten": "Organizing & Files", "games": [{"key": "organize", "url": "organize-game/", "tko": "캔바 정리하기", "ten": "Getting Organized in Canva", "sko": "홈·프로젝트·폴더로 사진 정리 (준희 이야기)", "sen": "Home, Projects & folders — Junhee's story"}, {"key": "images", "url": "images-game/", "tko": "비트맵과 벡터", "ten": "Bitmap & Vector", "sko": "점 그림 vs 벡터 · 흐려짐 · 파일 형식(jpg·png·svg)", "sen": "Dot pictures vs vector, blur, file types"}, {"key": "export", "url": "export-game/", "tko": "내보내기와 파일 크기", "ten": "Exporting & File Size", "sko": "파일로 저장 · 형식 고르기 · 용량 줄이기", "sen": "Save as a file, pick a format, shrink the size"}]}]}, {"id": "social", "vol": "VI", "tko": "소셜 웹의 역사", "ten": "The History of the Social Web", "subko": "사람과 사람을 잇는 인터넷 이야기", "suben": "The internet that connects people to people", "blurbko": "게시판에서 시작해 오늘의 SNS까지, 사람들이 온라인에서 어떻게 이어졌는지 알아봐요. 이 책은 곧 나와요! 😊", "blurben": "From message boards to today's social media — how people connected online. This book is coming soon! 😊", "c1": "#ec4899", "c2": "#f472b6", "spine": "#5e1030", "soon": true, "toc": [["첫 온라인 모임 · 게시판", "The first gatherings · message boards"], ["친구 찾기 · 초기 SNS", "Finding friends · early social sites"], ["사진과 영상으로 나누기", "Sharing with photos & video"], ["댓글·좋아요·팔로우", "Comments, likes, and follows"], ["온라인에서 건강하게 지내기", "Staying healthy online"]]}, {"id": "computers", "vol": "VIII", "tko": "생각하는 돌, 컴퓨터", "ten": "Computers: The Thinking Rock", "subko": "돌에게 생각을 가르친 이야기", "suben": "How we taught a rock to think", "blurbko": "컴퓨터는 사실 아주 똑똑해진 돌이에요. 모래(실리콘)에서 시작해 전기와 0과 1로 어떻게 ‘생각’하게 됐는지, 그리고 그 안에는 어떤 부품이 들어 있는지 하나씩 알아봐요.", "blurben": "A computer is really just a very clever rock. Starting from sand (silicon), learn how electricity and 0s and 1s let it ‘think’ — and what parts live inside it.", "c1": "#64748b", "c2": "#94a3b8", "spine": "#1e293b", "parts": [{"tko": "돌에서 생각까지", "ten": "From Rock to Thought", "games": [{"key": "rock", "url": "rock-game/", "tko": "컴퓨터는 왜 ‘생각하는 돌’일까요?", "ten": "Why Is a Computer a ‘Thinking Rock’?", "sko": "실리콘·전기·0과 1의 마법으로 생각하는 법", "sen": "Silicon, electricity & the magic of 0s and 1s"}, {"key": "inside", "url": "inside-game/", "tko": "컴퓨터 안에는 뭐가 있을까요?", "ten": "What's Inside Your Computer?", "sko": "CPU·RAM·저장장치·배터리·메인보드 찾기", "sen": "Find the CPU, RAM, storage, battery & motherboard"}]}]}];

/* stable permalink slug for each book */
const SLUG={
  macbook:"macbook-survival-guide",
  browser:"what-is-a-web-browser",
  ai:"what-is-ai",
  internet:"the-history-of-the-internet",
  companies:"the-history-of-major-technology-companies",
  social:"the-history-of-the-social-web",
  design:"graphic-design-and-art",
  computers:"how-we-taught-a-rock-to-think",
};

/* When served from a book folder, index.html sets window.__BOOK to the id.
   ROOT is the relative path back to the shelf root ("" at root, "../" in a book folder). */
const CUR = (typeof window.__BOOK==="string") ? window.__BOOK : null;
const ROOT = CUR ? "../" : "";

/* Language can be shared via ?lang=en / ?lang=ko in the URL. A URL param wins over
   saved preference, so a shared English link always opens in English. */
function urlLang(){ try{const v=new URLSearchParams(location.search).get("lang");
  return (v==="en"||v==="ko")?v:null;}catch(e){return null;} }
let LANG = urlLang() || localStorage.getItem("momLang") || "ko";
try{ localStorage.setItem("momLang",LANG); }catch(e){}
/* Keep the language in every internal link so navigating (and re-sharing from any
   page) preserves it. */
function withLang(u){ return u + (u.indexOf("?")>=0?"&":"?") + "lang=" + LANG; }
const T=(o,k)=>o[(k||"")+ (LANG==="ko"?"ko":"en")];
const DONE=k=>{try{return localStorage.getItem("momHub:done:"+k)==="1";}catch(e){return false;}};

const UI={
  kicker:{ko:"엄마를 위한 배움 게임",en:"Learning games for Mom"},
  title:{ko:"엄마의 오락실",en:"Mom's\u00A0Arcade"},
  lede:{ko:"마음에 드는 앱을 하나 골라 눌러 보세요. 천천히, 하나씩 배워요.",
        en:"Tap an app to start playing — learn gently, one game at a time."},
  foot:{ko:"엄마를 위해 사랑으로 만들었어요 💛",en:"Made with love, for Mom 💛"},
  back:{ko:"‹ 오락실로 돌아가기",en:"‹ Back to the arcade"},
  soon:{ko:"곧 나와요",en:"Coming soon"},
  soonBanner:{ko:"이 책은 아직 준비 중이에요. 아래는 앞으로 담길 이야기예요 👇",
              en:"This book is still being written. Here's what's coming 👇"},
  lessonsDone:{ko:(d,t)=>`${t}개 중 ${d}개 완료`,en:(d,t)=>`${d} of ${t} done`},
  allDone:{ko:"모두 완료! 🎉",en:"All done! 🎉"},
  start:{ko:"열기 ▶",en:"Open ▶"},
  chapters:{ko:(n)=>`${n}개의 수업`,en:(n)=>`${n} lessons`},
  contents:{ko:"목차",en:"Contents"},
  supportKofi:{ko:"☕ 커피 한 잔 후원하기",en:"☕ Buy me a coffee"},
  supportSponsors:{ko:"💗 GitHub으로 후원하기",en:"💗 Sponsor on GitHub"},
  newsletterCta:{ko:"✉️ 새 수업 소식 받기",en:"✉️ Get new-lesson updates"},
  orgCta:{ko:"🏛️ 기관·단체용 문의",en:"🏛️ For libraries & organizations"},
};

function bookGamesCount(b){ return b.soon?0:b.parts.reduce((s,p)=>s+p.games.length,0); }function bookDoneCount(b){ if(b.soon) return 0;
  return b.parts.reduce((s,p)=>s+p.games.filter(g=>DONE(g.key)).length,0); }

/* Placeholder app-icon glyphs (emoji for now; swap for real art later). */
const ICONS={macbook:"💻",browser:"🧭",ai:"🤖",internet:"🌐",companies:"🏢",social:"💬",design:"🎨",computers:"🪨"};

/* Per-lesson glyphs (emoji placeholders for now; swap for real art later). */
const GAMEICON={
  hardware:"💻",trackpad:"🖐️",select:"🔲",window:"🪟",menus:"📋",controls:"🎛️",dock:"📌",install:"📦",
  finder:"🗂️",finder2:"🗺️",files:"📄",folders:"📁",spotlight:"🔦",koreankb:"🇰🇷",text:"📝",keyboard:"⌨️",
  passwords:"🔒",passwords2:"🔐",passwords3:"🔑",passwords4:"🗝️",autofill:"🪄",
  safari:"🧭",search:"🔎",mail:"✉️",scam:"⚠️",tricks:"🎭",privacy:"🤫",undo:"↩️",
  chatbot:"💬",prompts:"💭",song:"🎵",audio:"🎧",canva:"🎬",aimodels:"🧠",videoedit:"✂️",ytupload:"📺",
  llm:"🎲",trust:"⚖️",
  youtube:"▶️",instagram:"📸",kakao:"🗨️",naver:"🟢",
  shapes:"🔷",layers:"🗂️",organize:"📁",templates:"🧩",images:"🖼️",export:"📤",
  rock:"🪨",inside:"🔩",
};

function tileInner(b){
  return `<div class="tile ${b.soon?'soon':''}" style="--c1:${b.c1};--c2:${b.c2}">
    ${b.soon?`<div class="soonTag">${UI.soon[LANG]}</div>`:''}
    <div class="glyph">${ICONS[b.id]||"📱"}</div>
  </div>`;
}

/* ---- Phase 0: support / email-capture footer + privacy analytics ---- */
function footLink(url,label){
  return url ? `<a class="footLink" href="${url}" target="_blank" rel="noopener">${label}</a>` : "";
}
function buildFooter(){
  const links=[
    footLink(CONFIG.kofiUrl, UI.supportKofi[LANG]),
    footLink(CONFIG.githubSponsorsUrl, UI.supportSponsors[LANG]),
    footLink(CONFIG.newsletterUrl, UI.newsletterCta[LANG]),
    footLink(CONFIG.orgInquiryUrl, UI.orgCta[LANG]),
  ].filter(Boolean).join("");
  return `<div class="footLove">${UI.foot[LANG]}</div>`+
    (links?`<div class="footLinks">${links}</div>`:"");
}
/* GoatCounter: cookieless, no personal data. Loads only when configured. */
function loadAnalytics(){
  if(!CONFIG.goatcounterCode || window.__gcLoaded) return;
  window.__gcLoaded=true;
  const s=document.createElement("script");
  s.async=true; s.src="//gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter","https://"+CONFIG.goatcounterCode+".goatcounter.com/count");
  document.head.appendChild(s);
}

function renderShelf(){
  document.getElementById("kicker").textContent=UI.kicker[LANG];
  document.getElementById("mastTitle").textContent=UI.title[LANG];
  document.getElementById("mastLede").textContent=UI.lede[LANG];
  document.getElementById("foot").innerHTML=buildFooter();
  const shelf=document.getElementById("shelf"); shelf.innerHTML="";
  BOOKS.forEach(b=>{
    const a=document.createElement("a"); a.className="bookWrap";
    a.href=withLang(ROOT+SLUG[b.id]+"/");
    let html=tileInner(b);
    html+=`<div class="label">${T(b,'t')}</div>`;
    html+=`<div class="sublabel">${T(b,'sub')}</div>`;
    if(!b.soon){
      const tot=bookGamesCount(b), d=bookDoneCount(b);
      const txt = d>0 ? (d>=tot?UI.allDone[LANG]:UI.lessonsDone[LANG](d,tot)) : UI.chapters[LANG](tot);
      const style = d===0 ? 'style="color:var(--soft);background:#eef2ff;border-color:var(--line);"' : '';
      html+=`<div class="doneChip" ${style}>${txt}</div>`;
    }
    a.innerHTML=html;
    shelf.appendChild(a);
  });
}

function renderDetail(id){
  const b=BOOKS.find(x=>x.id===id); if(!b) return;
  const back=document.getElementById("backBtn");
  back.textContent=UI.back[LANG]; back.setAttribute("href",withLang(ROOT));
  document.getElementById("foot2").innerHTML=buildFooter();
  document.title = T(b,'t')+" · "+UI.kicker[LANG];

  const hero=document.getElementById("hero"); hero.innerHTML="";
  const cover=document.createElement("div"); cover.innerHTML=tileInner(b); hero.appendChild(cover.firstElementChild);
  const tx=document.createElement("div"); tx.className="htext";
  const tot=bookGamesCount(b), d=bookDoneCount(b);
  tx.innerHTML=`<div class="hvol">Vol. ${b.vol}</div>
    <h2>${T(b,'t')}</h2>
    <div class="hsub">${T(b,'sub')}</div>
    <div class="hblurb">${T(b,'blurb')}</div>`;
  if(!b.soon){
    const pct=tot?Math.round(d/tot*100):0;
    tx.innerHTML+=`<div class="progWrap">
      <div class="progBar"><div class="progFill" style="width:${pct}%"></div></div>
      <div class="progText">${d>=tot&&tot>0?UI.allDone[LANG]:UI.lessonsDone[LANG](d,tot)}</div></div>`;
  }
  hero.appendChild(tx);

  const toc=document.getElementById("toc"); toc.innerHTML="";
  if(b.soon){
    const banner=document.createElement("div"); banner.className="soonBanner";
    banner.textContent=UI.soonBanner[LANG]; toc.appendChild(banner);
    const head=document.createElement("div"); head.className="partHead"; head.textContent=UI.contents[LANG];
    toc.appendChild(head);
    b.toc.forEach((ch,i)=>{
      const row=document.createElement("div"); row.className="chapter locked";
      row.innerHTML=`<div class="chNum">${i+1}</div><div class="chBody"><div class="chTitle">${LANG==='ko'?ch[0]:ch[1]}</div></div>`;
      toc.appendChild(row);
    });
  } else {
    b.parts.forEach(part=>{
      const head=document.createElement("div"); head.className="partHead"; head.textContent=T(part,'t');
      toc.appendChild(head);
      const grid=document.createElement("div"); grid.className="lessonGrid";
      part.games.forEach(g=>{
        const a=document.createElement("a"); a.className="lessonTile"+(DONE(g.key)?" done":"");
        a.href=BASE+g.url;
        a.style.setProperty("--c1",b.c1); a.style.setProperty("--c2",b.c2);
        a.title=(LANG==='ko'?g.sko:g.sen);
        a.innerHTML=`<div class="lIcon"><span class="lGlyph">${GAMEICON[g.key]||"🎮"}</span>${DONE(g.key)?'<span class="lDone">✓</span>':''}</div>
          <div class="lName">${LANG==='ko'?g.tko:g.ten}</div>`;
        grid.appendChild(a);
      });
      toc.appendChild(grid);
    });
  }
}

function render(){
  if(CUR){
    document.getElementById("shelfView").style.display="none";
    document.getElementById("detail").style.display="block";
    renderDetail(CUR);
  } else {
    document.getElementById("detail").style.display="none";
    document.getElementById("shelfView").style.display="block";
    renderShelf();
  }
}

function setLang(l){ LANG=l; localStorage.setItem("momLang",l);
  try{const u=new URL(location.href); u.searchParams.set("lang",l); history.replaceState(null,"",u);}catch(e){}
  document.documentElement.lang=l;
  document.querySelectorAll("#langToggle button").forEach(x=>x.classList.toggle("on",x.dataset.l===l));
  render();
}

document.querySelectorAll("#langToggle button").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.l)));
document.documentElement.lang=LANG;
try{const u=new URL(location.href); u.searchParams.set("lang",LANG); history.replaceState(null,"",u);}catch(e){}
document.querySelectorAll("#langToggle button").forEach(x=>x.classList.toggle("on",x.dataset.l===LANG));
loadAnalytics();
render();
