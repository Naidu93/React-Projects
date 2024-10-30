import React, { useState } from 'react'
import data from './components/data'
import List from './components/List';

const App = () => {
  const [people, setPeople] = useState(data)
  console.log(data);

  return (
    <main>
      <section className='container'>
        {
          people && people.length > 0 ?
            <>
              <h3>{people.length} birthdays today</h3>
              <List people={people} />
              <button onClick={() => setPeople([])}>clear all</button>
            </>
            : " No Birthday Today"
        }
      </section>
    </main>
  )
}

export default App