import { ref } from "vue";

interface ArticleBase {
    title: string;
    summary: string;
    date: string;
    tags: string[];
    path:string;
  }

export interface Article extends ArticleBase {
  id: number
}

const articlesBassArr:ArticleBase[] = [{
    title: '多面体编译0-依赖分析',
    summary: '',
    date: '2023-07-15',
    tags: ['Compiler'],
    path:"CompilerPolly0",
  }]


const articlesArr =  articlesBassArr.map((item ,index):Article => (
  {...item, id:index}
))

export const articles = ref<Article[]>(articlesArr)
export const articlesRouters = articlesArr.map((item) => (
  {
    path:`${item.id}`,
    component: () => import(`../content/${item.path}.vue`),
  }
))
