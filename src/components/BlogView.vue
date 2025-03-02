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
      <button @click="goPrev">上一篇：{{ prevTitle }}</button>
      <button @click="goNext">下一篇：{{ nextTitle }}</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { articles, articlesRouters } from '../lib/utils';
const router = useRouter()
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
  padding: 15px;
  background: #151515;
  border-top: 1px solid #e4e7ed;
}

button {
  padding: 8px 15px;
  border: 1px solid #ed1e1e;
  border-radius: 4px;
  background: #ecf5ff;
  color: #253787;
  cursor: pointer;
}

button:hover {
  background: #409eff;
  color: white;
}
</style>