## Resumo das Diferenças entre Stack & Queue

| **Características** | **Stack (Pilha)**             | **Queue (Fila)**              |
| ------------------- | ----------------------------- | ----------------------------- |
| **Princípio**       | LIFO (Last In, First Out)     | FIFO (First In, First Out)    |
| **Inserção**        | `push()` no topo              | `enqueue()` no final          |
| **Remoção**         | `pop()` do topo               | `dequeue()` do início         |
| **Uso comum**       | Funções recursivas, undo/redo | Filas de atendimento, buffers |
| **Exemplo físico**  | Pilha de pratos               | Fila de pessoas               |

# Diversas Formas de Calcular Fibonacci

Existem várias maneiras de calcular a sequência de Fibonacci em JavaScript. Aqui está uma explicação das diferentes abordagens, junto com suas vantagens, desvantagens e eficiência.

## 1. Método Iterativo

```javascript
function fibonacciIterativo(n) {
  const fibonacci = [0, 1] // Inicializa os dois primeiros valores

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
  }

  return fibonacci[n]
}

console.log(fibonacciIterativo(10)) // Saída: 55
```

### Explicação

Este método usa um loop para calcular a sequência de Fibonacci de forma direta. Ele inicia com os dois primeiros números e vai somando os dois últimos números da sequência até atingir o valor desejado.

### Vantagens

- Simples de entender e implementar.
- Tempo de execução O(n), ou seja, o tempo necessário cresce linearmente conforme o valor de `n`.
- Armazena todos os números Fibonacci até `n` se necessário.

### Desvantagens

- Utiliza um espaço extra proporcional a `n` para armazenar os valores da sequência.

### Quando Usar

Para cálculos de Fibonacci em pequenos a grandes intervalos, quando a simplicidade e a eficiência em tempo são importantes.

---

## 2. Método Recursivo Simples

```javascript
function fibonacciRecursivo(n) {
  if (n <= 1) {
    return n
  }
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2)
}

console.log(fibonacciRecursivo(10)) // Saída: 55
```

### Explicação

Esta abordagem segue diretamente a definição matemática da sequência de Fibonacci, onde cada número é a soma dos dois anteriores. Isso é feito recursivamente.

### Vantagens

- Código muito simples e direto.
- Ideal para entender o conceito de recursão.

### Desvantagens

- Muito ineficiente para valores grandes de `n`, com tempo de execução O(2^n).
- Recalcula os mesmos valores várias vezes, resultando em uma explosão de chamadas recursivas.

### Quando Usar

Principalmente para fins educacionais ou para valores pequenos de `n`, pois não é eficiente para cálculos maiores.

---

## 3. Método Recursivo com Memoização

```javascript
function fibonacciMemoizado(n, memo = {}) {
  if (n in memo) {
    return memo[n]
  }
  if (n <= 1) {
    return n
  }
  memo[n] = fibonacciMemoizado(n - 1, memo) + fibonacciMemoizado(n - 2, memo)
  return memo[n]
}

console.log(fibonacciMemoizado(10)) // Saída: 55
```

### Explicação

Memoização é uma técnica que armazena os resultados das chamadas anteriores, evitando a duplicação de cálculos. Com isso, a recursão se torna muito mais eficiente.

### Vantagens

- Tempo de execução reduzido para O(n), melhorando drasticamente a performance em relação à recursão simples.
- Combina a simplicidade da recursão com uma maior eficiência.

### Desvantagens

- Ainda requer espaço extra proporcional a `n` para armazenar os resultados calculados previamente.

### Quando Usar

Quando você precisa da simplicidade da recursão, mas com eficiência melhorada. Ideal para problemas grandes que exigem cálculo recursivo.

---

## 4. Fórmula de Binet

```javascript
function fibonacciBinet(n) {
  const sqrt5 = Math.sqrt(5)
  const phi = (1 + sqrt5) / 2
  const psi = (1 - sqrt5) / 2

  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5)
}

console.log(fibonacciBinet(10)) // Saída: 55
```

### Explicação

A fórmula de Binet usa álgebra para calcular diretamente o número de Fibonacci na posição `n` sem precisar iterar ou usar recursão. A fórmula envolve números irracionais, como a razão áurea (phi).

### Vantagens

- Tempo de execução O(1), pois calcula o valor diretamente usando uma fórmula matemática.
- Muito eficiente para valores pequenos e médios de `n`.

### Desvantagens

- Pode ser impreciso para números grandes devido às limitações de precisão de ponto flutuante.
- Não é tão simples de entender como as outras abordagens.

### Quando Usar

Quando você quer um cálculo rápido de Fibonacci, especialmente para valores não muito grandes, e sem necessidade de armazenar a sequência inteira.

---

## 5. Programação Dinâmica (Espaço Otimizado)

```javascript
function fibonacciDinamico(n) {
  if (n <= 1) return n

  let a = 0,
    b = 1,
    c

  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }

  return b
}

console.log(fibonacciDinamico(10)) // Saída: 55
```

### Explicação

A programação dinâmica armazena os resultados intermediários e reutiliza-os, mas, em vez de manter todos os valores da sequência, só armazena os dois últimos números. Isso reduz o uso de memória.

### Vantagens

- Tempo de execução O(n) com espaço O(1), o que significa que utiliza uma quantidade constante de memória, independentemente do valor de `n`.
- Extremamente eficiente tanto em termos de tempo quanto de espaço.

### Desvantagens

- Não armazena todos os valores da sequência, apenas os dois últimos.

### Quando Usar

Quando você quer uma solução eficiente tanto em termos de tempo quanto de espaço, especialmente para valores grandes de `n`. Essa é geralmente a abordagem mais eficiente para a maioria dos casos.

---

## Comparação de Eficiência

| Método                                  | Tempo de Execução | Espaço Utilizado |
| --------------------------------------- | ----------------- | ---------------- |
| Iterativo                               | O(n)              | O(n)             |
| Recursivo Simples                       | O(2^n)            | O(n)             |
| Recursivo com Memoização                | O(n)              | O(n)             |
| Fórmula de Binet                        | O(1)              | O(1)             |
| Programação Dinâmica (Espaço Otimizado) | O(n)              | O(1)             |

## Conclusão

A abordagem mais eficiente para calcular a sequência de Fibonacci, especialmente para valores grandes de `n`, é a **Programação Dinâmica com Espaço Otimizado**. Ela oferece um excelente equilíbrio entre tempo de execução e uso de memória, com complexidade O(n) para tempo e O(1) para espaço.

Outras abordagens, como a recursão simples, são interessantes para fins educacionais, mas devem ser evitadas em contextos de produção devido à sua ineficiência. Para cálculos rápidos sem precisar de armazenamento, a Fórmula de Binet pode ser uma boa alternativa, embora tenha limitações de precisão em grandes valores.
