import { reactive, readonly } from 'vue'

export type StoreState = {
  currentComponent: string;
  feedbackType: string;
  message: string;
  apiKey: string;
  fingerprint: string;
  currentPage: string;
}

const initialState: StoreState = {
  currentComponent: 'SelectFeedbackType',
  // currentComponent: 'Success',
  feedbackType: '',
  message: '',
  apiKey: '',
  fingerprint: '',
  currentPage: ''
}

const state = reactive<StoreState>({ ...initialState })

export function setCurrentComponent(component: string): void {
  state.currentComponent = component
}

export function setCurrentMessage(message: string): void {
  state.message = message
}

export function setCurrentFeedbackType(feedbacktype: string): void {
  state.feedbackType = feedbacktype
}

export function setCurrentPage(page: string): void {
  state.currentPage = page
}

export function setApiKey(apikey: string): void {
  state.apiKey = apikey
}

export function setFingerprint(fingerprint: string): void {
  state.fingerprint = fingerprint
}

export function resetStore(): void {
  setCurrentComponent(initialState.currentComponent)
  setCurrentMessage(initialState.message)
  setCurrentFeedbackType(initialState.feedbackType)
  setCurrentPage(initialState.currentPage)
  setApiKey(initialState.apiKey)
  setFingerprint(initialState.fingerprint)
}

export default readonly(state)
