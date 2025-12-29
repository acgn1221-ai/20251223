let bgImage;
let bgImage2; // 新增：第二背景
let bgImage3; // 新增：第三背景
let bgImage4; // 新增：第四背景 (結算畫面)
let portalImage; // 新增：傳送門圖片
let currentBgState = 1; // 新增：當前背景狀態 (1 或 2)
let spritesheetStop;
let spritesheetRun;
let spritesheetJump;
let spritesheetFight;
let spritesheetFight2; // 新增：第二種攻擊動畫
let spritesheetNewChar; // 新增：新角色的 spritesheet
let quizData; // 修改：存放從新 CSV 讀取的測驗資料
let quizDataProg; // 新增：程式設計題庫
let quizDataPsych; // 新增：教育心理學題庫
let spritesheetLeftCharCorrect; // 新增：左邊角色答對時的動畫
let spritesheetLeftCharIncorrect; // 新增：左邊角色答錯時的動畫
let spritesheetLeftCharHurt; // 新增：左邊角色受擊動畫
let spritesheetRightCharHurtNew; // 新增：右邊角色新的受擊動畫
let spritesheetRollChar; // 新增：右邊滾動角色的 spritesheet
let spritesheetJumpChar; // 新增：右邊角色跳躍的 spritesheet
let spritesheetHurtChar; // 新增：右邊角色受擊的 spritesheet
let spritesheetNewCharScene2; // 新增：第二場景的新角色
let spritesheetNewCharScene2Top; // 新增：第二場景上方的角色
let spritesheetNewCharScene2Right; // 新增：第二場景右邊的角色
let spritesheetNewCharScene2RightJump; // 新增：第二場景右邊角色的跳躍圖片
let spritesheetNewCharScene2RightIncorrect; // 新增：第二場景右邊角色答錯反應圖片
let spritesheetNewCharScene2Correct; // 新增：第二場景左邊角色答對反應圖片
let spritesheetNewCharScene2Incorrect; // 新增：第二場景左邊角色答錯反應圖片
let spritesheetNewCharScene2RightCelebration; // 新增：第二場景右邊角色慶祝圖片
let spritesheetNewCharScene2RightHurt; // 新增：第二場景右邊角色受擊圖片
let spritesheetNewCharScene2LeftHurt; // 新增：第二場景左邊角色受擊圖片
let spritesheetNewCharScene1; // 新增：第一場景右邊角色前面的新角色
let spritesheetNewCharScene1Incorrect; // 新增：第一場景新角色答錯反應圖片
let spritesheetPetUnicornReaction; // 新增：獨角獸彩蛋反應圖片
let spritesheetEndChar; // 新增：結算畫面新角色圖片
let specialEffectsImage; // 新增：答錯特效圖片
let specialEffects2Image; // 新增：獎盃特效圖片
let bgMusic1; // 新增：背景音樂1
let bgMusic2; // 新增：背景音樂2
let bgMusic3; // 新增：背景音樂3
let soundKirby; // 新增：卡比音效
let soundJojo; // 新增：jojo音效
let soundDoraemon; // 新增：哆啦A夢音效
let soundMiku; // 新增：miku音效
let soundMickey; // 新增：mickey mouse音效
let soundEffect1; // 新增：答錯特效音效
let petSpritesheets = []; // 新增：寵物動畫圖陣列
let startButton; // 新增：開始遊戲按鈕
let restartButton; // 新增：重新開始按鈕
let muteButton; // 新增：靜音按鈕
let isMuted = false; // 新增：靜音狀態
let settingsButton; // 新增：設定按鈕
let menuContinueButton; // 新增：選單-繼續遊戲
let menuRestartButton; // 新增：選單-重新開始
let menuInstructionsButton; // 新增：選單-遊戲說明
let isSettingsOpen = false; // 新增：設定選單是否開啟
let isShowingInstructions = false; // 新增：是否顯示遊戲說明
let modeButtonProg; // 新增：程式設計模式按鈕
let modeButtonPsych; // 新增：教育心理學模式按鈕
let btnA, btnB, btnC, btnD; // 新增：選擇題按鈕

// 先給個預設值，真正的幀寬會在 setup() 根據圖片計算
let frameWidthStop = 78; // 近似 548 / 7
let frameHeightStop = 102;
let frameWidthRun = 126; // 近似 2389 / 19
let frameHeightRun = 110;
let frameWidthJump = 68; // 近似 675 / 10
let frameHeightJump = 148;
let frameWidthFight = 190; // 近似 10825 / 57
let frameHeightFight = 225;
let frameWidthFight2; // 新增
let frameHeightFight2; // 新增
let frameWidthNewChar; // 新增：新角色的幀寬
let frameHeightNewChar; // 新增：新角色的幀高
let frameWidthLeftCharCorrect; // 新增
let frameHeightLeftCharCorrect; // 新增
let frameWidthLeftCharIncorrect; // 新增
let frameHeightLeftCharIncorrect; // 新增
let frameWidthLeftCharHurt; // 新增
let frameHeightLeftCharHurt; // 新增
let frameWidthRightCharHurtNew; // 新增
let frameHeightRightCharHurtNew; // 新增
let frameWidthRollChar; // 新增：滾動角色的幀寬
let frameHeightRollChar; // 新增：滾動角色的幀高
let frameWidthJumpChar; // 新增：右邊角色跳躍的幀寬
let frameHeightJumpChar; // 新增：右邊角色跳躍的幀高
let frameWidthHurtChar; // 新增：右邊角色受擊的幀寬
let frameHeightHurtChar; // 新增：右邊角色受擊的幀高
let frameWidthNewCharScene2; // 新增
let frameHeightNewCharScene2; // 新增
let frameWidthNewCharScene2Top; // 新增
let frameHeightNewCharScene2Top; // 新增
let frameWidthNewCharScene2Right; // 新增
let frameHeightNewCharScene2Right; // 新增
let frameWidthNewCharScene2RightJump; // 新增
let frameHeightNewCharScene2RightJump; // 新增
let frameWidthNewCharScene2RightIncorrect; // 新增
let frameHeightNewCharScene2RightIncorrect; // 新增
let frameWidthNewCharScene2Correct; // 新增
let frameHeightNewCharScene2Correct; // 新增
let frameWidthNewCharScene2Incorrect; // 新增
let frameHeightNewCharScene2Incorrect; // 新增
let frameWidthNewCharScene2RightCelebration; // 新增
let frameHeightNewCharScene2RightCelebration; // 新增
let frameWidthNewCharScene2RightHurt; // 新增
let frameHeightNewCharScene2RightHurt; // 新增
let frameWidthNewCharScene2LeftHurt; // 新增
let frameHeightNewCharScene2LeftHurt; // 新增
let frameWidthNewCharScene1; // 新增
let frameHeightNewCharScene1; // 新增
let frameWidthNewCharScene1Incorrect; // 新增
let frameHeightNewCharScene1Incorrect; // 新增
let frameWidthPetUnicornReaction; // 新增
let frameHeightPetUnicornReaction; // 新增
let frameWidthEndChar; // 新增
let frameHeightEndChar; // 新增
const totalFramesNewChar = 6; // 新增：新角色的總幀數
const totalFramesFight2 = 28; // 新增：第二種攻擊動畫總幀數
const totalFramesLeftCharCorrect = 20; // 新增：答對動畫總幀數
const totalFramesLeftCharIncorrect = 3; // 新增：答錯動畫總幀數
const totalFramesLeftCharHurt = 8; // 新增：左邊角色受擊動畫幀數
const totalFramesRightCharHurtNew = 11; // 新增：右邊角色新受擊動畫幀數
const totalFramesRollChar = 9; // 新增：滾動角色的總幀數
const totalFramesJumpChar = 5; // 新增：右邊角色跳躍的總幀數
const totalFramesHurtChar = 16; // 新增：右邊角色受擊的總幀數
const totalFramesNewCharScene2 = 5; // 新增：第二場景新角色總幀數
const totalFramesNewCharScene2Top = 12; // 新增：第二場景上方角色總幀數
const totalFramesNewCharScene2Right = 8; // 新增：第二場景右邊角色總幀數
const totalFramesNewCharScene2RightJump = 9; // 新增：第二場景右邊角色跳躍總幀數
const totalFramesNewCharScene2RightIncorrect = 3; // 新增：第二場景右邊角色答錯反應總幀數
const totalFramesNewCharScene2Correct = 17; // 新增：第二場景左邊角色答對反應總幀數
const totalFramesNewCharScene2Incorrect = 10; // 新增：第二場景左邊角色答錯反應總幀數
const totalFramesNewCharScene2RightCelebration = 5; // 新增：第二場景右邊角色慶祝總幀數
const totalFramesNewCharScene2RightHurt = 8; // 新增：第二場景右邊角色受擊總幀數
const totalFramesNewCharScene2LeftHurt = 10; // 新增：第二場景左邊角色受擊總幀數
const totalFramesNewCharScene1 = 3; // 新增：第一場景新角色總幀數
const totalFramesNewCharScene1Incorrect = 17; // 新增：第一場景新角色答錯反應總幀數
const totalFramesPetUnicornReaction = 17; // 修改：獨角獸彩蛋反應總幀數 (5 -> 17)
const totalFramesEndChar = 19; // 新增：結算畫面新角色總幀數
let isRightCharReacting = false; // 新增：右邊角色是否在反應
let isRightCharHurt = false; // 新增：右邊角色是否被擊中
let isTopCharScene2Defeated = false; // 新增：第二場景上方角色是否被擊敗
let isTopCharDying = false; // 新增：第二場景上方角色是否瀕死
let isTopCharHurt = false; // 新增：第二場景上方角色是否受傷
let topCharHurtTimer = 0; // 新增：受傷閃爍計時器
let explosions = []; // 新增：爆炸特效陣列

let isLeftCharHurt = false; // 新增：左邊角色是否被擊中
let leftCharAnimState = 'idle'; // 新增：左邊角色的動畫狀態 'idle', 'correct', 'incorrect'
let gameState = 'start'; // 新增：遊戲狀態 'start' 或 'playing'
let currentFrame = 0;
let currentFrameNewChar = 0; // 新增：新角色的當前幀
let currentFrameRollChar = 0; // 新增：滾動角色的當前幀
let currentFrameHurtChar = 0; // 新增：右邊角色受擊的當前幀
let currentFrameNewCharScene2 = 0; // 新增：第二場景新角色的當前幀
let currentFrameNewCharScene2Top = 0; // 新增：第二場景上方角色的當前幀
let currentFrameNewCharScene2Right = 0; // 新增：第二場景右邊角色的當前幀
let currentFrameNewCharScene2RightJump = 0; // 新增：第二場景右邊角色跳躍的當前幀
let currentFrameNewCharScene2RightIncorrect = 0; // 新增：第二場景右邊角色答錯反應的當前幀
let currentFrameNewCharScene2RightCelebration = 0; // 新增：第二場景右邊角色慶祝的當前幀
let currentFrameNewCharScene2RightHurt = 0; // 新增：第二場景右邊角色受擊的當前幀
let currentFrameNewCharScene2LeftHurt = 0; // 新增：第二場景左邊角色受擊的當前幀
let isScene2RightCharHurt = false; // 新增：第二場景右邊角色是否受擊
let isScene2LeftCharHurt = false; // 新增：第二場景左邊角色是否受擊
let currentFrameNewCharScene1 = 0; // 新增：第一場景新角色的當前幀
let currentFrameNewCharScene1Incorrect = 0; // 新增：第一場景新角色答錯反應的當前幀
let currentFramePetUnicornReaction = 0; // 新增：獨角獸彩蛋反應當前幀
let currentFrameEndChar = 0; // 新增：結算畫面新角色當前幀
let lastAnswerWasIncorrect = false; // 新增：紀錄上一次回答是否錯誤
let lastIncorrectFeedback = ''; // 新增：紀錄上一次錯誤的回饋訊息
let isChoosingReward = false; // 新增：是否正在選擇獎勵
let scene1RewardClaimed = false; // 新增：是否已領取第一場景獎勵
let hasShield = false; // 新增：是否有盾牌
let attackPower = 1; // 新增：攻擊力
let topCharHealth = 3; // 新增：第二場景上方怪物血量
const MAX_HEALTH = 5; // 新增：最大生命值
let isTeleporting = false; // 新增：是否正在傳送中
let teleportTimer = 0; // 新增：傳送動畫計時器
let targetBgState = 1; // 新增：傳送目標場景
let isTrophyOpen = false; // 修改：獎盃是否開啟
let goldCoins = []; // 新增：金幣特效陣列
const numGoldCoins = 100; // 新增：金幣數量
let isPetReactionPlaying = false; // 新增：是否正在播放寵物彩蛋反應
let gameEndTimer = 0; // 新增：遊戲結束計時器
let selectedPetIndex = -1; // 新增：已選擇的寵物索引 (-1 表示未選擇)
let currentFramePet = 0; // 新增：寵物當前幀
let screenShakeTimer = 0; // 新增：畫面震動計時器
let effectRotation = 0; // 新增：特效旋轉角度
let damageDealtThisAttack = false; // 新增：本次攻擊是否已造成傷害
let petConfigs = [ // 新增：寵物設定資料
  { name: "藍色氮氣飛天大象", frames: 7, w: 457, h: 49, path: '8-1/all.png', frameW: 0, frameH: 0 },
  { name: "究極炫酷紫色魔法獨角獸", frames: 8, w: 587, h: 92, path: '9-1/all.png', frameW: 0, frameH: 0 },
  { name: "豬豬", frames: 15, w: 970, h: 55, path: '10-1/all.png', frameW: 0, frameH: 0 }
];

// --- 移除舊對話系統變數 ---
// let nameInput;
// let dialogState = 'none';
// let playerName = '';

// --- 新增：測驗系統變數 ---
let quizState = 'idle'; // 'idle', 'asking', 'answered'
let currentQuestionRow = null; // 存放當前問題的整行資料
let feedbackMessage = '';
let answerInput; // 玩家的答案輸入框
let submitButton; // 送出答案的按鈕
let currentQuestionOriginalIndex = -1; // 新增：追蹤當前問題在CSV中的原始索引
let correctlyAnsweredIndices = new Set(); // 新增：記錄已答對問題的索引
let incorrectlyAnsweredIndices = new Set(); // 新增：記錄答錯過的題目索引
let nextQuestionButton; // 新增：下一題按鈕
let tryAgainButton; // 新增：再次作答按鈕


