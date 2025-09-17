
import NewsList from "@/components/NewsList";


export default async function NewsPage() {


  
      const respones =await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error('failed to fetch the data');
     }

  news = await respones.json();
  return (
    <>
      <h1>news page</h1>

   {<NewsList news={news}></NewsList>}
    </>
  );
}
