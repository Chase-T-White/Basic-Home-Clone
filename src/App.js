import { useState, useEffect } from "react";
import { Cursor, Navbar } from "./components";

function App() {
  const [cursorPosition, setCursorPosition] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const moveCursor = (e) => {
    const newCursorPosition = { top: e.pageY - 70, left: e.pageX - 70 };
    return setCursorPosition(newCursorPosition);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 3000);
  }, []);

  return (
    <main>
      <div id={isLoad ? "hidden" : "preloader"}>B/D®</div>

      <Navbar />

      <section className='hero' onMouseMove={(e) => moveCursor(e)}>
        <Cursor cursorPosition={cursorPosition} />
      </section>

      <section className='work'>
        <header>
          <div className='description'>
            <p>
              Basic/Dept<sup>®</sup> is a global branding and digital design
              agency building products, services, and eCommerce experiences that
              turn cultural values into company value.
            </p>
            <div className='brand'>B/D®</div>
          </div>
        </header>

        <div className='case-studies'>
          <div className='case'>
            <img src='' alt='' />
            <h4>Patagonia</h4>
            <p>An ecommerce experience driven by patagonia's brand mission</p>
          </div>
          <div className='case'>
            <img src='' alt='' />
            <h4>Wilson</h4>
            <p>A century-old sports brand finding its place in culture</p>
          </div>
          <div className='case'>
            <img src='' alt='' />
            <h4>Google Store</h4>
            <p>
              An ecommerce experience helping google bring its hardware to
              people across the globe
            </p>
          </div>
        </div>
      </section>

      <section className='engagements'>
        <div className='art-thing'>
          <figure></figure>
          <div className='art-thing__numbers'>
            <div>01</div>
            <div>/05</div>
            <div></div>
          </div>
          <h2>
            Featured<br></br>Engagements
          </h2>
          <div className='featured-container'></div>
        </div>
      </section>

      <section className='about'>
        <div className='video-container'></div>
        <div className='about__text-container'>
          <h2>
            Basic/Dept<sup>®</sup> helps brands{" "}
            <span className='about__dot'></span> connect w/ culture
          </h2>
          <p>adweek (agency spotlight)</p>
          <button className='btn'>About Us</button>
        </div>
      </section>

      <section className='news'></section>

      <footer>
        <div className='footer__main-nav'>
          <div className='row'>
            <h4>b/d®</h4>
            <p>
              we collaborate with ambitious brands and people. let's build.{" "}
              <a>biz@basicagency.com</a>
            </p>
          </div>
          <div className='row'>
            <form action=''>
              <label htmlFor=''>
                <span className='footer__dot'></span> stay in the know
              </label>
              <input type='email' name='' id='' placeholder='email address' />
              <button type='submit'></button>
            </form>
            <ul className='footer__links'>
              <li>
                <p>
                  <span className='footer__dot'></span> social
                </p>
                <ul className='footer__links-socials'>
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
                <ul className='footer__links-initiatives'>
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
                <ul className='footer__links-offices'>
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
            <a href=''>terms</a>, <a href=''>privacy policy</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
