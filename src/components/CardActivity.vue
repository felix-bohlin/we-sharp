<script setup lang="ts">
import { computed, defineProps } from "vue"
import type { TActivity } from "../types/activity"
import type { TUser } from "../types/user"
import Comment from "./icons/Comment.vue"

import IconActivity from "./IconActivity.vue"
import ThumbOutlined from "./icons/ThumbOutlined.vue"
import ThumbFilled from "./icons/ThumbFilled.vue"

const props = defineProps<{
  activity: TActivity
  user: TUser
}>()

const userInitials: string = computed(() => {
  const name = props?.user?.name ?? ""
  const initials = name
    .split(/[ ,]+/)
    .map((name: string) => name[0])
    .join("")

  return initials
})
</script>

<template>
  <div class="card-activity-container">
    <section>
      <header>
        <p class="avatar">{{ userInitials }}</p>
        <div>
          <a href="{{user?.url}}" class="username">
            {{ user?.name ?? "" }}
          </a>
          <p class="subtitle">
            {{ activity?.date }} · {{ activity?.location }}
          </p>
        </div>
      </header>

      <div class="body">
        <span class="icon-activity">
          <IconActivity :icon="activity?.activityType ?? 'run'" />
        </span>

        <div>
          <h2>
            <a href="#">{{ activity?.title }}</a>
          </h2>
          <p>{{ activity?.description }}</p>

          <ul>
            <li><span>Time</span> {{ activity?.duration }}</li>
          </ul>
        </div>

        <img src="https://picsum.photos/500" />
      </div>

      <footer>
        <button type="button">4 likes</button>

        <div class="interactions">
          <button type="button">
            <ThumbFilled v-if="!!activity?.likes" />
            <ThumbOutlined v-else />
            <span>Like</span>
          </button>
          <button type="button">
            <Comment />
            <span>Comment</span>
          </button>
        </div>
      </footer>
    </section>
  </div>
</template>

<style scoped>
section {
  --card-bg: hsl(var(--gray-9-hsl) / 70%);

  @media (prefers-color-scheme: light) {
    --card-bg: var(--surface-1);
  }

  background-color: var(--card-bg);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-2);
  padding-block: var(--size-3);
  padding-inline: var(--size-5);
}

.card-activity-container {
  container-type: inline-size;
}

header {
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: var(--size-3);

  & .username {
    font-size: 0.875rem;
    font-weight: 500;
  }

  & .subtitle {
    font-size: var(--font-size-0);
    margin: 0;
  }

  & .avatar {
    background-color: var(--brand);
    border-radius: 100vmax;
    color: var(--card-bg);
    display: grid;
    font-weight: 700;
    height: 40px;
    margin: 0;
    place-items: center;
    text-transform: uppercase;
    width: 100%;
  }
}

.body {
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: var(--size-3);

  & img {
    background: var(--gradient-2);
    border-radius: var(--radius-3);
    grid-column: 1/-1;
    height: 100%;
    margin-block: var(--size-3);
    max-height: 218px;
    object-fit: cover;
    width: 100%;
  }

  & h2 {
    font-size: var(--font-size-3);

    & + p {
      font-size: var(--font-size-0);
      margin-block: 1em;
    }
  }

  & .icon-activity {
    font-size: var(--font-size-5);
  }
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--size-3);
  list-style: none;
  margin: 1em 0 0;
  padding: 0;

  & li {
    display: flex;
    flex-direction: column;
    padding: 0;
    & span {
      font-size: var(--font-size-0);
    }
  }
}

footer {
  align-items: center;
  display: flex;
  gap: var(--size-2);
  justify-content: space-between;

  & .interactions {
    display: flex;
    gap: var(--size-2);

    & button {
      background-color: transparent;
      border: 1px solid var(--text-1);
      border-radius: var(--radius-2);
      font-size: var(--font-size-3);
      padding: var(--size-2);

      &:hover {
        --hover-opacity: 10%;
        @media (prefers-color-scheme: light) {
          --hover-opacity: 0.05%;
        }

        background-color: color-mix(
          in srgb,
          var(--surface-4),
          var(--text-1) var(--hover-opacity)
        );
      }

      & span {
        display: none;
      }
    }
  }
}

@container (width <= 400px) {
  section {
    background-color: tomato;
  }
}
</style>
