import { screen } from "@testing-library/react";
import Card from "../components/Card";
import pokemon from "../test/testPokemon.json";
import { RenderComponent } from "../test/renderComponent";

describe("Card", () => {
  it("should render pokemon id", () => {
    RenderComponent(<Card key={pokemon.name} pokemon={pokemon} />)
    expect(screen.getByText('# 132' )).toBeInTheDocument();
  });
  
  it("should render pokemon name", () => {
    RenderComponent(<Card key={pokemon.name} pokemon={pokemon} />)
    expect(screen.getByRole('heading', {name: /ditto/i})).toBeInTheDocument();
  });

  it("should render pokemon type", () => {
    RenderComponent(<Card key={pokemon.name} pokemon={pokemon} />)
    expect(screen.getByText('normal' )).toBeInTheDocument();
  });
});
