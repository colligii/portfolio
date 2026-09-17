import Projects from './components/projects'

function MainPage() {

  return (
    <>
      <div id="background"><div></div></div>
      <header className="flex bg-[rgba(0,0,0,0.9)] md:bg-inherit gap-2.5 flex-col md:flex-row fixed flex items-center justify-between header py-4 w-full z-20">
        <a href="#home" className="relative sm:w-fit flex flex-col md:w-48 h-10">
          <h1 className="text-lg font-bold">Giovanne Colli</h1>
          <span className="absolute mt-6 md:mt-5 text-sm">Backend Developer</span>
        </a>
        <nav className="flex gap-3 text-sm">
          <a href="#aboutme">About me</a>
          <a href="#projects">Projects</a>
          <a href="#expirence">Expirence</a>
          <a href="#contacts">Contacts</a>
        </nav>
      </header>
      <main id="aboutme" className="h-9/10 pt-12 md:pt-0 flex justify-center flex-col header">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold leading-snug text-wrap">Typescript Backend Developer</h1>
          <span className="md:w-lg">I build backend applications and integrations with Node.js, TypeScript, PostgreSQL, REST APIs, and GraphQL, with a focus on clean, reliable, and maintainable software.</span>

        </div>

      </main>
      <section id="projects" className="min-h-9/10 flex py-10 flex-col header">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold leading-snug text-wrap">Projects</h1>
          <Projects/>
        </div>
      </section>

      <section id="expirence" className="min-h-9/10 mt-28 flex py-10 flex-col header">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold leading-snug text-wrap">Expirence</h1>
          
          <ol className="relative left-1/2 -translate-x-1/2 -ml-4 max-w-[280px] md:max-w-[400px] border-s border-default">                  
              <ol className="relative border-s border-default">
              {/* Mindcloud */}
              <li className="mb-10 ms-6">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>

                <time className="text-sm font-normal leading-none text-body">
                  Apr 2026 – Present
                </time>

                <h3 className="text-lg font-semibold text-heading my-2">
                  Mindcloud
                </h3>

                <p className="text-sm font-medium text-body mb-3">
                  Integration Engineer (IPaaS)
                </p>

                <ul className="list-disc ps-5 space-y-1.5 text-sm font-normal text-body">
                  <li>
                    Maintained and developed 6 concurrent integrations across business
                    systems, designing scalable workflows within IPaaS platform and API
                    constraints.
                  </li>
                  <li>
                    Diagnosed and resolved a recurring structural limitation in a
                    third-party API integration, eliminating client-reported error tickets
                    for 3+ consecutive weeks following the fix.
                  </li>
                  <li>
                    Integrated REST and SOAP APIs across multiple business systems,
                    handling data mapping, transformation, validation, and synchronization.
                  </li>
                  <li>
                    Used SQL to validate and troubleshoot integrated data across systems.
                  </li>
                  <li>
                    Investigated logs, API responses, and workflow execution traces to
                    diagnose and resolve production issues.
                  </li>
                  <li>
                    Validated integrations across development, UAT, and production
                    environments prior to deployment.
                  </li>
                </ul>
              </li>

              {/* Freelance */}
              <li className="mb-10 ms-6">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>

                <time className="text-sm font-normal leading-none text-body">
                  Feb 2025 – Apr 2026
                </time>

                <h3 className="text-lg font-semibold text-heading my-2">
                  Freelance Work
                </h3>

                <p className="text-sm font-medium text-body mb-3">
                  Full Stack Developer (Next.js, Angular)
                </p>

                <ul className="list-disc ps-5 space-y-1.5 text-sm font-normal text-body">
                  <li>
                    Built a performance-optimized web application achieving a 100/100
                    PageSpeed Insights score.
                  </li>
                  <li>
                    Designed and implemented a PostgreSQL database schema for guest and
                    event data management.
                  </li>
                  <li>
                    Deployed and maintained production applications using Railway cloud
                    infrastructure.
                  </li>
                  <li>
                    Developed administrative dashboards with Angular and Fuse.
                  </li>
                  <li>
                    Implemented internationalization using Transloco for English and
                    Portuguese interfaces.
                  </li>
                  <li>
                    Integrated REST APIs and reactive data flows using RxJS.
                  </li>
                </ul>
              </li>

              {/* Loma */}
              <li className="mb-10 ms-6">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>

                <time className="text-sm font-normal leading-none text-body">
                  Aug 2022 – Feb 2025
                </time>

                <h3 className="text-lg font-semibold text-heading my-2">
                  Loma Proteção Veicular
                </h3>

                <p className="text-sm font-medium text-body mb-3">
                  Full Stack Developer (TypeScript, Angular, Node.js)
                </p>

                <ul className="list-disc ps-5 space-y-1.5 text-sm font-normal text-body">
                  <li>
                    Designed and implemented backend services in Node.js and TypeScript
                    supporting CRM operations and sales automation workflows.
                  </li>
                  <li>
                    Automated lead handling pipelines using scheduled background jobs.
                  </li>
                  <li>
                    Developed and maintained REST and GraphQL API endpoints.
                  </li>
                  <li>
                    Built a real-time sales ranking dashboard using WebSocket and short
                    polling.
                  </li>
                  <li>
                    Integrated Facebook Graph API and n8n for automated lead capture and
                    marketing workflows.
                  </li>
                  <li>
                    Implemented GitLab CI/CD pipelines using Docker for automated build,
                    testing, and deployment.
                  </li>
                </ul>
              </li>

              {/* MIMO */}
              <li className="ms-6">
                <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>

                <time className="text-sm font-normal leading-none text-body">
                  Sep 2021 – Aug 2022
                </time>

                <h3 className="text-lg font-semibold text-heading my-2">
                  Viação MIMO
                </h3>

                <p className="text-sm font-medium text-body mb-3">
                  IT Intern (JavaScript, Node.js)
                </p>

                <ul className="list-disc ps-5 space-y-1.5 text-sm font-normal text-body">
                  <li>
                    Built a JavaScript automation for trip-completion analysis, applying
                    business rules to classify operational data and automatically generate
                    reports, reducing analysis time by 40%.
                  </li>
                </ul>
              </li>
            </ol>
          </ol>
        </div>
      </section>



      <section id="contacts" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-heading">
            Contacts
          </h2>

          <p className="mt-3 text-body max-w-xl mx-auto">
            If you'd like to learn more about my experience or discuss a potential opportunity, feel free to reach out via email or LinkedIn.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:cgiovanne45@gmail.com"
            className="flex items-center justify-center gap-3 px-5 py-3 rounded-lg border border-default-medium bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium transition-colors"
          >
            <span className="font-medium text-heading">
              Mail
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/giovanne-colli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-3 rounded-lg border border-default-medium bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium transition-colors"
          >
            <span className="font-medium text-heading">
              LinkedIn
            </span>
          </a>
        </div>

        </div>
      </section>

    </>
  )
}

export default MainPage
