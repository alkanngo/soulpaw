import React, {useState, useEffect} from "react"
import TinderCard from "react-tinder-card"
import "./TinderCards.css"
import axios from "./../../axios.js"

function TinderCards() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    //Proper pattern for async inside useEffect
    async function fetchData() {
      const req = await axios.get("/cards")
      setDogs(req.data)
    }

    fetchData()
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete)
    // setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen")
  }

  console.log(dogs)

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
              style={{ backgroundImage: `url(${dog.imgUrl})`}}
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
