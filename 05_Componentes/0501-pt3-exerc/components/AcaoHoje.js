import DolarHoje from "./DolarHoje.js";

export default {
  nome: "AcaoHoje",
  components: {
    DolarHoje,
  },
  data() {
    return {
      valorMercado: 0,
    };
  },
  template: `<div>
    <p>Valor da Apple: {{valorMercado}}</p>
    <dolar-hoje></dolar-hoje>
  </div>`,
  methods: {
    puxarAcao() {
      fetch("https://api.origamid.dev/stock/aapl/quote")
        .then((res) => res.json())
        .then((res) => {
          this.valorMercado = res.marketCap;
        });
    },
  },
  created() {
    this.puxarAcao();
  },
};