// --- 新增：右側角色對話系統變數 ---
let rightCharDialogState = 'idle'; // 'idle', 'asking_name', 'welcoming'
let nameInput; // 玩家姓名輸入框
let playerName = ''; // 儲存玩家姓名
let welcomeMessage = ''; // 歡迎訊息
let score = 0; // 新增：計分系統變數
let allQuestionsAnswered = false; // 新增：是否已回答所有問題的旗標
let health = 3; // 新增：生命值，預設 3 顆心
let hasReceivedHalfwayBonus = false; // 新增：是否已領取過半獎勵

// --- 新增：櫻花特效 ---
let petals = [];
const numPetals = 200; // 花瓣數量
let confettis = []; // 新增：彩帶陣列
const numConfetti = 150; // 新增：彩帶數量
let rocks = []; // 新增：落石陣列
const numRocks = 80; // 新增：落石數量
let hasPetReactionFinished = false; // 新增：寵物彩蛋反應是否結束
 
let animationSpeed = 0.18;

// 角色狀態
let characterX = 0; // 相對於中心的位移
let characterY = 0;
let isMoving = false;
let moveDirection = 0; // 1 = 右, -1 = 左
let lastDirection = 1; // 記住最後的方向
let isJumping = false;
let isFighting = false;
let isFighting2 = false; // 新增：第二種攻擊狀態

let currentSpritesheet;
let currentFrameWidth;
let currentFrameHeight;
let totalFrames;

let moveSpeed = 6; // 水平移動速度
let maxJumpHeight = 180; // 跳躍高度（像素）

function preload() {
  bgImage = loadImage('./background/background.png');
  bgImage2 = loadImage('./background/background2.png'); // 載入第二背景
  bgImage3 = loadImage('./background/background3.png'); // 載入第三背景
  bgImage4 = loadImage('./background/background4.png'); // 新增：載入第四背景
  // portalImage = loadImage('./background/portal.png'); // 暫時註解：沒有傳送門圖片
  spritesheetStop = loadImage('./1-1 stop/all.png');
  spritesheetRun = loadImage('./1-5 run/all.png');
  spritesheetJump = loadImage('./1-2 jump/all.png');
  spritesheetFight = loadImage('./1-4 fight/all.png');
  spritesheetFight2 = loadImage('./1-3 fight/all.png'); // 新增：載入第二種攻擊動畫
  spritesheetNewChar = loadImage('./3-1 stop/all.png'); // 新增：載入新角色圖片
  spritesheetLeftCharCorrect = loadImage('./3-4 fight/all.png'); // 新增：載入答對動畫
  spritesheetLeftCharIncorrect = loadImage('./3-3 jump/all.png'); // 新增：載入答錯動畫
  spritesheetLeftCharHurt = loadImage('./3-2 run/all.png'); // 新增：載入左邊角色受擊動畫
  spritesheetRightCharHurtNew = loadImage('./2-1 walk/all.png'); // 新增：載入右邊角色新受擊動畫
  quizDataProg = loadTable('./Math_Quiz.csv', 'csv', 'header'); // 載入程式設計題庫
  quizDataPsych = loadTable('./Edu_Psych_Quiz.csv', 'csv', 'header'); // 載入教育心理學題庫
  spritesheetRollChar = loadImage('./2-2 roll/all.png'); // 新增：載入滾動角色圖片
  spritesheetJumpChar = loadImage('./2-3 jump/all.png'); // 新增：載入右邊角色跳躍圖片
  spritesheetHurtChar = loadImage('./2-4 fight/all.png'); // 新增：載入右邊角色受擊圖片
  spritesheetNewCharScene2 = loadImage('./4-1 stop/all.png'); // 新增：載入第二場景新角色
  spritesheetNewCharScene2Top = loadImage('./5-1 stop/all.png'); // 新增：載入第二場景上方角色
  spritesheetNewCharScene2Right = loadImage('./6-1 stop/all.png'); // 新增：載入第二場景右邊角色
  spritesheetNewCharScene2RightJump = loadImage('./6-4 jump/all.png'); // 新增：載入第二場景右邊角色跳躍圖片
  spritesheetNewCharScene2RightIncorrect = loadImage('./6-2/all.png'); // 新增：載入第二場景右邊角色答錯反應圖片
  spritesheetNewCharScene2Correct = loadImage('./4-3/all.png'); // 新增：載入第二場景左邊角色答對反應圖片
  spritesheetNewCharScene2Incorrect = loadImage('./4-2/all.png'); // 新增：載入第二場景左邊角色答錯反應圖片
  spritesheetNewCharScene2RightCelebration = loadImage('./6-5/all.png'); // 新增：載入第二場景右邊角色慶祝圖片
  spritesheetNewCharScene2RightHurt = loadImage('./6-3/all.png'); // 新增：載入第二場景右邊角色受擊圖片
  spritesheetNewCharScene2LeftHurt = loadImage('./4-4/all.png'); // 新增：載入第二場景左邊角色受擊圖片
  spritesheetNewCharScene1 = loadImage('./7-1 stop/all.png'); // 新增：載入第一場景新角色
  spritesheetNewCharScene1Incorrect = loadImage('./7-2/all.png'); // 新增：載入第一場景新角色答錯反應圖片
  spritesheetPetUnicornReaction = loadImage('./9-2/all.png'); // 新增：載入獨角獸彩蛋反應圖片
  spritesheetEndChar = loadImage('./11/all.png'); // 新增：載入結算畫面新角色圖片
  specialEffectsImage = loadImage('./special effects/special effects.png'); // 新增：載入答錯特效
  specialEffects2Image = loadImage('./special effects/special effects2.png'); // 新增：載入獎盃特效
  bgMusic1 = loadSound('./music/background1.mp3'); // 新增：載入背景音樂1
  bgMusic2 = loadSound('./music/background2.mp3'); // 新增：載入背景音樂2
  bgMusic3 = loadSound('./music/background3.mp3'); // 新增：載入背景音樂3

  // --- 新增：載入寵物圖片 ---
  for (let i = 0; i < petConfigs.length; i++) {
    petSpritesheets[i] = loadImage(petConfigs[i].path);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 將音效載入移至 setup，避免因檔案遺失導致遊戲卡在 Loading 畫面
  // 請確保 music 資料夾內有 kirby.mp3, jojo.mp3, doraemon.mp3
  soundKirby = loadSound('./music/kirby.mp3'); 
  soundJojo = loadSound('./music/jojo.mp3'); 
  soundDoraemon = loadSound('./music/doraemon.mp3'); 
  soundMiku = loadSound('./music/miku.mp3'); // 新增：載入miku音效
  soundMickey = loadSound('./music/mickey mouse.mp3'); // 修正：載入mickey mouse音效 (含空格)
  soundEffect1 = loadSound('./music/1.mp3'); // 新增：載入答錯特效音效

  // --- 新增：調整音量平衡 ---
  // 背景音樂預設小聲一點，讓音效更明顯
  bgMusic1.setVolume(0.4);
  bgMusic2.setVolume(0.4);
  bgMusic3.setVolume(0.4);
  // 角色音效設為最大
  soundKirby.setVolume(1.0);
  soundJojo.setVolume(1.0);
  soundDoraemon.setVolume(1.0);
  soundMiku.setVolume(1.0);
  soundMickey.setVolume(1.0);
  soundEffect1.setVolume(1.0);

  // 根據載入的圖片計算實際每幀寬度與高度
  frameWidthStop = spritesheetStop.width / 7;
  frameHeightStop = spritesheetStop.height;
  frameWidthRun = spritesheetRun.width / 19;
  frameHeightRun = spritesheetRun.height;
  frameWidthJump = spritesheetJump.width / 10;
  frameHeightJump = spritesheetJump.height;
  frameWidthFight = spritesheetFight.width / 57;
  frameHeightFight = spritesheetFight.height;
  // 新增：計算第二種攻擊動畫幀尺寸
  frameWidthFight2 = spritesheetFight2.width / totalFramesFight2;
  frameHeightFight2 = spritesheetFight2.height;
  // 新增：計算新角色每幀寬高
  // 根據使用者提供資訊：檔案寬 247, 6 張圖
  frameWidthNewChar = spritesheetNewChar.width / totalFramesNewChar;
  frameHeightNewChar = spritesheetNewChar.height;
  // 新增：計算答對動畫幀尺寸
  frameWidthLeftCharCorrect = spritesheetLeftCharCorrect.width / totalFramesLeftCharCorrect;
  frameHeightLeftCharCorrect = spritesheetLeftCharCorrect.height;
  // 新增：計算答錯動畫幀尺寸
  frameWidthLeftCharIncorrect = spritesheetLeftCharIncorrect.width / totalFramesLeftCharIncorrect;
  frameHeightLeftCharIncorrect = spritesheetLeftCharIncorrect.height;
  // 新增：計算左邊角色受擊動畫幀尺寸
  frameWidthLeftCharHurt = spritesheetLeftCharHurt.width / totalFramesLeftCharHurt;
  frameHeightLeftCharHurt = spritesheetLeftCharHurt.height;
  // 新增：計算右邊角色新受擊動畫幀尺寸
  frameWidthRightCharHurtNew = spritesheetRightCharHurtNew.width / totalFramesRightCharHurtNew;
  frameHeightRightCharHurtNew = spritesheetRightCharHurtNew.height;
  // 新增：計算滾動角色每幀寬高
  // 根據使用者提供資訊：9 張圖
  frameWidthRollChar = spritesheetRollChar.width / totalFramesRollChar;
  frameHeightRollChar = spritesheetRollChar.height;
  // 新增：計算右邊角色跳躍每幀寬高
  // 根據使用者提供資訊：5 張圖
  frameWidthJumpChar = spritesheetJumpChar.width / totalFramesJumpChar;
  frameHeightJumpChar = spritesheetJumpChar.height;
  // 新增：計算右邊角色受擊每幀寬高
  // 根據使用者提供資訊：16 張圖
  frameWidthHurtChar = spritesheetHurtChar.width / totalFramesHurtChar;
  frameHeightHurtChar = spritesheetHurtChar.height;
  // 新增：計算第二場景新角色每幀寬高
  // 根據使用者提供資訊：檔案寬 120, 5 張圖
  frameWidthNewCharScene2 = spritesheetNewCharScene2.width / totalFramesNewCharScene2;
  frameHeightNewCharScene2 = spritesheetNewCharScene2.height;
  // 新增：計算第二場景上方角色每幀寬高
  // 根據使用者提供資訊：檔案寬 1567, 12 張圖
  frameWidthNewCharScene2Top = spritesheetNewCharScene2Top.width / totalFramesNewCharScene2Top;
  frameHeightNewCharScene2Top = spritesheetNewCharScene2Top.height;
  // 新增：計算第二場景右邊角色每幀寬高
  // 根據使用者提供資訊：檔案寬 691, 8 張圖
  frameWidthNewCharScene2Right = spritesheetNewCharScene2Right.width / totalFramesNewCharScene2Right;
  frameHeightNewCharScene2Right = spritesheetNewCharScene2Right.height;
  // 新增：計算第二場景右邊角色跳躍每幀寬高
  // 根據使用者提供資訊：檔案寬 679, 9 張圖
  frameWidthNewCharScene2RightJump = spritesheetNewCharScene2RightJump.width / totalFramesNewCharScene2RightJump;
  frameHeightNewCharScene2RightJump = spritesheetNewCharScene2RightJump.height;
  // 新增：計算第二場景右邊角色答錯反應每幀寬高
  frameWidthNewCharScene2RightIncorrect = 247 / 3;
  frameHeightNewCharScene2RightIncorrect = 58;
  // 新增：計算第二場景左邊角色答對反應每幀寬高
  frameWidthNewCharScene2Correct = spritesheetNewCharScene2Correct.width / totalFramesNewCharScene2Correct;
  frameHeightNewCharScene2Correct = spritesheetNewCharScene2Correct.height;
  // 新增：計算第二場景左邊角色答錯反應每幀寬高
  frameWidthNewCharScene2Incorrect = spritesheetNewCharScene2Incorrect.width / totalFramesNewCharScene2Incorrect;
  frameHeightNewCharScene2Incorrect = spritesheetNewCharScene2Incorrect.height;
  // 新增：計算第二場景右邊角色慶祝每幀寬高
  frameWidthNewCharScene2RightCelebration = 375 / 5;
  frameHeightNewCharScene2RightCelebration = 65;
  // 新增：計算第二場景右邊角色受擊每幀寬高
  frameWidthNewCharScene2RightHurt = 627 / 8;
  frameHeightNewCharScene2RightHurt = 64;
  // 新增：計算第二場景左邊角色受擊每幀寬高
  frameWidthNewCharScene2LeftHurt = 285 / 10;
  frameHeightNewCharScene2LeftHurt = 27;
  // 新增：計算第一場景新角色每幀寬高
  // 根據使用者提供資訊：檔案寬 82, 高 30, 3 張圖
  frameWidthNewCharScene1 = 82 / 3;
  frameHeightNewCharScene1 = 30;
  // 新增：計算第一場景新角色答錯反應每幀寬高
  frameWidthNewCharScene1Incorrect = spritesheetNewCharScene1Incorrect.width / totalFramesNewCharScene1Incorrect;
  frameHeightNewCharScene1Incorrect = spritesheetNewCharScene1Incorrect.height;
  // 新增：計算獨角獸彩蛋反應每幀寬高
  // 根據使用者提供資訊：檔案寬 1525, 高 92, 17 張圖
  frameWidthPetUnicornReaction = 1525 / 17;
  frameHeightPetUnicornReaction = 92;
  // 新增：計算結算畫面新角色每幀寬高
  // 根據使用者提供資訊：檔案寬 1762, 高 156, 19 張圖
  frameWidthEndChar = 1762 / 19;
  frameHeightEndChar = 156;
  
  // --- 新增：計算寵物每幀寬高 ---
  for (let i = 0; i < petConfigs.length; i++) {
    // 根據題目描述的總寬度除以幀數
    petConfigs[i].frameW = petConfigs[i].w / petConfigs[i].frames;
    petConfigs[i].frameH = petConfigs[i].h;
  }

  // --- 新增：如果沒有傳送門圖片，則程式自動產生一個發光橢圓 ---
  if (!portalImage) {
    portalImage = createGraphics(100, 200);
    portalImage.noStroke();
    for (let i = 0; i < 8; i++) {
      portalImage.fill(50 + i * 20, 100 + i * 10, 255, 50 + i * 20);
      portalImage.ellipse(50, 100, 100 - i * 10, 200 - i * 20);
    }
  }

  currentSpritesheet = spritesheetStop;
  currentFrameWidth = frameWidthStop;
  currentFrameHeight = frameHeightStop;
  totalFrames = 7;

  // --- 新增：建立答案輸入框與按鈕 ---
  answerInput = createInput('');
  answerInput.position(width / 2 - 100, height - 80);
  answerInput.size(200); // 加大輸入框寬度
  answerInput.hide(); // 預設隱藏

  submitButton = createButton('送出答案');
  submitButton.position(answerInput.x + answerInput.width + 10, height - 80);
  submitButton.mousePressed(checkAnswer);
  submitButton.hide(); // 預設隱藏

  // 讓輸入框可以按 Enter 送出
  answerInput.elt.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkAnswer();
  });

  // --- 新增：建立姓名輸入框 ---
  nameInput = createInput('');
  nameInput.position(width / 2 - 100, height - 120); // 放在測驗輸入框上方
  nameInput.size(200);
  nameInput.hide(); // 預設隱藏
  nameInput.elt.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitName();
  });

  // --- 新增：建立測驗流程按鈕 ---
  nextQuestionButton = createButton('下一題');
  nextQuestionButton.position(width / 2 - 60, height - 80);
  nextQuestionButton.style('background-color', '#6a994e'); // 綠色
  nextQuestionButton.style('color', 'white');
  nextQuestionButton.style('border', 'none');
  nextQuestionButton.style('padding', '10px 20px');
  nextQuestionButton.mousePressed(startQuiz); // 點擊後開始新測驗
  nextQuestionButton.hide();

  tryAgainButton = createButton('再次作答');
  tryAgainButton.position(width / 2 - 60, height - 80);
  tryAgainButton.style('background-color', '#bc4749'); // 紅色
  tryAgainButton.style('color', 'white');
  tryAgainButton.style('border', 'none');
  tryAgainButton.style('padding', '10px 20px');
  tryAgainButton.mousePressed(retryQuestion); // 點擊後重試
  tryAgainButton.hide();

  // --- 新增：初始化櫻花花瓣 ---
  for (let i = 0; i < numPetals; i++) {
    petals.push(new Petal());
  }

  // --- 新增：初始化彩帶 ---
  for (let i = 0; i < numConfetti; i++) {
    confettis.push(new Confetti());
  }

  // --- 新增：初始化落石 ---
  for (let i = 0; i < numRocks; i++) {
    rocks.push(new Rock());
  }

  // --- 新增：初始化金幣 ---
  for (let i = 0; i < numGoldCoins; i++) {
    goldCoins.push(new GoldCoin());
  }

  // --- 新增：建立開始與重新開始按鈕 ---
  startButton = createButton('開始遊戲');
  startButton.position(width / 2 - 60, height / 2 + 80);
  startButton.size(120, 50);
  startButton.style('font-size', '24px');
  startButton.style('background-color', '#ffb703');
  startButton.style('color', '#000000');
  startButton.style('border', 'none');
  startButton.style('border-radius', '10px');
  startButton.style('cursor', 'pointer');
  startButton.mousePressed(startPlaying); // 修改：按鈕改為觸發 startPlaying
  startButton.hide();

  restartButton = createButton('重新開始');
  restartButton.position(width / 2 - 60, height / 2 + 160); // 修改：按鈕位置再往下移一點
  restartButton.size(120, 50);
  restartButton.style('font-size', '24px');
  restartButton.style('background-color', '#fb8500');
  restartButton.style('color', '#ffffff');
  restartButton.style('border', 'none');
  restartButton.style('border-radius', '10px');
  restartButton.style('cursor', 'pointer');
  restartButton.mousePressed(resetGame);
  restartButton.hide();

  // --- 新增：建立靜音按鈕 ---
  muteButton = createButton('靜音');
  muteButton.position(20, 60); // 修改：移至分數下方 (分數在 20, 20)
  muteButton.size(80, 35);
  muteButton.style('font-size', '16px');
  muteButton.style('background-color', '#f0f0f0');
  muteButton.style('border-radius', '5px');
  muteButton.style('cursor', 'pointer');
  muteButton.mousePressed(toggleMute);

  // --- 新增：設定選單按鈕 ---
  settingsButton = createButton('設定');
  settingsButton.position(20, 105); // 靜音鍵(60) + 高度(35) + 間距(10)
  settingsButton.size(80, 35);
  settingsButton.style('font-size', '16px');
  settingsButton.style('background-color', '#f0f0f0');
  settingsButton.style('border-radius', '5px');
  settingsButton.style('cursor', 'pointer');
  settingsButton.mousePressed(toggleSettingsMenu);
  settingsButton.hide(); // 預設隱藏，遊戲開始後顯示

  // --- 新增：選單內部按鈕 ---
  menuContinueButton = createButton('繼續遊戲');
  menuContinueButton.size(120, 40);
  menuContinueButton.style('font-size', '18px');
  menuContinueButton.style('cursor', 'pointer');
  menuContinueButton.mousePressed(toggleSettingsMenu);
  menuContinueButton.hide();

  menuRestartButton = createButton('重新開始');
  menuRestartButton.size(120, 40);
  menuRestartButton.style('font-size', '18px');
  menuRestartButton.style('cursor', 'pointer');
  menuRestartButton.mousePressed(() => {
    resetGame();
    // 確保選單關閉
    isSettingsOpen = false;
    menuContinueButton.hide();
    menuRestartButton.hide();
    menuInstructionsButton.hide();
  });
  menuRestartButton.hide();

  menuInstructionsButton = createButton('遊戲說明');
  menuInstructionsButton.size(120, 40);
  menuInstructionsButton.style('font-size', '18px');
  menuInstructionsButton.style('cursor', 'pointer');
  menuInstructionsButton.mousePressed(() => {
    isShowingInstructions = !isShowingInstructions;
  });
  menuInstructionsButton.hide();

  // --- 新增：模式選擇按鈕 ---
  modeButtonProg = createButton('程式設計');
  modeButtonProg.position(width / 2 - 100, height / 2 - 40);
  modeButtonProg.size(200, 60);
  modeButtonProg.style('font-size', '24px');
  modeButtonProg.style('background-color', '#c1121f');
  modeButtonProg.style('color', 'white');
  modeButtonProg.style('border-radius', '10px');
  modeButtonProg.style('cursor', 'pointer');
  modeButtonProg.mousePressed(() => selectMode('prog'));
  modeButtonProg.hide();

  modeButtonPsych = createButton('教育心理學');
  modeButtonPsych.position(width / 2 - 100, height / 2 + 40);
  modeButtonPsych.size(200, 60);
  modeButtonPsych.style('font-size', '24px');
  modeButtonPsych.style('background-color', '#669bbc');
  modeButtonPsych.style('color', 'white');
  modeButtonPsych.style('border-radius', '10px');
  modeButtonPsych.style('cursor', 'pointer');
  modeButtonPsych.mousePressed(() => selectMode('psych'));
  modeButtonPsych.hide();

  // --- 新增：選擇題按鈕 (A, B, C, D) ---
  btnA = createButton('A');
  btnA.position(width / 2 - 120, height - 80);
  btnA.size(50, 40);
  btnA.style('font-size', '20px');
  btnA.style('cursor', 'pointer');
  btnA.mousePressed(() => checkAnswer('A'));
  btnA.hide();

  btnB = createButton('B');
  btnB.position(width / 2 - 60, height - 80);
  btnB.size(50, 40);
  btnB.style('font-size', '20px');
  btnB.style('cursor', 'pointer');
  btnB.mousePressed(() => checkAnswer('B'));
  btnB.hide();

  btnC = createButton('C');
  btnC.position(width / 2, height - 80);
  btnC.size(50, 40);
  btnC.style('font-size', '20px');
  btnC.style('cursor', 'pointer');
  btnC.mousePressed(() => checkAnswer('C'));
  btnC.hide();

  btnD = createButton('D');
  btnD.position(width / 2 + 60, height - 80);
  btnD.size(50, 40);
  btnD.style('font-size', '20px');
  btnD.style('cursor', 'pointer');
  btnD.mousePressed(() => checkAnswer('D'));
  btnD.hide();
}

