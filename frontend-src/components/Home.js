import React, { useEffect } from "react"

function Home() {
  useEffect(() => {
    document.title = "CAG's Amazing App"
  }, [])

  return (
    <div>
      <h2 className="display-4">Welcome: CAG homepage!</h2>
      <img className="photo" src="https://scontent.fbrs3-1.fna.fbcdn.net/v/t1.6435-9/p180x540/139690492_4098379693522790_2571515485904458310_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8631f5&_nc_ohc=zbuiyBojDwUAX_06-uB&_nc_ht=scontent.fbrs3-1.fna&oh=89d147e645b908aca778480839ac5631&oe=6159C168" />
      <p className="lead">A seed Grows With No Sound. Creation is Quiet.</p>
      <p>So work hard in silence, let your success be your noise.
        
      </p>
    </div>
  )
}

export default Home
