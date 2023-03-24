import '../styles/right-card.css';

export default function Section({ color, score, icon, category, alt }){
  return(
    <section className={color}>
      <img src={icon} alt={alt}/>
      <p>{category}</p>
      <p className="opacity">{score}</p>
      <p className="opacity">/ 100</p>
    </section>
  )
}