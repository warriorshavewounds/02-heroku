import React, { useEffect } from "react"

function Home() {
  useEffect(() => {
    document.title = "CAG's Amazing App"
  }, [])

  return (
    <div>
      <h2 className="display-4">Welcome: CAG homepage!</h2>
      <img className="photo" src='image\cag.jpg' />
      <p className="lead">A seed Grows With No Sound. Creation is Quiet.</p>
      <p>So work hard in silence, let your success be your noise.
        
      </p>
    </div>
  )
}

export default Home
