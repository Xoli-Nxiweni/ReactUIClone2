import './Article.css'

let Article = () =>{
    return(
        <div className='Article'>
            <div className='Text'><h1>Featured Artist</h1></div>
            <div className='icon'>
                {/*  */}
            </div>
            <div className='blocks'>
                <div className='block'><span>uiux</span></div>
                <div className='block'><span>illusta</span></div>
                <div className='block'><span>motion</span></div>
                <div className='block icon'><span>{'>'}</span></div>
            </div>
        </div>
    )
}

export default Article;