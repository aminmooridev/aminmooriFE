<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-6 q-gutter-y-xl">
        <div class="row">
          <div class="col-12 relative-position text-center">
            <div class="text-grey-3 text-h2">وبلاگ</div>
            <div class="absolute-center text-h5">مقاله های <q-span class="text-positive">من</q-span></div>
          </div>
        </div>
        <div class="row q-gutter-y-md">
          <div class="col-12 q-gutter-x-md">
            <q-icon name="person" color="positive"/><q-span class="text-grey"> امین موری</q-span>
            <q-icon name="event" color="positive"/><q-span class="text-grey"> 14 دی 1374</q-span>
            <q-icon name="local_offer" color="positive"/><q-span class="text-grey"> دسته بندی نشده ، طراحی وب</q-span>
            <q-icon name="eye" color="positive"/><q-span class="text-grey">27 بازدید</q-span>
          </div>
          <div class="col-12 text-h6">
            عنوان مقاله
          </div>
          <div class="col-12">
            <q-img class="rounded-borders" src="http://slimhamdi.net/tunis/light/img/blog/blog-post-1.jpg"/>
          </div>
          <div class="col-12">
            <div class="text-grey-8 text-justify">
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
          </div>
          <div class="col-12 q-gutter-x-md q-gutter-y-md text-center">
              <div class="">اشتراگ گذاری</div>
              <q-icon name="facebook" color="positive" size="sm"/>
              <q-icon name="ion-logo-instagram" color="positive" size="sm"/>
              <q-icon name="ion-logo-twitter" color="positive" size="sm"/>
              <q-icon name="send" class="rotate-315" color="positive" size="sm"/>
              <q-icon name="ion-logo-whatsapp" color="positive" size="sm"/>
          </div>
          <div class="col-12 text-h6">
            مطالب پیشنهادی
          </div>
          <div class="col-12 row" style="overflow:hidden">
            <div
              ref="scroller"
              v-touch-pan.mouse="handlePan"
              class="col-12 q-pb-md scroll-x no-scrollbar prevPostScroller"
              style="overflow-y: hidden"
            >
              <div class="row fit justify-start items-center no-wrap">
                <div v-for="i in 12" :key="i" style="width: 300px" class="col-4 q-pl-xs q-pr-sm">
                  <q-card class="r15" flat bordered>
                    <q-img
                      class="prevPostPic"
                      draggable="false"
                      src="https://cdn.quasar.dev/img/mountains.jpg"
                    />
                    <q-card-section style="height: 90px">
                      <div
                        class="zerospace prevPostTitle text-grey-9"
                      >نمونه عنوان پست که شاید طولانی در سه خط باشد و باید یا شاید باز یا شاید که سه خط شود ست شود به طور کلی</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 q-gutter-y-md">
            <q-card class="my-card shadow-1">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>مهیار موری</q-item-label>
                  <q-item-label caption>
                    20 فروردین 1399
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-card-section horizontal>
                <q-card-section class="text-justify">
                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </q-card-section>
              </q-card-section>

              <q-card-section class="column items-end">
                <q-btn icon="reply" color="positive" unelevated dense round size="sm"></q-btn>
              </q-card-section>
            </q-card>
            <div class="row justify-end">
              <div class="col-11">
                <q-card class="my-card shadow-1">
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>مهیار موری</q-item-label>
                      <q-item-label caption>
                        20 فروردین 1399
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-card-section horizontal>
                    <q-card-section class="text-justify">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </q-card-section>
                  </q-card-section>

                  <q-card-section class="column items-end">
                    <q-btn icon="reply" color="positive" round unelevated dense size="sm"></q-btn>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
          <div class="col-12 q-gutter-x-sm">
            <q-icon name="ion-chatbubbles" size="sm" color="grey-7"/><q-span>نظر دهید</q-span>
          </div>
          <div class="col-12">
            <div class="row q-col-gutter-sm">
              <div class="col-4 q-gutter-y-sm">
                <q-input outlined dense color="positive" label="نام"/>
                <q-input outlined dense color="positive" label="ایمیل"/>
                <q-btn label="ارسال پیام" class="full-width" color="positive" unelevated/>
              </div>
              <div class="col-8">
                <q-input outlined dense color="positive" type="textarea" label="پیام"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  mounted () {
    this.scrollerWidth = this.$refs.scroller.clientWidth
    this.scrollerMax = this.$refs.scroller.scrollWidth - this.scrollerWidth
    this.scrollerCurrent = this.scrollerMax
  },
  methods: {
    handlePan ({ evt, ...info }) {
      if (this.$q.platform.is.desktop) {
        this.info = info
        if (info.isFirst) {
          this.panning = true
          this.scrollerCurrent = this.$refs.scroller.scrollLeft
          this.clientFirstX = evt.clientX
        } else if (info.isFinal) {
          this.panning = false
        }
        this.deltaX = evt.clientX - this.clientFirstX
        this.$refs.scroller.scrollLeft = this.scrollerCurrent - this.deltaX
      }
    },
    objectLeft () {
      this.scrollerCurrent = this.$refs.scroller.scrollLeft
      const delta = this.scrollerCurrent - 300
      this.$refs.scroller.scrollTo({
        left: delta,
        behavior: 'smooth'
      })
    },
    objectRight () {
      this.scrollerCurrent = this.$refs.scroller.scrollLeft
      const delta = this.scrollerCurrent + 300
      this.$refs.scroller.scrollTo({
        left: delta,
        behavior: 'smooth'
      })
    }
  }
}
</script>
