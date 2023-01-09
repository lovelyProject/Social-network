<template>
  <div class="feed__item feed__item_spinner" v-if="!post">
    <svg
      class="sp"
      viewBox="0 0 128 128"
      width="128px"
      height="128px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#000" />
          <stop offset="40%" stop-color="#fff" />
          <stop offset="100%" stop-color="#fff" />
        </linearGradient>
        <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#000" />
          <stop offset="60%" stop-color="#000" />
          <stop offset="100%" stop-color="#fff" />
        </linearGradient>
        <mask id="mask1">
          <rect x="0" y="0" width="128" height="128" fill="url(#grad1)" />
        </mask>
        <mask id="mask2">
          <rect x="0" y="0" width="128" height="128" fill="url(#grad2)" />
        </mask>
      </defs>
      <g fill="none" stroke-linecap="round" stroke-width="16">
        <circle class="sp__ring" r="56" cx="64" cy="64" stroke="#ddd" />
        <g stroke="hsl(223,90%,50%)">
          <path
            class="sp__worm1"
            d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
            stroke="hsl(343,90%,50%)"
            stroke-dasharray="43.98 307.87"
          />
          <g transform="translate(42,42)">
            <g class="sp__worm2" transform="translate(-42,0)">
              <path
                class="sp__worm2-1"
                d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                stroke-dasharray="43.98 175.92"
              />
            </g>
          </g>
        </g>
        <g stroke="hsl(283,90%,50%)" mask="url(#mask1)">
          <path
            class="sp__worm1"
            d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
            stroke-dasharray="43.98 307.87"
          />
          <g transform="translate(42,42)">
            <g class="sp__worm2" transform="translate(-42,0)">
              <path
                class="sp__worm2-1"
                d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                stroke-dasharray="43.98 175.92"
              />
            </g>
          </g>
        </g>
        <g stroke="hsl(343,90%,50%)" mask="url(#mask2)">
          <path
            class="sp__worm1"
            d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
            stroke-dasharray="43.98 307.87"
          />
          <g transform="translate(42,42)">
            <g class="sp__worm2" transform="translate(-42,0)">
              <path
                class="sp__worm2-1"
                d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                stroke-dasharray="43.98 175.92"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
  <div class="feed__item" v-if="post">
    <div class="feed__item-header">{{ post.title }}</div>
    <div class="feed__item-content">
      {{ post.body }}
    </div>
    <div class="feed__item-footer">
      <svg
        viewBox="0 0 56 56"
        xmlns="http://www.w3.org/2000/svg"
        class="post-like post-icon"
      >
        <path
          d="M 4.7265 20.6406 C 4.7265 30.6250 13.0937 40.4453 26.2890 48.8828 C 26.8046 49.1875 27.5078 49.5156 28.0000 49.5156 C 28.4922 49.5156 29.1953 49.1875 29.6875 48.8828 C 42.9062 40.4453 51.2735 30.6250 51.2735 20.6406 C 51.2735 12.3438 45.5781 6.4844 37.9843 6.4844 C 33.6250 6.4844 30.1094 8.5469 28.0000 11.7109 C 25.8906 8.5703 22.3515 6.4844 18.0156 6.4844 C 10.4219 6.4844 4.7265 12.3438 4.7265 20.6406 Z M 8.5000 20.6406 C 8.5000 14.4063 12.5312 10.2578 17.9687 10.2578 C 22.3750 10.2578 24.8828 13.0000 26.4062 15.3438 C 27.0390 16.2813 27.4375 16.5391 28.0000 16.5391 C 28.5625 16.5391 28.9141 16.2578 29.5937 15.3438 C 31.1875 13.0469 33.6484 10.2578 38.0312 10.2578 C 43.4687 10.2578 47.5000 14.4063 47.5000 20.6406 C 47.5000 29.3594 38.2890 38.7578 28.4687 45.2734 C 28.2343 45.4375 28.0937 45.5547 28.0000 45.5547 C 27.9062 45.5547 27.7422 45.4375 27.5078 45.2734 C 17.7109 38.7578 8.5000 29.3594 8.5000 20.6406 Z"
        />
      </svg>
      <svg
        class="post-comment post-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 4H5C3.89543 4 3 4.89543 3 6V16C3 17.1046 3.89543 18 5 18H8.18767C9.18859 18 10 18.8114 10 19.8123C10 20.6196 10.9761 21.0239 11.5469 20.4531L13.4142 18.5858C13.7893 18.2107 14.298 18 14.8284 18H19C20.1046 18 21 17.1046 21 16V6C21 4.89543 20.1046 4 19 4Z"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "vPost",
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
:root {
  --hue: 223;
  --bg: hsl(var(--hue), 90%, 95%);
  --fg: hsl(var(--hue), 90%, 5%);
  font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
}
body {
  background-color: var(--bg);
  color: var(--fg);
  font: 1em/1.5 sans-serif;
  height: 100vh;
  display: grid;
  place-items: center;
  transition: background-color 0.3s;
}
main {
  padding: 1.5em 0;
}
.sp {
  display: block;
  width: 8em;
  height: 8em;
}
.sp__ring {
  stroke: hsla(var(--hue), 90%, 5%, 0.1);
  transition: stroke 0.3s;
}
.sp__worm1,
.sp__worm2,
.sp__worm2-1 {
  animation: worm1 5s ease-in infinite;
}
.sp__worm1 {
  transform-origin: 64px 64px;
}
.sp__worm2,
.sp__worm2-1 {
  transform-origin: 22px 22px;
}
.sp__worm2 {
  animation-name: worm2;
  animation-timing-function: linear;
}
.sp__worm2-1 {
  animation-name: worm2-1;
  stroke-dashoffset: 175.92;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue), 90%, 5%);
    --fg: hsl(var(--hue), 90%, 95%);
  }
  .sp__ring {
    stroke: hsla(var(--hue), 90%, 95%, 0.1);
  }
}

