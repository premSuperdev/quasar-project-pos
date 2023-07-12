<template>
    {{ props }}
    <q-dialog v-model="open" persistent>
        <input class="file-btn" accept="*/png" ref="browseFile" type="file" />

        <q-card>
            <q-btn @click="upload">upload</q-btn>
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
import { computed, ref } from 'vue'
const props = defineProps(['open'])
const emits = defineEmits(['update:open'])
const open = computed(() => props.open)
const browseFile = ref()
const fileList = ref([])
function upload() {
    if (!browseFile.value.onchange) {
        browseFile.value.onchange = (e) => {
            if (e.target) {
                const file = e.target.files[0]
                addFile(file)
            }
        }
    }
    browseFile.value.click()
}
async function addFile(file = null) {
    if (await file) {
        fileList.value.push(file)
    }
}
</script>
<style scoped>
.file-btn {
    visibility: hidden;
    z-index: -1;
    position: absolute;
}
.upload-file {
    border: 1px solid rgb(225, 225, 225);
    display: flex;
    align-items: center;
    padding: 12px;
}
</style>
