<template>
  <q-page>
    <div class="row window-height">
      <div class="col-12 col-sm-4 q-pa-xl md">
        <q-img class="full-height full-width rounded-borders shadow-6" src="/img/light.jpg"/>
      </div>
      <div class="col-12 col-sm-7 flex flex-center">
        <div class="row">
          <div class="col-12">
            <q-card flat class="transparent my-card q-pa-md q-mr-xl">
              <q-card-section class="xs text-center">
                <q-img width="270px" ratio="1" src="/img/light.jpg" class="r-15"/>
              </q-card-section>
              <q-card-section class="text-h6">
                سلام ، خوش اومدید !
              </q-card-section>

              <q-card-section>
                <div class="text-h6 text-body6 text-bold text-positive">امین موری</div>
              </q-card-section>

              <q-card-section class="text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </q-card-section>

              <q-card-section>
                <q-btn class="q-pt-xs q-pb-xs q-pl-md q-pr-md" rounded unelevated color="positive" icon-right="person" label="درباره من"/>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
