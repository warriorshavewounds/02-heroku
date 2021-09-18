import React, { useEffect } from "react"

function Home() {
  useEffect(() => {
    document.title = "CAG's Amazing App"
  }, [])

  return (
    <div>
      <h2 className="display-4">Welcome: CAG homepage!</h2>
      <img className="photo" src="https://github.com/ThePrin/online-news/blob/master/img/yaleeres.png?raw=true" />
      <p className="lead">A seed Grows With No Sound. Creation is Quiet.</p>
      <p>So work hard in silence, let your success be your noise.
        
      </p>
      <button><a class="cag" href = "https://www.facebook.com/groups/262853181879782/">click here to join</a></button>
    </div>
  )
}

export default Home
