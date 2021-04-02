<template>
  <component
    :is="store.currentComponent"
    @select-feedback-type="handleSelectFeedbackType"
    @click="next"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { StoreState, setCurrentFeedbackType } from '@/store'
import useStore from '@/hooks/store'
import useNavigation, { Navigation } from '@/hooks/navigation'
import SelectFeedbackType from './SelectFeedbackType.vue'
import WriteAFeedback from './WriteAFeedback.vue'
import Success from './Success.vue'
import ErrorState from './Error.vue'

interface SetupReturn {
  next: Navigation['next']
  store: StoreState
  handleSelectFeedbackType(type: string): void
}

export default defineComponent({
  components: {
    SelectFeedbackType,
    WriteAFeedback,
    Success,
    Error: ErrorState
  },
  setup(): SetupReturn {
    const store = useStore()
    const { next } = useNavigation()

    function handleSelectFeedbackType(type: string): void {
      setCurrentFeedbackType(type)
    }

    return { next, store, handleSelectFeedbackType }
  }
})
</script>
