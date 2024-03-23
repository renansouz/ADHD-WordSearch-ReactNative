import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./style";

class WordSearchGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridLetras: this.gerarGridAleatorio(),
      listaPalavras: ["CACHORRO", "GATO", "LEAO", "GIRAFA", "ELEFANTE",],
      palavrasEncontradas: [],
      certos: [],
      palavrasTentadas: [],
      c: "",
      crip: [],
      itemColors: Array.from({ length: 204 }, () => Array(204).fill("white")),
    };
  }

  gerarGridAleatorio = () => {
    const gridSizeX = 17; // Tamanho do grid horizontal
    const gridSizeY = 12; // Tamanho do grid vertical
    const grid = [];

    for (let i = 0; i < gridSizeX; i++) {
      const row = [];
      for (let j = 0; j < gridSizeY; j++) {
        row.push("");
      }
      grid.push(row);
    }

    return grid;
  };

  preencherGridComLetrasAleatorias = () => {
    const { gridLetras } = this.state;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letras possíveis

    for (let i = 0; i < gridLetras.length; i++) {
      for (let j = 0; j < gridLetras[i].length; j++) {
        if (gridLetras[i][j] === "") {
          // Preencher com letra aleatória
          const randomIndex = Math.floor(Math.random() * alphabet.length);
          gridLetras[i][j] = alphabet[randomIndex];
        }
      }
    }

    this.setState({ gridLetras });
  };

  adicionarPalavraAoGrid = (palavra) => {
    const { gridLetras } = this.state;
    const gridSize = gridLetras.length;
    const directions = ["horizontal", "vertical"];
    const selectedDirection =
      directions[Math.floor(Math.random() * directions.length)];

    if (selectedDirection === "horizontal") {
      let x, y;
      do {
        x = Math.floor(Math.random() * (gridSize - palavra.length + 1));
        y = Math.floor(Math.random() * gridSize);
      } while (!this.ehPosicaoValida(gridLetras, palavra, x, y, "horizontal"));

      for (let i = 0; i < palavra.length; i++) {
        gridLetras[y][x + i] = palavra[i];
        this.state.certos.push([y, x + i]);
        this.state.c += y + "" + (x + i);
      }

      var indicador = this.state.crip.length;
      this.state.crip[indicador + 1] = this.state.c;
      this.state.c = "";
    } else {
      let x, y;
      do {
        x = Math.floor(Math.random() * gridSize);
        y = Math.floor(Math.random() * (gridSize - palavra.length + 1));
      } while (!this.ehPosicaoValida(gridLetras, palavra, x, y, "vertical"));

      for (let i = 0; i < palavra.length; i++) {
        gridLetras[y + i][x] = palavra[i];
        this.state.certos.push([y + i, x]);
        this.state.c += y + i + "" + x;
      }

      var indicador = this.state.crip.length;
      this.state.crip[indicador + 1] = this.state.c;
      this.state.c = "";
    }

    console.log(this.state.crip);

    this.setState({ gridLetras });
  };

  ehPosicaoValida = (grid, palavra, x, y, direcao) => {
    const gridSize = grid.length;

    if (direcao === "horizontal") {
      for (let i = 0; i < palavra.length; i++) {
        if (grid[y][x + i] !== "" && grid[y][x + i] !== palavra[i]) {
          return false;
        }
      }
    } else {
      for (let i = 0; i < palavra.length; i++) {
        if (grid[y + i][x] !== "" && grid[y + i][x] !== palavra[i]) {
          return false;
        }
      }
    }

    return true;
  };

  // Método para verificar se a célula clicada é adjacente à última célula clicada
  ehCelulaAdjacente = (lastRow, lastColumn, currentRow, currentColumn) => {
    const direcoesPermitidas = [
      [-1, 0], // para cima
      [1, 0], // para baixo
      [0, -1], // para a esquerda
      [0, 1], // para a direita
    ];

    for (const [rowOffset, columnOffset] of direcoesPermitidas) {
      const newRow = lastRow + rowOffset;
      const newColumn = lastColumn + columnOffset;

      if (newRow === currentRow && newColumn === currentColumn) {
        return true;
      }
    }

    return false;
  };

  componentDidMount() {
    this.state.listaPalavras.forEach((palavra) => {
      this.adicionarPalavraAoGrid(palavra);
    });

    this.preencherGridComLetrasAleatorias();
  }

  handleCellClick = (y, x) => {
    const { palavrasTentadas, crip, itemColors } = this.state;

    // Verificar se a célula já foi clicada ou se a palavra já foi encontrada
    if (
      palavrasTentadas.some((coord) => coord[0] === y && coord[1] === x) ||
      itemColors[y][x] === "green"
    ) {
      return; // Não faça nada se a célula já foi clicada ou a palavra já foi encontrada
    }

    // Verificar se a célula clicada é válida com base na última célula clicada
    const ultimaCoordenada = palavrasTentadas[palavrasTentadas.length - 1];
    if (
      ultimaCoordenada &&
      !this.ehCelulaAdjacente(ultimaCoordenada[0], ultimaCoordenada[1], y, x)
    ) {
      return; // Não faça nada se a célula não for adjacente à última célula clicada
    }

    palavrasTentadas.push([y, x]);

    let string = "";
    for (const [row, cell] of palavrasTentadas) {
      string += row + "" + cell;
    }

    // Alterar a cor do item para laranja
    const newColors = this.state.itemColors.map((row) => [...row]);
    newColors[y][x] = "orange";

    // Atualizar o estado com as novas cores
    this.setState({ itemColors: newColors });

    let palavraEncontrada = false;

    for (var cont = 0; cont < 10; cont++) {
      if (crip[cont] === string) {
        console.log("Acertou");

        // Limpar palavrasTentadas e string
        this.setState({ palavrasTentadas: [] });
        string = "";

        // Alterar a cor da célula para verde
        const updatedColors = this.state.itemColors.map((row) => [...row]);
        for (const [cy, cx] of palavrasTentadas) {
          updatedColors[cy][cx] = "green";
        }
        this.setState({ itemColors: updatedColors });

        palavraEncontrada = true;
        break; // Saia do loop se a palavra for encontrada
      }
    }

    // Limpar todas as cores se a palavra não for encontrada
    if (!palavraEncontrada && palavrasTentadas.length > 7) {
      const resetColors = Array.from({ length: 204 }, () =>
        Array(204).fill("white")
      );
      this.setState({ itemColors: resetColors, palavrasTentadas: [] });
    }
  };

  render() {
    const { gridLetras, palavrasEncontradas, itemColors } = this.state;
    return (
      <View style={styles.main}>
        <View style={styles.grid}>
          {gridLetras.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, columnIndex) => (
                <TouchableOpacity
                  key={columnIndex}
                  style={[
                    styles.cell,
                    palavrasEncontradas.includes(cell) && styles.foundCell,
                    {  borderWidth: 0, backgroundColor: itemColors[rowIndex][columnIndex], borderRadius: 20  },
                  ]}
                  onPress={() => this.handleCellClick(rowIndex, columnIndex)}
                >
                  <Text>{cell}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  }
}



export default WordSearchGame;