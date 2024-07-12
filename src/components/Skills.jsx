import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 760 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn ">
                        <h2>Skills</h2>
                        <p>I am a skilled web developer proficient in a variety of modern technologies. My expertise lies in both backend and frontend development, with significant experience in building RESTful APIs using Django and creating dynamic, user-friendly interfaces with React. I have a strong command of HTML, CSS, and JavaScript, enabling me to craft visually appealing and responsive web pages. My problem-solving abilities allow me to tackle complex programming challenges effectively. Additionally, I am well-versed in database management using SQL and have a solid understanding of version control with Git and GitHub. My diverse skill set makes me a versatile developer capable of handling various aspects of web development projects.</p>
                        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Database</h5>
                            </div>
                         
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
export default Skills