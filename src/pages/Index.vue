<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" v-for="log in logs" :key="log.id">
                <v-card>
                    <v-row>
                        <v-col cols="4">
                            <v-img :src="log.image"></v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card-title>{{ log.name }}</v-card-title>
                            <v-spacer></v-spacer>
                            <v-card-actions>
                                <v-btn
                                    :to = "{name: 'Edit', params: {id: log.id}}"
                                    color="indigo"
                                    fad
                                    small
                                    dark>
                                <v-icon>mdi-pencil</v-icon></v-btn>
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
    props: {
        logs: Array
    }
}
</script>