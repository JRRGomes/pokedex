import { screen } from "@testing-library/react";
import Card from "../components/Card";
import { renderComponent } from "../test/renderComponent";

const POKEMON = {
  "id": 132,
  "name": "ditto",
  "types": [
    {
      "type": {
        "name": "normal",
      }
    }
  ],
  "sprites": {
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
      }
    }
  },
}

describe("Card", () => {
  it("should render pokemon id", () => {
    renderComponent(<Card pokemon={POKEMON} />)
    expect(screen.getByText('# 132')).toBeInTheDocument();
  });
  
  it("should render pokemon name", () => {
    renderComponent(<Card pokemon={POKEMON} />)
    expect(screen.getByRole('heading', {name: /ditto/i})).toBeInTheDocument();
  });

  it("should render pokemon type", () => {
    renderComponent(<Card pokemon={POKEMON} />)
    expect(screen.getByText('normal')).toBeInTheDocument();
  });

  it("should render pokemon image", () => {
    renderComponent(<Card pokemon={POKEMON} />)
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg');
  });
});
