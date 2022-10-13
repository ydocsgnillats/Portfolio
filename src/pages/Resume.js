function Resume() {
  return (
    <div className="grid place-items-center md:pb-12 md:pt-12 pb-24 border bg-primary dark:bg-darkPrimary rounded-md border-primary m-2">
      <p className="font-medium md:border-t border-border1 dark:border-darkBorder1 m-4 text-center -border-x-2 md:pt-8 pt-4 md:pt-2 md:p-0 pl-10 pr-10 md:pr-0 md:pl-0">
        Developer with competency in multiple programming languages and
        frameworks aligned with current industry standards
      </p>
      <p className="text-center font-medium md:p-0 pl-10 pr-10 md:pr-0 md:pl-0">
        Top proficiencies: JavaScript (React, NodeJS), C#, Python
      </p>
      <p className="text-center grid border-b border-border1 dark:border-darkBorder1 p-2 w-4/5 place-items-center">
        Currently employed as a Software Developer at AJC
      </p>
      <div className="grid w-4/5 md:grid-cols-2 md:gap-2">
        <div className="">
          <div className="grid place-items-center border-b w-4/5 border-border1 p-4 md:ml-0 ml-[10%]">
            <p>info@codystallings.dev</p>
            <p>www.linkedin.com/in/codystallings</p>
            <p>www.github.com/ydocsgnillats</p>
            <p>Georgia, USA</p>
          </div>
          <div className="mt-4 w-4/5 ml-[10%]">
            <h1 className="font-medium text-xl text-left">
              Skills and Experience
            </h1>
            <li>Languages: JavaScript, Python, C#</li>
            <li>
              Frameworks: NodeJS, React, ASP.NET, React-Native, Tailwind,
              RESTful API
            </li>
            <li>Tools: Jira, Jenkins, Kubernetes</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>Full stack web development</li>
            <li>Agile software development</li>
            <li>Mobile app development</li>
            <li>Data Analytics for business applications</li>
          </div>
          <div className="md:mt-4 mt-12 w-4/5 ml-[10%]">
            <h1 className="font-medium text-xl text-left">Education</h1>
            <p className="font-medium">B.S. - Computer Science</p>
            <p>University of North Georgia</p>
            <p>Graduated May 2019</p>
          </div>
          <div className="mt-4 w-4/5 ml-[10%]">
            <h1 className="font-medium text-md text-left">Relevant Courses</h1>
            <li>Object Oriented Programming</li>
            <li>Data Structures and Analysis</li>
            <li>Management of Information Security</li>
            <li>Software Engineering</li>
            <h1 className="font-medium mt-2 text-left">
              Additional Conentration
            </h1>
            <p className="text-left">Minor in Russian Language</p>
          </div>
          <a
            href={require("../assets/CodyResumeMAY2022.pdf")}
            download="CodyStallings-Resume"
          >
            <button className="border bg-secondary text-primary dark:bg-button dark:text-secondary rounded-md border-border1 dark:border-darkBorder1 p-4 font-bold md:text-xl hover:animate-none animate-bounce md:bottom-0 m-8 md:m-0 relative mt-12 md:mt-24">
              Download Resume
            </button>
          </a>
        </div>
        <div>
          <div className="list-none">
            <h1 className="text-2xl font-medium grid md:place-items-center text-center mt-4">
              Professional History
            </h1>
            <p className="font-medium mt-2">
              <span className="text-text2 dark:text-darkText2">
                Software Engineer,
              </span>{" "}
              Symtrain – Alpharetta
            </p>
            <p className="font-medium">October 2021 – Current</p>
            <li>
              {" "}
              - Building new features for React/NodeJS application based on
              product team specifications
            </li>
            <li>
              {" "}
              - Worked within an agile scrum team, contributing to continuous
              improvement and deployment
            </li>
            <li>
              {" "}
              - Independently managing QA team to ensure product reliability
            </li>
            <p className="font-medium mt-2">
              <span className="text-text2 dark:text-darkText2">
                Data Support Specialist,
              </span>{" "}
              App Vault – Atlanta
            </p>
            <p className="font-medium">February 2021 – October 2021</p>
            <li>
              {" "}
              - Supporting and debugging data feeds and building new features
              for C#/ASP.net application
            </li>
            <li> - Ensuring SOC2 compliance</li>
            <p className="font-medium mt-2">
              <span className="text-text2 dark:text-darkText2">
                AV/IT Support Professional II,
              </span>{" "}
              Georgia Tech – Atlanta
            </p>
            <p className="font-medium mt-2">
              <span className="text-text2 dark:text-darkText2">
                AV/IT Support Professional I
              </span>
              , Georgia Tech – Atlanta
            </p>
            <p>November 2017 – February 2021</p>
            <li> - Promotion received November 2019</li>
            <li> - Providing support of all audio/visual and IT functions</li>
          </div>
          <div>
            <h1 className="text-2xl font-medium grid place-items-center text-center mt-4">
              Portfolio and Projects
            </h1>
            <li>
              <span className="font-medium text-md">Teens Tutor Teens</span> – A
              501(c)(3) organization and Google Grants recipient offering
              tutoring services and volunteering opportunities for young adults
              – iOS App Developer (React Native)
            </li>
            <li>
              <span className="font-medium text-md">CCME.io</span> – Web app
              that simplifies payments of crypto currency, allowing users to
              create profiles and shareable links that list payment information
              for any crypto currency they accept (MERN stack)
            </li>
          </div>
          <div>
            <h1 className="text-2xl font-medium grid place-items-center text-center mt-4">
              Post Graduate Professional Certifications
            </h1>
            <li>
              <span className="font-medium text-md">Python Institute</span> –
              PCAP Certification –{" "}
              <span className="font-medium text-md">2020</span>
            </li>
            <li>
              <span className="font-medium text-md">
                Georgia Institute of Technology
              </span>{" "}
              – Data Analytics in Business –{" "}
              <span className="font-medium text-md">2020</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
