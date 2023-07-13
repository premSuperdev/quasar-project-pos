<template>
    <q-table
        flat
        bordered
        title="Treats"
        dense
        :rows="itemData"
        :columns="columns"
        row-key="name"
        :loading="loading"
    >
    </q-table>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { ItemApi } from 'src/composable/item'

const props = defineProps(['hasNewData'])
const emits = defineEmits(['update:hasNewData'])
const loading = ref(true)
const itemData = ref()
function inc() {
    counterStore.increment()
}

const api = ItemApi()
watch(
    () => props.hasNewData,
    async (value) => {
        if (value) {
            await fetchData()
            console.log('loading ')
            emits('update:hasNewData', false)
        }
    }
)
const columns = [
    {
        name: 'itemId',
        label: 'itemCode',
        align: 'left',
        field: (row) => row.itemId,
        format: (val) => `${val}`,
        sortable: true,
    },
    {
        field: 'itemName',
        align: 'center',
        label: 'Calories',
        sortable: true,
    },
    {
        field: 'price',
        align: 'center',
        label: 'Calories',
        sortable: true,
    },
]
async function fetchData() {
    loading.value = true
    itemData.value = await api.get()
    loading.value = false
}
onMounted(async () => {
    await fetchData()
})
</script>
