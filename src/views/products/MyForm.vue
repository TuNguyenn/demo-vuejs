<template>
  <div class="product-info">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="display-5">Product Infomation</h3>
      <router-link to="/product">Back</router-link>
    </div>

    <div class="contianer">
      <form @submit.prevent="save()">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Product name</label
          >
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              v-model="product.name"
              v-bind:class="{ 'is-invalid': errors.name }"
              @blur="validate()"
            />
            <div class="invalid-feedback text-left" v-if="errors.name">
              {{ errors.name }}
            </div>
          </div>
        </div>
        <div class="form-group row">
          <lable for="inputPassword" class="col-sm-2 col-form-label"
            >Product price</lable
          >
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              v-model="product.price"
              v-bind:class="{ 'is-invalid': errors.price }"
              @blur="validate()"
            />
            <div class="invalid-feedback text-left" v-if="errors.price">
              {{ errors.price }}
            </div>
          </div>
        </div>
        <div class="form-group row">
          <lable for="inputPassword" class="col-sm-2 col-form-label"
            >Product description</lable
          >
          <div class="col-sm-9">
            <textarea
              class="form-control"
              rows="3"
              v-model="product.description"
              v-bind:class="{ 'is-invalid': errors.description }"
              @blur="validate()"
            ></textarea>
            <div class="invalid-feedback text-left" v-if="errors.description">
              {{ errors.description }}
            </div>
          </div>
        </div>
        <div class="form-group row">
          <lable for="inputPassword" class="col-sm-2 col-form-label"></lable>
          <div class="d-flex">
            <div class="col-sm-4 text-left">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
            <div class="col-sm-4 text-left">
              <button type="reset" class="btn btn-danger" @click="cancel()">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  data() {
    return {
      errors: {
        name: "",
        price: "",
        description: "",
      },
      product: {
        name: "",
        price: "",
        description: "",
      },
    };
  },
  created() {
    const productId = this.$route.params.id;
    if (productId) this.getProduct(productId);
  },
  methods: {
    validate() {
      let isValid = true;
      this.errors = {
        name: "",
        price: "",
        description: "",
      };

      if (!this.product.name) {
        this.errors.name = "Please input product name";
        isValid = false;
      }
      if (!this.product.price) {
        this.errors.price = "Please input price";
        isValid = false;
      } else if (!this.isNumber(this.product.price)) {
        this.errors.price = "Price must be number";
        isValid = false;
      }
      if (!this.product.description) {
        this.errors.description = "Please input description";
        isValid = false;
      }

      return isValid;
    },
    isNumber(value) {
      return /^\d*$/.test(value);
    },
    save() {
      if (this.validate()) {
        if (this.product.id) {
          this.$request
            .put(
              `http://localhost:8000/api/products/${this.product.id}`,
              this.product
            )
            .then((res) => {
              if (res.data.success) {
                this.$router.push({ name: "product.list" });
                return;
              }
              alert("Something went wrong!!!");
            });
          return;
        }
        this.$request
          .post("http://localhost:8000/api/products", this.product)
          .then((res) => {
            if (res.data.success) {
              this.$router.push({ name: "product.list" });
              return;
            }
            alert("Something went wrong!!!");
          });
      }
    },
    getProduct(productId) {
      this.$request
        .get(`http://localhost:8000/api/products/${productId}`)
        .then((res) => {
          this.product = res.data;
        });
    },
    cancel() {
        this.$router.push({ name: "product.list" });
    }
  },
};
</script>
