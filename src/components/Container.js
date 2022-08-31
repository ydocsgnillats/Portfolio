const Container = ({ title, content, children, show }) => {
  return (
    <div className="rounded-md border-solid border-1 bg-primary dark:bg-darkPrimary  md:m-2 md:mt-4 md:p-12 overflow-scroll">
      {show && (
        <>
          <div className="md:text-2xl md:grid md:place-items-center mb-8">
            {title}
          </div>
          <p>{content}</p>
        </>
      )}
      <div className="md:inline-flex m-12 align-middle">{children}</div>
    </div>
  );
};

export default Container;
