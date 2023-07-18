import React from 'react'

const Article = ({title, date="January 1, 1970", preview, key}) => {
    console.log(title);
  return (
    <div>
    <article key={key}>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
    </div>
  )
}

export default Article
