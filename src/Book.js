const Book = (props) => {
  //destructure using javascript property
  const { title, author, image, number } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className = "number">{`#${number+1}`}</span>
    </article>
  );
};

export default Book;