/* Animations */
@keyframes worm1 {
  from,
  to {
    stroke-dashoffset: 0;
  }
  12.5% {
    animation-timing-function: ease-out;
    stroke-dashoffset: -175.91;
  }
  25% {
    animation-timing-function: cubic-bezier(0, 0, 0.43, 1);
    stroke-dashoffset: -307.88;
  }
  50% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -483.8;
  }
  62.5% {
    animation-timing-function: ease-out;
    stroke-dashoffset: -307.88;
  }
  75% {
    animation-timing-function: cubic-bezier(0, 0, 0.43, 1);
    stroke-dashoffset: -175.91;
  }
}
@keyframes worm2 {
  from,
  12.5%,
  75%,
  to {
    transform: rotate(0) translate(-42px, 0);
  }
  25%,
  62.5% {
    transform: rotate(0.5turn) translate(-42px, 0);
  }
}
@keyframes worm2-1 {
  from {
    stroke-dashoffset: 175.91;
    transform: rotate(0);
  }
  12.5% {
    animation-timing-function: cubic-bezier(0, 0, 0.42, 1);
    stroke-dashoffset: 0;
    transform: rotate(0);
  }
  25% {
    animation-timing-function: linear;
    stroke-dashoffset: 0;
    transform: rotate(1.5turn);
  }
  37.5%,
  50% {
    stroke-dashoffset: -175.91;
    transform: rotate(1.5turn);
  }
  62.5% {
    animation-timing-function: cubic-bezier(0, 0, 0.42, 1);
    stroke-dashoffset: 0;
    transform: rotate(1.5turn);
  }
  75% {
    animation-timing-function: linear;
    stroke-dashoffset: 0;
    transform: rotate(0);
  }
  87.5%,
  to {
    stroke-dashoffset: 175.92;
    transform: rotate(0);
  }
}
</style>
