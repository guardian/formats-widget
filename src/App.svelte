<script>
    import { format } from './stores'
    import Dropdowns from './Dropdowns.svelte'

    format.subscribe(values => {
        chrome.tabs.getSelected(null, (tab) => {
            let url = tab.url.split('?')
            let base = url[0];
            let newUrl = base + `?${values.display}${values.design}${values.theme}`
            chrome.tabs.update(tab.id, { url: newUrl })
        }) 
    })
</script>

<Dropdowns />       


<style>
</style>
