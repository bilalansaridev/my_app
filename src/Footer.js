function Footer() {
  return (
      <footer className="footer mt-auto py-4 bg-dark text-light">
          <div className="container text-center">
              <p className="mb-1">
                  &copy; {new Date().getFullYear()} Pak Fiber. All rights reserved.
              </p>
              <div className="social-links">
                  <a href="#" className="text-light me-3">Facebook</a>
                  <a href="#" className="text-light me-3">Twitter</a>
                  <a href="#" className="text-light">LinkedIn</a>
              </div>
              <p className="mt-2">
                  <a href="#" className="text-light">Privacy Policy</a> | 
                  <a href="#" className="text-light"> Terms of Service</a>
              </p>
          </div>
      </footer>
  );
}

export default Footer;
