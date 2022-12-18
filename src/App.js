import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Cursor, Navbar, Button } from "./components";
import video from "./assets/practice-vid.mp4";
import aboutVid from "./assets/about-vid.mp4";
import { caseStudies, featuredEngagements, news } from "./data/data";
import { HiArrowRight } from "react-icons/hi";

function App() {
  const [cursorPosition, setCursorPosition] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  // const [isMousePresent, setIsMousePresent] = useState(false);
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    threshold: 0.3,
  });

  // const myRef = useRef();
  // const [myElementIsVisible, setMyElementIsVisible] = useState();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setMyElementIsVisible(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current);
  // }, []);

  const moveCursor = (e) => {
    const newCursorPosition = {
      top: e.pageY - 70,
      left: e.pageX - 70,
      transform: "",
    };
    return setCursorPosition(newCursorPosition);
  };

  const staticMouse = () => {
    const staticCursor = {
      top: 50 + "%",
      left: 50 + "%",
      transform: "translate(-50%, -50%)",
    };
    return setCursorPosition(staticCursor);
  };

  const navToggle = () => {
    return console.log("hello");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 3000);
  }, []);

  return (
    <main className={myElementIsVisible ? "dark-mode" : ""}>
      <div class={isLoad ? "preloader hidden" : "preloader"}>B/D®</div>

      <Navbar />

      <section
        className='hero'
        onMouseMove={(e) => moveCursor(e)}
        onMouseLeave={staticMouse}
      >
        <video className='hero__video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <Cursor cursorPosition={cursorPosition} />
      </section>

      <div className='padding-wrapper'>
        <section className='work'>
          <header className='work__description'>
            <div className='description__text'>
              <p>
                Basic/Dept<sup>®</sup> is a global branding and digital design
                agency building products, services, and eCommerce experiences
                that turn cultural values into company value.
              </p>
              <Button text={"see the work"} />
            </div>
            <div className='brand'>B/D®</div>
          </header>
          <div className='case-studies'>
            {caseStudies.map((study) => {
              return (
                <div key={study.id} className='study'>
                  <div className='study__img-container'>
                    <img src={study.image} alt={study.company} />
                  </div>
                  <h4>{study.company}</h4>
                  <p>{study.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className='engagements'>
          <div className='art-thing'>
            <figure></figure>
            <div className='art-thing__numbers'>
              <div className='numbers__01'>01</div>
              <div className='numbers__02'>/05</div>
              <div>where dot will go</div>
            </div>
          </div>
          <h2>
            Featured<br></br>Engagements
          </h2>
          <div className='featured-container'>
            {featuredEngagements.map((featured) => {
              return (
                <div key={featured.id} className='featured'>
                  <h4 className='featured__logo'>{featured.logo}</h4>
                  <div className='featured__text'>
                    <h5>{featured.company}</h5>
                    <p>{featured.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section ref={myRef} className='about'>
          <div className='about__text-container'>
            <div className='sticky'>
              <h2>
                Basic/Dept<sup>®</sup> helps brands{" "}
                <span className='about__dot'></span> connect w/ culture
              </h2>
              <p>
                adweek <span className='highlight'>(agency spotlight)</span>
              </p>
              <Button text={"about us"} />
            </div>
          </div>
          <div className='video-container'>
            <video className='about__video' autoPlay loop muted>
              <source src={aboutVid} type='video/mp4' />
            </video>
          </div>
        </section>
        <section className='news'>
          <header>
            <h3>Featured News</h3>
            <Button text={"view all"} />
          </header>
          {news.map((article) => {
            return (
              <div key={article.id} className='article'>
                <div className='img-container'>
                  <img src={article.image} alt='' />
                </div>
                <a href='#' className='article__text'>
                  <p className='article__text-title'>{article.title}</p>
                  <HiArrowRight className='article__text-btn' />
                  <p className='article__text-desc'>
                    <span>{article.type}</span> {article.date}
                  </p>
                </a>
              </div>
            );
          })}
        </section>
        <footer>
          <div className='footer__main-nav'>
            <div className='row'>
              <h4>b/d®</h4>
              <p>
                We collaborate with ambitious brands and<br></br>people. let's
                build. <a>biz@basicagency.com</a>
              </p>
            </div>
            <div className='row'>
              <form action=''>
                <label htmlFor=''>
                  <span className='footer__dot'></span> stay in the know
                </label>
                <div className='inline'>
                  <input
                    type='email'
                    name=''
                    id=''
                    placeholder='email address'
                  />
                  <button type='submit' className='form__btn'>
                    <HiArrowRight />
                  </button>
                </div>
              </form>
              <ul className='footer__links-list'>
                <li>
                  <p>
                    <span className='footer__dot'></span> social
                  </p>
                  <ul className='footer__links'>
                    <li>instagram</li>
                    <li>twitter</li>
                    <li>linkedIn</li>
                    <li>facebook</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <span className='footer__dot'></span> initiatives
                  </p>
                  <ul className='footer__links'>
                    <li>crafted</li>
                    <li>applied</li>
                    <li>brandbeats</li>
                    <li>moves</li>
                    <li>b®/Good</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <span className='footer__dot'></span> offices
                  </p>
                  <ul className='footer__links'>
                    <li>san diego - CA</li>
                    <li>new york - NY</li>
                    <li>bay area - CA</li>
                    <li>st. louis - MO</li>
                    <li>amsterdam - NL</li>
                    <li>london - EN</li>
                    <li>berlin - GE</li>
                    <li>argentina - AR</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer__legal-nav'>
            <p>basic/dept®, inc 10-22©</p>
            <p>
              easy to understand, impossible to ignore.<sup>tm</sup>
            </p>
            <p>
              <a href='#' className='footer__legal-link'>
                terms
              </a>
              ,{" "}
              <a href='#' className='footer__legal-link'>
                privacy policy
              </a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
