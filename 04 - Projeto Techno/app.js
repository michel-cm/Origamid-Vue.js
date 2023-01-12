const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  computed: {
    carrinhoTotal() {
      let total = 0;
      if (this.carrinho.length) {
        this.carrinho.forEach((item) => {
          total += item.preco;
        });
      }
      return total;
    },
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((r) => r.json())
        .then((r) => {
          this.produtos = r;
        });
    },
    fetchProduto(idProduto) {
      fetch(`./api/produtos/${idProduto}/dados.json`)
        .then((r) => r.json())
        .then((r) => {
          this.produto = r;
        });
    },
    abrirModal(idProduto) {
      this.fetchProduto(idProduto);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    adicionarProduto() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({
        id,
        nome,
        preco,
      });
    },
    removerProduto(index) {
      this.carrinho.splice(index, 1);
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) {
        this.produto = false;
      }
    },
  },
  created() {
    this.fetchProdutos();
  },
});
