<template>
  <header class="header-wrapper">
    <h1 class="header__title">Anno 1404 <span class="header__title__dimmed">handbook</span></h1>

    <Button>
      Menu
    </Button>
  </header>
</template>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header__title {
  color: black;
}

.header__title__dimmed {
  color: darkgray;
}
</style>