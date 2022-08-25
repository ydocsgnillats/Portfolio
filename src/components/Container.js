const Container = ({ title, content, children, show }) => {
  return (
    <div className="h-max rounded-md border-solid border-1 bg-stone-100  lg:m-2 lg:mt-4 lg:p-12 overflow-scroll">
      {show && (
        <>
          <div className="lg:text-2xl lg:grid lg:place-items-center mb-8">
            {title}
          </div>
          <p>{content}</p>
        </>
      )}
      <div className="lg:inline-flex m-12 align-middle">{children}</div>
    </div>
  );
};

export default Container;
