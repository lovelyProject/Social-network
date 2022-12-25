<template>
  <div class="form">
    <form action="" class="sign-in-form" @submit.prevent="checkForm">
      <h2 class="form__title">Sign up</h2>
      <div class="form__input-block">
        <p class="form__input-title">First name</p>
        <input
          class="form__input"
          type="text"
          name=""
          placeholder="Rosemarie"
          v-model="form.firstName"
        />
        <p
          class="form-error"
          v-if="v$.form.firstName.required.$invalid && v$.form.$dirty"
        >
          Обязательное поле
        </p>
      </div>
      <div class="form__input-block">
        <p class="form__input-title">Last name</p>
        <input
          class="form__input"
          type="text"
          name=""
          placeholder="Richardson"
          v-model="form.lastName"
        />
        <p
          class="form-error"
          v-if="v$.form.lastName.required.$invalid && v$.form.$dirty"
        >
          Обязательное поле
        </p>
      </div>
      <div class="form__input-block">
        <p class="form__input-title">Email</p>
        <input
          class="form__input"
          type="email"
          name=""
          placeholder="rosemarie@domain.com"
          v-model="form.mail"
        />
        <p
          class="form-error"
          v-if="v$.form.mail.required.$invalid && v$.form.$dirty"
        >
          Обязательное поле
        </p>
        <p
          class="form-error"
          v-if="v$.form.mail.email.$invalid && v$.form.$dirty"
        >
          Неверный формат почты
        </p>
      </div>
      <div class="form__input-block">
        <p class="form__input-title">Password</p>
        <input
          type="password"
          class="form__input"
          name=""
          placeholder="********"
          v-model="form.password"
        />
        <p
          class="form-error"
          v-if="v$.form.password.required.$invalid && v$.form.$dirty"
        >
          Обязательное поле
        </p>
        <p
          class="form-error"
          v-if="v$.form.password.minLength.$invalid && v$.form.$dirty"
        >
          Пароль должен быть длиннее 8 символов
        </p>
      </div>
      <div class="form__input-block">
        <p class="form__input-title">Confirm password</p>
        <input
          class="form__input"
          type="password"
          name=""
          placeholder="********"
          v-model="form.confirmPassword"
        />
        <p
          class="form-error"
          v-if="v$.form.confirmPassword.required.$invalid && v$.form.$dirty"
        >
          Обязательное поле
        </p>
        <p
          class="form-error"
          v-if="v$.form.confirmPassword.sameAs.$invalid && v$.form.$dirty"
        >
          Пароли не совпадают
        </p>
      </div>
      <div class="form__content toggle-block">
        <p>Already have an account?</p>
        <router-link :to="{ name: 'signIn' }" style="color: #4623e9"
          >Sign in</router-link
        >
      </div>
      <div class="form__content btn-submit-block">
        <button
          @submit.prevent="checkForm"
          type="submit"
          value="Sign up"
          class="btn-submit"
        >
          Sign up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, sameAs, minLength } from "@vuelidate/validators";
import { generateToken } from "@/helpers/getRandom";
import { actionTypes } from "@/store/modules/auth";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        mail: "",
        password: "",
        confirmPassword: "",
        isSucces: false,
      },
    };
  },
  validations() {
    return {
      form: {
        firstName: { required },
        lastName: { required },
        mail: { email, required },
        password: { required, minLength: minLength(8) },
        confirmPassword: { required, sameAs: sameAs(this.form.password) },
      },
    };
  },
  computed: {
    isSubmiting() {
      return this.$store.state.auth.isSubmiting;
    },
  },
  methods: {
    checkForm() {
      this.v$.form.$touch();
      this.v$.form.$error ? "" : (this.form.isSucces = true);
      //После правильного ввода данных, отправляется запрос
      if (this.form.isSucces) {
        this.$store
          .dispatch(actionTypes.register, {
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            mail: this.form.mail,
            password: this.form.password,
            role: "user",
            token: generateToken(),
          })
          .then(() => {
            this.$router.push({ name: "profile" });
          });
      }
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
  padding: 9.5rem 5.6rem 4rem
  box-shadow: 0 0 .7rem 0 #C4C4C4
  border-radius: 1.5rem
  width: 62rem
.form__title
  text-align: center
  font-size: 2.4rem
  font-weight: 500
  margin-bottom: 3.7rem
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
.has-error
  box-shadow: 0 0 .1rem .1rem red
.form-error
  font-size: 1.3rem
  margin-top: 0.7rem
  color: red
  margin-left: 2rem
</style>
