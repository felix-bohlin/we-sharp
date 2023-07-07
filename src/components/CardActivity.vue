<script setup lang="ts">
import { ref } from "vue"
import type { TActivity } from "../types/activity"
import type { TUser } from "../types/user"

import Avatar from "./Avatar.vue"
import ButtonIcon from "./button/ButtonIcon.vue"
import Card from "./Card.vue"
import Comment from "./icons/Comment.vue"
import IconActivity from "./IconActivity.vue"
import MoreDots from "./icons/MoreDots.vue"
import ThumbOutlined from "./icons/ThumbOutlined.vue"
import ThumbFilled from "./icons/ThumbFilled.vue"
import Clap from "./icons/Clap.vue"

const props = defineProps<{
  activity: TActivity
  user: Omit<TUser, "id">
}>()

const showComments = ref(false)
const showMenu = ref(false)
</script>

<template>
  <section>
    <Card>
      <header>
        <Avatar :image="user?.imageUrl" />

        <div>
          <a href="{{user?.url}}" class="username">
            {{ user?.name ?? "" }}
          </a>
          <p class="subtitle">
            {{ activity?.date }} · {{ activity?.location }}
          </p>
        </div>

        <ButtonIcon @click="showMenu = !showMenu" text="Menu">
          <MoreDots />
        </ButtonIcon>

        <div class="menu" v-if="showMenu">
          <ul>
            <li><button type="button">Edit</button></li>
            <li><button type="button">Delete</button></li>
          </ul>
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
        <div class="actions">
          <button type="button">4 likes</button>

          <div class="interactions">
            <ButtonIcon
              text="Cheer"
              :variant="!activity?.likes ? 'contained' : 'outlined'"
            >
              <Clap />
            </ButtonIcon>

            <ButtonIcon
              @click="showComments = !showComments"
              text="Comment"
              variant="outlined"
            >
              <Comment />
            </ButtonIcon>
          </div>
        </div>

        <div v-if="showComments">
          <ul>
            <li>
              <p>Comment 1</p>
            </li>
            <li>
              <p>Comment 2</p>
            </li>
            <li>
              <p>Comment 3</p>
            </li>
          </ul>

          <div>
            <input type="text" placeholder="Add a comment" />
            <button type="button">Post</button>
          </div>
        </div>
      </footer>
    </Card>
  </section>
</template>

<style scoped>
section {
  container-type: inline-size;
  width: clamp(30ch, 100%, 60ch);
}

.section {
  display: flex;
  flex-direction: column;
  gap: var(--size-2);
}

header {
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  gap: var(--size-3);

  & .username {
    font-size: 0.875rem;
    font-weight: 500;
  }

  & .subtitle {
    font-size: var(--font-size-0);
    margin: 0;
  }
}

.menu {
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;

    & button {
      background: transparent;
      border: none;
      color: inherit;
      margin: 0;
      padding: 0;
    }
  }
}

.body {
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: var(--size-3);

  & .icon-activity {
    font-size: var(--font-size-5);
  }

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

  & ul {
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
}

footer {
  & .actions {
    align-items: center;
    display: flex;
    gap: var(--size-2);
    justify-content: space-between;

    & .interactions {
      display: grid;
      gap: var(--size-2);
      grid-template-columns: repeat(2, 40px);
    }
  }
}
</style>
