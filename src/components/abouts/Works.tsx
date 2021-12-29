import React from 'react'

type WorksProps = {
}

const Works: React.FC<WorksProps> = ({ }) => {

    return (
        <section id="Works">
            <h2>Works</h2>
            <div className="row">
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://hub.vroid.com/characters/1171131286256569911/models/7163269262376855678`} className="image fit thumb">
                        <img src={`https://vroid-hub.pximg.net/c/300x400_a2_g5/images/portrait_images/1606028/7154001257129230114.png`} alt="" />
                    </a>
                    <a href={`https://hub.vroid.com/users/6571484`} className="slide-title">
                        <h3>VRoid Models</h3>
                    </a>
                </article>
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://www.pixiv.net/users/6571484`} className="image fit thumb">
                        <img src={`./../../assets/images/Pixiv.png`} alt="" />
                    </a>
                    <a href={`https://www.pixiv.net/users/6571484`} className="slide-title">
                        <h3>Paintings(Pixiv)</h3>
                    </a>
                </article>
            </div>
        </section>
    )
}

export default Works