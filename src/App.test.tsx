import { render, screen } from "@testing-library/react"
import App from "./App"

describe("Testando o App", () => {
  test("Deve renderizar corretamente", () => {
    render(<App />)
    expect(screen.getByTestId("botao-comentario")).toBeInTheDocument()
  })
})
