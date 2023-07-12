<template>
    <div class="q-pa-xl">
        <div
            class="fit row wrap justify-between items-start content-start q-py-sm"
        >
            <div>{{ $t('item.title') }}</div>
            <div><q-btn @click="openDialog = true">add</q-btn></div>
        </div>
        <TableItem v-model:has-new-data="hasNewData" />
    </div>
    <ModalItem :open="openDialog" />
</template>

<script setup>
import { ref } from 'vue'
import ModalItem from 'components/item/ModalItem.vue'
import TableItem from 'components/item/TableItem.vue'
const openDialog = ref(false)
const hasNewData = ref(false)
function close(e) {
    openDialog.value = e
    hasNewData.value = true
}
</script>
