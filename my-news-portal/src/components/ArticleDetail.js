import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const ArticleDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ArticleTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const ArticleContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ArticleMeta = styled.div`
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;

  p {
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    font-size: 12px;

    p {
      margin-bottom: 6px;
    }
  }
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ArticleDetail = () => {
  const { title } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((art) => art.title === decodeURIComponent(title))
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <ArticleDetailContainer>
      <ArticleTitle>{article.title}</ArticleTitle>
      {article.urlToImage && <ArticleImage src={article.urlToImage} alt={article.title} />}
      <ArticleContent>{article.content}</ArticleContent>
      <ArticleMeta>
        <p>Author: {article.author}</p>
        <p>Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
        <p>Source: {article.source.name}</p>
        <p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read Full Article
          </a>
        </p>
      </ArticleMeta>
      <HomeButton to="/">Go Back to Homepage</HomeButton>
    </ArticleDetailContainer>
  );
};

export default ArticleDetail;
