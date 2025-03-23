import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/scotia-images.png'
import IMG2 from '../../assets/BMO-image.jpg'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Professional Experience</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Bank of Scotia - Assistant System Engineer @ TCS</h3>
            <h4>11/2021 - 11/2022</h4>
            <small className='text-light'>ReactJs | Redux | BitBucket | JIRA | Agile</small>
            <div className="portfolio__item-cta">
              <small className='text-light'>
                • It's an Enterprise project made while working for TCS for Scotiabank for onboarding their customers.< br/>
                • Responsible for development of screen and validation logics.< br/>
                • Responsible for testing UI and micro services using Jest.< br/>
                • Integrated APIs with front-end using fetch.< br/>
                • Used Redux for state management of a page.< br/>
                • Covered end-to-end unit testing with jest and enzyme framework making above 80% code coverage.< br/>
              </small>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Bank of Montreal - System Engineer @ TCS</h3>
            <h4>12/2022 - PRESENT</h4>
            <small className='text-light'>NodeJS | AWS | GitHub | Elastic Search | DynamoDb</small>
            <div className="portfolio__item-cta">
              <small className='text-light'>
                • Worked on migration of on premise services to AWS cloud using NodeJs for one of largest Canadian Bank.< br/>
                • Migrated and optimized multiple APIs REST/SOAP APIs integrating AWS services like Lambda, API Gateway, DynamoDB, NLB, CloudFormation, IAM and monitoring tools ensuring end-to-end 
                  functionality, security, scalability and made successful production deployment, collaborating with the cloud engineering team on call 
                  support 24X7 and resolving production issues.< br/>
                • Worked closely with the backend team to connect REST APIs to on 
                  premise backend services for smooth data flow.< br/>
                • Collaborated with the QA team to validate and complete end-to-end API functionality.< br/>
                • Created clear requirements documents (SFS page) to explain service details and flow.< br/>
                • Followed a performance checklist to meet and exceed industry benchmarks for code readiness, efficiency and reliability.< br/>
              </small> 
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects