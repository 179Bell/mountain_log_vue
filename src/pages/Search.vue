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
            <v-col cols="12" md="6"
                v-for="(poi, index) in searchResults" :key="index">
                <v-card class="mx-auto">
                    <v-row>
                        <v-col cols="4">
                            <v-img :src="poi.img"></v-img>
                        </v-col>
                        <v-col>
                            <v-card-title>{{ poi.name }}</v-card-title>
                            <v-card-subtitle>標高{{ poi.elevation }}m</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-card-actions>
                                <v-btn
                                    class="mx-2"
                                    fab
                                    dark
                                    color="indigo"
                                    @click="addLog(index)"
                                >
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
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
        addLog(index){
            this.$emit('add-log', this.searchResults[index])
        },
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
            .then(response => response.json())
            for(let poi of response.poilist){
                let name = poi.name
                let elevation = poi.elevation
                let img = poi.photo_url
                this.searchResults.push({
                    name : name,
                    elevation : elevation,
                    img : img
                })
            }
            console.log(this.searchResults)
        }
    }
}
</script>
