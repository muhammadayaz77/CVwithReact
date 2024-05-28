import theImg from './ab.jpg'
function App() {
  return (
  
      <div className="container">
        <div className="con">
          <img src={theImg} width={200} />
        <h1>Muhammad Ayaz</h1>
        <h3>FullStack Web Developer</h3>
        </div>
        <div className="content">
          <h2>About Me</h2>
          <hr/>
          <p>I'm a frontend web developer dedicated to creating captivating digital experiences. Proficient in HTML, CSS,
and JavaScript, I'm passionate about transforming creative concepts into functional, visually stunning
websites. With a keen eye for detail and a commitment to excellence, I thrive in dynamic environments,
delivering projects that exceed expectations.tion of yourself here</p>
            <h2>Work Experience</h2>
            <hr/>
            <p>• I completed a one-month internship focusing on frontend development, specializing in crafting
landing pages and enhancing my web design skills. Highlights include creating my portfolio website
and contributing to various landing page projects. This experience has deepened my expertise and
passion for frontend development.</p>
        <h2>Digital Skill</h2>
        <hr/>
        <p>HTML | CSS | JavaScript | React.js | GSAP | Git | Github</p>
        </div>
      </div>
    
  );
}

export default App;
