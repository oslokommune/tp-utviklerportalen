<template>
    <div class="Martin">
        <h2>Jeg trenger hjelp!</h2>
        <div style="alignment: center; margin-bottom: 1em;">
            <span>Her kan du sende en melding til teamets slack kanal.</span>
        </div>
        <TextInput v-model="message"></TextInput>
        <br/>
        <BaseButton primary v-on:click="post_to_slack">Send melding til Utviklerportalen</BaseButton>
    </div>
</template>

<script>
    import axios from 'axios'
    import { BaseButton } from '@tuuturu/vue/buttons'
    import { TextInput } from '@tuuturu/vue/forms'
    export default {
        name: 'Martin',
        components: { BaseButton, TextInput },
        data: () => ({
            message: ''
        }),
        methods: {
            post_to_slack: function (event) {
                const url = 'https://hooks.slack.com/services/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'

                axios.post(url, JSON.stringify({text: this.message}), {
                    withCredentials: false,
                    transformRequest: [(message, headers) => {
                        delete headers.post["Content-Type"]
                        return message
                    }]
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Martin {
        padding-top: 3em;
        padding-bottom: 3em;
    }
</style>
