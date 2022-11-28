<template>
    <div>
        <v-row>
            <v-col cols="6">
                <v-text-field
                    label="山の名前を検索"
                    v-model="keyword">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-btn
                    color="primary"
                    @click="search(keyword)"
                >検索する</v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn
                    color="secondary"
                    to="/"
                >一覧に戻る</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>

            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'Search',
    data(){
        return {
            keyword: '',
            searchResults: []
        }
    },
    methods:{
        async search(keyword){
            this.searchResults = []
            const baseUrl = "https://api.yamareco.com/api/v1/searchPoi"
            const form = new FormData()
            form.append('name', keyword)
            form.append('type_id', 1)
            form.append('page', 1)
            
            const params = {
                method: 'POST',
                body: form
            }

            const response = await fetch(baseUrl, params)
            const json = response.json()
            console.log(json)
        }
    }
}
</script>
