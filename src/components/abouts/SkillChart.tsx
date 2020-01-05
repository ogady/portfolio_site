import React, { useState, useEffect } from 'react'
import { Radar } from 'react-chartjs-2'

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

  var types: string[] = []
  var levels: number[] = []
  var height:number = 1
  var width:number = 1

  skills.forEach(function(value) {
    types.push(value.type)
    levels.push(value.level)
  })

  const chartData = {
    labels: types,
    datasets: [
      {
        label: 'Tech Skill',
        data: levels,
        backgroundColor: backgroundColor,
      },
    ],
  }
  const options = 
   {
      scale: {
        display: true,
        pointLabels: {
          fontSize: 15,
          fontStyle:'bold'
        },
        ticks: {
          display: true,
          fontSize: 12,
          min: 0,
          max: 100,
          beginAtZero: true,
        },
      },
      tooltips:{
        mode: 'label',
      }
  }

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className={collapsed ? 'collapsed' : ''}>
        <ul className="skills">
          <Radar data={chartData} options={options} height={height} width={width}/>
        </ul>
      </div>
    </section>
  )
}

export default SkillCharts
