import Link from "next/link";

import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { Suspense } from "react";
async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }
  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {Array.isArray(links) &&
            links.map((link) => (
              <li key={link}>
                <Link
                  href={year ? `/archive/${year}/${link}` : `/archive/${link}`}
                >
                  {link}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }
  let newsContent = <p>No news found for the selected period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}
export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>loading filter ...</p>}>
        <FilterHeader month={selectedMonth} year={selectedYear} />
      </Suspense>
      <Suspense fallback={<p>loading news ...</p>}>
        <FilteredNews month={selectedMonth} year={selectedYear} />
      </Suspense>
    </>
  );
}
