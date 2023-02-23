import { useState } from 'react'
import './App.css'
import { Row, Divider, Button, Card, Col } from "antd"
import foods from './foods.json'
import AddFoodForm from './components/AddFoodForm'



function App() {
  const [foodsState, setFoodsState] = useState(foods)
  const [showForm, setShowForm] = useState(false)
  
// delete button
function handleDelete(name) {
  setFoodsState(foodsState.filter(food => food.name !== name ))
}


  // toggle function
  const toggleForm = () => {
    setShowForm (!showForm)
  }

  

  return (
    <div className="App">

    <Button type='button' onClick={toggleForm}> Hide Form / Add New Food </Button>
{
  showForm === true && (
    
    <AddFoodForm 
      foodsState = {foodsState} setFoodsState = {setFoodsState}
    />
  )
}

    <Divider>Food List</Divider>
   
   <Row style={{ width: "100%", justifyContent: "center" }}>




{foodsState.map((food) => {
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: "500", margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories} </p>
        <p>Servings: {food.servings} </p>
        <p>
          <b>Total Calories: </b>  {food.calories * food.servings} kcal
        </p>
        <Button type="primary" onClick={() => handleDelete(food.name)}> Delete </Button>
      </Card>
    </Col>
  )
}
)
}

   </Row>
    </div>


  )
}

export default App
