<template>
  <div class="main-layout">
    <!-- 标题区域 -->
    <header class="header">
      <h1 > {{ articles[articlId].title }}</h1>
    </header>

    <!-- 文章展示路由视图 -->
    <router-view class="content-area" />

    <!-- 导航按钮 -->
    <footer class="navigation">
      <button 
          @click="goPrev" 
          :disabled="articlId <= 0"
      >« {{ prevTitle }}</button>
      <button 
          @click="goNext"
          :disabled="articlId >= articles.length - 1"
      >{{ nextTitle }} »</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { articles, articlesRouters } from '../lib/utils';
const props = defineProps<{id:string}>();
const articlId = Number(props.id)

// 导航逻辑
const goPrev = () => {
  console.log(articlesRouters)
  // if (currentIndex.value > 0) {
  //   const prevId = articles.value[currentIndex.value - 1].id
  //   router.push(`/article/${prevId}`)
  // }
}

const goNext = () => {
  // if (articlId < articles.value.length - 1) {
  //   const nextId = articles.value[articlId + 1].id
  //   router.push(`/article/${nextId}`)
  // }
}
// 上一篇/下一篇标题
const prevTitle = computed(() => articlId > 0 ? articles.value[articlId - 1].title : '没有了')
const nextTitle = computed(() => articlId < articles.value.length - 1 ? articles.value[articlId + 1].title : '没有了')
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  color: #f5f7fa;
  padding: 20px;
  border-bottom: 1px solid #e4e7ed;
}

.content-area {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}

.navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1.5rem 0;
    margin: 0 -1.5rem;
    box-sizing: border-box;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
}

button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 25px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

button:disabled {
    background: #e4e7ed;
    color: #7f8c8d;
    cursor: not-allowed;
    opacity: 0.7;
}

button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
    );
    transition: 0.5s;
}

button:hover::before {
    left: 100%;
}
</style>