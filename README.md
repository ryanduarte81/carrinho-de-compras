# 🛒 Simulador de Carrinho de Compras

Um projeto interativo de carrinho de compras desenvolvido com HTML, CSS e JavaScript puro. Este simulador oferece uma experiência completa de e-commerce com interface moderna e responsiva.

## ✨ Funcionalidades

- **Catálogo de Produtos**: Exibe produtos com imagens, descrições e preços
- **Carrinho Interativo**: Adicione, remova e ajuste quantidades de produtos
- **Cálculo Automático**: Total atualizado em tempo real
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- **Animações Suaves**: Transições e efeitos visuais modernos
- **Notificações**: Feedback visual para ações do usuário
- **Simulação de Checkout**: Processo de finalização de compra

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em seu navegador
2. **Navegue pelos produtos** disponíveis na página
3. **Clique em "Adicionar ao Carrinho"** nos produtos desejados
4. **Clique no ícone do carrinho** no canto superior direito para abrir o carrinho
5. **Ajuste quantidades** usando os botões + e -
6. **Remova itens** clicando no botão de lixeira
7. **Finalize a compra** clicando em "Finalizar Compra"

## 🎨 Características do Design

- **Gradiente Moderno**: Fundo com gradiente roxo/azul
- **Cards Elevados**: Produtos em cards com sombras e hover effects
- **Sidebar Deslizante**: Carrinho que desliza da direita
- **Ícones Font Awesome**: Ícones profissionais para produtos
- **Tipografia Clara**: Fonte Segoe UI para melhor legibilidade
- **Cores Harmoniosas**: Paleta de cores consistente

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Grid adaptativo
- **Mobile**: Carrinho em tela cheia, layout otimizado

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Lógica interativa
- **Font Awesome**: Ícones profissionais
- **CSS Animations**: Transições suaves

## 📁 Estrutura do Projeto

```
carrinho-de-compras/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Documentação
```

## 🎯 Produtos Incluídos

O simulador inclui 8 produtos de tecnologia:

1. Smartphone Galaxy S23 - R$ 2.999,99
2. Notebook Dell Inspiron - R$ 4.599,99
3. Fones de Ouvido Sony - R$ 899,99
4. Smart TV LG 55" - R$ 3.499,99
5. Câmera Canon EOS - R$ 5.999,99
6. Tablet iPad Air - R$ 3.999,99
7. Console PlayStation 5 - R$ 4.499,99
8. Smartwatch Apple Watch - R$ 2.999,99

## 🔧 Personalização

Para adicionar novos produtos, edite o array `products` no arquivo `script.js`:

```javascript
const products = [
    {
        id: 9,
        name: "Novo Produto",
        price: 999.99,
        icon: "fas fa-icon-name",
        description: "Descrição do novo produto"
    }
    // ... outros produtos
];
```

## 🎨 Personalização de Cores

As cores principais podem ser alteradas no arquivo `styles.css`:

- **Cor primária**: `#667eea` (azul)
- **Cor secundária**: `#764ba2` (roxo)
- **Cor de sucesso**: `#28a745` (verde)
- **Cor de erro**: `#dc3545` (vermelho)

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e comerciais.

---

**Desenvolvido com ❤️ para demonstrar funcionalidades de e-commerce** 