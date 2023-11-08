<template>
    <div>
        <form @submit.prevent="handleSubmit()">
            <label for="playlist">URL: </label>
            <input type="text" for="playlist" v-model="url" required placeholder="https://open.spotify.com/playlist/..." size="50">
            <div class="submit">
                <button>Submit</button>
            </div>
        </form>
        <div>
            {{ url }}
            {{ isAuth }}
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import axios from "axios"
import authentication from "../composables/authenticate"
import getPlaylist from "../composables/getPlaylist"

export default {
    name: "Input",
    setup () {
        const url = ""
        return { url }
    }
}
</script>

<style lang="scss" scoped>

</style>