<template >
      <!-- 文章展示网格 -->
      <div class="article-grid">
        <div 
          v-for="(article, index) in articles"
          :key="index"
          class="article-card"
          @click="handleCardClick(article)"
        >
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-summary">{{ article.summary }}</p>
          <div class="article-meta">
            <span class="article-date">{{ formatDate(article.date) }}</span>
            <div 
              v-for="tag in article.tags" 
              :key="tag"
              type="info"
              size="small"
            >
              {{ tag }}
          </div>
          </div>
        </div>
      </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router' 

const router = useRouter()
import {type Article, articles} from '../lib/utils'
const handleCardClick = (article:Article) => {
  router.push({
    path: `/Blog/${article.id}/${article.id}`,
  })
}


const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString()
}
</script>

<style scoped>

.article-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.article-card {
  background: rgb(255, 255, 255);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-title {
  color: #303133;
  margin-bottom: 0.5rem;
}

.article-summary {
  color: #606266;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #909399;
  font-size: 0.8rem;
}
</style>