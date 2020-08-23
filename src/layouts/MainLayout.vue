<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="q-mr-xl q-pl-xl relative-position window-height absolute-right z-top">
        <div class="col-12 q-gutter-y-md absolute-center text-center">
          <q-fab color="positive" unelevated icon="home" direction="left">
            <q-fab-action class="q-pa-xs" label="خانه" color="positive" to="/"/>
          </q-fab>
          <q-fab color="positive" unelevated icon="person" direction="left">
            <q-fab-action class="q-pa-xs" label="درباره من" color="positive" to="/about"/>
          </q-fab>
          <q-fab color="positive" unelevated icon="work" direction="left">
            <q-fab-action class="q-pa-xs" label="نمونه کار" color="positive" to="/portfolio"/>
          </q-fab>
          <q-fab color="positive" unelevated icon="drafts" direction="left">
            <q-fab-action class="q-pa-xs" label="ارتباط با من" color="positive" to="/contact"/>
          </q-fab>
          <q-fab color="positive" unelevated icon="article" direction="left">
            <q-fab-action class="q-pa-xs" label="وبلاگ" color="positive" to="/about"/>
          </q-fab>
        </div>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
