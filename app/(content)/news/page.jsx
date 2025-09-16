'use client';
import NewsList from "@/components/NewsList";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();
  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const respones =await fetch("http://localhost:8080/news");
      if (!respones.ok) {
        setError('failed to fetch the news');
        setIsLoading(false);
      }
      const news = await respones.json();
      setNews(news);
      setIsLoading(false);
  }
    fetchNews();  
  }, [])
  if (isLoading) {
    return <p>is loading ...</p>
  }
  if (error) {
    return <p>{error}</p>
  }
  let newsContent;
  if (news) {
    newsContent = <NewsList news={news}></NewsList>;
  }
  return (
    <>
      <h1>news page</h1>
   {newsContent}
    </>
  );
}
