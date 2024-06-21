import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../redux/articlesSlice';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const LoadingMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #666;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #cc0000;
  text-align: center;
`;

const ArticlesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
`;

const HomePage = ({ articles, loading, error, fetchArticles }) => {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchArticles({ category, country, page });
  }, [fetchArticles, category, country, page]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
    fetchArticles({ category: newCategory, country, page: 1 });
  };

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
    setPage(1);
    fetchArticles({ category, country: newCountry, page: 1 });
  };

  return (
    <HomePageContainer>
      <Heading>Latest News</Heading>
      <CategoryFilter onCategoryChange={handleCategoryChange} onCountryChange={handleCountryChange} />
      {loading && <LoadingMessage>Loading...</LoadingMessage>}
      {error && <ErrorMessage>Error fetching articles: {error.message}</ErrorMessage>}
      <ArticlesList>
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </ArticlesList>
      <Pagination currentPage={page} onPageChange={(newPage) => setPage(newPage)} />
    </HomePageContainer>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
  error: state.articles.error,
});

const mapDispatchToProps = {
  fetchArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
