import React from 'react'
import Article from './Article'

const ArticleList = ({posts}) => {
    console.log(posts); 
    const articlesArr = posts.map(article =>  <Article key={article.id} preview = {article.preview} date={article.date} title = {article.title}></Article>)
  return (
    <main>
     {articlesArr}
    </main>
  )
}

export default ArticleList
