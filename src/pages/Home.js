import Profile from "../assets/profile.jpeg";

function Home() {
  return (
    <div className="place-items-center border border-stone-200 ml-2 mr-2 rounded-lg lg:mt-2 lg:mb-2">
      <div className="lg:pl-48 lg:pr-48 p-6">
        <p className="lg:text-3xl text-2xl lg:text-center font-medium mb-4 lg:pt-0 pt-2">
          Software Engineer / Web Developer
        </p>
        <p className="mb-6 lg:text-center">
          I graduated in 2019 with a B.S. in Computer Science with a focus on
          web development. I have experience doing front-end work building
          websites with HTML/CSS/Javascript, React, Tailwind, and Sass. I also
          have experience implementing back-ends and REST APIs with nodeJS and
          Flask, using MySQL or MongoDB, and deploying either directly to my own
          websites or using Heroku. Additionally, I've created mobile apps with
          React-native, and discord bots and stock analytics tools with Python.
          I'm always looking to develop my skills further and expand my
          knowledge with new challenges. There are a few of my latest projects
          on the projects section of this site, and you can also view and
          download my resume.
        </p>
        <div className="lg:grid lg:grid-cols-4">
          <div></div>
          <div>
            <img className="rounded-xl" src={Profile} />
          </div>
          <div className="lg:pl-8">
            <li className="mt-4">
              Software Engineer with competency in multiple programming
              languages and frameworks aligned with current industry standards
            </li>
            <li className="mt-4">
              Top proficiencies: JavaScript (React, NodeJS), Python, C#
            </li>
            <li className="mt-4">
              Currently employed as a Software Engineer at AJC
            </li>
            <p className="mt-10 lg:-ml-8 lg:text-center">
              <a
                className="p-2 rounded border border-black"
                href="https://github.com/ydocsgnillats/React-Portfolio"
                target="_blank"
              >
                See this site on github
              </a>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
