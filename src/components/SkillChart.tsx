import React, { useState, useEffect } from 'react'
import Chart from 'chart.js'

type Skill = {
  type: string
  level: number
}

type SkillChartProps = {
  backgroundColor: string
  skills: Skill[]
}

const SkillCharts: React.FC<SkillChartProps> = ({
  backgroundColor,
  skills,
}) => {
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCollapsed(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  var types: string[]= []
  var levels: number[]=[]
  skills.forEach(function(value) {
    types.push(value.type)
    levels.push(value.level)
    
  })

  var ctx: string = 'myChart';
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: types,
      datasets: [
        {
          label: 'Tech Skill',
          data: levels,
          backgroundColor:backgroundColor
        },
      ],
    },
    options:{
      scale: {
        display: true,
        pointLabels: {
          fontSize: 15,
        },
        ticks: {
          display: true,
          fontSize: 12,
          min: 0,
          max: 100,
          beginAtZero: true
        },
        
      }
    }
  })

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className={collapsed ? 'collapsed' : ''}>
        <ul className="skills">
          <canvas id={ctx} height="400" width="400"></canvas>
        </ul>
      </div>
    </section>
  )
}

export default SkillCharts
