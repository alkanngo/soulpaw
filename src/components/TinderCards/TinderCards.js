import React, {useState} from "react"
import TinderCard from "react-tinder-card"
import "./TinderCards.css"

function TinderCards() {
  const [dogs, setDogs] = useState([
    {
      name: "Betty",
      url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=975&q=80"
    },
    {
      name: "Spike",
      url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
    },
  ])

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete)
    // setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen")
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {dogs.map((dog) => (
          <TinderCard
            className="swipe"
            key={dog.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, dog.name)}
            onCardLeftScreen={() => outOfFrame(dog.name)}
          >
            <div 
              style={{ backgroundImage: `url(${dog.url})`}}
              className="card"
            >
              <h3>{dog.name}</h3>
            </div>

          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
