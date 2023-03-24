import '../styles/left-card.css';

export default function LeftCard(){
  return(
    <div className="card">
      <h1>Your Result</h1>
      <div className='circle'>
        <h2>76</h2>
        <p>of 100</p>
      </div>
      <h3>Great</h3>
      <h4>You scored higher than 65% of the people who have taken these tests.</h4>
    </div>
  )
}