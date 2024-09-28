interface ArticleProps{
    title:string,
    tags:string[],
    date:string,
    isNew: boolean
}

const NewStatusArticle = () => {
    return(
        <span>--New!</span>
    )
}

const Article:React.FC<ArticleProps> = ({ title, tags, date, isNew }) => {
    const articleStyle: React.CSSProperties ={
        textAlign:'left',
        padding:'10px',
        marginBottom:'20px'
    }

    return(
        <div style={articleStyle}>
                <h3 style={{marginBottom:0}}>{title}</h3>
                <small>
                    Date:{date}, tags: {tags.join(", ")} {" "}
                    {isNew && <NewStatusArticle />}
                </small>
                <div>
                    <small>ditulis oleh</small>
                </div>
            </div>
    )
}

export default Article