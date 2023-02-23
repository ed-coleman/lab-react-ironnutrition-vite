import { useState } from "react";
import { Divider, Input } from "antd";

import React from 'react'

export default function AddFoodForm({ foodsState, setFoodsState }){


    const [formData, setFormData] = useState({
    
    name:'', 
    image:'', 
    calories:0, 
    servings:0})

    const handleChange = (name, value)=>{
            setFormData(prevState => ({...prevState, [name]:value}))
    }
// stop page refreshing on click
    const handleSubmit = (event) => {
        event.preventDefault()
        setFoodsState([...foodsState, formData])


    }

    return(
        <form>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={formData.name} type="text" onChange={(event) => handleChange('name', event.target.value)} />

            <label>Image</label>
            {/* render antd <Input /> type="text" here */}
             <Input type = 'text' value = {formData.image} onChange={(event) => handleChange('image', event.target.value)}/>

            <label>Calories</label>
            {/* render antd <Input /> type="number" here */}
            <Input type = 'text' value = {formData.calories} onChange={(event) => handleChange('calories', event.target.value)}/>
            <label>Servings</label>
            {/* render antd <Input /> type="number" here */}
            <Input type = 'text' value = {formData.servings} onChange={(event) => handleChange('servings', event.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Create</button>
    </form>
    )
}

