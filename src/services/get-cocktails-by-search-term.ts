export const getCocktailsBySearchTerm = async (query: string) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Search error:', error);
  }
};
