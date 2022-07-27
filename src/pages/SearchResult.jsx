import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import styled from "styled-components";

function SearchResult() {
  const params = useParams();
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=b7ebd3cfd0c440ae827713a2c3859d5a&query=${name}`
    );
    const data = await api.json();
    setSearchedRecipes(data.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        const { id, image, title } = item;
        return (
          <Card key={id}>
            <Link to={`/recipe/${id}`}>
              <img src={image} alt={title} />
              <h4>{title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchResult;
