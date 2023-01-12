const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    mensagemAlerta: "",
    alertaAtivo: false,
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
      this.alerta(`${nome} adicionado ao carrinho`);
    },
    removerProduto(index) {
      this.carrinho.splice(index, 1);
    },
    checkLocalStorage() {
      if (window.localStorage.carrinho) {
        this.carrinho = JSON.parse(window.localStorage.carrinho);
      }
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) {
        this.produto = false;
      }
    },
  },
  watch: {
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
  },
  created() {
    this.fetchProdutos();
    this.checkLocalStorage();
  },
});