function draw() {
  if (gameState === 'start') {
    image(bgImage, 0, 0, width, height); // 在開始畫面顯示第一背景
    drawStartScreen();
    // 在封面也顯示櫻花特效，增加氛圍
    for (let petal of petals) {
      petal.update();
      petal.display();
    }
    startButton.hide(); // 修改：開始畫面不顯示按鈕，改由 Enter 進入
    if (settingsButton) settingsButton.hide(); // 新增：開始畫面隱藏設定
    return; // 如果是開始畫面，畫完就結束這一幀，不執行後面的遊戲邏輯
  }
  
  if (gameState === 'mode_selection') {
    drawModeSelection();
    startButton.hide();
    if (settingsButton) settingsButton.hide();
    return;
  }

  if (gameState === 'pet_selection') {
    drawPetSelection();
    startButton.show(); // 修改：在寵物選擇畫面顯示按鈕
    startButton.position(width / 2 - 60, height / 2 + 200); // 設定按鈕位置在寵物下方
    if (settingsButton) settingsButton.hide(); // 新增：選擇畫面隱藏設定
    return; // 如果是選擇寵物畫面，畫完就結束
  } else {
    startButton.hide(); // 遊戲進行中隱藏按鈕
    if (settingsButton) settingsButton.show(); // 新增：遊戲中顯示設定
  }

  // 提早計算主要角色的中心位置，避免後續程式碼引用錯誤
  let centerX = width / 2 + characterX;
  let groundYOffset = currentBgState === 1 ? 120 : 180; // 第一場景角色較低
  let centerY = height - groundYOffset + characterY; // 調整Y軸位置，讓角色在地板上

  // 重置第二場景受擊狀態 (每幀重置，若有碰撞則在下方設為 true)
  isScene2LeftCharHurt = false;
  isScene2RightCharHurt = false;

  // --- 新增：畫面震動邏輯 ---
  if (screenShakeTimer > 0) {
    translate(random(-5, 5), random(-5, 5));
    screenShakeTimer--;
  }

  // --- 新增：檢查第一場景是否通關 ---
  let totalQuestions = quizData.getRowCount();
  let splitIndex = ceil(totalQuestions / 2);
  let isScene1Cleared = true;
  for (let i = 0; i < splitIndex; i++) {
    if (!correctlyAnsweredIndices.has(i)) {
      isScene1Cleared = false;
      break;
    }
  }

  // --- 新增：第一場景通關獎勵選擇 ---
  if (isScene1Cleared && !scene1RewardClaimed) {
    isChoosingReward = true;
  }

  // --- 新增：背景與傳送門繪製邏輯 ---
  if (currentBgState === 1) {
    image(bgImage, 0, 0, width, height);
    // 繪製傳送門 (通往第二背景) - 放在右側
    // 只有在第一場景通關後才顯示
    if (isScene1Cleared) {
      image(portalImage, width - 150, height - 280, 100, 200);
    }
  } else if (currentBgState === 2) {
    image(bgImage2, 0, 0, width, height);
    // --- 新增：繪製落石特效 ---
    for (let rock of rocks) {
      rock.update();
      rock.display();
    }
    // --- 新增：繪製第二場景的新角色 ---
    let currentSpriteScene2Left = spritesheetNewCharScene2;
    let currentFWScene2Left = frameWidthNewCharScene2;
    let currentFHScene2Left = frameHeightNewCharScene2;
    let totalFramesScene2Left = totalFramesNewCharScene2;

    if (isScene2LeftCharHurt) {
      // --- 新增：受擊狀態優先 ---
      currentSpriteScene2Left = spritesheetNewCharScene2LeftHurt;
      currentFWScene2Left = frameWidthNewCharScene2LeftHurt;
      currentFHScene2Left = frameHeightNewCharScene2LeftHurt;
      totalFramesScene2Left = totalFramesNewCharScene2LeftHurt;
      
      currentFrameNewCharScene2 = (currentFrameNewCharScene2 + animationSpeed) % totalFramesScene2Left;
    } else if (leftCharAnimState === 'correct') {
      currentSpriteScene2Left = spritesheetNewCharScene2Correct;
      currentFWScene2Left = frameWidthNewCharScene2Correct;
      currentFHScene2Left = frameHeightNewCharScene2Correct;
      totalFramesScene2Left = totalFramesNewCharScene2Correct;
      
      currentFrameNewCharScene2 += animationSpeed;
      if (currentFrameNewCharScene2 >= totalFramesScene2Left) {
        leftCharAnimState = 'idle';
        currentFrameNewCharScene2 = 0;
      }
    } else if (leftCharAnimState === 'incorrect') {
      currentSpriteScene2Left = spritesheetNewCharScene2Incorrect;
      currentFWScene2Left = frameWidthNewCharScene2Incorrect;
      currentFHScene2Left = frameHeightNewCharScene2Incorrect;
      totalFramesScene2Left = totalFramesNewCharScene2Incorrect;
      
      currentFrameNewCharScene2 += animationSpeed;
      if (currentFrameNewCharScene2 >= totalFramesScene2Left) {
        leftCharAnimState = 'idle';
        currentFrameNewCharScene2 = 0;
      }
    } else {
      // Idle
      currentFrameNewCharScene2 = (currentFrameNewCharScene2 + animationSpeed) % totalFramesScene2Left;
    }

    let frameIndexNewCharScene2 = floor(currentFrameNewCharScene2);
    let sourceXNewCharScene2 = frameIndexNewCharScene2 * currentFWScene2Left;

    let newCharScale = 1.5; // 放大倍率
    let newCharW = currentFWScene2Left * newCharScale;
    let newCharH = currentFHScene2Left * newCharScale;

    // 角色位置固定在第二場景左邊
    let newCharX = width / 4; // 固定在畫面左側
    let newCharY = height - 180; // 與主角色相同的地面高度

    image(currentSpriteScene2Left,
          newCharX - newCharW / 2,
          newCharY - newCharH / 2,
          newCharW, newCharH,
          sourceXNewCharScene2, 0, currentFWScene2Left, currentFHScene2Left);

    // --- 新增：Scene 2 左邊角色測驗互動 ---
    let quizProximityThreshold = 180;
    if (abs(centerX - newCharX) < quizProximityThreshold) {
      if (quizState === 'idle') startQuiz();
      if (soundMickey && soundMickey.isLoaded()) {
        soundMickey.setVolume(1.0, 0.3); // 淡入
        if (!soundMickey.isPlaying()) soundMickey.play(); // 播完重播
      }
    } else {
      if (quizState !== 'idle' && currentBgState === 2) {
         resetQuiz();
      }
      // 離開時淡出音效
      if (soundMickey && soundMickey.isPlaying()) {
        soundMickey.setVolume(0, 0.5);
      }
    }

    // 根據測驗狀態繪製對話 (Scene 2)
    if (quizState === 'asking') {
      let rawQuestion = currentQuestionRow.getString('question');
      let questionText = formatQuestionText(rawQuestion, quizData === quizDataPsych);
      drawSpeechBubble(newCharX, newCharY - newCharH / 2 - 20, questionText, '#fcbf49');
    } else if (quizState === 'answered' && lastAnswerWasIncorrect) {
      drawSpeechBubble(newCharX, newCharY - newCharH / 2 - 20, feedbackMessage, '#ff99c8');
    } else if (quizState === 'finished' && allQuestionsAnswered) {
      const congratsMessage = "太厲害了！這份糰子(🍡)是給你的獎勵！";
      drawSpeechBubble(newCharX, newCharY - newCharH / 2 - 20, congratsMessage, '#fcbf49');
    } else if (quizState === 'scene_cleared') {
      // 當前場景題目已做完，但遊戲未結束
      drawSpeechBubble(newCharX, newCharY - newCharH / 2 - 20, "這裡的問題都解決了！去另一個場景看看吧！", '#a8dadc');
    }

    // --- 新增：繪製第二場景上方的新角色 ---
    if (!isTopCharScene2Defeated) {
      let nextFrame = currentFrameNewCharScene2Top + animationSpeed;
      // 如果處於瀕死狀態且動畫播放完一輪，則設為已擊敗
      if (isTopCharDying && nextFrame >= totalFramesNewCharScene2Top) {
        isTopCharScene2Defeated = true;
      }
      currentFrameNewCharScene2Top = nextFrame % totalFramesNewCharScene2Top;

      let frameIndexTop = floor(currentFrameNewCharScene2Top);
      let sourceXTop = frameIndexTop * frameWidthNewCharScene2Top;

      let topCharScale = 1.5; // 放大倍率
      let topCharW = frameWidthNewCharScene2Top * topCharScale;
      let topCharH = frameHeightNewCharScene2Top * topCharScale;

      // 角色位置固定在第二場景正中間最上方
      let topCharX = width / 2; 
      let topCharY = 100; // 位於最上方

      // --- 新增：繪製血量條 (在怪物右側) ---
      if (!isTopCharDying) {
        push();
        rectMode(CORNER);
        noStroke();
        // 背景黑條
        fill(0, 150);
        rect(topCharX + 110, topCharY - 10, 60, 10);
        // 血量紅條
        fill(255, 0, 0);
        let currentHealthWidth = map(topCharHealth, 0, 3, 0, 60);
        if (currentHealthWidth < 0) currentHealthWidth = 0;
        rect(topCharX + 110, topCharY - 10, currentHealthWidth, 10);
        // 邊框
        noFill();
        stroke(255);
        strokeWeight(1);
        rect(topCharX + 110, topCharY - 10, 60, 10);
        pop();
      }

      push(); // 新增：儲存繪圖狀態以應用 tint
      if (isTopCharHurt) {
        tint(255, 0, 0); // 受傷變紅
        topCharHurtTimer--;
        if (topCharHurtTimer <= 0) isTopCharHurt = false;
      }
      image(spritesheetNewCharScene2Top,
            topCharX - topCharW / 2,
            topCharY - topCharH / 2,
            topCharW, topCharH,
            sourceXTop, 0, frameWidthNewCharScene2Top, frameHeightNewCharScene2Top);
      pop(); // 新增：恢復繪圖狀態

      // 偵測是否被擊中
      if (!isTopCharDying && (isFighting || isFighting2)) {
        let mainScale = 1.5;
        let mainW = currentFrameWidth * mainScale;
        let mainH = currentFrameHeight * mainScale;
        
        // 檢查重疊
        if (centerX + mainW / 2 > topCharX - topCharW / 2 &&
            centerX - mainW / 2 < topCharX + topCharW / 2 &&
            centerY + mainH / 2 > topCharY - topCharH / 2 &&
            centerY - mainH / 2 < topCharY + topCharH / 2) {
          
          if (!damageDealtThisAttack) {
            let damage = (attackPower > 1) ? 3 : 1; // 若選擇炸彈(攻擊力>1)則一擊必殺(3傷害)，否則1傷害
            topCharHealth -= damage;
            damageDealtThisAttack = true;

            if (topCharHealth <= 0) {
              isTopCharDying = true;
              score += 100; // 新增：擊敗加 100 分
              // 產生爆炸特效
              for (let i = 0; i < 30; i++) {
                explosions.push(new ExplosionParticle(topCharX, topCharY));
              }
            } else {
              // 新增：受傷閃爍邏輯
              isTopCharHurt = true;
              topCharHurtTimer = 15; // 閃爍 15 幀
            }
          }
        }
      }
    }

    // --- 新增：繪製爆炸特效 ---
    for (let i = explosions.length - 1; i >= 0; i--) {
      explosions[i].update();
      explosions[i].display();
      if (explosions[i].isFinished()) {
        explosions.splice(i, 1);
      }
    }

    // --- 新增：繪製第二場景右邊的新角色 ---
    // 角色位置固定在第二場景右邊
    let rightCharXScene2 = width * 0.8; // 固定在畫面右側
    let rightCharYScene2 = height - 180; // 地面高度

    // 判斷主角是否接近右邊角色
    let distToRightCharScene2 = abs(centerX - rightCharXScene2);
    let isReactingScene2 = distToRightCharScene2 < 200; // 設定觸發距離
    let isReactingToIncorrectScene2 = lastAnswerWasIncorrect && isReactingScene2; // 新增：判斷是否答錯且靠近

    let currentSpriteScene2Right;
    let currentFWScene2Right;
    let currentFHScene2Right;
    let currentSourceXScene2Right;

    if (isScene2RightCharHurt) {
      // --- 新增：受擊狀態優先 ---
      currentFrameNewCharScene2RightHurt = (currentFrameNewCharScene2RightHurt + animationSpeed) % totalFramesNewCharScene2RightHurt;
      let frameIndex = floor(currentFrameNewCharScene2RightHurt);
      currentFWScene2Right = frameWidthNewCharScene2RightHurt;
      currentFHScene2Right = frameHeightNewCharScene2RightHurt;
      currentSourceXScene2Right = frameIndex * currentFWScene2Right;
      currentSpriteScene2Right = spritesheetNewCharScene2RightHurt;
      if (soundMiku && soundMiku.isPlaying()) {
        soundMiku.setVolume(0, 0.5);
      }
    } else if (allQuestionsAnswered) {
      // --- 新增：全部答對時，右邊角色播放慶祝動畫 (6-5) ---
      currentFrameNewCharScene2RightCelebration = (currentFrameNewCharScene2RightCelebration + animationSpeed) % totalFramesNewCharScene2RightCelebration;
      let frameIndex = floor(currentFrameNewCharScene2RightCelebration);
      currentFWScene2Right = frameWidthNewCharScene2RightCelebration;
      currentFHScene2Right = frameHeightNewCharScene2RightCelebration;
      currentSourceXScene2Right = frameIndex * currentFWScene2Right;
      currentSpriteScene2Right = spritesheetNewCharScene2RightCelebration;
      if (soundMiku && soundMiku.isPlaying()) {
        soundMiku.setVolume(0, 0.5);
      }
      
    } else if (isReactingToIncorrectScene2) {
      // 答錯且靠近時播放 6-2 動畫
      currentFrameNewCharScene2RightIncorrect = (currentFrameNewCharScene2RightIncorrect + animationSpeed) % totalFramesNewCharScene2RightIncorrect;
      let frameIndex = floor(currentFrameNewCharScene2RightIncorrect);
      currentFWScene2Right = frameWidthNewCharScene2RightIncorrect;
      currentFHScene2Right = frameHeightNewCharScene2RightIncorrect;
      currentSourceXScene2Right = frameIndex * currentFWScene2Right;
      currentSpriteScene2Right = spritesheetNewCharScene2RightIncorrect;

      // 顯示提示框
      let bubbleY = rightCharYScene2 - (currentFHScene2Right * 1.5) / 2 - 20;
      drawSpeechBubble(rightCharXScene2, bubbleY, lastIncorrectFeedback, '#ff99c8');

      if (soundMiku && soundMiku.isLoaded()) {
        soundMiku.setVolume(1.0, 0.3); // 淡入
        if (!soundMiku.isPlaying()) soundMiku.play(); // 播完重播
      }
    } else if (isReactingScene2) {
      // 接近時播放跳躍動畫
      currentFrameNewCharScene2RightJump = (currentFrameNewCharScene2RightJump + animationSpeed) % totalFramesNewCharScene2RightJump;
      let frameIndex = floor(currentFrameNewCharScene2RightJump);
      currentFWScene2Right = frameWidthNewCharScene2RightJump;
      currentFHScene2Right = frameHeightNewCharScene2RightJump;
      currentSourceXScene2Right = frameIndex * currentFWScene2Right;
      currentSpriteScene2Right = spritesheetNewCharScene2RightJump;
      if (soundMiku && soundMiku.isPlaying()) {
        soundMiku.setVolume(0, 0.5);
      }
    } else {
      // 遠離時播放原本的 Stop 動畫
      currentFrameNewCharScene2Right = (currentFrameNewCharScene2Right + animationSpeed) % totalFramesNewCharScene2Right;
      let frameIndex = floor(currentFrameNewCharScene2Right);
      currentFWScene2Right = frameWidthNewCharScene2Right;
      currentFHScene2Right = frameHeightNewCharScene2Right;
      currentSourceXScene2Right = frameIndex * currentFWScene2Right;
      currentSpriteScene2Right = spritesheetNewCharScene2Right;
      if (soundMiku && soundMiku.isPlaying()) {
        soundMiku.setVolume(0, 0.5);
      }
    }

    let rightCharScaleScene2 = 1.5; // 放大倍率
    let rightCharWScene2 = currentFWScene2Right * rightCharScaleScene2;
    let rightCharHScene2 = currentFHScene2Right * rightCharScaleScene2;

    push();
    translate(rightCharXScene2, rightCharYScene2);
    scale(-1, 1); // 讓角色面向左邊
    image(currentSpriteScene2Right,
          -rightCharWScene2 / 2,
          -rightCharHScene2 / 2,
          rightCharWScene2, rightCharHScene2,
          currentSourceXScene2Right, 0, currentFWScene2Right, currentFHScene2Right);
    pop();
    // --- 新增結束 ---
    // 繪製傳送門 (返回第一背景) - 放在左側
    image(portalImage, 50, height - 280, 100, 200);

    // --- 新增：背景音效隨人物距離減弱 (Scene 2) ---
    let distMickey = abs(centerX - newCharX);
    let distMiku = abs(centerX - rightCharXScene2);
    let minDist2 = min(distMickey, distMiku);
    let vol2 = map(minDist2, 0, 300, 0.05, 0.4, true); // 修改：靠近時音量變得很小 (0.05)，平時 0.4
    if (bgMusic2 && bgMusic2.isPlaying()) bgMusic2.setVolume(vol2, 0.1);

    // --- 新增：通關後開啟第三場景傳送門 ---
    if (allQuestionsAnswered) {
      // 繪製右側傳送門
      image(portalImage, width - 150, height - 280, 100, 200);
      
      // 檢查是否進入傳送門
      if (!isTeleporting && dist(centerX, centerY, width - 100, height - 180) < 80) {
        isTeleporting = true;
        teleportTimer = 0;
        targetBgState = 3; // 設定目標為場景 3
      }

      // --- 新增：左邊角色給予糰子 ---
      push();
      textSize(40);
      textAlign(CENTER, CENTER);
      text('🍡', centerX, centerY - 100);
      pop();
    }
  } else if (currentBgState === 3) {
    // --- 新增：第三場景 ---
    image(bgImage3, 0, 0, width, height);
    
    // --- 新增：金幣特效 ---
    for (let coin of goldCoins) {
      coin.update();
      coin.display();
    }

    // --- 修改：獎盃邏輯 ---
    let trophyX = width / 2;
    let trophyY = height - 150;

    // --- 新增：繪製獎盃底下的特效 ---
    push();
    translate(trophyX, trophyY + 50);
    imageMode(CENTER);
    image(specialEffects2Image, 0, 0, 300, 150); // 顯示在獎盃下方
    pop();

    drawTrophy(trophyX, trophyY, isTrophyOpen);

    // 檢查是否靠近獎盃
    if (!isTrophyOpen && dist(centerX, centerY, trophyX, trophyY) < 100) {
      isTrophyOpen = true;
    }

    if (isTrophyOpen) {
      // 顯示通關文字
      push();
      textAlign(CENTER, CENTER);
      textSize(60);
      fill('#ffd700');
      stroke(0);
      strokeWeight(5);
      text("遊戲通關", width / 2, height / 2 - 100);
      pop();

      // 檢查彩蛋 (獨角獸)
      if (selectedPetIndex === 1 && !hasPetReactionFinished) {
        isPetReactionPlaying = true;
      } else if (!isPetReactionPlaying) {
        // 非獨角獸或動畫已結束，延遲後進入結算
        gameEndTimer++;
        if (gameEndTimer > 120) {
          // if (bgMusic3.isPlaying()) bgMusic3.stop(); // 修改：背景音延後到遊戲結束 (不在此停止)
          currentBgState = 4; // 進入結算場景
        }
      }
    }
  } else if (currentBgState === 4) {
    // --- 新增：第四場景 (結算畫面) ---
    image(bgImage4, 0, 0, width, height);
    
    // 繪製結算畫面新角色 (在原本角色左邊)
    currentFrameEndChar = (currentFrameEndChar + animationSpeed) % totalFramesEndChar;
    let frameIndex = floor(currentFrameEndChar);
    let sourceX = frameIndex * frameWidthEndChar;
    
    let endCharX = width / 2; // 修改：在中間
    let endCharY = height - 180;
    let endCharScale = 1.5;
    let w = frameWidthEndChar * endCharScale;
    let h = frameHeightEndChar * endCharScale;
    
    image(spritesheetEndChar, endCharX - w / 2, endCharY - h / 2, w, h, sourceX, 0, frameWidthEndChar, frameHeightEndChar);

    // 顯示結算文字
    push();
    textAlign(CENTER, CENTER);
    textSize(60);
    fill('#cfe8ffff');
    text("遊戲結束", width / 2, height / 2 - 150);
    
    textSize(40);
    fill('#ff002bff');
    text("最終分數: " + score, width / 2, height / 2 - 50);
    
    textSize(24);
    fill('#cfe8ffff');
    text("感謝您的遊玩！", width / 2, height / 2 + 50);
    restartButton.show(); // 顯示重新開始按鈕
    pop();
    return; // 新增：結束繪製，不繪製主角與寵物
  }
  // --- 新增結束 ---

  // --- 新增：繪製分數 ---
  push(); // 儲存當前繪圖設定
  textSize(32);
  fill('#bde0fe'); // 修改為新的顏色
  stroke(0);
  strokeWeight(4);
  textAlign(LEFT, TOP);
  text('分數: ' + score, 20, 20);
  pop(); // 恢復繪圖設定
  // --- 分數繪製結束 ---

  // --- 新增：繪製生命值 ---
  drawHealth();

  // --- 以下為原角色的邏輯 ---
  let frameIndex;
  // --- 修改：左邊角色的動畫邏輯 ---
  let leftCharCurrentSpritesheet = spritesheetNewChar;
  let leftCharCurrentFrameWidth = frameWidthNewChar;
  let leftCharCurrentFrameHeight = frameHeightNewChar;
  let leftCharTotalFrames = totalFramesNewChar;

  if (isLeftCharHurt) {
    // 狀態：受擊 (優先度最高)
    leftCharCurrentSpritesheet = spritesheetLeftCharHurt;
    leftCharCurrentFrameWidth = frameWidthLeftCharHurt;
    leftCharCurrentFrameHeight = frameHeightLeftCharHurt;
    leftCharTotalFrames = totalFramesLeftCharHurt;
    currentFrameNewChar = (currentFrameNewChar + animationSpeed) % leftCharTotalFrames; // 循環播放
  } else if (leftCharAnimState === 'correct') {
    leftCharCurrentSpritesheet = spritesheetLeftCharCorrect;
    leftCharCurrentFrameWidth = frameWidthLeftCharCorrect;
    leftCharCurrentFrameHeight = frameHeightLeftCharCorrect;
    leftCharTotalFrames = totalFramesLeftCharCorrect;
    currentFrameNewChar += animationSpeed;
    if (currentFrameNewChar >= leftCharTotalFrames) {
      leftCharAnimState = 'idle'; // 動畫播放完畢，回到閒置
    }
  } else if (leftCharAnimState === 'incorrect') {
    leftCharCurrentSpritesheet = spritesheetLeftCharIncorrect;
    leftCharCurrentFrameWidth = frameWidthLeftCharIncorrect;
    leftCharCurrentFrameHeight = frameHeightLeftCharIncorrect;
    leftCharTotalFrames = totalFramesLeftCharIncorrect;
    currentFrameNewChar += animationSpeed;
    if (currentFrameNewChar >= leftCharTotalFrames) {
      leftCharAnimState = 'idle'; // 動畫播放完畢，回到閒置
    }
  }
  
  // 如果是閒置狀態，則循環播放
  if (leftCharAnimState === 'idle' && !isLeftCharHurt) {
    currentFrameNewChar = (currentFrameNewChar + animationSpeed) % leftCharTotalFrames;
  }

  let frameIndexNewChar = floor(currentFrameNewChar);
  let sourceXNewChar = frameIndexNewChar * leftCharCurrentFrameWidth;

  // 左邊角色放大倍率與位置
  let leftCharScale = 1.5;
  let leftCharW = leftCharCurrentFrameWidth * leftCharScale;
  let leftCharH = leftCharCurrentFrameHeight * leftCharScale;
  let leftCharX = width * 0.2;
  let leftCharY = height - 120; // 調整Y軸位置，讓角色在地板上 (第一場景往下一點)

  // --- 新增：傳送門碰撞偵測 ---
  if (!isTeleporting) {
    if (currentBgState === 1) {
      // 檢查是否碰到右側傳送門 (距離小於 80)
      if (isScene1Cleared && dist(centerX, centerY, width - 100, height - 120) < 80) {
        isTeleporting = true;
        teleportTimer = 0;
        targetBgState = 2; // 設定目標為場景 2
      }
    } else {
      // 檢查是否碰到左側傳送門
      if (dist(centerX, centerY, 100, height - 180) < 80) {
        isTeleporting = true;
        teleportTimer = 0;
        targetBgState = 1; // 設定目標為場景 1
      }
    }
  }
  // --- 新增結束 ---

  // 新增：主要角色的放大倍率 (從後面移到這裡)
  let mainCharScale = 1.5;
  let rotationAngle = 0; // 新增：旋轉角度

  // --- 新增：傳送動畫邏輯 ---
  if (isTeleporting) {
    teleportTimer++;
    const duration = 30; // 動畫持續幀數 (約0.5秒)
    let t = teleportTimer / duration;

    // 停止移動輸入
    moveDirection = 0;
    isMoving = false;

    // 計算縮放與旋轉
    mainCharScale = lerp(1.5, 0, t); // 從 1.5 縮小到 0
    rotationAngle = t * TWO_PI * 2; // 旋轉兩圈

    // 動畫結束後切換場景
    if (teleportTimer >= duration) {
      isTeleporting = false;
      teleportTimer = 0;
      
      // 切換場景前停止當前音樂
      if (currentBgState === 1) {
        if (bgMusic1.isPlaying()) bgMusic1.stop();
        // 新增：切換場景時停止角色音效
        if (soundKirby) soundKirby.stop();
        if (soundJojo) soundJojo.stop();
        if (soundDoraemon) soundDoraemon.stop();
      }
      if (currentBgState === 2) {
        if (bgMusic2.isPlaying()) bgMusic2.stop();
        // 新增：切換場景時停止角色音效
        if (soundMiku) soundMiku.stop();
        if (soundMickey) soundMickey.stop();
      }
      if (currentBgState === 3 && bgMusic3.isPlaying()) bgMusic3.stop();

      currentBgState = targetBgState; // 切換到目標場景
      
      // 播放新場景音樂
      if (currentBgState === 1) bgMusic1.loop();
      if (currentBgState === 2) bgMusic2.loop();
      if (currentBgState === 3) bgMusic3.loop();

      if (currentBgState === 1) {
        characterX = width / 2 - 200; // 傳送到右側
      } else if (currentBgState === 2 || currentBgState === 3) {
        characterX = -width / 2 + 200; // 傳送到左側
      }
    }
  }
  // --- 傳送動畫結束 ---

  let mainCharW = currentFrameWidth * mainCharScale;
  let mainCharH = currentFrameHeight * mainCharScale;

  // --- 新增：只有在第一個場景才繪製和處理左右角色 ---
  if (currentBgState === 1) {
    // 將新角色繪製在畫面左側約 1/4 處
    image(leftCharCurrentSpritesheet,
          leftCharX - leftCharW / 2,
          leftCharY - leftCharH / 2,
          leftCharW, leftCharH,
          sourceXNewChar, 0, leftCharCurrentFrameWidth, leftCharCurrentFrameHeight);

    // --- 新增：右邊角色的互動與繪製邏輯 ---
    let rightCharX = width * 0.8; // 修改：讓右邊角色更靠右，增加間距
    let rightCharY = height - 120; // 調整Y軸位置，讓角色在地板上 (第一場景往下一點)
    let rightProximityThreshold = 200; // 觸發反應的距離閾值

    // --- 新增：繪製第一場景右邊角色前面的新角色 ---
    let newCharScene1X = rightCharX - 250; // 在右邊角色前面 (左側) - 增加間距
    let newCharScene1Y = height - 120; // 與其他角色相同的 Y 軸基準 (第一場景往下一點)

    // 檢查是否需要顯示答錯反應 (上一次答錯且玩家靠近)
    let distToNewCharScene1 = abs(centerX - newCharScene1X);
    let isReactingToIncorrect = lastAnswerWasIncorrect && distToNewCharScene1 < 200;

    if (isReactingToIncorrect) {
      // 播放答錯反應動畫 (7-2)
      currentFrameNewCharScene1Incorrect = (currentFrameNewCharScene1Incorrect + animationSpeed) % totalFramesNewCharScene1Incorrect;
      let frameIndex = floor(currentFrameNewCharScene1Incorrect);
      let sourceX = frameIndex * frameWidthNewCharScene1Incorrect;
      let scaleFactor = 1.5;
      let w = frameWidthNewCharScene1Incorrect * scaleFactor;
      let h = frameHeightNewCharScene1Incorrect * scaleFactor;

      image(spritesheetNewCharScene1Incorrect, newCharScene1X - w / 2, newCharScene1Y - h / 2, w, h, sourceX, 0, frameWidthNewCharScene1Incorrect, frameHeightNewCharScene1Incorrect);
      
      // 顯示提示框
      drawSpeechBubble(newCharScene1X, newCharScene1Y - h / 2 - 20, lastIncorrectFeedback, '#ff99c8');

      if (soundDoraemon && soundDoraemon.isLoaded()) {
        soundDoraemon.setVolume(1.0, 0.3); // 淡入
        if (!soundDoraemon.isPlaying()) soundDoraemon.play(); // 播完重播
      }
    } else {
      // 播放原本動畫 (7-1)
      currentFrameNewCharScene1 = (currentFrameNewCharScene1 + animationSpeed) % totalFramesNewCharScene1;
      let frameIndexNewCharScene1 = floor(currentFrameNewCharScene1);
      let sourceXNewCharScene1 = frameIndexNewCharScene1 * frameWidthNewCharScene1;

      let newCharScene1Scale = 1.5;
      let newCharScene1W = frameWidthNewCharScene1 * newCharScene1Scale;
      let newCharScene1H = frameHeightNewCharScene1 * newCharScene1Scale;

      image(spritesheetNewCharScene1,
            newCharScene1X - newCharScene1W / 2,
            newCharScene1Y - newCharScene1H / 2,
            newCharScene1W, newCharScene1H,
            sourceXNewCharScene1, 0, frameWidthNewCharScene1, frameHeightNewCharScene1);
      
      if (soundDoraemon && soundDoraemon.isPlaying()) {
        soundDoraemon.setVolume(0, 0.5); // 淡出
      }
    }

    // 檢查玩家角色和右邊角色的距離
    if (abs(centerX - rightCharX) < rightProximityThreshold) {
      if (!isRightCharReacting) {
        isRightCharReacting = true;
        // 首次靠近時，如果處於閒置狀態，則開始詢問姓名
        if (rightCharDialogState === 'idle' && playerName === '') {
          startNameDialog();
        }
      }
      if (soundKirby && soundKirby.isLoaded()) {
        soundKirby.setVolume(1.0, 0.3); // 淡入
        if (!soundKirby.isPlaying()) soundKirby.play(); // 播完重播
      }
    } else {
      if (isRightCharReacting) {
        isRightCharReacting = false;
        isRightCharHurt = false;
        resetNameDialog();
      }
      if (soundKirby && soundKirby.isPlaying()) {
        soundKirby.setVolume(0, 0.5); // 淡出
      }
    }
    
    let shouldFlipRightChar = centerX < rightCharX;
    push();
    if (isRightCharHurt) {
      currentFrameRollChar = (currentFrameRollChar + animationSpeed) % totalFramesRightCharHurtNew;
      let frameIndex = floor(currentFrameRollChar);
      let sourceX = frameIndex * frameWidthRightCharHurtNew;
      let scaleFactor = 1.5;
      let w = frameWidthRightCharHurtNew * scaleFactor;
      let h = frameHeightRightCharHurtNew * scaleFactor;
      image(spritesheetRightCharHurtNew, rightCharX - w / 2, rightCharY - h / 2, w, h, sourceX, 0, frameWidthRightCharHurtNew, frameHeightRightCharHurtNew);
    } else if (isRightCharReacting) {
      currentFrameRollChar = (currentFrameRollChar + animationSpeed) % totalFramesJumpChar;
      let frameIndex = floor(currentFrameRollChar);
      let sourceX = frameIndex * frameWidthJumpChar;
      let scaleFactor = 1.5;
      let w = frameWidthJumpChar * scaleFactor;
      let h = frameHeightJumpChar * scaleFactor;
      if (shouldFlipRightChar) {
        translate(rightCharX + w / 2, rightCharY - h / 2);
        scale(-1, 1);
        image(spritesheetJumpChar, 0, 0, w, h, sourceX, 0, frameWidthJumpChar, frameHeightJumpChar);
      } else {
        image(spritesheetJumpChar, rightCharX - w / 2, rightCharY - h / 2, w, h, sourceX, 0, frameWidthJumpChar, frameHeightJumpChar);
      }
    } else {
      currentFrameRollChar = (currentFrameRollChar + animationSpeed) % totalFramesRollChar;
      let frameIndex = floor(currentFrameRollChar);
      let sourceX = frameIndex * frameWidthRollChar;
      let scaleFactor = 1.5;
      let w = frameWidthRollChar * scaleFactor;
      let h = frameHeightRollChar * scaleFactor;
      if (shouldFlipRightChar) {
        translate(rightCharX + w / 2, rightCharY - h / 2);
        scale(-1, 1);
        image(spritesheetRollChar, 0, 0, w, h, sourceX, 0, frameWidthRollChar, frameHeightRollChar);
      } else {
        image(spritesheetRollChar, rightCharX - w / 2, rightCharY - h / 2, w, h, sourceX, 0, frameWidthRollChar, frameHeightRollChar);
      }
    }
    pop();

    // --- 新增：測驗互動邏輯 ---
    let quizProximityThreshold = 180;
    if (abs(centerX - leftCharX) < quizProximityThreshold) {
      if (quizState === 'idle') startQuiz();
      if (soundJojo && soundJojo.isLoaded()) {
        soundJojo.setVolume(1.0, 0.3); // 淡入
        if (!soundJojo.isPlaying()) soundJojo.play(); // 播完重播
      }
    } else {
      if (quizState !== 'idle') {
        isLeftCharHurt = false;
        resetQuiz();
      }
      if (soundJojo && soundJojo.isPlaying()) {
        soundJojo.setVolume(0, 0.5); // 淡出
      }
    }

    // 根據測驗狀態繪製對話
    if (quizState === 'asking') {
      let rawQuestion = currentQuestionRow.getString('question');
      let questionText = formatQuestionText(rawQuestion, quizData === quizDataPsych);
      drawSpeechBubble(leftCharX, leftCharY - leftCharH / 2 - 20, questionText, '#fcbf49');
    } else if (quizState === 'answered' && lastAnswerWasIncorrect) {
      drawSpeechBubble(leftCharX, leftCharY - leftCharH / 2 - 20, feedbackMessage, '#ff99c8');
    } else if (quizState === 'finished' && allQuestionsAnswered) {
      const congratsMessage = "太厲害了！這份糰子(🍡)是給你的獎勵！";
      drawSpeechBubble(leftCharX, leftCharY - leftCharH / 2 - 20, congratsMessage, '#fcbf49');
    } else if (quizState === 'scene_cleared') {
      // 當前場景題目已做完，但遊戲未結束
      drawSpeechBubble(leftCharX, leftCharY - leftCharH / 2 - 20, "這裡的問題都解決了！去另一個場景看看吧！", '#a8dadc');
    }

    // --- 新增：右側角色對話框繪製邏輯 ---
    if (rightCharDialogState === 'asking_name') {
      drawSpeechBubble(rightCharX, rightCharY - 80, "請問您的姓名??", '#fcbf49');
      drawSpeechBubble(centerX, centerY - mainCharH / 2 - 20, "請在下方輸入框輸入後按 Enter", '#ff7b00');
    } else if (rightCharDialogState === 'welcoming') {
      drawSpeechBubble(rightCharX, rightCharY - 80, welcomeMessage, '#fcbf49');
    }

    // --- 新增：背景音效隨人物距離減弱 (Scene 1) ---
    let distJojo = abs(centerX - leftCharX);
    let distKirby = abs(centerX - rightCharX);
    let distDoraemon = abs(centerX - newCharScene1X);
    let minDist1 = min(distJojo, distKirby, distDoraemon);
    let vol1 = map(minDist1, 0, 300, 0.05, 0.4, true); // 修改：靠近時音量變得很小 (0.05)，平時 0.4
    if (bgMusic1 && bgMusic1.isPlaying()) bgMusic1.setVolume(vol1, 0.1);
  }

  if (isFighting2) {
    // 新增：第二種攻擊動畫 (空白鍵)
    currentFrame += animationSpeed * 0.9;
    if (currentFrame >= totalFrames) {
      // 攻擊結束，回到待機
      isFighting2 = false;
      currentFrame = 0;
      currentSpritesheet = spritesheetStop;
      currentFrameWidth = frameWidthStop;
      currentFrameHeight = frameHeightStop;
      totalFrames = 7;
      frameIndex = 0;
    } else {
      frameIndex = floor(currentFrame);
    }
  } else if (isFighting) {
    // 攻擊動畫（一次性播放 totalFrames＝57 幀）
    currentFrame += animationSpeed * 0.9;
    if (currentFrame >= totalFrames) {
      // 攻擊結束，回到待機
      isFighting = false;
      currentFrame = 0;
      currentSpritesheet = spritesheetStop;
      currentFrameWidth = frameWidthStop;
      currentFrameHeight = frameHeightStop;
      totalFrames = 7;
      frameIndex = 0;
    } else {
      frameIndex = floor(currentFrame);
    }
  } else if (isJumping) {
    // 跳躍一次性播放 totalFrames（10）幀，播放完後結束跳躍
    currentFrame += animationSpeed * 1.2;
    if (currentFrame >= totalFrames) {
      // 跳躍結束，回到跑步或待機狀態
      isJumping = false;
      characterY = 0;
      currentFrame = 0;
      if (isMoving) {
        currentSpritesheet = spritesheetRun;
        currentFrameWidth = frameWidthRun;
        currentFrameHeight = frameHeightRun;
        totalFrames = 19;
      } else {
        currentSpritesheet = spritesheetStop;
        currentFrameWidth = frameWidthStop;
        currentFrameHeight = frameHeightStop;
        totalFrames = 7;
      }
      frameIndex = 0;
    } else {
      frameIndex = floor(currentFrame);
      // 使用 sin 讓起落更平滑：progress 從 0 -> 1
      let progress = frameIndex / (totalFrames - 1);
      characterY = -maxJumpHeight * sin(progress * PI);
    }
  } else {
    // 常態（待機或跑步）
    currentFrame = (currentFrame + animationSpeed) % totalFrames;
    frameIndex = floor(currentFrame);
    characterY = 0;
  }

  // 水平移動（無論是否跳躍，只要按著方向鍵就會水平移動）
  if (moveDirection !== 0) {
    // 根據放大倍率調整移動速度，讓手感一致
    let scaleFactor = 1.5;
    characterX += moveSpeed * moveDirection;
    // 邊界處理：讓角色不跑出畫面
    // 使用放大後的寬度來計算邊界
    let halfW = (currentFrameWidth * scaleFactor) / 2;
    let minX = -width / 2 + halfW;
    let maxX = width / 2 - halfW;
    if (characterX < minX) characterX = minX;
    if (characterX > maxX) characterX = maxX;
  }

  // 計算精靈來源
  let sourceX = frameIndex * currentFrameWidth;
  let sourceY = 0;

  // 在視窗中間繪製角色
  push();
  translate(centerX, centerY); // 將原點移至角色中心

  // 如果正在傳送，執行旋轉
  if (isTeleporting) {
    rotate(rotationAngle);
  }

  // 若最後方向為左，或目前正在向左移動，則翻轉
  if (moveDirection === -1 || (moveDirection === 0 && lastDirection === -1)) {
    scale(-1, 1);
  }

  // 繪製角色 (因為已經 translate 到中心，所以座標設為 -W/2, -H/2)
  image(currentSpritesheet,
        -mainCharW / 2,
        -mainCharH / 2,
        mainCharW,
        mainCharH,
        sourceX,
        sourceY,
        currentFrameWidth,
        currentFrameHeight);
  pop();

  // --- 新增：答錯時在角色旁邊顯示特效 ---
  if (lastAnswerWasIncorrect) {
    push();
    imageMode(CENTER);
    let effectX, effectY;

    if (currentBgState === 1) {
      // 第一場景左邊角色位置 (width * 0.2)
      effectX = (width * 0.2) - 180; // 固定在左邊角色的左邊
      effectY = (height - 120) - 50;
    } else if (currentBgState === 2) {
      // 第二場景左邊角色位置 (width / 4)
      effectX = (width / 4) - 180; // 固定在左邊角色的左邊
      effectY = (height - 180) - 50;
    } else {
      effectX = width / 2;
      effectY = height / 2;
    }

    image(specialEffectsImage, effectX, effectY, 100, 100); 
    pop();
  }

  // --- 新增：繪製跟隨的寵物 ---
  if (selectedPetIndex !== -1) {
    // --- 新增：檢查是否播放彩蛋反應 ---
    if (isPetReactionPlaying) {
      currentFramePetUnicornReaction += animationSpeed;
      if (currentFramePetUnicornReaction >= totalFramesPetUnicornReaction) {
        currentFramePetUnicornReaction = totalFramesPetUnicornReaction - 1;
        hasPetReactionFinished = true;
        isPetReactionPlaying = false;
        // 動畫結束後，稍作停留再結束遊戲
        gameEndTimer = 60; // 設定為 60，讓下面的邏輯再跑 60 幀 (約1秒) 後結束
      }
      
      let frameIndex = floor(currentFramePetUnicornReaction);
      let sourceX = frameIndex * frameWidthPetUnicornReaction;
      
      let facingRight = (moveDirection === 1) || (moveDirection === 0 && lastDirection === 1);
      let petOffsetX = facingRight ? -120 : 120;
      let petX = centerX + petOffsetX;
      let petScale = 2.0; // 放大一倍
      let petY = centerY + mainCharH / 2 - (frameHeightPetUnicornReaction * petScale) / 2;

      push();
      translate(petX, petY);
      if (!facingRight) scale(-1, 1);
      image(spritesheetPetUnicornReaction, 
            -frameWidthPetUnicornReaction * petScale / 2, 
            -frameHeightPetUnicornReaction * petScale / 2, 
            frameWidthPetUnicornReaction * petScale, 
            frameHeightPetUnicornReaction * petScale, 
            sourceX, 0, frameWidthPetUnicornReaction, frameHeightPetUnicornReaction);
      pop();

    } else {
      // 原本的寵物繪製邏輯
      let pet = petConfigs[selectedPetIndex];
      let petSheet = petSpritesheets[selectedPetIndex];
      
      currentFramePet = (currentFramePet + animationSpeed) % pet.frames;
      let petFrameIndex = floor(currentFramePet);
      let petSourceX = petFrameIndex * pet.frameW;

      let facingRight = (moveDirection === 1) || (moveDirection === 0 && lastDirection === 1);
      let petOffsetX = facingRight ? -120 : 120; // 增加距離
      let petX = centerX + petOffsetX;
      let petScale = 0.75; // 縮小一倍 (1.5 -> 0.75)
      let petY = centerY + mainCharH / 2 - (pet.frameH * petScale) / 2; // 放在地板上

      push();
      translate(petX, petY);
      if (!facingRight) {
        scale(-1, 1); // 翻轉寵物
      }
      
      image(petSheet, -pet.frameW * petScale / 2, -pet.frameH * petScale / 2, pet.frameW * petScale, pet.frameH * petScale, petSourceX, 0, pet.frameW, pet.frameH);
      pop();
    }
  }

  // --- 新增：碰撞偵測 ---
  // 只有在主角攻擊時，才進行偵測
  if (isFighting || isFighting2) {
    // 主角包圍盒
    let mainLeft = centerX - mainCharW / 2;
    let mainRight = centerX + mainCharW / 2;

    if (currentBgState === 1) {
      // --- 場景 1 碰撞偵測 ---
      // 偵測右邊角色
      let rightCharX = width * 0.8;
      let rightCharCurrentW = (isRightCharReacting ? frameWidthJumpChar : frameWidthRollChar) * 2;
      let rightLeft = rightCharX - rightCharCurrentW / 2;
      let rightRight = rightCharX + rightCharCurrentW / 2;

      if (mainRight > rightLeft && mainLeft < rightRight) {
        isRightCharHurt = true; // 觸發受擊狀態
        if (!damageDealtThisAttack) {
          score -= 5;
          damageDealtThisAttack = true;
        }
      }

      // 偵測左邊角色
      let leftLeft = leftCharX - leftCharW / 2;
      let leftRight = leftCharX + leftCharW / 2;
      if (mainRight > leftLeft && mainLeft < leftRight) {
        isLeftCharHurt = true; // 觸發受擊狀態
        if (!damageDealtThisAttack) {
          score -= 5;
          damageDealtThisAttack = true;
        }
      }
    } else if (currentBgState === 2) {
      // --- 場景 2 碰撞偵測 ---
      // 偵測左邊角色
      let newCharX = width / 4;
      let newCharW = frameWidthNewCharScene2 * 1.5; // 估算寬度
      let leftLeft = newCharX - newCharW / 2;
      let leftRight = newCharX + newCharW / 2;

      if (mainRight > leftLeft && mainLeft < leftRight) {
        isScene2LeftCharHurt = true; // 觸發受擊狀態
        if (!damageDealtThisAttack) {
          score -= 5;
          damageDealtThisAttack = true;
        }
      }

      // 偵測右邊角色
      let rightCharXScene2 = width * 0.8;
      let rightCharWScene2 = frameWidthNewCharScene2Right * 1.5; // 估算寬度
      let rightLeft = rightCharXScene2 - rightCharWScene2 / 2;
      let rightRight = rightCharXScene2 + rightCharWScene2 / 2;

      if (mainRight > rightLeft && mainLeft < rightRight) {
        isScene2RightCharHurt = true; // 觸發受擊狀態
        if (!damageDealtThisAttack) {
          score -= 5;
          damageDealtThisAttack = true;
        }
      }
    }
  }

  // --- 新增：如果所有問題都答對了，在主角頭上畫糰子 ---
  if (allQuestionsAnswered) {
    // 新增：繪製彩帶特效
    for (let confetti of confettis) {
      confetti.update();
      confetti.display();
    }
  }

  // --- 新增：更新並繪製櫻花 ---
  if (currentBgState === 1) {
    for (let petal of petals) {
      petal.update();
      petal.display();
    }
  }

  // --- 新增：繪製獎勵選擇介面 (最上層) ---
  if (isChoosingReward) {
    drawRewardSelection();
  }

  drawSettingsMenu(); // 新增：繪製設定選單
}

