function Home() {
  return (
    <div className="place-items-center ml-2 mr-2 md:pb-0 pb-4">
      <div className="md:pl-48 md:pr-48 p-6 md:p-12 rounded-md md:h-screen">
        <p className="md:text-4xl text-2xl md:text-center font-medium mb-12 md:pt-6 pt-2">
          Software Engineer / Web Developer
        </p>
        <p className="mb-6 md:text-center">
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
        <div className="md:ml-16 md:mt-16">
          <div className="md:pl-8">
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
            <p className="mt-24 md:-ml-36 md:text-center font-bold">
              <a
                className="p-2 md:p-6 rounded border border-border1 dark:border-darkBorder1 md:text-xl"
                href="https://github.com/ydocsgnillats/React-Portfolio"
                target="_blank"
              >
                See this site on github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
