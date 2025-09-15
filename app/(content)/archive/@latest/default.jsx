import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";
export default function LatestNewsPage() {
    const latestNews = getLatestNews()
  return (
    <>
          <h1>latest news </h1>
          <NewsList news={latestNews}></NewsList>
    </>
  );
}
