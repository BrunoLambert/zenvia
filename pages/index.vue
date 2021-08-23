<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-center">
        <h1>Bem vindo ao Breaking Bad X</h1>
        <p>Fique sabendo tudo sobre os personagens da sua séria favorita</p>
      </v-flex>
      <v-flex v-for="character in characters" :key="character.id" xs12 md6>
        <CharacterListCard :character="character" />
      </v-flex>
      <v-flex xs12 class="my-6">
        <v-pagination
          v-model="page"
          :length="totalPages"
          color="secondary"
          :total-visible="$vuetify.breakpoint.smAndDown ? 5 : 7"
          @input="updatePage"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CharacterListCard from '~/components/characters/ListCard.vue'

export default {
  components: {
    CharacterListCard
  },
  data: () => ({
    characters: [],
    page: 1,
    limit: 10,
    totalPages: 1
  }),
  mounted () {
    this.$loader.on()
    Promise.all([this.getCharacterList(), this.getAllCharacteres()])
      .catch((err) => {
        console.error(err)
      }).finally(() => {
        this.$loader.off()
      })
  },
  methods: {
    async getAllCharacteres () {
      const response = await this.$axios.$get('/api/characters')
      this.totalPages = Math.ceil(response.length / this.limit)
    },
    async getCharacterList () {
      this.characters = await this.$axios.$get('/api/characters', {
        params: {
          limit: this.limit,
          offset: (this.page - 1) * this.limit
        }
      })
    },
    async updatePage () {
      this.$loader.on()
      await this.getCharacterList()
      this.$nextTick(() => {
        this.$loader.off()
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      })
    }
  }
}
</script>
