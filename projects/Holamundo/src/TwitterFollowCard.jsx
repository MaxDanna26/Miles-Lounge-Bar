export function TwitterFollowCard ({userName, Name , isFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'  alt="Avatar de midudev" src={imageSrc} />
                
                <div className='tw-followCard-info'>
                   <strong className='tw-followCard-info' >{Name} </strong>
                   <span className='tw-followCard-infoUserName' >{userName} </span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}