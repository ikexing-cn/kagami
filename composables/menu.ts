export function useMenu() {
  const expandMenu = useState('menu', () => false)
  const currentMenu = ref(0)

  const toggleExpandMenu = () => expandMenu.value = !expandMenu.value

  return {
    expandMenu,
    currentMenu,
    toggleExpandMenu,
  }
}
