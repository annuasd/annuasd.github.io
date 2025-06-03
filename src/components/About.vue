<template>
  <div class="about-container">
    <div class="about-content">
      <h1 class="about-title">关于作者</h1>
      <div class="avatar-container">
        <img src="../assets/profile_picture.jpeg" alt="作者头像" class="rotating-avatar">
      </div>
      <h1 class="about-text" style="font-size: 1.5rem; color: white; line-height: 1.6">
        yibo🐠
      </h1>

      <!-- 新增教育经历 -->
      <div class="education-card">
        <div class="education-item">

          <div class="edu-details">
            <h4 class="about-text">From 太原理工大学<span class="edu-year">2020 - 2024</span> </h4>
            <p class="about-text">软件工程</p>
            <p class="about-text">主修方向： 大数据开发（一节课没去听，忘完了已经）</p>
            <p class="about-text">现居：深圳</p>
          </div>
        </div>
        <div class="tag-group">
          <span class="tech-tag cpp">C++</span>
          <span class="tech-tag mlir">MLIR</span>
        </div>
      </div>

      <div class="classic-poem">
        <p class="poem-line">谋生之暇，学力日荒。</p>
        <p class="poem-line">乃辟此牖，缀零为纲。</p>
        <p class="poem-line">得片玉则铭，遇寸阴则镪。</p>
        <p class="poem-line">积跬俟云骧。</p>
        <p class="poem-credit">—— deepseekR1 写的，我没有这个文化</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">



</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: left;
  align-items: left;
  height: 100vh;
}

.about-content {
  text-align: left;
  padding: 2rem;
  border-radius: 8px;
}

/* 新增头像样式 */
.avatar-container {
  margin: 1.5rem 0;
}

.rotating-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #3498db;
  animation: rotate 0.5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.about-title {
  font-size: 2rem;
  color: #cdc6c6;
  margin-bottom: 1rem;
}

.about-text {
  font-size: 1rem;
  color: #d4d0d0;
  line-height: 1.6;
}

/* 新增教育卡片样式 */
.education-card {
  background: linear-gradient(145deg, #032135, #03386d);
  border-radius: 12px;
  padding: 0.5rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.education-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.edu-year {
  /* 背景使用品牌蓝色 */
  background-color: #03386d;
  color: rgb(202, 199, 199);
  /* 文字白色高对比度 */
  padding: 0.5rem 1rem;
  /* 上下0.5rem/左右1rem的内边距 */
  border-radius: 20px;
  /* 圆角半径与标签按钮保持一致 */
  font-weight: bold;
  /* 加粗字体增强可读性 */
}

.edu-focus {
  color: #2c3e50;
  font-size: 0.9rem;
}

.tag-group {
  display: flex;
  margin-top: 0.3rem;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.tech-tag {
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-weight: 300;
  font-size: 1rem;
}

.cpp {
  background: #3498db20;
  color: #8dbdec;
  border: 1px solid #3498db;
}

.mlir {
  background: #9b59b620;
  color: #98cafb;
  border: 1px solid #9b59b6;
}

.classic-poem {
  font-family: "STKaiti", "KaiTi", serif;
  text-align: left;
  margin: 2rem 0;
  color: #e6d8b5;
}

.poem-line {
  font-size: 1.1rem;
  line-height: 2.2;
  letter-spacing: 1px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  margin: 0.5rem 0;
}

.poem-credit {
  font-size: 0.8rem;
  color: rgba(230, 216, 181, 0.6);
  text-align: right;
  margin-top: 0.5rem;
  font-style: italic;
}
</style>