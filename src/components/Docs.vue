<template>
    <!-- 分类展示容器 -->
    <div class="category-container">
        <!-- 新增标签索引栏 -->
        <div class="tag-filter">
            <button 
                class="tag-btn" 
                :class="{ active: !selectedTag }"
                @click="selectedTag = null"
            >
                全部
            </button>
            <button
                v-for="(tag, index) in allTags"
                :key="index"
                class="tag-btn"
                :class="{ active: selectedTag === tag }"
                @click="selectedTag = tag"
            >
                {{ tag }}
            </button>
        </div>

        <!-- 修改后的分类展示 -->
        <div 
            v-for="(articles, tag) in filteredCategories" 
            :key="tag" 
            class="category-group">
            <h2 class="category-title">{{ tag }}</h2>  <!-- 修复分类标题显示 -->
            <div class="article-grid">
                <div 
                    v-for="(article, index) in articles" 
                    :key="index" 
                    class="article-card" 
                    :style="`--hue: ${index * 30 % 360};`"
                    @click="handleCardClick(article)">
                    <h3 class="article-title">{{ article.title }}</h3>
                    <p class="article-summary">{{ article.summary }}</p>
                    <div class="article-meta">
                        <span class="article-date">{{ formatDate(article.date) }}</span>
                        <div v-for="tag in article.tags" :key="tag" class="article-tag">
                            {{ tag }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { type Article, articles } from '../lib/utils'

const router = useRouter()
const selectedTag = ref<string | null>(null) // 添加这行声明

// 分类逻辑
const categorizedArticles = computed(() => {
    const map = new Map<string, Article[]>()
    articles.value.forEach(article => {
        article.tags.forEach(tag => {
            const key = tag.toLowerCase()
            if (!map.has(key)) {
                map.set(key, [])
            }
            map.get(key)?.push(article)
        })
    })
    return Object.fromEntries(map)
})

const handleCardClick = (article: Article) => {
    router.push({
        path: `/Blog/${article.id}/${article.id}`,
    })
}


const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
}

// 获取所有唯一标签
const allTags = computed(() => {
    return Array.from(new Set(
        articles.value.flatMap(article => article.tags)
    )).sort()
})

// 修改后的过滤逻辑
const filteredCategories = computed(() => {
    if (!selectedTag.value) return categorizedArticles.value;
    
    return Object.fromEntries(
        Object.entries(categorizedArticles.value)
            .filter(([tag]) => tag.toLowerCase() === selectedTag.value?.toLowerCase())
            .map(([tag, articles]) => [
                tag, 
                articles.filter(a => 
                    a.tags.some(t => t.toLowerCase() === selectedTag.value?.toLowerCase())
                )
            ])
    );
});
</script>

<style scoped>
.category-container {
    padding: 2rem;
}

.category-group {
    margin-bottom: 3rem;
}

.category-title {
    color: #2c3e50;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #3498db;
}

/* 新增卡片背景渐变 */
.article-grid {
    display: flex;
    overflow-x: auto;
    gap: 1.5rem;
    padding-bottom: 1rem;
    scrollbar-width: none; /* 隐藏滚动条 */
    -ms-overflow-style: none;
}

.article-grid::-webkit-scrollbar {
    display: none;
}

.article-card {
    min-width: 300px; /* 固定卡片宽度 */
    flex-shrink: 0;  /* 禁止收缩 */
    margin-right: 1.5rem;
    position: relative;
    padding: 2rem;
    border-radius: 12px;
    background: linear-gradient(145deg, #3498db20, #9b59b610); /* 新增渐变背景 */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    color: #2c3e50; /* 调整文字颜色 */
}

/* 调整装饰条透明度以适配新背景 */
.article-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #3498dbdd, #9b59b6dd); 
}

/* 优化阴影效果 */
.article-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(52, 152, 219, 0.2);
}

/* 同步标签样式 */
.article-tag {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background: #ecf5ff;
    color: #3498db;
    border-radius: 20px;
    font-size: 0.85rem;
    margin-left: 0.5rem;
}

/* 新增标签筛选栏样式 */
.tag-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 2rem;
    padding: 1rem 0;
}

.tag-btn {
    padding: 0.6rem 1.2rem;
    border: 2px solid #3498db;
    border-radius: 8px;  /* 从25px改为8px */
    background: transparent;
    color: #3498db;
    cursor: pointer;
}

.tag-btn:hover {
    background: #3498db20;
}

.tag-btn.active {
    background: linear-gradient(90deg, #3498db, #9b59b6);
    color: white;
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);  /* 新增 */
}

.article-title {
    color: white !important;  /* 强制标题白色 */
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* 添加阴影增强对比度 */
}

.article-summary {
    color: #e0e0e0;  /* 摘要文字调亮 */
}
</style>