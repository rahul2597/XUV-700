import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import Cardetails from './components/Cardetails'
import VariantsAndMileage from './components/VariantsAndMileage'
import ExpertAdvice from './components/ExpertAdvice'
import ProsAndCons from './components/ProsAndCons'
import ReviewsSection from './components/ReviewsSection'
import RelatedVideos from './RelatedVideos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black shadow-xl'>
        <Header />
        <Section />
        <Cardetails />
        <VariantsAndMileage />
        <ExpertAdvice />
        <ProsAndCons />
        <ReviewsSection />
        <RelatedVideos />
      </div>

    </>
  )
}

export default App
