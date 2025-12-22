let bgImage;
let spritesheetStop;
let spritesheetRun;
let spritesheetJump;
let spritesheetFight;
let spritesheetFight2; // 新增：第二種攻擊動畫
let spritesheetNewChar; // 新增：新角色的 spritesheet
let quizData; // 修改：存放從新 CSV 讀取的測驗資料
let spritesheetLeftCharCorrect; // 新增：左邊角色答對時的動畫
let spritesheetLeftCharIncorrect; // 新增：左邊角色答錯時的動畫
let spritesheetLeftCharHurt; // 新增：左邊角色受擊動畫
let spritesheetRightCharHurtNew; // 新增：右邊角色新的受擊動畫
let spritesheetRollChar; // 新增：右邊滾動角色的 spritesheet
let spritesheetJumpChar; // 新增：右邊角色跳躍的 spritesheet
let spritesheetHurtChar; // 新增：右邊角色受擊的 spritesheet

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
const totalFramesNewChar = 6; // 新增：新角色的總幀數
const totalFramesFight2 = 28; // 新增：第二種攻擊動畫總幀數
const totalFramesLeftCharCorrect = 20; // 新增：答對動畫總幀數
const totalFramesLeftCharIncorrect = 3; // 新增：答錯動畫總幀數
const totalFramesLeftCharHurt = 8; // 新增：左邊角色受擊動畫幀數
const totalFramesRightCharHurtNew = 11; // 新增：右邊角色新受擊動畫幀數
const totalFramesRollChar = 9; // 新增：滾動角色的總幀數
const totalFramesJumpChar = 5; // 新增：右邊角色跳躍的總幀數
const totalFramesHurtChar = 16; // 新增：右邊角色受擊的總幀數
let isRightCharReacting = false; // 新增：右邊角色是否在反應
let isRightCharHurt = false; // 新增：右邊角色是否被擊中

let isLeftCharHurt = false; // 新增：左邊角色是否被擊中
let leftCharAnimState = 'idle'; // 新增：左邊角色的動畫狀態 'idle', 'correct', 'incorrect'
let gameState = 'start'; // 新增：遊戲狀態 'start' 或 'playing'
let currentFrame = 0;
let currentFrameNewChar = 0; // 新增：新角色的當前幀
let currentFrameRollChar = 0; // 新增：滾動角色的當前幀
let currentFrameHurtChar = 0; // 新增：右邊角色受擊的當前幀

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
let nextQuestionButton; // 新增：下一題按鈕
let tryAgainButton; // 新增：再次作答按鈕


// --- 新增：右側角色對話系統變數 ---
let rightCharDialogState = 'idle'; // 'idle', 'asking_name', 'welcoming'
let nameInput; // 玩家姓名輸入框
let playerName = ''; // 儲存玩家姓名
let welcomeMessage = ''; // 歡迎訊息
let score = 0; // 新增：計分系統變數
let allQuestionsAnswered = false; // 新增：是否已回答所有問題的旗標

// --- 新增：櫻花特效 ---
let petals = [];
const numPetals = 200; // 花瓣數量
let confettis = []; // 新增：彩帶陣列
const numConfetti = 150; // 新增：彩帶數量
 
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
  quizData = loadTable('./Math_Quiz.csv', 'csv', 'header'); // 修正：將檔名大小寫與實際檔案同步
  spritesheetRollChar = loadImage('./2-2 roll/all.png'); // 新增：載入滾動角色圖片
  spritesheetJumpChar = loadImage('./2-3 jump/all.png'); // 新增：載入右邊角色跳躍圖片
  spritesheetHurtChar = loadImage('./2-4 fight/all.png'); // 新增：載入右邊角色受擊圖片
}

function setup() {
  createCanvas(windowWidth, windowHeight);

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

  currentSpritesheet = spritesheetStop;
  currentFrameWidth = frameWidthStop;
  currentFrameHeight = frameHeightStop;
  totalFrames = 7;

  // --- 新增：建立答案輸入框與按鈕 ---
  answerInput = createInput('');
  answerInput.position(width / 2 - 100, height - 80);
  answerInput.size(100);
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

}

