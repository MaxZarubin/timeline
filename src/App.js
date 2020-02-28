import React from 'react'
import { Switch } from 'react-router-dom'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import './App.css'
import { template } from '@babel/core'

const cards = [
  {
    id: 1,
    color: '#ffc700'
  },
  {
    id: 2,
    color: '#64b441'
  },
  {
    id: 3,
    color: 'rgb(30, 136, 229)'
  },
  {
    id: 4,
    color: '#5b2c0c'
  },
  {
    id: 5,
    color: '#bbb'
  },
  {
    id: 6,
    color: '#000'
  },
  {
    id: 7,
    color: '#fff'
  },
  {
    id: 8,
    color: '#ff0000'
  }
]

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Timeline lineColor={'#e3e3e3'}>
            {cards.map((item, key) => (
              <TimelineItem
                key={item.id}
                dateText="Пн 10 Фев 2020 20:50:51"
                style={{ color: item.color === '#fff' ? '#333' : item.color }} // кружок
                dateInnerStyle={{
                  background: item.color, // дата фон
                  color: item.color === '#fff' ? '#333' : '#fff' // дата буквы
                }}
                bodyContainerStyle={{
                  background: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0.5rem 0.5rem 2rem 0 #575756'
                }}
              >
                <h3
                  className="card-title"
                  // style={{ color: item.color === '#fff' ? '#333' : item.color }} // цвет заголовка
                >
                  Изменение статуса OZON
                </h3>
                {/* <h4>Subtitle</h4> */}
                <p className="card-text">
                  Статус OZON: отправление зарегестрировано, место: ЧЕРНАЯ_ГРЯЗЬ_РФЦ
                </p>
              </TimelineItem>
            ))}
          </Timeline>
        </Switch>
      </header>
    </div>
  )
}
