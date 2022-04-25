const Container = ({title, content, children, show}) => {
    return (
        
            <div className="h-max rounded-md border-solid border-1 bg-stone-100  m-2 mt-4 p-12">
                {show && (
                    <>
                    <div className="text-2xl grid place-items-center mb-8">{title}</div>
                    <p>{content}</p>
                    </>
                )}
                <div className="inline-flex m-12 align-middle">{children}</div>
            </div>
    )
}

export default Container;