function draw() {
  image(bgImage, 0, 0, width, height);

  if (gameState === 'start') {
    drawStartScreen();
    // 在封面也顯示櫻花特效，增加氛圍
    for (let petal of petals) {
      petal.update();
      petal.display();
    }
    return; // 如果是開始畫面，畫完就結束這一幀，不執行後面的遊戲邏輯
  }

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
  let leftCharScale = 2;
  let leftCharW = leftCharCurrentFrameWidth * leftCharScale;
  let leftCharH = leftCharCurrentFrameHeight * leftCharScale;
  let leftCharX = width / 4;
  let leftCharY = height / 2;

  // 將新角色繪製在畫面左側約 1/4 處
  image(leftCharCurrentSpritesheet,
        leftCharX - leftCharW / 2,
        // 讓角色站在地上 (y軸置中)
        // 假設角色的腳在圖片底部
        leftCharY - leftCharH / 2,
        leftCharW, leftCharH,
        sourceXNewChar, 0, leftCharCurrentFrameWidth, leftCharCurrentFrameHeight);
  // --- 新增結束 ---

  // --- 以下為原角色的邏輯 ---
  let frameIndex;
  // ... (原角色邏輯)
  // ...

  // 在視窗中間繪製角色
  let centerX = width / 2 + characterX;
  let centerY = height / 2 + characterY;

  // 新增：主要角色的放大倍率 (從後面移到這裡)
  let mainCharScale = 2;
  let mainCharW = currentFrameWidth * mainCharScale;
  let mainCharH = currentFrameHeight * mainCharScale;

  // --- 新增：右邊角色的互動與繪製邏輯 ---
  let rightCharX = width * 3 / 4;
  let rightCharY = height / 2;
  let rightProximityThreshold = 200; // 觸發反應的距離閾值

  // 檢查玩家角色和右邊角色的距離
  if (abs(centerX - rightCharX) < rightProximityThreshold) {
    if (!isRightCharReacting) {
      isRightCharReacting = true;
      // 首次靠近時，如果處於閒置狀態，則開始詢問姓名
      if (rightCharDialogState === 'idle') {
        startNameDialog();
      }
    }
  } else {
    if (isRightCharReacting) {
      isRightCharReacting = false;
      // 遠離時，重置對話
      isRightCharHurt = false; // 新增：遠離時重置受擊狀態
      resetNameDialog();
    }
  }
  
  // 新增：判斷右邊角色是否需要翻轉 (當玩家在它左邊時)
  let shouldFlipRightChar = centerX < rightCharX;

  push(); // 儲存當前的繪圖狀態

  if (isRightCharHurt) { // 修改：新的受擊邏輯
    // 狀態：受擊 (優先度最高，循環播放)
    currentFrameRollChar = (currentFrameRollChar + animationSpeed) % totalFramesRightCharHurtNew;
    let frameIndex = floor(currentFrameRollChar);
    let sourceX = frameIndex * frameWidthRightCharHurtNew;
    let scaleFactor = 2;
    let w = frameWidthRightCharHurtNew * scaleFactor;
    let h = frameHeightRightCharHurtNew * scaleFactor;

    // 受擊時不翻轉，直接繪製
    image(spritesheetRightCharHurtNew, rightCharX - w / 2, rightCharY - h / 2, w, h, sourceX, 0, frameWidthRightCharHurtNew, frameHeightRightCharHurtNew);

  } else if (isRightCharReacting) {
    // 狀態：反應 (跳躍)
    currentFrameRollChar = (currentFrameRollChar + animationSpeed) % totalFramesJumpChar;
    let frameIndex = floor(currentFrameRollChar);
    let sourceX = frameIndex * frameWidthJumpChar;
    let scaleFactor = 2; // 放大兩倍
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
    // 狀態：正常 (滾動)
    currentFrameRollChar = (currentFrameRollChar + animationSpeed) % totalFramesRollChar;
    let frameIndex = floor(currentFrameRollChar);
    let sourceX = frameIndex * frameWidthRollChar;
    let scaleFactor = 2; // 新增：放大兩倍
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

  pop(); // 恢復繪圖狀態，以免影響後續繪圖
  // --- 新增結束 ---

  // --- 新增：測驗互動邏輯 ---
  let quizProximityThreshold = 180; // 觸發測驗的距離
  // 檢查玩家與左邊角色的距離
  if (abs(centerX - leftCharX) < quizProximityThreshold) {
    // 靠近時，如果測驗是閒置狀態，就開始提問
    if (quizState === 'idle') {
      startQuiz();
    }
  } else {
    // 遠離時，重置測驗
    if (quizState !== 'idle') {
      isLeftCharHurt = false; // 新增：遠離時重置受擊狀態
      resetQuiz();
    }
  }

  // 根據測驗狀態繪製對話
  if (quizState === 'asking') {
    // 繪製問題
    const questionText = currentQuestionRow.getString('question');
    drawSpeechBubble(leftCharX, leftCharY - leftCharH / 2 - 20, questionText, '#fcbf49', 300);
  } else if (quizState === 'answered') {
    drawSpeechBubble(leftCharX, leftCharY - leftCharH / 2 - 20, feedbackMessage, '#fcbf49', 300);
  } else if (quizState === 'finished' && allQuestionsAnswered) {
    // 新增：全部答對後的祝賀訊息
    const congratsMessage = "太厲害了！這份糰子(🍡)是給你的獎勵！";
    drawSpeechBubble(leftCharX, leftCharY - leftCharH / 2 - 20, congratsMessage, '#fcbf49', 300);
  }

  // --- 新增：右側角色對話框繪製邏輯 ---
  if (rightCharDialogState === 'asking_name') {
    drawSpeechBubble(rightCharX, rightCharY - 80, "請問您的姓名??", '#fcbf49');
    // 提示玩家輸入
    drawSpeechBubble(centerX, centerY - mainCharH / 2 - 20, "請在下方輸入框輸入後按 Enter", '#ff7b00');
  } else if (rightCharDialogState === 'welcoming') {
    // 繪製歡迎訊息
    drawSpeechBubble(rightCharX, rightCharY - 80, welcomeMessage, '#fcbf49');
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
    let scaleFactor = 2;
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
  // 若最後方向為左，或目前正在向左移動，則翻轉
  if (moveDirection === -1 || (moveDirection === 0 && lastDirection === -1)) {
    translate(centerX, centerY);
    scale(-1, 1);
    translate(-mainCharW / 2, -mainCharH / 2);
    image(currentSpritesheet,
          0,
          0,
          mainCharW,
          mainCharH,
          sourceX,
          sourceY,
          currentFrameWidth,
          currentFrameHeight);
  } else {
    image(currentSpritesheet,
          centerX - mainCharW / 2,
          centerY - mainCharH / 2,
          mainCharW,
          mainCharH,
          sourceX,
          sourceY,
          currentFrameWidth,
          currentFrameHeight);
  }
  pop();

  // --- 新增：碰撞偵測 ---
  // 只有在主角攻擊時，才進行偵測
  if (isFighting || isFighting2) { // 修改：兩種攻擊都會觸發碰撞
    // 主角包圍盒
    let mainLeft = centerX - mainCharW / 2;
    let mainRight = centerX + mainCharW / 2;

    // --- 偵測右邊角色 ---
    // 右邊角色包圍盒 (使用放大後的尺寸)
    let rightCharCurrentW = (isRightCharReacting ? frameWidthJumpChar : frameWidthRollChar) * 2;
    let rightLeft = rightCharX - rightCharCurrentW / 2;
    let rightRight = rightCharX + rightCharCurrentW / 2;

    // 簡單的 AABB 碰撞檢測 (只看 X 軸)
    if (mainRight > rightLeft && mainLeft < rightRight) {
      isRightCharHurt = true; // 觸發受擊狀態
    }

    // --- 偵測左邊角色 ---
    let leftCharCurrentW = leftCharW; // 已在前面計算
    let leftLeft = leftCharX - leftCharCurrentW / 2;
    let leftRight = leftCharX + leftCharCurrentW / 2;
    // 簡單的 AABB 碰撞檢測 (只看 X 軸)
    if (mainRight > leftLeft && mainLeft < leftRight) {
      isLeftCharHurt = true; // 觸發受擊狀態
    }
  }

  // --- 新增：如果所有問題都答對了，在主角頭上畫糰子 ---
  if (allQuestionsAnswered) {
    // 新增：繪製彩帶特效
    for (let confetti of confettis) {
      confetti.update();
      confetti.display();
    }

    push();
    textSize(40);
    textAlign(CENTER, CENTER);
    // 將糰子畫在角色頭頂上方
    text('🍡', centerX, centerY - mainCharH / 2 - 30);
    pop();
  }

  // --- 新增：更新並繪製櫻花 ---
  for (let petal of petals) {
    petal.update();
    petal.display();
  }
}

function keyPressed() {
  if (gameState === 'start') {
    if (keyCode === ENTER) {
      gameState = 'playing'; // 按下 Enter 進入遊戲
    }
    return; // 封面狀態下不處理移動攻擊
  }

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
  fill('#a8dadc');
  text("方向鍵移動與跳躍 | 空白鍵攻擊", width / 2, height / 2 + 110);

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

// --- 新增：繪製對話框的輔助函式 ---
function drawSpeechBubble(x, y, textContent, bgColor, boxWidth, boxHeight) {
  // 計算文字寬度來決定對話框寬度
  textSize(16);
  let contentWidth = textWidth(textContent);
  let w = boxWidth || contentWidth + 40; // 如果沒指定寬度，就根據文字計算
  let h = boxHeight || 50; // 對話框高度
  let r = 15; // 圓角半徑

  // 繪製對話框主體
  fill(bgColor);
  stroke(0);
  strokeWeight(2);
  rect(x - w / 2, y - h, w, h, r);

  // 繪製文字
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(textContent, x, y - h / 2);
}

// --- 新增：測驗系統相關函式 ---

function startQuiz() {
  // --- 修改：從尚未答對的題目中抽題 ---
  let unansweredIndices = [];
  for (let i = 0; i < quizData.getRowCount(); i++) {
    if (!correctlyAnsweredIndices.has(i)) {
      unansweredIndices.push(i);
    }
  }

  // 如果所有題目都答對了
  if (unansweredIndices.length === 0 && quizData.getRowCount() > 0) {
    allQuestionsAnswered = true;
    quizState = 'finished';
    resetQuiz(); // 清理UI，但保留 'finished' 狀態
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

  quizState = 'asking';

  // 顯示輸入框和按鈕
  answerInput.show();
  submitButton.show();
  answerInput.value(''); // 清空上次的答案
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
}

function checkAnswer() {
  if (quizState !== 'asking' || !currentQuestionRow) return;

  const playerAnswer = answerInput.value().trim(); // 取得玩家輸入並去除頭尾空白
  const correctAnswer = currentQuestionRow.getString('answer');

  quizState = 'answered';

  if (playerAnswer === correctAnswer) {
    feedbackMessage = currentQuestionRow.getString('correct_feedback');
    leftCharAnimState = 'correct'; // 觸發答對動畫
    correctlyAnsweredIndices.add(currentQuestionOriginalIndex); // 新增：記錄答對的題目
    currentFrameNewChar = 0; // 從頭播放
    score += 5; // 新增：答對加 5 分
    // 顯示下一題按鈕
    nextQuestionButton.show();
  } else {
    feedbackMessage = currentQuestionRow.getString('incorrect_feedback');
    leftCharAnimState = 'incorrect'; // 觸發答錯動畫
    currentFrameNewChar = 0; // 從頭播放
    // 顯示再次作答按鈕
    tryAgainButton.show();
  }

  // 隱藏輸入框和按鈕，只顯示回饋
  answerInput.hide();
  submitButton.hide();
}

// --- 新增：重試問題的函式 ---
function retryQuestion() {
  // 隱藏回饋訊息和重試按鈕
  feedbackMessage = '';
  tryAgainButton.hide();

  // 重新顯示輸入框和提交按鈕
  quizState = 'asking';
  answerInput.value(''); // 清空錯誤答案
  answerInput.show();
  submitButton.show();
}

// --- 新增：右側角色對話相關函式 ---

function startNameDialog() {
  rightCharDialogState = 'asking_name';
  nameInput.value(''); // 清空輸入框
  nameInput.show(); // 顯示輸入框
}

function resetNameDialog() {
  rightCharDialogState = 'idle';
  playerName = '';
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
