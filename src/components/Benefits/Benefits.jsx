import "./benefits.css";
function Benefits({ image, title, text }) {
  return (
    <div className="benefit-content">
      <div className="benfit-image-container">
        <img src={image} alt="" className="benefit-image" />
      </div>
      <div className="benefit-title-container">
        <h3>{title}</h3>
      </div>
      <div className="benefit-text-container">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Benefits;
