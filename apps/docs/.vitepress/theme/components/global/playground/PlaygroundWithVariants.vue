<script setup lang="ts">
import { computed } from 'vue'
import { useVModels } from '@vueuse/core'

const emit = defineEmits([])

const props = withDefaults(defineProps<{
  variant?: string
  variants?: string[]
  type?: string
  prefix?: string
  fixed?: string
  appended?: string
  nested?: boolean
  html?: string
  showPreview?: boolean
}>(), {
  variant: '',
  variants: () => ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '1/2', 'full'],
  prefix: '',
  fixed: '',
  appended: '',
  nested: false,
  showPreview: true,
})

const {
  variant,
  prefix,
} = useVModels(props, emit, { passive: true })

const classes = computed(() => {
  if (!prefix.value)
    return variant.value

  let strs = [prefix.value]

  if (variant.value)
    strs = variant.value.startsWith('-') ? strs.map(i => `-${i}${variant.value}`) : strs.map(i => `${i}-${variant.value}`)

  return strs.join(' ')
})
</script>

<template>
  <SelectorVariants
    v-model="variant"
    :variants="type === 'color' ? ['transparent', 'current', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500'] : type === 'opacity' ? ['0', '5', '10', '20', '25', '30', '40', '50', '60', '70', '75', '80', '90', '95', '100'] : variants"
  />
  <div class="mt-4" />
  <InlinePlayground
    :input="classes"
    :fixed="fixed"
    :nested="nested"
    :appended="appended"
    :html="html"
    :show-preview="showPreview"
  />
</template>
