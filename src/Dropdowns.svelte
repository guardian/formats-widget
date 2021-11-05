<!-- svelte-ignore a11y-no-onchange -->
<script lang="ts">
import {
  ArticleDesign,
  ArticleDisplay,
  ArticlePillar,
  ArticleSpecial,
} from "@guardian/libs";
import { format } from "./stores";

function handleChange(e) {
  format.update((oldValues) => ({
    ...oldValues,
    [e.target.name]: e.target.value,
  }));
}

function enumKeys<E>(e: E): (keyof E)[] {
  return Object.keys(e).filter((key) => isNaN(Number(key))) as (keyof E)[];
}
</script>

<div class="dropdowns">
  <label
    >Select design:
    <select name="design" on:change="{handleChange}">
      {#each enumKeys(ArticleDesign) as design}
        <option value="{ArticleDesign[design]}">{design}</option>
      {/each}
    </select>
  </label>

  <label
    >Select display:
    <select name="display" on:change="{handleChange}">
      {#each enumKeys(ArticleDisplay) as display}
        <option value="{ArticleDisplay[display]}">{display}</option>
      {/each}
    </select>
  </label>

  <label
    >Select theme:
    <select name="theme" on:change="{handleChange}">
      {#each enumKeys(ArticlePillar) as theme}
        <option name="{theme}" value="{ArticlePillar[theme]}">{theme}</option>
      {/each}
      {#each enumKeys(ArticleSpecial) as theme}
        <option name="{theme}" value="{ArticleSpecial[theme]}">{theme}</option>
      {/each}
    </select>
  </label>
</div>

<style>
select {
  display: block;
  margin: 0.5em 0;
  font-size: inherit;
  min-width: 250px;
}
</style>
