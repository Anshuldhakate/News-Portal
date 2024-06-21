import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ArticleCardContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px;
  }
`;

const ArticleTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ArticleAuthor = styled.p`
  font-size: 14px;
  color: #666666;
`;

const ArticleDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ReadMoreLink = styled(Link)`
  display: block;
  font-size: 14px;
  color: blue;
  text-decoration: underline;
  margin-top: 10px;

  &:hover {
    color: darkblue;
  }
`;

const ArticleCardContainerResponsive = styled(ArticleCardContainer)`
  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ArticleTitleResponsive = styled(ArticleTitle)`
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ArticleAuthorResponsive = styled(ArticleAuthor)`
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ArticleDescriptionResponsive = styled(ArticleDescription)`
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

// ArticleCard Component
const ArticleCard = ({ article }) => {
  return (
    <ArticleCardContainerResponsive>
      {article.urlToImage && <ArticleImage src={article.urlToImage} alt="Article" />}
      <ArticleTitleResponsive>{article.title}</ArticleTitleResponsive>
      {article.author && <ArticleAuthorResponsive>By {article.author}</ArticleAuthorResponsive>}
      <ArticleDescriptionResponsive>{article.description}</ArticleDescriptionResponsive>
      <ReadMoreLink to={`/article/${encodeURIComponent(article.title)}`}>
        Read More
      </ReadMoreLink>
    </ArticleCardContainerResponsive>
  );
};

export default ArticleCard;
