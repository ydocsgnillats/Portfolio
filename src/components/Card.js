
const Card = ({title, text, image, path}) => {
    return (
                <a href={path}>
                    <div className="group rounded-xl flex items-center justify-center m-6">
                        <figure className="relative max-w-xs cursor-pointer">
                            <img className="rounded-lg" src={image}/>
                            <figcaption className="absolute text-md -mt-64 text-white px-4">
                                <div className="grid place-items-center text-xl m-1">
                                    <h1 className="group-hover:hidden">{title}</h1>
                                    <h1 className="hidden group-hover:block group-hover:bg-slate-800 group-hover:opacity-80 p-1 rounded-md">Click to Learn More</h1>
                                </div>
                                <div className="max-h-48 overflow-scroll opacity-0 p-1 rounded-md group-hover:opacity-80 group-hover:bg-slate-800">
                                    <h1>{text}</h1>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </a>
            )
}

export default Card;