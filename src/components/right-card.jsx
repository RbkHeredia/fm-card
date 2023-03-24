import '../styles/right-card.css';
import Section from './section';
import data from '../data'

export default function RightCard(){

  return(
    <div className="right-card">
      <h3>Summary</h3>
      {data.map((option, index)=>(
        <Section 
          category={option.category}
          icon={option.icon}
          score={option.score}
          key={index}
          color={option.color}
          alt={option.alt}
        />
      ))}
      <a href='https://www.linkedin.com/in/rebeca-heredia-60599823a/'>
        <button>Continue</button>
      </a>
    </div>
  )
}