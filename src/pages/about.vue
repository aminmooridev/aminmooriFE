<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-10 q-gutter-y-xl">
        <div class="row">
          <div class="col-12 relative-position text-center">
            <div class="text-grey-3 text-h2">روزمه</div>
            <div class="absolute-center text-h5">درباره <q-span class="text-positive">من</q-span></div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="text-body1 q-mb-xl">اطلاعات من</div>
            <div class="row q-col-gutter-lg">
              <div class="col-6 text-grey">نام : <q-span class="text-dark">امین</q-span></div>
              <div class="col-6 text-grey">آدرس : <q-span class="text-dark">گنبد</q-span></div>
              <div class="col-6 text-grey">نام خانوادگی : <q-span class="text-dark">موری</q-span></div>
              <div class="col-6 text-grey">تلفن : <q-span class="text-dark"> 4884 885 935 (+98)</q-span></div>
              <div class="col-6 text-grey">سن : <q-span class="text-dark">25</q-span></div>
              <div class="col-6 text-grey">ایمیل : <q-span class="text-dark">aminmoori.dev@gmail.com</q-span></div>
              <div class="col-6 text-grey">ملیت : <q-span class="text-dark">ایرانی</q-span></div>
              <div class="col-6 text-grey">اسکایپ : <q-span class="text-dark">aminmoori1</q-span></div>
              <div class="col-6 text-grey">فریلنسر : <q-span class="text-dark">فعال</q-span></div>
              <div class="col-6 text-grey">زبان ها : <q-span class="text-dark">فارسی ، انگلیسی</q-span></div>
            </div>
          </div>

          <!-- پروژه ها ، تجربه ، مشتریان و ... -->
          <div class="row q-col-gutter-md col-6">
            <div class="col-6" v-for="i in 4" :key="i">
              <q-card flat bordered class="my-card">

                <q-card-section>
                  <div class="text-positive text-h3 q-ml-xl">97<sup>+</sup></div>
                  <div class="text-center">
                    <q-icon class="q-mt-md" color="grey-5" name="maximize" size="md"/> پروژه اتمام یافته
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-5">
            <q-separator inset />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <div class="text-h6">مهارت ها</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-3 text-center" v-for="i in 8" :key="i">
                <q-circular-progress
                  show-value
                  class="text-light-green q-ma-md"
                  value="63"
                  size="120px"
                  color="light-positive"
                />
                <div class="text-grey text-h6">PHP</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-5">
            <q-separator inset />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <div class="text-h6">تجربیات و تحصیلات</div>
          </div>
        </div>
        <div class="row q-col-gutter-md">
          <div class="col-6">
            <q-timeline color="positive">
              <q-timeline-entry
                v-for="i in 3"
                :key="i"
                title="آی تک"
                subtitle="14 دی 1374"
                icon="work"
              >
                <div>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </div>
              </q-timeline-entry>
            </q-timeline>
          </div>
          <div class="col-6">
            <q-timeline color="positive">
              <q-timeline-entry
                v-for="i in 2"
                :key="i"
                title="فوق دیپلم"
                subtitle="14 دی 1374"
                icon="school"
              >
                <div>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </div>
              </q-timeline-entry>
            </q-timeline>
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
