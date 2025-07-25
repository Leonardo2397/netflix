import React from 'react';

const MyFooter = () => {
  return (
    <footer className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-start gap-4 p-4 bg-dark text-light text-opacity-50 fs-6">
      <div>
        {/* <p>
          <i className="fab fa-facebook-f border border-light text-light p-2 me-2"></i>
          <i className="fab fa-instagram border border-light text-light p-2 me-2"></i>
          <i className="fab fa-twitter border border-light text-light p-2 me-2"></i>
          <i className="fab fa-youtube border border-light text-light p-2"></i>
        </p> */}
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">Audio and Subtitles</a></li>
          <li><a href="#" className="text-light text-decoration-none">Media Center</a></li>
          <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
          <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
          <li>
            <a href="#" className="text-decoration-none">
              <button type="button" className="btn btn-dark border border-light mt-2">Service Code</button>
            </a>
          </li>
          <li className="mt-2 text-light">&copy; 1997-2019 Netflix, Inc. {'87238717831988769'}</li>
        </ul>
      </div>

      <div>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">Audio Description</a></li>
          <li><a href="#" className="text-light text-decoration-none">Investor Relations</a></li>
          <li><a href="#" className="text-light text-decoration-none">Legal Notices</a></li>
        </ul>
      </div>

      <div>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
          <li><a href="#" className="text-light text-decoration-none">Jobs</a></li>
          <li><a href="#" className="text-light text-decoration-none">Cookie Preferences</a></li>
        </ul>
      </div>

      <div>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">Gift Card</a></li>
          <li><a href="#" className="text-light text-decoration-none">Terms Of Use</a></li>
          <li><a href="#" className="text-light text-decoration-none">Corporate Information</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default MyFooter;
