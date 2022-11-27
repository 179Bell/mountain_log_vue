<template lang="">
    <div>
        <v-app-bar
            app
            color="green"
            dark>
            <v-toolbar-title
                @click="$router.push('/')"
                style="cursor:pointer"
            >MOUNTAIN LOG</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                color="error"
                style="cursor:pointer">削除する</v-btn>
            <v-btn 
                color="primary"
                @click="$router.push('/search')"
                style="cursor:pointer">検索する</v-btn>
        </v-app-bar>
    </div>
</template>
