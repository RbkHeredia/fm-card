import '../styles/right-card.css';

export default function Section({ color, score, icon, category, alt }){
  return(
    <section className={color}>
      <img src={icon} alt={alt}/>
      <h4>{category}</h4>
      <p className="opacity"><b>{score}</b></p>
      <p className="opacity">/ 100</p>
    </section>
  )
}