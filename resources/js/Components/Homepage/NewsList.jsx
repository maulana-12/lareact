const isNews = (newsParam) => {
    return newsParam.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-gray-700 shadow-xl">
                <figure><img src="https://placeimg.com/80/80/people" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{data.category}</div>
                        <div className="badge badge-inline">{data.author}</div>
                    </div>
                </div>
            </div>
        )
    })
}

const noNews = () => {
    return (
        <div>
            <h2 className="card-title items-center">
                Saat ini belum ada berita tersedia
            </h2>
        </div>
    )
}

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news)
}


/* CARA KE-2 */

// const NewsList = ({ news }) => {
//     return (
//         news.length == 0 ? (
//             <div>Saat ini belum ada berita tersedia</div>
//         ) : (
//             news.map((data, i) => {
//                 return <div key={i} className="card w-96 bg-base-100 shadow-xl">
//                     <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                             {data.title}
//                             <div className="badge badge-secondary">NEW</div>
//                         </h2>
//                         <p>{data.description}</p>
//                         <div className="card-actions justify-end">
//                             <div className="badge badge-inline">{data.category}</div>
//                             <div className="badge badge-outline">{data.author}</div>
//                         </div>
//                     </div>
//                 </div>
//             })
//         )
//     )
// }

export default NewsList