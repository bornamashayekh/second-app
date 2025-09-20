import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";
export default async function LatestNewsPage() {
    const latestNews = await getLatestNews()
  return (
    <>
          <h1>latest news </h1>
          <NewsList news={latestNews}></NewsList>
    </>
  );
}
