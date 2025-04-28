export default function ProductPage({ data, setCurrDisplay }) {
  return (
    <div className="product-page-container">
      <div className="product-page">
        {!data.images[3] ? (
          <img
            src="https://dummyjson.com/image/400x400/a8a8a8/000000?text=Url+cant+be+loaded"
            className="product-image"
          />
        ) : (
          <img src={data?.thumbnail} alt="" className="product-image" />
        )}

        <div className="product-content">
          <div className="main">
            <p className="product-name">{data?.title}</p>
            <p className="product-price">{data?.price}</p>
            <p>Ratings: {data?.rating}</p>
            <p>Stock: {data?.stock}</p>
          </div>
          <div className="product-tags-container">
            <p>Tags:</p>
            <div>
              {data?.tags.map((tag, index) => {
                return (
                  <div key={index} className="product-tags">
                    <span>{tag}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-data">
            <p>{data?.description}</p>
          </div>
          <div>
            {data?.brand ? <p>Brand: {data?.brand}</p> : <p>Brand: Unknown</p>}
            <p>Dimension:</p>
            <p>Width: {data?.dimensions?.width}</p>
            <p>Height: {data?.dimensions?.height}</p>
            <p>Depth: {data?.dimensions?.depth}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