function keyPressed() {
  if (gameState === 'start') {
    if (keyCode === ENTER) {
      startGame(); // 改用函式處理
    }
    return; // 封面狀態下不處理移動攻擊
  }
  if (isChoosingReward) return; // 新增：選擇獎勵時不處理移動攻擊
  if (isTeleporting) return; // 傳送中不接受鍵盤輸入

  if (keyCode === RIGHT_ARROW) {
    // 切換到跑步動畫，向右移動
    currentSpritesheet = spritesheetRun;
    currentFrameWidth = frameWidthRun;
    currentFrameHeight = frameHeightRun;
    totalFrames = 19;
    currentFrame = 0;
    isMoving = true;
    moveDirection = 1;
    lastDirection = 1;
  } else if (keyCode === LEFT_ARROW) {
    // 切換到跑步動畫，向左移動
    currentSpritesheet = spritesheetRun;
    currentFrameWidth = frameWidthRun;
    currentFrameHeight = frameHeightRun;
    totalFrames = 19;
    currentFrame = 0;
    isMoving = true;
    moveDirection = -1;
    lastDirection = -1;
  } else if (keyCode === UP_ARROW) {
    // 跳躍（一次性播放跳躍精靈的所有幀）
    if (!isJumping) {
      isJumping = true;
      currentSpritesheet = spritesheetJump;
      currentFrameWidth = frameWidthJump;
      currentFrameHeight = frameHeightJump;
      totalFrames = 10;
      currentFrame = 0;
    }
  } else if (keyCode === DOWN_ARROW) {
    // 向下鍵：攻擊動畫（一次性播放 57 幀）
    if (!isFighting) {
      isFighting = true;
      damageDealtThisAttack = false; // 重置傷害判定
      // 攻擊時暫停水平移動
      moveDirection = 0;
      isMoving = false;
      currentSpritesheet = spritesheetFight;
      currentFrameWidth = frameWidthFight;
      currentFrameHeight = frameHeightFight;
      totalFrames = 57;
      currentFrame = 0;
    }
  } else if (keyCode === 32) { // 32 是空白鍵的 keyCode
    // 空白鍵：第二種攻擊動畫
    if (!isFighting && !isFighting2 && !isJumping) { // 避免在其他動作中觸發
      isFighting2 = true;
      damageDealtThisAttack = false; // 重置傷害判定
      // 攻擊時暫停水平移動
      moveDirection = 0;
      isMoving = false;
      currentSpritesheet = spritesheetFight2;
      currentFrameWidth = frameWidthFight2;
      currentFrameHeight = frameHeightFight2;
      totalFrames = totalFramesFight2;
      currentFrame = 0;
    }
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    moveDirection = 0;
    isMoving = false;
    // 只有在不跳躍時才回到待機
    if (!isJumping) {
      currentSpritesheet = spritesheetStop;
      currentFrameWidth = frameWidthStop;
      currentFrameHeight = frameHeightStop;
      totalFrames = 7;
      currentFrame = 0;
    }
  } else if (keyCode === LEFT_ARROW) {
    moveDirection = 0;
    isMoving = false;
    if (!isJumping) {
      currentSpritesheet = spritesheetStop;
      currentFrameWidth = frameWidthStop;
      currentFrameHeight = frameHeightStop;
      totalFrames = 7;
      currentFrame = 0;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawStartScreen() {
  push();
  textAlign(CENTER, CENTER);
  
  // 背景遮罩 (改為漸變色)
  let ctx = drawingContext;
  ctx.save();
  // 建立垂直線性漸變
  let gradient = ctx.createLinearGradient(width / 2, height / 2 - 175, width / 2, height / 2 + 175);
  gradient.addColorStop(0, '#ffc8dd');
  gradient.addColorStop(1, '#ffafcc');
  ctx.fillStyle = gradient;
  
  // 使用原生 Canvas API 繪製圓角矩形以支援漸變填充
  ctx.beginPath();
  // x, y, w, h, radii (注意：原生 API 座標為左上角，非中心)
  if (ctx.roundRect) {
    ctx.roundRect(width / 2 - 300, height / 2 - 175, 600, 350, 20);
  } else {
    ctx.rect(width / 2 - 300, height / 2 - 175, 600, 350);
  }
  ctx.fill();
  ctx.restore();

  // 裝飾：繪製糰子
  drawDango(width / 2 - 240, height / 2 - 60, -0.2);
  drawDango(width / 2 + 240, height / 2 - 60, 0.2);

  // 遊戲標題
  textSize(60);
  fill('#fdf0d5');
  stroke(0);
  strokeWeight(5);
  text("我要吃糰子", width / 2, height / 2 - 50);

  // 開始提示 (閃爍效果)
  textSize(30);
  fill(255);
  noStroke();
  if (frameCount % 60 < 40) {
    text("請按 Enter 鍵開始遊戲", width / 2, height / 2 + 50);
  }
  
  // 操作說明
  textSize(20);
  fill('#325da8ff');
  text("左右鍵移動、上鍵跳躍、空白鍵小招、下鍵大招攻擊", width / 2, height / 2 + 110);
  text("提示者:多拉A夢、初音未來", width / 2, height / 2 + 140);

  // 新增：作者資訊
  textAlign(LEFT, BOTTOM);
  textSize(20);
  fill('#eaf6ffff');
  text("作者:張怡婕 學號:414730506", 20, height - 20);

  pop();
}

// --- 新增：彩帶類別 ---
class Confetti {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0); // 從畫面上方開始
    this.size = random(5, 10);
    this.color = color(random(255), random(255), random(255)); // 隨機顏色
    this.speedY = random(2, 6); // 下落速度
    this.speedX = random(-2, 2); // 水平飄動
    this.rotation = random(TWO_PI);
    this.rotationSpeed = random(-0.1, 0.1);
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotationSpeed;

    // 循環播放：掉出畫面後回到頂部
    if (this.y > height) {
      this.y = random(-100, -10);
      this.x = random(width);
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(this.color);
    noStroke();
    rect(0, 0, this.size, this.size * 0.6); // 長方形彩帶
    pop();
  }
}

// --- 新增：切換靜音函式 ---
function toggleMute() {
  isMuted = !isMuted;
  if (isMuted) {
    outputVolume(0); // p5.sound 全域靜音
    muteButton.html('開啟聲音');
    muteButton.style('background-color', '#ffcccc');
  } else {
    outputVolume(1); // 恢復聲音
    muteButton.html('靜音');
    muteButton.style('background-color', '#f0f0f0');
  }
}

// --- 新增：開始遊戲函式 ---
function startGame() {
  gameState = 'mode_selection'; // 修改：先進入模式選擇
}

// --- 新增：確認寵物並開始遊玩函式 ---
function startPlaying() {
  if (selectedPetIndex === -1) {
    alert("請先點擊圖片選擇一隻寵物！");
    return;
  }
  // 在使用者互動(點擊開始遊戲按鈕)後播放音樂
  if (bgMusic1 && !bgMusic1.isPlaying()) {
    bgMusic1.loop();
  }
  gameState = 'playing';
  startButton.hide();
}

// --- 新增：重置遊戲函式 ---
function resetGame() {
  // 停止所有音樂與音效
  if (bgMusic1) bgMusic1.stop();
  if (bgMusic2) bgMusic2.stop();
  if (bgMusic3) bgMusic3.stop();
  if (soundKirby) soundKirby.stop();
  if (soundJojo) soundJojo.stop();
  if (soundDoraemon) soundDoraemon.stop();
  if (soundMiku) soundMiku.stop();
  if (soundMickey) soundMickey.stop();

  // 重置遊戲變數
  gameState = 'start';
  currentBgState = 1;
  score = 0;
  health = 3;
  hasShield = false;
  attackPower = 1;
  characterX = 0;
  characterY = 0;
  
  // 重置測驗
  correctlyAnsweredIndices.clear();
  incorrectlyAnsweredIndices.clear();
  allQuestionsAnswered = false;
  quizState = 'idle';
  hasReceivedHalfwayBonus = false;
  
  // 重置場景狀態
  scene1RewardClaimed = false;
  isChoosingReward = false;
  topCharHealth = 3;
  isTopCharScene2Defeated = false;
  isTopCharDying = false;
  isTopCharHurt = false;
  isTrophyOpen = false;
  gameEndTimer = 0;
  isPetReactionPlaying = false;
  hasPetReactionFinished = false;
  selectedPetIndex = -1;
  
  restartButton.hide();

  // 新增：重置設定選單狀態
  isSettingsOpen = false;
  isShowingInstructions = false;
  if (menuContinueButton) menuContinueButton.hide();
  if (menuRestartButton) menuRestartButton.hide();
  if (menuInstructionsButton) menuInstructionsButton.hide();

  // 隱藏模式按鈕
  modeButtonProg.hide();
  modeButtonPsych.hide();

  // 隱藏選擇題按鈕
  if (btnA) btnA.hide();
  if (btnB) btnB.hide();
  if (btnC) btnC.hide();
  if (btnD) btnD.hide();
}

// --- 新增：爆炸特效類別 ---
class ExplosionParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
    this.size = random(10, 40);
    this.alpha = 255;
    // 隨機產生煙霧(灰)或火焰(橘紅)顏色
    if (random() > 0.5) {
      this.color = color(100, 100, 100); // 灰色煙霧
    } else {
      this.color = color(255, random(100, 200), 0); // 橘紅色火焰
    }
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5; // 逐漸消失
    this.size *= 0.95; // 逐漸變小
  }

  display() {
    push();
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  isFinished() {
    return this.alpha <= 0;
  }
}

// --- 新增：繪製對話框的輔助函式 ---
function drawSpeechBubble(x, y, textContent, bgColor, boxWidth, boxHeight) {
  push();
  rectMode(CORNER);
  textSize(16);
  let maxW = 400;
  
  // 計算行數與寬度 (支援手動換行 \n)
  let lines = textContent.split('\n');
  let totalLines = 0;
  let maxLineWidth = 0;
  
  for (let line of lines) {
    let lw = textWidth(line);
    if (lw > maxLineWidth) maxLineWidth = lw;
    let segmentLines = ceil(lw / (maxW - 30)); // 修改：更保守的換行估算，確保高度足夠
    if (segmentLines < 1) segmentLines = 1;
    totalLines += segmentLines;
  }
  
  let w = boxWidth;
  if (!w) {
    w = min(maxLineWidth + 40, maxW + 40);
    if (w < 80) w = 80;
  }
  
  let h = boxHeight || (totalLines * 30 + 40); // 修改：增加高度與間距
  let r = 15;

  fill(bgColor);
  stroke(0);
  strokeWeight(2);
  rect(x - w / 2, y - h, w, h, r);

  fill(0);
  noStroke();
  
  if (totalLines === 1 && !textContent.includes('\n')) {
     textAlign(CENTER, CENTER);
     text(textContent, x, y - h / 2);
  } else {
     textAlign(LEFT, CENTER);
     text(textContent, x - w / 2 + 20, y - h + 10, w - 40, h - 20);
  }
  pop();
}

// --- 新增：測驗系統相關函式 ---

function startQuiz() {
  // --- 修改：根據場景分配題目 ---
  let totalQuestions = quizData.getRowCount();
  let splitIndex = ceil(totalQuestions / 2); // 例如 7 題，切分點為 4 (前4題給場景1，後3題給場景2)
  
  let startRange = 0;
  let endRange = totalQuestions;

  if (currentBgState === 1) {
    endRange = splitIndex;
  } else if (currentBgState === 2) {
    startRange = splitIndex;
  }

  let unansweredIndices = [];
  for (let i = startRange; i < endRange; i++) {
    if (!correctlyAnsweredIndices.has(i)) {
      unansweredIndices.push(i);
    }
  }

  // 如果當前場景的題目都答對了
  if (unansweredIndices.length === 0) {
    // 檢查是否所有題目(全場景)都答對
    if (correctlyAnsweredIndices.size === totalQuestions && totalQuestions > 0) {
      allQuestionsAnswered = true;
      quizState = 'finished';
      // 手動隱藏 UI，不呼叫 resetQuiz 以免狀態被重置為 idle
      answerInput.hide();
      submitButton.hide();
      nextQuestionButton.hide();
      tryAgainButton.hide();
    } else {
      // 該場景已清空，但遊戲未結束
      quizState = 'scene_cleared';
    }
    return;
  }

  // 從未答對的題目中隨機抽取一題
  const randomUnansweredIndex = floor(random(unansweredIndices.length));
  currentQuestionOriginalIndex = unansweredIndices[randomUnansweredIndex];
  currentQuestionRow = quizData.getRow(currentQuestionOriginalIndex);
  // --- 修改結束 ---

  // 隱藏流程按鈕
  nextQuestionButton.hide();
  tryAgainButton.hide();
  lastAnswerWasIncorrect = false; // 重置錯誤狀態，因為玩家回來回答了

  quizState = 'asking';

  // 根據模式顯示輸入介面
  if (quizData === quizDataPsych) {
    // 教育心理學模式：顯示選擇題按鈕
    btnA.show();
    btnB.show();
    btnC.show();
    btnD.show();
    answerInput.hide();
    submitButton.hide();
  } else {
    // 程式設計模式：顯示輸入框
    answerInput.show();
    submitButton.show();
    answerInput.value(''); // 清空上次的答案
  }
}

function resetQuiz() {
  quizState = 'idle';
  feedbackMessage = '';
  currentQuestionRow = null;

  // 隱藏輸入框和按鈕
  answerInput.hide();
  submitButton.hide();
  nextQuestionButton.hide();
  tryAgainButton.hide();
  
  // 隱藏選擇題按鈕
  btnA.hide();
  btnB.hide();
  btnC.hide();
  btnD.hide();
}

function checkAnswer(option) {
  if (quizState !== 'asking' || !currentQuestionRow) return;

  let playerAnswer;
  if (typeof option === 'string') {
    playerAnswer = option;
  } else {
    playerAnswer = answerInput.value().trim().toUpperCase(); // 取得玩家輸入並轉大寫，方便比對
  }
  
  const correctAnswer = currentQuestionRow.getString('answer').toUpperCase(); // 將正確答案也轉大寫

  quizState = 'answered';

  if (playerAnswer === correctAnswer) {
    feedbackMessage = "太棒了！" + currentQuestionRow.getString('correct_feedback');
    leftCharAnimState = 'correct'; // 觸發答對動畫
    correctlyAnsweredIndices.add(currentQuestionOriginalIndex); // 新增：記錄答對的題目
    lastAnswerWasIncorrect = false; // 標記為答對
    currentFrameNewChar = 0; // 從頭播放
    currentFrameNewCharScene2 = 0; // 新增：第二場景角色動畫重置
    if (!incorrectlyAnsweredIndices.has(currentQuestionOriginalIndex)) {
      if (quizData === quizDataPsych) {
        score += 20; // 教育心理學一題 20 分
      } else {
        score += 10; // 修改：答對加 10 分 (若未曾答錯)
      }
    }

    // --- 新增：答對半數題目增加生命值 ---
    if (!hasReceivedHalfwayBonus && correctlyAnsweredIndices.size >= floor(quizData.getRowCount() / 2)) {
      if (health < MAX_HEALTH) { // 新增：檢查最大生命值
        health++;
        feedbackMessage += " (生命值 +1)";
      } else {
        feedbackMessage += " (生命值已滿)";
      }
      hasReceivedHalfwayBonus = true;
    }

    // 顯示下一題按鈕
    nextQuestionButton.show();
  } else {
    lastIncorrectFeedback = currentQuestionRow.getString('hint'); // 修改：使用提示欄位作為錯誤回饋
    let hintProviderName = currentBgState === 1 ? "多拉A夢" : "初音未來";
    feedbackMessage = "別氣餒！去找" + hintProviderName + "要提示吧！";
    leftCharAnimState = 'incorrect'; // 觸發答錯動畫
    lastAnswerWasIncorrect = true; // 標記為答錯
    // 播放答錯音效
    if (soundEffect1 && soundEffect1.isLoaded()) {
      soundEffect1.play();
    }
    incorrectlyAnsweredIndices.add(currentQuestionOriginalIndex); // 新增：記錄答錯
    currentFrameNewChar = 0; // 從頭播放
    currentFrameNewCharScene2 = 0; // 新增：第二場景角色動畫重置
    screenShakeTimer = 20; // 新增：答錯時震動畫面

    // --- 新增：答錯扣除生命值與盾牌邏輯 ---
    if (hasShield) {
      hasShield = false; // 消耗盾牌
      feedbackMessage += " (🛡️盾牌抵擋了一次傷害！)";
      // 顯示再次作答按鈕
      tryAgainButton.show();
    } else {
      health--;
      if (health <= 0) {
        health = 0;
        currentBgState = 4; // 直接進入結算畫面
        // 隱藏輸入框和按鈕
        answerInput.hide();
        submitButton.hide();
        btnA.hide();
        btnB.hide();
        btnC.hide();
        btnD.hide();
        return;
      }
      // 顯示再次作答按鈕
      tryAgainButton.show();
    }
  }

  // 隱藏輸入框和按鈕，只顯示回饋
  answerInput.hide();
  submitButton.hide();
  
  // 隱藏選擇題按鈕
  btnA.hide();
  btnB.hide();
  btnC.hide();
  btnD.hide();
}

// --- 新增：重試問題的函式 ---
function retryQuestion() {
  // 隱藏回饋訊息和重試按鈕
  feedbackMessage = '';
  tryAgainButton.hide();
  lastAnswerWasIncorrect = false; // 重置錯誤狀態，因為玩家選擇重試

  // 重新顯示輸入框和提交按鈕
  quizState = 'asking';
  
  if (quizData === quizDataPsych) {
    btnA.show();
    btnB.show();
    btnC.show();
    btnD.show();
  } else {
    answerInput.value(''); // 清空錯誤答案
    answerInput.show();
    submitButton.show();
  }
}

// --- 新增：滑鼠點擊事件 (用於寵物選擇) ---
function mousePressed() {
  if (gameState === 'pet_selection') {
    let spacing = width / 4;
    for (let i = 0; i < petConfigs.length; i++) {
      let x = spacing * (i + 1);
      let y = height / 2;
      // 檢查是否點擊到圓形區域 (半徑約 100)
      if (dist(mouseX, mouseY, x, y) < 100) {
        selectedPetIndex = i;
        // gameState = 'playing'; // 修改：點擊寵物不直接開始，僅選取
      }
    }
  } else if (isChoosingReward) { // 新增：獎勵選擇點擊偵測
    // 左邊選項 (炸彈)
    if (dist(mouseX, mouseY, width / 2 - 150, height / 2) < 80) {
      attackPower++; // 提升攻擊力
      scene1RewardClaimed = true;
      isChoosingReward = false;
      // 可以加入提示訊息
      // alert("攻擊力提升！"); 
    }
    // 右邊選項 (盾牌)
    else if (dist(mouseX, mouseY, width / 2 + 150, height / 2) < 80) {
      hasShield = true; // 獲得盾牌
      scene1RewardClaimed = true;
      isChoosingReward = false;
      // 可以加入提示訊息
      // alert("獲得盾牌！");
    }
  }
}

// --- 新增：右側角色對話相關函式 ---

function startNameDialog() {
  rightCharDialogState = 'asking_name';
  nameInput.value(''); // 清空輸入框
  nameInput.show(); // 顯示輸入框
}

function resetNameDialog() {
  rightCharDialogState = 'idle';
  welcomeMessage = '';
  nameInput.hide(); // 隱藏輸入框
}

function submitName() {
  if (rightCharDialogState !== 'asking_name') return;

  playerName = nameInput.value().trim();
  if (playerName) { // 確保玩家有輸入內容
    welcomeMessage = `${playerName}，歡迎您!!`;
    rightCharDialogState = 'welcoming';
    nameInput.hide(); // 提交後隱藏輸入框
  }
}

// --- 新增：櫻花花瓣類別 ---
class Petal {
  constructor() {
    // 初始化位置和屬性
    this.x = random(width);
    this.y = random(-height, 0); // 從畫面上方開始
    this.size = random(5, 12);
    this.xSpeed = random(-0.3, 0.3); // 輕微水平飄動
    this.ySpeed = random(1, 3); // 垂直掉落速度
    this.rotation = random(TWO_PI);
    this.rotationSpeed = random(-0.02, 0.02); // 旋轉速度
    this.alpha = random(150, 220); // 透明度
  }

  // 更新花瓣位置和旋轉
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.rotation += this.rotationSpeed;

    // 如果花瓣掉出畫面底部，重置到頂部
    if (this.y > height + this.size) {
      this.y = random(-100, -10);
      this.x = random(width);
    }
  }

  // 繪製花瓣
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    noStroke();
    fill(255, 192, 203, this.alpha); // 粉紅色，帶有透明度
    ellipse(0, 0, this.size, this.size / 1.5);
    pop();
  }
}

