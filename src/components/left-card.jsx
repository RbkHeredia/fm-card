import '../styles/left-card.css';

export default function LeftCard(){
  return(
    <div className="card">
      <h3>Your Result</h3>
      <div className='circle'>
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h2>Great</h2>
      <h5>You scored higher than 65% of the people who have taken these tests.</h5>
    </div>
  )
}