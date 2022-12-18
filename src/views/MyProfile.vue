<template>
  <div class="my-profile">
    <div class="my-profile__header">
      <div class="my-profile__header-content">
        <div class="my-profile__photo"></div>
        <div class="my-profile__description">
          <h1 class="my-profile__name">Jessica Richardson</h1>
          <div class="my-profile__info">
            <span class="place">City: Lost-Angeles</span>
            <span class="study">Study: Oxford</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="sass" scoped>
.my-profile
  width: 100%
  background: #FAFBFF
.my-profile__header
  border-radius: 0rem 0rem 3rem 3rem
  background: url('https://4kwallpapers.com/images/wallpapers/lake-mountains-rocks-twilight-sunset-purple-sky-pink-sky-1920x1080-3775.jpg') center / cover
  display: flex
  flex-direction: column
  justify-content: flex-end
  min-height: 40rem
.my-profile__header-content
  box-shadow: 0 .1rem .1rem .3rem #e7e7e7
  border-radius: 2rem
  width: 100%
  min-height: 10rem
  background-color: #fff
  position: relative
.my-profile__photo
  background: #fff url(@/assets/pics/profile-photo.png) center / contain no-repeat
  width: 15rem
  height: 15rem
  border-radius: 50%
  padding: .1rem
  border: .4rem solid #e7e7e7
  z-index: 10
  position: absolute
  top: -75%
  left: 4%
.my-profile__description
  margin-left: 18%
  padding: 1.5rem 2rem
.my-profile__info
  margin-top: .5rem
  font-size: 1.6rem
  & span
    margin-right: .5rem
</style>
