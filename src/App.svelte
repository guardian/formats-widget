<script lang="ts">
import type { ArticleFormat } from "@guardian/libs";
import { format } from "./stores";
import Dropdowns from "./Dropdowns.svelte";

format.subscribe((values: ArticleFormat) => {
  chrome.tabs.getSelected(null, (tab) => {
    let url = new URL(tab.url);

    url.searchParams.set("design", `${values.design}`);
    url.searchParams.set("display", `${values.display}`);
    url.searchParams.set("theme", `${values.theme}`);

    chrome.tabs.update(tab.id, { url: url.href });
  });
});
</script>

<Dropdowns />

<style>
</style>
