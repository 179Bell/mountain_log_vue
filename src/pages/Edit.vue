<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-card class="mx-auto">
                    <v-row>
                        <v-col cols="4">
                            <v-img :src="logs.image"></v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card-title>{{ logs.name }}</v-card-title>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-btn color="secondary" to="/">一覧に戻る</v-btn>
                        <v-btn color="info">更新する</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'Edit',
    props: {
        logs: Array
    }
}
</script>