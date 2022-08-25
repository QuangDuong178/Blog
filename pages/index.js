import Head from "next/head";

export default function Home() {
  // let stars = getElementById("stars");
  // let moon = document.getElementById("moon");
  // let mountains_behind = document.getElementById("mountains_behind");
  // let mountains_front = document.getElementById("mountains_front");
  // let text = document.getElementById("text");
  // let btn = document.getElementById("btn");

  // window.addEventListener("scroll", () => {
  //   let value = window.scrollY;
  //   stars.style.left = value + "px";
  //   moon.style.top = value * 1.05 + "px";
  //   mountains_behind.style.top = value * 0.05 + "px";
  // });

  return (
    <>
      <Head>
        <title>Quang Dương Blog</title>
        <meta name="description" content="Quang Dương" />
        <link rel="icon" href="/image/icon_title.jpg" />
      </Head>
      <body>
        <header>
          <a href="#" className="logo">
            Quang Dương Blog
          </a>
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
          </ul>
        </header>
        <section>
          <img src="/image/stars.png" id="stars" />
          <img src="/image/moon.png" id="moon" />
          <img src="/image/mountains_behind.png" id="mountains_behind" />
          <h2 id="text">Quang Dương</h2>
          <a href="#" id="btn">
            Explore
          </a>
          <img src="/image/mountains_front.png" id="mountains_front" />
        </section>
        <div className="sec" id="sec">
          <h2>Parallax Scrolling Effects</h2>
          <p>Lorem</p>
        </div>
      </body>
    </>
  );
}