// --- 新增：設定選單相關函式 ---
function toggleSettingsMenu() {
  isSettingsOpen = !isSettingsOpen;
  isShowingInstructions = false;

  if (isSettingsOpen) {
    let cx = width / 2 - 60;
    let cy = height / 2 - 80;
    menuContinueButton.position(cx, cy);
    menuRestartButton.position(cx, cy + 60);
    menuInstructionsButton.position(cx, cy + 120);

    menuContinueButton.show();
    menuRestartButton.show();
    menuInstructionsButton.show();
  } else {
    menuContinueButton.hide();
    menuRestartButton.hide();
    menuInstructionsButton.hide();
  }
}

function drawSettingsMenu() {
  if (!isSettingsOpen) return;

  push();
  // 半透明背景
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  // 選單框
  rectMode(CENTER);
  fill(255);
  stroke(0);
  strokeWeight(2);
  let boxH = isShowingInstructions ? 500 : 300;
  rect(width / 2, height / 2, 350, boxH, 20);

  textAlign(CENTER, CENTER);
  textSize(24);
  fill(0);
  noStroke();
  text("設定選單", width / 2, height / 2 - boxH/2 + 40);

  if (isShowingInstructions) {
    textAlign(LEFT, TOP);
    textSize(18);
    let startX = width / 2 - 140;
    let startY = height / 2 + 80;
    fill(0);
    text("1. 左右鍵移動", startX, startY);
    text("2. 上鍵跳躍", startX, startY + 30);
    text("3. 空白鍵小招", startX, startY + 60);
    text("4. 下鍵大招攻擊", startX, startY + 90);
    text("5. 提示者: 多拉A夢、初音未來", startX, startY + 120);
  }
  pop();
}

