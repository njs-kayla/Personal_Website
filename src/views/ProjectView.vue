<template>
  <div class="container">
    <h1>作品集</h1>
    <div class="main_body">
      <div class="tag_group">
        <div class="tag" :style="switchClass(1)"  @click="switchPage(1)">星火兒童認養協會</div>
        <div class="tag" :style="switchClass(2)"  @click="switchPage(2)">PetsQ</div>
        <div class="tag" :style="switchClass(3)"  @click="switchPage(3)">ToDo-list</div>
      </div>
      <transition-group>
        <section v-if="show == 1">
          <section class="info">
            <h2>星火兒童認養協會</h2>
            <div class="link">
              <a href="https://github.com/DINGTUNG/SPARK/tree/dev"><i class="fa-brands fa-github"></i></a>
              <a href="https://tibamef2e.com/chd102/g3/" 
              target="_blank"  class="demo">
                <span>查看網頁</span>
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>

            <p>緯育的團體專題，前端使用 Vue.js ，後端使用 PHP 及資料庫 MySQL 完成前後端分離並具有前後台之完整網頁專題。
            </p>
            <p>
              使用技術：HTML、SCSS、JavaScript、RWD、Vue.js、PHP、MySQL、Git。
            </p>
          </section>
          <section class="illustrate">
            <h2>負責頁面及功能介紹</h2>
            <div class="page_list">
              <div class="page">
                <h3>故事藝廊</h3>
                <div class="pic">
                  <img src="../../public/image/story.png" alt="故事藝廊">
                </div>
                <div class="introduction" id="story-1">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>點擊可切換至該區塊</span>
                </div>
                <div class="introduction" id="story-2">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>點擊可切換封面故事，並使用 JS 顯示點擊指引</span>
                  <div class="pic">
                    <img src="../../public/image/story-1.png" alt="封面故事">
                  </div>
                </div>
                <div class="introduction" id="story-3">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>以 axios 串接後端，使用 PHP 抓取已上架的故事，點擊可顯示詳細故事內容</span>
                  <div class="pic">
                    <img src="../../public/image/story-2.png" alt="故事內容">
                  </div>
                </div>
                <div class="introduction" id="story-4">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>點擊可切換星火寫真</span>
                </div>
              </div>
              <div class="page">
                <h3>成果布告欄</h3>
                <div class="pic">
                  <img src="../../public/image/board.png" alt="成果布告欄">
                </div>
                <div class="introduction" id="board">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>使用 Vue3Marquee 完成跑馬燈</span>
                </div>
              </div>
              <div class="page">
                <h3>認養據點</h3>
                <div class="pic">
                  <img src="../../public/image/location.png" alt="認養據點">
                </div>
                <div class="introduction" id="location-1">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>可篩選認養地區，同時顯示該地區服務中心詳細資訊，點擊彈窗外可關閉彈窗</span>
                  <div class="pic">
                    <img src="../../public/image/location-1.png" alt="篩選地區">
                  </div>
                </div>
                <div class="introduction" id="location-2">
                  <svg width="292" height="256" viewBox="0 0 292 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3.00488C0.333333 4.47764 1.52724 5.67155 3 5.67155C4.47276 5.67155 5.66667 4.47764 5.66667 3.00488C5.66667 1.53212 4.47276 0.338216 3 0.338216C1.52724 0.338216 0.333333 1.53212 0.333333 3.00488ZM3 3.50488L289.028 3.50488V2.50488L3 2.50488V3.50488Z"
                      fill="#1D3D6C" />
                    <path
                      d="M289.264 250.333C287.791 250.333 286.597 251.527 286.597 253C286.597 254.473 287.791 255.667 289.264 255.667C290.737 255.667 291.931 254.473 291.931 253C291.931 251.527 290.737 250.333 289.264 250.333ZM288.764 3V253H289.764V3H288.764Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>點擊可顯示服務據點詳細資訊</span>
                </div>
                <div class="introduction" id="location-3">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>點擊可顯示服務據點詳細資訊</span>
                </div>


              </div>
              <div class="page">
                <h3>會員登入機制</h3>
                <div class="pic">
                  <img src="../../public/image/login.png" alt="登入">
                </div>
                <div class="introduction" id="login-1">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>使用 PHP 的 session 機制，會員登入後存入一組 sessoinid，以此來判定登入狀況及取得當前登入會員的資料。</span>
                </div>
                <div class="introduction" id="login-2">
                  <img src="../../public/image/login-1.png" alt="登入">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>使用 axios 串接後端 PHP 程式，抓取當前登入會員的資料</span>
                </div>
              </div>
              <div class="page">
                <h3>會員註冊機制</h3>
                <div class="pic">
                  <img src="../../public/image/register.png" alt="註冊">
                </div>
                <div class="introduction" id="register-1">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>輸入電子信箱可收到會員註冊驗證信</span>
                  <div class="pic">
                    <img src="../../public/image/register-1.png" alt="驗證信">
                  </div>
                </div>
                <div class="introduction" id="register-2">
                  <div class="pic">
                    <img src="../../public/image/register-3.png" alt="驗證碼錯誤">
                  </div>
                  <div class="pic">
                    <img src="../../public/image/register-4.png" alt="驗證碼錯誤">
                  </div>
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>輸入錯誤會顯示驗證碼錯誤，正確則可繼續填寫會員資料</span>
                </div>
                <div class="introduction" id="register-3">
                  <div class="pic">
                    <img src="../../public/image/register-5.png" alt="註冊成功">
                  </div>
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>至下一步完整填入會員資料後按下送出會顯示註冊成功並跳轉回登入頁面</span>

                </div>
                <div class="introduction" id="register-4">
                  <div class="pic">
                    <img src="../../public/image/register-6.png" alt="會員資料">
                  </div>
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>會員中心/會員基本資料頁面可查看會員資料</span>
                </div>
              </div>
              <div class="page">
                <h3>忘記密碼</h3>
                <div class="pic">
                  <img src="../../public/image/forgot.png" alt="忘記密碼">
                </div>
                <div class="introduction" id="forgot-1">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>忘記密碼也可寄送驗證信</span>
                </div>
                <div class="introduction" id="forgot-2">
                  <img src="../../public/image/forgot-1.png" alt="忘記密碼">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>輸入成功顯示密碼輸入框</span>
                </div>
                <div class="introduction" id="forgot-3">
                  <img src="../../public/image/forgot-2.png" alt="忘記密碼">
                  <svg width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM151.337 3C151.337 4.47276 152.531 5.66667 154.003 5.66667C155.476 5.66667 156.67 4.47276 156.67 3C156.67 1.52724 155.476 0.333333 154.003 0.333333C152.531 0.333333 151.337 1.52724 151.337 3ZM3 3.5H154.003V2.5H3V3.5Z"
                      fill="#1D3D6C" />
                  </svg>
                  <span>完成密碼修改</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </transition-group>
      <transition-group>
        <section v-if="show == 2">
          <section class="info">
            <h2>PetsQ</h2>
            <div class="link">
              <a href="https://github.com/njs-kayla/project"><i class="fa-brands fa-github"></i></a>
              <a href="https://njs-kayla.github.io/project/" 
              target="_blank"  class="demo">
                <span>查看網頁</span>
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
            <p>緯育的個人專題，主要練習切版與設計。
            </p>
            <p>
              使用技術：HTML、SCSS、JavaScript、RWD
            </p>
            <div class="pic">
              <img src="../../public/image/PetQ.png" alt="PetQ">
            </div>
          </section>
        </section>
      </transition-group>
      <transition-group>
        <section v-if="show == 3">
          <section class="info">
            <h2>ToDo-list</h2>
            <div class="link">
              <a href="https://github.com/njs-kayla/todo-list"><i class="fa-brands fa-github"></i></a>
              <a href="https://njs-kayla.github.io/todo-list/" 
              target="_blank"  class="demo">
                <span>查看網頁</span>
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
            <p>練習 JavaScript 的小程式，並使用 localStorage 儲存資料。
            </p>
            <p>
              使用技術：HTML、CSS、JavaScript。
            </p>
            <div class="pic">
              <img src="../../public/image/todo-list.png" alt="PetQ">
            </div>
          </section>
        </section>
      </transition-group>
    </div>
    <div class="top" @click="scrollToTop">
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Project",
  data() {
    return {
      show:1,
    };
  },
  methods: {
    switchClass(page) {
      return{
        backgroundColor: this.show == page ?  "#1D3D6C" : "#fff",
        color: this.show == page ?  "#fff" : "#1D3D6C"
      } 
    },
    switchPage(page) {
      this.show = page;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
}
</script>
<style lang="scss" scoped>
@import "src/assets/scss/project";
.v-enter-active,
  .v-leave-active {
      transition: opacity 1s;
  }

  .v-enter-from,
  .v-leave-to {
      opacity: 0;
  }

  .v-enter-to,
  .v-leave-from {
      opacity: 1;
  }
</style>
