import Benefits from "../../../../components/Benefits/Benefits";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Typography from "../../../../components/Typography/Typography";
import imagePath from "../../../../assets/react.svg";
import "./about.css";
const data = [
  {
    imagePath: imagePath,
    title: "Fare Assortment",
    text: "We offer many different type of products with fewer variations in each category.",
  },
  {
    imagePath: imagePath,
    title: "Fare Assortment",
    text: "We offer many different type of products with fewer variations in each category.",
  },
  {
    imagePath: imagePath,
    title: "Fare Assortment",
    text: "We offer many different type of products with fewer variations in each category.",
  },
];

function About() {
  return (
    <div>
      <SectionTitle title="ABOUT US" />
      <Typography text="Order now and have your everyday companion" />
      <div className="benefit-container">
        {data.map((element) => {
          const { imagePath, title, text } = element;
          return <Benefits image={imagePath} title={title} text={text} />;
        })}
      </div>
    </div>
  );
}

export default About;
