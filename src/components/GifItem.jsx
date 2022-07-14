
export const GifItem = ( { title, url } ) => {
    // console.log(`${title} ${url}`);
  return (
      <div className="card">
        <p>{title}</p>
        <img src={url} alt="GifItem" />
    </div>
  )
}

