const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    carrinhoAtivo: false,
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
    compararEstoque() {
      const items = this.carrinho.filter(({ id }) => id === this.produto.id);
      this.produto.estoque -= items.length;
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
    cliqueForaCarrinho({ target, currentTarget }) {
      if (target === currentTarget) {
        this.carrinhoAtivo = false;
      }
    },
    router() {
      const hash = document.location.hash;
      if (hash) this.fetchProduto(hash.replace("#", ""));
    },
  },
  watch: {
    produto() {
      document.title = this.produto.nome || "Techno";
      const hash = this.produto.id || "";
      history.pushState(null, null, `#${hash}`);
      if (this.produto) {
        this.compararEstoque();
      }
    },
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
  },
  created() {
    this.fetchProdutos();
    this.checkLocalStorage();
    this.router();
  },
});
