const Container = ({title, content, show, children}) => {
    return (
            show && (
                <div className="h-max rounded-md border-solid border-1 bg-zinc-300  m-2 mt-4 p-12">
                    <div className="text-2xl grid place-items-center mb-8">{title}</div>
                    <p>{content}</p>
                    <div className="inline-flex m-12 align-middle">{children}</div>
                </div>
            )
    )
}

export default Container;