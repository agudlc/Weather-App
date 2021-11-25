import React from 'react';
import Card from './Card';
import styles from "./Cards.module.css"

export default function Cards({cities, onRemove}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={styles.Cards}>
    {cities.map((city) => <Card  
          key={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => onRemove(city.id)} />
          )}
  </div>
};

