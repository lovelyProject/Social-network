<template>
  <div class="form">
    <form action="" class="sign-in-form" @submit.prevent="checkForm">
      <h2 class="form__title">Sign in</h2>
      <div class="form__input-block">
        <p class="form__input-title">Email</p>
        <input
          class="form__input"
          type="email"
          name=""
          id=""
          placeholder="rosemarie@domain.com"
          v-model="form.mail"
          :class="{
            'has-error': v$.form.mail.required.$invalid && v$.form.$dirty,
          }"
        />
        <p
          class="form-error"
          v-if="v$.form.mail.required.$invalid && v$.form.$dirty"
        >
          Обязательное поле
        </p>
      </div>
      <div class="form__input-block">
        <p class="form__input-title">Password</p>
        <input
          type="password"
          class="form__input"
          name=""
          id=""
          placeholder="********"
          v-model="form.password"
          :class="{
            'has-error': v$.form.password.required.$invalid && v$.form.$dirty,
          }"
        />
        <p
          class="form-error"
          v-if="v$.form.password.required.$invalid && v$.form.$dirty"
        >
          Обязательное поле
        </p>
      </div>
      <div class="form__content toggle-block">
        <p>Don't have an account yet?</p>
        <router-link to="/signUp">Sign up</router-link>
      </div>
      <div class="form__content btn-submit-block">
        <input type="submit" value="Sign in" class="btn-submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        password: "",
        mail: "",
        isSucces: false,
      },
    };
  },
  validations() {
    return {
      form: {
        password: { required },
        mail: { required, email },
      },
    };
  },
  methods: {
    checkForm() {
      this.v$.form.$touch();
      this.v$.form.$error ? "" : (this.form.isSucces = true);
    },
  },
};
</script>
<style scoped lang="sass">
.form
  background-color: white
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  padding: 13.5rem 5.6rem
  box-shadow: 0 0 .7rem 0 #C4C4C4
  border-radius: 1.5rem
  width: 62rem
.form__title
  text-align: center
  font-size: 2.4rem
  font-weight: 500
  margin-bottom: 8.7rem
  line-height: 3.6rem
.form__content
  text-align: center
  font-size: 1.4rem
.form__input
  width: 100%
  border-radius: 2rem
  border: none
  outline: none
  background-color: #FAFBFF
  box-shadow: 0 0 0.1rem 0.1rem #777
  padding: 1.1rem 2rem .6rem
.form__input-title
  font-weight: 500
  font-size: 1.4rem
  line-height: 2.1rem
  margin-bottom: .4rem
  margin-left: 2rem
.form__input-block
  margin-bottom: .4rem
.form__content
  & p
    color: #ACACAC
    & a
      color: #4623E9
      font-weight: 500
      line-height: 2.1rem
      &:hover
        opacity: 0.7
.toggle-block
  margin-top: 1rem
  margin-bottom: 5.2rem
.btn-submit
  color: white
  cursor: pointer
  padding: 1rem 11.9rem .6rem
  background: rgba(89, 50, 234, 1)
  border: none
  border-radius: 2rem
  font-size: 1.4rem
  line-height: 2.1rem
  font-weight: 500
  &:hover
    background: rgba(89, 50, 234, .6)
    transform: translateY(-0.2rem)
  &:active
    transform: translateY(0)
.form-error
  font-size: 1.3rem
  margin-top: 0.7rem
  color: red
  margin-left: 2rem
.has-error
  box-shadow: 0 0 .1rem .1rem red
</style>
