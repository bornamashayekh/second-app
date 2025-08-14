import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(
        (newsItem) => newsItem.slug === newsItemSlug
    );

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <Link href={`./`}>
                <div className="modal-backdrop" />
            </Link>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </div>
            </dialog>
        </>
    );
}
