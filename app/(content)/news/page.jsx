
import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";


export default async function NewsPage() {


 const  news =await getAllNews();
  return (
    <>
      <h1>news page</h1>

   {<NewsList news={news}></NewsList>}
    </>
  );
}
