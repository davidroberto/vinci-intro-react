import { useEffect, useState } from "react";

const Articles = () => {
  const [meals, setMeals] = useState([]);

  // useEffect permet de faire des appels à des API
  // au premier chargement du composant ("quand la page s'affiche")
  useEffect(() => {
    // on créé une fonction pour faire l'appel vers l'api et récupérer les données
    const fetchArticles = async () => {
      const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const mealsJson = await meals.json();

      // on enregistre dans le state (la "base de données") de notre composant
      // les données récupérées sur l'api
      setMeals(mealsJson.meals);
    };

    // on execute la fonction
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Recettes</h1>
      <div>
        {/* 
			on fait une boucle sur les recettes de cuisines 
			récupérés sur l'api et on affiche le nom et l'image
		*/}
        {meals.map((meal) => (
          <article>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Articles;
