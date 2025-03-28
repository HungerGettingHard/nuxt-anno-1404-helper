export const useSideMenuStore = defineStore("sideMenu", () => {
  const isOpened = ref<boolean>(false);

  const open = () => isOpened.value = true;

  const close = () => isOpened.value = false;

  return {
    isOpened: readonly(isOpened),
    open,
    close
  };
});