// --- 新增：繪製寵物選擇畫面 ---
function drawPetSelection() {
  background('#f4d35e'); // 修改背景顏色
  
  push();
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('#0d3b66'); // 修改字體顏色
  text("請選擇您的冒險寵物", width / 2, 100);
  textSize(20);
  text("點擊圖片進行選擇", width / 2, 150);

  let spacing = width / 4;
  for (let i = 0; i < petConfigs.length; i++) {
    let x = spacing * (i + 1);
    let y = height / 2;
    
    // 檢查滑鼠懸停
    let isHovering = dist(mouseX, mouseY, x, y) < 100;
    let isSelected = (i === selectedPetIndex); // 檢查是否被選中

    if (isSelected) {
      fill(255, 215, 0, 200); // 金色光圈
      noStroke();
      ellipse(x, y, 230, 230);
    }
    
    if (isHovering) {
      fill(255, 255, 255, 150);
      noStroke();
      ellipse(x, y, 220, 220); // 發光背景
      cursor(HAND);
    }

    // 繪製預覽圖
    imageMode(CENTER);
    let sheet = petSpritesheets[i];
    let fw = petConfigs[i].frameW;
    let fh = petConfigs[i].frameH;
    image(sheet, x, y, fw * 2, fh * 2, 0, 0, fw, fh); // 使用精靈圖第一幀作為預覽
    
    fill('#0d3b66'); // 修改寵物名稱顏色
    textSize(24);
    text(petConfigs[i].name, x, y + 120);
  }
  pop();
}

