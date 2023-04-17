
<script>
      AFRAME.registerComponent("eth-price-ticker", {
        schema: {
          interval: { type: "number", default: 19000 }, // 1 minute interval (in milliseconds)
        },

        init: function () {
          this.updatePrice = this.updatePrice.bind(this);
          this.tick = AFRAME.utils.throttleTick(
            this.tick,
            this.data.interval,
            this
          );
          this.updatePrice();
        },

        updatePrice: async function () {
          try {
            const response = await fetch(
              "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
            );
            const data = await response.json();
            const ethPrice = data.ethereum.usd.toFixed(2);
            this.el.setAttribute("text", "value", `ETH Price: $${ethPrice}`);
          } catch (error) {
            console.error("Error fetching ETH price:", error);
          }
        },

        tick: function () {
          this.updatePrice();
        },
      });
    </script>
