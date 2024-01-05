import logo from '../assets/clg-logo.png';
import '../assets/clg-logo.png';

const undertaking_pdf='http://localhost:5173/dummy.pdf'

function Header() {
  // const downloadPDF = (url) => {
  //   fetch(url)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const blobURL = window.URL.createObjectURL(blob);
  //       const fileName = url.split('/').pop();
  //       const aTag = document.createElement('a');
  //       aTag.href = blobURL;
  //       aTag.setAttribute('download', fileName);
  //       document.body.appendChild(aTag);
  //       aTag.click();
  //       document.body.removeChild(aTag);  // Remove the created anchor tag after the click
  //     })
  //     .catch((error) => {
  //       console.error('Error downloading PDF:', error);
  //     });
   const openPDF = (url) => {
    window.open(url, '_blank');
  };
    return (
      <header>
        <img src={logo} alt='logo' className="image"></img>
        <nav>
        <section>
          <ul className="menu-list">
            <li><a className='menu-items' href="https://www.spit.ac.in/">Home</a></li>
        
            <li className="dropdown">
            <li className='menu-items'>Academics</li>
              <div className="dropdown-content">
                <a className='menu-items' href="https://www.spit.ac.in/academics/graduate/">UG Programme</a>
                <a className='menu-items' href="https://www.spit.ac.in/academics/post-graduate/">PG Programme</a>
                <a className='menu-items' href="https://www.spit.ac.in/academics/ph-d-programme/">Ph.D.Programme</a>
              </div>
            </li>
            <li><a className='menu-items' href="#">Faculty</a></li>
            
            <li><a className='menu-items' onClick={() => openPDF(undertaking_pdf)}>Undertaking</a></li>
          </ul>
          </section>
        </nav>
      </header>
    );
};
  export default Header;  