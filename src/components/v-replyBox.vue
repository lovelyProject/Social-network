<template>
  <div class="v-reply-box">
    <div class="v-reply-box__logo">
      <img src="@/assets/pics/profile-photo.png" />
    </div>
    <form action="" class="v-reply-box__form">
      <textarea
        name=""
        id=""
        cols="30"
        rows="1"
        class="v-reply-box__text-area"
      ></textarea>
    </form>
    <div class="v-reply-box__send-svg">
      <img src="@/assets/icons/send.svg" alt="" />
    </div>
  </div>
</template>

<style lang="sass">
.v-reply-box
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: 1rem
  &__send-svg
    width: 2.5rem
    height: 2.5rem
    cursor: pointer
    &:hover
      opacity: 0.7
  &__logo
    width: 4rem
    height: 4rem
    border-radius: 50%
    & img
      width: 100%
  &__form
    flex-basis: 85%
    & textarea
      width: 100%
      outline: none
      border-radius: 1rem
      padding: 0 1rem
.v-reply-box__text-area
  resize: none
</style>
