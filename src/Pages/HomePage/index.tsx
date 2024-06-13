import React, { useContext, useState } from 'react'
import PageLayout from '../../components/PageLayout'
import { feedContext } from '../../ services/contexts/feedContext'
import formatDate from '../../ services/dataFormat'

const HomePage = () => {
    const { feedData, tagsData } = useContext(feedContext)
    
    const [pagination, setPagination] = useState<{start:number, end:number}>({
        start: 0,
        end: 9
    })
    const changePage = (index: number) => {
        if (pagination.start === 0) {
            
        }
        setPagination({...pagination, start: pagination.start * index, end: pagination.end + 1 })
    }
  return (
    <PageLayout>
    <div className="home-page">
        <div className="banner">
            <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
            </div>
        </div>

        <div className="container page">
            <div className="row">
            <div className="col-md-9">
                <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                    <a className="nav-link" href="">Your Feed</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="">Global Feed</a>
                    </li>
                </ul>
                </div>
                {
                    feedData?.articles?.map((data: any, index:number)=>{
                        if ((index >= pagination.start )&& (index <= pagination.end)) {
                            return (
                                <div className="article-preview">
                                    <div className="article-meta">
                                        <a href="/profile/eric-simons"><img src={`${data.author.image}`} /></a>
                                        <div className="info">
                                            <a href="/profile/eric-simons" className="author">{data.author.username}</a>
                                            <span className="date">{formatDate(data?.createdAt) }</span>
                                        </div>
                                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                        <i className="ion-heart"></i> {data.favoritesCount}
                                        </button>
                                    </div>
                                    <a href={`/article/${data.slug}`} className="preview-link">
                                        <h1>{data.title }</h1>
                                        <p>{data.description}</p>
                                        <span>Read more...</span>
                                        <ul className="tag-list">
                                            {data?.tagList.map((tag:string, index:number) => {
                                                return (
                                                    <li key={index} className="tag-default tag-pill tag-outline">{ tag}</li>
                                                )
                                            })}
                                        
                                        {/* <li className="tag-default tag-pill tag-outline">implementations</li> */}
                                        </ul>
                                    </a>
                                </div>
                            )
                        }
                    })
                }
                

                {/* <div className="article-preview">
                <div className="article-meta">
                    <a href="/profile/albert-pai"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
                    <div className="info">
                    <a href="/profile/albert-pai" className="author">Albert Pai</a>
                    <span className="date">January 20th</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 32
                    </button>
                </div>
                <a href="/article/the-song-you" className="preview-link">
                    <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                    <li className="tag-default tag-pill tag-outline">realworld</li>
                    <li className="tag-default tag-pill tag-outline">implementations</li>
                    </ul>
                </a>
                </div> */}

                <ul className="pagination">
                    {feedData && Array(feedData?.articles?.length / 10).fill(0).map((_, index)=>{
                        return (
                            <li key={index} className="page-item ">
                                <a className="page-link" href="">{index +1}</a>
                            </li>
                        )
                    })}
                    {/* <li className="page-item active">
                        <a className="page-link" href="">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="">2</a>
                    </li> */}
                </ul>
            </div>

            <div className="col-md-3">
                <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                    {tagsData && tagsData?.tags?.map((tag:string, index:number)=>{
                        return (<a href="" className="tag-pill tag-default">{ tag}</a>)
                    })}
                    
                    {/* <a href="" className="tag-pill tag-default">javascript</a>
                    <a href="" className="tag-pill tag-default">emberjs</a>
                    <a href="" className="tag-pill tag-default">angularjs</a>
                    <a href="" className="tag-pill tag-default">react</a>
                    <a href="" className="tag-pill tag-default">mean</a>
                    <a href="" className="tag-pill tag-default">node</a>
                    <a href="" className="tag-pill tag-default">rails</a> */}
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</PageLayout>
  )
}

export default HomePage
