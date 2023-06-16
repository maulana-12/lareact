import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    const current = meta.current_page;
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const lastPage = meta.links[meta.links.length - 2].url
    const firstPage = meta.links[1].url

    // console.log(meta)
    return (
        <div className="join bg-gray-700">
            <Link href={firstPage} className="join-item btn ">First Page</Link>
            {current - 1 == 0 || <Link href={prev} className="join-item btn">{current - 1}</Link>}
            <button className="join-item btn btn-disabled text-black">{current}</button>
            {current + 2 == meta.links.length || <Link href={next} className="join-item btn" >{current + 1}</Link>}
            <Link href={lastPage} className="join-item btn">Last Page</Link>
        </div>
    )
}

export default Paginator