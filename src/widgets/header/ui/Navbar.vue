<template>
  <nav>
    <ul>
      <li>
        <NuxtLink
          class="navbar__link"
          active-class="navbar__link-active"
          to="/"
        >
          Production calculator
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="navbar__link"
          active-class="navbar__link-active"
          to="/product-chains"
        >
          Product chains
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="navbar__link"
          active-class="navbar__link-active"
          to="/building-layouts"
        >
          Building layouts
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 16px;

  display: flex;
  gap: 30px;
}

.navbar__link {
  color: var(--text-20);
  text-decoration: none;

  &:hover {
    color: var(--text-10);
  }
}

.navbar__link-active {
  color: var(--text-0);
}
</style>