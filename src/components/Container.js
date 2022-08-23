const Container = ({ title, content, children, show }) => {
  return (
    <div className="h-max rounded-md border-solid border-1 bg-stone-100  sm:m-2 sm:mt-4 sm:p-12 overflow-scroll">
      {show && (
        <>
          <div className="sm:text-2xl sm:grid sm:place-items-center mb-8">
            {title}
          </div>
          <p>{content}</p>
        </>
      )}
      <div className="sm:inline-flex m-12 align-middle">{children}</div>
    </div>
  );
};

export default Container;
