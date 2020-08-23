<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-10 q-gutter-y-xl">
        <div class="row">
          <div class="col-12 relative-position text-center">
            <div class="text-grey-3 text-h2">کار ها</div>
            <div class="absolute-center text-h5">نمونه کار های <q-span class="text-positive">من</q-span></div>
          </div>
        </div>
        <div class="row q-mt-md q-col-gutter-xl">
          <div class="col-4" v-for="i in 9" :key="i">
            <q-img class="rounded-borders" src="http://slimhamdi.net/tunis/light/img/projects/project-3.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
