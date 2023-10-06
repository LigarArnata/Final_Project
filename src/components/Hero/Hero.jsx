import './heroStyles.css';


const Hero = (props) => {
    return(
        <>
        <div className={props.cName}>
            <img src={props.heroImage} alt="" />
            <div className='heroText'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href= {props.url} className={props.btnClass}>
                    {props.btnText}
                </a>
            </div>
        </div>
        </>
    )
}

export default Hero;