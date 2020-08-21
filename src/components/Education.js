import React from 'react'

export default function Education() {
    return (
        <>
        <div className="container-fluid">
          <section>
            <main className="offset-md-2 my-3 px-3 pt-3" id="education">
              <h1 className="title">Education</h1>
              <div className="container py-4">
                <div className="d-flex justify-content-between">
                  <h3>CoderSchool</h3>
                  <p className="my-0" >
                    <strong>Catalina (June 2020 - Present) </strong>
                  </p>
                </div>
                <h4 className="description">Full-Stack Web Development</h4>
                <p className="my-0">- HTML, CSS, and JavaScript.</p>
                <p className="my-0">- Frontend engineering in React.</p>
                <p className="my-0">- Backend engineering in NodeJS.</p>
              </div>
              <div className="container py-4">
                <div className="d-flex justify-content-between">
                  <h3>Management Development Institute of Singapore</h3>
                  <p className="my-0" >
                    <strong>MDIS (November 2015 - November 2018) </strong>
                  </p>
                </div>
                <h4 className="description">Business and Marketing</h4>
                <p className="my-0">- Diploma In Business Management.</p>
                <p className="my-0">- Advanced Diploma In Business Management.</p>
                <p className="my-0">- Bachelor in Business and Marketing.</p>
              </div>
            </main>
          </section>
        </div>

      </>
    );
  }
