<template>
  <v-container fluid class="character-card">
    <v-card elevation="4" class="character-card" :class="'b-' + statusColor">
      <v-card-text class="py-8">
        <v-layout row wrap align-center>
          <v-flex xs12 md4 xl3 class="text-center mb-4 mb-md-0 pl-md-4 px-2">
            <v-img
              :src="character.img"
              class="elevation-4 character-img"
              :class="'shadow-color-' + statusColor"
              min-height="200px"
              max-height="200px"
              :cover="$vuetify.breakpoint.smAndDown"
              :position="$vuetify.breakpoint.smAndDown ? 'top -50px center' : 'center'"
              @click="imageDialog = true"
            >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0 primary"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  width="8"
                  size="50"
                  color="black"
                ></v-progress-circular>
              </v-row>
            </template>
            </v-img>
          </v-flex>
          <v-flex xs12 md8 xl9 class="text-center text-md-left">
            <v-container fluid class="pr-md-6">
              <v-layout row wrap align-center>
                <v-flex xs12 md8>
                  <h2>{{ character.name }} ({{ character.nickname }})</h2>
                  <p>Interpretado por: {{ character.portrayed }}</p>
                </v-flex>
                <v-flex xs12 md4 class="text-center text-md-right">
                  <v-chip :color="statusColor" :text-color="character.status === 'Presumed dead' ? 'black' : 'white'" class="status-chip">
                    {{ $formatter.translateStatus(character.status) }}
                  </v-chip>
                </v-flex>
              </v-layout>
            </v-container>
            <hr>
            <p>Data de nascimento: {{ character.birthday === 'Unknown' ? 'Desconhecido' : $formatter.formatDate(character.birthday) }}</p>
            <p>
              Apareceu nas temporadas: {{ $formatter.formatTextList(character.appearance) }}
            </p>
            <p>
              {{ character.occupation.length > 1 ? 'Ocupações' : 'Ocupação' }}: {{ $formatter.formatTextList(character.occupation) }}
            </p>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
    <v-dialog v-model="imageDialog" width="fit-content">
      <v-card>
        <v-btn class="image-dialog-btn white" icon @click="imageDialog = false">
          <v-icon class="secondary--text">
            mdi-close
          </v-icon>
        </v-btn>
        <v-card-text class="text-center pa-4">
          <v-img
              :src="character.img"
              class="dialog-image"
              contain
              max-height="85vh"
              @click="imageDialog = true"
            >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0 primary"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  width="8"
                  size="50"
                  color="black"
                ></v-progress-circular>
              </v-row>
            </template>
            </v-img>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      default: () => ({
        char_id: 1,
        name: 'Walter White',
        birthday: '09-07-1958',
        occupation: [
          'High School Chemistry Teacher',
          'Meth King Pin'
        ],
        img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
        status: 'Deceased',
        appearance: [1, 2, 3, 4, 5],
        nickname: 'Heisenberg',
        portrayed: 'Bryan Cranston'
      })
    }
  },
  data: () => ({
    imageDialog: false
  }),
  computed: {
    statusColor () {
      return this.$formatter.getColorByStatus(this.character.status)
    }
  }
}
</script>

<style lang="scss" scoped>
.character-card {
  &.b-primary {
    border: 2px solid var(--primary);
  }
  &.b-secondary {
    border: 2px solid var(--secondaryligthen);
  }
  &.b-red.lighten-1 {
    border: 2px solid var(--redlighten1);
  }
  &.b-indigo.darken-3 {
    border: 2px solid var(--bluedarken1);
  }
}
.character-img {
  &.shadow-color-primary:hover {
    box-shadow: 0 0 10px var(--primary) !important;
  }
  &.shadow-color-secondary:hover {
    box-shadow: 0 0 10px var(--secondaryligthen) !important;
  }
  &.shadow-color-red.lighten-1:hover {
    box-shadow: 0 0 10px var(--redlighten1) !important;
  }
  &.shadow-color-indigo.darken-3:hover {
    box-shadow: 0 0 10px var(--bluedarken1) !important;
  }
}
</style>

<style scoped>
p {
  margin-bottom: 4px !important;
}
hr {
  margin: 12px 0;
}
.character-card {
  height: 100% !important;
}
.character-img {
  max-width: 80%;
  height: auto;
  max-height: 200px;
  transition: all 0.5s;
  cursor: ne-resize;
}
@media screen and (max-width: 650px) {
  .character-img {
    max-width: 100%;
  }
  .dialog-image {
    max-width: 80vw;
    height: auto;
  }
}
.image-dialog-btn {
  position: absolute;
  right: 0;
  z-index: 10;
  border: 1px solid black !important;
}
</style>
