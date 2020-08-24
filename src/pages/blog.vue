<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-10 q-gutter-y-xl">
        <div class="row">
          <div class="col-12 relative-position text-center">
            <div class="text-grey-3 text-h2">وبلاگ</div>
            <div class="absolute-center text-h5">مقاله های <q-span class="text-positive">من</q-span></div>
          </div>
        </div>
        <div class="row q-col-gutter-lg">
          <div class="col-4" v-for="i in 6" :key="i">
            <q-card flat class="my-card bg-grey-3">
              <img src="http://slimhamdi.net/tunis/light/img/blog/blog-post-3.jpg" style="border-bottom: 5px solid #72b626;">

              <q-card-section class="q-mt-sm q-ml-sm q-mr-sm">
                <div class="text-h6">عنوان مقاله</div>
              </q-card-section>
              <q-card-section class="q-pt-sm q-ml-sm q-mr-sm text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <q-pagination
              v-model="current"
              color="positive"
              :max="5"
              size="md"
            >
            </q-pagination>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      current: 3
    }
  }
}
</script>
