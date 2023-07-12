<template>
    {{ props }}
    <q-dialog v-model="open" persistent>
        <q-card>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-card-section class="q-pa-md">
                <div style="width: 500px">sad</div>
            </q-card-section>
            <q-card-actions>
                <q-space />
                <q-btn @click="emits('update:open', false)">close</q-btn>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps(['open'])
const emits = defineEmits(['update:open'])
const open = computed(() => props.open)
</script>
