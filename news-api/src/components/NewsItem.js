import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: #000;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      word-break: keep-all;
    }
  }
  & + & {
    margin-top: 3rem;
  }
  `;
  const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return(
      <NewsItemBlock>
        {/* TODO: thumbnail 없으면 빈 이미지 불러오기 */}
        {urlToImage && (
          <div className="thumbnail">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>
      </NewsItemBlock>
    );
  };

  export default NewsItem;