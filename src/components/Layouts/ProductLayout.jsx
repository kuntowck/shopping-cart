const ProductLayout = ({ children, title }) => {
  return (
    <div className="my-5">
      <header>
        <h1>{title}</h1>
      </header>
      <div className="flex flex-row flex-wrap gap-4">{children}</div>
    </div>
  );
};

export default ProductLayout;
