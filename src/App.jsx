
import './App.css'

function App() {


  return (
    <div className='app'>
      <section className='hero'>
        <h1>Social Media <span>10x</span> <i>Faster </i>with AI</h1>
        <img src="src/assets/images/illustration-five-stars.webp" alt="Five stars icon" />
        <p>Over 4,000 5-star reviews</p>
      </section>
      <section className='accounts'>
        <img src="src/assets/images/illustration-multiple-platforms.webp" alt="Instagram and X icon" />
        <h2>Manage multiple accounts and platforms.</h2>
      </section>
      <section className='schedule'>
        <h2>Maintain a consistent posting schedule.</h2>
        <img src="src/assets/images/illustration-consistent-schedule.webp" alt="Random month calendar" />
      </section>
      <section className='timing'>
        <h2>Schedule to social media.</h2>
        <img src="src/assets/images/illustration-schedule-posts.webp" alt="Best times for posting chart" />
        <p>Optimize post timings to publish content at the perfect time for your audience.</p>
      </section>
      <section className='growth'>
        <img src="src/assets/images/illustration-grow-followers.webp" alt="Follower growth chart" />
        <h2>Grow followers with non-stop content.</h2>
      </section>
      <section className='audience'>
        <h2> {'>'}56%</h2>
        <p>faster audience growth</p>
        <img src="src/assets/images/illustration-audience-growth.webp" alt="Audience avatar icons" />
      </section>
      <section className='create'>
        <h2>Create and schedule content <i>quicker.</i></h2>
        <img src="src/assets/images/illustration-create-post.webp" alt="Create post button icon" />
      </section>
      <section className='ai'>
        <h2>Write your content using AI.</h2>
        <img src="src/assets/images/illustration-ai-content.webp" alt="AI chat illustration" />
      </section>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="https://github.com/Josefina-Mayans">✨ Josefina Mayans ✨</a>.
      </footer>
    </div>
  )
}

export default App
