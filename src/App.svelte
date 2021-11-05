<script lang="ts">
import type { ArticleFormat } from "@guardian/libs";
import { defaultValues, format } from "./stores";
import Dropdowns from "./Dropdowns.svelte";

let oldValues: ArticleFormat = defaultValues;

format.subscribe((values) => {
  if (values !== oldValues) {
    chrome.tabs.getSelected(null, (tab) => {
      let url = tab.url.split("?");
      let base = url[0];
      let newUrl =
        base + `?format=${values.design}${values.display}${values.theme}`;
      chrome.tabs.update(tab.id, { url: newUrl });
    });
    oldValues = values;
  }
});
</script>

<Dropdowns />

<style>
</style>
