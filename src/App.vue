<template>
  <!-- 主容器 -->
  <div class="main-container">
    <!-- 左侧导航区 -->
    <div class="left-panel">
      <!-- 标题区域 -->
      <div class="header-box">
        <h1 class="title-text">技术博客</h1>
      </div>
      
      <!-- 目录导航 -->
      <div class="nav-box">
        <h2 class="nav-title">目录</h2>
        <ul class="nav-list">
          <li 
            v-for="(item, index) in navItems" 
            :key="index"
            @click="handleNavClick(item)"
            class="nav-item"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </div>

    <!-- 右侧内容区 -->
    <div class="right-panel">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router' 
const router = useRouter()

// 响应式数据
const navItems = ref([
  { label: '主页', path: '/' },
  { label: '全部文章', path: '/docs' },
  { label: '关于作者', path: '/about' }
])



// 方法
const handleNavClick = (item:any) => {
  console.log('导航点击:', item.path)
}

</script>

<style scoped>
.main-container {
  height:100vh;
  display: flex;
  overflow: scroll;
  background: #020c1b;
}

.left-panel {
  width: 280px;
  padding: 2rem;
  background: white;
  border-right: 1px solid #ede4ec;
}

.right-panel {
  flex: 1;
  padding: 2rem;
}

.header-box {
  padding: 1rem;
  border-bottom: 2px solid #409eff;
  margin-bottom: 2rem;
}

.title-text {
  color: #303133;
  font-size: 1.5rem;
}

.nav-box {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.nav-title {
  color: #606266;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}
.nav-list {

}
.nav-item {
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;
}

.nav-item:hover {
  background: #ecf5ff;
  color: #409eff;
}


@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }
  
  .left-panel {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e4e7ed;
  }
}
</style>