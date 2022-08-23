import Profile from "../assets/profile.jpeg";

function Home() {
  return (
    <div className="place-items-center border border-stone-200 ml-2 mr-2 rounded-lg sm:mt-4">
      <div className="sm:pl-48 sm:pr-48 p-8">
        <p className="sm:text-3xl text-2xl sm:text-center font-medium mb-8 sm:pt-0 pt-2">
          Software Engineer / Web Developer
        </p>
        <p className="mb-4 sm:text-center">
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
        <div className="sm:grid sm:grid-cols-4">
          <div></div>
          <div>
            <img className="rounded-xl" src={Profile} />
          </div>
          <div className="sm: pt-8 sm:pl-8">
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
          </div>
          <div></div>
        </div>
        <p className="mt-8 sm:-ml-16 sm:text-center">
          <a
            className="p-2 rounded border border-black"
            href="https://github.com/ydocsgnillats/React-Portfolio"
            target="_blank"
          >
            Click Here
          </a>{" "}
          to see this site on github!
        </p>
      </div>
    </div>
  );
}

export default Home;
