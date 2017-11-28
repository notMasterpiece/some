import React from 'react';
import resume from '../../../resume.json';


class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <div className="article-name">
          <img src={resume.image} alt={resume.name} />
          <h1>{resume.name}</h1>
          <p><a href={`mailto:${resume.email}`}>{resume.email}</a></p>
        </div>
      </div>
    )
  }
}

export default Article;