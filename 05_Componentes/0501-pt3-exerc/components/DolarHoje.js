export default {
  name: "DolarHoje",
  data() {
    return {
      valorDolar: 0,
    };
  },
  template: `<p>Valor dolar/real: {{valorDolar}}<p>`,
  methods: {
    puxarDolar() {
      fetch("https://api.origamid.dev/exchange/usd")
        .then((res) => res.json())
        .then((res) => {
          this.valorDolar = res.rates.BRL;
        });
    },
  },
  created() {
    this.puxarDolar();
  },
};
