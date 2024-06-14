import React, { useContext } from 'react'
import PageLayout from '../../components/PageLayout'
import { editorContext } from '../../services/contexts/editorContext'

const EditorPage = () => {

    const { handleSubmit, hanndleChange } = useContext<any>(editorContext)
    
  return (
    <div className="editor-page">
        <div className="container page">
            <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
                <ul className="error-messages">
                <li>That title is required</li>
                </ul>

                <form>
                <fieldset>
                    <fieldset className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Article Title"  name='title' onChange={hanndleChange}/>
                    </fieldset>
                    <fieldset className="form-group">
                    <input type="text" className="form-control" placeholder="What's this article about?" name='description' onChange={hanndleChange}/>
                    </fieldset>
                    <fieldset className="form-group">
                    <textarea
                        className="form-control"
                        rows={8}
                        placeholder="Write your article (in markdown)"
                        name='body'
                        onChange={hanndleChange}
                    ></textarea>
                    </fieldset>
                    <fieldset className="form-group">
                    <input type="text" className="form-control" placeholder="Enter tags" name='tagList' onChange={hanndleChange} />
                    <div className="tag-list">
                        <span className="tag-default tag-pill"> <i className="ion-close-round"></i> tag </span>
                    </div>
                    </fieldset>
                   
                </fieldset>
                </form>
                 <button className="btn btn-lg pull-xs-right btn-primary" type="button" onClick={()=>handleSubmit()}>
                    Publish Article
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EditorPage
