function Resume() {
  return (
    <div className="h-screen grid place-items-center">
      <p className="font-medium lg:border-t border-slate-800 p-2 -border-x-2">
        Developer with competency in multiple programming languages and
        frameworks aligned with current industry standards
      </p>
      <p className="font-medium lg:p-0 p-2">
        Top proficiencies: JavaScript (React, NodeJS), C#, Python
      </p>
      <p className="grid border-b border-slate-800 p-2 w-4/5 place-items-center">
        Currently employed as a Software Developer at AJC
      </p>
      <div className="grid w-4/5 lg:grid-cols-2 lg:gap-2">
        <div className="">
          <div className="grid place-items-center border-b w-4/5 border-slate-800 p-4">
            <p>info@codystallings.dev</p>
            <p>www.linkedin.com/in/codystallings</p>
            <p>www.github.com/ydocsgnillats</p>
            <p>Georgia, USA</p>
          </div>
          <div className="mt-4 w-4/5">
            <h1 className="font-medium text-xl">Skills and Experience</h1>
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
          <div className="lg:mt-4 mt-12 w-4/5">
            <h1 className="font-medium text-xl">Education</h1>
            <p className="font-medium">B.S. - Computer Science</p>
            <p>University of North Georgia</p>
            <p>Graduated May 2019</p>
          </div>
          <div className="mt-4 w-4/5">
            <h1 className="font-medium text-md">Relevant Courses</h1>
            <li>Object Oriented Programming</li>
            <li>Data Structures and Analysis</li>
            <li>Management of Information Security</li>
            <li>Software Engineering</li>
            <h1 className="font-medium mt-2">Additional Conentration:</h1>
            <p>Minor in Russian Language</p>
          </div>
        </div>
        <div>
          <div className="list-none">
            <h1 className="text-2xl font-medium grid lg:place-items-center mt-4">
              Professional History
            </h1>
            <p className="font-medium mt-2">
              <span className="text-slate-600">Software Engineer,</span>{" "}
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
              <span className="text-slate-600">Data Support Specialist,</span>{" "}
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
              <span className="text-slate-600">
                AV/IT Support Professional II,
              </span>{" "}
              Georgia Tech – Atlanta
            </p>
            <p className="font-medium mt-2">
              <span className="text-slate-600">
                AV/IT Support Professional I
              </span>
              , Georgia Tech – Atlanta
            </p>
            <p>November 2017 – February 2021</p>
            <li> - Promotion received November 2019</li>
            <li> - Providing support of all audio/visual and IT functions</li>
          </div>
          <div>
            <h1 className="text-2xl font-medium grid place-items-center mt-4">
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
            <h1 className="text-2xl font-medium grid place-items-center mt-4">
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
      <a
        href={require("../assets/CodyResumeMAY2022.pdf")}
        download="CodyStallings-Resume"
      >
        <button className="border rounded-lg border-black p-2 animate-bounce lg:-mt-12 lg:-ml-80 mt-12 mb-4">
          Download Resume
        </button>
      </a>
    </div>
  );
}

export default Resume;