// --- 修改：繪製獎盃 ---
function drawTrophy(x, y, isOpen) {
  push();
  translate(x, y);
  textAlign(CENTER, CENTER);
  textSize(150); // 巨大的獎盃
  text("🏆", 0, -50);
  
  if (isOpen) {
    // 打開時的發光特效
    noStroke();
    fill(255, 215, 0, 100);
    ellipse(0, -50, 200, 200);
  }
  pop();
}

// --- 新增：選擇模式函式 ---
function selectMode(mode) {
  if (mode === 'prog') {
    quizData = quizDataProg;
  } else {
    quizData = quizDataPsych;
  }
  gameState = 'pet_selection'; // 選擇完模式後進入寵物選擇
  modeButtonProg.hide();
  modeButtonPsych.hide();
}

// --- 新增：繪製模式選擇畫面 ---
function drawModeSelection() {
  background('#fdf0d5'); // 修改背景顏色
  
  push();
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('#1d3557');
  noStroke();
  text("請選擇題庫模式", width / 2, height / 2 - 150);
  pop();

  modeButtonProg.show();
  modeButtonPsych.show();
}

// --- 新增：繪製獎勵選擇介面 ---
function drawRewardSelection() {
  push();
  // 半透明背景遮罩
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  textAlign(CENTER, CENTER);
  
  // 標題
  textSize(40);
  fill(255);
  noStroke();
  text("恭喜通關第一場景！請選擇一個獎勵", width / 2, height / 2 - 150);

  // 選項 1：炸彈 (提升攻擊力)
  let x1 = width / 2 - 150;
  let y = height / 2;
  let isHover1 = dist(mouseX, mouseY, x1, y) < 80;
  
  fill(isHover1 ? '#ffccd5' : '#fff0f3');
  stroke(0);
  strokeWeight(3);
  ellipse(x1, y, 160, 160);
  textSize(60);
  text("💣", x1, y - 10);
  textSize(20);
  fill(0);
  noStroke();
  text("提升攻擊力", x1, y + 50);

  // 選項 2：盾牌 (抵禦一次扣心)
  let x2 = width / 2 + 150;
  let isHover2 = dist(mouseX, mouseY, x2, y) < 80;

  fill(isHover2 ? '#caffbf' : '#f0fff4');
  stroke(0);
  strokeWeight(3);
  ellipse(x2, y, 160, 160);
  textSize(60);
  text("🛡️", x2, y - 10);
  textSize(20);
  fill(0);
  noStroke();
  text("抵禦一次扣心", x2, y + 50);

  cursor(HAND); // 顯示手指游標
  pop();
}

