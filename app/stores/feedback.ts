export type FeedbackOptions = {
  title: string,
};

export const useFeedbackStore = defineStore('globalsStore', () => {
  const showed = ref(false);

  const activeOptions = ref<FeedbackOptions>({
    title: '',
  });

  function setValue(value: boolean, opts: Partial<FeedbackOptions> = {}) {
    showed.value = value;
    activeOptions.value = { ...defaultOptions(), ...opts };
  }

  function defaultOptions(): FeedbackOptions {
    return {
      title: 'Нужна консультация?',
    }
  }

  return {
    showed,
    activeOptions,
    setValue,
  }
});
