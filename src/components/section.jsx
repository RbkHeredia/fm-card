
export default function Section({ color, score, icon, category }){
  return(
    <section className={color}>
      <img src={icon} />
      <h3>{category}</h3>
      <h3>{score}</h3>
      <h3 className="opacity">/ 100</h3>
    </section>
  )
}