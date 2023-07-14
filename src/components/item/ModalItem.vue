<template>
    {{ counter }}
    <q-dialog v-model="open" persistent>
        <input class="file-btn" accept="*/png" ref="browseFile" type="file" />
        <q-card>
            <q-btn @click="upload">upload</q-btn>
            <q-img :src="imagePictureHref" />
            <img src="" alt="" srcset="" />
            <q-card-section class="q-pa-md">
                <div style="width: 500px">sad</div>
            </q-card-section>
            <q-card-actions>
                <q-space />
                <q-btn @click="save">addItem</q-btn>

                <q-btn @click="emits('update:open', false)">close</q-btn>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from 'src/stores/example-store'
const conterStore = useCounterStore()
const { counter } = storeToRefs(conterStore)
const props = defineProps(['open'])
const imagePictureHref = ref('https://cdn.quasar.dev/img/parallax2.jpg')
const emits = defineEmits(['update:open'])
const itemId = ref('0')
const binaryFile = ref()
const open = computed(() => props.open)
const browseFile = ref()
const fileList = ref()
// const api = ItemApi()

function upload() {
    if (!browseFile.value.onchange) {
        browseFile.value.onchange = (e) => {
            if (e.target) {
                const file = e.target.files[0]
                console.log(file)
                fileList.value = file
                const reader = new FileReader()
                reader.onload = async (e) => {
                    const bina = await e.target.result
                    const arrayBuffer = new Uint8Array(reader.result).buffer
                    binaryFile.value = btoa(
                        String.fromCharCode.apply(
                            null,
                            new Uint8Array(arrayBuffer)
                        )
                    )
                    const blobs = new Blob([bina], {
                        type: 'application/octet-stream',
                    })
                    imagePictureHref.value = URL.createObjectURL(blobs)
                }
                reader.readAsArrayBuffer(file)
            }
        }
    }
    browseFile.value.click()
}
async function save() {
    const res = await api.insert({
        itemName: 'as',
        price: 123,
        image: 'data:image/png;base64,' + binaryFile.value,
    })
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
