<script setup lang="ts">
defineProps<{
  image: string
}>()

const emit = defineEmits(['submit'])

const commentValue = defineModel<string>()

const emojis = ['😆', '😍', '🙌', '✨', '🚀', '🍤', '🎉', '🏆', '🐎']
</script>

<template>
  <div p="b-2 t-1 md:y-1" flex justify-center gap-2 overflow-x-auto text-xl>
    <button v-for="emoji in emojis" :key="emoji" @click="commentValue = `${commentValue ? `${commentValue} ` : ''}${emoji}`">
      {{ emoji }}
    </button>
  </div>
  <div class="grid grid-cols-[30px_1fr] items-start gap-3 pb-1">
    <Avatar :image="image" />

    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-[1fr_auto] items-start gap-2">
        <textarea
          v-model="commentValue"

          ring="color-1"
          min-h-15 rounded p-2 text-sm
          type="text"
          placeholder="Add a comment"
        />

        <div
          grid
          gap-1
          :style="{
            gridTemplateColumns: commentValue ? '1fr' : '0fr',
            transition: 'grid-template-columns 0.3s ease-out',
          }"
        >
          <Button
            overflow-hidden
            size="sm"
            :tabindex="commentValue ? 0 : -1"
            :style="{
              paddingInline: commentValue ? '.75rem' : 'initial',
              pointerEvents: commentValue ? 'all' : 'none',
            }"
            variant="filled"
            @click="emit('submit', commentValue)"
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
