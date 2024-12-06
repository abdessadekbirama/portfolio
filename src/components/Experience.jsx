import { VerticalTimelineElement,VerticalTimeline } from "react-vertical-timeline-component";
import  "react-vertical-timeline-component/style.min.css";
// import motion from 'framer-motion';
const experience = [
    {
        title:"full-stack developer",
        date:"2024-10-10",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta ex quas, perspiciatis voluptas voluptates at eaque ea enim qui, dolor nam animi. Nobis labore explicabo consequatur a debitis. Dolorem."
    },
    {
        title:"full-stack developer",
        date:"2024-10-10",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta ex quas, perspiciatis voluptas voluptates at eaque ea enim qui, dolor nam animi. Nobis labore explicabo consequatur a debitis. Dolorem."
    },
    {
        title:"full-stack developer",
        date:"2024-10-10",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta ex quas, perspiciatis voluptas voluptates at eaque ea enim qui, dolor nam animi. Nobis labore explicabo consequatur a debitis. Dolorem."
    },
    {
        title:"full-stack developer",
        date:"2024-10-10",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta ex quas, perspiciatis voluptas voluptates at eaque ea enim qui, dolor nam animi. Nobis labore explicabo consequatur a debitis. Dolorem."
    },
]
const ExperienceCard = (props)=>{
    return(
        <div className="my-5">
            <VerticalTimelineElement
            date={props.date}
            contentStyle={{background:"linear-gradient(-125deg,#220223 70%,#880c8c7e)"}}
            f
            >
            <h1 className="text-xl font-bold">{props.title}</h1>
            <p className="pl-2">{props.content}</p>
            </VerticalTimelineElement>
        </div>
    )
}
function Experience(){
    return(
        <div>
            <VerticalTimeline>
                {
                    experience.map((c,i)=>{
                        return(
                            <ExperienceCard key={i} date={c.date} title={c.title} content={c.content} />
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Experience;