// --- 新增：繪製結算畫面 ---
function drawEndScreen() {
  background('#ffe5d9');
  push();
  textAlign(CENTER, CENTER);
  
  textSize(60);
  fill('#0d3b66');
  text("遊戲結束", width / 2, height / 2 - 100);
  
  textSize(40);
  fill('#d90429');
  text("最終分數: " + score, width / 2, height / 2);
  
  textSize(24);
  fill('#0d3b66');
  text("感謝您的遊玩！", width / 2, height / 2 + 100);
  pop();
}

// --- 新增：繪製糰子函式 ---
function drawDango(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);
  noStroke();

  // 竹籤
  fill('#e6ccb2');
  rectMode(CENTER);
  rect(0, 20, 6, 140, 5);

  // 糰子 (下 - 綠)
  fill('#ccd5ae');
  ellipse(0, 35, 45, 42);

  // 糰子 (中 - 白)
  fill('#fdf0d5');
  ellipse(0, -5, 45, 42);

  // 糰子 (上 - 粉)
  fill('#ffafcc');
  ellipse(0, -45, 45, 42);

  // 高光
  fill(255, 150);
  ellipse(-10, 25, 10, 8);
  ellipse(-10, -15, 10, 8);
  ellipse(-10, -55, 10, 8);

  pop();
}

// --- 新增：繪製生命值函式 ---
function drawHealth() {
  push();
  textSize(32);
  textAlign(RIGHT, TOP);
  let hearts = '';
  for (let i = 0; i < health; i++) {
    hearts += '❤️';
  }
  // 如果有盾牌，顯示在愛心旁邊
  if (hasShield) {
    hearts += ' 🛡️';
  }
  text(hearts, width - 20, 20);
  pop();
}

// --- 新增：落石類別 ---
class Rock {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0); // 從畫面上方開始
    this.size = random(4, 10); // 石頭大小
    this.speedY = random(2, 6); // 下落速度
    this.rotation = random(TWO_PI);
    this.rotationSpeed = random(-0.1, 0.1);
    this.color = color(100 + random(50), 90 + random(50), 80 + random(50), 200); // 灰褐色，略帶透明
  }

  update() {
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
    this.x += sin(frameCount * 0.05) * 0.5; // 輕微左右晃動

    // 循環播放
    if (this.y > height) {
      this.y = random(-100, -10);
      this.x = random(width);
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.size, this.size * 0.8, 2); // 稍微不規則的矩形
    pop();
  }
}

// --- 新增：金幣類別 ---
class GoldCoin {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.size = random(10, 20);
    this.speedY = random(3, 8);
    this.rotation = random(TWO_PI);
    this.rotationSpeed = random(-0.1, 0.1);
  }

  update() {
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
    if (this.y > height) this.y = random(-100, -10);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill('#FFD700'); // 金色
    ellipse(0, 0, this.size, this.size);
    fill('#FFFFE0'); // 高光
    ellipse(-this.size/4, -this.size/4, this.size/3, this.size/3);
    pop();
  }
}

// --- 新增：格式化題目文字函式 ---
function formatQuestionText(text, isPsych) {
  let mainText = text;
  let optionsText = "";

  // 分離選項 (如果是教育心理學模式)
  if (isPsych) {
    let splitIndex = text.indexOf("(A)");
    if (splitIndex !== -1) {
      mainText = text.substring(0, splitIndex);
      optionsText = text.substring(splitIndex);
    }
  }

  // 智慧換行：針對主要題目文字
  // 只有當文字長度超過一定限制時才嘗試分割
  if (mainText.length > 25) { 
    const punctuations = ['，', '？', '：', '!', '！', ',', '?', ':'];
    let bestSplitIndex = -1;
    let minDistanceToCenter = Infinity;
    let center = mainText.length / 2;

    for (let i = 0; i < mainText.length; i++) {
      if (punctuations.includes(mainText[i])) {
        let distance = Math.abs(i - center);
        // 尋找最接近中間的標點符號
        if (distance < minDistanceToCenter) {
          minDistanceToCenter = distance;
          bestSplitIndex = i;
        }
      }
    }

    // 如果找到合適的標點符號 (且不是在字串末尾)
    if (bestSplitIndex !== -1 && bestSplitIndex < mainText.length - 2) {
      mainText = mainText.substring(0, bestSplitIndex + 1) + "\n" + mainText.substring(bestSplitIndex + 1);
    }
  }

  if (isPsych) {
    // 格式化選項: (A)... (B)... -> \n(A)... \n(B)...
    optionsText = optionsText.replace(/\s*(\([A-D]\))\s*/g, '\n$1 ');
    return mainText + optionsText;
  } else {
    return mainText;
  }
}
