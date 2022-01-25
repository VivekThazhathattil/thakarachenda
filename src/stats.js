import * as React from "react"

const Stats = ({stats}) =>{
  return (
    <div className="stats-container">
      {
        stats.map( (stat, id) =>{
          const amountString = (100 - stat.amount) + "%"
          return (
            <section key={id} className="stat">
              <div className="stat-name">{stat.name}</div>
              <div className="stat-bar" style={{background: stat.color, marginRight: amountString}} amount={stat.amount} />
            </section>
          );
        })
      }
    </div>
  );
}

export default Stats