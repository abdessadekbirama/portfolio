import Ball from "./Ball";

const models = [
    "/models/html.glb",
    "/models/css.glb",
    "/models/js.glb",
    "/models/react.glb",
    "/models/nodejs.glb",
    "/models/python.glb",
    "/models/php.glb",
    "/models/github.glb",
    "/models/tailwind.glb",
    "/models/chatgpt.glb",
    "/models/mongodb.glb",
    "/models/mysql.glb",
    
]
function BallCanvas(){
    return(
        <div className="flex flex-wrap gap-2 justify-center w-full sm:w-[600px] m-auto">
            {models.map((m,i)=>{
                return(
                    <Ball model={'/portfolio'+m} key={i}/>
                )
            })}
        </div>
    )
}

export default BallCanvas;