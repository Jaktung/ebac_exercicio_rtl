import { render, screen } from "@testing-library/react"
import Post from ".."

describe("Testando o componente Post", () => {
  test("Deve renderizar corretamente", () => {
    render(
      <Post imageUrl="https://via.placeholder.com/200x200">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    )
    expect(
      screen.getByText("Olha só que legal minha miniatura do Batmóvel.")
    ).toBeInTheDocument()
  })
})
