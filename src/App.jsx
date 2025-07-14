import { useState } from 'react'

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [status, setStatus] = useState("");
  const [type, setType] = useState("male");
  const [color, setColor] = useState('text-white');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(weight === "" || isNaN(weight) || weight <= 0){
      setStatus("Please give valid weight")
    }
    else if(height === "" || isNaN(height) || height <= 0){
      setStatus("Please give valid height")
    }
    else{
      let bmi = ((weight / (height * height)) * 10000).toFixed(2);
      
      if(type === "male"){
        if(bmi < 18.5){
          setStatus("Bro you are underweight")
          setColor('text-yellow-500')
        }
        else if(bmi >= 18.5 && bmi < 26){
          setStatus("Bro you are a healthy person")
          setColor('text-green-500')
        }
        else if(bmi >= 26 && bmi < 31){
          setStatus("Bro you have overweight, you must need to run.")
          setColor('text-orange-500')
        }
        else{
          setStatus("Bro you have Obesity, you must work on your body for long life.")
          setColor('text-red-500')
        }
      } else {
        if(bmi < 18.5){
          setStatus("Mam you are underweight")
          setColor('text-yellow-500')
        }
        else if(bmi >= 18.5 && bmi < 25){
          setStatus("Mam you are a healthy person")
          setColor('text-green-500')
        }
        else if(bmi >= 25 && bmi < 30){
          setStatus("Mam you have overweight, you must need to run.")
          setColor('text-orange-400')
        }
        else{
          setStatus("Mam you have Obesity, you must workout for long life.")
          setColor('text-red-600')
        }
      }
    }

  }

  const handleTypeChange = () => {
    setStatus("");
    setHeight(0);
    setWeight(0);
    setType((prev) => {
      if(prev === "male"){
        setType("female")
      } else {
        setType("male")
      }
    })

  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-700'>
      <div className='w-200 h-120 flex flex-col items-center justify-center gap-5 bg-gray-600 border border-white shadow-lg hover:shadow-gray-200/80 rounded-2xl transition-shadow duration-600 ease-in-out'>
        {/* This is Header section */}
        <div className='flex justify-center items-center w-40 h-10'>
          <p className='font-medium text-2xl text-white'>
            BMI <span className='font-medium text-2xl text-indigo-500'>Calculator</span>
          </p>
        </div>

        {/* This is Input & button section */}
        <div className='w-180 h-70 flex p-5 gap-4'>
          {/* This is for men picture */}
          <div onClick={handleTypeChange} className='w-80 h-70 cursor-pointer hover:scale-110 duration-500'>
            <img src="boy.png" alt="Boy" />
          </div>
          <div className='w-100 h-70 flex flex-col items-center justify-center gap-5'>
            {/* This is for Weight input */}
            <div className=' flex flex-col gap-2'>
              <label className='font-medium text-lg text-white' htmlFor="weightId">Weight (in cm.)</label>
              <input 
                className='w-70 h-8 bg-gray-300 rounded-xl border outline-none p-4 cursor-pointer'
                type="number" 
                placeholder='weight in kg'
                id="weightId" 
                value={ weight }
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            {/* This is for Height input */}
            <div className=' flex flex-col gap-2'>
              <label className='font-medium text-lg text-white' htmlFor="heightId">Height (in kg.)</label>
              <input 
                className='w-70 h-8 bg-gray-300 rounded-xl border outline-none p-4 cursor-pointer'
                type="number" 
                placeholder='height in cm'
                id="heightId" 
                value={ height }
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            
            {/* This is for Button section */}
            <div className='flex justify-center items-center'>
              <button onClick={ handleSubmit } className='w-60 h-9 bg-indigo-500 hover:bg-indigo-400 font-medium text-white mt-5 cursor-pointer rounded-2xl shadow-md hover:shadow-indigo-600' type="button">
                Submit
              </button>
            </div>
          </div>
      
          {/* This is for Women picture */}
          <div className='w-80 h-70 cursor-pointer hover:scale-110 duration-500'>
            <img onClick={handleTypeChange} src="girl.png" alt="Girl" />
          </div>
        </div>

        {/* This is for Output section */}
        {status && <div className='w-80 h-20 flex flex-col justify-center items-center'>
          <p className={`font-medium text-sm ${color} text-center`}>{status}</p>
        </div>}
      </div>
    </div>
  )
}

export default App
