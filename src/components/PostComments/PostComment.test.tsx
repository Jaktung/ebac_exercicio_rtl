import { fireEvent, render, screen } from "@testing-library/react"
import PostComment from "."

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />)
    expect(screen.getByText("Comentar")).toBeInTheDocument()
  })
  test("Deve adicionar dois comentários", () => {
    render(<PostComment />)

    fireEvent.change(screen.getByTestId("textarea-comentario"), {
      target: {
        value: "Comentário adicionado via testes",
      },
    })
    fireEvent.click(screen.getByTestId("botao-comentario"))

    fireEvent.change(screen.getByTestId("textarea-comentario"), {
      target: {
        value: "Segundo comentário adicionado via testes",
      },
    })
    fireEvent.click(screen.getByTestId("botao-comentario"))

    expect(screen.getAllByTestId("elemento-comentario")).toHaveLength(2)
  })
})
