<template>
  <Page>
    <ActionBar title="" />
    <Tabs>
      <TabStrip>
        <TabStripItem>
          <Label text="Home"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="Registrasi"></Label>
        </TabStripItem>
      </TabStrip>
      <TabContentItem>
        <FlexboxLayout
          flexDirection="column"
          justifyContent="center"
          class="full-height page"
        >
          <StackLayout class="nt-form">
            <StackLayout class="nt-input">
              <Label>Nama</Label>
              <TextField v-model="nama" hint="" class="form-group" />
            </StackLayout>
            <StackLayout class="nt-input">
              <Label>Umur</Label>
              <TextField v-model="umur" hint="" class="form-input" />
            </StackLayout>
            <StackLayout class="nt-input">
              <Label>Domisili</Label>
              <TextField v-model="domisili" hint="" class="form-input" />
            </StackLayout>
            <FlexBoxLayout flexDirection="row" class="form-group">
              <Button @tap="register" class="-primary" text="Register"></Button>
            </FlexBoxLayout>
          </StackLayout>
        </FlexboxLayout>
      </TabContentItem>
      <TabContentItem>
        <GridLayout>
          <Label text="Settings Page" class="h2 text-center"> </Label>
        </GridLayout>
      </TabContentItem>
    </Tabs>
  </Page>
</template>

<script >
import PopUp from "./PopUp";
export default {
  data() {
    return {
      nama: "",
      umur: "",
      domisili: "",
    };
  },
  methods: {
    register() {
      this.totalQueue++;
      this.$showModal(PopUp);
      this.$store.dispatch("doRegister", {
        nama: this.nama,
        umur: this.umur,
        domisili: this.domisili,
      });
      this.nama = "";
      this.umur = "";
      this.domisili = "";
    },
  },
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
.form-group {
  align-items: center;
  align-content: flex-start;
  text-align: center;
}
.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
.page {
  align-items: center;
  flex-direction: column;
}
.full-height {
  height: 100%;
}
.form-input {
  width: 70%;
}
</style>