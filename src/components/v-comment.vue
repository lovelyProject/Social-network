<template>
  <div class="vpost-comments">
    <hr class="comment-line" />
    <div class="vpost-comment-container">
      <div class="vpost-comment">
        <div class="vpost-comment-logo">
          <img
            src="@/assets/pics/profile-photo.png"
            alt=""
            class="comment-logo"
          />
        </div>
        <div class="vpost-comment-content">
          <h3 class="vpost-comment-title">Jess</h3>
          <p class="vpost-comment-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            debitis. Suscipit nihil sit reiciendis tenetur quasi obcaecati quia
            quidem aperiam possimus magnam, sint, ipsam nostrum et soluta eaque
            illo? Delectus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.comment
  &-line
    margin: 1rem 0
.vpost-comment
  display: flex
  &-logo
    width: 3.4rem
    height: 3.4rem
    & img
      width: 100%
  &-title
    font-size: 1.4rem
    font-weight: 500
  &-content
    margin-left: 1rem
    padding: 0 0 .7rem 0
    flex-basis: 100%
  &-text
    font-size: 1.4rem
</style>
