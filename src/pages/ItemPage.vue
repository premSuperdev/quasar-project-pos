<template>
    <div class="q-pa-xl">
        <div
            class="fit row wrap justify-between items-start content-start q-py-sm"
        >
            <div>item</div>
            <div><q-btn @click="openDialog = true">add</q-btn></div>
        </div>
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
    </div>
    <ModalItem v-model:open="openDialog" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ModalItem from 'components/item/ModalItem.vue'
import { ItemApi } from 'src/composable/item'
const loading = ref(true)
const openDialog = ref(false)
const itemData = ref()
const api = ItemApi()
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

onMounted(async () => {
    loading.value = true
    itemData.value = await api.get()
    loading.value = false
})
</script>
