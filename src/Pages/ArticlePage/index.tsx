import React from 'react'
import {getArticleSlug} from "../../services/articleFuction"
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import formatDate from '../../services/dataFormat'

const ArticlePage = () => {
    const { slug } = useParams()
    
    const { data, error, isLoading, isSuccess} = useQuery({
    queryKey: ["tags", slug], // Adding slug to the queryKey to ensure it re-fetches when slug changes
    queryFn: () => getArticleSlug(slug as string), // Passing a function that calls getArticleSlug
  });

    if (isSuccess) {
        console.log("success", data)
    }
  
//
  return (
    <div className="article-page">
        <div className="banner">
            <div className="container">
                  <h1>{data?.title }</h1>

            <div className="article-meta">
                <a href={`/profile/${data?.author?.username}`}><img src={data?.author?.image} /></a>
                <div className="info">
                          <a href="/profile/eric-simons" className="author">{data?.author?.username}</a>
                          <span className="date">{formatDate(data?.createdAt) }</span>
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                          &nbsp; Follow {data?.author?.username}<span className="counter">{ data?.favoritesCount}</span>
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Post <span className="counter">{data?.favoritesCount}</span>
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-edit"></i> Edit Article
                </button>
                <button className="btn btn-sm btn-outline-danger">
                <i className="ion-trash-a"></i> Delete Article
                </button>
            </div>
            </div>
        </div>

        <div className="container page">
            <div className="row article-content">
            <div className="col-md-12">
                <p>{data?.description}</p>
                <h2 id="introducing-ionic">Introducing RealWorld.</h2>
                <p>{data?.body}</p>
                <ul className="tag-list">
                    {data && data?.tagList.map((tag:string, index:number)=>{
                        return (
                            <li key={index} className="tag-default tag-pill tag-outline">{tag}</li>
                        )
                    })}
                </ul>
            </div>
            </div>

            <hr />

            <div className="article-actions">
            <div className="article-meta">
                <a href="profile.html"><img src={data?.author?.image} /></a>
                <div className="info">
                <a href="" className="author">{data?.author?.username}</a>
                    <span className="date">{formatDate(data?.createdAt)}</span>
                </div>

                <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                &nbsp; Follow Eric Simons
                </button>
                &nbsp;
                <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Article <span className="counter">(29)</span>
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-edit"></i> Edit Article
                </button>
                <button className="btn btn-sm btn-outline-danger">
                <i className="ion-trash-a"></i> Delete Article
                </button>
            </div>
            </div>

            <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
                <form className="card comment-form">
                <div className="card-block">
                    <textarea className="form-control" placeholder="Write a comment..." rows={3}></textarea>
                </div>
                <div className="card-footer">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    <button className="btn btn-sm btn-primary">Post Comment</button>
                </div>
                </form>

                <div className="card">
                <div className="card-block">
                    <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                    </p>
                </div>
                <div className="card-footer">
                    <a href="/profile/author" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    </a>
                    &nbsp;
                    <a href="/profile/jacob-schmidt" className="comment-author">Jacob Schmidt</a>
                    <span className="date-posted">Dec 29th</span>
                </div>
                </div>

                <div className="card">
                <div className="card-block">
                    <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                    </p>
                </div>
                <div className="card-footer">
                    <a href="/profile/author" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    </a>
                    &nbsp;
                    <a href="/profile/jacob-schmidt" className="comment-author">Jacob Schmidt</a>
                    <span className="date-posted">Dec 29th</span>
                    <span className="mod-options">
                    <i className="ion-trash-a"></i>
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ArticlePage
