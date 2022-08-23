function Home() {
  return (
    <div className="place-items-center border border-stone-200 m-2 rounded-lg">
      <div className="sm:pl-36 sm:pr-36 sm:p-24 p-8">
        <p className="sm:text-2xl text-xl sm:text-center font-medium mb-4 sm:pt-0 pt-2">
          Software Engineer / Web Developer
        </p>
        <p className="mb-6">
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
        <li className="m-2">
          Software Engineer with competency in multiple programming languages
          and frameworks aligned with current industry standards
        </li>
        <li className="m-2">
          Top proficiencies: JavaScript (React, NodeJS), Python, C#
        </li>
        <li className="m-2">
          Currently employed as a Software Engineer at AJC
        </li>
        <p className="mt-8">
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
