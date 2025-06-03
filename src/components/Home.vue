<template>
  <div class="home-container">
    <!-- 动态标题 -->
    <div class="hero-section">
      <h1 class="hero-title">
        <span class="gradient-text">yibo🐠's Blog</span>
      </h1>
      <p class="hero-subtitle">eating sleeping coding</p>
    </div>

    <!-- 文章展示区 -->
    <div class="featured-articles">
      <h2 class="section-title">最新文章</h2>
      <div class="article-grid">
        <div v-for="(article, index) in featuredArticles" :key="index" class="article-card"
          :style="{ '--delay': index * 0.1 + 's' }" @click="navigateToArticle(article)">
          <div class="card-bg"></div>
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-date">{{ formatDate(article.date) }}</p>
          <p class="article-summary">{{ article.summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { articles } from '../lib/utils'

const router = useRouter()

const featuredArticles = ref(articles.value.slice(0, 3))

const navigateToArticle = (article: any) => {
  router.push({
    path: `/Blog/${article.id}/${article.id}`,
  })
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString()
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeIn 1s ease-out;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.gradient-text {
  background: linear-gradient(90deg, #3498db, #9b59b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientShift 8s ease infinite;
  background-size: 200% 200%;
}


.hero-subtitle {
  font-size: 1.5rem;
  color: #7f8c8d;
}

.featured-articles {
  margin-top: 3rem;
}

.section-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #9b59b6);
}

.article-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.article-card {
  position: relative;
  padding: 2rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  animation: slideUp 0.5s ease-out var(--delay) both;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #3498db, #9b59b6);
}

.article-card:hover {
  transform: translateY(-10px);
}

.article-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.article-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.article-summary {
  color: #34495e;
  line-height: 1.6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>