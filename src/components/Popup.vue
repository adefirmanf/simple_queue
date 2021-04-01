<template>
  <FlexboxLayout
    class="modal"
    flexDirection="column"
    justifyContent="center"
    backgroundColor="white"
  >
    <Label class="h2">Registrasi Berhasil</Label>
    <Label textWrap="true">
      <FormattedString>
        <Span :text="renderData"></Span>
      </FormattedString>
    </Label>
    <Button
      @tap="close"
      class="-primary"
      :text="`Nomor Urut : ${totalQueue}`"
    ></Button>
  </FlexboxLayout>
</template>

<script>
export default {
  data() {
    return {
      htmlString: "<h1>Hello</h1>",
      data: {
        nama: "",
        umur: "",
        domisili: "",
      },
      totalQueue: 0,
    };
  },
  created: async function () {
    const queue = await this.$store.getters.getTotalQueue;
    const data = await this.$store.getters.getData;
    const { nama, umur, domisili } = data[data.length - 1];

    this.data = {
      nama,
      umur,
      domisili,
    };
    this.totalQueue = queue;
  },
  computed: {
    renderData() {
      return `
Nama :  ${this.data.nama}
Umur : ${this.data.umur}
Domisili : ${this.data.domisili}
        `;
    },
  },
  methods: {
    close() {
      this.$modal.close();
    },
  },
};
</script>
<style scoped>
.modal {
  padding: 20;
  border: 1px solid black;
}
.no-margin {
  vertical-align: middle;
  background-color: red;
  height: auto;
  padding: 0;
}
</style>