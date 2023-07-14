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
        <template v-slot:body-cell-image="props">
            <q-td :props="props">
                <q-img
                    :src="props.row.image"
                    spinner-color="white"
                    style="height: 140px; max-width: 150px"
                />
            </q-td>
        </template>
    </q-table>
    {{ counter }}
    <q-btn @click="add"></q-btn>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
// import { ItemApi } from 'src/composable/item'
import { useItemStore } from 'src/stores/items.store'
const loading = ref(false)
const itemStore = useItemStore()
const { itemData } = storeToRefs(itemStore)

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
        field: 'itemPrice',
        align: 'center',
        label: 'Calories',
        sortable: true,
    },
    {
        name: 'image',
        field: 'image',
        align: 'center',
        label: 'Calories',
        sortable: true,
    },
]
</script>
