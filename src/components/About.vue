<template>
  <div class="about-container">
    <div class="about-content">
      <h1 class="about-title">关于作者</h1>
      <!-- 添加旋转头像 -->
      <div class="avatar-container">
        <img 
          src="../assets/profile_picture.jpeg" 
          alt="作者头像" 
          class="rotating-avatar"
        >
      </div>
      <p class="about-text">
        欢迎来到我的个人博客！我是yibo🐠，来自山西太原，现居广东深圳。
      </p>
      <p class="about-text">
        这个博客打算记录我的学习过程和工作经验，分享一些技术文章和生活感悟。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">



</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 100vh;    
}
.about-content {
  text-align: center;
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
  animation: rotate 8s linear infinite;
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.about-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;  
}
.about-text {
  font-size: 1rem;
  color: #666;
  line-height: 1.6; 
}
</style>